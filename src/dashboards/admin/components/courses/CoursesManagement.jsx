/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
// pages/dashboard/CoursesManagement.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Material-UI Icons
import Add from '@mui/icons-material/Add';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Search from '@mui/icons-material/Search';
import FilterList from '@mui/icons-material/FilterList';
import Refresh from '@mui/icons-material/Refresh';
import Download from '@mui/icons-material/Download';
import Close from '@mui/icons-material/Close';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Error from '@mui/icons-material/Error';
import Warning from '@mui/icons-material/Warning';
import Info from '@mui/icons-material/Info';
import Visibility from '@mui/icons-material/Visibility';
import MenuBook from '@mui/icons-material/MenuBook';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Schedule from '@mui/icons-material/Schedule';
import Person from '@mui/icons-material/Person';
import Category from '@mui/icons-material/Category';
import Star from '@mui/icons-material/Star';
import People from '@mui/icons-material/People';
import TrendingUp from '@mui/icons-material/TrendingUp';
import PlayCircle from '@mui/icons-material/PlayCircle';
import Assessment from '@mui/icons-material/Assessment';
import Image from '@mui/icons-material/Image';
import Description from '@mui/icons-material/Description';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Quiz from '@mui/icons-material/Quiz';
import Assignment from '@mui/icons-material/Assignment';
import CloudUpload from '@mui/icons-material/CloudUpload';
import { Block } from '@mui/icons-material';

// API Service (simulated)
const courseAPI = {
  // Simulate API calls with dummy data
  getCourses: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      data: [
        { 
          id: 1, 
          title: 'Complete Web Development Bootcamp',
          description: 'Learn HTML, CSS, JavaScript, React, Node.js and more',
          instructor: 'John Smith',
          category: 'Web Development',
          level: 'Beginner',
          price: 89.99,
          duration: '48 hours',
          lessons: 120,
          students: 2345,
          rating: 4.8,
          reviews: 456,
          status: 'Published',
          image: '🌐',
          lastUpdated: '2024-02-15',
          enrolled: true,
          progress: 75,
          featured: true
        },
        { 
          id: 2, 
          title: 'Data Science & Machine Learning',
          description: 'Master Python, Pandas, Scikit-learn, TensorFlow',
          instructor: 'Sarah Johnson',
          category: 'Data Science',
          level: 'Intermediate',
          price: 129.99,
          duration: '56 hours',
          lessons: 180,
          students: 1876,
          rating: 4.9,
          reviews: 342,
          status: 'Published',
          image: '📊',
          lastUpdated: '2024-02-10',
          enrolled: false,
          progress: 0,
          featured: true
        },
        { 
          id: 3, 
          title: 'UI/UX Design Masterclass',
          description: 'Figma, Adobe XD, User Research, Prototyping',
          instructor: 'Emily Davis',
          category: 'Design',
          level: 'Beginner',
          price: 79.99,
          duration: '32 hours',
          lessons: 85,
          students: 1543,
          rating: 4.7,
          reviews: 289,
          status: 'Published',
          image: '🎨',
          lastUpdated: '2024-01-28',
          enrolled: true,
          progress: 45,
          featured: false
        },
        { 
          id: 4, 
          title: 'Mobile App Development with React Native',
          description: 'Build iOS and Android apps with React Native',
          instructor: 'Michael Chen',
          category: 'Mobile Development',
          level: 'Intermediate',
          price: 99.99,
          duration: '42 hours',
          lessons: 110,
          students: 1234,
          rating: 4.6,
          reviews: 234,
          status: 'Draft',
          image: '📱',
          lastUpdated: '2024-02-18',
          enrolled: false,
          progress: 0,
          featured: false
        },
        { 
          id: 5, 
          title: 'Digital Marketing Strategy',
          description: 'SEO, Social Media, Google Ads, Analytics',
          instructor: 'Lisa Anderson',
          category: 'Marketing',
          level: 'Beginner',
          price: 69.99,
          duration: '28 hours',
          lessons: 75,
          students: 987,
          rating: 4.5,
          reviews: 176,
          status: 'Published',
          image: '📈',
          lastUpdated: '2024-02-05',
          enrolled: true,
          progress: 90,
          featured: false
        },
        { 
          id: 6, 
          title: 'Advanced Python Programming',
          description: 'Advanced Python concepts, Design Patterns, Best Practices',
          instructor: 'David Wilson',
          category: 'Programming',
          level: 'Advanced',
          price: 119.99,
          duration: '38 hours',
          lessons: 95,
          students: 876,
          rating: 4.8,
          reviews: 198,
          status: 'Published',
          image: '🐍',
          lastUpdated: '2024-02-12',
          enrolled: false,
          progress: 0,
          featured: true
        },
        { 
          id: 7, 
          title: 'AWS Cloud Practitioner',
          description: 'AWS Services, Cloud Concepts, Security',
          instructor: 'Robert Taylor',
          category: 'Cloud Computing',
          level: 'Beginner',
          price: 149.99,
          duration: '45 hours',
          lessons: 130,
          students: 654,
          rating: 4.7,
          reviews: 145,
          status: 'Archived',
          image: '☁️',
          lastUpdated: '2024-01-20',
          enrolled: false,
          progress: 0,
          featured: false
        },
        { 
          id: 8, 
          title: 'Cybersecurity Fundamentals',
          description: 'Network Security, Ethical Hacking, Cryptography',
          instructor: 'Jennifer White',
          category: 'Security',
          level: 'Intermediate',
          price: 139.99,
          duration: '52 hours',
          lessons: 145,
          students: 543,
          rating: 4.9,
          reviews: 123,
          status: 'Published',
          image: '🔒',
          lastUpdated: '2024-02-14',
          enrolled: false,
          progress: 0,
          featured: true
        },
      ]
    };
  },
  
  createCourse: async (courseData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Course created successfully',
      data: { id: Math.floor(Math.random() * 1000), ...courseData }
    };
  },
  
  updateCourse: async (id, courseData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Course updated successfully',
      data: { id, ...courseData }
    };
  },
  
  deleteCourse: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Course deleted successfully'
    };
  },
  
  updateCourseStatus: async (id, status) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      message: `Course ${status === 'Published' ? 'published' : 'unpublished'} successfully`
    };
  }
};

