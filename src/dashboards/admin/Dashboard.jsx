/* eslint-disable no-unused-vars */
// pages/dashboard/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, RadialBarChart, RadialBar
} from 'recharts';
import { motion } from 'framer-motion';

export const Dashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('week');
  const [stats, setStats] = useState({
    users: 12458,
    courses: 156,
    revenue: 89250,
    engagement: 78.5
  });

  // Sample data for charts
  const weeklyData = [
    { name: 'Mon', users: 400, courses: 24, revenue: 2400 },
    { name: 'Tue', users: 300, courses: 18, revenue: 1890 },
    { name: 'Wed', users: 550, courses: 32, revenue: 3200 },
    { name: 'Thu', users: 480, courses: 28, revenue: 2780 },
    { name: 'Fri', users: 600, courses: 35, revenue: 3900 },
    { name: 'Sat', users: 750, courses: 42, revenue: 5200 },
    { name: 'Sun', users: 820, courses: 48, revenue: 6100 },
  ];

  const monthlyData = [
    { name: 'Jan', users: 1200, courses: 85, revenue: 12500 },
    { name: 'Feb', users: 1900, courses: 92, revenue: 18200 },
    { name: 'Mar', users: 2300, courses: 105, revenue: 24300 },
    { name: 'Apr', users: 2800, courses: 118, revenue: 29100 },
    { name: 'May', users: 3200, courses: 132, revenue: 35400 },
    { name: 'Jun', users: 4100, courses: 145, revenue: 42800 },
  ];

  const courseCategories = [
    { name: 'Web Development', value: 45 },
    { name: 'Data Science', value: 28 },
    { name: 'Mobile Apps', value: 32 },
    { name: 'Design', value: 25 },
    { name: 'Marketing', value: 18 },
  ];

  const userEngagement = [
    { name: 'Active Daily', value: 65 },
    { name: 'Active Weekly', value: 25 },
    { name: 'Active Monthly', value: 10 },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Completed Course', course: 'React Advanced', time: '5 min ago', avatar: '👨‍💻' },
    { id: 2, user: 'Jane Smith', action: 'Enrolled in', course: 'Python Basics', time: '12 min ago', avatar: '👩‍💻' },
    { id: 3, user: 'Mike Johnson', action: 'Submitted Assignment', course: 'UI/UX Design', time: '25 min ago', avatar: '👨‍🎨' },
    { id: 4, user: 'Sarah Wilson', action: 'Started Course', course: 'Data Science', time: '1 hour ago', avatar: '👩‍🔬' },
    { id: 5, user: 'Tom Brown', action: 'Earned Certificate', course: 'JavaScript', time: '2 hours ago', avatar: '👨‍🏫' },
  ];

  const topCourses = [
    { name: 'React Masterclass', students: 1234, revenue: 37020, rating: 4.8 },
    { name: 'Python for Beginners', students: 987, revenue: 29610, rating: 4.7 },
    { name: 'UI/UX Design Fundamentals', students: 756, revenue: 22680, rating: 4.9 },
    { name: 'Data Science Bootcamp', students: 654, revenue: 32700, rating: 4.6 },
    { name: 'JavaScript Complete Guide', students: 543, revenue: 16290, rating: 4.8 },
  ];

  const COLORS = ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B'];

  // Animation variants
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
      className="space-y-6"
    >
      {/* Header with Time Range Selector */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your platform.</p>
        </div>
        <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-sm">
          {['day', 'week', 'month', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setSelectedTimeRange(range)}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all ${
                selectedTimeRange === range
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stats.users.toLocaleString()}</p>
              <p className="text-green-600 text-sm mt-2 flex items-center">
                <span>↑ 12.5%</span>
                <span className="text-gray-400 ml-2">vs last month</span>
              </p>
            </div>
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">👥</span>
            </div>
          </div>
        </div>

        {/* Total Courses Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Active Courses</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stats.courses}</p>
              <p className="text-green-600 text-sm mt-2 flex items-center">
                <span>↑ 8.2%</span>
                <span className="text-gray-400 ml-2">vs last month</span>
              </p>
            </div>
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">${stats.revenue.toLocaleString()}</p>
              <p className="text-green-600 text-sm mt-2 flex items-center">
                <span>↑ 23.1%</span>
                <span className="text-gray-400 ml-2">vs last month</span>
              </p>
            </div>
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">💰</span>
            </div>
          </div>
        </div>

        {/* Engagement Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Engagement Rate</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stats.engagement}%</p>
              <p className="text-green-600 text-sm mt-2 flex items-center">
                <span>↑ 5.3%</span>
                <span className="text-gray-400 ml-2">vs last month</span>
              </p>
            </div>
            <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">📊</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend Chart */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Revenue Trend</h3>
            <select className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={selectedTimeRange === 'week' ? weeklyData : monthlyData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#8B5CF6" 
                fill="url(#revenueGradient)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* User Activity Chart */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">User Activity</h3>
            <div className="flex space-x-2">
              <span className="flex items-center text-sm text-gray-600">
                <span className="w-3 h-3 bg-purple-600 rounded-full mr-1"></span> Users
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <span className="w-3 h-3 bg-pink-500 rounded-full mr-1"></span> Courses
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={selectedTimeRange === 'week' ? weeklyData : monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="courses" fill="#EC4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Second Row of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Categories Pie Chart */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Course Categories</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={courseCategories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {courseCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* User Engagement Radial Chart */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">User Engagement</h3>
          <ResponsiveContainer width="100%" height={250}>
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="20%" 
              outerRadius="80%" 
              data={userEngagement}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar
                background
                dataKey="value"
                cornerRadius={30}
                fill="#8B5CF6"
                label={{ position: 'insideStart', fill: '#fff' }}
              />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Completion Rate</span>
              <span className="font-semibold text-green-600">87%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
            
            <div className="flex items-center justify-between mt-3">
              <span className="text-gray-600">Satisfaction Score</span>
              <span className="font-semibold text-blue-600">4.8/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '96%' }}></div>
            </div>
            
            <div className="flex items-center justify-between mt-3">
              <span className="text-gray-600">Active Students</span>
              <span className="font-semibold text-purple-600">3,245</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity and Top Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                    {activity.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{activity.user}</p>
                    <p className="text-sm text-gray-500">
                      {activity.action} <span className="font-medium text-purple-600">{activity.course}</span>
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium">
            View All Activity →
          </button>
        </motion.div>

        {/* Top Courses */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Performing Courses</h3>
          <div className="space-y-4">
            {topCourses.map((course, index) => (
              <div key={index} className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-gray-800">{course.name}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500 flex items-center">
                        <span className="mr-1">👥</span> {course.students} students
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <span className="mr-1">⭐</span> {course.rating}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold text-green-600">${course.revenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full" 
                    style={{ width: `${(course.students / 1500) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
