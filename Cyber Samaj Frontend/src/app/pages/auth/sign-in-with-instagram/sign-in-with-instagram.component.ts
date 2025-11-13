import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sign-in-with-instagram',
  templateUrl: './sign-in-with-instagram.component.html',
  styleUrls: ['./sign-in-with-instagram.component.css'],
  imports:[CommonModule]
})
export class SignInWithInstagramComponent implements OnInit {

  private clientId = 'YOUR_INSTAGRAM_CLIENT_ID';
  private redirectUri = 'http://localhost:4200/instagram-callback';
  private scope = 'user_profile,user_media';
  accessToken: string | null = null;
  user: any = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only run in browser
      const hash = window.location.hash.substr(1); // remove #
      const params = new URLSearchParams(hash);
      this.accessToken = params.get('access_token');

      if (this.accessToken) {
        fetch(`https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${this.accessToken}`)
          .then(res => res.json())
          .then(data => this.user = data)
          .catch(err => console.error('Instagram API error:', err));
      }
    }
  }

  signInWithInstagram(): void {
    if (isPlatformBrowser(this.platformId)) {
      const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${this.scope}&response_type=token`;
      window.location.href = instagramAuthUrl; // Redirect user
    }
  }
}
