/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

// ==================== MUI Icons (keep only what's used) ====================
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import DevicesIcon from '@mui/icons-material/Devices';
import SchoolIcon from '@mui/icons-material/School';
import GradeIcon from '@mui/icons-material/Grade';
import TimelineIcon from '@mui/icons-material/Timeline';
import LanguageIcon from '@mui/icons-material/Language';
import PaymentIcon from '@mui/icons-material/Payment';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DownloadIcon from '@mui/icons-material/Download';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GridOnIcon from '@mui/icons-material/GridOn';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

// ==================== Chart.js Core Implementation ====================

// Chart.js core classes
class ChartDataset {
  constructor(label, data, backgroundColor, borderColor) {
    this.label = label;
    this.data = data;
    this.backgroundColor = backgroundColor;
    this.borderColor = borderColor;
    this.borderWidth = 1;
  }
}

// Simple Chart component implementations
const LineChart = ({ data, options }) => {
  const { labels, datasets } = data;
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set dimensions
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Find max value for scaling
    const allValues = datasets.flatMap(d => d.data);
    const maxValue = Math.max(...allValues);
    const minValue = Math.min(...allValues);
    const valueRange = maxValue - minValue || 1;
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(55, 65, 81, 0.5)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i * chartHeight / 5);
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
    }
    ctx.stroke();
    
    // Draw axes
    ctx.strokeStyle = 'rgb(156, 163, 175)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw lines for each dataset
    datasets.forEach((dataset, datasetIndex) => {
      const points = dataset.data.map((value, index) => {
        const x = padding + (index * chartWidth / (dataset.data.length - 1));
        const y = height - padding - ((value - minValue) / valueRange * chartHeight);
        return { x, y };
      });
      
      // Draw line
      ctx.strokeStyle = dataset.borderColor || `hsl(${datasetIndex * 60}, 70%, 50%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      points.slice(1).forEach(point => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
      
      // Draw points
      points.forEach(point => {
        ctx.fillStyle = dataset.borderColor || `hsl(${datasetIndex * 60}, 70%, 50%)`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    });
    
    // Draw labels
    ctx.fillStyle = 'rgb(156, 163, 175)';
    ctx.font = '12px Arial';
    labels.forEach((label, index) => {
      const x = padding + (index * chartWidth / (labels.length - 1));
      ctx.fillText(label, x - 20, height - padding + 20);
    });
    
  }, [data]);

  return <canvas ref={canvasRef} width={600} height={300} className="w-full h-full" />;
};

const BarChart = ({ data, options }) => {
  const { labels, datasets } = data;
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Find max value for scaling
    const allValues = datasets.flatMap(d => d.data);
    const maxValue = Math.max(...allValues);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(55, 65, 81, 0.5)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    for (let i = 0; i <= 5; i++) {
      const y = padding + (i * chartHeight / 5);
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
    }
    ctx.stroke();
    
    // Draw axes
    ctx.strokeStyle = 'rgb(156, 163, 175)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw bars
    const barWidth = (chartWidth / labels.length) / datasets.length * 0.8;
    
    datasets.forEach((dataset, datasetIndex) => {
      dataset.data.forEach((value, index) => {
        const barHeight = (value / maxValue) * chartHeight;
        const x = padding + (index * chartWidth / labels.length) + (datasetIndex * barWidth);
        const y = height - padding - barHeight;
        
        ctx.fillStyle = dataset.backgroundColor || `hsla(${datasetIndex * 60}, 70%, 50%, 0.8)`;
        ctx.fillRect(x, y, barWidth - 2, barHeight);
      });
    });
    
    // Draw labels
    ctx.fillStyle = 'rgb(156, 163, 175)';
    ctx.font = '12px Arial';
    labels.forEach((label, index) => {
      const x = padding + (index * chartWidth / labels.length) + (chartWidth / labels.length / 2);
      ctx.fillText(label, x - 20, height - padding + 20);
    });
    
  }, [data]);

  return <canvas ref={canvasRef} width={600} height={300} className="w-full h-full" />;
};

const PieChart = ({ data, options }) => {
  const { labels, datasets } = data;
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    
    const dataset = datasets[0];
    const total = dataset.data.reduce((a, b) => a + b, 0);
    let startAngle = 0;
    
    dataset.data.forEach((value, index) => {
      const sliceAngle = (value / total) * (2 * Math.PI);
      const endAngle = startAngle + sliceAngle;
      
      ctx.fillStyle = dataset.backgroundColor[index] || `hsl(${index * 60}, 70%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fill();
      
      // Draw label lines
      const labelAngle = startAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (radius + 20);
      const labelY = centerY + Math.sin(labelAngle) * (radius + 20);
      
      ctx.strokeStyle = 'rgb(156, 163, 175)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX + Math.cos(labelAngle) * radius, centerY + Math.sin(labelAngle) * radius);
      ctx.lineTo(labelX, labelY);
      ctx.stroke();
      
      ctx.fillStyle = 'rgb(156, 163, 175)';
      ctx.font = '12px Arial';
      ctx.fillText(labels[index], labelX - 20, labelY - 10);
      
      startAngle = endAngle;
    });
    
  }, [data]);

  return <canvas ref={canvasRef} width={400} height={400} className="w-full h-full" />;
};

