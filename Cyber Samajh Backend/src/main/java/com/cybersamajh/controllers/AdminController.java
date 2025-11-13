package com.cybersamajh.controllers;

import com.cybersamajh.dto.complaint.GetComplaintResponseDto;
import com.cybersamajh.services.admin.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/allcomplaints")
    public ResponseEntity<List<GetComplaintResponseDto>> allComplaints() {
        return ResponseEntity.status(HttpStatus.OK).body(adminService.getAllComplaints());
    }

    @PutMapping("/progresscomplaint/{complaintId}")
    public ResponseEntity<String> markInProgress(@PathVariable Long complaintId) {
        adminService.updateComplaintStatus(complaintId, "IN_PROGRESS");
        return ResponseEntity.status(HttpStatus.OK).body("Complaint marked as In Progress");
    }

    @PutMapping("/resolvecomplaint/{complaintId}")
    public ResponseEntity<String> markResolved(@PathVariable Long complaintId) {
        adminService.updateComplaintStatus(complaintId, "RESOLVED");
        return ResponseEntity.status(HttpStatus.OK).body("Complaint marked as Resolved");
    }

    @PutMapping("/closecomplaint/{complaintId}")
    public ResponseEntity<String> markClosed(@PathVariable Long complaintId) {
        adminService.updateComplaintStatus(complaintId, "CLOSED");
        return ResponseEntity.status(HttpStatus.OK).body("Complaint marked as Closed");
    }
}
