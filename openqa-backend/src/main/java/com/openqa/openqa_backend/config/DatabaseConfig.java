package com.openqa.openqa_backend.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

/**
 * Enable JPA repositories and entity scanning only when `app.db.enabled=true`.
 * This keeps the application runnable when a local DB is not available.
 */
@Configuration
@ConditionalOnProperty(name = "app.db.enabled", havingValue = "true", matchIfMissing = false)
@EnableJpaRepositories(basePackages = "com.openqa.openqa_backend.repository")
@EntityScan(basePackages = "com.openqa.openqa_backend.entity")
public class DatabaseConfig {

}
