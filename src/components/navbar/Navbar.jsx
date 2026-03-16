// /* eslint-disable no-unused-vars */
// // components/Navbar.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
// import {
//   Menu as MenuIcon,
//   Close as CloseIcon,
//   LocationOn as LocationIcon,
//   Email as EmailIcon,
//   Phone as PhoneIcon,
//   Book as BookIcon,
//   Person as PersonIcon,
//   Lock as LockIcon,
//   Google as GoogleIcon,
//   Facebook as FacebookIcon,
//   ArrowForward as ArrowForwardIcon,
//   CalendarToday as CalendarIcon,
//   AccessTime as TimeIcon,
//   School as SchoolIcon,
// } from '@mui/icons-material';

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeModal, setActiveModal] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     password: '',
//     confirmPassword: '',
//     course: '',
//     date: '',
//     time: '',
//   });

//   // Navigation links as objects
//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/courses', label: 'Courses' },
//     { path: '/teachers', label: 'Teachers' },
//     { path: '/blog', label: 'Blog' },
//     { path: '/contact', label: 'Contact', isButton: false, modal: 'contact' },
//   ];

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//     exit: { opacity: 0, scale: 0.8, y: 50 }
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e, type) => {
//     e.preventDefault();
    
//     if (type === 'login') {
//       toast.success('Login successful! Welcome back!');
//     } else if (type === 'register') {
//       if (formData.password !== formData.confirmPassword) {
//         toast.error('Passwords do not match!');
//         return;
//       }
//       toast.success('Registration successful! Please check your email.');
//     } else if (type === 'contact') {
//       toast.success('Message sent successfully! We\'ll get back to you soon.');
//     } else if (type === 'booking') {
//       toast.success('Course booked successfully! Check your email for details.');
//     }
    
//     setActiveModal(null);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       message: '',
//       password: '',
//       confirmPassword: '',
//       course: '',
//       date: '',
//       time: '',
//     });
//   };

//   const Modals = {
//     Contact: () => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="flex flex-col lg:flex-row">
//           {/* Left side - Image */}
//           <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
//             <div className="text-center text-white">
//               <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
//               <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//               <p className="text-lg mb-6">Learn ecourses skills and knowledge in coding with our expert instructors</p>
//               <div className="space-y-4">
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

//           {/* Right side - Form */}
//           <div className="lg:w-1/2 p-8 bg-gray-900">
//             <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
//             <form onSubmit={(e) => handleSubmit(e, 'contact')} className="space-y-4">
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
//                   required
//                 />
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
//     ),

//     Login: () => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="flex flex-col lg:flex-row">
//           {/* Left side - Image */}
//           <div className="lg:w-1/2 bg-gradient-to-t from-green-600 to-green-800 p-8 flex items-center justify-center">
//             <div className="text-center text-white">
//               <PersonIcon sx={{ fontSize: 80 }} className="mb-4" />
//               <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
//               <p className="text-lg">Continue your learning journey with us</p>
//             </div>
//           </div>

//           {/* Right side - Form */}
//           <div className="lg:w-1/2 p-8 bg-gray-900">
//             <h3 className="text-2xl font-bold mb-6 text-white">Login to Your Account</h3>
//             <form onSubmit={(e) => handleSubmit(e, 'login')} className="space-y-4">
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <label className="flex items-center">
//                   <input type="checkbox" className="mr-2 accent-green-500" />
//                   <span className="text-sm text-gray-300">Remember me</span>
//                 </label>
//                 <Link to="/forgot-password" className="text-sm text-green-400 hover:underline">Forgot Password?</Link>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-t from-green-600 to-green-400 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-300 shadow-lg"
//               >
//                 Login
//               </button>
              
//               <div className="relative my-6">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-700"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <button className="flex items-center justify-center px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-700 transition-colors">
//                   <GoogleIcon className="mr-2 text-red-400" />
//                   Google
//                 </button>
//                 <button className="flex items-center justify-center px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-700 transition-colors">
//                   <FacebookIcon className="mr-2 text-blue-400" />
//                   Facebook
//                 </button>
//               </div>

//               <p className="text-center text-sm text-gray-300">
//                 Don't have an account?{' '}
//                 <button
//                   onClick={() => setActiveModal('register')}
//                   className="text-green-400 font-semibold hover:underline"
//                 >
//                   Register
//                 </button>
//               </p>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     ),

//     Register: () => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="flex flex-col lg:flex-row">
//           {/* Left side - Image */}
//           <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
//             <div className="text-center text-white">
//               <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
//               <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
//               <p className="text-lg">Start learning ecourses skills and knowledge in coding today!</p>
//             </div>
//           </div>

//           {/* Right side - Form */}
//           <div className="lg:w-1/2 p-8 bg-gray-900">
//             <h3 className="text-2xl font-bold mb-6 text-white">Create Account</h3>
//             <form onSubmit={(e) => handleSubmit(e, 'register')} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
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
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div className="flex items-center">
//                 <input type="checkbox" className="mr-2 accent-blue-500" required />
//                 <span className="text-sm text-gray-300">I agree to the Terms and Conditions</span>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
//               >
//                 Register
//               </button>

//               <p className="text-center text-sm text-gray-300">
//                 Already have an account?{' '}
//                 <button
//                   onClick={() => setActiveModal('login')}
//                   className="text-blue-400 font-semibold hover:underline"
//                 >
//                   Login
//                 </button>
//               </p>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     ),

//     Booking: () => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="flex flex-col lg:flex-row">
//           {/* Left side - Image */}
//           <div className="lg:w-1/2 bg-gradient-to-t from-red-600 to-red-800 p-8 flex items-center justify-center">
//             <div className="text-center text-white">
//               <CalendarIcon sx={{ fontSize: 80 }} className="mb-4" />
//               <h2 className="text-3xl font-bold mb-4">Book Your Course</h2>
//               <p className="text-lg">Choose from our wide range of coding courses</p>
//             </div>
//           </div>

//           {/* Right side - Form */}
//           <div className="lg:w-1/2 p-8 bg-gray-900">
//             <h3 className="text-2xl font-bold mb-6 text-white">Course Booking</h3>
//             <form onSubmit={(e) => handleSubmit(e, 'booking')} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <select
//                   name="course"
//                   value={formData.course}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                   required
//                 >
//                   <option value="" className="bg-gray-800">Select a Course</option>
//                   <option value="web-dev" className="bg-gray-800">Web Development</option>
//                   <option value="app-dev" className="bg-gray-800">App Development</option>
//                   <option value="data-science" className="bg-gray-800">Data Science</option>
//                   <option value="ai-ml" className="bg-gray-800">AI & Machine Learning</option>
//                   <option value="cybersecurity" className="bg-gray-800">Cybersecurity</option>
//                 </select>
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="time"
//                     name="time"
//                     value={formData.time}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//                     required
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-t from-red-600 to-red-400 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-lg"
//               >
//                 Book Now
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     )
//   };

