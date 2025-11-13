package com.cybersamajh.dto.signup;

public class SignupResponseDto {
    private String msg;

    public SignupResponseDto(String msg) {
        this.msg = msg;
    }

    public SignupResponseDto() {
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
