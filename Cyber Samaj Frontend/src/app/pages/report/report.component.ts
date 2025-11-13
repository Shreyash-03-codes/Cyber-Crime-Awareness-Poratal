import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportService } from '../../services/report/report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
  providers: [ReportService]
})
export class ReportComponent {
  reportForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  isSubmitting: boolean = false;
  submissionSuccess: boolean = false;
  submissionError: string = '';

  complaintTypes = [
    { value: 'PHISHING', label: 'Phishing Attack' },
    { value: 'MALWARE', label: 'Malware Infection' },
    { value: 'RANSOMWARE', label: 'Ransomware Attack' },
    { value: 'DATA_BREACH', label: 'Data Breach' },
    { value: 'IDENTITY_THEFT', label: 'Identity Theft' },
    { value: 'ONLINE_FRAUD', label: 'Online Fraud' },
    { value: 'CYBER_BULLYING', label: 'Cyber Bullying' },
    { value: 'SOCIAL_MEDIA_SCAM', label: 'Social Media Scam' },
    { value: 'CRYPTO_SCAM', label: 'Cryptocurrency Scam' },
    { value: 'OTHER', label: 'Other Cyber Crime' }
  ];

  constructor(
    private fb: FormBuilder,
    private reportService: ReportService,
    private router: Router
  ) {
    this.reportForm = this.fb.group({
      complaintType: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        this.showError('Please select a valid image file (JPEG, PNG, GIF)');
        return;
      }

      // Validate file size (5MB max)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        this.showError('File size must be less than 5MB');
        return;
      }

      this.selectedFile = file;
      this.submissionError = '';

      // Create image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(): void {
    this.selectedFile = null;
    this.imagePreview = null;
  }

  onSubmit(): void {
    if (this.reportForm.invalid) {
      this.markFormGroupTouched();
      this.showError('Please fill all required fields correctly');
      return;
    }

    this.isSubmitting = true;
    this.submissionError = '';

    const formData = new FormData();
    formData.append('complaintType', this.reportForm.get('complaintType')?.value);
    formData.append('description', this.reportForm.get('description')?.value);
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.reportService.reportCrime(formData).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        this.showSuccess('Report submitted successfully! Our team will review it shortly.');
        
        // Reset form
        this.reportForm.reset();
        this.selectedFile = null;
        this.imagePreview = null;

        // Navigate to home after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/all-reports']);
        }, 3000);
      },
      error: (error: any) => {
        this.isSubmitting = false;
        
        if (error.status === 403) {
          this.showError('Access denied. Please make sure you are logged in.');
        } else if (error.status === 401) {
          this.showError('Session expired. Please login again.');
        } else if (error.status === 400) {
          this.showError(error.error?.message || 'Invalid data. Please check your inputs.');
        } else {
          this.showError(error.error?.message || 'Failed to submit report. Please try again later.');
        }
        
        console.error('Report submission error:', error);
      }
    });
  }

  private showSuccess(message: string): void {
    this.submissionSuccess = true;
    this.submissionError = '';
    
    // Auto hide success message after 5 seconds
    setTimeout(() => {
      this.submissionSuccess = false;
    }, 5000);
  }

  private showError(message: string): void {
    this.submissionError = message;
    this.submissionSuccess = false;
    
    // Auto hide error message after 5 seconds
    setTimeout(() => {
      this.submissionError = '';
    }, 5000);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.reportForm.controls).forEach(key => {
      const control = this.reportForm.get(key);
      control?.markAsTouched();
    });
  }

  get complaintType() {
    return this.reportForm.get('complaintType');
  }

  get description() {
    return this.reportForm.get('description');
  }
}