//   return (
//     <>
//       {/* Topbar */}
//       <div className="hidden lg:block bg-gradient-to-t from-gray-900 to-black text-white py-3 border-b border-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-between items-center">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <LocationIcon className="text-blue-400" />
//                 <span className="text-sm text-gray-300">123 Coding Street, Tech City</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <EmailIcon className="text-blue-400" />
//                 <span className="text-sm text-gray-300">info@ecourses.com</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <PhoneIcon className="text-blue-400" />
//                 <span className="text-sm text-gray-300">+1 234 567 890</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => setActiveModal('login')}
//                 className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => setActiveModal('register')}
//                 className="text-sm bg-gradient-to-t from-blue-600 to-blue-400 px-4 py-1 rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-gradient-to-t from-gray-900 to-black shadow-lg sticky top-0 z-50 border-b border-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2">
//               <SchoolIcon className="text-blue-400" />
//               <span className="text-xl font-bold">
//                 <span className="text-blue-400">E</span>
//                 <span className="text-white">COURSES</span>
//               </span>
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-8">
//               {navLinks.map((link) => (
//                 link.modal ? (
//                   <button
//                     key={link.path}
//                     onClick={() => setActiveModal(link.modal)}
//                     className="text-gray-300 hover:text-blue-400 transition-colors"
//                   >
//                     {link.label}
//                   </button>
//                 ) : (
//                   <Link
//                     key={link.path}
//                     to={link.path}
//                     className="text-gray-300 hover:text-blue-400 transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 )
//               ))}
//               <button
//                 onClick={() => setActiveModal('booking')}
//                 className="bg-gradient-to-t from-red-600 to-red-400 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-red-500 transition-all duration-300 flex items-center space-x-2 shadow-lg"
//               >
//                 <BookIcon />
//                 <span>Book Now</span>
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
//             >
//               {isOpen ? <CloseIcon /> : <MenuIcon />}
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           <AnimatePresence>
//             {isOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="lg:hidden overflow-hidden"
//               >
//                 <div className="py-4 space-y-2">
//                   {navLinks.map((link) => (
//                     link.modal ? (
//                       <button
//                         key={link.path}
//                         onClick={() => {
//                           setActiveModal(link.modal);
//                           setIsOpen(false);
//                         }}
//                         className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded-lg transition-colors"
//                       >
//                         {link.label}
//                       </button>
//                     ) : (
//                       <Link
//                         key={link.path}
//                         to={link.path}
//                         onClick={() => setIsOpen(false)}
//                         className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded-lg transition-colors"
//                       >
//                         {link.label}
//                       </Link>
//                     )
//                   ))}
                  
