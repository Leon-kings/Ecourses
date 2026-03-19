/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
// pages/dashboard/Analytics.jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, ComposedChart
} from 'recharts';
import { motion } from 'framer-motion';

// Material-UI Icons
import TrendingUp from '@mui/icons-material/TrendingUp';
import TrendingDown from '@mui/icons-material/TrendingDown';
import People from '@mui/icons-material/People';
import AttachMoney from '@mui/icons-material/AttachMoney';
import MenuBook from '@mui/icons-material/MenuBook';
import Schedule from '@mui/icons-material/Schedule';
import CalendarToday from '@mui/icons-material/CalendarToday';
import FilterList from '@mui/icons-material/FilterList';
import Refresh from '@mui/icons-material/Refresh';
import Download from '@mui/icons-material/Download';
import Star from '@mui/icons-material/Star';
import LocationOn from '@mui/icons-material/LocationOn';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChart from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import Psychology from '@mui/icons-material/Psychology';
import Public from '@mui/icons-material/Public';
import Assessment from '@mui/icons-material/Assessment';
import Speed from '@mui/icons-material/Speed';
import Group from '@mui/icons-material/Group';
import School from '@mui/icons-material/School';
import MonetizationOn from '@mui/icons-material/MonetizationOn';
import Devices from '@mui/icons-material/Devices';
import Tablet from '@mui/icons-material/Tablet';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import Computer from '@mui/icons-material/Computer';
import Timeline from '@mui/icons-material/Timeline';
import Insights from '@mui/icons-material/Insights';

