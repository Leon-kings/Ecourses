// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import {
//   School as SchoolIcon,
//   Code as CodeIcon,
//   People as PeopleIcon,
//   Star as StarIcon,
//   TrendingUp as TrendingUpIcon,
//   Verified as VerifiedIcon,
//   WhatsApp as WhatsAppIcon,
//   Instagram as InstagramIcon,
//   YouTube as YouTubeIcon,
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   Facebook as FacebookIcon,
//   GitHub as GitHubIcon,
//   ArrowForward as ArrowForwardIcon,
//   CheckCircle as CheckCircleIcon,
//   MenuBook as MenuBookIcon,
//   Speed as SpeedIcon,
//   Security as SecurityIcon,
//   Storage as StorageIcon,
//   Cloud as CloudIcon,
//   Devices as DevicesIcon,
//   Brush as BrushIcon,
//   Timeline as TimelineIcon,
//   Close as CloseIcon,
//   LocationOn as LocationIcon,
//   Email as EmailIcon,
//   Phone as PhoneIcon,
//   Book as BookIcon,
//   Person as PersonIcon,
//   CalendarToday as CalendarIcon,
//   AccessTime as TimeIcon,
//   EmojiEvents as EmojiEventsIcon,
//   RocketLaunch as RocketLaunchIcon,
//   Groups as GroupsIcon,
//   Psychology as PsychologyIcon,
//   Language as LanguageIcon,
//   Handshake as HandshakeIcon,
//   Lightbulb as LightbulbIcon,
//   Favorite as FavoriteIcon,
// } from '@mui/icons-material';

// export const About = () => {
//   const [activeModal, setActiveModal] = useState(null);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     course: '',
//   });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     hover: { 
//       scale: 1.05,
//       transition: { duration: 0.3 }
//     }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//     exit: { opacity: 0, scale: 0.8, y: 50 }
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   // Company milestones
//   const milestones = [
//     { year: '2018', event: 'E-Courses Founded', description: 'Started with just 3 instructors and 50 students' },
//     { year: '2019', event: 'First 1,000 Students', description: 'Reached 1,000 students milestone' },
//     { year: '2020', event: 'Launched Online Platform', description: 'Introduced virtual learning with live classes' },
//     { year: '2021', event: '10,000+ Students', description: 'Expanded to 50+ courses and 30+ instructors' },
//     { year: '2022', event: 'Global Recognition', description: 'Awarded "Best Coding Platform 2022"' },
//     { year: '2023', event: 'AI Integration', description: 'Launched AI-powered personalized learning paths' },
//     { year: '2024', event: '15,000+ Students', description: 'Now serving students from 50+ countries' },
//   ];

//   // Team members
//   const teamMembers = [
//     { 
//       name: 'Dr. Sarah Johnson', 
//       role: 'Founder & CEO', 
//       bio: 'PhD in Computer Science, 15+ years in tech education. Former professor at Stanford.',
//       image: 'SJ',
//       color: 'from-blue-500 to-blue-600'
//     },
//     { 
//       name: 'Prof. Michael Chen', 
//       role: 'Head of Curriculum', 
//       bio: 'Ex-Google Tech Lead, specializes in AI and Machine Learning curriculum development.',
//       image: 'MC',
//       color: 'from-purple-500 to-purple-600'
//     },
//     { 
//       name: 'Emily Rodriguez', 
//       role: 'Lead Instructor - Web Dev', 
//       bio: 'Full-stack developer with 10+ years experience. Created 20+ successful web courses.',
//       image: 'ER',
//       color: 'from-green-500 to-green-600'
//     },
//     { 
//       name: 'Dr. James Wilson', 
//       role: 'Data Science Director', 
//       bio: 'PhD in Data Science, published researcher, helped 500+ students land data jobs.',
//       image: 'JW',
//       color: 'from-red-500 to-red-600'
//     },
//     { 
//       name: 'Priya Patel', 
//       role: 'Cybersecurity Lead', 
//       bio: 'Certified ethical hacker, former security consultant for Fortune 500 companies.',
//       image: 'PP',
//       color: 'from-orange-500 to-orange-600'
//     },
//     { 
//       name: 'Alex Thompson', 
//       role: 'Student Success Manager', 
//       bio: 'Passionate about mentoring, helped 1000+ students transition into tech careers.',
//       image: 'AT',
//       color: 'from-cyan-500 to-cyan-600'
//     },
//   ];

