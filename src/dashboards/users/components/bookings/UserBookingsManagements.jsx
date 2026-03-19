/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
// pages/dashboard/BookingManagement.jsx
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
import Event from '@mui/icons-material/Event';
import Person from '@mui/icons-material/Person';
import CalendarToday from '@mui/icons-material/CalendarToday';
import AccessTime from '@mui/icons-material/AccessTime';
import LocationOn from '@mui/icons-material/LocationOn';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Payment from '@mui/icons-material/Payment';
import CreditCard from '@mui/icons-material/CreditCard';
import Receipt from '@mui/icons-material/Receipt';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import Notes from '@mui/icons-material/Notes';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';
import Cancel from '@mui/icons-material/Cancel';
import Pending from '@mui/icons-material/Pending';
import Schedule from '@mui/icons-material/Schedule';
import Today from '@mui/icons-material/Today';
import DateRange from '@mui/icons-material/DateRange';
import TrendingUp from '@mui/icons-material/TrendingUp';
import TrendingDown from '@mui/icons-material/TrendingDown';

// API Service (simulated)
const bookingAPI = {
  // Simulate API calls with dummy data
  getBookings: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      data: [
        {
          id: 1,
          bookingId: 'BKG001',
          customerName: 'John Smith',
          customerEmail: 'john.smith@email.com',
          customerPhone: '+1 (555) 123-4567',
          serviceType: 'Web Development Course',
          serviceId: 101,
          bookingDate: '2024-03-20',
          bookingTime: '10:00 AM',
          duration: '2 hours',
          participants: 1,
          totalAmount: 89.99,
          paymentStatus: 'Paid',
          paymentMethod: 'Credit Card',
          bookingStatus: 'Confirmed',
          location: 'Online',
          notes: 'Beginner level, wants to learn React',
          createdAt: '2024-03-15T09:30:00Z',
          updatedAt: '2024-03-15T09:30:00Z'
        },
        {
          id: 2,
          bookingId: 'BKG002',
          customerName: 'Sarah Johnson',
          customerEmail: 'sarah.j@email.com',
          customerPhone: '+1 (555) 234-5678',
          serviceType: 'Data Science Consultation',
          serviceId: 102,
          bookingDate: '2024-03-21',
          bookingTime: '2:00 PM',
          duration: '1 hour',
          participants: 1,
          totalAmount: 129.99,
          paymentStatus: 'Pending',
          paymentMethod: 'PayPal',
          bookingStatus: 'Pending',
          location: 'Video Call',
          notes: 'Needs help with machine learning project',
          createdAt: '2024-03-15T10:45:00Z',
          updatedAt: '2024-03-15T10:45:00Z'
        },
        {
          id: 3,
          bookingId: 'BKG003',
          customerName: 'Michael Chen',
          customerEmail: 'michael.c@email.com',
          customerPhone: '+1 (555) 345-6789',
          serviceType: 'UI/UX Design Workshop',
          serviceId: 103,
          bookingDate: '2024-03-22',
          bookingTime: '11:30 AM',
          duration: '3 hours',
          participants: 5,
          totalAmount: 399.95,
          paymentStatus: 'Paid',
          paymentMethod: 'Bank Transfer',
          bookingStatus: 'Confirmed',
          location: 'In Person',
          notes: 'Team of 5 from design department',
          createdAt: '2024-03-14T14:20:00Z',
          updatedAt: '2024-03-14T14:20:00Z'
        },
        {
          id: 4,
          bookingId: 'BKG004',
          customerName: 'Emily Davis',
          customerEmail: 'emily.d@email.com',
          customerPhone: '+1 (555) 456-7890',
          serviceType: 'Python Programming Session',
          serviceId: 104,
          bookingDate: '2024-03-23',
          bookingTime: '3:30 PM',
          duration: '1.5 hours',
          participants: 1,
          totalAmount: 79.99,
          paymentStatus: 'Paid',
          paymentMethod: 'Credit Card',
          bookingStatus: 'Completed',
          location: 'Online',
          notes: 'Completed the session successfully',
          createdAt: '2024-03-13T11:15:00Z',
          updatedAt: '2024-03-23T17:00:00Z'
        },
        {
          id: 5,
          bookingId: 'BKG005',
          customerName: 'David Wilson',
          customerEmail: 'david.w@email.com',
          customerPhone: '+1 (555) 567-8901',
          serviceType: 'Digital Marketing Strategy',
          serviceId: 105,
          bookingDate: '2024-03-24',
          bookingTime: '9:00 AM',
          duration: '2 hours',
          participants: 2,
          totalAmount: 159.98,
          paymentStatus: 'Pending',
          paymentMethod: 'PayPal',
          bookingStatus: 'Pending',
          location: 'Video Call',
          notes: 'Two partners from startup',
          createdAt: '2024-03-15T13:30:00Z',
          updatedAt: '2024-03-15T13:30:00Z'
        },
        {
          id: 6,
          bookingId: 'BKG006',
          customerName: 'Lisa Anderson',
          customerEmail: 'lisa.a@email.com',
          customerPhone: '+1 (555) 678-9012',
          serviceType: 'Mobile App Consultation',
          serviceId: 106,
          bookingDate: '2024-03-19',
          bookingTime: '4:00 PM',
          duration: '1 hour',
          participants: 1,
          totalAmount: 99.99,
          paymentStatus: 'Paid',
          paymentMethod: 'Credit Card',
          bookingStatus: 'Cancelled',
          location: 'Online',
          notes: 'Cancelled due to emergency',
          createdAt: '2024-03-12T15:45:00Z',
          updatedAt: '2024-03-18T10:00:00Z'
        },
        {
          id: 7,
          bookingId: 'BKG007',
          customerName: 'Robert Taylor',
          customerEmail: 'robert.t@email.com',
          customerPhone: '+1 (555) 789-0123',
          serviceType: 'Cloud Computing Workshop',
          serviceId: 107,
          bookingDate: '2024-03-25',
          bookingTime: '1:00 PM',
          duration: '4 hours',
          participants: 8,
          totalAmount: 799.92,
          paymentStatus: 'Pending',
          paymentMethod: 'Bank Transfer',
          bookingStatus: 'Pending',
          location: 'In Person',
          notes: 'Corporate training for 8 employees',
          createdAt: '2024-03-15T08:20:00Z',
          updatedAt: '2024-03-15T08:20:00Z'
        },
        {
          id: 8,
          bookingId: 'BKG008',
          customerName: 'Jennifer White',
          customerEmail: 'jennifer.w@email.com',
          customerPhone: '+1 (555) 890-1234',
          serviceType: 'Cybersecurity Consultation',
          serviceId: 108,
          bookingDate: '2024-03-26',
          bookingTime: '11:00 AM',
          duration: '2 hours',
          participants: 1,
          totalAmount: 189.99,
          paymentStatus: 'Paid',
          paymentMethod: 'Credit Card',
          bookingStatus: 'Confirmed',
          location: 'Video Call',
          notes: 'Security audit for company',
          createdAt: '2024-03-14T16:30:00Z',
          updatedAt: '2024-03-14T16:30:00Z'
        },
        {
          id: 9,
          bookingId: 'BKG009',
          customerName: 'Thomas Brown',
          customerEmail: 'thomas.b@email.com',
          customerPhone: '+1 (555) 901-2345',
          serviceType: 'React Native Workshop',
          serviceId: 109,
          bookingDate: '2024-03-27',
          bookingTime: '10:30 AM',
          duration: '3 hours',
          participants: 3,
          totalAmount: 269.97,
          paymentStatus: 'Pending',
          paymentMethod: 'PayPal',
          bookingStatus: 'Pending',
          location: 'Online',
          notes: 'Team of 3 developers',
          createdAt: '2024-03-15T11:10:00Z',
          updatedAt: '2024-03-15T11:10:00Z'
        },
        {
          id: 10,
          bookingId: 'BKG010',
          customerName: 'Patricia Moore',
          customerEmail: 'patricia.m@email.com',
          customerPhone: '+1 (555) 012-3456',
          serviceType: 'Business Analytics Session',
          serviceId: 110,
          bookingDate: '2024-03-18',
          bookingTime: '2:30 PM',
          duration: '2 hours',
          participants: 1,
          totalAmount: 149.99,
          paymentStatus: 'Paid',
          paymentMethod: 'Credit Card',
          bookingStatus: 'Completed',
          location: 'Video Call',
          notes: 'Completed with positive feedback',
          createdAt: '2024-03-10T09:45:00Z',
          updatedAt: '2024-03-18T16:30:00Z'
        }
      ]
    };
  },
  
  createBooking: async (bookingData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Booking created successfully',
      data: { id: Math.floor(Math.random() * 1000), bookingId: `BKG${Math.floor(Math.random() * 1000)}`, ...bookingData }
    };
  },
  
  updateBooking: async (id, bookingData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Booking updated successfully',
      data: { id, ...bookingData }
    };
  },
  
  deleteBooking: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Booking deleted successfully'
    };
  },
  
  updateBookingStatus: async (id, status) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      message: `Booking status updated to ${status} successfully`
    };
  },
  
  updatePaymentStatus: async (id, status) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      message: `Payment status updated to ${status} successfully`
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