const DoughnutChart = ({ data, options }) => {
  const { labels, datasets } = data;
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = Math.min(centerX, centerY) - 40;
    const innerRadius = outerRadius * 0.6;
    
    const dataset = datasets[0];
    const total = dataset.data.reduce((a, b) => a + b, 0);
    let startAngle = 0;
    
    dataset.data.forEach((value, index) => {
      const sliceAngle = (value / total) * (2 * Math.PI);
      const endAngle = startAngle + sliceAngle;
      
      ctx.fillStyle = dataset.backgroundColor[index] || `hsl(${index * 60}, 70%, 50%)`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
      ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
      ctx.closePath();
      ctx.fill();
      
      // Draw labels
      const labelAngle = startAngle + sliceAngle / 2;
      const labelX = centerX + Math.cos(labelAngle) * (outerRadius + 20);
      const labelY = centerY + Math.sin(labelAngle) * (outerRadius + 20);
      
      ctx.fillStyle = 'rgb(156, 163, 175)';
      ctx.font = '12px Arial';
      ctx.fillText(labels[index], labelX - 20, labelY - 10);
      
      startAngle = endAngle;
    });
    
  }, [data]);

  return <canvas ref={canvasRef} width={400} height={400} className="w-full h-full" />;
};

// Chart components with proper names
const Line = LineChart;
const Bar = BarChart;
const Pie = PieChart;
const Doughnut = DoughnutChart;

// ==================== Main Component ====================