//   // Values
//   const values = [
//     {
//       icon: <PsychologyIcon className="text-purple-400" />,
//       title: 'Innovation First',
//       description: 'We constantly update our curriculum with the latest industry trends and technologies.'
//     },
//     {
//       icon: <GroupsIcon className="text-blue-400" />,
//       title: 'Community Driven',
//       description: 'Build network with peers, mentors, and industry experts through our vibrant community.'
//     },
//     {
//       icon: <HandshakeIcon className="text-green-400" />,
//       title: 'Career Focused',
//       description: 'Every course is designed to make you job-ready with real-world projects.'
//     },
//     {
//       icon: <EmojiEventsIcon className="text-yellow-400" />,
//       title: 'Excellence Guaranteed',
//       description: 'Industry-recognized certifications and guaranteed learning outcomes.'
//     },
//     {
//       icon: <LightbulbIcon className="text-orange-400" />,
//       title: 'Practical Learning',
//       description: 'Learn by doing with hands-on projects and real-world scenarios.'
//     },
//     {
//       icon: <FavoriteIcon className="text-red-400" />,
//       title: 'Student First',
//       description: 'Your success is our priority with personalized support and guidance.'
//     }
//   ];

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast.success('Thank you for your interest! Our team will contact you soon.');
//     setActiveModal(null);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       message: '',
//       course: '',
//     });
//   };

//   const Modals = {
//     ReadMore: ({ section }) => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-2">
//               {section === 'story' && <SchoolIcon className="text-blue-400" />}
//               {section === 'values' && <FavoriteIcon className="text-red-400" />}
//               {section === 'team' && <GroupsIcon className="text-purple-400" />}
//               {section === 'milestones' && <EmojiEventsIcon className="text-yellow-400" />}
//               {section === 'story' && 'Our Complete Story'}
//               {section === 'values' && 'Our Core Values'}
//               {section === 'team' && 'Meet Our Leadership Team'}
//               {section === 'milestones' && 'Company Milestones'}
//             </h2>
//             <button
//               onClick={() => setActiveModal(null)}
//               className="text-gray-400 hover:text-white transition-colors"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           <div className="text-gray-300 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
//             {section === 'story' && (
//               <>
//                 <p className="text-lg leading-relaxed">
//                   <span className="text-blue-400 font-bold">E-Courses</span> was born from a simple yet powerful idea: 
//                   to make quality tech education accessible to everyone, everywhere. Founded in 2018 by Dr. Sarah Johnson, 
//                   a passionate educator with a vision to bridge the gap between traditional education and industry needs.
//                 </p>
//                 <p className="text-lg leading-relaxed">
//                   What started as small coding workshops in a coffee shop with just 3 instructors and 50 students, 
//                   has now grown into a global learning platform serving over 15,000 students across 50+ countries. 
//                   Our journey has been nothing short of extraordinary.
//                 </p>
//                 <p className="text-lg leading-relaxed">
//                   <span className="text-purple-400 font-bold">2020:</span> When the world went remote, we pivoted to 
//                   online learning, launching our virtual classroom platform. This allowed us to reach students who 
//                   couldn't attend in-person sessions, breaking geographical barriers.
//                 </p>
//                 <p className="text-lg leading-relaxed">
//                   <span className="text-green-400 font-bold">2022:</span> We introduced AI-powered personalized learning 
//                   paths, helping students learn at their own pace with custom recommendations based on their progress 
//                   and goals.
//                 </p>
//                 <p className="text-lg leading-relaxed">
//                   <span className="text-yellow-400 font-bold">Today:</span> With 150+ courses, 200+ expert instructors, 
//                   and a 95% employment rate for graduates, we're proud to be one of the fastest-growing tech education 
//                   platforms. But our mission remains the same: to empower the next generation of tech innovators.
//                 </p>
//                 <p className="text-lg leading-relaxed">
//                   <span className="text-pink-400 font-bold">The Future:</span> We're constantly innovating. Coming up: 
//                   AR/VR learning experiences, corporate training programs, and scholarship initiatives for underprivileged 
//                   students. The journey continues!
//                 </p>
//               </>
//             )}

