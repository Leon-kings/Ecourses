/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
// pages/dashboard/UserManagement.jsx
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
import Block from '@mui/icons-material/Block';
import LockReset from '@mui/icons-material/LockReset';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Verified from '@mui/icons-material/Verified';
import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings';
import Person from '@mui/icons-material/Person';
import { School } from '@mui/icons-material';

// API Service (simulated)
const userAPI = {
  // Simulate API calls with dummy data
  getUsers: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return dummy user data
    return {
      success: true,
      data: [
        { 
          id: 1, 
          name: 'John Smith', 
          email: 'john.smith@example.com', 
          role: 'Student', 
          status: 'Active',
          avatar: '👨‍🎓',
          phone: '+1 (555) 123-4567',
          location: 'New York, USA',
          joinDate: '2024-01-15',
          lastActive: '2024-03-15 14:30',
          coursesEnrolled: 5,
          verified: true
        },
        { 
          id: 2, 
          name: 'Sarah Johnson', 
          email: 'sarah.j@example.com', 
          role: 'Instructor', 
          status: 'Active',
          avatar: '👩‍🏫',
          phone: '+1 (555) 234-5678',
          location: 'Los Angeles, USA',
          joinDate: '2023-11-20',
          lastActive: '2024-03-15 16:45',
          coursesEnrolled: 12,
          verified: true
        },
        { 
          id: 3, 
          name: 'Michael Chen', 
          email: 'michael.chen@example.com', 
          role: 'Student', 
          status: 'Inactive',
          avatar: '👨‍💻',
          phone: '+1 (555) 345-6789',
          location: 'San Francisco, USA',
          joinDate: '2024-02-01',
          lastActive: '2024-03-10 09:15',
          coursesEnrolled: 2,
          verified: false
        },
        { 
          id: 4, 
          name: 'Emily Davis', 
          email: 'emily.d@example.com', 
          role: 'Admin', 
          status: 'Active',
          avatar: '👩‍💼',
          phone: '+1 (555) 456-7890',
          location: 'Chicago, USA',
          joinDate: '2023-09-05',
          lastActive: '2024-03-15 11:20',
          coursesEnrolled: 8,
          verified: true
        },
        { 
          id: 5, 
          name: 'David Wilson', 
          email: 'david.w@example.com', 
          role: 'Student', 
          status: 'Active',
          avatar: '👨‍🔬',
          phone: '+1 (555) 567-8901',
          location: 'Boston, USA',
          joinDate: '2024-01-28',
          lastActive: '2024-03-14 22:10',
          coursesEnrolled: 3,
          verified: true
        },
        { 
          id: 6, 
          name: 'Lisa Anderson', 
          email: 'lisa.a@example.com', 
          role: 'Instructor', 
          status: 'Suspended',
          avatar: '👩‍🎨',
          phone: '+1 (555) 678-9012',
          location: 'Seattle, USA',
          joinDate: '2023-10-12',
          lastActive: '2024-03-12 13:40',
          coursesEnrolled: 15,
          verified: true
        },
        { 
          id: 7, 
          name: 'Robert Taylor', 
          email: 'robert.t@example.com', 
          role: 'Student', 
          status: 'Pending',
          avatar: '👨‍🚀',
          phone: '+1 (555) 789-0123',
          location: 'Denver, USA',
          joinDate: '2024-03-01',
          lastActive: '2024-03-15 08:30',
          coursesEnrolled: 1,
          verified: false
        },
        { 
          id: 8, 
          name: 'Jennifer White', 
          email: 'jennifer.w@example.com', 
          role: 'Admin', 
          status: 'Active',
          avatar: '👩‍⚕️',
          phone: '+1 (555) 890-1234',
          location: 'Miami, USA',
          joinDate: '2023-08-15',
          lastActive: '2024-03-15 15:50',
          coursesEnrolled: 10,
          verified: true
        },
      ]
    };
  },
  
  createUser: async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'User created successfully',
      data: { id: Math.floor(Math.random() * 1000), ...userData }
    };
  },
  
  updateUser: async (id, userData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'User updated successfully',
      data: { id, ...userData }
    };
  },
  
  deleteUser: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'User deleted successfully'
    };
  },
  
  updateUserStatus: async (id, status) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      message: `User ${status === 'Active' ? 'activated' : 'suspended'} successfully`
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

