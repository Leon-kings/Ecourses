/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  People as PeopleIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Verified as VerifiedIcon,
  WhatsApp as WhatsAppIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  MenuBook as MenuBookIcon,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Devices as DevicesIcon,
  Brush as BrushIcon,
  Timeline as TimelineIcon,
  Close as CloseIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Book as BookIcon,
  Person as PersonIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  EmojiEvents as EmojiEventsIcon,
  RocketLaunch as RocketLaunchIcon,
  Groups as GroupsIcon,
  Psychology as PsychologyIcon,
  Language as LanguageIcon,
  Handshake as HandshakeIcon,
  Lightbulb as LightbulbIcon,
  Favorite as FavoriteIcon,
  PlayCircle as PlayCircleIcon,
  Description as DescriptionIcon,
  Quiz as QuizIcon,
  Assignment as AssignmentIcon,
  Download as DownloadIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
  VolumeUp as VolumeUpIcon,
  VolumeOff as VolumeOffIcon,
  Fullscreen as FullscreenIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  BarChart as BarChartIcon,
  Assessment as AssessmentIcon,
  PictureAsPdf as PictureAsPdfIcon,
  InsertDriveFile as InsertDriveFileIcon,
  CloudDownload as CloudDownloadIcon,
  Forum as ForumIcon,
  Help as HelpIcon,
  Announcement as AnnouncementIcon,
  Grade as GradeIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Sort as SortIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  VideoLibrary as VideoLibraryIcon,
  LibraryBooks as LibraryBooksIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Leaderboard as LeaderboardIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  AttachMoney as AttachMoneyIcon,
  RateReview as RateReviewIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  Schedule as ScheduleIcon,
  Warning as WarningIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  Receipt as ReceiptIcon,
  MonetizationOn as MonetizationOnIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
} from '@mui/icons-material';