export const TeacherAnalyticsManagement = () => {
  const [dateRange, setDateRange] = useState("month");
  const [selectedMetric, setSelectedMetric] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [chartType, setChartType] = useState("bar");
  const [showExportModal, setShowExportModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showComparisonModal, setShowComparisonModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedDataPoint, setSelectedDataPoint] = useState(null);
  const [comparisonPeriod, setComparisonPeriod] = useState("previous");
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    engagement: true,
    revenue: true,
    courses: true,
    students: true,
    demographics: true
  });

  // Mock data for analytics
  const analyticsData = {
    overview: {
      totalStudents: 15420,
      newStudentsThisMonth: 845,
      activeStudents: 2345,
      completionRate: 78,
      averageRating: 4.9,
      totalRevenue: 245890,
      monthlyRevenue: 32450,
      totalCourses: 8,
      totalHours: 12450,
      averageEngagement: 82,
    },
    trends: {
      students: [
        { month: 'Jan', count: 12500 },
        { month: 'Feb', count: 13200 },
        { month: 'Mar', count: 14100 },
        { month: 'Apr', count: 14800 },
        { month: 'May', count: 15200 },
        { month: 'Jun', count: 15420 },
      ],
      revenue: [
        { month: 'Jan', amount: 185000 },
        { month: 'Feb', amount: 192000 },
        { month: 'Mar', amount: 208000 },
        { month: 'Apr', amount: 215000 },
        { month: 'May', amount: 232000 },
        { month: 'Jun', amount: 245890 },
      ],
      engagement: [
        { month: 'Jan', rate: 72 },
        { month: 'Feb', rate: 75 },
        { month: 'Mar', rate: 78 },
        { month: 'Apr', rate: 80 },
        { month: 'May', rate: 81 },
        { month: 'Jun', rate: 82 },
      ],
    },
    coursePerformance: [
      {
        id: 1,
        name: "Complete Web Development Bootcamp",
        students: 8420,
        revenue: 4200000,
        rating: 4.9,
        completionRate: 82,
        engagementRate: 88,
        averageTime: 18.5,
        lectures: 245,
        quizzes: 48,
        assignments: 12,
      },
      {
        id: 2,
        name: "Advanced React & Next.js Masterclass",
        students: 5200,
        revenue: 3114800,
        rating: 4.8,
        completionRate: 76,
        engagementRate: 85,
        averageTime: 15.2,
        lectures: 180,
        quizzes: 32,
        assignments: 8,
      },
      {
        id: 3,
        name: "Node.js Microservices Architecture",
        students: 3800,
        revenue: 2086200,
        rating: 4.9,
        completionRate: 79,
        engagementRate: 83,
        averageTime: 14.8,
        lectures: 156,
        quizzes: 28,
        assignments: 6,
      },
      {
        id: 4,
        name: "TypeScript Fundamentals",
        students: 1200,
        revenue: 478800,
        rating: 4.7,
        completionRate: 71,
        engagementRate: 76,
        averageTime: 8.5,
        lectures: 85,
        quizzes: 18,
        assignments: 4,
      },
    ],
    studentEngagement: {
      daily: [
        { hour: '00:00', activity: 120 },
        { hour: '02:00', activity: 85 },
        { hour: '04:00', activity: 65 },
        { hour: '06:00', activity: 145 },
        { hour: '08:00', activity: 345 },
        { hour: '10:00', activity: 567 },
        { hour: '12:00', activity: 678 },
        { hour: '14:00', activity: 789 },
        { hour: '16:00', activity: 876 },
        { hour: '18:00', activity: 945 },
        { hour: '20:00', activity: 834 },
        { hour: '22:00', activity: 456 },
      ],
      weekly: [
        { day: 'Monday', activity: 1234 },
        { day: 'Tuesday', activity: 1456 },
        { day: 'Wednesday', activity: 1567 },
        { day: 'Thursday', activity: 1489 },
        { day: 'Friday', activity: 1345 },
        { day: 'Saturday', activity: 2345 },
        { day: 'Sunday', activity: 1987 },
      ],
      deviceType: [
        { type: 'Desktop', percentage: 45 },
        { type: 'Mobile', percentage: 42 },
        { type: 'Tablet', percentage: 13 },
      ],
      browserType: [
        { browser: 'Chrome', percentage: 58 },
        { browser: 'Safari', percentage: 22 },
        { browser: 'Firefox', percentage: 12 },
        { browser: 'Edge', percentage: 5 },
        { browser: 'Others', percentage: 3 },
      ],
    },
    demographics: {
      ageGroups: [
        { group: '18-24', percentage: 32 },
        { group: '25-34', percentage: 45 },
        { group: '35-44', percentage: 15 },
        { group: '45-54', percentage: 6 },
        { group: '55+', percentage: 2 },
      ],
      countries: [
        { country: 'United States', students: 5230 },
        { country: 'India', students: 3210 },
        { country: 'United Kingdom', students: 1540 },
        { country: 'Canada', students: 1230 },
        { country: 'Australia', students: 980 },
        { country: 'Germany', students: 870 },
        { country: 'Brazil', students: 760 },
        { country: 'France', students: 650 },
        { country: 'Spain', students: 540 },
        { country: 'Japan', students: 410 },
      ],
      educationLevel: [
        { level: 'High School', percentage: 15 },
        { level: 'Bachelor\'s', percentage: 48 },
        { level: 'Master\'s', percentage: 28 },
        { level: 'PhD', percentage: 6 },
        { level: 'Other', percentage: 3 },
      ],
      employmentStatus: [
        { status: 'Employed Full-time', percentage: 62 },
        { status: 'Employed Part-time', percentage: 18 },
        { status: 'Student', percentage: 12 },
        { status: 'Unemployed', percentage: 5 },
        { status: 'Other', percentage: 3 },
      ],
    },
    revenue: {
      monthly: [
        { month: 'Jan', revenue: 18500, refunds: 450, net: 18050 },
        { month: 'Feb', revenue: 21200, refunds: 380, net: 20820 },
        { month: 'Mar', revenue: 19800, refunds: 520, net: 19280 },
        { month: 'Apr', revenue: 22400, refunds: 410, net: 21990 },
        { month: 'May', revenue: 25600, refunds: 590, net: 25010 },
        { month: 'Jun', revenue: 27800, refunds: 620, net: 27180 },
        { month: 'Jul', revenue: 30100, refunds: 480, net: 29620 },
        { month: 'Aug', revenue: 32500, refunds: 530, net: 31970 },
        { month: 'Sep', revenue: 34800, refunds: 610, net: 34190 },
        { month: 'Oct', revenue: 37200, refunds: 580, net: 36620 },
        { month: 'Nov', revenue: 39500, refunds: 650, net: 38850 },
        { month: 'Dec', revenue: 42100, refunds: 720, net: 41380 },
      ],
      byCourse: [
        { course: 'Web Development Bootcamp', revenue: 4200000, students: 8420, avgPrice: 499 },
        { course: 'Advanced React', revenue: 3114800, students: 5200, avgPrice: 599 },
        { course: 'Node.js Microservices', revenue: 2086200, students: 3800, avgPrice: 549 },
        { course: 'TypeScript Fundamentals', revenue: 478800, students: 1200, avgPrice: 399 },
      ],
      paymentMethods: [
        { method: 'Credit Card', percentage: 58 },
        { method: 'PayPal', percentage: 24 },
        { method: 'Debit Card', percentage: 12 },
        { method: 'Bank Transfer', percentage: 4 },
        { method: 'Other', percentage: 2 },
      ],
    },
    ratings: {
      distribution: [
        { rating: 5, count: 845 },
        { rating: 4, count: 289 },
        { rating: 3, count: 78 },
        { rating: 2, count: 21 },
        { rating: 1, count: 10 },
      ],
      byCourse: [
        { course: 'Web Development Bootcamp', rating: 4.9, reviews: 423 },
        { course: 'Advanced React', rating: 4.8, reviews: 312 },
        { course: 'Node.js Microservices', rating: 4.9, reviews: 245 },
        { course: 'TypeScript Fundamentals', rating: 4.7, reviews: 89 },
      ],
      keywords: [
        { word: 'comprehensive', count: 156 },
        { word: 'practical', count: 142 },
        { word: 'well-explained', count: 128 },
        { word: 'beginner-friendly', count: 115 },
        { word: 'advanced', count: 98 },
        { word: 'projects', count: 87 },
        { word: 'examples', count: 76 },
      ],
    },
    retention: {
      cohortAnalysis: [
        { cohort: 'Jan 2024', week1: 100, week2: 82, week3: 74, week4: 68, week8: 54, week12: 48 },
        { cohort: 'Feb 2024', week1: 100, week2: 84, week3: 76, week4: 70, week8: 58, week12: 52 },
        { cohort: 'Mar 2024', week1: 100, week2: 85, week3: 78, week4: 72, week8: 62, week12: 56 },
        { cohort: 'Apr 2024', week1: 100, week2: 83, week3: 75, week4: 69, week8: 60, week12: 54 },
      ],
      churnRate: 5.2,
      returningStudents: 68,
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  // Helper functions
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatPercentage = (value) => {
    return value.toFixed(1) + '%';
  };

  const getTrendIcon = (current, previous) => {
    if (current > previous) return <TrendingUpIcon className="text-green-400 w-4 h-4" />;
    if (current < previous) return <TrendingDownIcon className="text-red-400 w-4 h-4" />;
    return <TrendingFlatIcon className="text-gray-400 w-4 h-4" />;
  };

  const getTrendColor = (current, previous) => {
    if (current > previous) return 'text-green-400';
    if (current < previous) return 'text-red-400';
    return 'text-gray-400';
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Chart configurations
  const studentTrendChart = {
    labels: analyticsData.trends.students.map(d => d.month),
    datasets: [
      {
        label: 'Total Students',
        data: analyticsData.trends.students.map(d => d.count),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
      },
    ],
  };

  const revenueTrendChart = {
    labels: analyticsData.trends.revenue.map(d => d.month),
    datasets: [
      {
        label: 'Revenue',
        data: analyticsData.trends.revenue.map(d => d.amount),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
      },
    ],
  };

  const coursePerformanceChart = {
    labels: analyticsData.coursePerformance.map(c => c.name.split(' ').slice(0, 3).join(' ') + '...'),
    datasets: [
      {
        label: 'Students',
        data: analyticsData.coursePerformance.map(c => c.students),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'Completion Rate (%)',
        data: analyticsData.coursePerformance.map(c => c.completionRate),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
    ],
  };

  const dailyEngagementChart = {
    labels: analyticsData.studentEngagement.daily.map(d => d.hour),
    datasets: [
      {
        label: 'Active Students',
        data: analyticsData.studentEngagement.daily.map(d => d.activity),
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
      },
    ],
  };

  const weeklyEngagementChart = {
    labels: analyticsData.studentEngagement.weekly.map(d => d.day),
    datasets: [
      {
        label: 'Activity',
        data: analyticsData.studentEngagement.weekly.map(d => d.activity),
        backgroundColor: 'rgba(139, 92, 246, 0.8)',
      },
    ],
  };

  const deviceTypeChart = {
    labels: analyticsData.studentEngagement.deviceType.map(d => d.type),
    datasets: [
      {
        data: analyticsData.studentEngagement.deviceType.map(d => d.percentage),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
      },
    ],
  };

  const ageGroupsChart = {
    labels: analyticsData.demographics.ageGroups.map(d => d.group),
    datasets: [
      {
        data: analyticsData.demographics.ageGroups.map(d => d.percentage),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)',
        ],
      },
    ],
  };

  const educationLevelChart = {
    labels: analyticsData.demographics.educationLevel.map(d => d.level),
    datasets: [
      {
        data: analyticsData.demographics.educationLevel.map(d => d.percentage),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(107, 114, 128, 0.8)',
        ],
      },
    ],
  };

  const revenueByCourseChart = {
    labels: analyticsData.revenue.byCourse.map(c => c.course.split(' ').slice(0, 3).join(' ') + '...'),
    datasets: [
      {
        label: 'Revenue (in thousands)',
        data: analyticsData.revenue.byCourse.map(c => c.revenue / 1000),
        backgroundColor: 'rgba(139, 92, 246, 0.8)',
      },
    ],
  };

  const paymentMethodsChart = {
    labels: analyticsData.revenue.paymentMethods.map(d => d.method),
    datasets: [
      {
        data: analyticsData.revenue.paymentMethods.map(d => d.percentage),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(107, 114, 128, 0.8)',
        ],
      },
    ],
  };

  const ratingDistributionChart = {
    labels: analyticsData.ratings.distribution.map(d => d.rating + ' Star'),
    datasets: [
      {
        data: analyticsData.ratings.distribution.map(d => d.count),
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
      },
    ],
  };

  const ratingByCourseChart = {
    labels: analyticsData.ratings.byCourse.map(c => c.course.split(' ').slice(0, 3).join(' ') + '...'),
    datasets: [
      {
        label: 'Rating',
        data: analyticsData.ratings.byCourse.map(c => c.rating),
        backgroundColor: 'rgba(245, 158, 11, 0.8)',
      },
    ],
  };

  const cohortAnalysisChart = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 8', 'Week 12'],
    datasets: analyticsData.retention.cohortAnalysis.map((cohort, index) => ({
      label: cohort.cohort,
      data: [cohort.week1, cohort.week2, cohort.week3, cohort.week4, cohort.week8, cohort.week12],
      borderColor: `hsl(${index * 60}, 70%, 50%)`,
      backgroundColor: `hsla(${index * 60}, 70%, 50%, 0.1)`,
    })),
  };

  const monthlyRevenueChart = {
    labels: analyticsData.revenue.monthly.map(d => d.month),
    datasets: [
      {
        label: 'Revenue',
        data: analyticsData.revenue.monthly.map(d => d.revenue),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
      },
      {
        label: 'Net Revenue',
        data: analyticsData.revenue.monthly.map(d => d.net),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
      },
    ],
  };

  // Export Modal
  const ExportModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-md mx-4 overflow-hidden shadow-2xl border border-gray-800"
    >
      <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Export Data</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Export Format</label>
          <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500">
            <option value="csv">CSV (Spreadsheet)</option>
            <option value="excel">Excel (.xlsx)</option>
            <option value="pdf">PDF Document</option>
            <option value="json">JSON Data</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Date Range</label>
          <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500">
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
            <option value="quarter">Last 90 days</option>
            <option value="year">Last 12 months</option>
            <option value="all">All time</option>
            <option value="custom">Custom range</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Data to Export</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-green-500" defaultChecked />
              <span className="text-white">Overview Statistics</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-green-500" defaultChecked />
              <span className="text-white">Course Performance</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-green-500" defaultChecked />
              <span className="text-white">Student Demographics</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-green-500" defaultChecked />
              <span className="text-white">Revenue Data</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-green-500" />
              <span className="text-white">Engagement Metrics</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-green-500" />
              <span className="text-white">Ratings & Reviews</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">File Name</label>
          <input
            type="text"
            defaultValue="analytics-export-2024-03-19"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-800">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg hover:from-green-700 hover:to-teal-700 flex items-center justify-center gap-2">
            <DownloadIcon className="w-4 h-4" /> Export
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Report Modal
  const ReportModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
    >
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Generate Custom Report</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Report Name</label>
          <input
            type="text"
            placeholder="e.g., Q1 2024 Performance Report"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Start Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">End Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Report Type</label>
          <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500">
            <option value="performance">Course Performance Report</option>
            <option value="revenue">Revenue & Financial Report</option>
            <option value="engagement">Student Engagement Report</option>
            <option value="demographics">Demographics Analysis</option>
            <option value="retention">Retention & Churn Report</option>
            <option value="custom">Custom Report</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Include Sections</label>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-purple-500" defaultChecked />
              <span className="text-white">Executive Summary</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-purple-500" defaultChecked />
              <span className="text-white">Key Metrics</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-purple-500" defaultChecked />
              <span className="text-white">Charts & Graphs</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-purple-500" defaultChecked />
              <span className="text-white">Course Breakdown</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-purple-500" defaultChecked />
              <span className="text-white">Student Insights</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-purple-500" defaultChecked />
              <span className="text-white">Recommendations</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Format</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="format" className="form-radio bg-gray-800 border-gray-700 text-purple-500" defaultChecked />
              <span className="text-white">PDF</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="format" className="form-radio bg-gray-800 border-gray-700 text-purple-500" />
              <span className="text-white">Excel</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="format" className="form-radio bg-gray-800 border-gray-700 text-purple-500" />
              <span className="text-white">CSV</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Schedule Report</label>
          <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500">
            <option value="now">Generate Now</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Email Recipients</label>
          <input
            type="text"
            placeholder="Enter email addresses (comma separated)"
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-800">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700">
            Generate Report
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Comparison Modal
  const ComparisonModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-3xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Compare Performance</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">First Period</label>
            <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
              <option value="current">Current Period</option>
              <option value="previous">Previous Period</option>
              <option value="last-year">Same Period Last Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Second Period</label>
            <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
              <option value="previous">Previous Period</option>
              <option value="last-year">Same Period Last Year</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">From Date</label>
            <input type="date" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">To Date</label>
            <input type="date" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Metrics to Compare</label>
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-blue-500" defaultChecked />
              <span className="text-white">Student Enrollment</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-blue-500" defaultChecked />
              <span className="text-white">Revenue</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-blue-500" defaultChecked />
              <span className="text-white">Completion Rate</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-blue-500" defaultChecked />
              <span className="text-white">Average Rating</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-blue-500" />
              <span className="text-white">Engagement Rate</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox bg-gray-800 border-gray-700 rounded text-blue-500" />
              <span className="text-white">Refund Rate</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Comparison View</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="view" className="form-radio bg-gray-800 border-gray-700 text-blue-500" defaultChecked />
              <span className="text-white">Side by Side</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="view" className="form-radio bg-gray-800 border-gray-700 text-blue-500" />
              <span className="text-white">Overlay</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="view" className="form-radio bg-gray-800 border-gray-700 text-blue-500" />
              <span className="text-white">Difference</span>
            </label>
          </div>
        </div>

        {/* Preview Comparison */}
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h3 className="text-lg font-bold text-white mb-4">Preview Comparison</h3>
          <div className="h-48 relative">
            <Line 
              data={{
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [
                  {
                    label: 'Current Period',
                    data: [65, 72, 78, 85],
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  },
                  {
                    label: 'Previous Period',
                    data: [58, 64, 70, 75],
                    borderColor: 'rgb(156, 163, 175)',
                    backgroundColor: 'rgba(156, 163, 175, 0.1)',
                  },
                ],
              }}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-800">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700">
            Generate Comparison
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Details Modal
  const DetailsModal = ({ data, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
    >
      <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Detailed Analysis</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Detailed data table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Metric</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Change</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-white">Total Students</td>
                <td className="py-3 px-4 text-white">15,420</td>
                <td className="py-3 px-4 text-green-400">+12.5%</td>
                <td className="py-3 px-4"><TrendingUpIcon className="text-green-400 w-5 h-5" /></td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-white">Active Students</td>
                <td className="py-3 px-4 text-white">2,345</td>
                <td className="py-3 px-4 text-green-400">+8.3%</td>
                <td className="py-3 px-4"><TrendingUpIcon className="text-green-400 w-5 h-5" /></td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-white">Completion Rate</td>
                <td className="py-3 px-4 text-white">78%</td>
                <td className="py-3 px-4 text-green-400">+3.2%</td>
                <td className="py-3 px-4"><TrendingUpIcon className="text-green-400 w-5 h-5" /></td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-white">Average Rating</td>
                <td className="py-3 px-4 text-white">4.9</td>
                <td className="py-3 px-4 text-green-400">+0.1</td>
                <td className="py-3 px-4"><TrendingUpIcon className="text-green-400 w-5 h-5" /></td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-3 px-4 text-white">Total Revenue</td>
                <td className="py-3 px-4 text-white">$245,890</td>
                <td className="py-3 px-4 text-green-400">+15.8%</td>
                <td className="py-3 px-4"><TrendingUpIcon className="text-green-400 w-5 h-5" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">
                Analytics<span className="text-blue-400">Dashboard</span>
              </h1>
              <div className="hidden md:flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <AnalyticsIcon className="text-blue-400 w-5 h-5" />
                <span className="text-sm text-gray-300">Data-driven insights</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowComparisonModal(true)}
                className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <CompareArrowsIcon className="w-4 h-4" />
                <span className="hidden md:inline">Compare</span>
              </button>
              <button 
                onClick={() => setShowReportModal(true)}
                className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <AssessmentIcon className="w-4 h-4" />
                <span className="hidden md:inline">Reports</span>
              </button>
              <button 
                onClick={() => setShowExportModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 flex items-center gap-2"
              >
                <DownloadIcon className="w-4 h-4" />
                <span className="hidden md:inline">Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Date Range Selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setDateRange('week')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                dateRange === 'week' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setDateRange('month')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                dateRange === 'month' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setDateRange('quarter')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                dateRange === 'quarter' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Quarter
            </button>
            <button
              onClick={() => setDateRange('year')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                dateRange === 'year' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Year
            </button>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">All Courses</option>
              {analyticsData.coursePerformance.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>

            <button
              onClick={() => setShowDetailsModal(true)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2"
            >
              <GridOnIcon className="w-4 h-4" />
              Detailed View
            </button>
          </div>
        </div>

        {/* Overview KPI Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <motion.div variants={itemVariants} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <PeopleIcon className="text-blue-400 w-6 h-6" />
              <span className="flex items-center gap-1 text-green-400">
                <ArrowUpwardIcon className="w-3 h-3" />
                +12.5%
              </span>
            </div>
            <div className="text-3xl font-bold text-white">{formatNumber(analyticsData.overview.totalStudents)}</div>
            <div className="text-sm text-gray-400">Total Students</div>
            <div className="mt-2 text-xs text-gray-500">
              <span className="text-green-400">+{analyticsData.overview.newStudentsThisMonth}</span> this month
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <AttachMoneyIcon className="text-green-400 w-6 h-6" />
              <span className="flex items-center gap-1 text-green-400">
                <ArrowUpwardIcon className="w-3 h-3" />
                +15.8%
              </span>
            </div>
            <div className="text-3xl font-bold text-white">{formatCurrency(analyticsData.overview.totalRevenue)}</div>
            <div className="text-sm text-gray-400">Total Revenue</div>
            <div className="mt-2 text-xs text-gray-500">
              <span className="text-green-400">{formatCurrency(analyticsData.overview.monthlyRevenue)}</span> this month
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <StarIcon className="text-yellow-400 w-6 h-6" />
              <span className="flex items-center gap-1 text-green-400">
                <ArrowUpwardIcon className="w-3 h-3" />
                +0.1
              </span>
            </div>
            <div className="text-3xl font-bold text-white">{analyticsData.overview.averageRating}</div>
            <div className="text-sm text-gray-400">Average Rating</div>
            <div className="mt-2 text-xs text-gray-500">Based on 1,243 reviews</div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <PsychologyIcon className="text-purple-400 w-6 h-6" />
              <span className="flex items-center gap-1 text-green-400">
                <ArrowUpwardIcon className="w-3 h-3" />
                +4.2%
              </span>
            </div>
            <div className="text-3xl font-bold text-white">{analyticsData.overview.completionRate}%</div>
            <div className="text-sm text-gray-400">Completion Rate</div>
            <div className="mt-2 text-xs text-gray-500">{analyticsData.overview.activeStudents} active students</div>
          </motion.div>
        </motion.div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Student Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUpIcon className="text-blue-400 w-5 h-5" />
                Student Growth
              </h3>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-700 rounded">
                  <RefreshIcon className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            <div className="h-64">
              <Line data={studentTrendChart} />
            </div>
          </motion.div>

          {/* Revenue Trend Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AttachMoneyIcon className="text-green-400 w-5 h-5" />
                Revenue Trend
              </h3>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-gray-700 rounded">
                  <RefreshIcon className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
            <div className="h-64">
              <Line data={revenueTrendChart} />
            </div>
          </motion.div>
        </div>

        {/* Course Performance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/30 rounded-xl border border-gray-700 p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MenuBookIcon className="text-purple-400 w-5 h-5" />
              Course Performance
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setChartType('bar')}
                className={`p-2 rounded-lg ${chartType === 'bar' ? 'bg-purple-600' : 'bg-gray-800'} text-white`}
              >
                <BarChartIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setChartType('line')}
                className={`p-2 rounded-lg ${chartType === 'line' ? 'bg-purple-600' : 'bg-gray-800'} text-white`}
              >
                <ShowChartIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="h-80">
            {chartType === 'bar' ? (
              <Bar data={coursePerformanceChart} />
            ) : (
              <Line data={coursePerformanceChart} />
            )}
          </div>
        </motion.div>

        {/* Engagement Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Daily Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <AccessTimeIcon className="text-orange-400 w-5 h-5" />
              Daily Activity Pattern
            </h3>
            <div className="h-64">
              <Line data={dailyEngagementChart} />
            </div>
          </motion.div>

          {/* Weekly Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CalendarIcon className="text-green-400 w-5 h-5" />
              Weekly Activity
            </h3>
            <div className="h-64">
              <Bar data={weeklyEngagementChart} />
            </div>
          </motion.div>
        </div>

        {/* Demographics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Age Groups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <PeopleIcon className="text-blue-400 w-5 h-5" />
              Age Distribution
            </h3>
            <div className="h-64">
              <Doughnut data={ageGroupsChart} />
            </div>
          </motion.div>

          {/* Device Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <DevicesIcon className="text-green-400 w-5 h-5" />
              Device Usage
            </h3>
            <div className="h-64">
              <Pie data={deviceTypeChart} />
            </div>
          </motion.div>

          {/* Education Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <SchoolIcon className="text-purple-400 w-5 h-5" />
              Education Level
            </h3>
            <div className="h-64">
              <Doughnut data={educationLevelChart} />
            </div>
          </motion.div>
        </div>

        {/* Revenue Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue by Course */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <AttachMoneyIcon className="text-green-400 w-5 h-5" />
              Revenue by Course (in thousands)
            </h3>
            <div className="h-64">
              <Bar data={revenueByCourseChart} />
            </div>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <PaymentIcon className="text-yellow-400 w-5 h-5" />
              Payment Methods
            </h3>
            <div className="h-64">
              <Pie data={paymentMethodsChart} />
            </div>
          </motion.div>
        </div>

        {/* Ratings and Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Rating Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <StarIcon className="text-yellow-400 w-5 h-5" />
              Rating Distribution
            </h3>
            <div className="h-64">
              <Bar data={ratingDistributionChart} />
            </div>
          </motion.div>

          {/* Rating by Course */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <GradeIcon className="text-orange-400 w-5 h-5" />
              Average Rating by Course
            </h3>
            <div className="h-64">
              <Bar data={ratingByCourseChart} />
            </div>
          </motion.div>
        </div>

        {/* Cohort Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/30 rounded-xl border border-gray-700 p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <TimelineIcon className="text-purple-400 w-5 h-5" />
            Cohort Retention Analysis
          </h3>
          <div className="h-80">
            <Line data={cohortAnalysisChart} />
          </div>
        </motion.div>

        {/* Top Countries Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <LanguageIcon className="text-blue-400 w-5 h-5" />
            Top Countries by Enrollment
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 text-gray-400 font-medium">Country</th>
                  <th className="text-right py-3 text-gray-400 font-medium">Students</th>
                  <th className="text-right py-3 text-gray-400 font-medium">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {analyticsData.demographics.countries.map((country, index) => (
                  <tr key={index} className="border-b border-gray-800/50">
                    <td className="py-3 text-white">{country.country}</td>
                    <td className="py-3 text-right text-white">{formatNumber(country.students)}</td>
                    <td className="py-3 text-right text-gray-400">
                      {((country.students / analyticsData.overview.totalStudents) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Monthly Revenue Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/30 rounded-xl border border-gray-700 p-6 mt-6"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <ShowChartIcon className="text-green-400 w-5 h-5" />
            Monthly Revenue Trend
          </h3>
          <div className="h-80">
            <Line data={monthlyRevenueChart} />
          </div>
        </motion.div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {showExportModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowExportModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <ExportModal onClose={() => setShowExportModal(false)} />
            </div>
          </motion.div>
        )}

        {showReportModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowReportModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <ReportModal onClose={() => setShowReportModal(false)} />
            </div>
          </motion.div>
        )}

        {showComparisonModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowComparisonModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <ComparisonModal onClose={() => setShowComparisonModal(false)} />
            </div>
          </motion.div>
        )}

        {showDetailsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetailsModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <DetailsModal onClose={() => setShowDetailsModal(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

