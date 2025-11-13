package com.cybersamajh.dto.complaint;

public class ComplainResponseDto {
    private String msg;

    public ComplainResponseDto(String msg) {
        this.msg = msg;
    }

    public ComplainResponseDto() {
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