export const TeacherMeManagement = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [earnings, setEarnings] = useState({});
  const [reviews, setReviews] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [showCreateCourseModal, setShowCreateCourseModal] = useState(false);
  const [showEditCourseModal, setShowEditCourseModal] = useState(false);
  const [showEarningsModal, setShowEarningsModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('week');
  const [notifications, setNotifications] = useState([]);
  const [teacherProfile, setTeacherProfile] = useState({});
  const [newCourse, setNewCourse] = useState({
    title: '',
    category: 'web',
    level: 'beginner',
    description: '',
    price: '',
    image: '📚',
    color: 'blue',
    lectures: 0,
    duration: '',
    status: 'draft',
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  // Mock data for teacher profile
  const mockTeacherProfile = {
    id: 1,
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@teachhub.com',
    title: 'Senior Web Development Instructor',
    avatar: 'SJ',
    coverImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    rating: 4.9,
    totalStudents: 15420,
    totalCourses: 8,
    totalReviews: 1243,
    joinDate: 'January 2020',
    expertise: ['Web Development', 'React', 'Node.js', 'MongoDB'],
    bio: 'Dr. Sarah Johnson is a passionate educator with over 12 years of experience in web development. She holds a Ph.D. in Computer Science and has worked with top tech companies including Google and Microsoft.',
    social: {
      github: 'sarahjohnson',
      linkedin: 'sarahjohnson',
      twitter: 'sarahcodes',
      youtube: 'sarahjohnson',
    },
    bankInfo: {
      accountName: 'Sarah Johnson',
      accountNumber: '****1234',
      bankName: 'Chase Bank',
      routingNumber: '****5678',
    },
    payoutHistory: [
      { id: 1, date: '2024-03-15', amount: 3450, status: 'completed' },
      { id: 2, date: '2024-02-15', amount: 4200, status: 'completed' },
      { id: 3, date: '2024-01-15', amount: 3800, status: 'completed' },
    ]
  };

  // Mock data for teacher's courses
  const mockCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp 2024',
      category: 'web',
      level: 'beginner',
      students: 8420,
      rating: 4.9,
      price: 499,
      revenue: 4200000,
      image: '🌐',
      color: 'blue',
      status: 'published',
      lastUpdated: '2024-01-15',
      lectures: 245,
      quizzes: 28,
      assignments: 12,
      duration: '24 weeks',
      enrolledStudents: 8420,
      pendingAssignments: 23,
      newDiscussions: 45,
      completionRate: 78,
      reviews: 423,
    },
    {
      id: 2,
      title: 'Advanced React & Next.js Masterclass',
      category: 'web',
      level: 'advanced',
      students: 5200,
      rating: 4.8,
      price: 599,
      revenue: 3114800,
      image: '⚛️',
      color: 'cyan',
      status: 'published',
      lastUpdated: '2024-02-20',
      lectures: 180,
      quizzes: 22,
      assignments: 10,
      duration: '16 weeks',
      enrolledStudents: 5200,
      pendingAssignments: 15,
      newDiscussions: 28,
      completionRate: 72,
      reviews: 312,
    },
    {
      id: 3,
      title: 'Node.js Microservices Architecture',
      category: 'backend',
      level: 'intermediate',
      students: 3800,
      rating: 4.9,
      price: 549,
      revenue: 2086200,
      image: '🚀',
      color: 'green',
      status: 'published',
      lastUpdated: '2024-03-01',
      lectures: 156,
      quizzes: 18,
      assignments: 8,
      duration: '14 weeks',
      enrolledStudents: 3800,
      pendingAssignments: 8,
      newDiscussions: 12,
      completionRate: 81,
      reviews: 245,
    },
    {
      id: 4,
      title: 'Python for Data Science',
      category: 'data',
      level: 'beginner',
      students: 2100,
      rating: 4.7,
      price: 449,
      revenue: 942900,
      image: '🐍',
      color: 'yellow',
      status: 'draft',
      lastUpdated: '2024-03-10',
      lectures: 120,
      quizzes: 15,
      assignments: 6,
      duration: '10 weeks',
      enrolledStudents: 0,
      pendingAssignments: 0,
      newDiscussions: 0,
      completionRate: 0,
      reviews: 0,
    },
  ];

  // Mock data for students
  const mockStudents = [
    { id: 101, name: 'John Doe', email: 'john@example.com', courses: ['Web Development', 'React Native'], progress: 65, lastActive: '2024-03-18', avatar: 'JD', country: 'USA', completedLectures: 159, totalLectures: 245 },
    { id: 102, name: 'Jane Smith', email: 'jane@example.com', courses: ['Data Science'], progress: 42, lastActive: '2024-03-17', avatar: 'JS', country: 'UK', completedLectures: 131, totalLectures: 312 },
    { id: 103, name: 'Mike Johnson', email: 'mike@example.com', courses: ['Web Development', 'Node.js'], progress: 88, lastActive: '2024-03-18', avatar: 'MJ', country: 'Canada', completedLectures: 215, totalLectures: 245 },
    { id: 104, name: 'Sarah Wilson', email: 'sarah@example.com', courses: ['React Native'], progress: 34, lastActive: '2024-03-16', avatar: 'SW', country: 'Australia', completedLectures: 67, totalLectures: 198 },
    { id: 105, name: 'Tom Brown', email: 'tom@example.com', courses: ['Web Development', 'Python'], progress: 71, lastActive: '2024-03-18', avatar: 'TB', country: 'Germany', completedLectures: 174, totalLectures: 245 },
  ];

  // Mock data for earnings
  const mockEarnings = {
    total: 10355900,
    monthly: 1250000,
    weekly: 312500,
    daily: 44642,
    pending: 450000,
    lastPayout: '2024-03-15',
    nextPayout: '2024-03-30',
    currency: 'USD',
    growth: 23,
    chartData: [
      { month: 'Jan', earnings: 3800000 },
      { month: 'Feb', earnings: 4200000 },
      { month: 'Mar', earnings: 4500000 },
      { month: 'Apr', earnings: 4100000 },
      { month: 'May', earnings: 4800000 },
      { month: 'Jun', earnings: 5200000 },
    ],
    courses: [
      { name: 'Web Development Bootcamp', earnings: 4200000, students: 8420 },
      { name: 'Advanced React', earnings: 3114800, students: 5200 },
      { name: 'Node.js Microservices', earnings: 2086200, students: 3800 },
      { name: 'Python for Data Science', earnings: 942900, students: 2100 },
    ]
  };

  // Mock data for notifications
  const mockNotifications = [
    { id: 1, type: 'assignment', message: 'New assignment submission in Web Development', time: '5 min ago', read: false, course: 'Web Development' },
    { id: 2, type: 'question', message: 'New question in Data Science course', time: '1 hour ago', read: false, course: 'Data Science' },
    { id: 3, type: 'review', message: 'New 5-star review on your course', time: '3 hours ago', read: true, course: 'React Native' },
    { id: 4, type: 'enrollment', message: '15 new students enrolled today', time: '5 hours ago', read: true, course: 'All Courses' },
    { id: 5, type: 'payout', message: 'Monthly payout processed: $4,500', time: '1 day ago', read: true },
  ];

  // Mock data for assignments
  const mockAssignments = [
    { id: 201, student: 'John Doe', course: 'Web Development', assignment: 'React Project', submitted: '2024-03-18', status: 'pending', grade: null },
    { id: 202, student: 'Jane Smith', course: 'Data Science', assignment: 'ML Model', submitted: '2024-03-17', status: 'pending', grade: null },
    { id: 203, student: 'Mike Johnson', course: 'Node.js', assignment: 'API Design', submitted: '2024-03-16', status: 'graded', grade: 92 },
    { id: 204, student: 'Sarah Wilson', course: 'React Native', assignment: 'Mobile App', submitted: '2024-03-15', status: 'pending', grade: null },
  ];

  useEffect(() => {
    // Load mock data
    setTeacherProfile(mockTeacherProfile);
    setCourses(mockCourses);
    setStudents(mockStudents);
    setEarnings(mockEarnings);
    setNotifications(mockNotifications);
  }, []);

  // Calculate totals
  const totalStudents = courses.reduce((acc, course) => acc + course.students, 0);
  const totalRevenue = courses.reduce((acc, course) => acc + course.revenue, 0);
  const averageRating = (courses.reduce((acc, course) => acc + course.rating, 0) / courses.length).toFixed(1);
  const pendingCount = mockAssignments.filter(a => a.status === 'pending').length;

  // Handle course creation
  const handleCreateCourse = () => {
    if (!newCourse.title || !newCourse.description || !newCourse.price) {
      toast.error('Please fill in all required fields');
      return;
    }

    const course = {
      id: courses.length + 1,
      ...newCourse,
      students: 0,
      rating: 0,
      revenue: 0,
      status: 'draft',
      lastUpdated: new Date().toISOString().split('T')[0],
      enrolledStudents: 0,
      pendingAssignments: 0,
      newDiscussions: 0,
      completionRate: 0,
      reviews: 0,
    };

    setCourses([...courses, course]);
    setShowCreateCourseModal(false);
    setNewCourse({
      title: '',
      category: 'web',
      level: 'beginner',
      description: '',
      price: '',
      image: '📚',
      color: 'blue',
      lectures: 0,
      duration: '',
      status: 'draft',
    });
    toast.success('Course created successfully!');
  };

  // Handle course publish
  const handlePublishCourse = (courseId) => {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, status: 'published' } : course
    ));
    toast.success('Course published successfully!');
  };

  // Handle course archive
  const handleArchiveCourse = (courseId) => {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, status: 'archived' } : course
    ));
    toast.success('Course archived successfully!');
  };

  // Handle course delete
  const handleDeleteCourse = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== courseId));
      toast.success('Course deleted successfully!');
    }
  };

  // Handle grade assignment
  const handleGradeAssignment = (assignmentId, grade) => {
    toast.success(`Assignment graded: ${grade}%`);
  };

  // Handle respond to review
  const handleRespondToReview = (review) => {
    toast.info('Opening review response...');
  };

  // Handle message student
  const handleMessageStudent = (student) => {
    toast.info(`Messaging ${student.name}...`);
  };

  // Handle create announcement
  const handleCreateAnnouncement = () => {
    toast.success('Announcement sent to all students!');
    setShowAnnouncementModal(false);
  };

  // Handle withdraw earnings
  const handleWithdrawEarnings = () => {
    toast.success('Withdrawal request submitted!');
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Filter courses based on search
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter students based on search
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get unread notifications count
  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-lg"
      >
        <MenuIcon />
      </button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 z-50 overflow-y-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          {/* Teacher Profile */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {teacherProfile.avatar}
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm truncate">{teacherProfile.name}</h3>
              <p className="text-xs text-gray-400">{teacherProfile.title}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { id: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
              { id: 'courses', icon: <VideoLibraryIcon />, label: 'My Courses', badge: courses.filter(c => c.status === 'draft').length },
              { id: 'students', icon: <PeopleIcon />, label: 'Students', badge: students.length },
              { id: 'earnings', icon: <AttachMoneyIcon />, label: 'Earnings' },
              { id: 'assignments', icon: <AssignmentIcon />, label: 'Assignments', badge: pendingCount },
              { id: 'reviews', icon: <RateReviewIcon />, label: 'Reviews', badge: notifications.filter(n => n.type === 'review' && !n.read).length },
              { id: 'announcements', icon: <AnnouncementIcon />, label: 'Announcements' },
              { id: 'analytics', icon: <BarChartIcon />, label: 'Analytics' },
              { id: 'profile', icon: <AccountCircleIcon />, label: 'Profile' },
              { id: 'settings', icon: <SettingsIcon />, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.badge > 0 && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeTab === item.id ? 'bg-white/20' : 'bg-gray-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-6 left-6 right-6">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
              <LogoutIcon />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white capitalize">
              {activeTab} Management
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Welcome back, {teacherProfile.name}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-48 sm:w-64"
              />
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
              <NotificationsIcon />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {/* Create Course Button */}
            <button
              onClick={() => setShowCreateCourseModal(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 flex items-center gap-2"
            >
              <AddIcon className="w-4 h-4" />
              <span className="hidden sm:inline">New Course</span>
            </button>
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Students', value: totalStudents.toLocaleString(), icon: <PeopleIcon />, color: 'blue', change: '+12%', changeType: 'up' },
                { label: 'Total Courses', value: courses.length, icon: <VideoLibraryIcon />, color: 'purple', change: '+2', changeType: 'up' },
                { label: 'Total Revenue', value: formatCurrency(totalRevenue), icon: <AttachMoneyIcon />, color: 'green', change: '+23%', changeType: 'up' },
                { label: 'Average Rating', value: averageRating, icon: <StarIcon />, color: 'yellow', change: '+0.2', changeType: 'up' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-${stat.color}-500/20 rounded-lg`}>
                      <div className={`text-${stat.color}-400`}>{stat.icon}</div>
                    </div>
                    <span className={`text-xs ${
                      stat.changeType === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Revenue Overview</h3>
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="bg-gray-700 text-white text-sm rounded-lg px-3 py-2 border border-gray-600"
                  >
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                    <option value="year">This Year</option>
                  </select>
                </div>
                <div className="h-64 flex items-end justify-between gap-2">
                  {earnings.chartData?.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
                        style={{ height: `${(data.earnings / 6000000) * 200}px` }}
                      ></div>
                      <span className="text-xs text-gray-400">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Notifications */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Notifications</h3>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        notification.read ? 'bg-gray-900/50' : 'bg-gray-700/50'
                      }`}
                    >
                      <div className={`p-2 rounded-full ${
                        notification.type === 'assignment' ? 'bg-blue-500/20 text-blue-400' :
                        notification.type === 'question' ? 'bg-purple-500/20 text-purple-400' :
                        notification.type === 'review' ? 'bg-yellow-500/20 text-yellow-400' :
                        notification.type === 'enrollment' ? 'bg-green-500/20 text-green-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {notification.type === 'assignment' && <AssignmentIcon className="w-4 h-4" />}
                        {notification.type === 'question' && <HelpIcon className="w-4 h-4" />}
                        {notification.type === 'review' && <StarIcon className="w-4 h-4" />}
                        {notification.type === 'enrollment' && <PersonIcon className="w-4 h-4" />}
                        {notification.type === 'payout' && <AttachMoneyIcon className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Courses */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Courses</h3>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                >
                  View All <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {courses.slice(0, 4).map((course) => (
                  <motion.div
                    key={course.id}
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-gray-900 rounded-lg p-4 border border-gray-700"
                  >
                    <div className={`text-3xl mb-3 bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 w-12 h-12 rounded-lg flex items-center justify-center`}>
                      {course.image}
                    </div>
                    <h4 className="text-white font-semibold mb-2 line-clamp-1">{course.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <PeopleIcon className="w-4 h-4" />
                        {course.students.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-400" />
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        course.status === 'published' ? 'bg-green-500/20 text-green-400' :
                        course.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {course.status}
                      </span>
                      <span className="text-xs text-gray-400">{formatCurrency(course.price)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">My Courses</h2>
              <div className="flex items-center gap-2">
                <select className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 border border-gray-700">
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="archived">Archived</option>
                </select>
                <button className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700">
                  <FilterListIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredCourses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Course Image */}
                    <div className={`lg:w-32 h-32 bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 rounded-lg flex items-center justify-center`}>
                      <span className="text-5xl">{course.image}</span>
                    </div>

                    {/* Course Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              course.status === 'published' ? 'bg-green-500/20 text-green-400' :
                              course.status === 'draft' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {course.status}
                            </span>
                            <span className="text-gray-400">{course.category}</span>
                            <span className="text-gray-400">{course.level}</span>
                            <span className="text-gray-400">{course.duration}</span>
                            <span className="text-gray-400">Updated: {course.lastUpdated}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{formatCurrency(course.revenue)}</div>
                          <div className="text-sm text-gray-400">lifetime revenue</div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-4">
                        <div>
                          <div className="text-lg font-bold text-white">{course.students.toLocaleString()}</div>
                          <div className="text-xs text-gray-400">Students</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{course.rating}</div>
                          <div className="text-xs text-gray-400">Rating</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{course.completionRate}%</div>
                          <div className="text-xs text-gray-400">Completion</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{course.pendingAssignments}</div>
                          <div className="text-xs text-gray-400">Pending</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white">{course.newDiscussions}</div>
                          <div className="text-xs text-gray-400">Discussions</div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                          Edit Course
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                          View Analytics
                        </button>
                        {course.status === 'draft' && (
                          <button
                            onClick={() => handlePublishCourse(course.id)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                          >
                            Publish
                          </button>
                        )}
                        {course.status === 'published' && (
                          <button
                            onClick={() => handleArchiveCourse(course.id)}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                          >
                            Archive
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteCourse(course.id)}
                          className="text-red-400 hover:text-red-300 p-2"
                        >
                          <DeleteIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">My Students</h2>
              <div className="flex items-center gap-2">
                <select className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 border border-gray-700">
                  <option value="all">All Courses</option>
                  <option value="web">Web Development</option>
                  <option value="data">Data Science</option>
                  <option value="mobile">Mobile Development</option>
                </select>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm border border-gray-700">
                  Export List
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Courses</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Active</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                            {student.avatar}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{student.name}</div>
                            <div className="text-xs text-gray-400">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">{student.courses.length} courses</div>
                        <div className="text-xs text-gray-400">{student.completedLectures}/{student.totalLectures} lectures</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-700 rounded-full">
                            <div 
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-white">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white">{student.lastActive}</div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleMessageStudent(student)}
                          className="text-blue-400 hover:text-blue-300 mr-3"
                        >
                          <EmailIcon className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                          <MoreVertIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Earnings Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Earnings', value: formatCurrency(earnings.total), icon: <MonetizationOnIcon />, color: 'green' },
                { label: 'This Month', value: formatCurrency(earnings.monthly), icon: <TrendingUpIcon />, color: 'blue' },
                { label: 'Pending', value: formatCurrency(earnings.pending), icon: <ScheduleIcon />, color: 'yellow' },
                { label: 'Growth', value: `${earnings.growth}%`, icon: <TrendingUpIcon />, color: 'purple' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-${stat.color}-500/20 rounded-lg`}>
                      <div className={`text-${stat.color}-400`}>{stat.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Payout Information */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Bank Info */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Bank Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-400">Account Name</p>
                    <p className="text-white font-medium">{teacherProfile.bankInfo?.accountName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Bank Name</p>
                    <p className="text-white font-medium">{teacherProfile.bankInfo?.bankName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Account Number</p>
                    <p className="text-white font-medium">{teacherProfile.bankInfo?.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Routing Number</p>
                    <p className="text-white font-medium">{teacherProfile.bankInfo?.routingNumber}</p>
                  </div>
                </div>
                <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
                  Update Bank Info
                </button>
              </div>

              {/* Payout Schedule */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Payout Schedule</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Last Payout</span>
                    <span className="text-white font-medium">{earnings.lastPayout}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Next Payout</span>
                    <span className="text-white font-medium">{earnings.nextPayout}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Pending Amount</span>
                    <span className="text-yellow-400 font-medium">{formatCurrency(earnings.pending)}</span>
                  </div>
                </div>
                <button
                  onClick={handleWithdrawEarnings}
                  className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-700 hover:to-green-600"
                >
                  Withdraw Earnings
                </button>
              </div>

              {/* Recent Payouts */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Payout History</h3>
                <div className="space-y-3">
                  {teacherProfile.payoutHistory?.map((payout) => (
                    <div key={payout.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-white text-sm">{payout.date}</p>
                        <p className="text-xs text-gray-400 capitalize">{payout.status}</p>
                      </div>
                      <p className="text-white font-medium">{formatCurrency(payout.amount)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Earnings Breakdown */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Course Earnings</h3>
              <div className="space-y-4">
                {earnings.courses?.map((course, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-32 text-sm text-white">{course.name}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-700 rounded-full">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: `${(course.earnings / earnings.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-white">{formatCurrency(course.earnings)}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{course.students} students</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Pending Assignments</h2>
              <div className="flex items-center gap-2">
                <select className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 border border-gray-700">
                  <option value="all">All Courses</option>
                  <option value="web">Web Development</option>
                  <option value="data">Data Science</option>
                </select>
                <button className="bg-gray-800 text-white p-2 rounded-lg border border-gray-700">
                  <SortIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Course</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Assignment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Submitted</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {mockAssignments.map((assignment) => (
                    <tr key={assignment.id} className="hover:bg-gray-700/50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-white">{assignment.student}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300">{assignment.course}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300">{assignment.assignment}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300">{assignment.submitted}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          assignment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {assignment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {assignment.status === 'pending' ? (
                          <button
                            onClick={() => setShowAssignmentModal(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold"
                          >
                            Grade
                          </button>
                        ) : (
                          <span className="text-sm text-white">{assignment.grade}%</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>

      {/* Create Course Modal */}
      <AnimatePresence>
        {showCreateCourseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCreateCourseModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Create New Course</h2>
                  <button
                    onClick={() => setShowCreateCourseModal(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); handleCreateCourse(); }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Course Title *
                    </label>
                    <input
                      type="text"
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Complete Web Development Bootcamp"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Category
                      </label>
                      <select
                        value={newCourse.category}
                        onChange={(e) => setNewCourse({...newCourse, category: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="web">Web Development</option>
                        <option value="data">Data Science</option>
                        <option value="mobile">Mobile Development</option>
                        <option value="security">Cyber Security</option>
                        <option value="cloud">Cloud Computing</option>
                        <option value="ai">AI & ML</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Level
                      </label>
                      <select
                        value={newCourse.level}
                        onChange={(e) => setNewCourse({...newCourse, level: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Description *
                    </label>
                    <textarea
                      value={newCourse.description}
                      onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe your course..."
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Price ($) *
                      </label>
                      <input
                        type="number"
                        value={newCourse.price}
                        onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="499"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={newCourse.duration}
                        onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 24 weeks"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Course Icon
                      </label>
                      <input
                        type="text"
                        value={newCourse.image}
                        onChange={(e) => setNewCourse({...newCourse, image: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., 🌐"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Color Theme
                      </label>
                      <select
                        value={newCourse.color}
                        onChange={(e) => setNewCourse({...newCourse, color: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="blue">Blue</option>
                        <option value="purple">Purple</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="cyan">Cyan</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600"
                    >
                      Create Course
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCreateCourseModal(false)}
                      className="flex-1 border-2 border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assignment Grading Modal */}
      <AnimatePresence>
        {showAssignmentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAssignmentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-2xl w-full border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Grade Assignment</h2>
                  <button
                    onClick={() => setShowAssignmentModal(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-400">Student: <span className="text-white">John Doe</span></p>
                    <p className="text-sm text-gray-400">Course: <span className="text-white">Web Development</span></p>
                    <p className="text-sm text-gray-400">Assignment: <span className="text-white">React Project</span></p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Grade (%)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter grade"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Feedback
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Provide feedback to the student..."
                    ></textarea>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => {
                        handleGradeAssignment(1, 85);
                        setShowAssignmentModal(false);
                      }}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-600"
                    >
                      Submit Grade
                    </button>
                    <button
                      onClick={() => setShowAssignmentModal(false)}
                      className="flex-1 border-2 border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};