export const UserAnalytics = () => {
  const [dateRange, setDateRange] = useState('30days');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('all');
  
  // Dummy data for all metrics
  const [userGrowthData] = useState([
    { month: 'Jan', newUsers: 450, activeUsers: 1200, returningUsers: 850 },
    { month: 'Feb', newUsers: 520, activeUsers: 1450, returningUsers: 980 },
    { month: 'Mar', newUsers: 680, activeUsers: 1680, returningUsers: 1150 },
    { month: 'Apr', newUsers: 740, activeUsers: 1890, returningUsers: 1320 },
    { month: 'May', newUsers: 890, activeUsers: 2150, returningUsers: 1540 },
    { month: 'Jun', newUsers: 1020, activeUsers: 2480, returningUsers: 1780 },
    { month: 'Jul', newUsers: 1150, activeUsers: 2820, returningUsers: 2050 },
    { month: 'Aug', newUsers: 1280, activeUsers: 3150, returningUsers: 2320 },
    { month: 'Sep', newUsers: 1420, activeUsers: 3480, returningUsers: 2610 },
    { month: 'Oct', newUsers: 1580, activeUsers: 3820, returningUsers: 2890 },
    { month: 'Nov', newUsers: 1750, activeUsers: 4210, returningUsers: 3180 },
    { month: 'Dec', newUsers: 1950, activeUsers: 4650, returningUsers: 3520 },
  ]);

  const [revenueData] = useState([
    { month: 'Jan', subscription: 45000, oneTime: 12000, total: 57000 },
    { month: 'Feb', subscription: 52000, oneTime: 15000, total: 67000 },
    { month: 'Mar', subscription: 58000, oneTime: 18000, total: 76000 },
    { month: 'Apr', subscription: 64000, oneTime: 21000, total: 85000 },
    { month: 'May', subscription: 72000, oneTime: 25000, total: 97000 },
    { month: 'Jun', subscription: 81000, oneTime: 28000, total: 109000 },
    { month: 'Jul', subscription: 89000, oneTime: 32000, total: 121000 },
    { month: 'Aug', subscription: 98000, oneTime: 35000, total: 133000 },
    { month: 'Sep', subscription: 108000, oneTime: 39000, total: 147000 },
    { month: 'Oct', subscription: 119000, oneTime: 42000, total: 161000 },
    { month: 'Nov', subscription: 131000, oneTime: 46000, total: 177000 },
    { month: 'Dec', subscription: 145000, oneTime: 51000, total: 196000 },
  ]);

  const [coursePerformanceData] = useState([
    { name: 'Web Development', enrollments: 1234, completion: 78, revenue: 37020, rating: 4.8, students: 1234, instructor: 'John Smith' },
    { name: 'Data Science', enrollments: 987, completion: 65, revenue: 49350, rating: 4.7, students: 987, instructor: 'Sarah Johnson' },
    { name: 'Mobile Development', enrollments: 856, completion: 72, revenue: 34240, rating: 4.6, students: 856, instructor: 'Mike Wilson' },
    { name: 'UI/UX Design', enrollments: 756, completion: 81, revenue: 30240, rating: 4.9, students: 756, instructor: 'Emily Brown' },
    { name: 'Digital Marketing', enrollments: 654, completion: 69, revenue: 19620, rating: 4.5, students: 654, instructor: 'David Lee' },
    { name: 'Business Analytics', enrollments: 543, completion: 74, revenue: 16290, rating: 4.4, students: 543, instructor: 'Lisa Anderson' },
    { name: 'Cloud Computing', enrollments: 432, completion: 82, revenue: 21600, rating: 4.8, students: 432, instructor: 'Robert Taylor' },
    { name: 'Cybersecurity', enrollments: 321, completion: 88, revenue: 16050, rating: 4.9, students: 321, instructor: 'Jennifer White' },
  ]);

  const [userDemographicsData] = useState([
    { name: '18-24', value: 25, color: '#8B5CF6' },
    { name: '25-34', value: 40, color: '#EC4899' },
    { name: '35-44', value: 20, color: '#3B82F6' },
    { name: '45-54', value: 10, color: '#10B981' },
    { name: '55+', value: 5, color: '#F59E0B' },
  ]);

  const [geographicData] = useState([
    { country: 'United States', users: 12500, percentage: 35, flag: '🇺🇸' },
    { country: 'United Kingdom', users: 5800, percentage: 16, flag: '🇬🇧' },
    { country: 'Canada', users: 4200, percentage: 12, flag: '🇨🇦' },
    { country: 'Australia', users: 3500, percentage: 10, flag: '🇦🇺' },
    { country: 'India', users: 3200, percentage: 9, flag: '🇮🇳' },
    { country: 'Germany', users: 2800, percentage: 8, flag: '🇩🇪' },
    { country: 'France', users: 2100, percentage: 6, flag: '🇫🇷' },
    { country: 'Others', users: 1400, percentage: 4, flag: '🌍' },
  ]);

  const [engagementMetrics] = useState([
    { time: '00:00', pageViews: 450, sessionDuration: 120, bounceRate: 45 },
    { time: '03:00', pageViews: 320, sessionDuration: 95, bounceRate: 52 },
    { time: '06:00', pageViews: 680, sessionDuration: 180, bounceRate: 38 },
    { time: '09:00', pageViews: 1250, sessionDuration: 320, bounceRate: 28 },
    { time: '12:00', pageViews: 2100, sessionDuration: 450, bounceRate: 22 },
    { time: '15:00', pageViews: 1850, sessionDuration: 380, bounceRate: 25 },
    { time: '18:00', pageViews: 2300, sessionDuration: 520, bounceRate: 20 },
    { time: '21:00', pageViews: 1680, sessionDuration: 290, bounceRate: 32 },
  ]);

  const [retentionData] = useState([
    { week: 'Week 1', retention: 100, users: 5000 },
    { week: 'Week 2', retention: 82, users: 4100 },
    { week: 'Week 3', retention: 71, users: 3550 },
    { week: 'Week 4', retention: 65, users: 3250 },
    { week: 'Week 5', retention: 58, users: 2900 },
    { week: 'Week 6', retention: 52, users: 2600 },
    { week: 'Week 7', retention: 48, users: 2400 },
    { week: 'Week 8', retention: 45, users: 2250 },
  ]);

  const [deviceData] = useState([
    { name: 'Desktop', value: 45, icon: <Computer /> },
    { name: 'Mobile', value: 35, icon: <PhoneAndroid /> },
    { name: 'Tablet', value: 15, icon: <Tablet /> },
    { name: 'Other', value: 5, icon: <Devices /> },
  ]);

  const [kpiMetrics] = useState([
    {
      title: 'Total Users',
      value: '45,678',
      change: '+12.3%',
      trend: 'up',
      icon: 'people',
      color: 'blue',
      description: 'vs last month',
      secondaryValue: '2,345 new'
    },
    {
      title: 'Revenue',
      value: '$196.5K',
      change: '+18.2%',
      trend: 'up',
      icon: 'monetization',
      color: 'green',
      description: 'vs last month',
      secondaryValue: '$32.4K profit'
    },
    {
      title: 'Course Completion',
      value: '76.5%',
      change: '+5.4%',
      trend: 'up',
      icon: 'school',
      color: 'purple',
      description: 'average rate',
      secondaryValue: '2,847 certificates'
    },
    {
      title: 'Avg. Session',
      value: '18.5m',
      change: '-2.1%',
      trend: 'down',
      icon: 'schedule',
      color: 'orange',
      description: 'vs last month',
      secondaryValue: '4.2 pages/session'
    },
  ]);

  const [recentActivities] = useState([
    { id: 1, user: 'John Doe', action: 'completed', course: 'React Masterclass', time: '5 min ago', avatar: '👨‍💻', type: 'completion' },
    { id: 2, user: 'Jane Smith', action: 'enrolled in', course: 'Python for Data Science', time: '12 min ago', avatar: '👩‍💻', type: 'enrollment' },
    { id: 3, user: 'Mike Johnson', action: 'submitted assignment for', course: 'UI/UX Design', time: '25 min ago', avatar: '👨‍🎨', type: 'submission' },
    { id: 4, user: 'Sarah Wilson', action: 'started', course: 'Machine Learning', time: '1 hour ago', avatar: '👩‍🔬', type: 'start' },
    { id: 5, user: 'Tom Brown', action: 'earned certificate in', course: 'JavaScript Advanced', time: '2 hours ago', avatar: '👨‍🏫', type: 'certificate' },
    { id: 6, user: 'Emily Davis', action: 'reviewed', course: 'Digital Marketing', time: '3 hours ago', avatar: '👩‍🎓', type: 'review' },
  ]);

  const [trafficSources] = useState([
    { source: 'Organic Search', value: 35, color: '#8B5CF6' },
    { source: 'Direct', value: 25, color: '#EC4899' },
    { source: 'Social Media', value: 20, color: '#3B82F6' },
    { source: 'Referrals', value: 12, color: '#10B981' },
    { source: 'Email', value: 8, color: '#F59E0B' },
  ]);

  const COLORS = ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  // Simulate loading
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [dateRange]);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleExport = () => {
    alert('Analytics data exported successfully!');
  };

  // Get icon component based on icon name
  const getIcon = (iconName, className = "text-2xl") => {
    switch(iconName) {
      case 'people': return <People className={className} />;
      case 'monetization': return <MonetizationOn className={className} />;
      case 'school': return <School className={className} />;
      case 'schedule': return <Schedule className={className} />;
      default: return <Assessment className={className} />;
    }
  };

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

  if (isLoading) {
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
      {/* Header with Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Insights className="mr-3 text-purple-600" />
            Advanced Analytics
          </h1>
          <p className="text-gray-500 mt-1">Deep insights into your platform performance</p>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Date Range Selector */}
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="year">This Year</option>
              <option value="custom">Custom Range</option>
            </select>
            <CalendarToday className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Metric Filter */}
          <div className="relative">
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Metrics</option>
              <option value="users">Users Only</option>
              <option value="revenue">Revenue Only</option>
              <option value="engagement">Engagement Only</option>
            </select>
            <FilterList className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Action Buttons */}
          <button
            onClick={handleRefresh}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            disabled={isLoading}
          >
            <Refresh className={`w-5 h-5 text-gray-600 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          
          <button
            onClick={handleExport}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Download className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric, index) => {
          const colorClasses = {
            blue: 'bg-blue-100 text-blue-600',
            green: 'bg-green-100 text-green-600',
            purple: 'bg-purple-100 text-purple-600',
            orange: 'bg-orange-100 text-orange-600',
          };

          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${colorClasses[metric.color]}`}>
                  {getIcon(metric.icon)}
                </div>
                <span className={`flex items-center text-sm ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                  {metric.change}
                </span>
              </div>
              <h3 className="text-gray-500 text-sm mb-1">{metric.title}</h3>
              <p className="text-3xl font-bold text-gray-800">{metric.value}</p>
              <p className="text-xs text-gray-400 mt-1">{metric.secondaryValue}</p>
              <p className="text-xs text-gray-400 mt-1">{metric.description}</p>
            </div>
          );
        })}
      </motion.div>

      {/* User Growth Chart */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <Timeline className="mr-2 text-purple-600" />
              User Growth Analysis
            </h3>
            <p className="text-sm text-gray-500">Track user acquisition and retention over time</p>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">New Users</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Active Users</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Returning Users</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: 'none'
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="newUsers" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="activeUsers" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="returningUsers" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Revenue Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <BarChartIcon className="mr-2 text-purple-600" />
                Revenue Breakdown
              </h3>
              <p className="text-sm text-gray-500">Subscription vs One-time payments</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="subscription" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="oneTime" fill="#EC4899" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="total" stroke="#10B981" strokeWidth={3} />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <AttachMoney className="mr-2 text-green-600" />
            Revenue Metrics
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <p className="text-sm text-gray-600">Average Revenue Per User</p>
              <p className="text-2xl font-bold text-gray-800">$156.50</p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                12.3% vs last month
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
              <p className="text-sm text-gray-600">Customer Lifetime Value</p>
              <p className="text-2xl font-bold text-gray-800">$890.00</p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                8.7% vs last month
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
              <p className="text-sm text-gray-600">Churn Rate</p>
              <p className="text-2xl font-bold text-gray-800">2.4%</p>
              <p className="text-xs text-red-600 mt-1 flex items-center">
                <TrendingDown className="w-3 h-3 mr-1" />
                0.3% vs last month
              </p>
            </div>
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
              <p className="text-sm text-gray-600">Monthly Recurring Revenue</p>
              <p className="text-2xl font-bold text-gray-800">$145.2K</p>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                15.8% vs last month
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Traffic Sources & Device Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <PieChartIcon className="mr-2 text-purple-600" />
            Traffic Sources
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={trafficSources}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {trafficSources.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {trafficSources.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></span>
                    <span className="text-sm text-gray-600">{item.source}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Devices className="mr-2 text-purple-600" />
            Device Distribution
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {deviceData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-2">
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-800">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Course Performance */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <MenuBook className="mr-2 text-purple-600" />
          Top Performing Courses
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 text-sm font-medium text-gray-500">Course Name</th>
                <th className="text-left py-3 text-sm font-medium text-gray-500">Instructor</th>
                <th className="text-right py-3 text-sm font-medium text-gray-500">Students</th>
                <th className="text-right py-3 text-sm font-medium text-gray-500">Completion</th>
                <th className="text-right py-3 text-sm font-medium text-gray-500">Revenue</th>
                <th className="text-right py-3 text-sm font-medium text-gray-500">Rating</th>
              </tr>
            </thead>
            <tbody>
              {coursePerformanceData.map((course, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 text-sm font-medium text-gray-800">{course.name}</td>
                  <td className="py-3 text-sm text-gray-600">{course.instructor}</td>
                  <td className="py-3 text-sm text-right text-gray-600">{course.students}</td>
                  <td className="py-3 text-sm text-right">
                    <div className="flex items-center justify-end">
                      <span className="mr-2">{course.completion}%</span>
                      <div className="w-16 bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-green-500 h-1.5 rounded-full"
                          style={{ width: `${course.completion}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-right text-gray-600">${course.revenue.toLocaleString()}</td>
                  <td className="py-3 text-sm text-right">
                    <span className="flex items-center justify-end">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {course.rating}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* User Demographics & Geographic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Group className="mr-2 text-purple-600" />
            User Demographics
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={userDemographicsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {userDemographicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {userDemographicsData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-medium text-gray-800">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Public className="mr-2 text-purple-600" />
            Geographic Distribution
          </h3>
          <div className="space-y-3">
            {geographicData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">
                    <span className="mr-2">{item.flag}</span>
                    {item.country}
                  </span>
                  <span className="font-medium text-gray-800">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-1 block">{item.users.toLocaleString()} users</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Engagement Metrics & Retention */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Speed className="mr-2 text-purple-600" />
            Hourly Engagement
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={engagementMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" stroke="#888" />
              <YAxis yAxisId="left" stroke="#888" />
              <YAxis yAxisId="right" orientation="right" stroke="#888" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="pageViews" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="sessionDuration" stroke="#EC4899" strokeWidth={3} />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Assessment className="mr-2 text-purple-600" />
            User Retention
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={retentionData}>
              <defs>
                <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" stroke="#888" />
              <YAxis stroke="#888" domain={[0, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="retention" stroke="#8B5CF6" fill="url(#retentionGradient)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="p-3 bg-purple-50 rounded-lg text-center">
              <p className="text-xs text-gray-500">Week 4</p>
              <p className="text-lg font-bold text-purple-600">65%</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg text-center">
              <p className="text-xs text-gray-500">Week 6</p>
              <p className="text-lg font-bold text-purple-600">52%</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg text-center">
              <p className="text-xs text-gray-500">Week 8</p>
              <p className="text-lg font-bold text-purple-600">45%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Timeline className="mr-2 text-purple-600" />
          Recent Activity
        </h3>
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
        <button className="mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
          View All Activity
          <TrendingUp className="w-4 h-4 ml-1" />
        </button>
      </motion.div>

      {/* AI-Powered Insights */}
      <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Psychology className="mr-2" />
          AI-Powered Insights
        </h3>
        <p className="text-purple-100 mb-4">Based on your current data, here are our predictions:</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-lg">
            <p className="text-purple-200 text-sm">Projected Users</p>
            <p className="text-2xl font-bold">5,847</p>
            <p className="text-xs text-purple-200 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              15.3% growth
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-lg">
            <p className="text-purple-200 text-sm">Expected Revenue</p>
            <p className="text-2xl font-bold">$245K</p>
            <p className="text-xs text-purple-200 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              22.8% increase
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-lg">
            <p className="text-purple-200 text-sm">Recommended Focus</p>
            <p className="text-lg font-bold">Mobile Development</p>
            <p className="text-xs text-purple-200">Highest growth potential</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-lg">
            <p className="text-purple-200 text-sm">Peak Hours</p>
            <p className="text-lg font-bold">6 PM - 9 PM</p>
            <p className="text-xs text-purple-200">Maximum engagement</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

