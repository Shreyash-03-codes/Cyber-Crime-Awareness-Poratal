// src/app/components/all-report/all-report.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Complaint } from '../../models/complaint.model';
import { ReportService } from '../../services/report/report.service';

@Component({
  selector: 'app-all-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-report.component.html',
  styleUrls: ['./all-report.component.css']
})
export class AllReportComponent implements OnInit {
  complaints: Complaint[] = [];
  loading: boolean = false;
  error: string = '';
  filteredComplaints: Complaint[] = [];
  statusFilter: string = 'ALL';

  // Count properties for template
  pendingCount: number = 0;
  inProgressCount: number = 0;
  resolvedCount: number = 0;
  closedCount: number = 0;

  constructor(private complaintService: ReportService) {}

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    this.loading = true;
    this.error = '';

    this.complaintService.getAllReports().subscribe({
      next: (data: any) => {
        this.complaints = data;
        this.filteredComplaints = data;
        this.calculateStatusCounts();
        this.loading = false;
        console.log('Loaded complaints:', data); // Debug log
      },
      error: (error: any) => {
        this.error = 'Failed to load complaints. Please try again.';
        this.loading = false;
        console.error('Error loading complaints:', error);
      }
    });
  }

  calculateStatusCounts(): void {
    this.pendingCount = this.complaints.filter(c => c.status === 'PENDING').length;
    this.inProgressCount = this.complaints.filter(c => c.status === 'IN_PROGRESS').length;
    this.resolvedCount = this.complaints.filter(c => c.status === 'RESOLVED').length;
    this.closedCount = this.complaints.filter(c => c.status === 'CLOSED').length;
  }

  filterByStatus(status: string): void {
    this.statusFilter = status;
    if (status === 'ALL') {
      this.filteredComplaints = this.complaints;
    } else {
      this.filteredComplaints = this.complaints.filter(
        complaint => complaint.status === status
      );
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'PENDING': return 'status-pending';
      case 'IN_PROGRESS': return 'status-in-progress';
      case 'RESOLVED': return 'status-resolved';
      case 'CLOSED': return 'status-closed';
      default: return 'status-default';
    }
  }

  getStatusText(status: string): string {
    return status.replace('_', ' ').toLowerCase();
  }

  viewImage(imageData: string): void {
    console.log('Image data received:', imageData ? `Length: ${imageData.length}, First 50 chars: ${imageData.substring(0, 50)}` : 'No image data');
    
    if (imageData) {
      try {
        // Remove any existing data URL prefix if present
        let cleanImageData = imageData;
        if (imageData.startsWith('data:')) {
          const base64Index = imageData.indexOf('base64,');
          if (base64Index !== -1) {
            cleanImageData = imageData.substring(base64Index + 7);
          }
        }

        // Create the data URL with proper format
        const imageUrl = `data:image/jpeg;base64,${cleanImageData}`;
        console.log('Opening image URL:', imageUrl.substring(0, 100) + '...');
        
        // Open in new window
        const newWindow = window.open('', '_blank');
        if (newWindow) {
          newWindow.document.write(`
            <html>
              <head><title>Complaint Image</title></head>
              <body style="margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f0f0f0;">
                <img src="${imageUrl}" style="max-width: 90vw; max-height: 90vh; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);" 
                     onerror="console.error('Failed to load image')" 
                     alt="Complaint Image">
              </body>
            </html>
          `);
          newWindow.document.close();
        }
      } catch (error) {
        console.error('Error opening image:', error);
        alert('Error opening image. Please check the console for details.');
      }
    } else {
      console.warn('No image data available');
      alert('No image available for this complaint.');
    }
  }

  refreshComplaints(): void {
    this.loadComplaints();
  }

  // Alternative method to test image display
  testImage(imageData: string): boolean {
    if (!imageData) return false;
    
    // Check if it's a valid base64 string
    const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
    const cleanData = imageData.replace(/^data:image\/[a-z]+;base64,/, '');
    
    return base64Regex.test(cleanData) && cleanData.length > 0;
  }

  // Add this method to your component class
onImageError(event: any): void {
  console.error('Error loading image preview:', event);
  const imgElement = event.target;
  imgElement.style.display = 'none';
}
}