package com.openqa.openqa_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.openqa.openqa_backend.repository")
@EntityScan(basePackages = "com.openqa.openqa_backend.entity")
public class OpenqaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(OpenqaBackendApplication.class, args);
	}
}

