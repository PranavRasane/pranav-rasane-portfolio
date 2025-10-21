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
    "I'm a recent engineering graduate with a curious mind exploring the intersection of Artificial Intelligence, Machine Learning, and Software Engineering. I create systems that think, learn, and adapt, from intelligent drones to data-driven web platforms. My work combines algorithmic precision with human-centered design to build digital experiences that are functional, scalable, and futuristic.",
}

export const PROJECTS = [
  {
    id: 1,
    name: 'AgroPredict — ML-Based Crop Recommendation System',
    shortDescription:
      'AI-powered crop recommendation system helping farmers make data-driven decisions',
    description:
      'Built and deployed a Python-Flask web app that recommends the most suitable crops using trained ML models. Achieved 92.3% accuracy and reduced decision-making time by 98%, empowering farmers through data-driven insights.',
    image: Project1,
    githubLink:
      'https://github.com/PranavRasane/-AgroPredict-ML-Based-Crop-Recommendation-System',

    // 🌱 AGROPREDICT THEME
    theme: {
      primary: 'from-green-500 to-emerald-500',
      secondary: 'from-green-400 to-teal-400',
      accent: 'text-green-400',
      bgGradient: 'from-green-900/30 via-emerald-900/20 to-teal-900/10',
      icon: '🌱',
      fontClass: 'font-natural',
      background: 'agropredict-bg',
    },

    metrics: {
      accuracy: 92.3,
      timeReduction: 98,
      trainingSamples: 2200,
      cropCoverage: 22,
    },

    caseStudy: {
      problem:
        'Farmers face time-consuming (2-4 hours) and error-prone crop selection processes, leading to 15-20% yield reduction due to suboptimal choices.',
      solution:
        'Real-time AI system analyzing 7 environmental parameters to deliver 92.3% accurate crop recommendations in under 200ms.',
      approach:
        'Gaussian Naive Bayes model trained on 2,200+ agricultural samples across 22 crops with comprehensive parameter analysis.',
      results:
        '98% faster decisions, 92.3% prediction accuracy, and potential 15-20% yield improvement through optimal crop selection.',

      techStack: [
        'Python',
        'Flask',
        'Scikit-learn',
        'Gaussian Naive Bayes',
        'Bootstrap',
        'NumPy',
        'Pandas',
        'Pickle',
      ],

      features: [
        'Real-time Predictions: <200ms response',
        '22 Major Crops Coverage',
        '7 Parameter Analysis',
        'Mobile-First Design',
      ],

      parameters: [
        { name: 'Nitrogen (N)', range: '0-140' },
        { name: 'Phosphorus (P)', range: '5-145' },
        { name: 'Potassium (K)', range: '5-205' },
        { name: 'Temperature', range: '9.47-43.68°C' },
        { name: 'Humidity', range: '14.27-99.99%' },
        { name: 'pH Levels', range: '3.50-9.94' },
        { name: 'Rainfall', range: '28.08-298.56mm' },
      ],

      performance: {
        trainingAccuracy: 94,
        testingAccuracy: 92.3,
        inferenceSpeed: '<200ms',
        datasetSize: 2200,
      },
    },
  },
  {
    id: 2,
    name: 'Autonomous Campus Surveillance Drone',
    shortDescription:
      'Edge-AI drone for proactive security and crowd management',
    description:
      'Developed an intelligent surveillance drone with real-time fire, smoke, and crowd detection using YOLOv5. Integrated Raspberry Pi 5 and Pixhawk for autonomous GPS waypoint navigation and IoT alerts.',
    image: Project2,
    githubLink: 'https://github.com/PranavRasane/Autonomous-Drone-Surveillance',

    // 🚁 DRONE THEME
    theme: {
      primary: 'from-blue-500 to-cyan-500',
      secondary: 'from-blue-400 to-indigo-400',
      accent: 'text-blue-400',
      bgGradient: 'from-blue-900/30 via-cyan-900/20 to-indigo-900/10',
      icon: '🚁',
      fontClass: 'font-mono font-bold',
      background: 'drone-bg',
    },

    metrics: {
      detectionAccuracy: 88,
      realTimeSpeed: 92,
      anomalyTypes: 4,
      missionSuccess: 95,
    },

    caseStudy: {
      problem:
        'Traditional static security cameras have blind spots and cannot dynamically respond to incidents like fire or overcrowding.',
      solution:
        'Autonomous drone providing dynamic aerial perspective with real-time AI detection and instant IoT alerts.',
      approach:
        'YOLOv5 model on Raspberry Pi 5 with Pixhawk flight controller, processing live video for fire, smoke, and crowd detection.',
      results:
        'Stable autonomous flight, accurate real-time detection, and effective alerting system with robust safety features.',

      techStack: [
        'Python',
        'YOLOv5',
        'OpenCV',
        'Raspberry Pi 5',
        'Pixhawk',
        'MAVLink',
        'ThingSpeak IoT',
        'ArduPilot',
      ],

      features: [
        'Real-time Fire/Smoke Detection',
        'Crowd Density Monitoring',
        'Autonomous GPS Navigation',
        'IoT Cloud Alerting',
      ],

      detectionClasses: ['Person', 'Head (counting)', 'Fire', 'Smoke'],

      hardware: [
        'Raspberry Pi 5 (8GB)',
        'Pixhawk 2.4.8 Flight Controller',
        'Ublox NEO-M8N GPS',
        'HC-SR04 Ultrasonic Sensors',
      ],

      performance: {
        model: 'YOLOv5n (Nano)',
        dataset: '15,432 fire/smoke + 2,563 crowd images',
        processing: 'Real-time 30FPS',
        range: '1.5m obstacle avoidance',
      },
    },
  },
  {
    id: 3,
    name: 'AI-Powered Resume Classification System',
    shortDescription: 'Automated resume screening and candidate matching',
    description:
      'Engineered an NLP-based resume screening app using K-Neighbors Classifier. Automated candidate-job matching with 98.45% accuracy, cutting screening time by 80% and boosting recruiter efficiency.',
    image: Project3,
    githubLink:
      'https://github.com/PranavRasane/-SmartHire-Intelligent-Resume-Screening-using-NLP',

    // 📄 RESUMECLASSIFIER THEME
    theme: {
      primary: 'from-purple-500 to-violet-500',
      secondary: 'from-purple-400 to-fuchsia-400',
      accent: 'text-purple-400',
      bgGradient: 'from-purple-900/30 via-violet-900/20 to-fuchsia-900/10',
      icon: '📄',
      fontClass: 'font-serif',
      background: 'resume-bg',
    },

    metrics: {
      accuracy: 98.45,
      screeningTime: 80,
      categories: 25,
      processingSpeed: 2,
    },

    caseStudy: {
      problem:
        'HR teams spend 15-20 hours weekly on manual resume screening, leading to delayed hiring and inconsistent evaluations.',
      solution:
        'AI system classifying resumes into 25 job roles with 98.45% accuracy, reducing screening to seconds.',
      approach:
        'K-Neighbors Classifier with TF-IDF vectorization on 962 professionally labeled resumes.',
      results:
        '80% reduction in screening time, standardized evaluations, and estimated $15,000 annual savings.',

      techStack: [
        'Python',
        'Scikit-learn',
        'TF-IDF',
        'NLP',
        'Pandas',
        'Flask',
        'Pickle',
      ],

      features: [
        '25 Job Role Classification',
        'Real-time Processing (<2s)',
        'TF-IDF Feature Engineering',
        'Production REST API',
      ],

      performance: {
        accuracy: 98.45,
        precision: 97.8,
        recall: 98.1,
        f1Score: 97.9,
        trainingSamples: 769,
        testingSamples: 193,
      },

      categories: [
        'Data Science',
        'Software Engineering',
        'DevOps',
        'ML Engineering',
        'Web Development',
        'Mobile Development',
        'Data Analysis',
        'Cloud Architecture',
      ],
    },
  },
  {
    id: 4,
    name: 'SmartLoan Predict — Financial Risk Classification',
    shortDescription: 'AI-powered loan eligibility and risk assessment',
    description:
      'Created an ML-powered loan eligibility predictor using Logistic Regression. Delivered a real-time web interface offering personalized and transparent loan predictions with 84.6% accuracy.',
    image: Project4,
    githubLink:
      'https://github.com/PranavRasane/-SmartLoanPredict-Smart-Loan-Eligibility-Predictor',

    // 💰 SMARTLOANPREDICT THEME
    theme: {
      primary: 'from-orange-500 to-amber-500',
      secondary: 'from-orange-400 to-yellow-400',
      accent: 'text-amber-400',
      bgGradient: 'from-orange-900/30 via-amber-900/20 to-yellow-900/10',
      icon: '💰',
      fontClass: 'font-semibold',
      background: 'loan-bg',
    },

    metrics: {
      accuracy: 84.6,
      processingSpeed: 89,
      features: 11,
      applications: 600,
    },

    caseStudy: {
      problem:
        'Traditional loan approval is manual, time-consuming, and inconsistent, leading to rising default rates and lengthy processing.',
      solution:
        'ML system predicting loan eligibility with 84.6% accuracy, automating decisions and reducing bias.',
      approach:
        'Logistic Regression model analyzing 11 financial features with Flask web interface for real-time predictions.',
      results:
        'Approval time reduced from hours to seconds with transparent, data-driven decision making.',

      techStack: [
        'Python',
        'Scikit-learn',
        'Logistic Regression',
        'Flask',
        'Bootstrap',
        'Pandas',
      ],

      features: [
        'Real-time Eligibility Prediction',
        '11 Feature Analysis',
        'Transparent Decision Making',
        'Web Interface',
      ],

      parameters: [
        'Applicant Income',
        'Co-applicant Income',
        'Loan Amount',
        'Credit History',
        'Education',
        'Employment Type',
        'Property Area',
        'Dependents',
        'Loan Term',
      ],

      performance: {
        accuracy: 84.6,
        precision: 0.88,
        recall: 0.82,
        f1Score: 0.85,
        datasetSize: 600,
        trainingSplit: '80-20',
      },
    },
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
