/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import {
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  ArrowForward as ArrowForwardIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Teachers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const popularCourses = [
    { name: 'Web Development', href: '#' },
    { name: 'App Development', href: '#' },
    { name: 'Data Science', href: '#' },
    { name: 'Cloud Computing', href: '#' },
    { name: 'Cybersecurity', href: '#' },
    { name: 'AI & Machine Learning', href: '#' },
  ];

  const supportLinks = [
    { name: 'FAQs', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Career', href: '#' },
    { name: 'Support Center', href: '#' },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: '#', name: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <TwitterIcon />, href: '#', name: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <LinkedInIcon />, href: '#', name: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: <InstagramIcon />, href: '#', name: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <YouTubeIcon />, href: '#', name: 'YouTube', color: 'hover:bg-red-600' },
  ];

  const contactInfo = [
    { icon: <LocationIcon />, text: '123 Coding Street, Tech City, TC 12345', href: '#' },
    { icon: <EmailIcon />, text: 'info@ecourses.com', href: 'mailto:info@ecourses.com' },
    { icon: <PhoneIcon />, text: '+1 (234) 567-890', href: 'tel:+1234567890' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section - Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <SchoolIcon className="text-blue-500" />
              <h3 className="text-xl font-bold">
                <span className="text-blue-500">E</span>COURSES
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering learners with cutting-edge coding skills and knowledge. 
              Join our community of developers, innovators, and tech enthusiasts.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-none"
                />
                <button className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                  <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2"
                  >
                    <ArrowForwardIcon fontSize="small" className="text-blue-500" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Courses - Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {popularCourses.map((course, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={course.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2"
                  >
                    <ArrowForwardIcon fontSize="small" className="text-blue-500" />
                    <span>{course.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Support - Column 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={info.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-start space-x-3"
                  >
                    <span className="text-blue-500 mt-1">{info.icon}</span>
                    <span>{info.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Support Links */}
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center space-x-2"
                  >
                    <ArrowForwardIcon fontSize="small" className="text-blue-500" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="text-gray-400 text-sm">
              <span className="font-semibold text-white">Working Hours:</span> Mon-Fri: 9AM-8PM | Sat: 10AM-6PM
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} ECOURSES. All rights reserved. | Designed with ❤️ for learners
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Terms of Service</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">Cookie Policy</a>
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Back to top"
          >
            <ArrowForwardIcon className="transform rotate-[-90deg]" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

;