// User Modal (Create/Edit)
const UserModal = ({ isOpen, onClose, onSubmit, user, mode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student',
    status: 'Active',
    phone: '',
    location: '',
    verified: true
  });

  useEffect(() => {
    if (user && mode === 'edit') {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        role: user.role || 'Student',
        status: user.status || 'Active',
        phone: user.phone || '',
        location: user.location || '',
        verified: user.verified || false
      });
    } else {
      setFormData({
        name: '',
        email: '',
        role: 'Student',
        status: 'Active',
        phone: '',
        location: '',
        verified: true
      });
    }
  }, [user, mode, isOpen]);

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
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl relative z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">
            {mode === 'create' ? 'Create New User' : 'Edit User'}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter phone number"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter location"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role *
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Admin">Admin</option>
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
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="verified"
              checked={formData.verified}
              onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
              className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
            />
            <label htmlFor="verified" className="ml-2 text-sm text-gray-700">
              Verified User
            </label>
          </div>

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
              {mode === 'create' ? 'Create User' : 'Update User'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// User Details Modal
const UserDetailsModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl relative z-10"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">User Details</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl mr-4">
            {user.avatar}
          </div>
          <div>
            <h4 className="text-2xl font-bold">{user.name}</h4>
            <div className="flex items-center mt-1">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                user.status === 'Active' ? 'bg-green-100 text-green-800' :
                user.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
                user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {user.status}
              </span>
              {user.verified && (
                <span className="ml-2 flex items-center text-blue-600">
                  <Verified className="w-4 h-4 mr-1" />
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Email className="w-5 h-5 text-gray-400 mr-3" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Phone className="w-5 h-5 text-gray-400 mr-3" />
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-medium">{user.phone || 'Not provided'}</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <LocationOn className="w-5 h-5 text-gray-400 mr-3" />
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-medium">{user.location || 'Not provided'}</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <AdminPanelSettings className="w-5 h-5 text-gray-400 mr-3" />
            <div>
              <p className="text-xs text-gray-500">Role</p>
              <p className="text-sm font-medium">{user.role}</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <CalendarToday className="w-5 h-5 text-gray-400 mr-3" />
            <div>
              <p className="text-xs text-gray-500">Join Date</p>
              <p className="text-sm font-medium">{new Date(user.joinDate).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <Person className="w-5 h-5 text-gray-400 mr-3" />
            <div>
              <p className="text-xs text-gray-500">Courses Enrolled</p>
              <p className="text-sm font-medium">{user.coursesEnrolled}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Modal states
  const [userModal, setUserModal] = useState({ isOpen: false, mode: 'create', user: null });
  const [detailsModal, setDetailsModal] = useState({ isOpen: false, user: null });
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, action: null, userId: null });
  
  // Notification state
  const [notification, setNotification] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Apply filters when users, searchTerm, roleFilter, or statusFilter change
  useEffect(() => {
    applyFilters();
  }, [users, searchTerm, roleFilter, statusFilter]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await userAPI.getUsers();
      if (response.success) {
        setUsers(response.data);
      }
    } catch (error) {
      showNotification('error', 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...users];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply role filter
    if (roleFilter !== 'All') {
      filtered = filtered.filter(user => user.role === roleFilter);
    }
    
    // Apply status filter
    if (statusFilter !== 'All') {
      filtered = filtered.filter(user => user.status === statusFilter);
    }
    
    setFilteredUsers(filtered);
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleCreateUser = async (userData) => {
    try {
      const response = await userAPI.createUser(userData);
      if (response.success) {
        showNotification('success', response.message);
        setUserModal({ isOpen: false, mode: 'create', user: null });
        fetchUsers(); // Refresh the list
      }
    } catch (error) {
      showNotification('error', 'Failed to create user');
    }
  };

  const handleUpdateUser = async (userData) => {
    try {
      const response = await userAPI.updateUser(userModal.user.id, userData);
      if (response.success) {
        showNotification('success', response.message);
        setUserModal({ isOpen: false, mode: 'create', user: null });
        fetchUsers(); // Refresh the list
      }
    } catch (error) {
      showNotification('error', 'Failed to update user');
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await userAPI.deleteUser(confirmModal.userId);
      if (response.success) {
        showNotification('success', response.message);
        setConfirmModal({ isOpen: false, action: null, userId: null });
        fetchUsers(); // Refresh the list
      }
    } catch (error) {
      showNotification('error', 'Failed to delete user');
    }
  };

  const handleStatusChange = async (userId, newStatus) => {
    try {
      const response = await userAPI.updateUserStatus(userId, newStatus);
      if (response.success) {
        showNotification('success', response.message);
        fetchUsers(); // Refresh the list
      }
    } catch (error) {
      showNotification('error', 'Failed to update user status');
    }
  };

  const handleRefresh = () => {
    fetchUsers();
    showNotification('info', 'Refreshing user data...');
  };

  const handleExport = () => {
    // Simulate export
    const csvContent = convertToCSV(filteredUsers);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `users_${new Date().toISOString()}.csv`;
    a.click();
    showNotification('success', 'Users exported successfully');
  };

  const convertToCSV = (data) => {
    const headers = ['Name', 'Email', 'Role', 'Status', 'Phone', 'Location', 'Join Date', 'Courses Enrolled'];
    const rows = data.map(user => [
      user.name,
      user.email,
      user.role,
      user.status,
      user.phone,
      user.location,
      user.joinDate,
      user.coursesEnrolled
    ]);
    
    return [headers, ...rows]
      .map(row => row.join(','))
      .join('\n');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleIcon = (role) => {
    switch(role) {
      case 'Admin': return <AdminPanelSettings className="w-4 h-4 text-purple-600" />;
      case 'Instructor': return <School className="w-4 h-4 text-blue-600" />;
      default: return <Person className="w-4 h-4 text-green-600" />;
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
      <UserModal
        isOpen={userModal.isOpen}
        onClose={() => setUserModal({ isOpen: false, mode: 'create', user: null })}
        onSubmit={userModal.mode === 'create' ? handleCreateUser : handleUpdateUser}
        user={userModal.user}
        mode={userModal.mode}
      />

      <UserDetailsModal
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, user: null })}
        user={detailsModal.user}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, action: null, userId: null })}
        onConfirm={handleDeleteUser}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Person className="mr-3 text-purple-600" />
            User Management
          </h1>
          <p className="text-gray-500 mt-1">Manage users, roles, and permissions</p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setUserModal({ isOpen: true, mode: 'create', user: null })}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Add className="w-5 h-5 mr-2" />
            Add User
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

      {/* Filters */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Role Filter */}
          <div className="relative">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Instructor">Instructor</option>
              <option value="Student">Student</option>
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
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
            <FilterList className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </motion.div>

      {/* Users Table */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">User</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Contact</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Role</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Join Date</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Courses</th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg mr-3">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{user.name}</p>
                          {user.verified && (
                            <span className="flex items-center text-xs text-blue-600">
                              <Verified className="w-3 h-3 mr-1" />
                              Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-xs text-gray-400">{user.phone}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {getRoleIcon(user.role)}
                        <span className="ml-2 text-sm text-gray-600">{user.role}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600">{new Date(user.joinDate).toLocaleDateString()}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600">{user.coursesEnrolled}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => setDetailsModal({ isOpen: true, user })}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Visibility className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setUserModal({ isOpen: true, mode: 'edit', user })}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Edit User"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleStatusChange(user.id, user.status === 'Active' ? 'Suspended' : 'Active')}
                          className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                          title={user.status === 'Active' ? 'Suspend User' : 'Activate User'}
                        >
                          <Block className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setConfirmModal({ isOpen: true, action: 'delete', userId: user.id })}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete User"
                        >
                          <Delete className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No users found matching your criteria</p>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Summary Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-2xl font-bold text-gray-800">{users.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Person className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Users</p>
              <p className="text-2xl font-bold text-gray-800">
                {users.filter(u => u.status === 'Active').length}
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
              <p className="text-gray-500 text-sm">Instructors</p>
              <p className="text-2xl font-bold text-gray-800">
                {users.filter(u => u.role === 'Instructor').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <School className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Admins</p>
              <p className="text-2xl font-bold text-gray-800">
                {users.filter(u => u.role === 'Admin').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <AdminPanelSettings className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

