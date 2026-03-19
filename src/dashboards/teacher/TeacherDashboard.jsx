/* eslint-disable react-hooks/static-components */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
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
  Close as CloseIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
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
  PlayArrow as PlayArrowIcon,
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
  MonetizationOn as MonetizationOnIcon,
  Timeline as TimelineIcon,
  PieChart as PieChartIcon,
//   Announcement as AnnouncementIcon,
  Bookmark as BookmarkIcon,
  Chat as ChatIcon,
  Warning as WarningIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  Cancel as CancelIcon,
  Pending as PendingIcon,
  Refresh as RefreshIcon,
  MoreHoriz as MoreHorizIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";

export const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showEarningsModal, setShowEarningsModal] = useState(false);
  const [dateRange, setDateRange] = useState("week");
  const [expandedSections, setExpandedSections] = useState({
    earnings: true,
    courses: true,
    students: true,
    reviews: true
  });

  // Mock data for the teacher
  const teacherData = {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Web Development Instructor",
    avatar: "SJ",
    email: "sarah.johnson@teachhub.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2020",
    bio: "Passionate educator with over 12 years of experience in web development. Ph.D. in Computer Science from Stanford University.",
    expertise: ["Web Development", "React", "Node.js", "MongoDB", "TypeScript"],
    social: {
      github: "sarahjohnson",
      linkedin: "sarahjohnson",
      twitter: "sarahcodes",
      youtube: "sarahjohnson",
    },
    stats: {
      totalStudents: 15420,
      totalCourses: 8,
      totalRevenue: 245890,
      averageRating: 4.9,
      totalReviews: 1243,
      completionRate: 78,
      pendingQueries: 23,
      upcomingLiveSessions: 3
    },
    recentEarnings: [
      { date: "2024-03-01", amount: 3450, course: "Web Development Bootcamp" },
      { date: "2024-03-02", amount: 2100, course: "Advanced React" },
      { date: "2024-03-03", amount: 1800, course: "Node.js Microservices" },
      { date: "2024-03-04", amount: 4200, course: "Web Development Bootcamp" },
      { date: "2024-03-05", amount: 1650, course: "Advanced React" },
      { date: "2024-03-06", amount: 2800, course: "TypeScript Fundamentals" },
      { date: "2024-03-07", amount: 3900, course: "Web Development Bootcamp" },
    ],
    monthlyEarnings: [
      { month: "Jan", amount: 18500 },
      { month: "Feb", amount: 21200 },
      { month: "Mar", amount: 19800 },
      { month: "Apr", amount: 22400 },
      { month: "May", amount: 25600 },
      { month: "Jun", amount: 27800 },
      { month: "Jul", amount: 30100 },
      { month: "Aug", amount: 32500 },
      { month: "Sep", amount: 29800 },
      { month: "Oct", amount: 31200 },
      { month: "Nov", amount: 34500 },
      { month: "Dec", amount: 37800 },
    ],
    courses: [
      {
        id: 101,
        title: "Complete Web Development Bootcamp 2024",
        category: "Web Development",
        level: "Beginner",
        students: 8420,
        rating: 4.9,
        price: 499,
        revenue: 4200000,
        image: "🌐",
        color: "blue",
        status: "published",
        lastUpdated: "2024-02-15",
        lectures: 245,
        duration: "24 weeks",
        badge: "Bestseller",
        description: "Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
        curriculum: [
          { section: "Introduction to Web Development", lessons: 5 },
          { section: "HTML & CSS Fundamentals", lessons: 12 },
          { section: "JavaScript Basics", lessons: 15 },
          { section: "Advanced JavaScript", lessons: 18 },
          { section: "React.js Mastery", lessons: 25 },
          { section: "Node.js Backend", lessons: 20 },
          { section: "MongoDB Database", lessons: 15 },
          { section: "Deployment & DevOps", lessons: 10 },
        ],
        reviews: [
          { id: 1, student: "John Doe", rating: 5, comment: "Best course ever!", date: "2024-03-01" },
          { id: 2, student: "Jane Smith", rating: 5, comment: "Very comprehensive", date: "2024-03-02" },
          { id: 3, student: "Mike Johnson", rating: 4, comment: "Great content", date: "2024-03-03" },
        ]
      },
      {
        id: 102,
        title: "Advanced React & Next.js Masterclass",
        category: "Web Development",
        level: "Advanced",
        students: 5200,
        rating: 4.8,
        price: 599,
        revenue: 3114800,
        image: "⚛️",
        color: "cyan",
        status: "published",
        lastUpdated: "2024-02-10",
        lectures: 180,
        duration: "16 weeks",
        badge: "Top Rated",
        description: "Take your React skills to the next level with advanced patterns, Next.js 14, and server components.",
        curriculum: [
          { section: "React Advanced Patterns", lessons: 10 },
          { section: "Next.js 14 Fundamentals", lessons: 15 },
          { section: "Server Components", lessons: 12 },
          { section: "API Routes & Middleware", lessons: 8 },
          { section: "Authentication & Authorization", lessons: 10 },
        ],
        reviews: [
          { id: 4, student: "Alex Brown", rating: 5, comment: "Excellent advanced content", date: "2024-03-04" },
          { id: 5, student: "Sarah Wilson", rating: 4, comment: "Very helpful", date: "2024-03-05" },
        ]
      },
      {
        id: 103,
        title: "Node.js Microservices Architecture",
        category: "Backend",
        level: "Intermediate",
        students: 3800,
        rating: 4.9,
        price: 549,
        revenue: 2086200,
        image: "🚀",
        color: "green",
        status: "published",
        lastUpdated: "2024-02-05",
        lectures: 156,
        duration: "14 weeks",
        badge: "Hot & New",
        description: "Learn to build scalable microservices with Node.js, Docker, and Kubernetes.",
        curriculum: [
          { section: "Microservices Basics", lessons: 8 },
          { section: "Docker Containers", lessons: 12 },
          { section: "Kubernetes Orchestration", lessons: 15 },
          { section: "Service Mesh", lessons: 10 },
        ],
        reviews: [
          { id: 6, student: "David Lee", rating: 5, comment: "Perfect for backend devs", date: "2024-03-06" },
        ]
      },
      {
        id: 104,
        title: "TypeScript Fundamentals",
        category: "Programming",
        level: "Beginner",
        students: 1200,
        rating: 4.7,
        price: 399,
        revenue: 478800,
        image: "📘",
        color: "purple",
        status: "draft",
        lastUpdated: "2024-03-01",
        lectures: 85,
        duration: "8 weeks",
        badge: null,
        description: "Master TypeScript from scratch with practical examples.",
        curriculum: [
          { section: "TypeScript Basics", lessons: 10 },
          { section: "Advanced Types", lessons: 8 },
          { section: "Generics", lessons: 6 },
        ],
        reviews: []
      },
    ],
    students: [
      { 
        id: 1, 
        name: "Michael Chen", 
        avatar: "MC", 
        email: "michael.c@email.com",
        enrolledCourses: 3,
        progress: 75,
        lastActive: "2024-03-07",
        country: "USA",
        totalSpent: 1647,
        reviews: 2,
        completedCourses: 1,
        status: "active"
      },
      { 
        id: 2, 
        name: "Emily Rodriguez", 
        avatar: "ER", 
        email: "emily.r@email.com",
        enrolledCourses: 2,
        progress: 45,
        lastActive: "2024-03-06",
        country: "Spain",
        totalSpent: 1098,
        reviews: 1,
        completedCourses: 0,
        status: "active"
      },
      { 
        id: 3, 
        name: "David Kim", 
        avatar: "DK", 
        email: "david.k@email.com",
        enrolledCourses: 4,
        progress: 90,
        lastActive: "2024-03-07",
        country: "South Korea",
        totalSpent: 2196,
        reviews: 3,
        completedCourses: 2,
        status: "active"
      },
      { 
        id: 4, 
        name: "Sarah Williams", 
        avatar: "SW", 
        email: "sarah.w@email.com",
        enrolledCourses: 1,
        progress: 30,
        lastActive: "2024-03-05",
        country: "UK",
        totalSpent: 499,
        reviews: 0,
        completedCourses: 0,
        status: "inactive"
      },
      { 
        id: 5, 
        name: "James Wilson", 
        avatar: "JW", 
        email: "james.w@email.com",
        enrolledCourses: 3,
        progress: 60,
        lastActive: "2024-03-04",
        country: "Canada",
        totalSpent: 1647,
        reviews: 2,
        completedCourses: 1,
        status: "active"
      },
    ],
    notifications: [
      { id: 1, type: "review", message: "New 5-star review on Web Development Bootcamp", time: "2 hours ago", read: false },
      { id: 2, type: "question", message: "John asked: 'How to deploy Next.js app?'", time: "5 hours ago", read: false },
      { id: 3, type: "earning", message: "Weekly payout of $3,450 processed", time: "1 day ago", read: true },
      { id: 4, type: "student", message: "50 new students enrolled this week", time: "2 days ago", read: true },
    ],
    upcomingEvents: [
      { id: 1, title: "Live Q&A Session", course: "Web Development Bootcamp", date: "2024-03-10", time: "15:00", attendees: 45 },
      { id: 2, title: "Course Update Webinar", course: "Advanced React", date: "2024-03-12", time: "18:00", attendees: 28 },
      { id: 3, title: "Office Hours", course: "Node.js Microservices", date: "2024-03-15", time: "16:00", attendees: 15 },
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'published': return 'text-green-400 bg-green-400/10';
      case 'draft': return 'text-yellow-400 bg-yellow-400/10';
      case 'archived': return 'text-gray-400 bg-gray-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getStudentStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-green-400 bg-green-400/10';
      case 'inactive': return 'text-gray-400 bg-gray-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  // Course Detail Modal
  const CourseDetailModal = ({ course, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
    >
      <div className={`bg-gradient-to-r from-${course.color}-600 to-${course.color}-800 p-6 sticky top-0 z-10`}>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="text-5xl">{course.image}</div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(course.status)}`}>
                  {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                </span>
                {course.badge && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    course.badge === "Bestseller" ? "bg-yellow-500/20 text-yellow-400" :
                    course.badge === "Top Rated" ? "bg-purple-500/20 text-purple-400" :
                    "bg-green-500/20 text-green-400"
                  }`}>
                    {course.badge}
                  </span>
                )}
                <span className="text-white/80 text-sm">{course.level}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{course.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <PeopleIcon className="text-blue-400 w-5 h-5 mb-2" />
            <div className="text-2xl font-bold text-white">{course.students.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Students</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <StarIcon className="text-yellow-400 w-5 h-5 mb-2" />
            <div className="text-2xl font-bold text-white">{course.rating}</div>
            <div className="text-xs text-gray-400">Rating ({course.reviews.length})</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <AttachMoneyIcon className="text-green-400 w-5 h-5 mb-2" />
            <div className="text-2xl font-bold text-white">{formatCurrency(course.revenue)}</div>
            <div className="text-xs text-gray-400">Revenue</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <ScheduleIcon className="text-purple-400 w-5 h-5 mb-2" />
            <div className="text-2xl font-bold text-white">{course.lectures}</div>
            <div className="text-xs text-gray-400">Lectures</div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Description</h3>
          <p className="text-gray-300">{course.description}</p>
        </div>

        {/* Curriculum */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Curriculum</h3>
          <div className="space-y-2">
            {course.curriculum.map((section, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-800/30 rounded-lg p-3">
                <span className="text-white">{section.section}</span>
                <span className="text-sm text-gray-400">{section.lessons} lessons</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        {course.reviews.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Recent Reviews</h3>
            <div className="space-y-3">
              {course.reviews.slice(0, 3).map((review) => (
                <div key={review.id} className="bg-gray-800/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{review.student}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{review.comment}</p>
                  <p className="text-xs text-gray-500 mt-2">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <EditIcon className="w-4 h-4" /> Edit Course
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2">
            <VisibilityIcon className="w-4 h-4" /> Preview
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2">
            <ShareIcon className="w-4 h-4" /> Share
          </button>
          {course.status === 'published' ? (
            <button className="px-4 py-2 bg-yellow-600/20 text-yellow-400 rounded-lg hover:bg-yellow-600/30 flex items-center gap-2">
              <LockIcon className="w-4 h-4" /> Unpublish
            </button>
          ) : (
            <button className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 flex items-center gap-2">
              <LockOpenIcon className="w-4 h-4" /> Publish
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );

  // Student Detail Modal
  const StudentDetailModal = ({ student, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
    >
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-white border-2 border-white">
              {student.avatar}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{student.name}</h2>
              <p className="text-white/80">{student.email}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Country</div>
            <div className="text-white font-semibold">{student.country}</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Status</div>
            <div className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${getStudentStatusColor(student.status)}`}>
              {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Enrolled Courses</div>
            <div className="text-white font-semibold">{student.enrolledCourses}</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Completed Courses</div>
            <div className="text-white font-semibold">{student.completedCourses}</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Total Spent</div>
            <div className="text-white font-semibold">{formatCurrency(student.totalSpent)}</div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Last Active</div>
            <div className="text-white font-semibold">{student.lastActive}</div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800">
          <h3 className="text-lg font-bold text-white mb-3">Progress Overview</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Overall Progress</span>
                <span className="text-white">{student.progress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-800">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Send Message
          </button>
          <button className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            View Activity
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Add Course Modal
  const AddCourseModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
    >
      <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Create New Course</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Course Title</label>
          <input type="text" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="e.g., Complete Web Development Bootcamp" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
            <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Mobile Development</option>
              <option>Programming</option>
              <option>Design</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Level</label>
            <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
          <textarea rows="4" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="Describe your course..."></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Price ($)</label>
            <input type="number" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="499" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Duration</label>
            <input type="text" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="e.g., 24 weeks" />
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-800">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700">
            Create Draft
          </button>
          <button className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Edit Profile Modal
  const EditProfileModal = ({ teacher, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
    >
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
            {teacher.avatar}
          </div>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            Change Photo
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
            <input type="text" defaultValue={teacher.name} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
            <input type="text" defaultValue={teacher.title} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input type="email" defaultValue={teacher.email} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
          <input type="tel" defaultValue={teacher.phone} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
          <input type="text" defaultValue={teacher.location} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
          <textarea rows="4" defaultValue={teacher.bio} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Expertise (comma separated)</label>
          <input type="text" defaultValue={teacher.expertise.join(', ')} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-800">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700">
            Save Changes
          </button>
          <button className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Earnings Modal
  const EarningsModal = ({ teacher, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
    >
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Earnings Overview</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="text-sm text-gray-400 mb-1">Total Revenue</div>
            <div className="text-3xl font-bold text-white">{formatCurrency(teacher.stats.totalRevenue)}</div>
            <div className="text-xs text-green-400 mt-2">+12.5% from last month</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="text-sm text-gray-400 mb-1">This Month</div>
            <div className="text-3xl font-bold text-white">{formatCurrency(teacher.monthlyEarnings[2].amount)}</div>
            <div className="text-xs text-gray-400 mt-2">March 2024</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <div className="text-sm text-gray-400 mb-1">Average per Course</div>
            <div className="text-3xl font-bold text-white">{formatCurrency(teacher.stats.totalRevenue / teacher.stats.totalCourses)}</div>
            <div className="text-xs text-gray-400 mt-2">Across {teacher.stats.totalCourses} courses</div>
          </div>
        </div>

        {/* Chart (simplified bars) */}
        <div className="bg-gray-800/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Monthly Earnings (2023-2024)</h3>
          <div className="h-48 flex items-end justify-between gap-2">
            {teacher.monthlyEarnings.map((month, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg" 
                     style={{ height: `${(month.amount / 40000) * 100}%` }}></div>
                <span className="text-xs text-gray-400">{month.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {teacher.recentEarnings.map((earning, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-800/30 rounded-lg p-4">
                <div>
                  <div className="text-white font-semibold">{earning.course}</div>
                  <div className="text-xs text-gray-400">{earning.date}</div>
                </div>
                <div className="text-lg font-bold text-green-400">{formatCurrency(earning.amount)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Payout Info */}
        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4">Payout Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-400 mb-1">Next Payout</div>
              <div className="text-2xl font-bold text-white">March 15, 2024</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Estimated Amount</div>
              <div className="text-2xl font-bold text-green-400">{formatCurrency(8450)}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Payment Method</div>
              <div className="text-white">Bank Account (•••• 4567)</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Status</div>
              <div className="text-yellow-400">Processing</div>
            </div>
          </div>
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
                Teacher<span className="text-blue-400">Dashboard</span>
              </h1>
              <div className="hidden md:flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <DashboardIcon className="text-gray-400 w-5 h-5" />
                <span className="text-sm text-gray-300">{teacherData.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
                <NotificationsIcon className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center gap-2 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
                <SettingsIcon className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
                <AccountCircleIcon className="w-5 h-5" />
                <span className="hidden md:inline text-sm">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome back, {teacherData.name.split(' ')[0]}! 👋
          </h2>
          <p className="text-gray-400">Here's what's happening with your courses today.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <PeopleIcon className="text-blue-400 w-6 h-6" />
              <span className="text-xs text-green-400">+12%</span>
            </div>
            <div className="text-2xl font-bold text-white">{teacherData.stats.totalStudents.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Total Students</div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <MenuBookIcon className="text-purple-400 w-6 h-6" />
              <span className="text-xs text-green-400">+2</span>
            </div>
            <div className="text-2xl font-bold text-white">{teacherData.stats.totalCourses}</div>
            <div className="text-sm text-gray-400">Active Courses</div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <AttachMoneyIcon className="text-green-400 w-6 h-6" />
              <span className="text-xs text-green-400">+18%</span>
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(teacherData.stats.totalRevenue)}</div>
            <div className="text-sm text-gray-400">Total Revenue</div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <StarIcon className="text-yellow-400 w-6 h-6" />
              <span className="text-xs text-green-400">4.9</span>
            </div>
            <div className="text-2xl font-bold text-white">{teacherData.stats.averageRating}</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </motion.div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Earnings Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleSection('earnings')}
              >
                <div className="flex items-center gap-3">
                  <MonetizationOnIcon className="text-green-400 w-6 h-6" />
                  <h3 className="text-lg font-bold text-white">Earnings Overview</h3>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowEarningsModal(true);
                    }}
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    View Details
                  </button>
                  {expandedSections.earnings ? <ExpandLessIcon className="text-gray-400" /> : <ExpandMoreIcon className="text-gray-400" />}
                </div>
              </div>
              
              {expandedSections.earnings && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-xs text-gray-400">This Week</div>
                      <div className="text-lg font-bold text-white">{formatCurrency(19900)}</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-xs text-gray-400">This Month</div>
                      <div className="text-lg font-bold text-white">{formatCurrency(teacherData.monthlyEarnings[2].amount)}</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-xs text-gray-400">Pending</div>
                      <div className="text-lg font-bold text-yellow-400">{formatCurrency(3450)}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {teacherData.recentEarnings.slice(0, 5).map((earning, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{earning.date}</span>
                        <span className="text-white flex-1 ml-4">{earning.course}</span>
                        <span className="text-green-400 font-semibold">{formatCurrency(earning.amount)}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Courses Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleSection('courses')}
              >
                <div className="flex items-center gap-3">
                  <MenuBookIcon className="text-blue-400 w-6 h-6" />
                  <h3 className="text-lg font-bold text-white">My Courses</h3>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAddCourseModal(true);
                    }}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-1"
                  >
                    <AddIcon className="w-4 h-4" /> New Course
                  </button>
                  {expandedSections.courses ? <ExpandLessIcon className="text-gray-400" /> : <ExpandMoreIcon className="text-gray-400" />}
                </div>
              </div>

              {expandedSections.courses && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="space-y-3">
                    {teacherData.courses.map((course) => (
                      <div 
                        key={course.id} 
                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 cursor-pointer"
                        onClick={() => {
                          setSelectedCourse(course);
                          setShowCourseModal(true);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`text-2xl bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 w-10 h-10 rounded-lg flex items-center justify-center`}>
                            {course.image}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{course.title}</h4>
                            <div className="flex items-center gap-3 text-xs text-gray-400">
                              <span>{course.students.toLocaleString()} students</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <StarIcon className="w-3 h-3 text-yellow-400" />
                                {course.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(course.status)}`}>
                            {course.status}
                          </span>
                          <span className="text-green-400 font-semibold">{formatCurrency(course.revenue)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Students Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer flex items-center justify-between"
                onClick={() => toggleSection('students')}
              >
                <div className="flex items-center gap-3">
                  <PeopleIcon className="text-purple-400 w-6 h-6" />
                  <h3 className="text-lg font-bold text-white">Recent Students</h3>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-sm text-blue-400 hover:text-blue-300">
                    View All
                  </button>
                  {expandedSections.students ? <ExpandLessIcon className="text-gray-400" /> : <ExpandMoreIcon className="text-gray-400" />}
                </div>
              </div>

              {expandedSections.students && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="space-y-3">
                    {teacherData.students.slice(0, 5).map((student) => (
                      <div 
                        key={student.id} 
                        className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900 cursor-pointer"
                        onClick={() => {
                          setSelectedStudent(student);
                          setShowStudentModal(true);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                            {student.avatar}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{student.name}</h4>
                            <p className="text-xs text-gray-400">{student.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-sm text-white">{student.progress}%</div>
                            <div className="text-xs text-gray-400">{student.enrolledCourses} courses</div>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStudentStatusColor(student.status)}`}>
                            {student.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
                  {teacherData.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{teacherData.name}</h3>
                  <p className="text-sm text-blue-400">{teacherData.title}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <EmailIcon className="w-4 h-4" />
                  <span>{teacherData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <PhoneIcon className="w-4 h-4" />
                  <span>{teacherData.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <LocationIcon className="w-4 h-4" />
                  <span>{teacherData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Joined {teacherData.joinDate}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {teacherData.expertise.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                  {teacherData.expertise.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full">
                      +{teacherData.expertise.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <button 
                onClick={() => setShowEditProfileModal(true)}
                className="w-full mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 flex items-center justify-center gap-2"
              >
                <EditIcon className="w-4 h-4" /> Edit Profile
              </button>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <NotificationsIcon className="text-yellow-400 w-5 h-5" />
                Notifications
              </h3>
              <div className="space-y-3">
                {teacherData.notifications.map((notification) => (
                  <div key={notification.id} className={`p-3 rounded-lg ${notification.read ? 'bg-gray-900/30' : 'bg-blue-900/20 border border-blue-500/30'}`}>
                    <p className="text-sm text-white">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-blue-400 hover:text-blue-300">
                View All Notifications
              </button>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/30 rounded-xl border border-gray-700 p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ScheduleIcon className="text-green-400 w-5 h-5" />
                Upcoming Events
              </h3>
              <div className="space-y-3">
                {teacherData.upcomingEvents.map((event) => (
                  <div key={event.id} className="p-3 bg-gray-900/50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-semibold">{event.title}</h4>
                      <span className="text-xs text-gray-400">{event.attendees} attending</span>
                    </div>
                    <p className="text-xs text-gray-400">{event.course}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs">
                      <CalendarIcon className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-400">{event.date}</span>
                      <TimeIcon className="w-3 h-3 text-gray-400 ml-2" />
                      <span className="text-gray-400">{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700">
                Schedule New Event
              </button>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {showCourseModal && selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCourseModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <CourseDetailModal 
                course={selectedCourse} 
                onClose={() => setShowCourseModal(false)} 
              />
            </div>
          </motion.div>
        )}

        {showStudentModal && selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowStudentModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <StudentDetailModal 
                student={selectedStudent} 
                onClose={() => setShowStudentModal(false)} 
              />
            </div>
          </motion.div>
        )}

        {showAddCourseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAddCourseModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <AddCourseModal onClose={() => setShowAddCourseModal(false)} />
            </div>
          </motion.div>
        )}

        {showEditProfileModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowEditProfileModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <EditProfileModal 
                teacher={teacherData} 
                onClose={() => setShowEditProfileModal(false)} 
              />
            </div>
          </motion.div>
        )}

        {showEarningsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowEarningsModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <EarningsModal 
                teacher={teacherData} 
                onClose={() => setShowEarningsModal(false)} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

