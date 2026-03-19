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
  Event as EventIcon,
  EventAvailable as EventAvailableIcon,
  EventBusy as EventBusyIcon,
  Videocam as VideocamIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  Group as GroupIcon,
  PersonalVideo as PersonalVideoIcon,
  Timer as TimerIcon,
  Refresh as RefreshIcon,
  Today as TodayIcon,
  ViewWeek as ViewWeekIcon,
  ViewModule as ViewModuleIcon,
  ViewAgenda as ViewAgendaIcon,
  ArrowBack as ArrowBackIcon,
  AccessTimeFilled as AccessTimeFilledIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  Cancel as CancelIcon,
  Pending as PendingIcon,
  Warning as WarningIcon,
  VideoChat as VideoChatIcon,
  Chat as ChatIcon,
  Link as LinkIcon,
  ContentCopy as ContentCopyIcon,
  Download as DownloadIcon,
  Print as PrintIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";

export const TeacherBookingManagement = () => {
  const [viewMode, setViewMode] = useState("calendar"); // calendar, list, week
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    upcoming: true,
    pending: true,
    past: true,
  });

  // Mock data for teacher's availability
  const teacherAvailability = {
    timezone: "America/New_York",
    workingHours: [
      {
        day: "Monday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      },
      {
        day: "Tuesday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      },
      {
        day: "Wednesday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      },
      {
        day: "Thursday",
        slots: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
      },
      { day: "Friday", slots: ["09:00", "10:00", "11:00"] },
      { day: "Saturday", slots: [] },
      { day: "Sunday", slots: [] },
    ],
    exceptions: [
      { date: "2024-03-25", reason: "Conference", available: false },
      { date: "2024-04-01", reason: "Holiday", available: false },
    ],
    bufferTime: 15, // minutes between bookings
    maxAdvanceBooking: 30, // days
    minAdvanceBooking: 24, // hours
  };

  // Mock booking data
  const bookings = [
    {
      id: 1,
      studentName: "Michael Chen",
      studentAvatar: "MC",
      studentEmail: "michael.c@email.com",
      type: "one-on-one",
      title: "React Performance Optimization Consultation",
      description:
        "Need help optimizing a React app with performance issues. The app is experiencing slow rendering and I need guidance on best practices.",
      date: "2024-03-20",
      startTime: "10:00",
      endTime: "11:00",
      duration: 60,
      status: "confirmed",
      course: "Advanced React & Next.js",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      materials: [
        { name: "Performance Audit Report", url: "#" },
        { name: "Code Repository", url: "#" },
      ],
      questions: [
        "What's causing the slow renders?",
        "How to implement code splitting?",
        "Best practices for memoization?",
      ],
      notes:
        "Student has shared the code repository. Need to review before the session.",
      createdAt: "2024-03-15T10:30:00Z",
      updatedAt: "2024-03-16T14:20:00Z",
    },
    {
      id: 2,
      studentName: "Emily Rodriguez",
      studentAvatar: "ER",
      studentEmail: "emily.r@email.com",
      type: "group",
      title: "JavaScript Fundamentals Study Group",
      description:
        "Weekly study group for JavaScript fundamentals. 5 students attending.",
      date: "2024-03-21",
      startTime: "15:00",
      endTime: "16:30",
      duration: 90,
      status: "confirmed",
      course: "Web Development Bootcamp",
      meetingLink: "https://zoom.us/j/123456789",
      attendees: [
        { name: "Emily Rodriguez", avatar: "ER" },
        { name: "James Wilson", avatar: "JW" },
        { name: "Sarah Williams", avatar: "SW" },
        { name: "David Kim", avatar: "DK" },
        { name: "Lisa Brown", avatar: "LB" },
      ],
      topics: ["Closures", "Promises", "Async/Await"],
      notes: "Prepare examples for each topic. Share resources after session.",
      createdAt: "2024-03-10T09:15:00Z",
      updatedAt: "2024-03-18T11:30:00Z",
    },
    {
      id: 3,
      studentName: "David Kim",
      studentAvatar: "DK",
      studentEmail: "david.k@email.com",
      type: "one-on-one",
      title: "Career Guidance Session",
      description:
        "Discussion about career paths in web development and portfolio review.",
      date: "2024-03-22",
      startTime: "14:00",
      endTime: "15:00",
      duration: 60,
      status: "pending",
      course: "General",
      questions: [
        "What skills should I focus on?",
        "Portfolio feedback",
        "Interview preparation tips",
      ],
      notes: "Student is about to graduate and looking for job opportunities.",
      createdAt: "2024-03-19T08:45:00Z",
    },
    {
      id: 4,
      studentName: "Sarah Williams",
      studentAvatar: "SW",
      studentEmail: "sarah.w@email.com",
      type: "one-on-one",
      title: "Node.js Debugging Session",
      description: "Debugging a Node.js application with memory leaks.",
      date: "2024-03-19",
      startTime: "11:00",
      endTime: "12:00",
      duration: 60,
      status: "completed",
      course: "Node.js Microservices",
      meetingLink: "https://meet.google.com/xyz-abcd-efg",
      feedback: {
        rating: 5,
        comment:
          "Excellent session! Helped me identify and fix the memory leak.",
        submittedAt: "2024-03-19T13:15:00Z",
      },
      notes: "Session completed successfully. Student understood the concepts.",
      createdAt: "2024-03-18T16:20:00Z",
    },
    {
      id: 5,
      studentName: "James Wilson",
      studentAvatar: "JW",
      studentEmail: "james.w@email.com",
      type: "one-on-one",
      title: "Code Review Session",
      description: "Review of e-commerce application built with MERN stack.",
      date: "2024-03-23",
      startTime: "09:00",
      endTime: "10:30",
      duration: 90,
      status: "confirmed",
      course: "Complete Web Development Bootcamp",
      meetingLink: "https://whereby.com/room123",
      materials: [
        { name: "Project Repository", url: "#" },
        { name: "Deployed Application", url: "#" },
      ],
      notes: "Student wants feedback on architecture and code quality.",
      createdAt: "2024-03-17T12:10:00Z",
    },
    {
      id: 6,
      studentName: "Lisa Brown",
      studentAvatar: "LB",
      studentEmail: "lisa.b@email.com",
      type: "group",
      title: "TypeScript Workshop",
      description: "Interactive workshop on TypeScript for 8 students.",
      date: "2024-03-24",
      startTime: "13:00",
      endTime: "15:00",
      duration: 120,
      status: "pending",
      course: "TypeScript Fundamentals",
      attendees: [
        { name: "Lisa Brown", avatar: "LB" },
        { name: "Tom Harris", avatar: "TH" },
        { name: "Anna Lee", avatar: "AL" },
        { name: "Chris Martin", avatar: "CM" },
        { name: "Emma Davis", avatar: "ED" },
        { name: "Ryan Clark", avatar: "RC" },
        { name: "Sophie Turner", avatar: "ST" },
        { name: "Kevin Adams", avatar: "KA" },
      ],
      topics: ["Type System", "Generics", "Advanced Types", "Decorators"],
      notes: "Prepare exercises for hands-on practice.",
      createdAt: "2024-03-16T10:30:00Z",
    },
    {
      id: 7,
      studentName: "Tom Harris",
      studentAvatar: "TH",
      studentEmail: "tom.h@email.com",
      type: "one-on-one",
      title: "Database Design Consultation",
      description:
        "Need help designing database schema for a social media app.",
      date: "2024-03-18",
      startTime: "16:00",
      endTime: "17:00",
      duration: 60,
      status: "cancelled",
      course: "Node.js Microservices",
      cancellationReason: "Student had a scheduling conflict",
      notes: "Rescheduled to next week.",
      createdAt: "2024-03-14T09:00:00Z",
    },
    {
      id: 8,
      studentName: "Anna Lee",
      studentAvatar: "AL",
      studentEmail: "anna.l@email.com",
      type: "one-on-one",
      title: "Portfolio Review",
      description:
        "Review portfolio and provide feedback for job applications.",
      date: "2024-03-25",
      startTime: "11:00",
      endTime: "12:00",
      duration: 60,
      status: "confirmed",
      course: "General",
      materials: [
        { name: "Portfolio Website", url: "#" },
        { name: "Resume", url: "#" },
        { name: "GitHub Profile", url: "#" },
      ],
      notes: "Student is applying for junior developer positions.",
      createdAt: "2024-03-19T14:30:00Z",
    },
  ];

  // Mock booking statistics
  const bookingStats = {
    totalBookings: 156,
    confirmed: 124,
    pending: 18,
    completed: 98,
    cancelled: 14,
    totalHours: 234,
    averageRating: 4.9,
    upcomingThisWeek: 8,
    upcomingThisMonth: 23,
    revenueFromBookings: 8450,
    popularTimes: [
      { time: "10:00", bookings: 45 },
      { time: "14:00", bookings: 52 },
      { time: "16:00", bookings: 38 },
    ],
  };

  // Mock booking types with pricing
  const bookingTypes = [
    {
      id: 1,
      name: "One-on-One Consultation",
      duration: 60,
      price: 75,
      type: "one-on-one",
      icon: "👤",
    },
    {
      id: 2,
      name: "Group Session (2-5 students)",
      duration: 90,
      price: 150,
      type: "group",
      icon: "👥",
    },
    {
      id: 3,
      name: "Code Review",
      duration: 60,
      price: 90,
      type: "one-on-one",
      icon: "💻",
    },
    {
      id: 4,
      name: "Career Guidance",
      duration: 45,
      price: 60,
      type: "one-on-one",
      icon: "🎯",
    },
    {
      id: 5,
      name: "Workshop (6-10 students)",
      duration: 120,
      price: 300,
      type: "group",
      icon: "📚",
    },
  ];

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
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "text-green-400 bg-green-400/10 border-green-400/20";
      case "pending":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "completed":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "cancelled":
        return "text-red-400 bg-red-400/10 border-red-400/20";
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "one-on-one":
        return <PersonIcon className="w-4 h-4" />;
      case "group":
        return <GroupsIcon className="w-4 h-4" />;
      default:
        return <EventIcon className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins > 0 ? `${mins}m` : ""}` : `${mins}m`;
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const filterBookings = () => {
    return bookings.filter((booking) => {
      // Filter by status
      if (filterStatus !== "all" && booking.status !== filterStatus)
        return false;

      // Filter by type
      if (filterType !== "all" && booking.type !== filterType) return false;

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          booking.studentName.toLowerCase().includes(query) ||
          booking.title.toLowerCase().includes(query) ||
          booking.course.toLowerCase().includes(query)
        );
      }

      return true;
    });
  };

  const getBookingsByStatus = (status) => {
    return bookings.filter((booking) => booking.status === status);
  };

  const getTodayBookings = () => {
    const today = new Date().toISOString().split("T")[0];
    return bookings.filter((booking) => booking.date === today);
  };

  const getUpcomingBookings = () => {
    const today = new Date().toISOString().split("T")[0];
    return bookings.filter(
      (booking) =>
        booking.date >= today &&
        booking.status !== "completed" &&
        booking.status !== "cancelled",
    );
  };

  const getPastBookings = () => {
    const today = new Date().toISOString().split("T")[0];
    return bookings.filter(
      (booking) => booking.date < today || booking.status === "completed",
    );
  };

  const getPendingBookings = () => {
    return bookings.filter((booking) => booking.status === "pending");
  };

  // Booking Detail Modal
  const BookingDetailModal = ({ booking, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-3xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
    >
      {/* Header */}
      <div
        className={`bg-gradient-to-r ${
          booking.status === "confirmed"
            ? "from-green-600 to-emerald-600"
            : booking.status === "pending"
              ? "from-yellow-600 to-orange-600"
              : booking.status === "completed"
                ? "from-blue-600 to-indigo-600"
                : "from-red-600 to-pink-600"
        } p-6 sticky top-0 z-10`}
      >
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-white border-2 border-white">
              {booking.studentAvatar}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{booking.title}</h2>
              <p className="text-white/80">with {booking.studentName}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Status Badge */}
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}
          >
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
            {booking.type === "one-on-one" ? "One-on-One" : "Group Session"}
          </span>
          <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
            {booking.course}
          </span>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Date</div>
            <div className="text-white font-semibold flex items-center gap-1">
              <CalendarIcon className="w-4 h-4 text-blue-400" />
              {formatDate(booking.date)}
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Time</div>
            <div className="text-white font-semibold flex items-center gap-1">
              <TimeIcon className="w-4 h-4 text-green-400" />
              {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Duration</div>
            <div className="text-white font-semibold flex items-center gap-1">
              <TimerIcon className="w-4 h-4 text-purple-400" />
              {formatDuration(booking.duration)}
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-3">
            <div className="text-xs text-gray-400 mb-1">Student</div>
            <div className="text-white font-semibold flex items-center gap-1">
              <PersonIcon className="w-4 h-4 text-yellow-400" />
              {booking.studentName}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Description</h3>
          <p className="text-gray-300 bg-gray-800/30 rounded-lg p-4">
            {booking.description}
          </p>
        </div>

        {/* Attendees (for group sessions) */}
        {booking.type === "group" && booking.attendees && (
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              Attendees ({booking.attendees.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {booking.attendees.map((attendee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-800/50 rounded-full pl-1 pr-3 py-1"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                    {attendee.avatar}
                  </div>
                  <span className="text-sm text-white">{attendee.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Meeting Link */}
        {booking.meetingLink && (
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Meeting Link</h3>
            <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-3">
              <VideocamIcon className="text-blue-400 w-5 h-5" />
              <a
                href={booking.meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex-1"
              >
                {booking.meetingLink}
              </a>
              <button
                className="p-1 hover:bg-gray-700 rounded"
                onClick={() => {
                  navigator.clipboard.writeText(booking.meetingLink);
                  toast.success("Meeting link copied to clipboard!");
                }}
              >
                <ContentCopyIcon className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        )}

        {/* Materials */}
        {booking.materials && booking.materials.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Shared Materials
            </h3>
            <div className="space-y-2">
              {booking.materials.map((material, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-800/30 rounded-lg p-3"
                >
                  <DescriptionIcon className="text-gray-400 w-5 h-5" />
                  <a
                    href={material.url}
                    className="text-blue-400 hover:underline flex-1"
                  >
                    {material.name}
                  </a>
                  <button className="p-1 hover:bg-gray-700 rounded">
                    <DownloadIcon className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Questions */}
        {booking.questions && booking.questions.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Questions from Student
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300 bg-gray-800/30 rounded-lg p-4">
              {booking.questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Topics */}
        {booking.topics && booking.topics.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Topics to Cover
            </h3>
            <div className="flex flex-wrap gap-2">
              {booking.topics.map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Teacher Notes */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Your Notes</h3>
          <textarea
            defaultValue={booking.notes || "Add your notes here..."}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
            rows="3"
          ></textarea>
        </div>

        {/* Feedback (for completed sessions) */}
        {booking.feedback && (
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Student Feedback
            </h3>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${i < booking.feedback.rating ? "text-yellow-400" : "text-gray-600"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  {booking.feedback.submittedAt}
                </span>
              </div>
              <p className="text-gray-300">"{booking.feedback.comment}"</p>
            </div>
          </div>
        )}

        {/* Cancellation Reason */}
        {booking.status === "cancelled" && booking.cancellationReason && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <WarningIcon className="text-red-400 w-5 h-5" />
              <h3 className="text-lg font-bold text-white">
                Cancellation Reason
              </h3>
            </div>
            <p className="text-gray-300">{booking.cancellationReason}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
          {booking.status === "confirmed" && (
            <>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <VideocamIcon className="w-4 h-4" /> Start Meeting
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                <CheckCircleOutlineIcon className="w-4 h-4" /> Mark as Completed
              </button>
            </>
          )}
          {booking.status === "pending" && (
            <>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
                <CheckCircleOutlineIcon className="w-4 h-4" /> Accept
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2">
                <CancelIcon className="w-4 h-4" /> Decline
              </button>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center gap-2">
                <ScheduleIcon className="w-4 h-4" /> Reschedule
              </button>
            </>
          )}
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2">
            <ChatIcon className="w-4 h-4" /> Message Student
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2">
            <EditIcon className="w-4 h-4" /> Edit Notes
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Create Booking Modal
  const CreateBookingModal = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      course: "",
      maxAttendees: 5,
      price: 0,
    });

    const availableTimeSlots =
      teacherAvailability.workingHours.find(
        (day) =>
          day.day ===
          new Date(selectedDate).toLocaleDateString("en-US", {
            weekday: "long",
          }),
      )?.slots || [];

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              {step === 1
                ? "Select Booking Type"
                : step === 2
                  ? "Select Date & Time"
                  : "Complete Details"}
            </h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > s ? "bg-blue-600" : "bg-gray-800"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Booking Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                Choose Session Type
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {bookingTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type);
                      setFormData((prev) => ({ ...prev, price: type.price }));
                    }}
                    className={`p-4 border rounded-xl cursor-pointer transition-all ${
                      selectedType?.id === type.id
                        ? "border-blue-500 bg-blue-600/10"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{type.icon}</span>
                        <div>
                          <h4 className="text-white font-semibold">
                            {type.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {type.duration} minutes
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-white">
                          ${type.price}
                        </div>
                        <div className="text-xs text-gray-400">per session</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 border rounded-lg text-center transition-colors ${
                          selectedTime === time
                            ? "border-blue-500 bg-blue-600/10 text-blue-400"
                            : "border-gray-700 hover:border-gray-600 text-gray-300"
                        }`}
                      >
                        {formatTime(time)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Session Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="e.g., React Performance Consultation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Description
                </label>
                <textarea
                  rows="4"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Describe what you'll cover in this session..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Related Course (Optional)
                </label>
                <select
                  value={formData.course}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, course: e.target.value }))
                  }
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">General Session</option>
                  <option value="web-dev">Web Development Bootcamp</option>
                  <option value="react">Advanced React & Next.js</option>
                  <option value="node">Node.js Microservices</option>
                </select>
              </div>

              {selectedType?.type === "group" && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Maximum Attendees
                  </label>
                  <input
                    type="number"
                    min="2"
                    max="20"
                    value={formData.maxAttendees}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        maxAttendees: parseInt(e.target.value),
                      }))
                    }
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-3 mt-8 pt-4 border-t border-gray-800">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Back
              </button>
            )}
            <div className="flex-1"></div>
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={
                  (step === 1 && !selectedType) ||
                  (step === 2 && (!selectedDate || !selectedTime))
                }
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => {
                  toast.success("Booking created successfully!");
                  onClose();
                }}
                disabled={!formData.title || !formData.description}
                className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Booking
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  // Availability Modal
  const AvailabilityModal = ({ onClose }) => {
    const [weeklySchedule, setWeeklySchedule] = useState(
      teacherAvailability.workingHours,
    );

    const toggleTimeSlot = (dayIndex, timeSlot) => {
      const newSchedule = [...weeklySchedule];
      const day = { ...newSchedule[dayIndex] };
      const slotIndex = day.slots.indexOf(timeSlot);

      if (slotIndex > -1) {
        day.slots = day.slots.filter((slot) => slot !== timeSlot);
      } else {
        day.slots = [...day.slots, timeSlot].sort();
      }

      newSchedule[dayIndex] = day;
      setWeeklySchedule(newSchedule);
    };

    const timeSlots = [
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ];

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              Set Your Availability
            </h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Timezone */}
          <div className="bg-gray-800/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <LanguageIcon className="text-blue-400 w-5 h-5" />
              <span className="text-white font-semibold">Your Timezone</span>
            </div>
            <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
              <option>America/New_York (Eastern Time)</option>
              <option>America/Chicago (Central Time)</option>
              <option>America/Denver (Mountain Time)</option>
              <option>America/Los_Angeles (Pacific Time)</option>
              <option>Europe/London (GMT)</option>
            </select>
          </div>

          {/* Weekly Schedule */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Weekly Schedule
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-2 text-left text-gray-400 font-medium">
                      Time
                    </th>
                    {days.map((day) => (
                      <th
                        key={day}
                        className="p-2 text-center text-gray-400 font-medium"
                      >
                        {day.slice(0, 3)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.map((time) => (
                    <tr key={time} className="border-t border-gray-800">
                      <td className="p-2 text-white">{formatTime(time)}</td>
                      {days.map((day, dayIndex) => {
                        const daySchedule = weeklySchedule[dayIndex];
                        const isAvailable = daySchedule?.slots.includes(time);
                        return (
                          <td key={day} className="p-2 text-center">
                            <button
                              onClick={() => toggleTimeSlot(dayIndex, time)}
                              className={`w-8 h-8 rounded-lg transition-colors ${
                                isAvailable
                                  ? "bg-green-600/20 text-green-400 border border-green-600"
                                  : "bg-gray-800 text-gray-600 border border-gray-700 hover:bg-gray-700"
                              }`}
                            >
                              {isAvailable ? "✓" : ""}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Buffer Time */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Buffer Time Between Sessions
            </h3>
            <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
              <option value="0">No buffer</option>
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60">1 hour</option>
            </select>
          </div>

          {/* Advanced Booking Settings */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Minimum advance notice
              </label>
              <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="4">4 hours</option>
                <option value="12">12 hours</option>
                <option value="24">24 hours</option>
                <option value="48">48 hours</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Maximum advance booking
              </label>
              <select className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500">
                <option value="7">1 week</option>
                <option value="14">2 weeks</option>
                <option value="30">1 month</option>
                <option value="60">2 months</option>
                <option value="90">3 months</option>
              </select>
            </div>
          </div>

          {/* Exceptions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              Unavailable Dates
            </h3>
            <div className="space-y-2">
              {teacherAvailability.exceptions.map((exception, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-800/30 rounded-lg p-3"
                >
                  <div>
                    <span className="text-white">{exception.date}</span>
                    <span className="text-sm text-gray-400 ml-2">
                      ({exception.reason})
                    </span>
                  </div>
                  <button className="text-red-400 hover:text-red-300">
                    <DeleteIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button className="mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2">
              <AddIcon className="w-4 h-4" /> Add Unavailable Date
            </button>
          </div>

          {/* Save Button */}
          <div className="flex gap-3 pt-4 border-t border-gray-800">
            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700">
              Save Availability
            </button>
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-white">
                Booking<span className="text-purple-400">Management</span>
              </h1>
              <div className="hidden md:flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <EventIcon className="text-purple-400 w-5 h-5" />
                <span className="text-sm text-gray-300">
                  Manage your sessions
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAvailabilityModal(true)}
                className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <ScheduleIcon className="w-4 h-4" />
                <span className="hidden md:inline">Availability</span>
              </button>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 flex items-center gap-2"
              >
                <AddIcon className="w-4 h-4" />
                <span className="hidden md:inline">New Session</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-white">
              {bookingStats.totalBookings}
            </div>
            <div className="text-xs text-gray-400">Total Bookings</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-green-400">
              {bookingStats.confirmed}
            </div>
            <div className="text-xs text-gray-400">Confirmed</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-yellow-400">
              {bookingStats.pending}
            </div>
            <div className="text-xs text-gray-400">Pending</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-blue-400">
              {bookingStats.completed}
            </div>
            <div className="text-xs text-gray-400">Completed</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-white">
              {bookingStats.totalHours}
            </div>
            <div className="text-xs text-gray-400">Hours</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-yellow-400">
              {bookingStats.averageRating}
            </div>
            <div className="text-xs text-gray-400">Rating</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-green-400">
              ${bookingStats.revenueFromBookings}
            </div>
            <div className="text-xs text-gray-400">Revenue</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-purple-400">
              {bookingStats.upcomingThisWeek}
            </div>
            <div className="text-xs text-gray-400">This Week</div>
          </motion.div>
        </motion.div>

        {/* Filters and Search */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by student or session..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
          >
            <option value="all">All Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
          >
            <option value="all">All Types</option>
            <option value="one-on-one">One-on-One</option>
            <option value="group">Group Sessions</option>
          </select>

          <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("calendar")}
              className={`px-3 py-1 rounded-lg flex items-center gap-1 ${
                viewMode === "calendar"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <TodayIcon className="w-4 h-4" />
              <span className="hidden md:inline">Calendar</span>
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`px-3 py-1 rounded-lg flex items-center gap-1 ${
                viewMode === "week"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ViewWeekIcon className="w-4 h-4" />
              <span className="hidden md:inline">Week</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1 rounded-lg flex items-center gap-1 ${
                viewMode === "list"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <ViewAgendaIcon className="w-4 h-4" />
              <span className="hidden md:inline">List</span>
            </button>
          </div>
        </div>

        {/* Today's Schedule Alert */}
        {getTodayBookings().length > 0 && (
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <TodayIcon className="text-blue-400 w-5 h-5" />
              <span className="text-white">
                You have{" "}
                <span className="font-bold text-blue-400">
                  {getTodayBookings().length}
                </span>{" "}
                sessions today
              </span>
            </div>
          </div>
        )}

        {/* Calendar/List View */}
        <div className="space-y-6">
          {/* Upcoming Bookings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection("upcoming")}
            >
              <div className="flex items-center gap-3">
                <EventAvailableIcon className="text-green-400 w-6 h-6" />
                <h3 className="text-lg font-bold text-white">
                  Upcoming Sessions
                </h3>
                <span className="px-2 py-1 bg-green-400/10 text-green-400 rounded-full text-xs">
                  {getUpcomingBookings().length}
                </span>
              </div>
              {expandedSections.upcoming ? (
                <ExpandLessIcon className="text-gray-400" />
              ) : (
                <ExpandMoreIcon className="text-gray-400" />
              )}
            </div>

            {expandedSections.upcoming && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="px-6 pb-6"
              >
                <div className="space-y-3">
                  {getUpcomingBookings().map((booking) => (
                    <div
                      key={booking.id}
                      onClick={() => {
                        setSelectedBooking(booking);
                        setShowBookingModal(true);
                      }}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 cursor-pointer border border-gray-800 hover:border-gray-700 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                          {booking.studentAvatar}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            {booking.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            with {booking.studentName}
                          </p>
                          <div className="flex items-center gap-3 mt-1 text-xs">
                            <span className="flex items-center gap-1 text-gray-400">
                              <CalendarIcon className="w-3 h-3" />
                              {formatDate(booking.date)}
                            </span>
                            <span className="flex items-center gap-1 text-gray-400">
                              <TimeIcon className="w-3 h-3" />
                              {formatTime(booking.startTime)} -{" "}
                              {formatTime(booking.endTime)}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(booking.status)}`}
                            >
                              {booking.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {getTypeIcon(booking.type)}
                        {booking.type === "group" && booking.attendees && (
                          <span className="text-xs text-gray-400">
                            {booking.attendees.length} attendees
                          </span>
                        )}
                        <ChevronRightIcon className="text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Pending Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection("pending")}
            >
              <div className="flex items-center gap-3">
                <PendingIcon className="text-yellow-400 w-6 h-6" />
                <h3 className="text-lg font-bold text-white">
                  Pending Requests
                </h3>
                <span className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs">
                  {getPendingBookings().length}
                </span>
              </div>
              {expandedSections.pending ? (
                <ExpandLessIcon className="text-gray-400" />
              ) : (
                <ExpandMoreIcon className="text-gray-400" />
              )}
            </div>

            {expandedSections.pending && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="px-6 pb-6"
              >
                <div className="space-y-3">
                  {getPendingBookings().map((booking) => (
                    <div
                      key={booking.id}
                      onClick={() => {
                        setSelectedBooking(booking);
                        setShowBookingModal(true);
                      }}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 cursor-pointer border border-gray-800 hover:border-gray-700 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 flex items-center justify-center text-white font-bold">
                          {booking.studentAvatar}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            {booking.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            with {booking.studentName}
                          </p>
                          <div className="flex items-center gap-3 mt-1 text-xs">
                            <span className="flex items-center gap-1 text-gray-400">
                              <CalendarIcon className="w-3 h-3" />
                              {formatDate(booking.date)}
                            </span>
                            <span className="flex items-center gap-1 text-gray-400">
                              <TimeIcon className="w-3 h-3" />
                              {formatTime(booking.startTime)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-1 bg-green-600/20 text-green-400 rounded hover:bg-green-600/30">
                          <CheckCircleOutlineIcon className="w-5 h-5" />
                        </button>
                        <button className="p-1 bg-red-600/20 text-red-400 rounded hover:bg-red-600/30">
                          <CancelIcon className="w-5 h-5" />
                        </button>
                        <ChevronRightIcon className="text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Past Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection("past")}
            >
              <div className="flex items-center gap-3">
                <EventBusyIcon className="text-gray-400 w-6 h-6" />
                <h3 className="text-lg font-bold text-white">Past Sessions</h3>
                <span className="px-2 py-1 bg-gray-400/10 text-gray-400 rounded-full text-xs">
                  {getPastBookings().length}
                </span>
              </div>
              {expandedSections.past ? (
                <ExpandLessIcon className="text-gray-400" />
              ) : (
                <ExpandMoreIcon className="text-gray-400" />
              )}
            </div>

            {expandedSections.past && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="px-6 pb-6"
              >
                <div className="space-y-3">
                  {getPastBookings().map((booking) => (
                    <div
                      key={booking.id}
                      onClick={() => {
                        setSelectedBooking(booking);
                        setShowBookingModal(true);
                      }}
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 cursor-pointer border border-gray-800 hover:border-gray-700 transition-all opacity-75"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white font-bold">
                          {booking.studentAvatar}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">
                            {booking.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            with {booking.studentName}
                          </p>
                          <div className="flex items-center gap-3 mt-1 text-xs">
                            <span className="flex items-center gap-1 text-gray-400">
                              <CalendarIcon className="w-3 h-3" />
                              {formatDate(booking.date)}
                            </span>
                            {booking.feedback && (
                              <span className="flex items-center gap-1 text-yellow-400">
                                <StarIcon className="w-3 h-3" />
                                {booking.feedback.rating}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}
                        >
                          {booking.status}
                        </span>
                        <ChevronRightIcon className="text-gray-400 w-5 h-5" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Popular Times Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-gray-800/30 rounded-xl border border-gray-700 p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUpIcon className="text-purple-400 w-5 h-5" />
            Most Popular Booking Times
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bookingStats.popularTimes.map((item, index) => (
              <div key={index} className="bg-gray-900/50 rounded-lg p-4">
                <div className="text-lg font-bold text-white">
                  {formatTime(item.time)}
                </div>
                <div className="text-sm text-gray-400">
                  {item.bookings} bookings
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{
                      width: `${(item.bookings / bookingStats.popularTimes[0].bookings) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {showBookingModal && selectedBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowBookingModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <BookingDetailModal
                booking={selectedBooking}
                onClose={() => setShowBookingModal(false)}
              />
            </div>
          </motion.div>
        )}

        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCreateModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <CreateBookingModal onClose={() => setShowCreateModal(false)} />
            </div>
          </motion.div>
        )}

        {showAvailabilityModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAvailabilityModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <AvailabilityModal
                onClose={() => setShowAvailabilityModal(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
