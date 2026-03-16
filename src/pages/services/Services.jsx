/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  People as PeopleIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Verified as VerifiedIcon,
  WhatsApp as WhatsAppIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  MenuBook as MenuBookIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Devices as DevicesIcon,
  Brush as BrushIcon,
  Timeline as TimelineIcon,
  Close as CloseIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Book as BookIcon,
  Person as PersonIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  EmojiEvents as EmojiEventsIcon,
  RocketLaunch as RocketLaunchIcon,
  Groups as GroupsIcon,
  Psychology as PsychologyIcon,
  Language as LanguageIcon,
  Handshake as HandshakeIcon,
  Lightbulb as LightbulbIcon,
  Favorite as FavoriteIcon,
  LaptopMac as LaptopMacIcon,
  Analytics as AnalyticsIcon,
  Dns as DnsIcon,
  BugReport as BugReportIcon,
  CloudQueue as CloudQueueIcon,
  Android as AndroidIcon,
  Apple as AppleIcon,
  Web as WebIcon,
  IntegrationInstructions as IntegrationInstructionsIcon,
  DataArray as DataArrayIcon,
  NetworkCheck as NetworkCheckIcon,
  SecurityUpdate as SecurityUpdateIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
} from '@mui/icons-material';

export const Services = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    budget: '',
    timeline: '',
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  // Main Services
  const mainServices = [
    {
      id: 'web-dev',
      icon: <CodeIcon className="text-blue-400" />,
      title: 'Web Development',
      tagline: 'Build modern, responsive websites',
      description: 'From simple landing pages to complex web applications, we teach you full-stack development with the latest technologies.',
      fullDescription: 'Master both front-end and back-end development with our comprehensive web development program. Learn HTML5, CSS3, JavaScript, React.js, Node.js, Next.js, and more. Build real-world projects including e-commerce sites, social media platforms, and enterprise applications.',
      color: 'blue',
      features: [
        'Front-end Development (React, Vue, Angular)',
        'Back-end Development (Node.js, Python, PHP)',
        'Database Management (MongoDB, PostgreSQL)',
        'Responsive Design & PWA',
        'API Development & Integration',
        'Performance Optimization'
      ],
      outcomes: [
        'Build full-stack web applications',
        'Deploy websites to production',
        'Work with modern frameworks',
        'Understand web security best practices'
      ],
      price: '$499',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      students: '2,500+',
      rating: 4.9
    },
    {
      id: 'data-science',
      icon: <StorageIcon className="text-purple-400" />,
      title: 'Data Science & Analytics',
      tagline: 'Turn data into insights',
      description: 'Learn to analyze complex data, build machine learning models, and make data-driven decisions.',
      fullDescription: 'Dive deep into data science with our industry-leading curriculum. Master Python, SQL, machine learning algorithms, data visualization, and big data technologies. Work on real datasets and build predictive models that solve business problems.',
      color: 'purple',
      features: [
        'Python Programming',
        'SQL & Database Management',
        'Machine Learning Algorithms',
        'Data Visualization (Tableau, Power BI)',
        'Statistical Analysis',
        'Big Data Technologies'
      ],
      outcomes: [
        'Analyze complex datasets',
        'Build predictive models',
        'Create compelling data visualizations',
        'Make data-driven decisions'
      ],
      price: '$599',
      duration: '20 weeks',
      level: 'Intermediate',
      students: '1,800+',
      rating: 4.8
    },
    {
      id: 'app-dev',
      icon: <DevicesIcon className="text-green-400" />,
      title: 'App Development',
      tagline: 'Create amazing mobile experiences',
      description: 'Build iOS and Android apps with Flutter, React Native, and native technologies.',
      fullDescription: 'Learn to create stunning mobile applications for both iOS and Android platforms. Master Flutter, React Native, Swift, Kotlin, and Firebase. Publish your apps to App Store and Google Play, and learn monetization strategies.',
      color: 'green',
      features: [
        'Cross-platform (Flutter, React Native)',
        'Native iOS (Swift)',
        'Native Android (Kotlin)',
        'Firebase & Backend Integration',
        'UI/UX Design Principles',
        'App Store Deployment'
      ],
      outcomes: [
        'Build and publish mobile apps',
        'Create responsive mobile UIs',
        'Integrate APIs and services',
        'Monetize your applications'
      ],
      price: '$549',
      duration: '18 weeks',
      level: 'Beginner to Advanced',
      students: '2,100+',
      rating: 4.9
    },
    {
      id: 'cybersecurity',
      icon: <SecurityIcon className="text-red-400" />,
      title: 'Cyber Security',
      tagline: 'Protect digital assets',
      description: 'Master ethical hacking, network security, and penetration testing.',
      fullDescription: 'Become a cybersecurity expert with our hands-on program. Learn ethical hacking, penetration testing, network security, cryptography, and incident response. Prepare for industry certifications like CEH, CISSP, and CompTIA Security+.',
      color: 'red',
      features: [
        'Ethical Hacking',
        'Penetration Testing',
        'Network Security',
        'Cryptography',
        'Security Auditing',
        'Incident Response'
      ],
      outcomes: [
        'Identify security vulnerabilities',
        'Perform penetration testing',
        'Implement security measures',
        'Respond to security incidents'
      ],
      price: '$649',
      duration: '22 weeks',
      level: 'Intermediate',
      students: '1,200+',
      rating: 4.7
    },
    {
      id: 'cloud-computing',
      icon: <CloudIcon className="text-cyan-400" />,
      title: 'Cloud Computing',
      tagline: 'Scale with the cloud',
      description: 'Master AWS, Azure, Google Cloud, and DevOps practices.',
      fullDescription: 'Learn to design, deploy, and manage scalable cloud infrastructure. Master AWS, Azure, Google Cloud Platform, Docker, Kubernetes, and CI/CD pipelines. Prepare for cloud certification exams and become a cloud architect.',
      color: 'cyan',
      features: [
        'AWS Services (EC2, S3, Lambda)',
        'Microsoft Azure',
        'Google Cloud Platform',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Infrastructure as Code'
      ],
      outcomes: [
        'Design cloud architectures',
        'Deploy scalable applications',
        'Manage containers and orchestration',
        'Implement DevOps practices'
      ],
      price: '$599',
      duration: '20 weeks',
      level: 'Intermediate',
      students: '1,500+',
      rating: 4.8
    },
    {
      id: 'ai-ml',
      icon: <TimelineIcon className="text-orange-400" />,
      title: 'AI & Machine Learning',
      tagline: 'Build intelligent systems',
      description: 'Master deep learning, neural networks, and generative AI.',
      fullDescription: 'Dive into the world of artificial intelligence. Master deep learning, neural networks, natural language processing, computer vision, and generative AI. Build intelligent applications that can see, hear, and understand the world.',
      color: 'orange',
      features: [
        'Deep Learning (TensorFlow, PyTorch)',
        'Neural Networks',
        'Natural Language Processing',
        'Computer Vision',
        'Generative AI (GANs, LLMs)',
        'Reinforcement Learning'
      ],
      outcomes: [
        'Build AI-powered applications',
        'Train and deploy ML models',
        'Work with LLMs and generative AI',
        'Solve complex problems with AI'
      ],
      price: '$699',
      duration: '24 weeks',
      level: 'Advanced',
      students: '900+',
      rating: 4.9
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      icon: <GroupsIcon className="text-blue-400" />,
      title: 'Corporate Training',
      description: 'Custom training programs for teams and organizations',
      features: ['Team workshops', 'Custom curriculum', 'Project-based learning', 'Progress tracking']
    },
    {
      icon: <HandshakeIcon className="text-purple-400" />,
      title: 'Career Mentorship',
      description: 'One-on-one guidance from industry experts',
      features: ['Resume review', 'Interview prep', 'Portfolio building', 'Job placement assistance']
    },
    {
      icon: <RocketLaunchIcon className="text-green-400" />,
      title: 'Startup Incubation',
      description: 'Support for tech entrepreneurs and startups',
      features: ['MVP development', 'Technical consulting', 'Funding guidance', 'Networking opportunities']
    },
    {
      icon: <PsychologyIcon className="text-red-400" />,
      title: 'Coding Bootcamps',
      description: 'Intensive, immersive learning experiences',
      features: ['Full-time programs', 'Live projects', 'Industry experts', 'Job guarantee']
    },
    {
      icon: <LanguageIcon className="text-cyan-400" />,
      title: 'International Certifications',
      description: 'Globally recognized certification programs',
      features: ['Exam preparation', 'Official materials', 'Practice tests', 'Certification vouchers']
    },
    {
      icon: <EmojiEventsIcon className="text-yellow-400" />,
      title: 'Hackathons & Events',
      description: 'Regular coding competitions and networking events',
      features: ['Monthly hackathons', 'Tech talks', 'Networking', 'Prizes and recognition']
    }
  ];

  // Technologies we teach
  const technologies = [
    { name: 'React.js', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Data Science' },
    { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Kubernetes', icon: '⚙️', category: 'DevOps' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Flutter', icon: '📱', category: 'Mobile' },
    { name: 'Swift', icon: '🍎', category: 'Mobile' },
    { name: 'Kotlin', icon: '🤖', category: 'Mobile' },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Thank you for your interest in ${formData.service || 'our services'}! Our team will contact you within 24 hours.`);
    setActiveModal(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: '',
      budget: '',
      timeline: '',
    });
  };

  const Modals = {
    ServiceDetail: ({ service }) => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-gray-900 p-6 flex justify-between items-center border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className={`text-${service.color}-400 text-4xl`}>{service.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              <p className="text-gray-400">{service.tagline}</p>
            </div>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="bg-gradient-to-t from-red-500 to-red-700 text-white transition-colors"
          >
            <CloseIcon />
          </button>
        </div>
        
        <div className="p-6">
          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{service.price}</div>
              <div className="text-xs text-gray-400">Starting Price</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">{service.duration}</div>
              <div className="text-xs text-gray-400">Duration</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{service.students}</div>
              <div className="text-xs text-gray-400">Students</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">{service.rating} ⭐</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className={`text-${service.color}-400 w-5 h-5`} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Learning Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-400 w-5 h-5" />
                  <span className="text-gray-300">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-white mb-2">Ready to Get Started?</h4>
            <p className="text-gray-400 mb-4">Join {service.students} students who have already transformed their careers.</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setSelectedService(service);
                  setActiveModal('booking');
                }}
                className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              >
                Enroll Now - {service.price}
              </button>
              <button
                onClick={() => {
                  setFormData({...formData, service: service.title});
                  setActiveModal('consultation');
                }}
                className="border-2 border-gray-600 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-300"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ),

    Booking: () => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <BookIcon sx={{ fontSize: 80 }} className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">Book Your Course</h2>
              <p className="text-lg">Secure your spot in {selectedService?.title || 'our course'}</p>
              <div className="mt-6 p-4  rounded-lg">
                <div className="text-2xl text-white font-bold">{selectedService?.price}</div>
                <div className="text-sm text-white">{selectedService?.duration}</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 bg-gray-900">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Booking Details</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="bg-gradient-to-t from-red-500 to-red-700 text-white transition-colors"
              >
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Course</option>
                  {mainServices.map((service, idx) => (
                    <option key={idx} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Preferred Time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                    <option value="evening">Evening (7 PM - 10 PM)</option>
                    <option value="weekend">Weekend</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
              >
                Complete Booking
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    ),

    Consultation: () => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-gradient-to-t from-purple-600 to-purple-800 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <PeopleIcon sx={{ fontSize: 80 }} className="mb-4" />
              <h2 className="text-3xl text-white font-bold mb-4">Free Consultation</h2>
              <p className="text-lg text-gray-300">Get personalized guidance from our experts</p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-white justify-center gap-2">
                  <CheckCircleIcon className="text-green-300" />
                  <span>30-min video call</span>
                </div>
                <div className="flex text-white items-center justify-center gap-2">
                  <CheckCircleIcon className="text-green-300" />
                  <span>Career roadmap</span>
                </div>
                <div className="flex text-white items-center justify-center gap-2">
                  <CheckCircleIcon className="text-green-300" />
                  <span>Course recommendations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 bg-gray-900">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Schedule Consultation</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="bg-gradient-to-t from-red-500 to-red-700 text-white transition-colors"
              >
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Interested In</option>
                  {mainServices.map((service, idx) => (
                    <option key={idx} value={service.title}>{service.title}</option>
                  ))}
                  <option value="corporate">Corporate Training</option>
                  <option value="mentorship">Career Mentorship</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Goals / Questions"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-t from-purple-600 to-purple-400 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-500 transition-all duration-300 shadow-lg"
              >
                Schedule Free Consultation
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    )
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden pt-2">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-blue-400 font-semibold text-sm mb-6 border border-blue-500/30">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Tech Education{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From beginner courses to advanced specializations, we offer everything you need to succeed in tech.
              Choose your path and start your journey today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('main-services');
                  element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Explore Services
                <ArrowForwardIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveModal('consultation')}
                className="border-2 border-gray-600 hover:border-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-t hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
              >
                Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-2 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '150+', label: 'Courses', icon: <MenuBookIcon /> },
              { number: '200+', label: 'Instructors', icon: <PeopleIcon /> },
              { number: '15k+', label: 'Students', icon: <SchoolIcon /> },
              { number: '95%', label: 'Success Rate', icon: <TrendingUpIcon /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl text-blue-400 mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section id="main-services" className="bg-gradient-to-b from-black to-gray-900 py-2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Industry-leading courses designed to make you job-ready
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 group cursor-pointer"
                onClick={() => {
                  setSelectedService(service);
                  setActiveModal('ServiceDetail');
                }}
              >
                <div className={`text-${service.color}-400 text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-blue-400 mb-3">{service.tagline}</p>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      {feature.split(' ')[0]} {feature.split(' ')[1]}
                    </span>
                  ))}
                  <span className="text-xs bg-blue-600/30 text-blue-300 px-2 py-1 rounded-full">
                    +{service.features.length - 3} more
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-white">{service.rating}</span>
                  </div>
                  <div className="text-blue-400 font-semibold">{service.price}</div>
                  <div className="text-gray-400">{service.students} students</div>
                </div>

                <button className="mt-4 w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies You'll{' '}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Learn the most in-demand technologies used by top companies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-white font-semibold">{tech.name}</div>
                <div className="text-xs text-gray-400">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Additional{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-white text-lg">
              Go beyond courses with our comprehensive support services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setFormData({...formData, service: service.title});
                    setActiveModal('consultation');
                  }}
                  className="w-full border-2 border-blue-500 text-blue-400 py-2 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-300"
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveModal(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              {activeModal === 'ServiceDetail' && <Modals.ServiceDetail service={selectedService} />}
              {activeModal === 'booking' && <Modals.Booking />}
              {activeModal === 'consultation' && <Modals.Consultation />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};