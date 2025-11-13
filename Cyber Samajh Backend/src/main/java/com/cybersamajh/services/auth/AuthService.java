package com.cybersamajh.services.auth;

import com.cybersamajh.dto.login.LoginRequestDto;
import com.cybersamajh.dto.login.LoginResponseDto;
import com.cybersamajh.dto.signup.SignupRequestDto;
import com.cybersamajh.dto.signup.SignupResponseDto;
import com.cybersamajh.entity.User;
import com.cybersamajh.enums.Role;
import com.cybersamajh.repository.UserRepository;
import com.cybersamajh.utils.jwt.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public SignupResponseDto signup(SignupRequestDto signupRequestDto){
        if(userRepository.findByUsername(signupRequestDto.getUsername()).isPresent()){
            throw new IllegalStateException("User already exists..!!");
        }

        User user=new User(signupRequestDto.getName(),signupRequestDto.getUsername(),passwordEncoder.encode(signupRequestDto.getPassword()), Role.USER);
        userRepository.save(user);
        return new SignupResponseDto("User registered Created Successfully...!!!");
    }

    public LoginResponseDto login(LoginRequestDto loginRequestDto){
        UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(loginRequestDto.getUsername(),loginRequestDto.getPassword());
        Authentication authenticated= authenticationManager.authenticate(authenticationToken);
        UserDetails user=(UserDetails) authenticated.getPrincipal();
        String token= jwtUtil.generateToken(user.getUsername());
        LoginResponseDto loginResponseDto=new LoginResponseDto(token,user.getUsername());
        return loginResponseDto;

    }

}
