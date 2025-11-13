import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  id: number;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  featured: boolean;
  externalUrl: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  imports: [CommonModule]
})
export class ArticlesComponent implements OnInit {
  articles= [
    {
      "id": 1,
      "title": "Understanding Phishing Attacks: How to Spot and Avoid Them",
      "summary": "Learn to identify common phishing techniques and protect your personal information from cybercriminals.",
      "category": "Phishing",
      "readTime": "5 min read",
      "date": "2024-01-15",
      "author": "Cyber Security Team",
      "tags": ["phishing", "email security", "social engineering"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Phishing"
    },
    {
      "id": 2,
      "title": "The Complete Guide to Strong Password Creation",
      "summary": "Discover best practices for creating and managing strong, unique passwords for all your online accounts.",
      "category": "Password Security",
      "readTime": "4 min read",
      "date": "2024-01-12",
      "author": "Security Experts",
      "tags": ["passwords", "authentication", "security"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Password_strength"
    },
    {
      "id": 3,
      "title": "Two-Factor Authentication: Why You Need It Now",
      "summary": "Understand how 2FA adds an extra layer of security to your online accounts and how to set it up.",
      "category": "Authentication",
      "readTime": "3 min read",
      "date": "2024-01-10",
      "author": "Auth Specialists",
      "tags": ["2FA", "authentication", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Multi-factor_authentication"
    },
    {
      "id": 4,
      "title": "Ransomware Protection: Prevention and Recovery Strategies",
      "summary": "Essential steps to protect your devices from ransomware attacks and what to do if you're infected.",
      "category": "Ransomware",
      "readTime": "6 min read",
      "date": "2024-01-08",
      "author": "Malware Analysis Team",
      "tags": ["ransomware", "malware", "recovery"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Ransomware"
    },
    {
      "id": 5,
      "title": "Social Engineering: The Human Side of Cybersecurity",
      "summary": "How attackers manipulate human psychology to gain access to sensitive information and systems.",
      "category": "Social Engineering",
      "readTime": "5 min read",
      "date": "2024-01-05",
      "author": "Psychology & Security",
      "tags": ["social engineering", "psychology", "awareness"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Social_engineering_(security)"
    },
    {
      "id": 6,
      "title": "Secure Wi-Fi Practices for Home and Office",
      "summary": "Best practices for securing your wireless networks against unauthorized access and attacks.",
      "category": "Network Security",
      "readTime": "4 min read",
      "date": "2024-01-03",
      "author": "Network Security",
      "tags": ["wifi", "network", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Wi-Fi_security"
    },
    {
      "id": 7,
      "title": "Mobile Security: Protecting Your Smartphone from Threats",
      "summary": "Essential security measures to keep your mobile devices and data safe from cyber threats.",
      "category": "Mobile Security",
      "readTime": "5 min read",
      "date": "2024-01-01",
      "author": "Mobile Security Team",
      "tags": ["mobile", "smartphone", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Mobile_security"
    },
    {
      "id": 8,
      "title": "Data Encryption: What It Is and Why It Matters",
      "summary": "Understanding encryption technologies and how they protect your sensitive information.",
      "category": "Encryption",
      "readTime": "6 min read",
      "date": "2023-12-28",
      "author": "Cryptography Experts",
      "tags": ["encryption", "data protection", "privacy"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Encryption"
    },
    {
      "id": 9,
      "title": "Identity Theft: Prevention and Early Detection",
      "summary": "Learn how to protect yourself from identity theft and recognize the warning signs early.",
      "category": "Identity Theft",
      "readTime": "5 min read",
      "date": "2023-12-25",
      "author": "Fraud Prevention",
      "tags": ["identity theft", "fraud", "prevention"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Identity_theft"
    },
    {
      "id": 10,
      "title": "VPN Security: Myths and Realities",
      "summary": "Understanding what VPNs can and cannot do for your online privacy and security.",
      "category": "VPN",
      "readTime": "4 min read",
      "date": "2023-12-22",
      "author": "Privacy Advocates",
      "tags": ["vpn", "privacy", "networking"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Virtual_private_network"
    },
    {
      "id": 11,
      "title": "Browser Security: Safe Web Browsing Practices",
      "summary": "Essential tips for secure web browsing and protecting against online threats.",
      "category": "Web Security",
      "readTime": "4 min read",
      "date": "2023-12-20",
      "author": "Web Security Team",
      "tags": ["browser", "web", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Internet_security"
    },
    {
      "id": 12,
      "title": "Cyberbullying: Recognition and Response",
      "summary": "Understanding cyberbullying and how to protect yourself and others online.",
      "category": "Online Safety",
      "readTime": "5 min read",
      "date": "2023-12-18",
      "author": "Safety Experts",
      "tags": ["cyberbullying", "safety", "awareness"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Cyberbullying"
    },
    {
      "id": 13,
      "title": "IoT Security: Protecting Smart Home Devices",
      "summary": "Security measures for Internet of Things devices in your home and workplace.",
      "category": "IoT Security",
      "readTime": "6 min read",
      "date": "2023-12-15",
      "author": "IoT Security",
      "tags": ["iot", "smart home", "devices"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Internet_of_things_security"
    },
    {
      "id": 14,
      "title": "Email Security Best Practices for Businesses",
      "summary": "Comprehensive email security strategies for organizations of all sizes.",
      "category": "Email Security",
      "readTime": "5 min read",
      "date": "2023-12-12",
      "author": "Business Security",
      "tags": ["email", "business", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Email_security"
    },
    {
      "id": 15,
      "title": "Dark Web Monitoring: What You Need to Know",
      "summary": "Understanding the dark web and how to monitor for your personal information.",
      "category": "Dark Web",
      "readTime": "7 min read",
      "date": "2023-12-10",
      "author": "Cyber Intelligence",
      "tags": ["dark web", "monitoring", "privacy"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Dark_web"
    },
    {
      "id": 16,
      "title": "Social Media Privacy Settings Guide",
      "summary": "Step-by-step guide to securing your social media accounts and protecting your privacy.",
      "category": "Social Media",
      "readTime": "4 min read",
      "date": "2023-12-08",
      "author": "Privacy Team",
      "tags": ["social media", "privacy", "settings"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Social_media_privacy"
    },
    {
      "id": 17,
      "title": "Financial Fraud: Online Banking Security",
      "summary": "Protecting your financial information and securing online banking activities.",
      "category": "Financial Security",
      "readTime": "5 min read",
      "date": "2023-12-05",
      "author": "Financial Security",
      "tags": ["banking", "finance", "fraud"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Online_banking"
    },
    {
      "id": 18,
      "title": "Zero Trust Security Model Explained",
      "summary": "Understanding the zero trust approach to cybersecurity and its implementation.",
      "category": "Enterprise Security",
      "readTime": "6 min read",
      "date": "2023-12-03",
      "author": "Enterprise Security",
      "tags": ["zero trust", "enterprise", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Zero_trust_security_model"
    },
    {
      "id": 19,
      "title": "Incident Response: What to Do After a Breach",
      "summary": "Step-by-step guide for responding to cybersecurity incidents effectively.",
      "category": "Incident Response",
      "readTime": "7 min read",
      "date": "2023-11-30",
      "author": "Incident Response Team",
      "tags": ["incident response", "breach", "recovery"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Incident_response"
    },
    {
      "id": 20,
      "title": "Cloud Security Best Practices",
      "summary": "Essential security measures for cloud services and storage platforms.",
      "category": "Cloud Security",
      "readTime": "5 min read",
      "date": "2023-11-28",
      "author": "Cloud Security",
      "tags": ["cloud", "storage", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Cloud_computing_security"
    },
    {
      "id": 21,
      "title": "Malware Types: Viruses, Worms, and Trojans",
      "summary": "Understanding different types of malware and how they infect systems.",
      "category": "Malware",
      "readTime": "5 min read",
      "date": "2023-11-25",
      "author": "Malware Research",
      "tags": ["malware", "viruses", "trojans"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Malware"
    },
    {
      "id": 22,
      "title": "Secure Online Shopping Practices",
      "summary": "How to shop safely online and protect your payment information.",
      "category": "E-commerce Security",
      "readTime": "4 min read",
      "date": "2023-11-22",
      "author": "E-commerce Security",
      "tags": ["shopping", "e-commerce", "payments"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/E-commerce_security"
    },
    {
      "id": 23,
      "title": "Biometric Authentication: Pros and Cons",
      "summary": "Exploring the security implications of fingerprint and facial recognition technology.",
      "category": "Authentication",
      "readTime": "5 min read",
      "date": "2023-11-20",
      "author": "Biometric Security",
      "tags": ["biometrics", "authentication", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Biometrics"
    },
    {
      "id": 24,
      "title": "Firewall Configuration Best Practices",
      "summary": "How to properly configure firewalls for maximum network protection.",
      "category": "Network Security",
      "readTime": "6 min read",
      "date": "2023-11-18",
      "author": "Network Administrators",
      "tags": ["firewall", "network", "configuration"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Firewall_(computing)"
    },
    {
      "id": 25,
      "title": "Cryptocurrency Security: Protecting Digital Assets",
      "summary": "Security measures for storing and transacting with cryptocurrencies.",
      "category": "Cryptocurrency",
      "readTime": "7 min read",
      "date": "2023-11-15",
      "author": "Crypto Security",
      "tags": ["cryptocurrency", "blockchain", "security"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Cryptocurrency"
    },
    {
      "id": 26,
      "title": "Endpoint Security: Protecting Devices in Your Network",
      "summary": "Strategies for securing all endpoints in your organization's network.",
      "category": "Endpoint Security",
      "readTime": "5 min read",
      "date": "2023-11-12",
      "author": "Endpoint Security Team",
      "tags": ["endpoint", "devices", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Endpoint_security"
    },
    {
      "id": 27,
      "title": "Security Awareness Training for Employees",
      "summary": "Developing effective cybersecurity training programs for staff.",
      "category": "Security Training",
      "readTime": "6 min read",
      "date": "2023-11-10",
      "author": "Training Specialists",
      "tags": ["training", "awareness", "employees"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Security_awareness"
    },
    {
      "id": 28,
      "title": "Data Loss Prevention Strategies",
      "summary": "Preventing unauthorized access and transmission of sensitive data.",
      "category": "Data Protection",
      "readTime": "5 min read",
      "date": "2023-11-08",
      "author": "Data Security Team",
      "tags": ["data protection", "dlp", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Data_loss_prevention_software"
    },
    {
      "id": 29,
      "title": "Penetration Testing: Assessing Your Security",
      "summary": "How ethical hacking helps identify vulnerabilities in your systems.",
      "category": "Penetration Testing",
      "readTime": "7 min read",
      "date": "2023-11-05",
      "author": "Ethical Hackers",
      "tags": ["penetration testing", "ethical hacking", "security"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Penetration_test"
    },
    {
      "id": 30,
      "title": "Security Compliance: GDPR, HIPAA, and More",
      "summary": "Understanding major security compliance regulations and requirements.",
      "category": "Compliance",
      "readTime": "8 min read",
      "date": "2023-11-03",
      "author": "Compliance Experts",
      "tags": ["compliance", "gdpr", "hipaa"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"
    },
    {
      "id": 31,
      "title": "Threat Intelligence: Staying Ahead of Cyber Threats",
      "summary": "Leveraging threat intelligence to proactively defend against attacks.",
      "category": "Threat Intelligence",
      "readTime": "6 min read",
      "date": "2023-10-30",
      "author": "Threat Intelligence Team",
      "tags": ["threat intelligence", "cyber threats", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Cyber_threat_intelligence"
    },
    {
      "id": 32,
      "title": "Secure Software Development Lifecycle",
      "summary": "Integrating security throughout the software development process.",
      "category": "Software Security",
      "readTime": "7 min read",
      "date": "2023-10-27",
      "author": "Software Security",
      "tags": ["software", "development", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Secure_software_development_lifecycle"
    },
    {
      "id": 33,
      "title": "Physical Security: Protecting Your Digital Assets",
      "summary": "The importance of physical security measures in cybersecurity.",
      "category": "Physical Security",
      "readTime": "4 min read",
      "date": "2023-10-25",
      "author": "Physical Security Team",
      "tags": ["physical security", "access control", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Physical_security"
    },
    {
      "id": 34,
      "title": "Security Information and Event Management (SIEM)",
      "summary": "Understanding SIEM systems for security monitoring and analysis.",
      "category": "SIEM",
      "readTime": "6 min read",
      "date": "2023-10-22",
      "author": "SIEM Experts",
      "tags": ["siem", "monitoring", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Security_information_and_event_management"
    },
    {
      "id": 35,
      "title": "Web Application Firewall (WAF) Protection",
      "summary": "How WAFs protect web applications from common attacks.",
      "category": "Web Security",
      "readTime": "5 min read",
      "date": "2023-10-20",
      "author": "Web Security Team",
      "tags": ["waf", "web applications", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Web_application_firewall"
    },
    {
      "id": 36,
      "title": "Supply Chain Security Risks",
      "summary": "Identifying and mitigating security risks in your supply chain.",
      "category": "Supply Chain Security",
      "readTime": "6 min read",
      "date": "2023-10-18",
      "author": "Supply Chain Security",
      "tags": ["supply chain", "risk management", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Supply_chain_security"
    },
    {
      "id": 37,
      "title": "Security Operations Center (SOC) Overview",
      "summary": "Understanding the role and function of a Security Operations Center.",
      "category": "SOC",
      "readTime": "5 min read",
      "date": "2023-10-15",
      "author": "SOC Team",
      "tags": ["soc", "operations", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Security_operations_center"
    },
    {
      "id": 38,
      "title": "Artificial Intelligence in Cybersecurity",
      "summary": "How AI and machine learning are transforming cybersecurity.",
      "category": "AI Security",
      "readTime": "7 min read",
      "date": "2023-10-12",
      "author": "AI Security Research",
      "tags": ["ai", "machine learning", "security"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Artificial_intelligence_in_cybersecurity"
    },
    {
      "id": 39,
      "title": "Remote Work Security Challenges",
      "summary": "Addressing security concerns in remote and hybrid work environments.",
      "category": "Remote Work Security",
      "readTime": "5 min read",
      "date": "2023-10-10",
      "author": "Remote Work Security",
      "tags": ["remote work", "vpn", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Remote_work"
    },
    {
      "id": 40,
      "title": "Blockchain Security Fundamentals",
      "summary": "Understanding security principles in blockchain technology.",
      "category": "Blockchain Security",
      "readTime": "6 min read",
      "date": "2023-10-08",
      "author": "Blockchain Security",
      "tags": ["blockchain", "cryptography", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Blockchain"
    },
    {
      "id": 41,
      "title": "Security Metrics and KPIs",
      "summary": "Measuring and tracking cybersecurity performance effectively.",
      "category": "Security Management",
      "readTime": "5 min read",
      "date": "2023-10-05",
      "author": "Security Management",
      "tags": ["metrics", "kpis", "management"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Performance_indicator"
    },
    {
      "id": 42,
      "title": "Digital Forensics: Investigating Cyber Crimes",
      "summary": "Techniques and tools for digital forensics investigations.",
      "category": "Digital Forensics",
      "readTime": "7 min read",
      "date": "2023-10-03",
      "author": "Forensics Team",
      "tags": ["forensics", "investigation", "security"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Digital_forensics"
    },
    {
      "id": 43,
      "title": "Security Architecture Design Principles",
      "summary": "Fundamental principles for designing secure systems and networks.",
      "category": "Security Architecture",
      "readTime": "6 min read",
      "date": "2023-09-30",
      "author": "Security Architects",
      "tags": ["architecture", "design", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Security_architecture"
    },
    {
      "id": 44,
      "title": "Vulnerability Management Lifecycle",
      "summary": "Systematic approach to identifying and addressing vulnerabilities.",
      "category": "Vulnerability Management",
      "readTime": "5 min read",
      "date": "2023-09-28",
      "author": "Vulnerability Management",
      "tags": ["vulnerability", "management", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Vulnerability_management"
    },
    {
      "id": 45,
      "title": "Security Culture: Building Organizational Awareness",
      "summary": "Creating a security-conscious culture within your organization.",
      "category": "Security Culture",
      "readTime": "5 min read",
      "date": "2023-09-25",
      "author": "Security Culture Team",
      "tags": ["culture", "awareness", "organization"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Security_culture"
    },
    {
      "id": 46,
      "title": "Quantum Computing and Cryptography",
      "summary": "How quantum computing impacts current cryptographic systems.",
      "category": "Quantum Security",
      "readTime": "8 min read",
      "date": "2023-09-22",
      "author": "Quantum Security Research",
      "tags": ["quantum", "cryptography", "security"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Post-quantum_cryptography"
    },
    {
      "id": 47,
      "title": "Security Automation and Orchestration",
      "summary": "Automating security processes for improved efficiency and response.",
      "category": "Security Automation",
      "readTime": "6 min read",
      "date": "2023-09-20",
      "author": "Automation Team",
      "tags": ["automation", "orchestration", "security"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Security_automation"
    },
    {
      "id": 48,
      "title": "Third-Party Risk Management",
      "summary": "Managing security risks associated with third-party vendors.",
      "category": "Risk Management",
      "readTime": "5 min read",
      "date": "2023-09-18",
      "author": "Risk Management Team",
      "tags": ["third-party", "risk", "management"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Third-party_risk_management"
    },
    {
      "id": 49,
      "title": "Security Budget Planning and Justification",
      "summary": "Strategies for planning and justifying cybersecurity budgets.",
      "category": "Security Management",
      "readTime": "5 min read",
      "date": "2023-09-15",
      "author": "Security Management",
      "tags": ["budget", "planning", "management"],
      "featured": false,
      "externalUrl": "https://en.wikipedia.org/wiki/Information_security_management"
    },
    {
      "id": 50,
      "title": "Future Trends in Cybersecurity",
      "summary": "Emerging technologies and trends shaping the future of cybersecurity.",
      "category": "Future Trends",
      "readTime": "7 min read",
      "date": "2023-09-12",
      "author": "Future Trends Research",
      "tags": ["future", "trends", "innovation"],
      "featured": true,
      "externalUrl": "https://en.wikipedia.org/wiki/Cybersecurity"
    },
    {
    id: 51,
    title: "Advanced Persistent Threats (APTs): Detection and Defense",
    summary: "Understanding sophisticated cyber attacks that target specific organizations over extended periods.",
    category: "Advanced Threats",
    readTime: "8 min read",
    date: "2023-09-10",
    author: "Threat Intelligence Team",
    tags: ["apt", "advanced threats", "cyber espionage"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Advanced_persistent_threat"
  },
  {
    id: 52,
    title: "Security Orchestration, Automation and Response (SOAR)",
    summary: "How SOAR platforms streamline security operations and incident response.",
    category: "Security Automation",
    readTime: "7 min read",
    date: "2023-09-08",
    author: "SOAR Experts",
    tags: ["soar", "automation", "incident response"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_automation"
  },
  {
    id: 53,
    title: "Cyber Insurance: What You Need to Know",
    summary: "Understanding cyber insurance policies and their role in risk management.",
    category: "Risk Management",
    readTime: "6 min read",
    date: "2023-09-05",
    author: "Cyber Risk Analysts",
    tags: ["insurance", "risk management", "compliance"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Cyber_insurance"
  },
  {
    id: 54,
    title: "Secure Coding Practices for Developers",
    summary: "Essential security principles for writing secure software code.",
    category: "Software Security",
    readTime: "7 min read",
    date: "2023-09-02",
    author: "Security Developers",
    tags: ["coding", "development", "secure software"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Secure_coding"
  },
  {
    id: 55,
    title: "Threat Hunting: Proactive Security Defense",
    summary: "Active searching for cyber threats that evade traditional security controls.",
    category: "Threat Intelligence",
    readTime: "6 min read",
    date: "2023-08-30",
    author: "Threat Hunters",
    tags: ["threat hunting", "proactive defense", "security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Cyber_threat_hunting"
  },
  {
    id: 56,
    title: "Business Email Compromise (BEC) Attacks",
    summary: "Identifying and preventing sophisticated email-based financial fraud.",
    category: "Email Security",
    readTime: "5 min read",
    date: "2023-08-28",
    author: "Fraud Prevention Team",
    tags: ["bec", "email fraud", "business security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Business_email_compromise"
  },
  {
    id: 57,
    title: "Security Compliance Frameworks: NIST, ISO 27001",
    summary: "Overview of major cybersecurity compliance frameworks and standards.",
    category: "Compliance",
    readTime: "8 min read",
    date: "2023-08-25",
    author: "Compliance Officers",
    tags: ["nist", "iso27001", "compliance", "frameworks"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework"
  },
  {
    id: 58,
    title: "Cyber Threat Intelligence Platforms",
    summary: "Evaluating and implementing threat intelligence solutions.",
    category: "Threat Intelligence",
    readTime: "6 min read",
    date: "2023-08-22",
    author: "Threat Intelligence",
    tags: ["threat intelligence", "platforms", "security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Cyber_threat_intelligence"
  },
  {
    id: 59,
    title: "Secure DevOps (DevSecOps) Implementation",
    summary: "Integrating security practices into DevOps workflows.",
    category: "Software Security",
    readTime: "7 min read",
    date: "2023-08-20",
    author: "DevSecOps Team",
    tags: ["devsecops", "devops", "security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/DevOps#DevSecOps"
  },
  {
    id: 60,
    title: "Cyber Warfare and Nation-State Attacks",
    summary: "Understanding state-sponsored cyber attacks and their implications.",
    category: "Cyber Warfare",
    readTime: "9 min read",
    date: "2023-08-18",
    author: "Cyber Defense Analysts",
    tags: ["cyber warfare", "nation-state", "geopolitics"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Cyberwarfare"
  },
  {
    id: 61,
    title: "Security Assessment and Testing Methodologies",
    summary: "Comprehensive approaches to security testing and assessment.",
    category: "Security Testing",
    readTime: "7 min read",
    date: "2023-08-15",
    author: "Security Testers",
    tags: ["assessment", "testing", "methodologies"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_assessment"
  },
  {
    id: 62,
    title: "Mobile Application Security Testing",
    summary: "Techniques for testing and securing mobile applications.",
    category: "Mobile Security",
    readTime: "6 min read",
    date: "2023-08-12",
    author: "Mobile Security Team",
    tags: ["mobile apps", "testing", "security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Mobile_application_security"
  },
  {
    id: 63,
    title: "Cyber Security Career Paths and Certifications",
    summary: "Guide to building a career in cybersecurity with recommended certifications.",
    category: "Career Development",
    readTime: "8 min read",
    date: "2023-08-10",
    author: "Career Advisors",
    tags: ["career", "certifications", "professional development"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Information_security"
  },
  {
    id: 64,
    title: "Security Information Management Best Practices",
    summary: "Managing and protecting security-related information and data.",
    category: "Information Management",
    readTime: "5 min read",
    date: "2023-08-08",
    author: "Information Managers",
    tags: ["information management", "data protection", "security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Information_security_management"
  },
  {
    id: 65,
    title: "Cyber Security for Small and Medium Businesses",
    summary: "Affordable security strategies for SMBs with limited resources.",
    category: "Business Security",
    readTime: "6 min read",
    date: "2023-08-05",
    author: "SMB Security Experts",
    tags: ["smb", "small business", "budget security"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Information_security"
  },
  {
    id: 66,
    title: "Blockchain Security and Smart Contract Auditing",
    summary: "Security considerations for blockchain technology and smart contracts.",
    category: "Blockchain Security",
    readTime: "7 min read",
    date: "2023-08-02",
    author: "Blockchain Security",
    tags: ["blockchain", "smart contracts", "auditing"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Blockchain"
  },
  {
    id: 67,
    title: "Cyber Security Metrics and Reporting",
    summary: "Measuring security effectiveness and creating meaningful reports.",
    category: "Security Management",
    readTime: "6 min read",
    date: "2023-07-30",
    author: "Security Managers",
    tags: ["metrics", "reporting", "kpis"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Performance_indicator"
  },
  {
    id: 68,
    title: "Industrial Control System (ICS) Security",
    summary: "Protecting critical infrastructure and industrial control systems.",
    category: "ICS Security",
    readTime: "8 min read",
    date: "2023-07-28",
    author: "ICS Security Team",
    tags: ["ics", "scada", "critical infrastructure"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Industrial_control_system"
  },
  {
    id: 69,
    title: "Security Champions Program Implementation",
    summary: "Building and managing security champion programs in organizations.",
    category: "Security Culture",
    readTime: "5 min read",
    date: "2023-07-25",
    author: "Security Culture Team",
    tags: ["security champions", "culture", "training"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_culture"
  },
  {
    id: 70,
    title: "Cyber Security in Healthcare Industry",
    summary: "Unique security challenges and solutions for healthcare organizations.",
    category: "Healthcare Security",
    readTime: "7 min read",
    date: "2023-07-22",
    author: "Healthcare Security",
    tags: ["healthcare", "hipaa", "medical security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act"
  },
  {
    id: 71,
    title: "Red Team vs Blue Team Exercises",
    summary: "Understanding offensive and defensive security testing methodologies.",
    category: "Security Testing",
    readTime: "6 min read",
    date: "2023-07-20",
    author: "Security Testing Team",
    tags: ["red team", "blue team", "exercises"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Red_team"
  },
  {
    id: 72,
    title: "Cyber Security for Remote Workforce",
    summary: "Comprehensive security strategies for distributed teams.",
    category: "Remote Work Security",
    readTime: "5 min read",
    date: "2023-07-18",
    author: "Remote Work Security",
    tags: ["remote work", "distributed teams", "security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Remote_work"
  },
  {
    id: 73,
    title: "Security Data Analytics and Machine Learning",
    summary: "Leveraging data analytics and ML for security insights.",
    category: "Security Analytics",
    readTime: "7 min read",
    date: "2023-07-15",
    author: "Security Data Scientists",
    tags: ["analytics", "machine learning", "data science"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_analytics"
  },
  {
    id: 74,
    title: "Cyber Security Legal and Regulatory Landscape",
    summary: "Understanding cybersecurity laws and regulations worldwide.",
    category: "Legal & Compliance",
    readTime: "8 min read",
    date: "2023-07-12",
    author: "Cyber Law Experts",
    tags: ["legal", "regulations", "compliance"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Cyberlaw"
  },
  {
    id: 75,
    title: "Emerging Cyber Security Technologies 2024",
    summary: "Cutting-edge technologies shaping the future of cybersecurity.",
    category: "Future Trends",
    readTime: "7 min read",
    date: "2023-07-10",
    author: "Technology Research",
    tags: ["emerging tech", "innovation", "future"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Cybersecurity"
  },
  {
    id: 76,
    title: "Cyber Security Supply Chain Risk Management",
    summary: "Managing security risks throughout your supply chain and third-party vendors.",
    category: "Supply Chain Security",
    readTime: "7 min read",
    date: "2023-07-08",
    author: "Supply Chain Security",
    tags: ["supply chain", "third-party", "risk management"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Supply_chain_security"
  },
  {
    id: 77,
    title: "Zero-Day Vulnerability Management",
    summary: "Strategies for handling unknown vulnerabilities and zero-day attacks.",
    category: "Vulnerability Management",
    readTime: "6 min read",
    date: "2023-07-05",
    author: "Vulnerability Researchers",
    tags: ["zero-day", "vulnerability", "exploits"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Zero-day_(computing)"
  },
  {
    id: 78,
    title: "Cyber Security for Educational Institutions",
    summary: "Protecting schools, universities, and educational data from cyber threats.",
    category: "Education Security",
    readTime: "5 min read",
    date: "2023-07-02",
    author: "Education Security Team",
    tags: ["education", "schools", "universities"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Educational_technology"
  },
  {
    id: 79,
    title: "Security Operations Center (SOC) Tier 1 Analysis",
    summary: "Fundamentals of Tier 1 security monitoring and alert triage.",
    category: "SOC",
    readTime: "6 min read",
    date: "2023-06-30",
    author: "SOC Analysts",
    tags: ["soc", "tier1", "monitoring"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_operations_center"
  },
  {
    id: 80,
    title: "Cyber Security Budget Optimization",
    summary: "Maximizing security ROI and optimizing cybersecurity spending.",
    category: "Security Management",
    readTime: "5 min read",
    date: "2023-06-28",
    author: "Security Finance",
    tags: ["budget", "roi", "cost optimization"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Information_security_management"
  },
  {
    id: 81,
    title: "Mobile Device Management (MDM) Security",
    summary: "Securing mobile devices through effective management solutions.",
    category: "Mobile Security",
    readTime: "5 min read",
    date: "2023-06-25",
    author: "Mobile Security Team",
    tags: ["mdm", "mobile management", "devices"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Mobile_device_management"
  },
  {
    id: 82,
    title: "Cyber Security Awareness Month Best Practices",
    summary: "Planning and executing effective security awareness campaigns.",
    category: "Security Awareness",
    readTime: "4 min read",
    date: "2023-06-22",
    author: "Awareness Team",
    tags: ["awareness", "training", "campaigns"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_awareness"
  },
  {
    id: 83,
    title: "Network Segmentation Security Strategies",
    summary: "Implementing effective network segmentation for enhanced security.",
    category: "Network Security",
    readTime: "6 min read",
    date: "2023-06-20",
    author: "Network Architects",
    tags: ["segmentation", "network", "microsegmentation"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Network_segmentation"
  },
  {
    id: 84,
    title: "Cyber Security for Critical Infrastructure",
    summary: "Protecting essential services and critical national infrastructure.",
    category: "Critical Infrastructure",
    readTime: "7 min read",
    date: "2023-06-18",
    author: "Critical Infrastructure Team",
    tags: ["critical infrastructure", "essential services", "national security"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Critical_infrastructure"
  },
  {
    id: 85,
    title: "Security Information Exchange Platforms",
    summary: "Leveraging threat intelligence sharing communities and platforms.",
    category: "Threat Intelligence",
    readTime: "5 min read",
    date: "2023-06-15",
    author: "Threat Intelligence",
    tags: ["information sharing", "isac", "communities"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Information_Sharing_and_Analysis_Center"
  },
  {
    id: 86,
    title: "Cyber Security for E-commerce Platforms",
    summary: "Protecting online stores and payment processing systems.",
    category: "E-commerce Security",
    readTime: "6 min read",
    date: "2023-06-12",
    author: "E-commerce Security",
    tags: ["e-commerce", "online stores", "payments"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/E-commerce_security"
  },
  {
    id: 87,
    title: "Security Configuration Management",
    summary: "Managing and maintaining secure system configurations.",
    category: "Configuration Management",
    readTime: "5 min read",
    date: "2023-06-10",
    author: "Configuration Managers",
    tags: ["configuration", "hardening", "compliance"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_Configuration_Management"
  },
  {
    id: 88,
    title: "Cyber Security in Financial Technology (FinTech)",
    summary: "Unique security challenges in the financial technology sector.",
    category: "FinTech Security",
    readTime: "7 min read",
    date: "2023-06-08",
    author: "FinTech Security",
    tags: ["fintech", "financial technology", "banking"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Financial_technology"
  },
  {
    id: 89,
    title: "Security Patch Management Best Practices",
    summary: "Effective strategies for managing and deploying security patches.",
    category: "Patch Management",
    readTime: "5 min read",
    date: "2023-06-05",
    author: "Patch Management Team",
    tags: ["patching", "updates", "vulnerability"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Patch_management"
  },
  {
    id: 90,
    title: "Cyber Security for Government Agencies",
    summary: "Security considerations and compliance for government organizations.",
    category: "Government Security",
    readTime: "6 min read",
    date: "2023-06-02",
    author: "Government Security",
    tags: ["government", "public sector", "compliance"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/E-Government"
  },
  {
    id: 91,
    title: "Security Monitoring Use Cases Development",
    summary: "Creating effective security monitoring scenarios and alerts.",
    category: "Security Monitoring",
    readTime: "6 min read",
    date: "2023-05-30",
    author: "Security Analysts",
    tags: ["monitoring", "use cases", "detection"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_information_and_event_management"
  },
  {
    id: 92,
    title: "Cyber Security for Internet of Things (IoT) Devices",
    summary: "Comprehensive security for connected IoT devices and ecosystems.",
    category: "IoT Security",
    readTime: "7 min read",
    date: "2023-05-28",
    author: "IoT Security Team",
    tags: ["iot", "connected devices", "smart devices"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Internet_of_things_security"
  },
  {
    id: 93,
    title: "Security Architecture Review Methodology",
    summary: "Systematic approach to reviewing and improving security architecture.",
    category: "Security Architecture",
    readTime: "6 min read",
    date: "2023-05-25",
    author: "Security Architects",
    tags: ["architecture", "review", "design"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_architecture"
  },
  {
    id: 94,
    title: "Cyber Security for Cloud-Native Applications",
    summary: "Security considerations for applications built specifically for cloud environments.",
    category: "Cloud Security",
    readTime: "7 min read",
    date: "2023-05-22",
    author: "Cloud Security",
    tags: ["cloud-native", "containers", "microservices"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Cloud_computing_security"
  },
  {
    id: 95,
    title: "Digital Forensics Incident Response (DFIR)",
    summary: "Combining digital forensics with incident response capabilities.",
    category: "Digital Forensics",
    readTime: "8 min read",
    date: "2023-05-20",
    author: "DFIR Team",
    tags: ["dfir", "forensics", "incident response"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Digital_forensics"
  },
  {
    id: 96,
    title: "Security Policy Development and Enforcement",
    summary: "Creating effective security policies and ensuring compliance.",
    category: "Security Policy",
    readTime: "5 min read",
    date: "2023-05-18",
    author: "Policy Team",
    tags: ["policy", "compliance", "enforcement"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_policy"
  },
  {
    id: 97,
    title: "Cyber Security for Artificial Intelligence Systems",
    summary: "Protecting AI and machine learning systems from attacks.",
    category: "AI Security",
    readTime: "7 min read",
    date: "2023-05-15",
    author: "AI Security Research",
    tags: ["ai", "machine learning", "adversarial attacks"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Artificial_intelligence_security"
  },
  {
    id: 98,
    title: "Security Vendor Management Best Practices",
    summary: "Managing security relationships with third-party vendors and partners.",
    category: "Vendor Management",
    readTime: "5 min read",
    date: "2023-05-12",
    author: "Vendor Management",
    tags: ["vendors", "third-party", "management"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Third-party_risk_management"
  },
  {
    id: 99,
    title: "Cyber Security for Smart Cities Infrastructure",
    summary: "Protecting interconnected urban infrastructure and services.",
    category: "Smart Cities Security",
    readTime: "8 min read",
    date: "2023-05-10",
    author: "Urban Security",
    tags: ["smart cities", "urban infrastructure", "iot"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Smart_city"
  },
  {
    id: 100,
    title: "Security Data Lake Implementation",
    summary: "Building and managing centralized security data repositories.",
    category: "Security Analytics",
    readTime: "6 min read",
    date: "2023-05-08",
    author: "Data Architects",
    tags: ["data lake", "analytics", "big data"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Data_lake"
  },
  {
    id: 101,
    title: "Cyber Security Career Advancement Strategies",
    summary: "Planning and advancing your career in cybersecurity field.",
    category: "Career Development",
    readTime: "6 min read",
    date: "2023-05-05",
    author: "Career Coaches",
    tags: ["career", "advancement", "professional growth"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Information_security"
  },
  {
    id: 102,
    title: "Security Token Service (STS) Implementation",
    summary: "Implementing secure token services for authentication and authorization.",
    category: "Authentication",
    readTime: "5 min read",
    date: "2023-05-02",
    author: "Identity Management",
    tags: ["sts", "tokens", "authentication"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_token_service"
  },
  {
    id: 103,
    title: "Cyber Security for Gaming Industry",
    summary: "Protecting gaming platforms, users, and virtual economies.",
    category: "Gaming Security",
    readTime: "6 min read",
    date: "2023-04-30",
    author: "Gaming Security",
    tags: ["gaming", "esports", "virtual economies"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Video_game_security"
  },
  {
    id: 104,
    title: "Security Metrics Dashboard Design",
    summary: "Creating effective security dashboards for management and operations.",
    category: "Security Management",
    readTime: "5 min read",
    date: "2023-04-28",
    author: "Dashboard Designers",
    tags: ["dashboards", "metrics", "visualization"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Dashboard_(business)"
  },
  {
    id: 105,
    title: "Cyber Security for Autonomous Vehicles",
    summary: "Security challenges and solutions for self-driving cars and systems.",
    category: "Automotive Security",
    readTime: "7 min read",
    date: "2023-04-25",
    author: "Automotive Security",
    tags: ["autonomous vehicles", "cars", "transportation"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Self-driving_car"
  },
  {
    id: 106,
    title: "Security Code Review Techniques",
    summary: "Effective methods for reviewing code for security vulnerabilities.",
    category: "Software Security",
    readTime: "6 min read",
    date: "2023-04-22",
    author: "Code Reviewers",
    tags: ["code review", "static analysis", "vulnerabilities"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Code_review"
  },
  {
    id: 107,
    title: "Cyber Security for Social Media Platforms",
    summary: "Protecting users and content on social media networks.",
    category: "Social Media Security",
    readTime: "5 min read",
    date: "2023-04-20",
    author: "Social Media Security",
    tags: ["social media", "platforms", "user protection"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Social_media_privacy"
  },
  {
    id: 108,
    title: "Security Training Simulation Platforms",
    summary: "Using simulation tools for effective security training and exercises.",
    category: "Security Training",
    readTime: "5 min read",
    date: "2023-04-18",
    author: "Training Specialists",
    tags: ["training", "simulation", "exercises"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_awareness"
  },
  {
    id: 109,
    title: "Cyber Security for Digital Payment Systems",
    summary: "Securing modern digital payment methods and platforms.",
    category: "Payment Security",
    readTime: "6 min read",
    date: "2023-04-15",
    author: "Payment Security",
    tags: ["payments", "digital wallets", "fintech"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Digital_payment"
  },
  {
    id: 110,
    title: "Security Incident Communication Plans",
    summary: "Developing effective communication strategies for security incidents.",
    category: "Incident Response",
    readTime: "5 min read",
    date: "2023-04-12",
    author: "Communication Team",
    tags: ["communication", "incidents", "stakeholders"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Incident_response"
  },
  {
    id: 111,
    title: "Cyber Security for Healthcare IoT Devices",
    summary: "Protecting medical IoT devices and patient monitoring systems.",
    category: "Healthcare Security",
    readTime: "7 min read",
    date: "2023-04-10",
    author: "Healthcare IoT Security",
    tags: ["healthcare", "iot", "medical devices"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Internet_of_medical_things"
  },
  {
    id: 112,
    title: "Security Data Normalization Strategies",
    summary: "Standardizing security data for effective analysis and correlation.",
    category: "Security Analytics",
    readTime: "5 min read",
    date: "2023-04-08",
    author: "Data Analysts",
    tags: ["data normalization", "analytics", "correlation"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Data_pre-processing"
  },
  {
    id: 113,
    title: "Cyber Security for Remote Access Solutions",
    summary: "Securing VPN, RDP, and other remote access technologies.",
    category: "Remote Access Security",
    readTime: "6 min read",
    date: "2023-04-05",
    author: "Remote Access Team",
    tags: ["remote access", "vpn", "rdp"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Virtual_private_network"
  },
  {
    id: 114,
    title: "Security Compliance Auditing Techniques",
    summary: "Effective methods for conducting security compliance audits.",
    category: "Compliance",
    readTime: "6 min read",
    date: "2023-04-02",
    author: "Auditors",
    tags: ["auditing", "compliance", "assessments"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Information_security_audit"
  },
  {
    id: 115,
    title: "Cyber Security for Software as a Service (SaaS)",
    summary: "Security considerations for SaaS applications and platforms.",
    category: "Cloud Security",
    readTime: "5 min read",
    date: "2023-03-30",
    author: "SaaS Security",
    tags: ["saas", "cloud applications", "subscription"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Software_as_a_service"
  },
  {
    id: 116,
    title: "Security Threat Modeling Methodologies",
    summary: "Systematic approaches to identifying and addressing security threats.",
    category: "Threat Modeling",
    readTime: "7 min read",
    date: "2023-03-28",
    author: "Threat Modelers",
    tags: ["threat modeling", "methodologies", "risk assessment"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Threat_model"
  },
  {
    id: 117,
    title: "Cyber Security for Digital Identity Systems",
    summary: "Protecting digital identity verification and authentication systems.",
    category: "Identity Management",
    readTime: "6 min read",
    date: "2023-03-25",
    author: "Identity Security",
    tags: ["digital identity", "verification", "authentication"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Digital_identity"
  },
  {
    id: 118,
    title: "Security Automation Use Cases",
    summary: "Practical automation scenarios for security operations.",
    category: "Security Automation",
    readTime: "5 min read",
    date: "2023-03-22",
    author: "Automation Team",
    tags: ["automation", "use cases", "orchestration"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Security_automation"
  },
  {
    id: 119,
    title: "Cyber Security for Research and Development",
    summary: "Protecting intellectual property and research data.",
    category: "R&D Security",
    readTime: "6 min read",
    date: "2023-03-20",
    author: "R&D Security",
    tags: ["research", "development", "intellectual property"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Research_and_development"
  },
  {
    id: 120,
    title: "Security Benchmarking and Maturity Assessment",
    summary: "Measuring security maturity against industry benchmarks.",
    category: "Security Management",
    readTime: "6 min read",
    date: "2023-03-18",
    author: "Benchmarking Team",
    tags: ["benchmarking", "maturity", "assessment"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Benchmarking"
  },
  {
    id: 121,
    title: "Cyber Security for Wireless Communication Systems",
    summary: "Securing wireless networks, Bluetooth, and other communication protocols.",
    category: "Wireless Security",
    readTime: "5 min read",
    date: "2023-03-15",
    author: "Wireless Security",
    tags: ["wireless", "bluetooth", "communication"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Wireless_security"
  },
  {
    id: 122,
    title: "Security Data Retention Policies",
    summary: "Developing effective data retention strategies for security information.",
    category: "Data Management",
    readTime: "4 min read",
    date: "2023-03-12",
    author: "Data Management",
    tags: ["data retention", "policies", "compliance"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Data_retention"
  },
  {
    id: 123,
    title: "Cyber Security for Virtual and Augmented Reality",
    summary: "Security considerations for VR/AR platforms and applications.",
    category: "VR/AR Security",
    readTime: "6 min read",
    date: "2023-03-10",
    author: "VR/AR Security",
    tags: ["virtual reality", "augmented reality", "immersive tech"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Virtual_reality"
  },
  {
    id: 124,
    title: "Security Program Management Office (PMO)",
    summary: "Establishing and running effective security program management.",
    category: "Security Management",
    readTime: "5 min read",
    date: "2023-03-08",
    author: "Program Managers",
    tags: ["pmo", "program management", "governance"],
    featured: false,
    externalUrl: "https://en.wikipedia.org/wiki/Project_management_office"
  },
  {
    id: 125,
    title: "Cyber Security Future Predictions 2025",
    summary: "Expert predictions and emerging trends for cybersecurity in 2025.",
    category: "Future Trends",
    readTime: "8 min read",
    date: "2023-03-05",
    author: "Industry Analysts",
    tags: ["predictions", "future", "trends"],
    featured: true,
    externalUrl: "https://en.wikipedia.org/wiki/Cybersecurity"
  }
  ];

  filteredArticles: Article[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';

  ngOnInit() {
    this.filteredArticles = this.articles;
    console.log('Articles loaded successfully:', this.articles.length);
  }

  get featuredArticles(): Article[] {
    return this.articles.filter(article => article.featured);
  }

  get regularArticles(): Article[] {
    return this.articles.filter(article => !article.featured);
  }

  getCategories(): string[] {
    return ['all', ...new Set(this.articles.map(article => article.category))];
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase();
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredArticles = this.articles.filter(article => {
      const matchesCategory = this.selectedCategory === 'all' || article.category === this.selectedCategory;
      const matchesSearch = this.searchTerm === '' || 
        article.title.toLowerCase().includes(this.searchTerm) ||
        article.summary.toLowerCase().includes(this.searchTerm) ||
        article.tags.some(tag => tag.toLowerCase().includes(this.searchTerm));
      
      return matchesCategory && matchesSearch;
    });
  }

  navigateToArticle(article: Article): void {
    if (article.externalUrl) {
      window.open(article.externalUrl, '_blank');
    }
  }
}