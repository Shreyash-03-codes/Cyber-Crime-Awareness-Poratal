import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CyberLaw {
  id: number;
  title: string;
  description: string;
  category: string;
  section: string;
  punishment: string;
  jurisdiction: string;
  lastUpdated: string;
  source: string;
  tags: string[];
  learnMoreLink: string;
  legalDetailsLink: string;
}

@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LawsComponent {
  laws: CyberLaw[] = [
    {
      id: 1,
      title: "Information Technology Act, 2000 - Section 66",
      description: "Computer related offences including hacking, data theft, and unauthorized access",
      category: "Hacking",
      section: "Section 66",
      punishment: "Imprisonment up to 3 years or fine up to ₹5 lakhs or both",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["hacking", "unauthorized access", "data theft"],
      learnMoreLink: "https://www.meity.gov.in/content/information-technology-act-2000",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },
    {
      id: 2,
      title: "IT Act - Section 66C",
      description: "Identity theft and cheating by personation using computer resource",
      category: "Identity Theft",
      section: "Section 66C",
      punishment: "Imprisonment up to 3 years and fine up to ₹1 lakh",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["identity theft", "personation", "fraud"],
      learnMoreLink: "https://www.cybercrime.gov.in/Webform/Helpline.aspx",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },
    {
      id: 3,
      title: "IT Act - Section 66D",
      description: "Cheating by personation using computer resource",
      category: "Online Fraud",
      section: "Section 66D",
      punishment: "Imprisonment up to 3 years and fine up to ₹1 lakh",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["cheating", "personation", "fraud"],
      learnMoreLink: "https://www.cert-in.org.in/",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },
    {
      id: 4,
      title: "IT Act - Section 66E",
      description: "Violation of privacy through capture, publication or transmission of images of private area",
      category: "Privacy Violation",
      section: "Section 66E",
      punishment: "Imprisonment up to 3 years or fine up to ₹2 lakhs or both",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["privacy", "voyeurism", "image abuse"],
      learnMoreLink: "https://www.meity.gov.in/writereaddata/files/Privacy%20Bill%20final%20draft%20%281%29.pdf",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },
    {
      id: 5,
      title: "IT Act - Section 66F",
      description: "Cyber terrorism affecting unity, integrity, security or sovereignty of India",
      category: "Cyber Terrorism",
      section: "Section 66F",
      punishment: "Imprisonment up to life",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["cyber terrorism", "national security", "sovereignty"],
      learnMoreLink: "https://www.ncrb.gov.in/en/cyber-crime",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },
    {
      id: 6,
      title: "IT Act - Section 67",
      description: "Publishing or transmitting obscene material in electronic form",
      category: "Obscene Content",
      section: "Section 67",
      punishment: "First conviction: imprisonment up to 3 years and fine up to ₹5 lakhs. Subsequent convictions: imprisonment up to 5 years and fine up to ₹10 lakhs",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["obscenity", "pornography", "electronic content"],
      learnMoreLink: "https://www.cybercrime.gov.in/Webform/Helpline.aspx",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },
    {
      id: 7,
      title: "IT Act - Section 69",
      description: "Power to issue directions for interception or monitoring or decryption of any information through any computer resource",
      category: "Government Powers",
      section: "Section 69",
      punishment: "Non-compliance: imprisonment up to 7 years and fine",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["interception", "monitoring", "government powers"],
      learnMoreLink: "https://www.meity.gov.in/content/information-technology-act-2000",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },
    {
      id: 8,
      title: "Indian Penal Code - Section 420",
      description: "Cheating and dishonestly inducing delivery of property",
      category: "Online Fraud",
      section: "IPC Section 420",
      punishment: "Imprisonment up to 7 years and fine",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Indian Penal Code, 1860",
      tags: ["cheating", "fraud", "property"],
      learnMoreLink: "https://www.indiacode.nic.in/handle/123456789/2263?sam_handle=123456789/1362",
      legalDetailsLink: "https://www.indiacode.nic.in/handle/123456789/2263?sam_handle=123456789/1362"
    },
    {
      id: 9,
      title: "Indian Penal Code - Section 463",
      description: "Forgery of electronic records",
      category: "Forgery",
      section: "IPC Section 463",
      punishment: "Imprisonment up to 2 years or fine or both",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Indian Penal Code, 1860",
      tags: ["forgery", "electronic records", "document fraud"],
      learnMoreLink: "https://www.indiacode.nic.in/handle/123456789/2263?sam_handle=123456789/1362",
      legalDetailsLink: "https://www.indiacode.nic.in/handle/123456789/2263?sam_handle=123456789/1362"
    },
    {
      id: 10,
      title: "Copyright Act - Section 51",
      description: "Infringement of copyright in digital content",
      category: "Copyright Infringement",
      section: "Section 51",
      punishment: "Imprisonment from 6 months to 3 years and fine from ₹50,000 to ₹2 lakhs",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Copyright Act, 1957",
      tags: ["copyright", "piracy", "digital content"],
      learnMoreLink: "https://copyright.gov.in/",
      legalDetailsLink: "https://www.indiacode.nic.in/handle/123456789/1365?sam_handle=123456789/1362"
    },
    {
      id: 11,
      title: "GDPR - Article 5",
      description: "Principles relating to processing of personal data",
      category: "Data Protection",
      section: "Article 5",
      punishment: "Fine up to €20 million or 4% of global annual turnover",
      jurisdiction: "European Union",
      lastUpdated: "2023-01-15",
      source: "General Data Protection Regulation",
      tags: ["data protection", "privacy", "personal data"],
      learnMoreLink: "https://gdpr-info.eu/",
      legalDetailsLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679"
    },
    {
      id: 12,
      title: "Computer Fraud and Abuse Act",
      description: "Unauthorized access to protected computers",
      category: "Unauthorized Access",
      section: "18 U.S.C. § 1030",
      punishment: "Fine and imprisonment up to 10 years for first offense",
      jurisdiction: "United States",
      lastUpdated: "2023-01-15",
      source: "Computer Fraud and Abuse Act",
      tags: ["unauthorized access", "protected computers", "federal law"],
      learnMoreLink: "https://www.justice.gov/criminal-ccips/computer-fraud-and-abuse-act",
      legalDetailsLink: "https://www.govinfo.gov/content/pkg/USCODE-2011-title18/html/USCODE-2011-title18-partI-chap47-sec1030.htm"
    },
    {
      id: 13,
      title: "Digital Personal Data Protection Act, 2023",
      description: "New Indian law for protection of digital personal data",
      category: "Data Protection",
      section: "DPDP Act, 2023",
      punishment: "Penalties up to ₹250 crore for data breaches",
      jurisdiction: "India",
      lastUpdated: "2023-08-11",
      source: "Digital Personal Data Protection Act, 2023",
      tags: ["data protection", "privacy", "personal data", "india"],
      learnMoreLink: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023",
      legalDetailsLink: "https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf"
    },
    {
      id: 14,
      title: "IT Act - Section 43",
      description: "Penalty and compensation for damage to computer, computer system",
      category: "Cyber Damage",
      section: "Section 43",
      punishment: "Compensation up to ₹1 crore to affected person",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["damage", "compensation", "computer system"],
      learnMoreLink: "https://www.meity.gov.in/content/information-technology-act-2000",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },
    {
      id: 15,
      title: "IT Act - Section 72",
      description: "Breach of confidentiality and privacy",
      category: "Privacy Violation",
      section: "Section 72",
      punishment: "Imprisonment up to 2 years or fine up to ₹1 lakh or both",
      jurisdiction: "India",
      lastUpdated: "2023-01-15",
      source: "Information Technology Act, 2000",
      tags: ["confidentiality", "privacy", "data breach"],
      learnMoreLink: "https://www.meity.gov.in/content/information-technology-act-2000",
      legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
    },

  {
    id: 16,
    title: "IT Act - Section 65",
    description: "Tampering with computer source documents",
    category: "Document Tampering",
    section: "Section 65",
    punishment: "Imprisonment up to 3 years or fine up to ₹2 lakhs or both",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Information Technology Act, 2000",
    tags: ["tampering", "source code", "documents"],
    learnMoreLink: "https://www.meity.gov.in/content/information-technology-act-2000",
    legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
  },
  {
    id: 17,
    title: "IT Act - Section 66A (Repealed)",
    description: "Punishment for sending offensive messages through communication service (Struck down by Supreme Court)",
    category: "Free Speech",
    section: "Section 66A",
    punishment: "Struck down as unconstitutional",
    jurisdiction: "India",
    lastUpdated: "2015-03-24",
    source: "Information Technology Act, 2000",
    tags: ["free speech", "repealed", "constitutional"],
    learnMoreLink: "https://www.sci.gov.in/jonew/judis/41412.pdf",
    legalDetailsLink: "https://main.sci.gov.in/jonew/judis/41412.pdf"
  },
  {
    id: 18,
    title: "IT Act - Section 70",
    description: "Protected system and critical information infrastructure",
    category: "Critical Infrastructure",
    section: "Section 70",
    punishment: "Imprisonment up to 10 years and fine",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Information Technology Act, 2000",
    tags: ["critical infrastructure", "protected systems", "national security"],
    learnMoreLink: "https://www.meity.gov.in/content/information-technology-act-2000",
    legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
  },
  {
    id: 19,
    title: "IT Act - Section 70A",
    description: "National Critical Information Infrastructure Protection Centre",
    category: "Critical Infrastructure",
    section: "Section 70A",
    punishment: "As prescribed by appropriate government",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Information Technology Act, 2000",
    tags: ["NCIIPC", "critical infrastructure", "protection"],
    learnMoreLink: "https://www.meity.gov.in/content/information-technology-act-2000",
    legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
  },
  {
    id: 20,
    title: "IT Act - Section 71",
    description: "Penalty for misrepresentation",
    category: "Fraud",
    section: "Section 71",
    punishment: "Imprisonment up to 2 years or fine up to ₹1 lakh or both",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Information Technology Act, 2000",
    tags: ["misrepresentation", "fraud", "penalty"],
    learnMoreLink: "https://www.meity.gov.in/content/information-technology-act-2000",
    legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2000-21.pdf"
  },
  {
    id: 21,
    title: "California Consumer Privacy Act (CCPA)",
    description: "Privacy rights and consumer protection for residents of California",
    category: "Data Protection",
    section: "CCPA",
    punishment: "Civil penalties up to $7,500 per intentional violation",
    jurisdiction: "United States",
    lastUpdated: "2023-01-01",
    source: "California Consumer Privacy Act",
    tags: ["privacy", "consumer rights", "california"],
    learnMoreLink: "https://oag.ca.gov/privacy/ccpa",
    legalDetailsLink: "https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?division=3.&part=4.&lawCode=CIV&title=1.81.5"
  },
  {
    id: 22,
    title: "Health Insurance Portability and Accountability Act (HIPAA)",
    description: "Protection of sensitive patient health information",
    category: "Healthcare Data",
    section: "HIPAA Security Rule",
    punishment: "Fines up to $1.5 million per year for violations",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "HIPAA Act",
    tags: ["healthcare", "medical data", "privacy"],
    learnMoreLink: "https://www.hhs.gov/hipaa/index.html",
    legalDetailsLink: "https://www.govinfo.gov/content/pkg/PLAW-104publ191/pdf/PLAW-104publ191.pdf"
  },
  {
    id: 23,
    title: "Payment Card Industry Data Security Standard (PCI DSS)",
    description: "Information security standard for organizations handling credit cards",
    category: "Financial Security",
    section: "PCI DSS",
    punishment: "Fines from $5,000 to $100,000 per month",
    jurisdiction: "International",
    lastUpdated: "2023-03-01",
    source: "PCI Security Standards Council",
    tags: ["payment cards", "financial data", "compliance"],
    learnMoreLink: "https://www.pcisecuritystandards.org/",
    legalDetailsLink: "https://www.pcisecuritystandards.org/document_library"
  },
  {
    id: 24,
    title: "Singapore Computer Misuse Act",
    description: "Provisions against unauthorized access to computer material",
    category: "Unauthorized Access",
    section: "Section 3",
    punishment: "Fine up to $5,000 or imprisonment up to 2 years or both",
    jurisdiction: "Singapore",
    lastUpdated: "2023-01-15",
    source: "Computer Misuse Act 1993",
    tags: ["singapore", "unauthorized access", "computer misuse"],
    learnMoreLink: "https://sso.agc.gov.sg/Act/CMA1993",
    legalDetailsLink: "https://sso.agc.gov.sg/Act/CMA1993"
  },
  {
    id: 25,
    title: "UK Computer Misuse Act 1990",
    description: "Legislation concerning unauthorized access to computer systems",
    category: "Unauthorized Access",
    section: "Section 1",
    punishment: "Imprisonment up to 2 years and/or fine",
    jurisdiction: "United Kingdom",
    lastUpdated: "2023-01-15",
    source: "Computer Misuse Act 1990",
    tags: ["uk", "unauthorized access", "computer crime"],
    learnMoreLink: "https://www.legislation.gov.uk/ukpga/1990/18/contents",
    legalDetailsLink: "https://www.legislation.gov.uk/ukpga/1990/18/contents"
  },
  {
    id: 26,
    title: "UK Data Protection Act 2018",
    description: "Implementation of GDPR in UK law",
    category: "Data Protection",
    section: "Data Protection Act 2018",
    punishment: "Fines up to £17.5 million or 4% of global turnover",
    jurisdiction: "United Kingdom",
    lastUpdated: "2023-01-15",
    source: "Data Protection Act 2018",
    tags: ["uk", "data protection", "gdpr"],
    learnMoreLink: "https://www.legislation.gov.uk/ukpga/2018/12/contents/enacted",
    legalDetailsLink: "https://www.legislation.gov.uk/ukpga/2018/12/contents/enacted"
  },
  {
    id: 27,
    title: "Australian Privacy Act 1988",
    description: "Regulates handling of personal information by Australian government agencies and organizations",
    category: "Data Protection",
    section: "Privacy Act 1988",
    punishment: "Civil penalties up to AUD$2.1 million",
    jurisdiction: "Australia",
    lastUpdated: "2023-01-15",
    source: "Privacy Act 1988",
    tags: ["australia", "privacy", "data protection"],
    learnMoreLink: "https://www.oaic.gov.au/privacy/australian-privacy-principles",
    legalDetailsLink: "https://www.legislation.gov.au/Details/C2021C00142"
  },
  {
    id: 28,
    title: "Canadian Personal Information Protection and Electronic Documents Act (PIPEDA)",
    description: "Governs how private sector organizations collect, use and disclose personal information",
    category: "Data Protection",
    section: "PIPEDA",
    punishment: "Fines up to CAD$100,000",
    jurisdiction: "Canada",
    lastUpdated: "2023-01-15",
    source: "PIPEDA",
    tags: ["canada", "privacy", "data protection"],
    learnMoreLink: "https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/",
    legalDetailsLink: "https://laws-lois.justice.gc.ca/eng/acts/P-8.6/"
  },
  {
    id: 29,
    title: "German IT Security Act 2.0",
    description: "Strengthens IT security requirements for critical infrastructure",
    category: "Critical Infrastructure",
    section: "IT-Sicherheitsgesetz 2.0",
    punishment: "Fines up to €20 million",
    jurisdiction: "Germany",
    lastUpdated: "2021-05-28",
    source: "IT Security Act 2.0",
    tags: ["germany", "critical infrastructure", "it security"],
    learnMoreLink: "https://www.bmi.bund.de/SharedDocs/gesetzgebungsverfahren/EN/it-sicherheitsgesetz-2-0.html",
    legalDetailsLink: "https://www.bgbl.de/xaver/bgbl/start.xav?startbk=Bundesanzeiger_BGBl&jumpTo=bgbl121s2402.pdf"
  },
  {
    id: 30,
    title: "Japanese Act on Protection of Personal Information (APPI)",
    description: "Regulates the handling of personal information in Japan",
    category: "Data Protection",
    section: "APPI",
    punishment: "Imprisonment up to 1 year or fine up to ¥1 million",
    jurisdiction: "Japan",
    lastUpdated: "2022-04-01",
    source: "Act on Protection of Personal Information",
    tags: ["japan", "personal information", "data protection"],
    learnMoreLink: "https://www.ppc.go.jp/en/legal/",
    legalDetailsLink: "https://www.japaneselawtranslation.go.jp/law/detail/?id=3437&vm=04&re=02"
  },
  {
    id: 31,
    title: "South Korean Personal Information Protection Act (PIPA)",
    description: "Comprehensive data protection law in South Korea",
    category: "Data Protection",
    section: "PIPA",
    punishment: "Fines up to ₩100 million and imprisonment up to 10 years",
    jurisdiction: "South Korea",
    lastUpdated: "2023-01-15",
    source: "Personal Information Protection Act",
    tags: ["south korea", "data protection", "privacy"],
    learnMoreLink: "https://www.law.go.kr/eng/engMain.do",
    legalDetailsLink: "https://elaw.klri.re.kr/eng_service/lawView.do?hseq=53044&lang=ENG"
  },
  {
    id: 32,
    title: "Brazilian General Data Protection Law (LGPD)",
    description: "Comprehensive data protection framework in Brazil",
    category: "Data Protection",
    section: "Lei Geral de Proteção de Dados",
    punishment: "Fines up to 2% of revenue in Brazil, limited to R$50 million per violation",
    jurisdiction: "Brazil",
    lastUpdated: "2020-09-18",
    source: "LGPD",
    tags: ["brazil", "data protection", "lgpd"],
    learnMoreLink: "https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd",
    legalDetailsLink: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
  },
  {
    id: 33,
    title: "Chinese Cybersecurity Law",
    description: "Regulates cybersecurity and data protection in China",
    category: "Cybersecurity",
    section: "Cybersecurity Law",
    punishment: "Fines up to ¥1 million and business suspension",
    jurisdiction: "China",
    lastUpdated: "2017-06-01",
    source: "Cybersecurity Law of China",
    tags: ["china", "cybersecurity", "data localization"],
    learnMoreLink: "https://www.newamerica.org/cybersecurity-initiative/digichina/blog/translation-cybersecurity-law-peoples-republic-china/",
    legalDetailsLink: "http://www.npc.gov.cn/zgrdw/englishnpc/Law/2019-02/20/content_2071362.htm"
  },
  {
    id: 34,
    title: "Russian Federal Law on Personal Data",
    description: "Regulates processing of personal data in Russia",
    category: "Data Protection",
    section: "Federal Law No. 152-FZ",
    punishment: "Fines up to ₽6 million and blocking of websites",
    jurisdiction: "Russia",
    lastUpdated: "2023-01-15",
    source: "Federal Law on Personal Data",
    tags: ["russia", "data protection", "data localization"],
    learnMoreLink: "https://pd.rkn.gov.ru/authority/p146/p191/",
    legalDetailsLink: "http://www.consultant.ru/document/cons_doc_LAW_61801/"
  },
  {
    id: 35,
    title: "South Africa Protection of Personal Information Act (POPIA)",
    description: "Data protection legislation in South Africa",
    category: "Data Protection",
    section: "POPIA",
    punishment: "Fines up to R10 million and imprisonment up to 10 years",
    jurisdiction: "South Africa",
    lastUpdated: "2020-07-01",
    source: "Protection of Personal Information Act",
    tags: ["south africa", "data protection", "popia"],
    learnMoreLink: "https://www.justice.gov.za/inforeg/",
    legalDetailsLink: "https://www.gov.za/documents/protection-personal-information-act"
  },
  {
    id: 36,
    title: "UAE Cybercrime Law",
    description: "Comprehensive cybercrime legislation in United Arab Emirates",
    category: "Cybercrime",
    section: "Federal Law No. 5 of 2012",
    punishment: "Temporary imprisonment and fines up to AED 2 million",
    jurisdiction: "United Arab Emirates",
    lastUpdated: "2023-01-15",
    source: "UAE Cybercrime Law",
    tags: ["uae", "cybercrime", "middle east"],
    learnMoreLink: "https://www.dubaipolice.gov.ae/wps/portal/home/legalframework/cybercrimes",
    legalDetailsLink: "https://www.economy.gov.ae/english/laws/cyber-crime-law/pages/default.aspx"
  },
  {
    id: 37,
    title: "Sarbanes-Oxley Act (SOX)",
    description: "Corporate governance and financial disclosure requirements",
    category: "Corporate Governance",
    section: "SOX",
    punishment: "Fines up to $5 million and imprisonment up to 20 years",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "Sarbanes-Oxley Act",
    tags: ["corporate governance", "financial reporting", "compliance"],
    learnMoreLink: "https://www.sec.gov/spotlight/sarbanes-oxley.htm",
    legalDetailsLink: "https://www.congress.gov/107/plaws/publ204/PLAW-107publ204.pdf"
  },
  {
    id: 38,
    title: "Gramm-Leach-Bliley Act (GLBA)",
    description: "Financial services modernization and privacy requirements",
    category: "Financial Privacy",
    section: "GLBA",
    punishment: "Fines up to $100,000 per violation",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "Gramm-Leach-Bliley Act",
    tags: ["financial privacy", "banking", "data security"],
    learnMoreLink: "https://www.ftc.gov/tips-advice/business-center/privacy-and-security/gramm-leach-bliley-act",
    legalDetailsLink: "https://www.govinfo.gov/content/pkg/PLAW-106publ102/pdf/PLAW-106publ102.pdf"
  },
  {
    id: 39,
    title: "Family Educational Rights and Privacy Act (FERPA)",
    description: "Protects privacy of student education records",
    category: "Education Privacy",
    section: "FERPA",
    punishment: "Loss of federal funding for institutions",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "FERPA",
    tags: ["education", "student records", "privacy"],
    learnMoreLink: "https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html",
    legalDetailsLink: "https://www.govinfo.gov/content/pkg/USCODE-2011-title20/html/USCODE-2011-title20-chap31-subchapIII-part4.htm"
  },
  {
    id: 40,
    title: "Children's Online Privacy Protection Act (COPPA)",
    description: "Regulates online collection of personal information from children under 13",
    category: "Children's Privacy",
    section: "COPPA",
    punishment: "Civil penalties up to $43,792 per violation",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "COPPA",
    tags: ["children", "privacy", "online safety"],
    learnMoreLink: "https://www.ftc.gov/tips-advice/business-center/privacy-and-security/children%27s-privacy",
    legalDetailsLink: "https://www.govinfo.gov/content/pkg/PLAW-105publ277/pdf/PLAW-105publ277.pdf"
  },
  {
    id: 41,
    title: "Video Privacy Protection Act (VPPA)",
    description: "Protects privacy of video rental and streaming records",
    category: "Entertainment Privacy",
    section: "VPPA",
    punishment: "Actual damages or $2,500 per violation, punitive damages, and attorneys' fees",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "Video Privacy Protection Act",
    tags: ["video privacy", "streaming", "entertainment"],
    learnMoreLink: "https://www.congress.gov/bill/100th-congress/house-bill/4947",
    legalDetailsLink: "https://www.govinfo.gov/content/pkg/STATUTE-102/pdf/STATUTE-102-Pg3195.pdf"
  },
  {
    id: 42,
    title: "Electronic Communications Privacy Act (ECPA)",
    description: "Extends government restrictions on wire taps to electronic communications",
    category: "Communications Privacy",
    section: "ECPA",
    punishment: "Civil damages and criminal penalties",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "Electronic Communications Privacy Act",
    tags: ["electronic communications", "privacy", "wiretapping"],
    learnMoreLink: "https://it.ojp.gov/PrivacyLiberty/authorities/statutes/1285",
    legalDetailsLink: "https://www.govinfo.gov/content/pkg/STATUTE-100/pdf/STATUTE-100-Pg1848.pdf"
  },
  {
    id: 43,
    title: "Computer Security Act of 1987",
    description: "Improves security and privacy of federal computer systems",
    category: "Government Security",
    section: "Computer Security Act",
    punishment: "As determined by appropriate federal agency",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "Computer Security Act of 1987",
    tags: ["federal systems", "computer security", "government"],
    learnMoreLink: "https://csrc.nist.gov/Projects/Computer-Security-Act",
    legalDetailsLink: "https://www.govinfo.gov/content/pkg/STATUTE-101/pdf/STATUTE-101-Pg1724.pdf"
  },
  {
    id: 44,
    title: "Federal Information Security Management Act (FISMA)",
    description: "United States legislation that defines a comprehensive framework to protect government information",
    category: "Government Security",
    section: "FISMA",
    punishment: "Agency reporting requirements and potential funding impacts",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "FISMA",
    tags: ["federal security", "information security", "government"],
    learnMoreLink: "https://www.cisa.gov/federal-information-security-modernization-act",
    legalDetailsLink: "https://www.govinfo.gov/content/pkg/PLAW-113publ283/pdf/PLAW-113publ283.pdf"
  },
  {
    id: 45,
    title: "Cybersecurity Information Sharing Act (CISA)",
    description: "Enables sharing of internet traffic information between US government and tech companies",
    category: "Information Sharing",
    section: "CISA",
    punishment: "As specified in implementing guidelines",
    jurisdiction: "United States",
    lastUpdated: "2015-12-18",
    source: "Cybersecurity Information Sharing Act",
    tags: ["information sharing", "cybersecurity", "government"],
    learnMoreLink: "https://www.dhs.gov/cisa/cybersecurity-information-sharing-act-cisa-2015",
    legalDetailsLink: "https://www.congress.gov/114/plaws/publ113/PLAW-114publ113.pdf"
  },
  {
    id: 46,
    title: "NIST Cybersecurity Framework",
    description: "Voluntary framework for reducing cyber risks to critical infrastructure",
    category: "Cybersecurity Standards",
    section: "NIST CSF",
    punishment: "Voluntary compliance",
    jurisdiction: "United States",
    lastUpdated: "2023-01-15",
    source: "National Institute of Standards and Technology",
    tags: ["cybersecurity framework", "standards", "best practices"],
    learnMoreLink: "https://www.nist.gov/cyberframework",
    legalDetailsLink: "https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04162018.pdf"
  },
  {
    id: 47,
    title: "EU Network and Information Security (NIS) Directive",
    description: "First EU-wide legislation on cybersecurity",
    category: "Cybersecurity",
    section: "NIS Directive",
    punishment: "Fines as determined by member states",
    jurisdiction: "European Union",
    lastUpdated: "2018-05-10",
    source: "NIS Directive",
    tags: ["eu", "cybersecurity", "critical infrastructure"],
    learnMoreLink: "https://digital-strategy.ec.europa.eu/en/policies/nis-directive",
    legalDetailsLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016L1148"
  },
  {
    id: 48,
    title: "EU ePrivacy Directive",
    description: "Regulates confidentiality of electronic communications",
    category: "Communications Privacy",
    section: "ePrivacy Directive",
    punishment: "As determined by member states",
    jurisdiction: "European Union",
    lastUpdated: "2023-01-15",
    source: "ePrivacy Directive",
    tags: ["eu", "electronic communications", "privacy"],
    learnMoreLink: "https://digital-strategy.ec.europa.eu/en/policies/eprivacy-regulation",
    legalDetailsLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32002L0058"
  },
  {
    id: 49,
    title: "EU Cyber Resilience Act",
    description: "Proposed legislation for cybersecurity of digital products",
    category: "Product Security",
    section: "Cyber Resilience Act",
    punishment: "Fines up to €15 million or 2.5% of global turnover",
    jurisdiction: "European Union",
    lastUpdated: "2022-09-15",
    source: "Proposed Cyber Resilience Act",
    tags: ["eu", "product security", "cybersecurity"],
    learnMoreLink: "https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act",
    legalDetailsLink: "https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act"
  },
  {
    id: 50,
    title: "EU Digital Services Act (DSA)",
    description: "Regulates online intermediaries and platforms",
    category: "Platform Regulation",
    section: "DSA",
    punishment: "Fines up to 6% of global annual turnover",
    jurisdiction: "European Union",
    lastUpdated: "2022-11-16",
    source: "Digital Services Act",
    tags: ["eu", "online platforms", "content moderation"],
    learnMoreLink: "https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package",
    legalDetailsLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32022R2065"
  },
  {
    id: 51,
    title: "EU Digital Markets Act (DMA)",
    description: "Regulates large online platforms acting as gatekeepers",
    category: "Platform Regulation",
    section: "DMA",
    punishment: "Fines up to 10% of global annual turnover",
    jurisdiction: "European Union",
    lastUpdated: "2022-09-14",
    source: "Digital Markets Act",
    tags: ["eu", "gatekeepers", "competition"],
    learnMoreLink: "https://digital-strategy.ec.europa.eu/en/policies/digital-markets-act",
    legalDetailsLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32022R1925"
  },
  {
    id: 52,
    title: "EU Artificial Intelligence Act",
    description: "Proposed regulation for artificial intelligence systems",
    category: "AI Regulation",
    section: "AI Act",
    punishment: "Fines up to €30 million or 6% of global annual turnover",
    jurisdiction: "European Union",
    lastUpdated: "2023-06-14",
    source: "Proposed AI Act",
    tags: ["eu", "artificial intelligence", "regulation"],
    learnMoreLink: "https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence",
    legalDetailsLink: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52021PC0206"
  },
  {
    id: 53,
    title: "Indian Telegraph Act, 1885 - Section 5",
    description: "Power to intercept messages in emergency",
    category: "Communications Interception",
    section: "Section 5",
    punishment: "As specified in the Act",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Indian Telegraph Act, 1885",
    tags: ["telegraph", "interception", "communications"],
    learnMoreLink: "https://www.indiacode.nic.in/handle/123456789/2263?sam_handle=123456789/1362",
    legalDetailsLink: "https://www.indiacode.nic.in/handle/123456789/2263?sam_handle=123456789/1362"
  },
  {
    id: 54,
    title: "Indian Evidence Act, 1872 - Section 65B",
    description: "Admissibility of electronic records",
    category: "Digital Evidence",
    section: "Section 65B",
    punishment: "Evidentiary rules",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Indian Evidence Act, 1872",
    tags: ["electronic evidence", "admissibility", "legal procedure"],
    learnMoreLink: "https://www.indiacode.nic.in/handle/123456789/2188?sam_handle=123456789/1362",
    legalDetailsLink: "https://www.indiacode.nic.in/handle/123456789/2188?sam_handle=123456789/1362"
  },
  {
    id: 55,
    title: "Indian Bankers' Books Evidence Act, 1891",
    description: "Admissibility of electronic bank records",
    category: "Digital Evidence",
    section: "Bankers' Books Evidence Act",
    punishment: "Evidentiary rules",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Bankers' Books Evidence Act, 1891",
    tags: ["bank records", "electronic evidence", "financial"],
    learnMoreLink: "https://www.indiacode.nic.in/handle/123456789/2189?sam_handle=123456789/1362",
    legalDetailsLink: "https://www.indiacode.nic.in/handle/123456789/2189?sam_handle=123456789/1362"
  },
  {
    id: 56,
    title: "Indian Companies Act, 2013 - Section 143",
    description: "Auditor's right to access information in electronic form",
    category: "Corporate Governance",
    section: "Section 143",
    punishment: "As specified in the Act",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Companies Act, 2013",
    tags: ["companies act", "audit", "electronic records"],
    learnMoreLink: "https://www.mca.gov.in/MinistryV2/companiesact2013.html",
    legalDetailsLink: "https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf"
  },
  {
    id: 57,
    title: "Indian Reserve Bank of India Act, 1934",
    description: "Regulation of digital payments and fintech",
    category: "Financial Regulation",
    section: "RBI Act",
    punishment: "As specified by RBI regulations",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "RBI Act, 1934",
    tags: ["rbi", "digital payments", "fintech"],
    learnMoreLink: "https://www.rbi.org.in/scripts/BS_ViewMas.aspx?ID=1025856",
    legalDetailsLink: "https://www.rbi.org.in/scripts/BS_ViewMas.aspx?ID=1025856"
  },
  {
    id: 58,
    title: "Indian Securities and Exchange Board of India Act, 1992",
    description: "Regulation of digital securities and online trading",
    category: "Financial Regulation",
    section: "SEBI Act",
    punishment: "As specified by SEBI regulations",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "SEBI Act, 1992",
    tags: ["sebi", "securities", "online trading"],
    learnMoreLink: "https://www.sebi.gov.in/legal/acts/sebi-act.html",
    legalDetailsLink: "https://www.sebi.gov.in/sebi_data/attachdocs/1291893652557.pdf"
  },
  {
    id: 59,
    title: "Indian Insurance Regulatory and Development Authority Act, 1999",
    description: "Regulation of digital insurance services",
    category: "Financial Regulation",
    section: "IRDAI Act",
    punishment: "As specified by IRDAI regulations",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "IRDAI Act, 1999",
    tags: ["irdai", "insurance", "digital services"],
    learnMoreLink: "https://www.irdai.gov.in/ADMINCMS/cms/frmGeneral_Layout.aspx?page=PageNo58&flag=1",
    legalDetailsLink: "https://www.irdai.gov.in/ADMINCMS/cms/Uploadedfiles/IRDA%20ACT%20Eng.pdf"
  },
  {
    id: 60,
    title: "Indian Competition Act, 2002",
    description: "Regulates anti-competitive practices in digital markets",
    category: "Competition Law",
    section: "Competition Act",
    punishment: "Penalty up to 10% of turnover",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Competition Act, 2002",
    tags: ["competition", "digital markets", "anti-trust"],
    learnMoreLink: "https://www.cci.gov.in/legal-framework/acts-rules/the-competition-act-2002",
    legalDetailsLink: "https://www.cci.gov.in/sites/default/files/cci_press_releases/competition-act-2002.pdf"
  },
  {
    id: 61,
    title: "Indian Consumer Protection Act, 2019",
    description: "Protection of consumers in e-commerce and digital services",
    category: "Consumer Protection",
    section: "Consumer Protection Act",
    punishment: "Imprisonment and fines as specified",
    jurisdiction: "India",
    lastUpdated: "2020-07-20",
    source: "Consumer Protection Act, 2019",
    tags: ["consumer protection", "e-commerce", "digital services"],
    learnMoreLink: "https://consumeraffairs.nic.in/acts-and-rules/consumer-protection",
    legalDetailsLink: "https://legislative.gov.in/sites/default/files/A2019-35.pdf"
  },
  {
    id: 62,
    title: "Indian Medical Council Act - Telemedicine Guidelines",
    description: "Regulations for telemedicine and digital healthcare",
    category: "Healthcare",
    section: "Telemedicine Guidelines",
    punishment: "As per medical council regulations",
    jurisdiction: "India",
    lastUpdated: "2020-03-25",
    source: "Telemedicine Practice Guidelines",
    tags: ["telemedicine", "healthcare", "digital health"],
    learnMoreLink: "https://www.mohfw.gov.in/pdf/Telemedicine.pdf",
    legalDetailsLink: "https://www.mohfw.gov.in/pdf/Telemedicine.pdf"
  },
  {
    id: 63,
    title: "Indian Personal Data Protection Bill (Proposed)",
    description: "Proposed comprehensive data protection legislation",
    category: "Data Protection",
    section: "PDP Bill",
    punishment: "Proposed fines up to ₹15 crore or 4% of global turnover",
    jurisdiction: "India",
    lastUpdated: "2022-11-18",
    source: "Digital Personal Data Protection Bill",
    tags: ["data protection", "proposed", "india"],
    learnMoreLink: "https://www.meity.gov.in/content/digital-personal-data-protection-bill-2022",
    legalDetailsLink: "https://www.meity.gov.in/writereaddata/files/The%20Digital%20Personal%20Data%20Protection%20Bill%2C%202022.pdf"
  },
  {
    id: 64,
    title: "Indian Non-Personal Data Governance Framework (Proposed)",
    description: "Proposed framework for non-personal data governance",
    category: "Data Governance",
    section: "NPD Framework",
    punishment: "To be specified",
    jurisdiction: "India",
    lastUpdated: "2022-07-21",
    source: "Report by Committee on Non-Personal Data Governance Framework",
    tags: ["non-personal data", "governance", "proposed"],
    learnMoreLink: "https://static.mygov.in/rest/s3fs-public/mygov_159453381955063671.pdf",
    legalDetailsLink: "https://static.mygov.in/rest/s3fs-public/mygov_159453381955063671.pdf"
  },
  {
    id: 65,
    title: "Indian National Cybersecurity Strategy (Proposed)",
    description: "Proposed national strategy for cybersecurity",
    category: "Cybersecurity Strategy",
    section: "National Cybersecurity Strategy",
    punishment: "Strategic framework",
    jurisdiction: "India",
    lastUpdated: "2023-01-15",
    source: "Proposed National Cybersecurity Strategy",
    tags: ["cybersecurity strategy", "national security", "proposed"],
    learnMoreLink: "https://www.meity.gov.in/content/national-cyber-security-strategy-2020",
    legalDetailsLink: "https://www.meity.gov.in/writereaddata/files/National_Cyber_Security_Strategy-2020.pdf"
  }
];

  filteredLaws: CyberLaw[] = [];
  categories: string[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';

  constructor() {
    // Initialize with all laws
    this.filteredLaws = this.laws;
    this.extractCategories();
  }

  private extractCategories(): void {
    this.categories = [...new Set(this.laws.map(law => law.category))];
  }

  searchLaws(): void {
    if (!this.searchTerm && !this.selectedCategory) {
      this.filteredLaws = this.laws;
      return;
    }

    this.filteredLaws = this.laws.filter(law => {
      const matchesSearch = !this.searchTerm || 
        law.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        law.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        law.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));

      const matchesCategory = !this.selectedCategory || law.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  onSearchChange(): void {
    this.searchLaws();
  }

  onCategoryChange(): void {
    this.searchLaws();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.filteredLaws = this.laws;
  }

  getTagsClass(tag: string): string {
    const tagClasses: { [key: string]: string } = {
      'hacking': 'tag-hacking',
      'fraud': 'tag-fraud',
      'privacy': 'tag-privacy',
      'terrorism': 'tag-terrorism',
      'copyright': 'tag-copyright',
      'data protection': 'tag-data-protection',
      'unauthorized access': 'tag-unauthorized',
      'identity theft': 'tag-identity-theft',
      'personation': 'tag-personation',
      'voyeurism': 'tag-voyeurism',
      'image abuse': 'tag-image-abuse',
      'national security': 'tag-national-security',
      'sovereignty': 'tag-sovereignty',
      'obscenity': 'tag-obscenity',
      'pornography': 'tag-pornography',
      'electronic content': 'tag-electronic-content',
      'interception': 'tag-interception',
      'monitoring': 'tag-monitoring',
      'government powers': 'tag-government-powers',
      'cheating': 'tag-cheating',
      'property': 'tag-property',
      'forgery': 'tag-forgery',
      'electronic records': 'tag-electronic-records',
      'document fraud': 'tag-document-fraud',
      'piracy': 'tag-piracy',
      'digital content': 'tag-digital-content',
      'personal data': 'tag-personal-data',
      'protected computers': 'tag-protected-computers',
      'federal law': 'tag-federal-law',
      'india': 'tag-india',
      'damage': 'tag-damage',
      'compensation': 'tag-compensation',
      'computer system': 'tag-computer-system',
      'confidentiality': 'tag-confidentiality',
      'data breach': 'tag-data-breach'
    };

    return tagClasses[tag] || 'tag-default';
  }

  // Method to open external links
  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}