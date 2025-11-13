package com.cybersamajh.dto.complaint;

import org.springframework.web.multipart.MultipartFile;

public class ComplaintRequestDto {

    private String complaintType;
    private String description;
    private MultipartFile image;

    public ComplaintRequestDto(String complaintType, String description, MultipartFile image) {
        this.complaintType = complaintType;
        this.description = description;
        this.image = image;
    }

    public ComplaintRequestDto() {
    }


    public String getComplaintType() {
        return complaintType;
    }

    public void setComplaintType(String complaintType) {
        this.complaintType = complaintType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }
}