//                   {/* Mobile Contact Info */}
//                   <div className="border-t border-gray-800 mt-4 pt-4 px-4 space-y-3">
//                     <div className="flex items-center space-x-3 text-sm text-gray-300">
//                       <LocationIcon className="text-blue-400" />
//                       <span>123 Coding Street, Tech City</span>
//                     </div>
//                     <div className="flex items-center space-x-3 text-sm text-gray-300">
//                       <EmailIcon className="text-blue-400" />
//                       <span>info@ecourses.com</span>
//                     </div>
//                     <div className="flex items-center space-x-3 text-sm text-gray-300">
//                       <PhoneIcon className="text-blue-400" />
//                       <span>+1 234 567 890</span>
//                     </div>
//                   </div>

//                   {/* Mobile Action Buttons */}
//                   <div className="px-4 pt-4 space-y-2">
//                     <button
//                       onClick={() => {
//                         setActiveModal('booking');
//                         setIsOpen(false);
//                       }}
//                       className="w-full bg-gradient-to-t from-red-600 to-red-400 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
//                     >
//                       <BookIcon />
//                       <span>Book Now</span>
//                     </button>
//                     <div className="grid grid-cols-2 gap-2">
//                       <button
//                         onClick={() => {
//                           setActiveModal('login');
//                           setIsOpen(false);
//                         }}
//                         className="px-4 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-gray-800 transition-colors"
//                       >
//                         Login
//                       </button>
//                       <button
//                         onClick={() => {
//                           setActiveModal('register');
//                           setIsOpen(false);
//                         }}
//                         className="px-4 py-2 bg-gradient-to-t from-blue-600 to-blue-400 text-white rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
//                       >
//                         Register
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </nav>

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
//               {activeModal === 'contact' && <Modals.Contact />}
//               {activeModal === 'login' && <Modals.Login />}
//               {activeModal === 'register' && <Modals.Register />}
//               {activeModal === 'booking' && <Modals.Booking />}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };













