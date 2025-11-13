# 🛡️ CyberSamajh – Cyber Crime Awareness Portal

### 📖 Overview
In today’s digital age, technology and internet usage have grown rapidly, providing immense convenience but also increasing exposure to cyber threats such as phishing, identity theft, hacking, and online frauds. Many individuals lack awareness about cyber security, leaving them vulnerable to these attacks.

**CyberSamajh** is a digital platform developed to spread awareness about cyber crimes, educate users on safe online practices, and allow secure reporting of cyber incidents. The platform aims to build a more informed and cyber-aware society.

---

## 🎯 Objectives

- To educate citizens about cyber crimes and preventive measures.  
- To provide real-time, expert-verified cyber security news updates.  
- To enable secure and user-friendly cyber incident reporting.  
- To help administrators manage and verify reports efficiently.  
- To promote digital literacy and contribute to India’s Digital Safety Mission.

---

## 🧩 Problem Statement

> “With the growing dependence on digital platforms, cyber crimes like phishing, data theft, and online frauds are increasing rapidly. There is a need for a digital platform that spreads cyber awareness and allows users to report incidents securely.”

---

## 🏗️ System Architecture

The project is designed using a **Three-Tier Architecture** for scalability and maintainability.

| Layer | Technology Used | Description |
|-------|------------------|-------------|
| **Frontend** | Angular | Provides an interactive and user-friendly web interface for users and administrators. |
| **Backend** | Spring Boot (Java) | Handles business logic, authentication, and communication with the database. |
| **Database** | MySQL | Stores user data, cyber reports, and news articles securely. |

---

## 🔒 Key Features

### 👥 User Side
- User registration and authentication using JWT.
- Educational content about various cyber crimes.
- Verified cyber news and awareness articles.
- Secure cyber incident reporting.
- Responsive and user-friendly design.

### 🧑‍💼 Admin Side
- Dashboard for managing users and reports.
- Verification of submitted incidents.
- Content management for news and awareness materials.
- Role-based access control.

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | Angular |
| **Backend** | Spring Boot, REST API |
| **Database** | MySQL |
| **Security** | Spring Security, JWT Authentication |
| **Build Tools** | Maven |
| **Version Control** | Git & GitHub |

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js & Angular CLI  
- JDK 17+  
- Maven  
- MySQL Server  

### Steps

#### 🔹 Backend (Spring Boot)
```bash
# Navigate to the backend directory
cd CyberSamajh-Backend

# Configure MySQL credentials in application.properties
spring.datasource.username=yourUsername
spring.datasource.password=yourPassword

# Run the backend
mvn spring-boot:run
