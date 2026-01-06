package com.openqa.openqa_backend.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(
            String name,
            String email,
            String serviceNeeded,
            String message
    ) {

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo("openqaitservices@gmail.com");
        mail.setSubject("New Contact Form Submission - Codmigo Solutions");

        mail.setText(
                "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Service Needed: " + serviceNeeded + "\n\n" +
                        "Message:\n" + message
        );

        // ✅ OPTION 2: SAFE EMAIL FAILURE HANDLING
        try {
            mailSender.send(mail);
            System.out.println("✅ Contact email sent successfully");
        } catch (Exception e) {
            System.out.println("❌ Email error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