// Notification Component
const Notification = ({ type, message, onClose }) => {
  const icons = {
    success: <CheckCircle className="text-green-500" />,
    error: <Error className="text-red-500" />,
    warning: <Warning className="text-yellow-500" />,
    info: <Info className="text-blue-500" />
  };

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg border ${colors[type]} shadow-lg`}
    >
      <div className="mr-3">{icons[type]}</div>
      <p className="mr-8">{message}</p>
      <button onClick={onClose} className="ml-auto">
        <Close className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

// Confirmation Modal
const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative z-10"
      >
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-yellow-100 rounded-full mb-4">
          <Warning className="w-8 h-8 text-yellow-600" />
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center mb-6">{message}</p>
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Course Modal (Create/Edit)
const CourseModal = ({ isOpen, onClose, onSubmit, course, mode }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    category: 'Web Development',
    level: 'Beginner',
    price: '',
    duration: '',
    lessons: '',
    status: 'Draft',
    featured: false,
    image: ''
  });

  const categories = [
    'Web Development',
    'Data Science',
    'Mobile Development',
    'Design',
    'Marketing',
    'Programming',
    'Cloud Computing',
    'Security',
    'Business',
    'Photography',
    'Music',
    'Language'
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];

  useEffect(() => {
    if (course && mode === 'edit') {
      setFormData({
        title: course.title || '',
        description: course.description || '',
        instructor: course.instructor || '',
        category: course.category || 'Web Development',
        level: course.level || 'Beginner',
        price: course.price || '',
        duration: course.duration || '',
        lessons: course.lessons || '',
        status: course.status || 'Draft',
        featured: course.featured || false,
        image: course.image || ''
      });
    } else {
      setFormData({
        title: '',
        description: '',
        instructor: '',
        category: 'Web Development',
        level: 'Beginner',
        price: '',
        duration: '',
        lessons: '',
        status: 'Draft',
        featured: false,
        image: ''
      });
    }
  }, [course, mode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl relative z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">
            {mode === 'create' ? 'Create New Course' : 'Edit Course'}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g., Complete Web Development Bootcamp"
              />
            </div>
            
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter course description..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instructor *
              </label>
              <input
                type="text"
                required
                value={formData.instructor}
                onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Instructor name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image/Icon
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Emoji or image URL"
                />
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {formData.image || '📚'}
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level *
              </label>
              <select
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>

          {/* Pricing and Duration */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="89.99"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g., 48 hours"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lessons
              </label>
              <input
                type="number"
                value={formData.lessons}
                onChange={(e) => setFormData({ ...formData, lessons: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="120"
              />
            </div>
          </div>

          {/* Additional Options */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                Featured Course
              </label>
            </div>
          </div>

          {/* Curriculum Section (Placeholder) */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <VideoLibrary className="w-5 h-5 mr-2 text-purple-600" />
              Course Curriculum
            </h4>
            <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
              <p>Curriculum management will be available in the next update</p>
              <p className="text-sm">You can add sections, lessons, quizzes, and assignments later</p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {mode === 'create' ? 'Create Course' : 'Update Course'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Course Details Modal
const CourseDetailsModal = ({ isOpen, onClose, course }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl relative z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Course Details</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl">
              {course.image}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">{course.title}</h2>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  course.status === 'Published' ? 'bg-green-100 text-green-800' :
                  course.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {course.status}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{course.description}</p>
              
              <div className="flex items-center mt-4 space-x-4">
                <div className="flex items-center">
                  <Person className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Category className="w-4 h-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">{course.category}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{course.rating} ({course.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-purple-50 rounded-xl p-4">
              <p className="text-sm text-gray-600">Price</p>
              <p className="text-xl font-bold text-purple-600">${course.price}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-gray-600">Students</p>
              <p className="text-xl font-bold text-blue-600">{course.students}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-gray-600">Duration</p>
              <p className="text-xl font-bold text-green-600">{course.duration}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4">
              <p className="text-sm text-gray-600">Lessons</p>
              <p className="text-xl font-bold text-yellow-600">{course.lessons}</p>
            </div>
          </div>

          {/* Course Progress (if enrolled) */}
          {course.enrolled && (
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-700">Your Progress</h4>
                <span className="text-sm text-purple-600">{course.progress}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Course Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Course Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Level</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-medium">{new Date(course.lastUpdated).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Featured</span>
                  <span className={`font-medium ${course.featured ? 'text-green-600' : 'text-gray-400'}`}>
                    {course.featured ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-3">What You'll Learn</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  Comprehensive curriculum designed by industry experts
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  Hands-on projects and real-world applications
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                  Lifetime access with certificate of completion
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
            <button
              onClick={() => window.open('#', '_blank')}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Preview Course
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const CoursesManagement = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Modal states
  const [courseModal, setCourseModal] = useState({ isOpen: false, mode: 'create', course: null });
  const [detailsModal, setDetailsModal] = useState({ isOpen: false, course: null });
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, action: null, courseId: null });
  
  // Notification state
  const [notification, setNotification] = useState(null);

  // Fetch courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Apply filters when courses or filter criteria change
  useEffect(() => {
    applyFilters();
  }, [courses, searchTerm, categoryFilter, levelFilter, statusFilter]);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await courseAPI.getCourses();
      if (response.success) {
        setCourses(response.data);
      }
    } catch (error) {
      showNotification('error', 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...courses];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(course => course.category === categoryFilter);
    }
    
    // Apply level filter
    if (levelFilter !== 'All') {
      filtered = filtered.filter(course => course.level === levelFilter);
    }
    
    // Apply status filter
    if (statusFilter !== 'All') {
      filtered = filtered.filter(course => course.status === statusFilter);
    }
    
    setFilteredCourses(filtered);
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleCreateCourse = async (courseData) => {
    try {
      const response = await courseAPI.createCourse(courseData);
      if (response.success) {
        showNotification('success', response.message);
        setCourseModal({ isOpen: false, mode: 'create', course: null });
        fetchCourses();
      }
    } catch (error) {
      showNotification('error', 'Failed to create course');
    }
  };

  const handleUpdateCourse = async (courseData) => {
    try {
      const response = await courseAPI.updateCourse(courseModal.course.id, courseData);
      if (response.success) {
        showNotification('success', response.message);
        setCourseModal({ isOpen: false, mode: 'create', course: null });
        fetchCourses();
      }
    } catch (error) {
      showNotification('error', 'Failed to update course');
    }
  };

  const handleDeleteCourse = async () => {
    try {
      const response = await courseAPI.deleteCourse(confirmModal.courseId);
      if (response.success) {
        showNotification('success', response.message);
        setConfirmModal({ isOpen: false, action: null, courseId: null });
        fetchCourses();
      }
    } catch (error) {
      showNotification('error', 'Failed to delete course');
    }
  };

  const handleStatusChange = async (courseId, newStatus) => {
    try {
      const response = await courseAPI.updateCourseStatus(courseId, newStatus);
      if (response.success) {
        showNotification('success', response.message);
        fetchCourses();
      }
    } catch (error) {
      showNotification('error', 'Failed to update course status');
    }
  };

  const handleRefresh = () => {
    fetchCourses();
    showNotification('info', 'Refreshing course data...');
  };

  const handleExport = () => {
    const csvContent = convertToCSV(filteredCourses);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `courses_${new Date().toISOString()}.csv`;
    a.click();
    showNotification('success', 'Courses exported successfully');
  };

  const convertToCSV = (data) => {
    const headers = ['Title', 'Instructor', 'Category', 'Level', 'Price', 'Duration', 'Lessons', 'Students', 'Rating', 'Status'];
    const rows = data.map(course => [
      course.title,
      course.instructor,
      course.category,
      course.level,
      course.price,
      course.duration,
      course.lessons,
      course.students,
      course.rating,
      course.status
    ]);
    
    return [headers, ...rows]
      .map(row => row.join(','))
      .join('\n');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-blue-100 text-blue-800';
      case 'Intermediate': return 'bg-purple-100 text-purple-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'All Levels': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get unique categories for filter
  const categories = ['All', ...new Set(courses.map(c => c.category))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];
  const statuses = ['All', 'Published', 'Draft', 'Archived'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 p-6"
    >
      {/* Notification */}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Modals */}
      <CourseModal
        isOpen={courseModal.isOpen}
        onClose={() => setCourseModal({ isOpen: false, mode: 'create', course: null })}
        onSubmit={courseModal.mode === 'create' ? handleCreateCourse : handleUpdateCourse}
        course={courseModal.course}
        mode={courseModal.mode}
      />

      <CourseDetailsModal
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, course: null })}
        course={detailsModal.course}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, action: null, courseId: null })}
        onConfirm={handleDeleteCourse}
        title="Delete Course"
        message="Are you sure you want to delete this course? This action cannot be undone."
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <MenuBook className="mr-3 text-purple-600" />
            Courses Management
          </h1>
          <p className="text-gray-500 mt-1">Manage your course catalog, content, and pricing</p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCourseModal({ isOpen: true, mode: 'create', course: null })}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Add className="w-5 h-5 mr-2" />
            Add Course
          </button>
          <button
            onClick={handleRefresh}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Refresh className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleExport}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Download className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Courses</p>
              <p className="text-2xl font-bold text-gray-800">{courses.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <MenuBook className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Published</p>
              <p className="text-2xl font-bold text-gray-800">
                {courses.filter(c => c.status === 'Published').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Drafts</p>
              <p className="text-2xl font-bold text-gray-800">
                {courses.filter(c => c.status === 'Draft').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Edit className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-800">
                {courses.reduce((acc, c) => acc + c.students, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <People className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">
                ${courses.reduce((acc, c) => acc + (c.price * c.students), 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <AttachMoney className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses by title, instructor, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <FilterList className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Level Filter */}
          <div className="relative">
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <FilterList className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <FilterList className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </motion.div>

      {/* Courses Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              {/* Course Image */}
              <div className="h-40 bg-gradient-to-r from-purple-500 to-pink-500 relative flex items-center justify-center">
                <span className="text-6xl">{course.image}</span>
                {course.featured && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Course Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(course.status)}`}>
                    {course.status}
                  </span>
                </div>

                <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{course.description}</p>

                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Person className="w-4 h-4 mr-1" />
                  {course.instructor}
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Students</p>
                    <p className="font-semibold text-gray-800">{course.students}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Rating</p>
                    <p className="font-semibold text-gray-800 flex items-center justify-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      {course.rating}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Price</p>
                    <p className="font-semibold text-purple-600">${course.price}</p>
                  </div>
                </div>

                {/* Progress Bar (if enrolled) */}
                {course.enrolled && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-purple-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-purple-600 h-1.5 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setDetailsModal({ isOpen: true, course })}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Visibility className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCourseModal({ isOpen: true, mode: 'edit', course })}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      title="Edit Course"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleStatusChange(course.id, course.status === 'Published' ? 'Draft' : 'Published')}
                      className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                      title={course.status === 'Published' ? 'Unpublish' : 'Publish'}
                    >
                      {course.status === 'Published' ? <Block className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => setConfirmModal({ isOpen: true, action: 'delete', courseId: course.id })}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Course"
                    >
                      <Delete className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">
                    {course.lessons} lessons
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* No Results */}
      {!loading && filteredCourses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
          <MenuBook className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No courses found matching your criteria</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setCategoryFilter('All');
              setLevelFilter('All');
              setStatusFilter('All');
            }}
            className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
          >
            Clear Filters
          </button>
        </div>
      )}
    </motion.div>
  );
};

