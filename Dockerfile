# ==============================================================================
# Multi-Stage Dockerfile for Stock Management System
# Base Image: Eclipse Temurin OpenJDK 21 (LTS)
# Security: Runs as unprivileged non-root user (spring:spring)
# Performance: Container-aware JVM memory tuning & Layer Caching
# ==============================================================================

# ------------------------------------------------------------------------------
# Stage 1: Build & Package
# ------------------------------------------------------------------------------
FROM eclipse-temurin:21-jdk-jammy AS builder

WORKDIR /build

# Copy Maven Wrapper and POM first to leverage Docker layer caching
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Grant execute permissions to maven wrapper
RUN chmod +x mvnw

# Copy source code and build production executable JAR
COPY src src
RUN ./mvnw clean package -DskipTests -B

# ------------------------------------------------------------------------------
# Stage 2: Minimal Production Runtime
# ------------------------------------------------------------------------------
FROM eclipse-temurin:21-jre-jammy AS runner

# Install curl for container healthcheck & clean apt cache
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*

# Create secure non-root system user and group
RUN addgroup --system spring && adduser --system --ingroup spring spring

WORKDIR /app

# Copy executable jar from builder stage
COPY --from=builder --chown=spring:spring /build/target/*.jar /app/app.jar

# Switch to non-root user
USER spring:spring

# Expose default application port
EXPOSE 8080

# Configure container-aware JVM flags:
# - MaxRAMPercentage=75.0 prevents container OOM by limiting heap to 75% of container RAM
# - UseContainerSupport dynamically respects cgroup CPU/memory limits
# - java.security.egd avoids entropy starvation on virtualized cloud hosts
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0 -Djava.security.egd=file:/dev/./urandom"

# Healthcheck to verify the application is responding
HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:8080/api/v1/products || exit 1

# Execute application
ENTRYPOINT ["sh", "-c", "exec java $JAVA_OPTS -jar /app/app.jar"]
