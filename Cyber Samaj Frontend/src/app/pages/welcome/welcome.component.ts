import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private router:Router) {}
  
  ngOnInit() {

     if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('user');
      if(user){
        this.router.navigate(['/home']);
      }
  }

  }

}
