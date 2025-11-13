import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class AdminLoginComponent implements OnInit {
  
   loginForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  showPassword:boolean=false;

  constructor(private fb: FormBuilder, private router: Router,private authService:AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    if(user=="admin@cybersamajh"){
        this.router.navigateByUrl('admin/admin-dashboard'); // Redirect after login

    }
    else if (token != null && user != null) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
    }
  }

 onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      this.successMessage = '';
      return;
    }

    const loginData = this.loginForm.value;

    // Replace with your backend login endpoint
    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.jwtToken);
        localStorage.setItem('user', res.username);
        this.successMessage = 'Login successful!';
        this.errorMessage = '';
       
        this.router.navigateByUrl('/admin/admin-dashboard'); // Redirect after login
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Login failed. Check credentials.';
        this.successMessage = '';
      }
    });
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loginForm.controls).forEach(key => {
      const control = this.loginForm.get(key);
      control?.markAsTouched();
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}