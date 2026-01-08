FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY . .

# Give execute permission to mvnw
RUN chmod +x mvnw

# Build the application
RUN ./mvnw clean package -DskipTests

EXPOSE 10000

CMD ["java", "-jar", "target/openqa-backend-0.0.1-SNAPSHOT.jar"]
