package com.openqa.openqa_backend.controller;

import com.openqa.openqa_backend.entity.ContactMessage;
import com.openqa.openqa_backend.repository.ContactMessageRepository;
import com.openqa.openqa_backend.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001", "https://openqa-backend.onrender.com", "https://openqa-platform.vercel.app"})
public class ContactController {

    private final ContactMessageRepository repository;
    private final EmailService emailService;

    public ContactController(ContactMessageRepository repository,
                             EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<?> submitContact(
            @Valid @RequestBody ContactMessage message) {

        repository.save(message);

        // ✅ Send email
        emailService.sendContactEmail(
                message.getName(),
                message.getEmail(),
                message.getService(),
                message.getMessage()
        );

        return ResponseEntity.ok("Message received successfully");
    }
}
