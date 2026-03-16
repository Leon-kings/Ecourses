

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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
} from "@mui/icons-material";

export const Hero = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    password: "",
    confirmPassword: "",
    course: "",
    date: "",
    time: "",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.08,
      rotate: 0,
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const skillsAndKnowledge = [
    {
      category: "Web Development",
      icon: <CodeIcon className="text-blue-400" />,
      skills: [
        "HTML5/CSS3",
        "JavaScript/ES6",
        "React.js",
        "Node.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
      ],
      color: "blue",
    },
    {
      category: "Data Science",
      icon: <StorageIcon className="text-purple-400" />,
      skills: [
        "Python",
        "SQL",
        "Machine Learning",
        "Data Visualization",
        "Pandas",
        "NumPy",
        "TensorFlow",
        "Big Data",
      ],
      color: "purple",
    },
    {
      category: "App Development",
      icon: <DevicesIcon className="text-green-400" />,
      skills: [
        "Flutter",
        "React Native",
        "iOS Swift",
        "Kotlin",
        "Firebase",
        "UI/UX Design",
        "App Store Deployment",
      ],
      color: "green",
    },
    {
      category: "Cyber Security",
      icon: <SecurityIcon className="text-red-400" />,
      skills: [
        "Network Security",
        "Ethical Hacking",
        "Penetration Testing",
        "Cryptography",
        "Security Auditing",
        "Incident Response",
      ],
      color: "red",
    },
    {
      category: "Cloud Computing",
      icon: <CloudIcon className="text-cyan-400" />,
      skills: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "DevOps",
        "CI/CD",
        "Serverless",
      ],
      color: "cyan",
    },
    {
      category: "AI & ML",
      icon: <TimelineIcon className="text-orange-400" />,
      skills: [
        "Deep Learning",
        "Neural Networks",
        "NLP",
        "Computer Vision",
        "Reinforcement Learning",
        "Generative AI",
      ],
      color: "orange",
    },
  ];

  const openSourceSkills = [
    "Git & GitHub",
    "Open Source Contribution",
    "Code Review",
    "Documentation",
    "Community Management",
    "Project Maintenance",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();

    if (type === "contact") {
      toast.success("Message sent successfully! We'll get back to you soon.");
    } else if (type === "booking") {
      toast.success(
        "Course booked successfully! Check your email for details.",
      );
    }

    setActiveModal(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      password: "",
      confirmPassword: "",
      course: "",
      date: "",
      time: "",
    });
  };

  const Modals = {
    Courses: () => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-gray-900 p-4 flex justify-between items-center border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <MenuBookIcon className="text-blue-400" />
            Our Courses
          </h2>
          <button
            onClick={() => setActiveModal(null)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsAndKnowledge.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className={`text-${category.color}-400 mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setActiveModal("booking");
                    setFormData({ ...formData, course: category.category });
                  }}
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                >
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Open Source Section */}
          <div className="mt-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <GitHubIcon className="text-purple-400" />
              Open Source Programs
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {openSourceSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="text-green-400 w-4 h-4" />
                  <span className="text-gray-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    ),

    Contact: () => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Info */}
          <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-6">
                Have questions? We're here to help you start your coding
                journey!
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <LocationIcon />
                  <span>123 Coding Street, Tech City</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <EmailIcon />
                  <span>info@ecourses.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <PhoneIcon />
                  <span>+1 234 567 890</span>
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-3">
                <WhatsAppIcon className="w-6 h-6 text-green-400 hover:scale-110 transition-transform cursor-pointer" />
                <InstagramIcon className="w-6 h-6 text-pink-400 hover:scale-110 transition-transform cursor-pointer" />
                <YouTubeIcon className="w-6 h-6 text-red-400 hover:scale-110 transition-transform cursor-pointer" />
                <LinkedInIcon className="w-6 h-6 text-blue-400 hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-8 bg-gray-900">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                Send us a Message
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <CloseIcon />
              </button>
            </div>
            <form
              onSubmit={(e) => handleSubmit(e, "contact")}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
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
                  placeholder="Your Email"
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
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Interested in (Optional)</option>
                  {skillsAndKnowledge.map((cat, idx) => (
                    <option key={idx} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
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
          {/* Left side - Image */}
          <div className="lg:w-1/2 bg-gradient-to-t from-red-600 to-red-800 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <CalendarIcon sx={{ fontSize: 80 }} className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">Book Your Course</h2>
              <p className="text-lg">
                Choose from our wide range of coding courses
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-8 bg-gray-900">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Course Booking</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <CloseIcon />
              </button>
            </div>
            <form
              onSubmit={(e) => handleSubmit(e, "booking")}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="">Select a Course</option>
                  {skillsAndKnowledge.map((cat, idx) => (
                    <option key={idx} value={cat.category}>
                      {cat.category}
                    </option>
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-t from-red-600 to-red-400 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-lg"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    ),
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-3xl"></div>
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-500/30"
              >
                <VerifiedIcon className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Trusted by 15,000+ students worldwide
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                Master{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Coding Skills
                </span>
                <br />&{" "}
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Knowledge
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Unlock your potential with industry-leading courses in web
                development, data science, AI, cybersecurity, and more. Learn
                from experts and build real-world projects.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              >
                <button
                  onClick={() => setActiveModal("courses")}
                  className="group bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-base hover:from-blue-700 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Explore Courses
                  <ArrowForwardIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setActiveModal("contact")}
                  className="group border-2 border-gray-600 hover:border-blue-500 px-8 py-4 rounded-full font-semibold text-base hover:bg-gradient-to-t hover:from-blue-600/20 hover:to-purple-600/20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Contact Us
                  <CheckCircleIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 mb-8"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    200+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Expert Instructors
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    150+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Coding Courses
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    15k+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Happy Students
                  </div>
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start space-x-3"
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  <span className="font-bold text-yellow-400">4.9</span> (3.5k+
                  reviews)
                </span>
              </motion.div>
            </motion.div>

            {/* Right Content - Skills Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full lg:w-1/2"
            >
              {/* Main Skills Card */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 shadow-2xl mb-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MenuBookIcon className="text-blue-400 w-6 h-6" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Skills & Knowledge We Provide
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="text-green-400 w-4 h-4" />
                      <span className="text-sm text-gray-300">
                        Full Stack Development
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="text-green-400 w-4 h-4" />
                      <span className="text-sm text-gray-300">
                        Data Science & Analytics
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="text-green-400 w-4 h-4" />
                      <span className="text-sm text-gray-300">
                        Machine Learning & AI
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="text-green-400 w-4 h-4" />
                      <span className="text-sm text-gray-300">
                        Cloud Computing (AWS/Azure)
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="text-green-400 w-4 h-4" />
                      <span className="text-sm text-gray-300">
                        Cybersecurity
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="text-green-400 w-4 h-4" />
                      <span className="text-sm text-gray-300">
                        Mobile App Development
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="text-green-400 w-4 h-4" />
                      <span className="text-sm text-gray-300">
                        DevOps & Automation
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="text-green-400 w-4 h-4" />
                      <span className="text-sm text-gray-300">
                        UI/UX Design
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-3">
                {skillsAndKnowledge.slice(0, 3).map((category, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl p-4 border border-gray-700 text-center group cursor-pointer"
                    onClick={() => {
                      setActiveModal("courses");
                    }}
                  >
                    <div
                      className={`text-${category.color}-400 mb-2 transform group-hover:scale-110 transition-transform`}
                    >
                      {category.icon}
                    </div>
                    <h4 className="text-sm font-semibold mb-1">
                      {category.category}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {category.skills.length}+ skills
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Open Source Skills */}
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="mt-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-xl p-4 border border-purple-500/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GitHubIcon className="text-purple-400 w-5 h-5" />
                  <span className="text-sm font-semibold">
                    Open Source Skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {openSourceSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple-600/30 px-2 py-1 rounded-full text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                variants={itemVariants}
                className="mt-6 flex items-center justify-between"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-xs">
                    +15k
                  </div>
                </div>
                <div className="flex gap-2">
                  <WhatsAppIcon className="w-5 h-5 text-green-500 hover:scale-110 transition-transform cursor-pointer" />
                  <InstagramIcon className="w-5 h-5 text-pink-500 hover:scale-110 transition-transform cursor-pointer" />
                  <YouTubeIcon className="w-5 h-5 text-red-500 hover:scale-110 transition-transform cursor-pointer" />
                  <LinkedInIcon className="w-5 h-5 text-blue-500 hover:scale-110 transition-transform cursor-pointer" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto opacity-20"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
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
              {activeModal === "courses" && <Modals.Courses />}
              {activeModal === "contact" && <Modals.Contact />}
              {activeModal === "booking" && <Modals.Booking />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
