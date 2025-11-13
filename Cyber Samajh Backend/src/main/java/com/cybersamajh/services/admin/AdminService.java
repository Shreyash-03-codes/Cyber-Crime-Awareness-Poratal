package com.cybersamajh.services.admin;

import com.cybersamajh.dto.complaint.GetComplaintResponseDto;
import com.cybersamajh.entity.Complaint;
import com.cybersamajh.entity.User;
import com.cybersamajh.enums.Status;
import com.cybersamajh.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

@Service
public class AdminService {

    @Autowired
    private ComplaintRepository complaintRepository;

    public List<GetComplaintResponseDto> getAllComplaints(){


        List<Complaint> complaints=complaintRepository.findAll();


        List<GetComplaintResponseDto> allComplaints=complaints.stream().map(
                c-> {
                    GetComplaintResponseDto dto = new GetComplaintResponseDto();
                    dto.setComplaintId(c.getId());
                    dto.setComplaintType(c.getComplaintType());
                    dto.setDescription(c.getDescription());
                    dto.setStatus(c.getStatus());
                    try{
                        if(c.getImageUrl()!=null){
                            Path path= Paths.get(c.getImageUrl());
                            byte[]imgByte= Files.readAllBytes(path);
                            String baseImg= Base64.getEncoder().encodeToString(imgByte);
                            dto.setImage(baseImg);
                        }
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    return dto;
                }

        ).toList();

        return allComplaints;

    }

    public void updateComplaintStatus(Long complaintId, String newStatus) {
        Complaint complaint = complaintRepository.findById(complaintId)
                .orElseThrow(() -> new RuntimeException("Complaint not found with ID: " + complaintId));

        complaint.setStatus(Status.valueOf(newStatus));
        complaintRepository.save(complaint);
    }
}
