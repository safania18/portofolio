import instagramIcon from "../assets/Instagram.webp";
import linkedinIcon from "../assets/linkedin.webp";
import githubIcon from "../assets/Github.webp";
import websiteIcon from "../assets/website.webp";
import Insamo1 from "../assets/Insamo/20251105_151227.webp";
import Insamo2 from "../assets/Insamo/20251105_151248.webp";
import Insamo3 from "../assets/Insamo/20251105_151302.webp";

// const cogniva = Array.from({ length: 23 }, (i) =>
//   require(`../assets/Cogniva AI Assesment System/Slide${i + 1}.webp`)
// );

const cogniva = Object.entries(
  import.meta.glob("../assets/Cogniva AI Assesment System/*.webp", {
    eager: true,
  }),
)
  .sort((a, b) => a[0].localeCompare(b[0])) // urut Slide1, Slide2, ...
  .map(([, img]) => img.default);

export const PROFILE_DATA = {
  name: "Aldan Prayogi",
  role: "Automation & Control Systems Engineer",
  email: "prayogialdan@gmail.com",
  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/aldan_prayogi",
      icon: instagramIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aldan-prayogi",
      icon: linkedinIcon,
    },
    {
      name: "Github",
      url: "https://github.com/safania18",
      icon: githubIcon,
    },
    {
      name: "Website",
      url: "https://safania18.github.io/portofolio",
      icon: websiteIcon,
    },
  ],
};

