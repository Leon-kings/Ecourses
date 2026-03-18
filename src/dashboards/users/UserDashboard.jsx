/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
// pages/dashboard/UserDashboard.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';

// Material-UI Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person from '@mui/icons-material/Person';
import MenuBook from '@mui/icons-material/MenuBook';
import Event from '@mui/icons-material/Event';
import Bookmark from '@mui/icons-material/Bookmark';
import Star from '@mui/icons-material/Star';
import AccessTime from '@mui/icons-material/AccessTime';
import CheckCircle from '@mui/icons-material/CheckCircle';
import TrendingUp from '@mui/icons-material/TrendingUp';
import School from '@mui/icons-material/School';
import Payment from '@mui/icons-material/Payment';
import Settings from '@mui/icons-material/Settings';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Notifications from '@mui/icons-material/Notifications';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Edit from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';
import PlayCircle from '@mui/icons-material/PlayCircle';
import Download from '@mui/icons-material/Download';
import Share from '@mui/icons-material/Share';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Comment from '@mui/icons-material/Comment';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Receipt from '@mui/icons-material/Receipt';
import Refresh from '@mui/icons-material/Refresh';
import Warning from '@mui/icons-material/Warning';
import Info from '@mui/icons-material/Info';

// API Service (simulated)
const userAPI = {
  // Get user by email
  getUserByEmail: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simulate database lookup
    const users = {
      'john.smith@email.com': {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, USA',
        avatar: '👨‍💻',
        role: 'Student',
        memberSince: '2024-01-15',
        lastActive: '2024-03-15 14:30',
        bio: 'Passionate web developer looking to master full-stack development. Currently learning React and Node.js.',
        interests: ['Web Development', 'React', 'JavaScript'],
        socialLinks: {
          github: 'https://github.com/johnsmith',
          linkedin: 'https://linkedin.com/in/johnsmith',
          twitter: 'https://twitter.com/johnsmith'
        },
        preferences: {
          emailNotifications: true,
          pushNotifications: true,
          darkMode: false,
          language: 'English'
        }
      },
      'sarah.j@email.com': {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        phone: '+1 (555) 234-5678',
        location: 'Los Angeles, USA',
        avatar: '👩‍💻',
        role: 'Student',
        memberSince: '2023-11-20',
        lastActive: '2024-03-15 16:45',
        bio: 'Data science enthusiast with a background in statistics. Looking to transition into machine learning engineering.',
        interests: ['Data Science', 'Python', 'Machine Learning'],
        socialLinks: {
          github: 'https://github.com/sarahjohnson',
          linkedin: 'https://linkedin.com/in/sarahjohnson'
        },
        preferences: {
          emailNotifications: true,
          pushNotifications: false,
          darkMode: true,
          language: 'English'
        }
      },
      'michael.c@email.com': {
        id: 3,
        name: 'Michael Chen',
        email: 'michael.c@email.com',
        phone: '+1 (555) 345-6789',
        location: 'San Francisco, USA',
        avatar: '👨‍💻',
        role: 'Student',
        memberSince: '2024-02-01',
        lastActive: '2024-03-14 09:15',
        bio: 'Full-stack developer with 3 years experience. Looking to level up my skills in cloud computing.',
        interests: ['Cloud Computing', 'AWS', 'DevOps'],
        socialLinks: {
          github: 'https://github.com/michaelchen',
          linkedin: 'https://linkedin.com/in/michaelchen'
        },
        preferences: {
          emailNotifications: true,
          pushNotifications: true,
          darkMode: false,
          language: 'English'
        }
      }
    };

    return {
      success: true,
      data: users[email] || {
        id: 999,
        name: 'Guest User',
        email: email,
        phone: 'Not provided',
        location: 'Not specified',
        avatar: '👤',
        role: 'Guest',
        memberSince: new Date().toISOString().split('T')[0],
        lastActive: new Date().toLocaleString(),
        bio: 'Welcome to your dashboard!',
        interests: [],
        socialLinks: {},
        preferences: {
          emailNotifications: true,
          pushNotifications: true,
          darkMode: false,
          language: 'English'
        }
      }
    };
  },

  // Get user's enrolled courses
  getUserCourses: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const courses = {
      'john.smith@email.com': [
        {
          id: 1,
          title: 'Complete Web Development Bootcamp',
          instructor: 'John Smith',
          progress: 75,
          thumbnail: '🌐',
          category: 'Web Development',
          enrolledDate: '2024-01-20',
          lastAccessed: '2024-03-15',
          nextLesson: 'React Hooks Deep Dive',
          completedLessons: 90,
          totalLessons: 120,
          certificate: 'in-progress',
          rating: 4.8
        },
        {
          id: 2,
          title: 'Advanced JavaScript Concepts',
          instructor: 'Sarah Johnson',
          progress: 45,
          thumbnail: '📚',
          category: 'JavaScript',
          enrolledDate: '2024-02-10',
          lastAccessed: '2024-03-14',
          nextLesson: 'Closures and Scope',
          completedLessons: 36,
          totalLessons: 80,
          certificate: 'not-started',
          rating: 4.7
        },
        {
          id: 3,
          title: 'React Native for Beginners',
          instructor: 'Mike Wilson',
          progress: 20,
          thumbnail: '📱',
          category: 'Mobile Development',
          enrolledDate: '2024-03-01',
          lastAccessed: '2024-03-13',
          nextLesson: 'Navigation Setup',
          completedLessons: 15,
          totalLessons: 75,
          certificate: 'not-started',
          rating: 4.6
        }
      ],
      'sarah.j@email.com': [
        {
          id: 4,
          title: 'Data Science Bootcamp',
          instructor: 'Sarah Johnson',
          progress: 60,
          thumbnail: '📊',
          category: 'Data Science',
          enrolledDate: '2023-12-05',
          lastAccessed: '2024-03-15',
          nextLesson: 'Machine Learning Algorithms',
          completedLessons: 72,
          totalLessons: 120,
          certificate: 'in-progress',
          rating: 4.9
        },
        {
          id: 5,
          title: 'Python for Data Analysis',
          instructor: 'David Wilson',
          progress: 85,
          thumbnail: '🐍',
          category: 'Python',
          enrolledDate: '2024-01-15',
          lastAccessed: '2024-03-14',
          nextLesson: 'Final Project',
          completedLessons: 68,
          totalLessons: 80,
          certificate: 'in-progress',
          rating: 4.8
        }
      ]
    };

    return {
      success: true,
      data: courses[email] || [
        {
          id: 101,
          title: 'Introduction to Web Development',
          instructor: 'Demo Instructor',
          progress: 30,
          thumbnail: '🌐',
          category: 'Web Development',
          enrolledDate: '2024-03-01',
          lastAccessed: '2024-03-15',
          nextLesson: 'HTML Basics',
          completedLessons: 9,
          totalLessons: 30,
          certificate: 'not-started',
          rating: 4.5
        }
      ]
    };
  },

  // Get user's bookings/appointments
  getUserBookings: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const bookings = {
      'john.smith@email.com': [
        {
          id: 1,
          service: 'Web Development Consultation',
          instructor: 'Sarah Johnson',
          date: '2024-03-20',
          time: '10:00 AM',
          duration: '1 hour',
          status: 'Confirmed',
          location: 'Video Call',
          price: 89.99
        },
        {
          id: 2,
          service: 'React Code Review',
          instructor: 'Mike Wilson',
          date: '2024-03-22',
          time: '2:00 PM',
          duration: '45 min',
          status: 'Pending',
          location: 'Online',
          price: 49.99
        }
      ],
      'sarah.j@email.com': [
        {
          id: 3,
          service: 'Data Science Mentoring',
          instructor: 'David Wilson',
          date: '2024-03-21',
          time: '11:30 AM',
          duration: '1 hour',
          status: 'Confirmed',
          location: 'Video Call',
          price: 99.99
        }
      ]
    };

    return {
      success: true,
      data: bookings[email] || []
    };
  },

  // Get user's certificates
  getUserCertificates: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const certificates = {
      'john.smith@email.com': [
        {
          id: 1,
          course: 'HTML & CSS Fundamentals',
          issueDate: '2024-02-15',
          grade: 'A',
          credentialId: 'CERT-2024-001',
          downloadUrl: '#'
        }
      ],
      'sarah.j@email.com': [
        {
          id: 2,
          course: 'Python Basics',
          issueDate: '2024-01-20',
          grade: 'A+',
          credentialId: 'CERT-2024-002',
          downloadUrl: '#'
        },
        {
          id: 3,
          course: 'Data Analysis with Pandas',
          issueDate: '2024-02-28',
          grade: 'A',
          credentialId: 'CERT-2024-003',
          downloadUrl: '#'
        }
      ]
    };

    return {
      success: true,
      data: certificates[email] || []
    };
  },

  // Get user's payment history
  getUserPayments: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const payments = {
      'john.smith@email.com': [
        {
          id: 1,
          date: '2024-03-15',
          description: 'Complete Web Development Bootcamp',
          amount: 89.99,
          status: 'Paid',
          method: 'Credit Card',
          invoice: '#INV-2024-001'
        },
        {
          id: 2,
          date: '2024-03-10',
          description: 'React Native for Beginners',
          amount: 79.99,
          status: 'Paid',
          method: 'PayPal',
          invoice: '#INV-2024-002'
        },
        {
          id: 3,
          date: '2024-03-05',
          description: 'Web Development Consultation',
          amount: 89.99,
          status: 'Paid',
          method: 'Credit Card',
          invoice: '#INV-2024-003'
        }
      ],
      'sarah.j@email.com': [
        {
          id: 4,
          date: '2024-03-14',
          description: 'Data Science Bootcamp',
          amount: 129.99,
          status: 'Paid',
          method: 'Credit Card',
          invoice: '#INV-2024-004'
        }
      ]
    };

    return {
      success: true,
      data: payments[email] || []
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
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
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

// Profile Edit Modal
const ProfileEditModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    bio: '',
    emailNotifications: true,
    pushNotifications: true,
    language: 'English'
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        location: user.location || '',
        bio: user.bio || '',
        emailNotifications: user.preferences?.emailNotifications || true,
        pushNotifications: user.preferences?.pushNotifications || true,
        language: user.preferences?.language || 'English'
      });
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg relative z-10"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Edit Profile</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">Preferences</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.emailNotifications}
                  onChange={(e) => setFormData({ ...formData, emailNotifications: e.target.checked })}
                  className="w-4 h-4 text-purple-600 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Email Notifications</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.pushNotifications}
                  onChange={(e) => setFormData({ ...formData, pushNotifications: e.target.checked })}
                  className="w-4 h-4 text-purple-600 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Push Notifications</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [notification, setNotification] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Get email from cookies
  const userEmail = Cookies.get('userEmail') || 'john.smith@email.com'; // Default for demo

  // Fetch all user data
  useEffect(() => {
    fetchUserData();
  }, [userEmail]);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const [userRes, coursesRes, bookingsRes, certsRes, paymentsRes] = await Promise.all([
        userAPI.getUserByEmail(userEmail),
        userAPI.getUserCourses(userEmail),
        userAPI.getUserBookings(userEmail),
        userAPI.getUserCertificates(userEmail),
        userAPI.getUserPayments(userEmail)
      ]);

      if (userRes.success) setUser(userRes.data);
      if (coursesRes.success) setCourses(coursesRes.data);
      if (bookingsRes.success) setBookings(bookingsRes.data);
      if (certsRes.success) setCertificates(certsRes.data);
      if (paymentsRes.success) setPayments(paymentsRes.data);
    } catch (error) {
      showNotification('error', 'Failed to load user data');
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchUserData();
    setRefreshing(false);
    showNotification('success', 'Data refreshed successfully');
  };

  const handleProfileSave = (updatedData) => {
    setUser({
      ...user,
      name: updatedData.name,
      phone: updatedData.phone,
      location: updatedData.location,
      bio: updatedData.bio,
      preferences: {
        emailNotifications: updatedData.emailNotifications,
        pushNotifications: updatedData.pushNotifications,
        language: updatedData.language
      }
    });
    setShowProfileEdit(false);
    showNotification('success', 'Profile updated successfully');
  };

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

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

      {/* Profile Edit Modal */}
      <ProfileEditModal
        isOpen={showProfileEdit}
        onClose={() => setShowProfileEdit(false)}
        user={user}
        onSave={handleProfileSave}
      />

      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              Welcome back, {user?.name}! 
              <button
                onClick={handleRefresh}
                className="ml-4 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                disabled={refreshing}
              >
                <Refresh className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
              </button>
            </h1>
            <p className="text-purple-100 mt-2">Here's what's happening with your learning journey</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowProfileEdit(true)}
              className="flex items-center px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
            >
              <Edit className="w-5 h-5 mr-2" />
              Edit Profile
            </button>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
              {user?.avatar}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Enrolled Courses</p>
              <p className="text-2xl font-bold text-gray-800">{courses.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <MenuBook className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            {courses.filter(c => c.progress === 100).length} completed
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Upcoming Bookings</p>
              <p className="text-2xl font-bold text-gray-800">
                {bookings.filter(b => b.status === 'Confirmed').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Event className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Next: {bookings[0]?.date || 'No bookings'}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Certificates</p>
              <p className="text-2xl font-bold text-gray-800">{certificates.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <School className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Last earned: {certificates[0]?.issueDate || 'N/A'}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Spent</p>
              <p className="text-2xl font-bold text-gray-800">
                ${payments.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <AttachMoney className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            {payments.length} transactions
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'courses'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            My Courses
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'bookings'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Bookings
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'certificates'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Certificates
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'payments'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Payments
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <motion.div key={activeTab} variants={itemVariants} className="min-h-[400px]">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Person className="mr-2 text-purple-600" />
                Profile Information
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium flex items-center">
                    <Email className="w-4 h-4 mr-1 text-gray-400" />
                    {user?.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium flex items-center">
                    <Phone className="w-4 h-4 mr-1 text-gray-400" />
                    {user?.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium flex items-center">
                    <LocationOn className="w-4 h-4 mr-1 text-gray-400" />
                    {user?.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="font-medium flex items-center">
                    <CalendarToday className="w-4 h-4 mr-1 text-gray-400" />
                    {new Date(user?.memberSince).toLocaleDateString()}
                  </p>
                </div>
              </div>
              {user?.bio && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">{user.bio}</p>
                </div>
              )}
            </div>

            {/* Current Courses */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Courses</h3>
              <div className="space-y-4">
                {courses.slice(0, 3).map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                        {course.thumbnail}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{course.title}</h4>
                        <p className="text-sm text-gray-500">{course.instructor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-purple-600">{course.progress}%</p>
                      <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Bookings */}
            {bookings.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Bookings</h3>
                <div className="space-y-3">
                  {bookings.slice(0, 2).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">{booking.service}</p>
                        <p className="text-sm text-gray-500">with {booking.instructor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-800">{booking.date} at {booking.time}</p>
                        <span className="text-xs text-green-600">{booking.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
                  {course.thumbnail}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-purple-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {course.rating}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    Next: {course.nextLesson}
                  </p>

                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Service</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Instructor</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Date & Time</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Duration</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-800">{booking.service}</td>
                    <td className="py-4 px-6 text-gray-600">{booking.instructor}</td>
                    <td className="py-4 px-6">
                      <p className="text-gray-600">{booking.date}</p>
                      <p className="text-sm text-gray-400">{booking.time}</p>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{booking.duration}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-medium text-purple-600">${booking.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Certificates Tab */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <School className="w-8 h-8 text-purple-600" />
                  </div>
                  <span className="text-xs text-gray-400">{cert.credentialId}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.course}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Issued: {new Date(cert.issueDate).toLocaleDateString()}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    Grade: {cert.grade}
                  </span>
                </div>
                <button className="w-full px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Certificate
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Description</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Amount</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Method</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-600">{new Date(payment.date).toLocaleDateString()}</td>
                    <td className="py-4 px-6 font-medium text-gray-800">{payment.description}</td>
                    <td className="py-4 px-6 font-medium text-purple-600">${payment.amount}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{payment.method}</td>
                    <td className="py-4 px-6">
                      <button className="text-purple-600 hover:text-purple-800 flex items-center">
                        <Receipt className="w-4 h-4 mr-1" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <Bookmark className="mr-2 text-purple-600" />
            Saved Items
          </h3>
          <p className="text-gray-500 text-sm mb-4">You have 3 saved courses</p>
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            View Saved Items →
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <Notifications className="mr-2 text-purple-600" />
            Notifications
          </h3>
          <p className="text-gray-500 text-sm mb-4">You have 2 unread notifications</p>
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            View All →
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
            <TrendingUp className="mr-2 text-purple-600" />
            Learning Streak
          </h3>
          <p className="text-gray-500 text-sm mb-4">You've been learning for 15 days straight!</p>
          <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
            View Activity →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