//             {section === 'values' && (
//               <div className="grid grid-cols-1 gap-4">
//                 {values.map((value, index) => (
//                   <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
//                     <div className="flex items-start gap-4">
//                       <div className="text-4xl">{value.icon}</div>
//                       <div>
//                         <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
//                         <p className="text-gray-400">{value.description}</p>
//                         <p className="text-gray-500 mt-2 text-sm">
//                           This value guides every decision we make, from curriculum design to student support.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {section === 'team' && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {teamMembers.map((member, index) => (
//                   <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
//                     <div className="flex items-center gap-4">
//                       <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl`}>
//                         {member.image}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-bold text-white">{member.name}</h3>
//                         <p className="text-sm text-blue-400 mb-2">{member.role}</p>
//                         <p className="text-sm text-gray-400">{member.bio}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {section === 'milestones' && (
//               <div className="relative">
//                 <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
//                 {milestones.map((milestone, index) => (
//                   <div key={index} className="relative pl-10 pb-8">
//                     <div className="absolute left-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 mt-1.5"></div>
//                     <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
//                       <span className="text-sm text-blue-400 font-bold">{milestone.year}</span>
//                       <h3 className="text-lg font-bold text-white mb-1">{milestone.event}</h3>
//                       <p className="text-gray-400">{milestone.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     ),

//     Contact: () => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="flex flex-col lg:flex-row">
//           <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
//             <div className="text-center text-white">
//               <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
//               <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
//               <p className="text-lg">Be part of our growing community of tech innovators</p>
//               <div className="mt-6 space-y-4">
//                 <div className="flex items-center justify-center space-x-2">
//                   <LocationIcon />
//                   <span>123 Coding Street, Tech City</span>
//                 </div>
//                 <div className="flex items-center justify-center space-x-2">
//                   <EmailIcon />
//                   <span>info@ecourses.com</span>
//                 </div>
//                 <div className="flex items-center justify-center space-x-2">
//                   <PhoneIcon />
//                   <span>+1 234 567 890</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-1/2 p-8 bg-gray-900">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
//               <button
//                 onClick={() => setActiveModal(null)}
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <CloseIcon />
//               </button>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Your Phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                 />
//               </div>
//               <div>
//                 <select
//                   name="course"
//                   value={formData.course}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">I'm interested in...</option>
//                   <option value="web">Web Development</option>
//                   <option value="data">Data Science</option>
//                   <option value="app">App Development</option>
//                   <option value="security">Cyber Security</option>
//                   <option value="cloud">Cloud Computing</option>
//                   <option value="ai">AI & Machine Learning</option>
//                 </select>
//               </div>
//               <div>
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     )
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden pt-20">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 py-16 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-blue-400 font-semibold text-sm mb-6 border border-blue-500/30">
//               About Us
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               Empowering the Next Generation of{' '}
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Tech Innovators
//               </span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8">
//               We're on a mission to make quality tech education accessible to everyone, everywhere.
//               Join us in shaping the future of learning.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <button
//                 onClick={() => setActiveModal('story')}
//                 className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg flex items-center gap-2"
//               >
//                 Read Our Story
//                 <ArrowForwardIcon className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setActiveModal('contact')}
//                 className="border-2 border-gray-600 hover:border-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-t hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
//               >
//                 Join Our Journey
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-gradient-to-b from-gray-900 to-black py-6 border-y border-gray-800">
//         <div className="container mx-auto px-4">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8"
//           >
//             {[
//               { number: '15k+', label: 'Students', icon: <PeopleIcon /> },
//               { number: '200+', label: 'Instructors', icon: <SchoolIcon /> },
//               { number: '150+', label: 'Courses', icon: <MenuBookIcon /> },
//               { number: '50+', label: 'Countries', icon: <LanguageIcon /> },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="text-center"
//               >
//                 <div className="text-4xl text-blue-400 mb-2">{stat.icon}</div>
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-400 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="bg-gradient-to-b from-black to-gray-900 py-10">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView="viewport"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 gap-12 items-center"
//           >
//             <div>
//               <span className="text-blue-400 font-semibold mb-4 block">Our Story</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                 From a Small Dream to a{' '}
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   Global Movement
//                 </span>
//               </h2>
//               <p className="text-gray-300 text-lg mb-6">
//                 What started as small coding workshops in a coffee shop with just 3 instructors and 50 students, 
//                 has now grown into a global learning platform serving over 15,000 students across 50+ countries.
//               </p>
//               <p className="text-gray-400 mb-8">
//                 Today, we're proud to offer 150+ courses taught by 200+ expert instructors, with a 95% employment 
//                 rate for our graduates. But our mission remains the same: to empower the next generation of tech innovators.
//               </p>
//               <button
//                 onClick={() => setActiveModal('story')}
//                 className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 flex items-center gap-2"
//               >
//                 Read Full Story
//                 <ArrowForwardIcon className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {milestones.slice(0, 4).map((milestone, index) => (
//                 <motion.div
//                   key={index}
//                   variants={cardVariants}
//                   whileHover="hover"
//                   className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center"
//                 >
//                   <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
//                   <div className="text-white font-semibold mb-1">{milestone.event}</div>
//                   <div className="text-xs text-gray-400">{milestone.description}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="bg-gradient-to-b from-gray-900 to-black py-10">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView="viewport"
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto mb-12"
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-purple-400 font-semibold text-sm mb-4 border border-purple-500/30">
//               Our Values
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               What Drives Us Forward
//             </h2>
//             <p className="text-gray-400 text-lg">
//               Our core values shape everything we do, from how we design courses to how we support our students.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover="hover"
//                 viewport={{ once: true }}
//                 className="bg-gray-800 rounded-xl p-6 border border-gray-700"
//               >
//                 <div className="text-4xl mb-4">{value.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
//                 <p className="text-gray-400 mb-4">{value.description}</p>
//                 <button
//                   onClick={() => {
//                     setExpandedSection('values');
//                     setActiveModal('ReadMore');
//                   }}
//                   className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1"
//                 >
//                   Read More
//                   <ArrowForwardIcon className="w-4 h-4" />
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="bg-gradient-to-b from-black to-gray-900 py-10">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView="viewport"
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto mb-12"
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-full text-green-400 font-semibold text-sm mb-4 border border-green-500/30">
//               Our Team
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Meet the Experts Behind Your Success
//             </h2>
//             <p className="text-gray-400 text-lg">
//               Learn from industry professionals with years of real-world experience.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover="hover"
//                 viewport={{ once: true }}
//                 className="bg-gray-800 rounded-xl p-6 border border-gray-700"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl`}>
//                     {member.image}
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-bold text-white">{member.name}</h3>
//                     <p className="text-sm text-blue-400">{member.role}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-400 text-sm">{member.bio}</p>
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center mt-8">
//             <button
//               onClick={() => {
//                 setExpandedSection('team');
//                 setActiveModal('ReadMore');
//               }}
//               className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 inline-flex items-center gap-2"
//             >
//               View Full Team
//               <ArrowForwardIcon className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Milestones Section */}
//       <section className="bg-gradient-to-b from-gray-900 to-black py-10">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView="viewport"
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto mb-12"
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full text-yellow-400 font-semibold text-sm mb-4 border border-yellow-500/30">
//               Our Journey
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Milestones That Define Us
//             </h2>
//             <p className="text-gray-400 text-lg">
//               Every step of our journey has been about making quality education accessible.
//             </p>
//           </motion.div>

