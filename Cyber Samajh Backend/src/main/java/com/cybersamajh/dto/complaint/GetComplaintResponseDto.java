package com.cybersamajh.dto.complaint;

import com.cybersamajh.enums.Status;

public class GetComplaintResponseDto {

    private long complaintId;
    private String complaintType;
    private String description;
    private String image;
    private Status status;


    public GetComplaintResponseDto(long complaintId,String complaintType, String description, String image,Status status) {
        this.complaintType = complaintType;
        this.description = description;
        this.image = image;
        this.status=status;
        this.complaintId=complaintId;
    }

    public GetComplaintResponseDto() {
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public long getComplaintId() {
        return complaintId;
    }

    public void setComplaintId(long complaintId) {
        this.complaintId = complaintId;
    }
}