const en = {
  nav: {
    home: "Home",
    about: "About",
    education: "Education",
    organization: "Organization",
    skills: "Skills",
    projects: "Projects",
    ip: "IP / HAKI",
    certifications: "Certifications",
    resume: "Resume",
    contact: "Contact",
    hire_me: "Hire Me",
  },
  hero: {
    greeting: "Hello, I'm",
    download_cv: "Download CV",
    contact_me: "Contact Me",
  },
  cv: {
    summary: "Professional Summary",
    experience: "Work Experience",
    education: "Education",
    organization: "Organization Experience",
    skills: "Technical Skills",
    projects: "Key Projects",
    certifications: "Certifications",
    skills_hard: "Hard Skills",
    skills_soft: "Soft Skills",
  },
  about_section: {
    title: "About Me",
    subtitle: "Software That Drives Efficiency",
    professional_journey: "Professional Journey",
    key_experiences: "Key Experiences",
    projects_completed: "Projects Completed",
  },
  profile: {
    name: "Aldan Prayogi",
    role: "Automation & Control Systems Engineer",
    description:
      "Electrical Automation Engineer with hands-on experience in industrial manufacturing, electrical systems, instrumentation, and automation. Skilled in troubleshooting electrical and control systems, PLC programming, instrumentation, sensor integration, preventive maintenance, and root cause analysis. Experienced in supporting industrial equipment and production processes through automation, monitoring, and data-driven solutions. Familiar with manufacturing operations and committed to maintaining equipment reliability while prioritizing safety, quality, and productivity.",
  },
  skills: {
    title: "Skills",
    hard: [
      "Distributed Control System (Yokogawa DCS)",
      "Control Logic Design (Sequence & Interlock)",
      "Instrumentation & Control Engineering",
      "PLC-Based Control Systems",
      "Electrical & Control Panel Wiring",
      "Industrial Automation Systems",
      "Control System Troubleshooting",
      "Linux Server (Ubuntu VPS)",
      "Docker & Docker Compose",
      "Git & CI/CD (GitHub Actions)",
      "FreeCAD",
      "KiCAD",
    ],
    soft: [
      "Problem Solving",
      "Analytical Thinking",
      "Technical Communication",
      "Collaboration & Teamwork",
      // "Fast Learner",
    ],
  },
  education_section: {
    subtitle: "Academic Background",
    key_achievements: "Key Achievements",
  },
education: {
  title: "Education",
  items: [
    {
      school: "Institut Teknologi Sepuluh Nopember (ITS)",
      degree: "Bachelor of Applied Science in Automation Engineering",
      period: "2022 - 2026",
      gpa: "3.70/4.00",
      description:
        "Focused on Industrial Automation and Process Control, with an emphasis on Distributed Control Systems (DCS), PLC programming, and field instrumentation. Gained hands-on experience in control logic, analog and digital signal handling, interlocks, and industrial troubleshooting. Undergraduate thesis focused on CNN-based detection of Stut Bolt and Hole completeness for Dash Panel inspection in automotive manufacturing, applying computer vision and deep learning to automated quality inspection.",
      achievements: [
        "Graduated with a GPA of 3.70/4.00",
        "Published research on Palm Oil Harvesting Efficiency",
        "Led campus digitalization projects involving IoT and industrial automation",
      ],
    },
    {
      school: "SMK Negeri 2 Bojonegoro",
      degree: "Vocational High School in Mechatronics Engineering (4-Year Program)",
      period: "2018 - 2022",
      gpa: "89.70/100",
      description:
        "Completed a 4-year vocational program specializing in Mechatronics Engineering, with a focus on industrial automation, robotics, electrical systems, and PLC programming.",
      achievements: [
        "2nd Place - Regional Student Competency Competition (LKS) in Mechatronics",
        "Represented East Java at the Provincial Student Competency Competition (LKS) in Mechatronics (2021)",
      ],
    },
  ],
},
  experience: {
    title: "Experience",
    items: [
      {
  company: "PT Pupuk Kujang",
  role: "IoT System Engineer Intern",
  period: "March 2026 - August 2026",
  description: [
    "Calibrated Preseeure transmitter, Level Transmitter ",
    "fixed problem control pneumatic pabrik 1A, with change relay ",
    "Implemented data structered data for electrical motor service report, to create report and calculate robusness of electric motor " 
  ],
  showInCV: true,
},
      {
  company: "PT Petrokimia Gresik",
  role: "IoT System Engineer Intern",
  period: "March 2026 - August 2026",
  description: [
    "Developed an IP62-compliant industrial handheld RFID scanner, improving stock opname efficiency by 75% and reducing item search time from 1 hour to 15 minutes through integrated RFID, ESP32, and web-based inventory management.",
    "Developed a Smart Receiving Assistant using OCR and RPA to automate document data extraction and system entry, reducing repetitive manual processing and improving workflow structure.",
    "Developed a camera-based AI attendance system with facial recognition and real-time integration with the department's existing application.",
    "Developed Rover v3 for safer SLAM-based exploration, covering 3D design with FreeCAD, 3D printing, mechanical assembly, and prototype testing."
  ],
  showInCV: true,
},
      {
        company: "Direktorat Sumber Daya Manusia dan Organisasi ITS",
        role: "Software Engineer",
        period: "Oct 2025 - March 2026",
        description: [
          "Designed and implemented a full-stack web-based assessment platform to automate and standardize competency assessments, combined dynamic question difficulty, scoring logic, and personalized learning recommendations.",
        ],
        showInCV: true, // Set to false to hide from CV
      },
      {
        company:
          "Pusat Studi Mitigasi Kebencanaan dan Perubahan Iklim (MKPI) ITS",
        role: "Project Manager",
        period: "Aug 2025 - August 2026",
        description: [
          "Served as Project Manager responsible for project planning and timeline management. When microcontroller resource limitations caused prediction processing errors, led the decision to migrate computational workloads to the backend, with result transmitted as status signals to trigger alarm, ensuring system reliability and on-time delivery.",
          "Applied CI/CD automation to accelerate deployment and reduce lead time code synchronization",
        ],
        showInCV: true,
      },
      {
        company: "PLN Nusantara Power And Services",
        role: "Automation & AI Engineer Intern",
        period: "Aug 2025 - Jan 2026",
        description:
          "Automated the inspection of micro-cracks in solar panel (PLTS) modules that were difficult to identify through manual inspection even with electroluminescence (EL) imaging. Developed a YOLO-based image processing pipeline and a data summarization application to convert image-level detection results into actionable inspection summaries, supporting more efficient and consistent maintenance evaluations.",
        showInCV: true,
      },
     {
  company: "Toyota Motor Manufacturing Indonesia",
  role: "Operational Management Development Division (OMDD) Digital Manufacturing / DX Engineer Intern",
  period: "Aug 2024 - Aug 2025",
  description: [
    "Supported TPS and Digital Transformation initiatives by developing production monitoring solutions to visualize manufacturing processes, product traceability, and cycle time across manpower and equipment.",
    "Applied data-driven problem solving to identify inspection process issues and develop an AI-based visual inspection solution, achieving 93.70% detection accuracy and reducing inspection time from 40 seconds to 5 seconds per unit.",
    "Improved manufacturing data workflows by optimizing the image annotation process, reducing annotation time from 2,166 minutes to 489 minutes per 100 images and supporting faster model development."
  ],
  showInCV: true,
},
      {
        company: "LPK Yaruki Solusi Indonesia",
        role: "Web Developer (Marketing Website) — Freelance",
        period: "Jun 2025 - Sep 2025",
        description: [
          "Developed and optimized a CMS-based marketing website, enabling non-technical users to independently manage and update website content.",
          "Optimized frontend performance, achieving a 35% faster page load time to improve user experience and retention.",
          "Supported early-stage growth by acquiring 120 new users in the first month, reaching 125 active users, with traffic primarily driven by direct and organic search channels.",
        ],
        showInCV: true,
      },
      {
        company: "Research Egrek Digital (ITS)",
        role: "Applied Computer Vision Researcher",
        period: "Mar 2024 - Jul 2024",
        description: [
          "Developed a computer vision–based inspection system to reduce subjectivity in identifying ripe and unripe palm oil fruit bunches at elevated heights, where human visual assessment is limited. Implemented image processing pipelines and an Android classification application (Flutter) to enable consistent evaluations and store inspection data for management decision support in harvesting operations.",
        ],
        showInCV: true,
      },
      {
        company: "Hysage (ITS)",
        role: "IoT & Web Systems Engineer (Project Lead)",
        period: "Aug 2023 - Dec 2023",
        description:
          "Led the end-to-end development of an IoT-based hydroponics management system addressing inconsistent nutrient maintenance due to limited human presence. Designed electrical systems, implemented hardware control logic, and developed a Laravel-based web platform to monitor and remotely control nutrient composition in real time.",
        showInCV: true,
      },
      {
        company: "Elmech Technology",
        role: "Embedded & IoT Engineer (Part-Time)",
        period: "Jan 2022 - Aug 2022",
        description: [
          "Designed custom PCBs for 3-phase power monitoring systems using PZEM sensors.",
          "Programmed Arduino-based controllers (C++) and conducted system testing to meet quality standards.",
          "Integrated 3-phase energy monitoring with Blynk and web-based IoT platforms.",
          "Implemented Modbus communication with Schneider PM1200 power meters.",
          "Designed 3D enclosure models for box component and assembled electronic components.",
          "Ensured system reliability through validation and quality control procedures.",
        ],
        showInCV: true,
      },
    ],
  },
  organization: {
    title: "Organization Experience",
    items: [
      {
        name: "Himpunan Mahasiswa Departemen Teknik Elektro Otomasi (HMDTEO)",
        role: "Staff profession and science",
        period: "2023 - 2024",
        description: [
          "Delivered hands-on technical training focused on PLC programming fundamentals for automation engineering students",
          "Explained control logic using practical analogies and real-world process examples to improve conceptual understanding",
          "Helped students grasp core automation concepts including sequence logic, I/O behavior, and control flow through practice-based sessions",
        ],
        showInCV: true,
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    view_project: "View Project",
    source_code: "Source Code",
    items: [
      {
        title: "RFID Handheld Scanner (PetroScanner-001)",
year: "2026",
description:
  "Designed and built an industrial IoT handheld RFID scanner to automate inventory tracking, reducing warehouse stock opname lead time.",
details:
  "Served as the primary hardware and firmware developer for a custom RFID scanning ecosystem. Developed ESP32-based firmware utilizing BLE (Bluetooth Low Energy) and WebSocket protocols to ensure low-latency, real-time data transmission to a progressive web application (PWA). Engineered a dedicated WebSocket emulator to streamline testing environments and designed the physical, ergonomic controller housing using parametric 3D modeling in FreeCAD. The system drastically reduces manual warehouse search times and human error during large-scale asset audits.",
        image: "",
        images: [""],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
       tags: [
  "Hardware & Firmware",
  "ESP32",
  "C++ / Arduino",
  "WebSockets",
  "BLE (Bluetooth Low Energy)",
  "FreeCAD (3D Design)",
  "React (PWA)",
  "Node.js / Python", // Pilih salah satu yang digunakan untuk backend emulator/PWA Anda
],
        showInCV: false,
      },
      {
        title: "Cogniva – AI Assessment & Adaptive Learning Platform",
        year: "2026",
        description:
          "A production-ready adaptive learning platform deployed using CI/CD, Docker, and Nginx, consisting of multiple backend services and a frontend application.",
        details:
          "Designed and deployed an end-to-end system with two backend services and one frontend, containerized using Docker and orchestrated with Docker Compose. Implemented CI/CD using GitHub Actions with remote deployment to an Ubuntu VPS via SSH. Configured Nginx as a reverse proxy to handle routing and service isolation.",
        image: cogniva[0],
        images: [...cogniva],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
        tags: [
          "CI/CD",
          "GitHub Actions",
          "Docker",
          "Docker Compose",
          "Nginx",
          "Ubuntu VPS",
          "React",
          "Python Flask",
        ],
        showInCV: false,
      },
      {
        title: "Insamo Earthquake detection and Insamo Flood detection",
        year: "2025",
        description: "",
        details:
          "Detailed breakdown: This project involved collecting thousands of images from the production line, labeling them using CVAT, and training a YOLOv8 model. The model was then deployed on an industrial PC to provide real-time feedback to operators.",
        image: Insamo1,
        images: [Insamo1, Insamo2, Insamo3],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
        tags: ["ESP32", "Microcontroller", "MQTT"],
        showInCV: false,
      },
      {
        title: "Quality Inspection With Image Processing",
        year: "2024",
        description:
          "Advanced model for automotive component inspection at TMMIN using YOLOv8, improving F1 score from 0.07 to 0.98.",
        details:
          "Detailed breakdown: This project involved collecting thousands of images from the production line, labeling them using CVAT, and training a YOLOv8 model. The model was then deployed on an industrial PC to provide real-time feedback to operators.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        ],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
        tags: ["YOLOv8", "Python", "TMMIN"],
        showInCV: false,
      },
      {
        title: "Egrek Digital",
        year: "2024",
        description:
          "Palm oil harvesting efficiency research involving image classification and real-time monitoring with Raspberry Pi.",
        details:
          "The Egrek Digital project aimed to modernize traditional harvesting. I developed a Flutter app that communicates with a Raspberry Pi via MQTT to monitor harvest yields and tree conditions in real-time.",
        image:
          "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1473960154316-0ee418ae3490?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bbb9e34a690e?q=80&w=2070&auto=format&fit=crop",
        ],
        link_sourcecode: "https://github.com",
        tags: ["Flutter", "Python", "OpenCV"],
        showInCV: false,
      },
      {
        title: "Hydroponics Management System",
        year: "2023",
        description:
          "Integrated IoT system for monitoring pH, TDS, and temperature using Laravel and multiple environmental sensors.",
        details:
          "Built using Laravel for the backend and React for the frontend dashboard. The hardware uses an ESP32 to push sensor data through a REST API every 60 seconds.",
        image:
          "https://images.unsplash.com/photo-1558449028-s5493.700927f10?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1558449028-s5493.700927f10?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1585144860106-9983ed736277?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["IoT", "Laravel", "Automation"],
        showInCV: false,
      },
      {
        title: "Monitoring 3 Phase Motor",
        year: "2023",
        description:
          "Industrial IoT solution for real-time monitoring of three-phase motor health and power consumption.",
        details:
          "Used CT sensors and an STM32 microcontroller to monitor current draw and vibrations. Data is visualized on a local SCADA screen.",
        image:
          "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["IoT", "STM32", "Instrumentation"],
        showInCV: false,
      },
      {
        title: "Line Tracer Analog",
        year: "2022",
        description:
          "Analog circuit-based line tracer robot using op-amps for signal processing and motor control.",
        details:
          "This project focused on analog circuit design, using op-amps to achieving robot follow the track.",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["Analog", "Robotics", "PCB Design"],
        showInCV: false,
      },
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        year: "2025",
        title: "Master Integrated Automation",
        issuer: "PT Yokogawa Indonesia",
        description: "From sensor to Smart Decision DCS.",
        link: "https://www.linkedin.com/in/aldan-prayogi/overlay/1764163558362/single-media-viewer/?profileId=ACoAAD5j078BAJ2NLam_Q5grELpvkefZIrsuwus",
        image:
          "https://media.licdn.com/dms/image/v2/D562DAQEyATADBSanvA/profile-treasury-document-cover-images_480/B56ZrAV1hfJQBI-/0/1764163545446?e=1769526000&v=beta&t=m2r_zOrj3whWMT_odsbkZXaaWlABbtYGdC7VkJpFhP4",
        showInCV: true,
      },
      {
        year: "2025",
        title: "English Certification B1 Level",
        issuer: "Global Language Center ITS",
        description: "Fundamental electrical wiring and installation safety.",
        link: "https://www.linkedin.com/in/aldan-prayogi/overlay/1768982361621/single-media-viewer/?profileId=ACoAAD5j078BAJ2NLam_Q5grELpvkefZIrsuwus",
        image:
          "https://media.licdn.com/dms/image/v2/D562DAQHNt74GPq_ewg/profile-treasury-document-cover-images_480/B56ZvfjSlJIUBI-/0/1768982130959?e=1769590800&v=beta&t=eOdc1rBZm7n7JshWn6CMKM6N9C5L5k9ibkVYudnqNn8",
        showInCV: true,
      },
      {
        year: "2020",
        title: "PLC-Based Control Installation",
        issuer: "BNSP",
        description:
          "Installation technician certification for industrial PLC systems.",
        link: "https://www.linkedin.com/in/aldan-prayogi/details/certifications/1760368721827/single-media-viewer/?profileId=ACoAAD5j078BAJ2NLam_Q5grELpvkefZIrsuwus",
        image:
          "https://media.licdn.com/dms/image/v2/D562DAQHpuIMfONm61g/profile-treasury-document-cover-images_480/B56ZneJg6RI0BI-/0/1760368673363?e=1769529600&v=beta&t=O6UB0gEV6Ce0VYoqiG9TQxX_WELBjnrRSVKemLzwMFY",
        showInCV: true,
      },

      {
        year: "2019",
        title: "Simple Building Electrical Installation",
        issuer: "BNSP",
        description: "Fundamental electrical wiring and installation safety.",
        link: "https://www.linkedin.com/in/aldan-prayogi/details/certifications/1760368530534/single-media-viewer/?profileId=ACoAAD5j078BAJ2NLam_Q5grELpvkefZIrsuwus",
        image:
          "https://media.licdn.com/dms/image/v2/D562DAQHqDeMeNYCNKA/profile-treasury-document-cover-images_480/B56ZneI_M5G0BI-/0/1760368524141?e=1769529600&v=beta&t=ZaEgrbIWgUUbbVodRXKpcOHh-JxQuqPp2vd6GHzsOgY",
        showInCV: true,
      },
    ],
  },
  intellectualProperty: {
    title: "Intellectual Property",
    items: [
      {
        type: "Paten",
        title: "Sistem Pengering Gabah Berbasis IoT",
        number: "P00202301234",
        status: "Granted",
        year: "2023",
        description:
          "Inovasi sistem pengeringan otomatis dengan kontrol suhu dan kelembaban real-time.",
      },
      {
        type: "HAKI - Hak Cipta",
        title: "Software Monitoring Smart Hydroponic",
        number: "EC00202312345",
        status: "Registered",
        year: "2023",
        description:
          "Program komputer untuk manajemen nutrisi dan lingkungan tanaman hidroponik.",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together",
    email: "Email",
    socials: "Socials",
    send_message: "Send Message",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },
  },
};








const id = {
  nav: {
    home: "Beranda",
    about: "Tentang",
    education: "Pendidikan",
    organization: "Organisasi",
    skills: "Keahlian",
    projects: "Proyek",
    ip: "IP / HAKI",
    certifications: "Sertifikasi",
    resume: "Resume",
    contact: "Kontak",
    hire_me: "Rekrut Saya",
  },
  hero: {
    greeting: "Halo, saya",
    download_cv: "Unduh CV",
    contact_me: "Hubungi Saya",
  },
  cv: {
    summary: "Ringkasan Profesional",
    experience: "Pengalaman Kerja",
    education: "Pendidikan",
    organization: "Pengalaman Organisasi",
    skills: "Keahlian Teknis",
    projects: "Proyek Utama",
    certifications: "Sertifikasi",
    skills_hard: "Hard Skills",
    skills_soft: "Soft Skills",
  },
  about_section: {
    title: "Tentang Saya",
    subtitle: "Software Pendorong Efisiensi",
    professional_journey: "Perjalanan Profesional",
    key_experiences: "Pengalaman Utama",
    projects_completed: "Proyek Selesai",
  },
  profile: {
    name: "Aldan Prayogi",
    role: "Automation Engineer",
    description:
      "Seorang profesional yang penuh semangat dengan kemampuan kolaborasi yang kuat dan pengalaman bekerja dalam tim lintas disiplin. Kemampuan mendengarkan yang kuat mendukung pemahaman mendalam tentang beragam perspektif dan kebutuhan tim. Percaya bahwa kerja tim yang efektif dan komunikasi yang jelas sangat penting untuk mencapai hasil yang luar biasa, dengan komitmen untuk berkontribusi dan terus belajar demi mencapai tujuan bersama.",
  },
  skills: {
    title: "Keahlian",
    hard: [
      "Pengembangan Web (Laravel)",
      "Pemrograman Python",
      "Desain 3D (Fusion 360)",
      "Teknik Instrumentasi & Kontrol",
      "Desain PCB",
      "Wiring Elektrik",
      "Pengembangan Android Flutter",
      "Kontrol Berbasis PLC",
      "Sistem Produksi Toyota (TPS)",
      "DCS (Yokogawa)",
      "Pemrosesan Citra (OpenCV)",
      "YOLOv8",
    ],
    soft: [
      "Kolaborasi & Kerja Tim",
      "Adaptabilitas",
      "Perhatian terhadap Detail",
      "Berpikir Kritis",
      "Keingintahuan & Kemauan Belajar",
      "Pengambilan Keputusan Berbasis Data",
      "Public Speaking",
    ],
  },
  education_section: {
    subtitle: "Latar Belakang Akademik",
    key_achievements: "Pencapaian Utama",
  },
  education: {
    title: "Pendidikan",
    items: [
      {
        school: "Institut Teknologi Sepuluh Nopember (ITS)",
        degree: "Sarjana Terapan Teknik Otomasi",
        period: "2022 - Sekarang",
        gpa: "3.70/4.00",
        description:
          "Fokus pada Otomasi Industri, PLC, IoT, dan Sistem Tertanam. Aktif dalam proyek robotika dan penelitian, mempertahankan catatan akademik yang kuat.",
        achievements: [
          "Mempublikasikan Penelitian tentang Efisiensi Pemanenan Kelapa Sawit",
          "Pengembang Utama untuk beberapa proyek digitalisasi kampus",
        ],
      },
      {
        school: "SMK Negeri 2 Bojonegoro",
        degree: "Teknik Mekatronika (Program 4 Tahun)",
        period: "2018 - 2022",
        gpa: "89.70/100",
        description:
          "Menyelesaikan program kejuruan 4 tahun di bidang Teknik Mekatronika dengan fokus pada otomasi industri, robotika, kelistrikan, dan pemrograman PLC.",
        achievements: [
          "Juara 2 LKS (Lomba Kompetensi Siswa) Tingkat Wilayah Kerja Bidang Mechatronics",
          "Perwakilan Wilayah ke LKS Tingkat Provinsi Jawa Timur Bidang Mechatronics (2021)",
        ],
      },
    ],
  },
  experience: {
    title: "Pengalaman",
    items: [
      {
        company: "Direktorat Sumber Daya Manusia dan Organisasi ITS",
        role: "Software Engineer",
        period: "Okt 2025 - Sekarang",
        description:
          "Merancang dan mengimplementasikan platform penilaian berbasis web full-stack dengan tingkat kesulitan soal dinamis, logika penilaian, dan rekomendasi pembelajaran. Membangun REST API, database relasional terstruktur, dan dashboard berbasis React untuk admin dan pengguna.",
        showInCV: true,
      },
      {
        company:
          "Pusat Studi Mitigasi Kebencanaan dan Perubahan Iklim (MKPI) ITS",
        role: "Peneliti",
        period: "Agt 2025 - Sekarang",
        description: [
          "Mengembangkan model prediksi gempa menggunakan teknik machine learning dan deep learning, Long Short-Term Memory (LSTM). Melakukan pra-pemrosesan data, ekstraksi fitur, dan pelatihan model menggunakan Python dan TensorFlow, mencapai akurasi prediksi tinggi dan memberikan wawasan berharga untuk penilaian risiko gempa.",
          "Mengembangkan detektor banjir menggunakan sensor ultrasonik dan mikrokontroler",
        ],
        showInCV: true,
      },
      {
        company: "PLN Nusantara Power And Services",
        role: "Magang",
        period: "Agt 2025 - Jan 2025",
        description:
          "Membangun sistem deteksi retak objek untuk struktur beton menggunakan pemrosesan citra dan YOLOv8, mencapai akurasi 95% dan meningkatkan efisiensi pemeliharaan.",
        showInCV: true,
      },
      {
        company: "Toyota Motor Manufacturing Indonesia",
        role: "Magang",
        period: "Agt 2024 - Agt 2025",
        description:
          "Membangun pipeline deteksi objek menggunakan YOLOv8 untuk mengklasifikasikan komponen otomotif dan mengotomatiskan anotasi, mengurangi waktu pelabelan lebih dari 70% dan mencapai akurasi 98,87%.",
        showInCV: true,
      },
      {
        company: "Research Egrek Digital (ITS)",
        role: "Peneliti",
        period: "Mar 2024 - Jul 2024",
        description:
          "Mengembangkan skrip pemrosesan citra dan aplikasi klasifikasi Android (Flutter) dengan akurasi 90%+ untuk efisiensi pemanenan kelapa sawit.",
        showInCV: true,
      },
      {
        company: "Hysage (ITS)",
        role: "Project Management",
        period: "Agt 2023 - Des 2023",
        description:
          "Merancang wiring elektrik dan mengembangkan sistem pemantauan IoT real-time menggunakan Laravel untuk manajemen hidroponik.",
        showInCV: true,
      },
      {
        company: "Elmech Technology",
        role: "Paruh Waktu",
        period: "Jan 2022 - Agt 2022",
        description:
          "Merancang PCB kustom, merakit komponen elektronik, dan memprogram mikrokontroler Arduino dalam C++ untuk prototipe mesin.",
        showInCV: true,
      },
    ],
  },
  organization: {
    title: "Pengalaman Organisasi",
    items: [
      {
        name: "Himpunan Mahasiswa Departemen Teknik Elektro Otomasi (HMDTEO)",
        role: "Staf Profesi dan Keilmiahan",
        period: "2023 - 2024",
        description:
          "Memimpin divisi riset untuk menumbuhkan inovasi dan keterampilan teknis di kalangan mahasiswa. Menyelenggarakan lokakarya tentang pemrograman mikrokontroler dan IoT, mengelola tim yang terdiri dari 15 staf dan berbagai proyek mahasiswa.",
        showInCV: true,
      },
    ],
  },
  projects: {
    title: "Proyek Unggulan",
    view_project: "Lihat Proyek",
    source_code: "Kode Sumber",
    items: [
      {
        title: "Quality Inspection With Image Processing",
        year: "2024",
        description:
          "Model canggih untuk inspeksi komponen otomotif di TMMIN menggunakan YOLOv8, meningkatkan skor F1 dari 0,07 menjadi 0,98.",
        details:
          "Rincian mendalam: Proyek ini melibatkan pengumpulan ribuan gambar dari lini produksi, pelabelan menggunakan CVAT, dan pelatihan model YOLOv8. Model kemudian diterapkan pada PC industri untuk memberikan umpan balik real-time kepada operator.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        ],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
        tags: ["YOLOv8", "Python", "TMMIN"],
        showInCV: true,
      },
      {
        title: "Egrek Digital",
        year: "2024",
        description:
          "Penelitian efisiensi pemanenan kelapa sawit yang melibatkan klasifikasi citra dan pemantauan real-time dengan Raspberry Pi.",
        details:
          "Proyek Egrek Digital bertujuan untuk memodernisasi pemanenan tradisional. Saya mengembangkan aplikasi Flutter yang berkomunikasi dengan Raspberry Pi melalui MQTT untuk memantau hasil panen dan kondisi pohon secara real-time.",
        image:
          "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1473960154316-0ee418ae3490?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bbb9e34a690e?q=80&w=2070&auto=format&fit=crop",
        ],
        link_sourcecode: "https://github.com",
        tags: ["Flutter", "Python", "OpenCV"],
        showInCV: true,
      },
      {
        title: "Hydroponics Management System",
        year: "2023",
        description:
          "Sistem IoT terintegrasi untuk memantau pH, TDS, dan suhu menggunakan Laravel dan berbagai sensor lingkungan.",
        details:
          "Dibangun menggunakan Laravel untuk backend dan React untuk dashboard frontend. Perangkat keras menggunakan ESP32 untuk mengirimkan data sensor melalui REST API setiap 60 detik.",
        image:
          "https://images.unsplash.com/photo-1558449028-s5493.700927f10?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1558449028-s5493.700927f10?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1585144860106-9983ed736277?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["IoT", "Laravel", "Automation"],
        showInCV: true,
      },
      {
        title: "Monitoring 3 Phase Motor",
        year: "2023",
        description:
          "Solusi IoT industri untuk pemantauan real-time kesehatan motor tiga fasa dan konsumsi daya.",
        details:
          "Menggunakan sensor CT dan mikrokontroler STM32 untuk memantau arus dan getaran. Data divisualisasikan pada layar SCADA lokal.",
        image:
          "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["IoT", "STM32", "Instrumentation"],
        showInCV: true,
      },
      {
        title: "Line Tracer Analog",
        year: "2022",
        description:
          "Robot analog kecepatan tinggi yang dirancang untuk mengikuti garis secara presisi menggunakan kontrol PID.",
        details:
          "Proyek ini berfokus pada desain sirkuit analog, menggunakan op-amp untuk perhitungan PID alih-alih mikrokontroler digital, mencapai latensi yang sangat rendah.",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["Analog", "Robotics", "PCB Design"],
        showInCV: true,
      },
    ],
  },
  certifications: {
    title: "Sertifikasi",
    items: [
      {
        year: "2025",
        title: "Master Integrated Automation",
        issuer: "PT Yokogawa Indonesia",
        description: "Dari sensor hingga Smart Decision DCS.",
        link: "https://www.yokogawa.co.id/",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
        showInCV: true,
      },
      {
        year: "2020",
        title: "PLC-Based Control Installation",
        issuer: "BNSP",
        description: "Sertifikasi teknisi instalasi untuk sistem PLC industri.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2070&auto=format&fit=crop",
        showInCV: true,
      },
      {
        year: "2019",
        title: "Simple Building Electrical Installation",
        issuer: "BNSP",
        description: "Wiring elektrik dasar dan keselamatan instalasi.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        showInCV: true,
      },
    ],
  },
  intellectualProperty: {
    title: "Kekayaan Intelektual",
    items: [
      {
        type: "Paten",
        title: "Sistem Pengering Gabah Berbasis IoT",
        number: "P00202301234",
        status: "Granted",
        year: "2023",
        description:
          "Inovasi sistem pengeringan otomatis dengan kontrol suhu dan kelembaban real-time.",
      },
      {
        type: "HAKI - Hak Cipta",
        title: "Software Monitoring Smart Hydroponic",
        number: "EC00202312345",
        status: "Registered",
        year: "2023",
        description:
          "Program komputer untuk manajemen nutrisi dan lingkungan tanaman hidroponik.",
      },
    ],
  },
  contact: {
    title: "Hubungi Kami",
    subtitle: "Mari bekerja sama",
    email: "Email",
    socials: "Media Sosial",
    send_message: "Kirim Pesan",
    form: {
      name: "Nama",
      email: "Email",
      message: "Pesan",
      submit: "Kirim Pesan",
    },
  },
};

export const RESOURCES = {
  en: { translation: en },
  // id: { translation: id },
};
