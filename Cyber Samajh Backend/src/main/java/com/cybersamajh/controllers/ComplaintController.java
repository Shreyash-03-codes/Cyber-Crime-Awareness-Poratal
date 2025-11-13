package com.cybersamajh.controllers;

import com.cybersamajh.dto.complaint.ComplainResponseDto;
import com.cybersamajh.dto.complaint.ComplaintRequestDto;
import com.cybersamajh.dto.complaint.GetComplaintResponseDto;
import com.cybersamajh.services.complaint.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/v1/api/report")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;


    @PostMapping("/complaint")
    public ResponseEntity<ComplainResponseDto> reportComplaint(@ModelAttribute ComplaintRequestDto complaintRequestDto, @AuthenticationPrincipal UserDetails user) throws IOException {
        return ResponseEntity.status(HttpStatus.CREATED).body(complaintService.reportComplaint(complaintRequestDto,user));
    }

    @GetMapping("/complaints")
    public ResponseEntity<List<GetComplaintResponseDto>> getAllComplaints(@AuthenticationPrincipal UserDetails userDetails){
        return ResponseEntity.status(HttpStatus.OK).body(complaintService.getAllComplaints(userDetails));
    }
}