//           <div className="relative max-w-3xl mx-auto">
//             <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView="viewport"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="relative pl-10 pb-8"
//               >
//                 <div className="absolute left-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 mt-1.5"></div>
//                 <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
//                   <span className="text-sm text-blue-400 font-bold">{milestone.year}</span>
//                   <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
//                   <p className="text-gray-400">{milestone.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center mt-8">
//             <button
//               onClick={() => {
//                 setExpandedSection('milestones');
//                 setActiveModal('ReadMore');
//               }}
//               className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-300 inline-flex items-center gap-2"
//             >
//               View All Milestones
//               <ArrowForwardIcon className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-b from-black to-gray-900 py-10 border-t border-gray-800">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView="viewport"
//             viewport={{ once: true }}
//             className="max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Ready to Start Your Journey?
//             </h2>
//             <p className="text-gray-400 text-lg mb-8">
//               Join thousands of successful developers who transformed their careers with E-Courses.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <Link
//                 to="/courses"
//                 className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg flex items-center gap-2"
//               >
//                 Explore Courses
//                 <ArrowForwardIcon className="w-5 h-5" />
//               </Link>
//               <button
//                 onClick={() => setActiveModal('contact')}
//                 className="border-2 border-gray-600 hover:border-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-gradient-to-t hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Modal Overlay */}
//       <AnimatePresence>
//         {activeModal && (
//           <motion.div
//             variants={overlayVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={() => setActiveModal(null)}
//           >
//             <div onClick={(e) => e.stopPropagation()}>
//               {activeModal === 'ReadMore' && <Modals.ReadMore section={expandedSection} />}
//               {activeModal === 'contact' && <Modals.Contact />}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };















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
} from '@mui/icons-material';

