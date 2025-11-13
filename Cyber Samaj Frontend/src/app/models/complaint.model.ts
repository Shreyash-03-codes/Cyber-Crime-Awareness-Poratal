export interface Complaint {
  complaintId?: string;
  complaintType: string;
  description: string;
  image: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED'; // Adjust based on your Status enum
  createdAt?: string;
}
export interface ApiResponse {
  success: boolean;
  data: Complaint[];
  message?: string;
}