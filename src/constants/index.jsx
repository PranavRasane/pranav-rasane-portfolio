import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import Project1 from '../assets/projects/Project1.png'
import Project2 from '../assets/projects/Project2.png'
import Project3 from '../assets/projects/Project3.png'
import Project4 from '../assets/projects/Project4.png'

export const NAVIGATION_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Bio', href: '#bio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work Experience', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  name: 'Pranav Rasane',
  greet: 'Hey there! 👋',
  description:
    'I’m a recent engineering graduate with a curious mind exploring the intersection of Artificial Intelligence, Machine Learning, and Software Engineering. I create systems that think, learn, and adapt, from intelligent drones to data-driven web platforms. My work combines algorithmic precision with human-centered design to build digital experiences that are functional, scalable, and futuristic.',
}

export const PROJECTS = [
  {
    id: 1,
    name: 'AgroPredict — ML-Based Crop Recommendation System',
    description:
      'Built and deployed a Python-Flask web app that recommends the most suitable crops using trained ML models. Achieved 90% accuracy and reduced manual selection time by 40%, empowering farmers through data-driven insights.',
    image: Project1,
    githubLink: 'https://github.com/PranavRasane',
  },
  {
    id: 2,
    name: 'Autonomous Drone for Surveillance using Raspberry Pi & YOLOv8',
    description:
      'Developed a GPS-enabled drone system with real-time fire, smoke, and crowd detection. Integrated YOLOv8 on Raspberry Pi 5 for intelligent monitoring, proactive alerts, and IoT-based data communication for secure surveillance.',
    image: Project2,
    githubLink: 'https://github.com/PranavRasane',
  },
  {
    id: 3,
    name: 'ResumeClassifier — AI-Powered Resume Screening',
    description:
      'Engineered an NLP-based resume screening app using SVC, KNN, and Random Forest models. Automated candidate-job matching with Streamlit integration, cutting screening time by 60% and boosting recruiter efficiency.',
    image: Project3,
    githubLink: 'https://github.com/PranavRasane',
  },
  {
    id: 4,
    name: 'SmartLoanPredict — Financial Risk Classification System',
    description:
      'Created an ML-powered loan eligibility predictor using Random Forest, SVC, and KNN models with hyperparameter tuning. Delivered a real-time web interface offering personalized and transparent loan predictions.',
    image: Project4,
    githubLink: 'https://github.com/PranavRasane',
  },
]

export const BIO = [
  'I am Pranav Rasane, a recent engineering graduate passionate about Artificial Intelligence, Machine Learning, and Full-Stack Development.',
  'I specialize in Python, web development, and building intelligent systems that learn, adapt, and solve complex real-world problems.',
  'As Co-founder of Webonacci, I have delivered responsive websites and ML-integrated applications, refining skills in analytical thinking, problem-solving, collaboration, leadership, project ownership, and strategic decision-making.',
  'With certifications in Generative AI, Natural Language Processing, AI and Machine Learning, and Cloud Computing from Google Cloud and NPTEL, I bring proven expertise to design scalable, innovative solutions.',
  'Beyond code, I aim to help companies enhance decision-making, automate processes, and deliver impactful digital experiences that drive measurable results.',
]

export const EXPERIENCES = [
  {
    title: 'Co-Founder & Web Designer',
    company: 'Webonacci',
    duration: 'July 2024 – 2025',
    description: [
      'Designed and delivered custom-coded and no-code websites featuring responsive UIs, integrated booking systems, and admin dashboards, enhancing client operations and user experience.',
      'Led the full project lifecycle, from requirement gathering and client consultation to deployment and post-launch support, applying Agile and SDLC methodologies to ensure timely and high-quality delivery.',
      'Enhanced machine learning-integrated web applications by implementing backend orchestration, automation workflows, and data-driven analytics, improving system efficiency and engagement.',
      'Developed hands-on expertise in API development, frontend frameworks (React, HTML/CSS/JS), and backend services (Node.js, databases), enabling end-to-end web solutions that are scalable, reliable, and user-focused.',
      'Collaborated closely with clients and team members, strengthening skills in problem-solving, strategic thinking, project ownership, and client relationship management, delivering solutions aligned with business goals.',
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'B.Tech in Electronics & Communication (AI & ML Specialization)',
    institution: 'MIT World Peace University, Pune',
    duration: '2021 – 2025',
    description:
      'Graduated with a CGPA of 8.51, specializing in AI and Machine Learning. Completed hands-on projects in data analysis, computer vision, and autonomous systems. Actively engaged in technical communities and represented innovative AI/IoT projects at academic showcases.',
  },
  {
    degree: 'Higher Secondary Education (Science Stream)',
    institution: 'V.K. Patil Junior College, Ahmednagar',
    duration: '2019 – 2021',
    description:
      'Completed 12th grade with 82%. Excelled in Mathematics and Physics while developing a strong analytical and technical foundation.',
  },
]

export const SOCIAL_MEDIA_LINKS = [
  {
    href: 'mailto:pranav.rasane@gmail.com',
    icon: FaEnvelope,
  },
  {
    href: 'https://github.com/PranavRasane',
    icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/pranav-rasane/',
    icon: FaLinkedin,
  },
]
