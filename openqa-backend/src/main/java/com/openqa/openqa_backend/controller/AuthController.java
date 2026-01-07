package com.openqa.openqa_backend.controller;

import com.openqa.openqa_backend.entity.User;
import com.openqa.openqa_backend.repository.UserRepository;
import com.openqa.openqa_backend.security.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository,
                          JwtUtil jwtUtil,
                          PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/test")
    public String test() {
        return "WORKING";
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {

        Optional<User> user = userRepository.findByUsername(loginRequest.getUsername());

        if (user.isEmpty()) {
            return ResponseEntity.status(401).body("User not found");
        }

        if (!passwordEncoder.matches(
                loginRequest.getPassword(),
                user.get().getPassword())) {

            return ResponseEntity.status(401).body("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.get().getUsername());
        return ResponseEntity.ok(token);
    }
}
