/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  ArrowBack as ArrowBackIcon,
  Search as SearchIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  MenuBook as MenuBookIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

export const NotFound = () => {
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



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Floating Code Icons */}
      <motion.div 
        className="absolute top-20 left-20 text-6xl opacity-10 hidden lg:block"
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <CodeIcon fontSize="inherit" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-20 text-7xl opacity-10 hidden lg:block"
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <SchoolIcon fontSize="inherit" />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-40 text-5xl opacity-10 hidden lg:block"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <MenuBookIcon fontSize="inherit" />
      </motion.div>

      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* 404 Number with Animation */}
          <motion.div 
            variants={itemVariants}
            className="relative mb-8"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-none"
            >
              404
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [360, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
            />
          </motion.div>

          {/* Error Message */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Oops! The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track!
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            variants={itemVariants}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <HomeIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Go to Homepage</span>
            </Link>

            <Link
              to="/courses"
              className="group bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border border-gray-700"
            >
              <MenuBookIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Browse Courses</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group bg-transparent text-gray-300 px-8 py-3 rounded-full font-semibold hover:text-white transition-all duration-300 flex items-center gap-2 border border-gray-700 hover:border-gray-600"
            >
              <ArrowBackIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Popular Links */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <p className="text-sm text-gray-500 mb-4">Popular Destinations</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { to: "/courses", label: "All Courses", icon: <MenuBookIcon className="w-4 h-4" /> },
                { to: "/instructors", label: "Our Instructors", icon: <PersonIcon className="w-4 h-4" /> },
                { to: "/web-development", label: "Web Development", icon: <CodeIcon className="w-4 h-4" /> },
                { to: "/data-science", label: "Data Science", icon: <SchoolIcon className="w-4 h-4" /> },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm hover:bg-gray-700 hover:text-white transition-colors border border-gray-700"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 text-xs text-gray-600"
          >
            <p>⚡ Fun fact: This page was last visited by someone looking for a course that doesn't exist... yet!</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-20">
          <path fill="#3B82F6" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};