import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const reload = localStorage.getItem('reload');

      // ✅ If user just logged in and not yet refreshed, trigger it once
      if (token && !reload) {
        localStorage.setItem('reload', 'true');
        window.location.reload();
      } 
      // ✅ After refresh, remove the flag so it doesn’t reload again
      else if (reload) {
        localStorage.removeItem('reload');
      }
    }
  }
}

