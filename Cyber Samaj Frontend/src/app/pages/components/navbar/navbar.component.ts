import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports:[CommonModule,RouterLink]
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  username: string | null = null;
  adminLoggedIn: string | null = null;
  

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');


    if (token && user) {
      this.isLoggedIn = true;
      this.username = user;
      if(user==="admin@cybersamajh"){
        this.adminLoggedIn = user;
      }
    }
  }
}


  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.username = null;
      window.location.href = '/'; // redirect to home or login page
    }
  }
}
