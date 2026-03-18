/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
// pages/dashboard/MeManagement.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';

// Material-UI Icons
import Person from '@mui/icons-material/Person';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import Lock from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Save from '@mui/icons-material/Save';
import Cancel from '@mui/icons-material/Cancel';
import Edit from '@mui/icons-material/Edit';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Error from '@mui/icons-material/Error';
import Warning from '@mui/icons-material/Warning';
import Info from '@mui/icons-material/Info';
import Close from '@mui/icons-material/Close';
import Security from '@mui/icons-material/Security';
import Settings from '@mui/icons-material/Settings';
import Notifications from '@mui/icons-material/Notifications';
import Language from '@mui/icons-material/Language';
import Palette from '@mui/icons-material/Palette';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Logout from '@mui/icons-material/Logout';
import Verified from '@mui/icons-material/Verified';
import GppGood from '@mui/icons-material/GppGood';
import GppBad from '@mui/icons-material/GppBad';
import Fingerprint from '@mui/icons-material/Fingerprint';
import History from '@mui/icons-material/History';
import Devices from '@mui/icons-material/Devices';
import { AttachMoney } from '@mui/icons-material';

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
        bio: 'Passionate web developer looking to master full-stack development.',
        twoFactorEnabled: false,
        emailVerified: true,
        phoneVerified: true,
        securityQuestions: true,
        lastPasswordChange: '2024-02-15',
        loginHistory: [
          { date: '2024-03-15 14:30', device: 'Chrome on Windows', location: 'New York, USA', ip: '192.168.1.1' },
          { date: '2024-03-14 09:15', device: 'Safari on iPhone', location: 'New York, USA', ip: '192.168.1.2' },
          { date: '2024-03-13 18:45', device: 'Firefox on Mac', location: 'New York, USA', ip: '192.168.1.3' }
        ],
        connectedDevices: [
          { name: 'Chrome on Windows', lastActive: '2024-03-15 14:30', current: true },
          { name: 'Safari on iPhone', lastActive: '2024-03-14 09:15', current: false },
          { name: 'Firefox on Mac', lastActive: '2024-03-13 18:45', current: false }
        ],
        preferences: {
          emailNotifications: true,
          pushNotifications: true,
          darkMode: false,
          language: 'English',
          timezone: 'America/New_York',
          currency: 'USD'
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
        bio: 'Data science enthusiast with a background in statistics.',
        twoFactorEnabled: true,
        emailVerified: true,
        phoneVerified: true,
        securityQuestions: true,
        lastPasswordChange: '2024-01-20',
        loginHistory: [
          { date: '2024-03-15 16:45', device: 'Chrome on Mac', location: 'Los Angeles, USA', ip: '192.168.2.1' },
          { date: '2024-03-15 10:30', device: 'Safari on iPad', location: 'Los Angeles, USA', ip: '192.168.2.2' }
        ],
        connectedDevices: [
          { name: 'Chrome on Mac', lastActive: '2024-03-15 16:45', current: true },
          { name: 'Safari on iPad', lastActive: '2024-03-15 10:30', current: false }
        ],
        preferences: {
          emailNotifications: true,
          pushNotifications: false,
          darkMode: true,
          language: 'English',
          timezone: 'America/Los_Angeles',
          currency: 'USD'
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
        bio: '',
        twoFactorEnabled: false,
        emailVerified: false,
        phoneVerified: false,
        securityQuestions: false,
        lastPasswordChange: new Date().toISOString().split('T')[0],
        loginHistory: [],
        connectedDevices: [],
        preferences: {
          emailNotifications: true,
          pushNotifications: true,
          darkMode: false,
          language: 'English',
          timezone: 'UTC',
          currency: 'USD'
        }
      }
    };
  },

  // Update user profile
  updateProfile: async (email, profileData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Profile updated successfully',
      data: profileData
    };
  },

  // Change password
  changePassword: async (email, currentPassword, newPassword) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate password validation
    if (currentPassword === 'password123') {
      return {
        success: true,
        message: 'Password changed successfully'
      };
    } else {
      return {
        success: false,
        message: 'Current password is incorrect'
      };
    }
  },

  // Update preferences
  updatePreferences: async (email, preferences) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return {
      success: true,
      message: 'Preferences updated successfully',
      data: preferences
    };
  },

  // Enable 2FA
  toggleTwoFactor: async (email, enable) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: enable ? 'Two-factor authentication enabled' : 'Two-factor authentication disabled'
    };
  },

  // Delete account
  deleteAccount: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      success: true,
      message: 'Account deleted successfully'
    };
  },

  // Logout from all devices
  logoutAllDevices: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Logged out from all other devices'
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
const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, type = 'danger' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative z-10"
      >
        <div className={`flex items-center justify-center w-16 h-16 mx-auto rounded-full mb-4 ${
          type === 'danger' ? 'bg-red-100' : 'bg-yellow-100'
        }`}>
          {type === 'danger' ? (
            <DeleteForever className="w-8 h-8 text-red-600" />
          ) : (
            <Warning className="w-8 h-8 text-yellow-600" />
          )}
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
            className={`flex-1 px-4 py-2 text-white rounded-lg transition-colors ${
              type === 'danger' ? 'bg-red-600 hover:bg-red-700' : 'bg-yellow-600 hover:bg-yellow-700'
            }`}
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Edit Profile Modal
const EditProfileModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    bio: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        location: user.location || '',
        bio: user.bio || ''
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your location"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Tell us about yourself"
            />
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
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              <Save className="w-5 h-5 mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Change Password Modal
const ChangePasswordModal = ({ isOpen, onClose, onChangePassword }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }

    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData.newPassword === formData.currentPassword) {
      newErrors.newPassword = 'New password must be different from current password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onChangePassword(formData.currentPassword, formData.newPassword);
    }
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
          <h3 className="text-xl font-bold">Change Password</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 pr-10 ${
                  errors.currentPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showCurrent ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.currentPassword}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNew ? 'text' : 'password'}
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 pr-10 ${
                  errors.newPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showNew ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 pr-10 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showConfirm ? <VisibilityOff className="w-5 h-5" /> : <Visibility className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800 flex items-center">
              <Info className="w-4 h-4 mr-2" />
              Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.
            </p>
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
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              <Lock className="w-5 h-5 mr-2" />
              Update Password
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Preferences Modal
const PreferencesModal = ({ isOpen, onClose, preferences, onSave }) => {
  const [formData, setFormData] = useState({
    emailNotifications: true,
    pushNotifications: true,
    darkMode: false,
    language: 'English',
    timezone: 'UTC',
    currency: 'USD'
  });

  useEffect(() => {
    if (preferences) {
      setFormData(preferences);
    }
  }, [preferences, isOpen]);

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
          <h3 className="text-xl font-bold">Preferences</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Notifications</h4>
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Email Notifications</span>
              <input
                type="checkbox"
                checked={formData.emailNotifications}
                onChange={(e) => setFormData({ ...formData, emailNotifications: e.target.checked })}
                className="w-5 h-5 text-purple-600 rounded"
              />
            </label>
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Push Notifications</span>
              <input
                type="checkbox"
                checked={formData.pushNotifications}
                onChange={(e) => setFormData({ ...formData, pushNotifications: e.target.checked })}
                className="w-5 h-5 text-purple-600 rounded"
              />
            </label>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Appearance</h4>
            <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">Dark Mode</span>
              <input
                type="checkbox"
                checked={formData.darkMode}
                onChange={(e) => setFormData({ ...formData, darkMode: e.target.checked })}
                className="w-5 h-5 text-purple-600 rounded"
              />
            </label>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-gray-700">Regional Settings</h4>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Language</label>
              <select
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Chinese">Chinese</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Timezone</label>
              <select
                value={formData.timezone}
                onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="UTC">UTC</option>
                <option value="America/New_York">Eastern Time</option>
                <option value="America/Chicago">Central Time</option>
                <option value="America/Denver">Mountain Time</option>
                <option value="America/Los_Angeles">Pacific Time</option>
                <option value="Europe/London">London</option>
                <option value="Europe/Paris">Paris</option>
                <option value="Asia/Tokyo">Tokyo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Currency</label>
              <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="CAD">CAD (C$)</option>
                <option value="AUD">AUD (A$)</option>
              </select>
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
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              <Save className="w-5 h-5 mr-2" />
              Save Preferences
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export const MeManagement = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Modal states
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  
  // Notification state
  const [notification, setNotification] = useState(null);

  // Get email from cookies
  const userEmail = Cookies.get('userEmail') || 'john.smith@email.com'; // Default for demo

  // Fetch user data
  useEffect(() => {
    fetchUserData();
  }, [userEmail]);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await userAPI.getUserByEmail(userEmail);
      if (response.success) {
        setUser(response.data);
      }
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

  const handleProfileUpdate = async (profileData) => {
    try {
      const response = await userAPI.updateProfile(userEmail, profileData);
      if (response.success) {
        setUser({ ...user, ...profileData });
        setShowEditProfile(false);
        showNotification('success', response.message);
      }
    } catch (error) {
      showNotification('error', 'Failed to update profile');
    }
  };

  const handlePasswordChange = async (currentPassword, newPassword) => {
    try {
      const response = await userAPI.changePassword(userEmail, currentPassword, newPassword);
      if (response.success) {
        setShowChangePassword(false);
        showNotification('success', response.message);
      } else {
        showNotification('error', response.message);
      }
    } catch (error) {
      showNotification('error', 'Failed to change password');
    }
  };

  const handlePreferencesUpdate = async (preferences) => {
    try {
      const response = await userAPI.updatePreferences(userEmail, preferences);
      if (response.success) {
        setUser({ ...user, preferences });
        setShowPreferences(false);
        showNotification('success', response.message);
      }
    } catch (error) {
      showNotification('error', 'Failed to update preferences');
    }
  };

  const handleToggleTwoFactor = async () => {
    try {
      const newState = !user.twoFactorEnabled;
      const response = await userAPI.toggleTwoFactor(userEmail, newState);
      if (response.success) {
        setUser({ ...user, twoFactorEnabled: newState });
        showNotification('success', response.message);
      }
    } catch (error) {
      showNotification('error', 'Failed to update two-factor authentication');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await userAPI.deleteAccount(userEmail);
      if (response.success) {
        showNotification('success', response.message);
        // Redirect to logout or home page after 2 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      }
    } catch (error) {
      showNotification('error', 'Failed to delete account');
    }
  };

  const handleLogoutAllDevices = async () => {
    try {
      const response = await userAPI.logoutAllDevices(userEmail);
      if (response.success) {
        setShowLogoutConfirm(false);
        showNotification('success', response.message);
      }
    } catch (error) {
      showNotification('error', 'Failed to logout from other devices');
    }
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

      {/* Modals */}
      <EditProfileModal
        isOpen={showEditProfile}
        onClose={() => setShowEditProfile(false)}
        user={user}
        onSave={handleProfileUpdate}
      />

      <ChangePasswordModal
        isOpen={showChangePassword}
        onClose={() => setShowChangePassword(false)}
        onChangePassword={handlePasswordChange}
      />

      <PreferencesModal
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        preferences={user?.preferences}
        onSave={handlePreferencesUpdate}
      />

      <ConfirmModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={handleDeleteAccount}
        title="Delete Account"
        message="Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed."
        type="danger"
      />

      <ConfirmModal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleLogoutAllDevices}
        title="Logout from all devices"
        message="Are you sure you want to logout from all other devices? You will need to login again on those devices."
        type="warning"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <Person className="mr-3" />
              Account Settings
            </h1>
            <p className="text-purple-100 mt-2">Manage your account, security, and preferences</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
            {user?.avatar}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'profile'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Person className="w-5 h-5 mr-2" />
            Profile
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'security'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Security className="w-5 h-5 mr-2" />
            Security
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'preferences'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Settings className="w-5 h-5 mr-2" />
            Preferences
          </button>
          <button
            onClick={() => setActiveTab('devices')}
            className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'devices'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Devices className="w-5 h-5 mr-2" />
            Devices
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <motion.div key={activeTab} variants={itemVariants}>
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Profile Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Profile Information</h3>
                <button
                  onClick={() => setShowEditProfile(true)}
                  className="flex items-center px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Full Name</p>
                  <p className="font-medium text-gray-800 flex items-center">
                    <Person className="w-4 h-4 mr-2 text-gray-400" />
                    {user?.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email Address</p>
                  <p className="font-medium text-gray-800 flex items-center">
                    <Email className="w-4 h-4 mr-2 text-gray-400" />
                    {user?.email}
                    {user?.emailVerified && (
                      <Verified className="w-4 h-4 ml-2 text-green-500" />
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                  <p className="font-medium text-gray-800 flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    {user?.phone}
                    {user?.phoneVerified && (
                      <Verified className="w-4 h-4 ml-2 text-green-500" />
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-medium text-gray-800 flex items-center">
                    <LocationOn className="w-4 h-4 mr-2 text-gray-400" />
                    {user?.location}
                  </p>
                </div>
              </div>

              {user?.bio && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-1">Bio</p>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{user.bio}</p>
                </div>
              )}

              <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Member Since</p>
                  <p className="text-gray-700">{new Date(user?.memberSince).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Last Active</p>
                  <p className="text-gray-700">{user?.lastActive}</p>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowChangePassword(true)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 text-purple-600 mr-3" />
                    <div className="text-left">
                      <p className="font-medium text-gray-800">Change Password</p>
                      <p className="text-sm text-gray-500">Last changed {new Date(user?.lastPasswordChange).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <Edit className="w-5 h-5 text-gray-400" />
                </button>

                <button
                  onClick={() => setShowPreferences(true)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 text-purple-600 mr-3" />
                    <div className="text-left">
                      <p className="font-medium text-gray-800">Preferences</p>
                      <p className="text-sm text-gray-500">Manage your notifications and regional settings</p>
                    </div>
                  </div>
                  <Edit className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            {/* Two-Factor Authentication */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Two-Factor Authentication</h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Fingerprint className="w-6 h-6 text-purple-600 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                    <p className="text-sm text-gray-500">
                      {user?.twoFactorEnabled 
                        ? 'Your account is protected with 2FA' 
                        : 'Add an extra layer of security to your account'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleToggleTwoFactor}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    user?.twoFactorEnabled
                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {user?.twoFactorEnabled ? 'Disable' : 'Enable'}
                </button>
              </div>
            </div>

            {/* Login History */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Login Activity</h3>
              <div className="space-y-3">
                {user?.loginHistory?.map((login, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">{login.device}</p>
                      <p className="text-sm text-gray-500">{login.location} • {login.ip}</p>
                    </div>
                    <p className="text-sm text-gray-500">{login.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-100">
              <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowLogoutConfirm(true)}
                  className="w-full flex items-center justify-between p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                >
                  <div className="flex items-center">
                    <Logout className="w-5 h-5 text-yellow-600 mr-3" />
                    <div className="text-left">
                      <p className="font-medium text-gray-800">Logout from all devices</p>
                      <p className="text-sm text-gray-500">Sign out from all active sessions</p>
                    </div>
                  </div>
                  <Logout className="w-5 h-5 text-yellow-600" />
                </button>

                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="w-full flex items-center justify-between p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <div className="flex items-center">
                    <DeleteForever className="w-5 h-5 text-red-600 mr-3" />
                    <div className="text-left">
                      <p className="font-medium text-gray-800">Delete Account</p>
                      <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
                    </div>
                  </div>
                  <DeleteForever className="w-5 h-5 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Current Preferences</h3>
              <button
                onClick={() => setShowPreferences(true)}
                className="flex items-center px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Notifications</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Notifications className="w-5 h-5 text-purple-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user?.preferences?.emailNotifications ? 'Enabled' : 'Disabled'}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Notifications className="w-5 h-5 text-purple-600 mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Push</p>
                      <p className="font-medium">{user?.preferences?.pushNotifications ? 'Enabled' : 'Disabled'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">Appearance</h4>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Palette className="w-5 h-5 text-purple-600 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Theme</p>
                    <p className="font-medium">{user?.preferences?.darkMode ? 'Dark' : 'Light'}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">Regional Settings</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Language className="w-5 h-5 text-purple-600 mb-1" />
                    <p className="text-sm text-gray-500">Language</p>
                    <p className="font-medium">{user?.preferences?.language}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <LocationOn className="w-5 h-5 text-purple-600 mb-1" />
                    <p className="text-sm text-gray-500">Timezone</p>
                    <p className="font-medium">{user?.preferences?.timezone}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <AttachMoney className="w-5 h-5 text-purple-600 mb-1" />
                    <p className="text-sm text-gray-500">Currency</p>
                    <p className="font-medium">{user?.preferences?.currency}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Devices Tab */}
        {activeTab === 'devices' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connected Devices</h3>
            <div className="space-y-3">
              {user?.connectedDevices?.map((device, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Devices className="w-6 h-6 text-purple-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-800">
                        {device.name}
                        {device.current && (
                          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Current Device
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">Last active: {device.lastActive}</p>
                    </div>
                  </div>
                  {!device.current && (
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Logout
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Account Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Account Status</p>
              <p className="text-lg font-semibold text-gray-800 flex items-center">
                {user?.emailVerified && user?.phoneVerified ? (
                  <>
                    <GppGood className="w-5 h-5 text-green-500 mr-2" />
                    Verified
                  </>
                ) : (
                  <>
                    <GppBad className="w-5 h-5 text-yellow-500 mr-2" />
                    Partial
                  </>
                )}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Security Level</p>
              <p className="text-lg font-semibold text-gray-800">
                {user?.twoFactorEnabled ? 'High' : 'Medium'}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Sessions</p>
              <p className="text-lg font-semibold text-gray-800">
                {user?.connectedDevices?.filter(d => d.current).length} / {user?.connectedDevices?.length}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