/* eslint-disable no-unused-vars */
// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Book as BookIcon,
  Person as PersonIcon,
  Lock as LockIcon,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  ArrowForward as ArrowForwardIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  School as SchoolIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    password: '',
    confirmPassword: '',
    course: '',
    date: '',
    time: '',
  });

  // Check user authentication on component mount
  useEffect(() => {
    checkUserAuth();
  }, []);

  // Check user authentication and role
  const checkUserAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.get('/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.user);
      } catch (error) {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  };

  // Handle dashboard navigation based on user role
  const handleDashboardNavigation = () => {
    if (!user) {
      setActiveModal('login');
      toast.info('Please login to access dashboard');
      return;
    }

    switch(user.role) {
      case 'admin':
        navigate('/dashboard');
        break;
      case 'teacher':
        navigate('/teacher/dashboard');
        break;
      case 'user':
      default:
        navigate('/user/dashboard');
        break;
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      // Call logout API
      await axios.post('/api/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Update state
      setUser(null);
      
      toast.success('Logged out successfully!');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      // Even if API fails, clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      toast.error('Logged out successfully!');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  // Navigation links as objects
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/teachers', label: 'Teachers' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact', isButton: false, modal: 'contact' },
  ];

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (type === 'login') {
        // Login API call
        const response = await axios.post('/api/login', {
          email: formData.email,
          password: formData.password
        });

        // Store token and user data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setUser(response.data.user);

        toast.success('Login successful! Welcome back!');
        
        // Navigate based on role
        if (response.data.user.role === 'admin') {
          navigate('/dashboard');
        } else if (response.data.user.role === 'teacher') {
          navigate('/teacher/dashboard');
        } else {
          navigate('/user/dashboard');
        }
      } 
      else if (type === 'register') {
        if (formData.password !== formData.confirmPassword) {
          toast.error('Passwords do not match!');
          setLoading(false);
          return;
        }

        // Register API call
        const response = await axios.post('/api/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone || '',
          role: 'user' // Default role
        });

        // Store token and user data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setUser(response.data.user);

        toast.success('Registration successful!');
        navigate('/user/dashboard');
      } 
      else if (type === 'contact') {
        // Contact form API call
        await axios.post('/api/contact', {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        });
        toast.success('Message sent successfully! We\'ll get back to you soon.');
      } 
      else if (type === 'booking') {
        // Check if user is logged in
        if (!user) {
          setActiveModal('login');
          toast.info('Please login to book a course');
          setLoading(false);
          return;
        }

        // Booking API call
        await axios.post('/api/bookings', {
          course: formData.course,
          date: formData.date,
          time: formData.time,
          userId: user.id
        }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        toast.success('Course booked successfully! Check your email for details.');
      }

      setActiveModal(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        password: '',
        confirmPassword: '',
        course: '',
        date: '',
        time: '',
      });
    } catch (error) {
      console.error('API Error:', error);
      
      // Handle specific error messages
      if (error.response) {
        switch (error.response.status) {
          case 401:
            toast.error('Invalid email or password');
            break;
          case 409:
            toast.error('Email already exists');
            break;
          case 400:
            toast.error(error.response.data.message || 'Validation error');
            break;
          case 500:
            toast.error('Server error. Please try again later.');
            break;
          default:
            toast.error(error.response.data.message || 'An error occurred');
        }
      } else if (error.request) {
        toast.error('Network error. Please check your connection.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const Modals = {
    Contact: () => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-6">Learn ecourses skills and knowledge in coding with our expert instructors</p>
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
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-8 bg-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
            <form onSubmit={(e) => handleSubmit(e, 'contact')} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
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
                  disabled={loading}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    ),

    Login: () => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="lg:w-1/2 bg-gradient-to-t from-green-600 to-green-800 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <PersonIcon sx={{ fontSize: 80 }} className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-lg">Continue your learning journey with us</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-8 bg-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-white">Login to Your Account</h3>
            <form onSubmit={(e) => handleSubmit(e, 'login')} className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-green-500" />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-green-400 hover:underline">Forgot Password?</Link>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-t from-green-600 to-green-400 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button"
                  className="flex items-center justify-center px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <GoogleIcon className="mr-2 text-red-400" />
                  Google
                </button>
                <button 
                  type="button"
                  className="flex items-center justify-center px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FacebookIcon className="mr-2 text-blue-400" />
                  Facebook
                </button>
              </div>

              <p className="text-center text-sm text-gray-300">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setActiveModal('register')}
                  className="text-green-400 font-semibold hover:underline"
                >
                  Register
                </button>
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    ),

    Register: () => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
            <div className="text-center text-white">
              <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg">Start learning ecourses skills and knowledge in coding today!</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-8 bg-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-white">Create Account</h3>
            <form onSubmit={(e) => handleSubmit(e, 'register')} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  required
                  disabled={loading}
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-500" required />
                <span className="text-sm text-gray-300">I agree to the Terms and Conditions</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating account...' : 'Register'}
              </button>

              <p className="text-center text-sm text-gray-300">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setActiveModal('login')}
                  className="text-blue-400 font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
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
              <p className="text-lg">Choose from our wide range of coding courses</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-8 bg-gray-900">
            <h3 className="text-2xl font-bold mb-6 text-white">Course Booking</h3>
            <form onSubmit={(e) => handleSubmit(e, 'booking')} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                  required
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              <div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                  disabled={loading}
                >
                  <option value="" className="bg-gray-800">Select a Course</option>
                  <option value="web-dev" className="bg-gray-800">Web Development</option>
                  <option value="app-dev" className="bg-gray-800">App Development</option>
                  <option value="data-science" className="bg-gray-800">Data Science</option>
                  <option value="ai-ml" className="bg-gray-800">AI & Machine Learning</option>
                  <option value="cybersecurity" className="bg-gray-800">Cybersecurity</option>
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
                    disabled={loading}
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
                    disabled={loading}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-t from-red-600 to-red-400 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Booking...' : 'Book Now'}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    )
  };

  return (
    <>
      {/* Topbar */}
      <div className="hidden lg:block bg-gradient-to-t from-gray-900 to-black text-white py-3 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <LocationIcon className="text-blue-400" />
                <span className="text-sm text-gray-300">123 Coding Street, Tech City</span>
              </div>
              <div className="flex items-center space-x-2">
                <EmailIcon className="text-blue-400" />
                <span className="text-sm text-gray-300">info@ecourses.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="text-blue-400" />
                <span className="text-sm text-gray-300">+1 234 567 890</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-sm text-gray-300">
                    Welcome, {user.name}!
                  </span>
                  <button
                    onClick={handleDashboardNavigation}
                    className="text-sm bg-gradient-to-t from-blue-600 to-blue-400 px-4 py-1 rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg flex items-center space-x-1"
                  >
                    <DashboardIcon fontSize="small" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    disabled={loading}
                    className="text-sm bg-gradient-to-t from-red-600 to-red-400 px-4 py-1 rounded-full hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-lg flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <LogoutIcon fontSize="small" />
                    <span>{loading ? 'Logging out...' : 'Logout'}</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveModal('login')}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setActiveModal('register')}
                    className="text-sm bg-gradient-to-t from-blue-600 to-blue-400 px-4 py-1 rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gradient-to-t from-gray-900 to-black shadow-lg sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <SchoolIcon className="text-blue-400" />
              <span className="text-xl font-bold">
                <span className="text-blue-400">E</span>
                <span className="text-white">COURSES</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.modal ? (
                  <button
                    key={link.path}
                    onClick={() => setActiveModal(link.modal)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <button
                onClick={() => setActiveModal('booking')}
                className="bg-gradient-to-t from-red-600 to-red-400 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-red-500 transition-all duration-300 flex items-center space-x-2 shadow-lg"
              >
                <BookIcon />
                <span>Book Now</span>
              </button>
              
              {/* Mobile Dashboard Button (visible on desktop) */}
              {user && (
                <button
                  onClick={handleDashboardNavigation}
                  className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 flex items-center space-x-1 shadow-lg"
                >
                  <DashboardIcon fontSize="small" />
                  <span>Dashboard</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {/* User Info (if logged in) */}
                  {user && (
                    <div className="px-4 py-3 bg-gray-800 rounded-lg mb-2">
                      <p className="text-sm text-gray-300">Logged in as:</p>
                      <p className="text-white font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                      <p className="text-xs text-blue-400 mt-1">Role: {user.role}</p>
                    </div>
                  )}

                  {navLinks.map((link) => (
                    link.modal ? (
                      <button
                        key={link.path}
                        onClick={() => {
                          setActiveModal(link.modal);
                          setIsOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded-lg transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                  
                  {/* Mobile Dashboard Link (if logged in) */}
                  {user && (
                    <button
                      onClick={() => {
                        handleDashboardNavigation();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded-lg transition-colors"
                    >
                      <DashboardIcon className="mr-2" fontSize="small" />
                      Dashboard
                    </button>
                  )}

                  {/* Mobile Contact Info */}
                  <div className="border-t border-gray-800 mt-4 pt-4 px-4 space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-300">
                      <LocationIcon className="text-blue-400" />
                      <span>123 Coding Street, Tech City</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-300">
                      <EmailIcon className="text-blue-400" />
                      <span>info@ecourses.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-300">
                      <PhoneIcon className="text-blue-400" />
                      <span>+1 234 567 890</span>
                    </div>
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="px-4 pt-4 space-y-2">
                    <button
                      onClick={() => {
                        setActiveModal('booking');
                        setIsOpen(false);
                      }}
                      className="w-full bg-gradient-to-t from-red-600 to-red-400 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                    >
                      <BookIcon />
                      <span>Book Now</span>
                    </button>
                    
                    {user ? (
                      <button
                        onClick={handleLogout}
                        disabled={loading}
                        className="w-full bg-gradient-to-t from-red-600 to-red-400 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-500 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <LogoutIcon />
                        <span>{loading ? 'Logging out...' : 'Logout'}</span>
                      </button>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => {
                            setActiveModal('login');
                            setIsOpen(false);
                          }}
                          className="px-4 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          Login
                        </button>
                        <button
                          onClick={() => {
                            setActiveModal('register');
                            setIsOpen(false);
                          }}
                          className="px-4 py-2 bg-gradient-to-t from-blue-600 to-blue-400 text-white rounded-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
                        >
                          Register
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

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
              {activeModal === 'contact' && <Modals.Contact />}
              {activeModal === 'login' && <Modals.Login />}
              {activeModal === 'register' && <Modals.Register />}
              {activeModal === 'booking' && <Modals.Booking />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};