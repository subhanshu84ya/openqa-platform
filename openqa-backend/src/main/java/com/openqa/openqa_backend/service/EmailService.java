package com.openqa.openqa_backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Service
public class EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    private final JavaMailSender mailSender;

    @Value("${SENDGRID_API_KEY:}")
    private String sendgridApiKey;

    @Value("${SENDGRID_FROM:openqaitservices@gmail.com}")
    private String sendgridFrom;

    @Value("${spring.mail.password:}")
    private String springMailPassword;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(
            String name,
            String email,
            String serviceNeeded,
            String message
    ) {

        // Determine SendGrid API key: prefer explicit SENDGRID_API_KEY, fall back to SPRING_MAIL_PASSWORD if it looks like a SendGrid key
        String effectiveSendGridKey = sendgridApiKey;
        if ((effectiveSendGridKey == null || effectiveSendGridKey.isBlank()) && springMailPassword != null && springMailPassword.startsWith("SG.")) {
            effectiveSendGridKey = springMailPassword;
        }

        // If SendGrid API key present use HTTP API (avoids SMTP port blocking)
        if (effectiveSendGridKey != null && !effectiveSendGridKey.isBlank()) {
            sendViaSendGrid(effectiveSendGridKey, name, email, serviceNeeded, message);
            return;
        }

        // Fallback to JavaMailSender (SMTP)
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo("openqaitservices@gmail.com");
        mail.setSubject("New Contact Form Submission - Codmigo Solutions");

        mail.setText(
                "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Service Needed: " + serviceNeeded + "\n\n" +
                        "Message:\n" + message
        );

        try {
            mailSender.send(mail);
            logger.info("✅ Contact email sent successfully via SMTP");
        } catch (Exception e) {
            logger.error("❌ Email error (SMTP): {}", e.getMessage(), e);
        }
    }

    private void sendViaSendGrid(String apiKey, String name, String email, String serviceNeeded, String messageBody) {
        try {
            HttpClient client = HttpClient.newHttpClient();
            String json = buildSendGridPayload(name, email, serviceNeeded, messageBody);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.sendgrid.com/v3/mail/send"))
                    .timeout(Duration.ofSeconds(10))
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(json))
                    .build();

            HttpResponse<String> resp = client.send(request, HttpResponse.BodyHandlers.ofString());

            if (resp.statusCode() >= 200 && resp.statusCode() < 300) {
                logger.info("✅ Contact email sent successfully via SendGrid (status={})", resp.statusCode());
            } else {
                logger.error("❌ SendGrid API responded with status {}: {}", resp.statusCode(), resp.body());
            }

        } catch (Exception e) {
            logger.error("❌ Email error (SendGrid HTTP): {}", e.getMessage(), e);
        }
    }

    private String buildSendGridPayload(String name, String email, String serviceNeeded, String messageBody) {
        // Minimal SendGrid v3 payload
        String subject = "New Contact Form Submission - Codmigo Solutions";
        String content = "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Service Needed: " + serviceNeeded + "\n\n" +
                "Message:\n" + messageBody;

        // Build JSON by hand to avoid adding a JSON dependency
        String payload = "{"
                + "\"personalizations\":[{\"to\":[{\"email\":\"openqaitservices@gmail.com\"}]}],"
                + "\"from\":{\"email\":\"" + escapeJson(sendgridFrom) + "\"},"
                + "\"subject\":\"" + escapeJson(subject) + "\","
                + "\"content\":[{\"type\":\"text/plain\",\"value\":\"" + escapeJson(content) + "\"}]"
                + "}";

        return payload;
    }

    // Minimal JSON string escaper for our payload
    private String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n");
    }
}
