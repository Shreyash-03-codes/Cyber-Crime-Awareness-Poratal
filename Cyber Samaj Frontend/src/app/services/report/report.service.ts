// services/report.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://localhost:8080/v1/api/report';

    private adminBaseUrl = 'http://localhost:8080/v1/api/admin';
  constructor(private http: HttpClient) { }

  reportCrime(data: FormData): Observable<any> {
    // Get token directly
    const token = localStorage.getItem('token');
    
    // Create headers manually
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    // Send request with manual headers
    return this.http.post(`${this.baseUrl}/complaint`, data, { 
      headers: headers 
    });
  }

  getAllReports(): Observable<any> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get(`${this.baseUrl}/complaints`, { headers: headers });
  }
 getAllComplaints(): Observable<any> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get(`${this.adminBaseUrl}/allcomplaints`, { headers: headers });
  }

  resolvedComplaint(complaintId: number): Observable<any> {
  const token = localStorage.getItem('token');
  let headers = new HttpHeaders();
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.put(
    `${this.adminBaseUrl}/resolvecomplaint/${complaintId}`,
    {},
    { headers: headers, responseType: 'text' as 'json' }  // ✅ correct placement
  );
}

progressComplaint(complaintId: number): Observable<any> {
  const token = localStorage.getItem('token');
  let headers = new HttpHeaders();
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.put(
    `${this.adminBaseUrl}/progresscomplaint/${complaintId}`,
    {},
    { headers: headers, responseType: 'text' as 'json' }  // ✅ correct placement
  );
}

closeComplaint(complaintId: number): Observable<any> {
  const token = localStorage.getItem('token');
  let headers = new HttpHeaders();
  if (token) {
    headers = headers.set('Authorization', `Bearer ${token}`);
  }
  return this.http.put(
    `${this.adminBaseUrl}/closecomplaint/${complaintId}`,
    {},
    { headers: headers, responseType: 'text' as 'json' }  // ✅ correct placement
  );
}

}