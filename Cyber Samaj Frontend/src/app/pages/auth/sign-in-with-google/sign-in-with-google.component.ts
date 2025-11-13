import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth-service.service';

declare var google: any;

@Component({
  selector: 'app-sign-in-with-google',
  standalone: true,
  imports: [],
  templateUrl: './sign-in-with-google.component.html',
  styleUrls: ['./sign-in-with-google.component.css']
})
export class SignInWithGoogleComponent implements OnInit, AfterViewInit {

  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeGoogleSignIn();
    }
  }

  private initializeGoogleSignIn(): void {
    try {
      google.accounts.id.initialize({
        client_id: '859169283273-bl45j8u8ptks35272vof4s6t30svai4b.apps.googleusercontent.com',
        callback: (response: any) => this.handleResponse(response),
        error_callback: (error: any) => this.handleError(error)
      });

      const buttonElement = document.getElementById('googleBtn');
      if (buttonElement) {
        google.accounts.id.renderButton(
  buttonElement,
  { theme: 'filled_blue', size: 'large', width: '100%', type: 'standard' }
);

        // google.accounts.id.prompt(); // Optional One Tap
      }
    } catch (error) {
      console.error('Error initializing Google Sign-In:', error);
    }
  }

  private handleResponse(response: any): void {
    if (!response || !response.credential) {
      console.error('Invalid Google response');
      return;
    }

    const token = response.credential;
    const payload = this.decodeJwt(token);

    const DEFAULT_PASSWORD = "Google@123";

    const loginData = { email: payload.email, password: DEFAULT_PASSWORD };
    const userData = { email: payload.email, name: payload.name, password: DEFAULT_PASSWORD };

    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.jwtToken);
        localStorage.setItem('user', res.username);
        this.router.navigateByUrl("/home");
      },
      error: () => {
        // this.authService.signup(userData).subscribe({
        //   next: (res: any) => {
        //     localStorage.setItem('token', res.jwtToken);
        //     localStorage.setItem('user', res.username);
        //     this.router.navigateByUrl("/home");
        //   },
        //   error: (err: any) => console.error('Signup failed:', err)
        // });
      }
    });
  }

  private handleError(error: any): void {
    console.error('Google Sign-In error:', error);
    if (error.type === 'popup_closed') {
      console.log('User closed the popup');
    } else if (error.type === 'access_denied') {
      console.log('User denied permission');
    }
  }

  private decodeJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return {};
    }
  }
}
