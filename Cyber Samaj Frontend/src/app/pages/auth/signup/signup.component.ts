import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { SignInWithGoogleComponent } from "../sign-in-with-google/sign-in-with-google.component";
import { SignInWithInstagramComponent } from "../sign-in-with-instagram/sign-in-with-instagram.component";
import { AuthService } from '../../../services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, ReactiveFormsModule, SignInWithGoogleComponent, SignInWithInstagramComponent]
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) {}

  ngOnInit(): void {

    const user=localStorage.getItem("user");
    const token=localStorage.getItem("token");
    if(user && token){
      this.router.navigateByUrl('/home');
    }
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.errorMessage = 'Please fix errors before submitting.';
      return;
    }

    this.successMessage = 'Signup successful!';
    this.errorMessage = '';
    console.log(this.signupForm.value);

     const signupData = {
      name: this.signupForm.value.name,
      username: this.signupForm.value.username,
      password: this.signupForm.value.password
    };

    this.authService.register(signupData).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.successMessage = 'Registration successful!';
        this.errorMessage = '';
        this.signupForm.reset();
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
      }
    });

  }
}
