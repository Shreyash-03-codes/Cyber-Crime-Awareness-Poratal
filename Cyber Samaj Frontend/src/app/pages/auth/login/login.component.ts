import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInWithGoogleComponent } from "../sign-in-with-google/sign-in-with-google.component";
import { SignInWithInstagramComponent } from "../sign-in-with-instagram/sign-in-with-instagram.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [SignInWithGoogleComponent, SignInWithInstagramComponent,ReactiveFormsModule,CommonModule]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router,private authService:AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    
    const user=localStorage.getItem("user");
    const token=localStorage.getItem("token");
    if(user && token){
      this.router.navigateByUrl('/home');
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
       
        this.router.navigateByUrl('/home'); // Redirect after login
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Login failed. Check credentials.';
        this.successMessage = '';
      }
    });
  }
}
