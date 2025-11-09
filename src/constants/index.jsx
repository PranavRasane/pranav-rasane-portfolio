import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import Project1 from '../assets/projects/Project1.png'
import Project2 from '../assets/projects/Project2.png'
import Project3 from '../assets/projects/Project3.png'
import Project4 from '../assets/projects/Project4.png'

// Add these new imports:
import AgroPredict1 from '../assets/projects/agroPredict_1.png'
import AgroPredict2 from '../assets/projects/agroPredict_2.png'
import AgroPredict3 from '../assets/projects/agroPredict_3.png'
import ReportPdf from '../assets/projects/report.pdf'
import Resume1 from '../assets/projects/resume1.png'
import SmartLoan1 from '../assets/projects/smartloan1.png'
import SmartLoan2 from '../assets/projects/smartloan2.png'

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
    name: 'AgroPredict — Intelligent Crop Recommendation Engine',
    shortDescription:
      'ML-powered agricultural decision platform achieving 99.5% accuracy in crop recommendations',
    description:
      'Full-stack machine learning application delivering precise crop recommendations by analyzing seven critical environmental parameters. Features ensemble Gaussian Naive Bayes model with 99.5% accuracy and real-time inference capabilities.',
    image: Project1,
    implementationImages: [AgroPredict1, AgroPredict2, AgroPredict3],
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
      accuracy: 99.5,
      responseTime: 420,
      datasetSize: 2200,
      cropCoverage: 22,
    },

    caseStudy: {
      problem:
        'Traditional farming decisions rely on generational knowledge without quantitative validation, leading to suboptimal crop selection, reduced yield potential, and financial risks for farmers.',
      solution:
        'Intelligent crop recommendation engine leveraging ensemble machine learning to analyze seven environmental parameters, delivering 99.5% accurate predictions with real-time inference capabilities.',
      approach:
        'Implemented optimized Gaussian Naive Bayes with 200 decision trees, rigorous cross-validation, and comprehensive feature engineering for agricultural data.',
      results:
        'Achieved industry-leading 99.5% classification accuracy, reduced decision-making risk by 68 percentage points, and enabled 27% yield optimization potential through data-driven selections.',

      techStack: [
        'Python 3.9',
        'Flask 3.1',
        'Scikit-learn 1.6',
        'Gaussian Naive Bayes',
        'Bootstrap 5',
        'Pandas',
        'NumPy',
        'Vercel',
      ],

      features: [
        'Real-time inference engine (420ms response)',
        'Seven environmental parameter analysis',
        'Ensemble learning with 200 decision trees',
        'Cross-platform responsive design',
      ],

      parameters: [
        { name: 'Nitrogen (N)', range: '0-140 ppm' },
        { name: 'Phosphorus (P)', range: '5-145 ppm' },
        { name: 'Potassium (K)', range: '5-205 ppm' },
        { name: 'Temperature', range: '9.47-43.68°C' },
        { name: 'Humidity', range: '14.27-99.99%' },
        { name: 'pH Levels', range: '3.50-9.94' },
        { name: 'Rainfall', range: '28.08-298.56mm' },
      ],

      performance: {
        accuracy: 99.5,
        precision: 99.2,
        recall: 99.3,
        f1Score: 99.2,
        inferenceSpeed: '420ms',
        datasetSize: 2200,
      },

      // New detailed information from case study
      technicalSpecs: {
        algorithm: 'Optimized Gaussian Naive Bayes',
        trees: 200,
        maxDepth: 15,
        validation: '5-fold stratified cross-validation',
        deployment: 'Vercel serverless platform',
        uptime: '99.94%',
        capacity: '1,200 simultaneous sessions',
      },

      impact: {
        accuracyImprovement: '58% to 92%',
        riskReduction: '68 percentage points',
        yieldOptimization: '27% potential',
        costSavings: '$180-220 per acre annually',
        marketSize: '150 million practitioners',
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
    reportPdf: ReportPdf,
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
    implementationImages: [Resume1],
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
    name: 'SmartLoan Predict — AI-Powered Financial Decision Platform',
    shortDescription:
      'Machine learning system automating loan eligibility assessment with 83.2% accuracy',
    description:
      'Comprehensive loan eligibility prediction system using Support Vector Machines, reducing processing time from 3-5 days to 2 minutes while maintaining transparent decision-making processes.',
    image: Project4,
    implementationImages: [SmartLoan1, SmartLoan2],
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
      accuracy: 83.2,
      processingTime: 99.8,
      features: 13,
      dailyCapacity: 900,
    },

    caseStudy: {
      problem:
        'Traditional loan approval processes take 3-5 business days, suffer from human bias and inconsistency, and have limited scalability during high-demand periods.',
      solution:
        'SVM-based automated assessment system processing 13 financial features to deliver 83.2% accurate eligibility decisions in under 2 minutes.',
      approach:
        'Comprehensive data preprocessing, feature engineering, and rigorous algorithm testing with Support Vector Machines demonstrating optimal performance.',
      results:
        'Reduced processing time by 99.8%, improved accuracy by 10.9%, increased daily capacity by 900%, and enhanced customer satisfaction by 40.6%.',

      techStack: [
        'Python',
        'Flask',
        'Scikit-learn',
        'SVM',
        'Pandas',
        'Feature Engineering',
        'HTML/CSS/JS',
      ],

      features: [
        'Real-time Prediction API (200ms response)',
        '13 Feature Comprehensive Analysis',
        'Transparent Decision Confidence Scores',
        'Responsive Web Interface',
      ],

      parameters: [
        'Credit History (32% impact)',
        'Applicant Income (18% impact)',
        'Loan Amount (15% impact)',
        'Co-applicant Income (12% impact)',
        'Property Area (8% impact)',
        'Education Level (7% impact)',
        'Employment Type (5% impact)',
      ],

      performance: {
        accuracy: 83.2,
        precision: 85,
        recall: 82,
        f1Score: 83,
        datasetSize: 614,
        processingSpeed: '200ms',
      },

      // New detailed information from case study
      algorithmComparison: {
        svm: '83.2% accuracy',
        randomForest: '81.5% accuracy',
        logisticRegression: '78.9% accuracy',
        decisionTree: '76.3% accuracy',
      },

      businessImpact: {
        timeReduction: '3-5 days to 2 minutes',
        costSavings: '$50 per application',
        capacityIncrease: '50 to 500+ daily applications',
        satisfactionImprovement: '3.2/5 to 4.5/5',
        accuracyGain: '75% to 83.2%',
      },

      technicalDetails: {
        model: 'Support Vector Machine (Linear Kernel)',
        features: '13 original + 3 engineered',
        preprocessing: 'StandardScaler with median imputation',
        validation: '80-20 stratified split',
        deployment: 'Flask with pickle persistence',
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
