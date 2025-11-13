package com.cybersamajh.controllers;

import com.cybersamajh.dto.login.LoginRequestDto;
import com.cybersamajh.dto.login.LoginResponseDto;
import com.cybersamajh.dto.signup.SignupRequestDto;
import com.cybersamajh.dto.signup.SignupResponseDto;
import com.cybersamajh.services.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<SignupResponseDto> signup(@RequestBody SignupRequestDto signupRequestDto){
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.signup(signupRequestDto));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginRequestDto loginRequestDto){
        return ResponseEntity.status(HttpStatus.OK).body(authService.login(loginRequestDto));
    }
}
