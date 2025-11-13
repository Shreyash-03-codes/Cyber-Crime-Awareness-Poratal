package com.cybersamajh.services.complaint;

import com.cybersamajh.dto.complaint.ComplainResponseDto;
import com.cybersamajh.dto.complaint.ComplaintRequestDto;
import com.cybersamajh.dto.complaint.GetComplaintResponseDto;
import com.cybersamajh.entity.Complaint;
import com.cybersamajh.entity.User;
import com.cybersamajh.enums.Status;
import com.cybersamajh.repository.ComplaintRepository;
import com.cybersamajh.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;
import java.util.Objects;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;
    @Autowired
    private UserRepository userRepository;

    public ComplainResponseDto reportComplaint(ComplaintRequestDto complaintRequestDto, UserDetails user) throws IOException {
        User u=userRepository.findByUsername(user.getUsername()).get();
        Complaint complaint=new Complaint(complaintRequestDto.getComplaintType(),complaintRequestDto.getDescription(),null, Status.PENDING);
        complaint.setUser(u);
        Complaint saved=complaintRepository.save(complaint);
        if(complaintRequestDto.getImage()!=null && !complaintRequestDto.getImage().isEmpty()) {
            String url = uploadImage(complaintRequestDto.getImage(), saved.getId());
            saved.setImageUrl(url);
            complaintRepository.save(saved);
        }
        return new ComplainResponseDto("Complaint Reported Successfully!!!!");
    }

    private String uploadImage(MultipartFile file,Long id) throws IOException {


        String dir="uploads/complaints/";

        File f=new File(dir);

        if(!f.exists()){
            f.mkdirs();
        }

        String ext= Objects.requireNonNull(file.getOriginalFilename()).substring(file.getOriginalFilename().lastIndexOf("."));
        String name="complaint_"+id+ext;

        Path path= Paths.get(dir+name);
        Files.write(path,file.getBytes());

        return path.toString();
    }

    public List<GetComplaintResponseDto> getAllComplaints(UserDetails user){
        User u=userRepository.findByUsername(user.getUsername()).get();

        List<Complaint> complaints=u.getComplaints();


        List<GetComplaintResponseDto> allComplaints=complaints.stream().map(
                c-> {
                    GetComplaintResponseDto dto = new GetComplaintResponseDto();
                    dto.setComplaintType(c.getComplaintType());
                    dto.setDescription(c.getDescription());
                    dto.setStatus(c.getStatus());
                    try{
                        if(c.getImageUrl()!=null){
                            Path path=Paths.get(c.getImageUrl());
                            byte[]imgByte=Files.readAllBytes(path);
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
}