// Booking Modal (Create/Edit)
const BookingModal = ({ isOpen, onClose, onSubmit, booking, mode }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceType: 'Web Development Course',
    bookingDate: '',
    bookingTime: '',
    duration: '',
    participants: 1,
    totalAmount: '',
    paymentStatus: 'Pending',
    paymentMethod: 'Credit Card',
    bookingStatus: 'Pending',
    location: 'Online',
    notes: ''
  });

  const serviceTypes = [
    'Web Development Course',
    'Data Science Consultation',
    'UI/UX Design Workshop',
    'Python Programming Session',
    'Digital Marketing Strategy',
    'Mobile App Consultation',
    'Cloud Computing Workshop',
    'Cybersecurity Consultation',
    'React Native Workshop',
    'Business Analytics Session'
  ];

  const paymentMethods = [
    'Credit Card',
    'PayPal',
    'Bank Transfer',
    'Cash',
    'Debit Card'
  ];

  const locations = [
    'Online',
    'Video Call',
    'In Person',
    'Phone Call'
  ];

  useEffect(() => {
    if (booking && mode === 'edit') {
      setFormData({
        customerName: booking.customerName || '',
        customerEmail: booking.customerEmail || '',
        customerPhone: booking.customerPhone || '',
        serviceType: booking.serviceType || 'Web Development Course',
        bookingDate: booking.bookingDate || '',
        bookingTime: booking.bookingTime || '',
        duration: booking.duration || '',
        participants: booking.participants || 1,
        totalAmount: booking.totalAmount || '',
        paymentStatus: booking.paymentStatus || 'Pending',
        paymentMethod: booking.paymentMethod || 'Credit Card',
        bookingStatus: booking.bookingStatus || 'Pending',
        location: booking.location || 'Online',
        notes: booking.notes || ''
      });
    } else {
      // Set default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const defaultDate = tomorrow.toISOString().split('T')[0];
      
      setFormData({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        serviceType: 'Web Development Course',
        bookingDate: defaultDate,
        bookingTime: '10:00 AM',
        duration: '1 hour',
        participants: 1,
        totalAmount: '',
        paymentStatus: 'Pending',
        paymentMethod: 'Credit Card',
        bookingStatus: 'Pending',
        location: 'Online',
        notes: ''
      });
    }
  }, [booking, mode, isOpen]);

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
            {mode === 'create' ? 'Create New Booking' : 'Edit Booking'}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Information */}
          <div className="border-b pb-4">
            <h4 className="font-medium text-gray-700 mb-3 flex items-center">
              <Person className="w-5 h-5 mr-2 text-purple-600" />
              Customer Information
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Customer name"
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.customerEmail}
                  onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="customer@email.com"
                />
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.customerPhone}
                  onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="border-b pb-4">
            <h4 className="font-medium text-gray-700 mb-3 flex items-center">
              <Event className="w-5 h-5 mr-2 text-purple-600" />
              Service Details
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {serviceTypes.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="border-b pb-4">
            <h4 className="font-medium text-gray-700 mb-3 flex items-center">
              <CalendarToday className="w-5 h-5 mr-2 text-purple-600" />
              Schedule
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.bookingDate}
                  onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  required
                  value={formData.bookingTime}
                  onChange={(e) => setFormData({ ...formData, bookingTime: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  placeholder="e.g., 2 hours"
                />
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="border-b pb-4">
            <h4 className="font-medium text-gray-700 mb-3 flex items-center">
              <AttachMoney className="w-5 h-5 mr-2 text-purple-600" />
              Payment Details
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Participants
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.participants}
                  onChange={(e) => setFormData({ ...formData, participants: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Amount ($) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.totalAmount}
                  onChange={(e) => setFormData({ ...formData, totalAmount: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {paymentMethods.map(method => (
                    <option key={method} value={method}>{method}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Booking Status
              </label>
              <select
                value={formData.bookingStatus}
                onChange={(e) => setFormData({ ...formData, bookingStatus: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Status
              </label>
              <select
                value={formData.paymentStatus}
                onChange={(e) => setFormData({ ...formData, paymentStatus: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
                <option value="Refunded">Refunded</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Notes className="w-4 h-4 inline mr-1" />
              Additional Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Any special requirements or notes..."
            />
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
              {mode === 'create' ? 'Create Booking' : 'Update Booking'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Booking Details Modal
const BookingDetailsModal = ({ isOpen, onClose, booking }) => {
  if (!isOpen || !booking) return null;

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Confirmed': return <CheckCircleOutline className="text-green-600" />;
      case 'Pending': return <Pending className="text-yellow-600" />;
      case 'Completed': return <CheckCircle className="text-blue-600" />;
      case 'Cancelled': return <Cancel className="text-red-600" />;
      default: return <Schedule className="text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Refunded': return 'bg-purple-100 text-purple-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
          <h3 className="text-xl font-bold">Booking Details</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <h2 className="text-2xl font-bold text-gray-800">Booking #{booking.bookingId}</h2>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(booking.bookingStatus)}`}>
                  {booking.bookingStatus}
                </span>
              </div>
              <p className="text-gray-500 mt-1">Created on {new Date(booking.createdAt).toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="text-3xl font-bold text-purple-600">${booking.totalAmount}</p>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-purple-50 rounded-xl p-6">
            <h4 className="font-medium text-gray-700 mb-4 flex items-center">
              <Person className="w-5 h-5 mr-2 text-purple-600" />
              Customer Information
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium text-gray-800">{booking.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{booking.customerEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-800">{booking.customerPhone}</p>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                <Event className="w-5 h-5 mr-2 text-purple-600" />
                Service Details
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Service Type</span>
                  <span className="font-medium">{booking.serviceType}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium flex items-center">
                    <LocationOn className="w-4 h-4 mr-1 text-gray-400" />
                    {booking.location}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium flex items-center">
                    <AccessTime className="w-4 h-4 mr-1 text-gray-400" />
                    {booking.duration}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Participants</span>
                  <span className="font-medium">{booking.participants}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                <CalendarToday className="w-5 h-5 mr-2 text-purple-600" />
                Schedule
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium flex items-center">
                    <Today className="w-4 h-4 mr-1 text-gray-400" />
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Time</span>
                  <span className="font-medium flex items-center">
                    <AccessTime className="w-4 h-4 mr-1 text-gray-400" />
                    {booking.bookingTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-medium text-gray-700 mb-4 flex items-center">
              <Payment className="w-5 h-5 mr-2 text-purple-600" />
              Payment Information
            </h4>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Payment Status</p>
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                  {booking.paymentStatus}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="font-medium flex items-center">
                  <CreditCard className="w-4 h-4 mr-1 text-gray-400" />
                  {booking.paymentMethod}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium text-purple-600">${booking.totalAmount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Per Person</p>
                <p className="font-medium">${(booking.totalAmount / booking.participants).toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          {booking.notes && (
            <div>
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <Notes className="w-5 h-5 mr-2 text-purple-600" />
                Additional Notes
              </h4>
              <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{booking.notes}</p>
            </div>
          )}

          {/* Timeline */}
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Timeline</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-500">Created:</span>
                <span className="ml-2 text-gray-800">{new Date(booking.createdAt).toLocaleString()}</span>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-500">Last Updated:</span>
                <span className="ml-2 text-gray-800">{new Date(booking.updatedAt).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const UserBookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');
  
  // Modal states
  const [bookingModal, setBookingModal] = useState({ isOpen: false, mode: 'create', booking: null });
  const [detailsModal, setDetailsModal] = useState({ isOpen: false, booking: null });
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, action: null, bookingId: null });
  
  // Notification state
  const [notification, setNotification] = useState(null);

  // Fetch bookings on component mount
  useEffect(() => {
    fetchBookings();
  }, []);

  // Apply filters when bookings or filter criteria change
  useEffect(() => {
    applyFilters();
  }, [bookings, searchTerm, statusFilter, paymentFilter, dateFilter]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await bookingAPI.getBookings();
      if (response.success) {
        setBookings(response.data);
      }
    } catch (error) {
      showNotification('error', 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...bookings];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(booking => 
        booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply status filter
    if (statusFilter !== 'All') {
      filtered = filtered.filter(booking => booking.bookingStatus === statusFilter);
    }
    
    // Apply payment filter
    if (paymentFilter !== 'All') {
      filtered = filtered.filter(booking => booking.paymentStatus === paymentFilter);
    }
    
    // Apply date filter
    if (dateFilter !== 'All') {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const weekLater = new Date(today);
      weekLater.setDate(weekLater.getDate() + 7);
      
      filtered = filtered.filter(booking => {
        const bookingDate = new Date(booking.bookingDate);
        
        switch(dateFilter) {
          case 'Today':
            return bookingDate.toDateString() === today.toDateString();
          case 'Tomorrow':
            return bookingDate.toDateString() === tomorrow.toDateString();
          case 'This Week':
            return bookingDate >= today && bookingDate <= weekLater;
          default:
            return true;
        }
      });
    }
    
    setFilteredBookings(filtered);
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleCreateBooking = async (bookingData) => {
    try {
      const response = await bookingAPI.createBooking(bookingData);
      if (response.success) {
        showNotification('success', response.message);
        setBookingModal({ isOpen: false, mode: 'create', booking: null });
        fetchBookings();
      }
    } catch (error) {
      showNotification('error', 'Failed to create booking');
    }
  };

  const handleUpdateBooking = async (bookingData) => {
    try {
      const response = await bookingAPI.updateBooking(bookingModal.booking.id, bookingData);
      if (response.success) {
        showNotification('success', response.message);
        setBookingModal({ isOpen: false, mode: 'create', booking: null });
        fetchBookings();
      }
    } catch (error) {
      showNotification('error', 'Failed to update booking');
    }
  };

  const handleDeleteBooking = async () => {
    try {
      const response = await bookingAPI.deleteBooking(confirmModal.bookingId);
      if (response.success) {
        showNotification('success', response.message);
        setConfirmModal({ isOpen: false, action: null, bookingId: null });
        fetchBookings();
      }
    } catch (error) {
      showNotification('error', 'Failed to delete booking');
    }
  };

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      const response = await bookingAPI.updateBookingStatus(bookingId, newStatus);
      if (response.success) {
        showNotification('success', response.message);
        fetchBookings();
      }
    } catch (error) {
      showNotification('error', 'Failed to update booking status');
    }
  };

  const handlePaymentStatusChange = async (bookingId, newStatus) => {
    try {
      const response = await bookingAPI.updatePaymentStatus(bookingId, newStatus);
      if (response.success) {
        showNotification('success', response.message);
        fetchBookings();
      }
    } catch (error) {
      showNotification('error', 'Failed to update payment status');
    }
  };

  const handleRefresh = () => {
    fetchBookings();
    showNotification('info', 'Refreshing bookings...');
  };

  const handleExport = () => {
    const csvContent = convertToCSV(filteredBookings);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookings_${new Date().toISOString()}.csv`;
    a.click();
    showNotification('success', 'Bookings exported successfully');
  };

  const convertToCSV = (data) => {
    const headers = ['Booking ID', 'Customer', 'Email', 'Phone', 'Service', 'Date', 'Time', 'Duration', 'Participants', 'Amount', 'Payment Status', 'Booking Status', 'Location'];
    const rows = data.map(booking => [
      booking.bookingId,
      booking.customerName,
      booking.customerEmail,
      booking.customerPhone,
      booking.serviceType,
      booking.bookingDate,
      booking.bookingTime,
      booking.duration,
      booking.participants,
      booking.totalAmount,
      booking.paymentStatus,
      booking.bookingStatus,
      booking.location
    ]);
    
    return [headers, ...rows]
      .map(row => row.join(','))
      .join('\n');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch(status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Refunded': return 'bg-purple-100 text-purple-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Confirmed': return <CheckCircleOutline className="w-4 h-4" />;
      case 'Pending': return <Pending className="w-4 h-4" />;
      case 'Completed': return <CheckCircle className="w-4 h-4" />;
      case 'Cancelled': return <Cancel className="w-4 h-4" />;
      default: return <Schedule className="w-4 h-4" />;
    }
  };

  // Calculate statistics
  const totalRevenue = bookings.reduce((sum, booking) => 
    booking.paymentStatus === 'Paid' ? sum + booking.totalAmount : sum, 0
  );
  
  const pendingPayments = bookings.reduce((sum, booking) => 
    booking.paymentStatus === 'Pending' ? sum + booking.totalAmount : sum, 0
  );
  
  const todayBookings = bookings.filter(booking => {
    const today = new Date().toDateString();
    return new Date(booking.bookingDate).toDateString() === today;
  }).length;

  const statuses = ['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'];
  const paymentStatuses = ['All', 'Pending', 'Paid', 'Refunded', 'Failed'];
  const dateFilters = ['All', 'Today', 'Tomorrow', 'This Week'];

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
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, mode: 'create', booking: null })}
        onSubmit={bookingModal.mode === 'create' ? handleCreateBooking : handleUpdateBooking}
        booking={bookingModal.booking}
        mode={bookingModal.mode}
      />

      <BookingDetailsModal
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, booking: null })}
        booking={detailsModal.booking}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, action: null, bookingId: null })}
        onConfirm={handleDeleteBooking}
        title="Delete Booking"
        message="Are you sure you want to delete this booking? This action cannot be undone."
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Event className="mr-3 text-purple-600" />
            Booking Management
          </h1>
          <p className="text-gray-500 mt-1">Manage customer bookings, schedules, and payments</p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setBookingModal({ isOpen: true, mode: 'create', booking: null })}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Add className="w-5 h-5 mr-2" />
            New Booking
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
              <p className="text-gray-500 text-sm">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-800">{bookings.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Event className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <AttachMoney className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Pending Payments</p>
              <p className="text-2xl font-bold text-gray-800">${pendingPayments.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Pending className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Today's Bookings</p>
              <p className="text-2xl font-bold text-gray-800">{todayBookings}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Today className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-800">
                {Math.round((bookings.filter(b => b.bookingStatus === 'Completed').length / bookings.length) * 100)}%
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
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
              placeholder="Search by customer, email, booking ID, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
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

          {/* Payment Filter */}
          <div className="relative">
            <select
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {paymentStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <FilterList className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Date Filter */}
          <div className="relative">
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {dateFilters.map(filter => (
                <option key={filter} value={filter}>{filter}</option>
              ))}
            </select>
            <DateRange className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </motion.div>

      {/* Bookings Table */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Booking ID</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Customer</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Service</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Schedule</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Amount</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Payment</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <span className="font-medium text-purple-600">{booking.bookingId}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-800">{booking.customerName}</p>
                        <p className="text-xs text-gray-400">{booking.customerEmail}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600">{booking.serviceType}</p>
                      <p className="text-xs text-gray-400">{booking.location}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600">{new Date(booking.bookingDate).toLocaleDateString()}</p>
                      <p className="text-xs text-gray-400">{booking.bookingTime} ({booking.duration})</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-gray-800">${booking.totalAmount}</p>
                      <p className="text-xs text-gray-400">{booking.participants} participant{booking.participants > 1 ? 's' : ''}</p>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                        {booking.paymentStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center w-fit ${getStatusColor(booking.bookingStatus)}`}>
                        {getStatusIcon(booking.bookingStatus)}
                        <span className="ml-1">{booking.bookingStatus}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => setDetailsModal({ isOpen: true, booking })}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Visibility className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setBookingModal({ isOpen: true, mode: 'edit', booking })}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Edit Booking"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleStatusChange(booking.id, 
                            booking.bookingStatus === 'Pending' ? 'Confirmed' :
                            booking.bookingStatus === 'Confirmed' ? 'Completed' : 'Pending'
                          )}
                          className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                          title="Update Status"
                        >
                          <Schedule className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setConfirmModal({ isOpen: true, action: 'delete', bookingId: booking.id })}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Booking"
                        >
                          <Delete className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredBookings.length === 0 && (
              <div className="text-center py-12">
                <Event className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No bookings found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setStatusFilter('All');
                    setPaymentFilter('All');
                    setDateFilter('All');
                  }}
                  className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Upcoming Bookings */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Schedule className="mr-2 text-purple-600" />
            Upcoming Bookings
          </h3>
          <div className="space-y-4">
            {bookings
              .filter(b => b.bookingStatus === 'Confirmed' && new Date(b.bookingDate) >= new Date())
              .sort((a, b) => new Date(a.bookingDate) - new Date(b.bookingDate))
              .slice(0, 5)
              .map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      <Event className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">{booking.customerName}</p>
                      <p className="text-sm text-gray-500">{booking.serviceType}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-gray-500">{booking.bookingTime}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <AttachMoney className="mr-2 text-purple-600" />
            Recent Payments
          </h3>
          <div className="space-y-4">
            {bookings
              .filter(b => b.paymentStatus === 'Paid')
              .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
              .slice(0, 5)
              .map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <Payment className="w-5 h-5" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">{booking.customerName}</p>
                      <p className="text-sm text-gray-500">{booking.bookingId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">${booking.totalAmount}</p>
                    <p className="text-xs text-gray-500">{booking.paymentMethod}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

