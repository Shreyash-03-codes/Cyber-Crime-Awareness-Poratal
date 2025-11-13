package com.cybersamajh.utils.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET="ajdhf7web2j59fndgw6cjblgppjsnfhgdrd84nfmvgond9wcgcytfrjvsmcd7f5vn5fufnf9cdnfkgof893hfnvksmdnvufngvhd4dhgngirnfbhvhsvqfmfc7";
    private final Integer EXPIRATION=1000*60*60;

    private SecretKey getSecretKey(){
        return Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(String username){
        return Jwts
                .builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+EXPIRATION))
                .signWith(getSecretKey())
                .compact();
    }

    private Claims getClaims(String username){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSecretKey())
                .build()
                .parseClaimsJws(username)
                .getBody();
    }

    public String extractUsername(String token){
        return getClaims(token).getSubject();
    }

    private boolean tokenExpired(String token){
        return getClaims(token).getExpiration().before(new Date());
    }

    public boolean validateToken(String username, UserDetails user,String token){
        return username.equals(user.getUsername()) && !tokenExpired(token);
    }
}