export const About = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    course: '',
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

  // Company milestones
  const milestones = [
    { year: '2018', event: 'E-Courses Founded', description: 'Started with just 3 instructors and 50 students' },
    { year: '2019', event: 'First 1,000 Students', description: 'Reached 1,000 students milestone' },
    { year: '2020', event: 'Launched Online Platform', description: 'Introduced virtual learning with live classes' },
    { year: '2021', event: '10,000+ Students', description: 'Expanded to 50+ courses and 30+ instructors' },
    { year: '2022', event: 'Global Recognition', description: 'Awarded "Best Coding Platform 2022"' },
    { year: '2023', event: 'AI Integration', description: 'Launched AI-powered personalized learning paths' },
    { year: '2024', event: '15,000+ Students', description: 'Now serving students from 50+ countries' },
  ];

  // Team members
  const teamMembers = [
    { 
      name: 'Dr. Sarah Johnson', 
      role: 'Founder & CEO', 
      bio: 'PhD in Computer Science, 15+ years in tech education. Former professor at Stanford.',
      image: 'SJ',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Prof. Michael Chen', 
      role: 'Head of Curriculum', 
      bio: 'Ex-Google Tech Lead, specializes in AI and Machine Learning curriculum development.',
      image: 'MC',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      name: 'Emily Rodriguez', 
      role: 'Lead Instructor - Web Dev', 
      bio: 'Full-stack developer with 10+ years experience. Created 20+ successful web courses.',
      image: 'ER',
      color: 'from-green-500 to-green-600'
    },
    { 
      name: 'Dr. James Wilson', 
      role: 'Data Science Director', 
      bio: 'PhD in Data Science, published researcher, helped 500+ students land data jobs.',
      image: 'JW',
      color: 'from-red-500 to-red-600'
    },
    { 
      name: 'Priya Patel', 
      role: 'Cybersecurity Lead', 
      bio: 'Certified ethical hacker, former security consultant for Fortune 500 companies.',
      image: 'PP',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      name: 'Alex Thompson', 
      role: 'Student Success Manager', 
      bio: 'Passionate about mentoring, helped 1000+ students transition into tech careers.',
      image: 'AT',
      color: 'from-cyan-500 to-cyan-600'
    },
  ];

  // Values
  const values = [
    {
      icon: <PsychologyIcon className="text-purple-400" />,
      title: 'Innovation First',
      description: 'We constantly update our curriculum with the latest industry trends and technologies.'
    },
    {
      icon: <GroupsIcon className="text-blue-400" />,
      title: 'Community Driven',
      description: 'Build network with peers, mentors, and industry experts through our vibrant community.'
    },
    {
      icon: <HandshakeIcon className="text-green-400" />,
      title: 'Career Focused',
      description: 'Every course is designed to make you job-ready with real-world projects.'
    },
    {
      icon: <EmojiEventsIcon className="text-yellow-400" />,
      title: 'Excellence Guaranteed',
      description: 'Industry-recognized certifications and guaranteed learning outcomes.'
    },
    {
      icon: <LightbulbIcon className="text-orange-400" />,
      title: 'Practical Learning',
      description: 'Learn by doing with hands-on projects and real-world scenarios.'
    },
    {
      icon: <FavoriteIcon className="text-red-400" />,
      title: 'Student First',
      description: 'Your success is our priority with personalized support and guidance.'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for your interest! Our team will contact you soon.');
    setActiveModal(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      course: '',
    });
  };

  const Modals = {
    ReadMore: ({ section }) => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              {section === 'story' && <SchoolIcon className="text-blue-400" />}
              {section === 'values' && <FavoriteIcon className="text-red-400" />}
              {section === 'team' && <GroupsIcon className="text-purple-400" />}
              {section === 'milestones' && <EmojiEventsIcon className="text-yellow-400" />}
              {section === 'story' && 'Our Complete Story'}
              {section === 'values' && 'Our Core Values'}
              {section === 'team' && 'Meet Our Leadership Team'}
              {section === 'milestones' && 'Company Milestones'}
            </h2>
            <button
              onClick={() => setActiveModal(null)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="text-gray-300 space-y-4 max-h-[70vh] overflow-y-auto pr-2">
            {section === 'story' && (
              <>
                <p className="text-lg leading-relaxed">
                  <span className="text-blue-400 font-bold">E-Courses</span> was born from a simple yet powerful idea: 
                  to make quality tech education accessible to everyone, everywhere. Founded in 2018 by Dr. Sarah Johnson, 
                  a passionate educator with a vision to bridge the gap between traditional education and industry needs.
                </p>
                <p className="text-lg leading-relaxed">
                  What started as small coding workshops in a coffee shop with just 3 instructors and 50 students, 
                  has now grown into a global learning platform serving over 15,000 students across 50+ countries. 
                  Our journey has been nothing short of extraordinary.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="text-purple-400 font-bold">2020:</span> When the world went remote, we pivoted to 
                  online learning, launching our virtual classroom platform. This allowed us to reach students who 
                  couldn't attend in-person sessions, breaking geographical barriers.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="text-green-400 font-bold">2022:</span> We introduced AI-powered personalized learning 
                  paths, helping students learn at their own pace with custom recommendations based on their progress 
                  and goals.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="text-yellow-400 font-bold">Today:</span> With 150+ courses, 200+ expert instructors, 
                  and a 95% employment rate for graduates, we're proud to be one of the fastest-growing tech education 
                  platforms. But our mission remains the same: to empower the next generation of tech innovators.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="text-pink-400 font-bold">The Future:</span> We're constantly innovating. Coming up: 
                  AR/VR learning experiences, corporate training programs, and scholarship initiatives for underprivileged 
                  students. The journey continues!
                </p>
              </>
            )}

            {section === 'values' && (
              <div className="grid grid-cols-1 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{value.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                        <p className="text-gray-400">{value.description}</p>
                        <p className="text-gray-500 mt-2 text-sm">
                          This value guides every decision we make, from curriculum design to student support.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section === 'team' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl`}>
                        {member.image}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                        <p className="text-sm text-blue-400 mb-2">{member.role}</p>
                        <p className="text-sm text-gray-400">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section === 'milestones' && (
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-10 pb-8">
                    <div className="absolute left-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 mt-1.5"></div>
                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                      <span className="text-sm text-blue-400 font-bold">{milestone.year}</span>
                      <h3 className="text-lg font-bold text-white mb-1">{milestone.event}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
          <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
              <p className="text-lg">Be part of our growing community of tech innovators</p>
              <div className="mt-6 space-y-4">
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
            </div>
          </div>

          <div className="lg:w-1/2 p-8 bg-gray-900">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                />
              </div>
              <div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">I'm interested in...</option>
                  <option value="web">Web Development</option>
                  <option value="data">Data Science</option>
                  <option value="app">App Development</option>
                  <option value="security">Cyber Security</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="ai">AI & Machine Learning</option>
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
    )
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden pt-20">
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering the Next Generation of{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tech Innovators
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to make quality tech education accessible to everyone, everywhere.
              Join us in shaping the future of learning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setActiveModal('story')}
                className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Read Our Story
                <ArrowForwardIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveModal('contact')}
                className="border-2 border-gray-600 hover:border-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-t hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
              >
                Join Our Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-6 border-y border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '15k+', label: 'Students', icon: <PeopleIcon /> },
              { number: '200+', label: 'Instructors', icon: <SchoolIcon /> },
              { number: '150+', label: 'Courses', icon: <MenuBookIcon /> },
              { number: '50+', label: 'Countries', icon: <LanguageIcon /> },
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
 
      {/* Values Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView="viewport"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-purple-400 font-semibold text-sm mb-4 border border-purple-500/30">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-gray-400 text-lg">
              Our core values shape everything we do, from how we design courses to how we support our students.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 mb-4">{value.description}</p>
                <button
                  onClick={() => {
                    setExpandedSection('values');
                    setActiveModal('ReadMore');
                  }}
                  className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1"
                >
                  Read More
                  <ArrowForwardIcon className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView="viewport"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-full text-green-400 font-semibold text-sm mb-4 border border-green-500/30">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet the Experts Behind Your Success
            </h2>
            <p className="text-gray-400 text-lg">
              Learn from industry professionals with years of real-world experience.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {member.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-blue-400">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setExpandedSection('team');
                setActiveModal('ReadMore');
              }}
              className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 inline-flex items-center gap-2"
            >
              View Full Team
              <ArrowForwardIcon className="w-5 h-5" />
            </button>
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
              {activeModal === 'ReadMore' && <Modals.ReadMore section={expandedSection} />}
              {activeModal === 'contact' && <Modals.Contact />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};