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
} from "@mui/icons-material";

export const Instructor = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

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

  // Instructor data
  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Senior Web Development Instructor",
      avatar: "SJ",
      coverImage:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.9,
      students: 15420,
      reviews: 1243,
      experience: "12+ years",
      expertise: ["Web Development", "React", "Node.js", "MongoDB"],
      bio: "Dr. Sarah Johnson is a passionate educator with over 12 years of experience in web development. She holds a Ph.D. in Computer Science and has worked with top tech companies including Google and Microsoft. Her teaching style focuses on practical, project-based learning that prepares students for real-world development.",
      education: [
        {
          degree: "Ph.D. in Computer Science",
          institution: "Stanford University",
          year: "2012",
        },
        {
          degree: "M.S. in Software Engineering",
          institution: "MIT",
          year: "2008",
        },
        {
          degree: "B.S. in Computer Science",
          institution: "UC Berkeley",
          year: "2006",
        },
      ],
      achievements: [
        "Google Certified Professional Developer",
        "Microsoft MVP 2020-2024",
        "Published 15+ research papers",
        'Author of "Modern Web Development"',
      ],
      social: {
        github: "sarahjohnson",
        linkedin: "sarahjohnson",
        twitter: "sarahcodes",
        youtube: "sarahjohnson",
      },
      courses: [
        {
          id: 101,
          title: "Complete Web Development Bootcamp 2024",
          category: "Web Development",
          level: "Beginner",
          students: 8420,
          rating: 4.9,
          price: 499,
          image: "🌐",
          color: "blue",
          description:
            "Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
          lectures: 245,
          duration: "24 weeks",
          badge: "Bestseller",
        },
        {
          id: 102,
          title: "Advanced React & Next.js Masterclass",
          category: "Web Development",
          level: "Advanced",
          students: 5200,
          rating: 4.8,
          price: 599,
          image: "⚛️",
          color: "cyan",
          description:
            "Take your React skills to the next level with advanced patterns, Next.js 14, and server components.",
          lectures: 180,
          duration: "16 weeks",
          badge: "Top Rated",
        },
        {
          id: 103,
          title: "Node.js Microservices Architecture",
          category: "Backend",
          level: "Intermediate",
          students: 3800,
          rating: 4.9,
          price: 549,
          image: "🚀",
          color: "green",
          description:
            "Learn to build scalable microservices with Node.js, Docker, and Kubernetes.",
          lectures: 156,
          duration: "14 weeks",
          badge: "Hot & New",
        },
      ],
      upcomingCourses: [
        {
          id: 201,
          title: "Full-Stack TypeScript with Next.js 14",
          launchDate: "April 2024",
          image: "📘",
          color: "purple",
        },
      ],
      testimonials: [
        {
          id: 301,
          student: "Michael Chen",
          avatar: "MC",
          comment:
            "Dr. Johnson is an exceptional instructor. Her explanations are clear, and the projects are very practical. I landed a job as a full-stack developer after completing her bootcamp!",
          rating: 5,
          course: "Web Development Bootcamp",
          date: "2024-02-15",
        },
        {
          id: 302,
          student: "Emily Rodriguez",
          avatar: "ER",
          comment:
            'The Advanced React course was exactly what I needed to level up my skills. Sarah goes beyond just teaching syntax - she explains the "why" behind everything.',
          rating: 5,
          course: "Advanced React",
          date: "2024-02-10",
        },
      ],
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Data Science & AI Specialist",
      avatar: "MC",
      coverImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.8,
      students: 18920,
      reviews: 2156,
      experience: "15+ years",
      expertise: ["Data Science", "Machine Learning", "Python", "TensorFlow"],
      bio: "Professor Michael Chen has been at the forefront of AI research for over 15 years. As a former lead data scientist at Tesla and a professor at Carnegie Mellon, he brings real-world experience to his teaching.",
      education: [
        {
          degree: "Ph.D. in Artificial Intelligence",
          institution: "MIT",
          year: "2009",
        },
        {
          degree: "M.S. in Statistics",
          institution: "Stanford University",
          year: "2006",
        },
      ],
      achievements: [
        "AI Researcher of the Year 2022",
        "Published 30+ research papers",
        'Author of "Deep Learning in Production"',
        "Google AI Impact Award",
      ],
      social: {
        github: "michaelchen",
        linkedin: "michaelchen",
        twitter: "michaelchen",
      },
      courses: [
        {
          id: 104,
          title: "Data Science & Machine Learning Masterclass",
          category: "Data Science",
          level: "Intermediate",
          students: 12400,
          rating: 4.9,
          price: 599,
          image: "📊",
          color: "purple",
          description:
            "Master Python, SQL, machine learning algorithms, and data visualization.",
          lectures: 312,
          duration: "28 weeks",
          badge: "Bestseller",
        },
        {
          id: 105,
          title: "Deep Learning with TensorFlow",
          category: "AI & ML",
          level: "Advanced",
          students: 6520,
          rating: 4.8,
          price: 649,
          image: "🧠",
          color: "orange",
          description:
            "Build and deploy neural networks, CNNs, RNNs, and transformers.",
          lectures: 198,
          duration: "18 weeks",
          badge: "Advanced",
        },
      ],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Mobile Development Expert",
      avatar: "ER",
      coverImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      rating: 4.9,
      students: 12340,
      reviews: 987,
      experience: "10+ years",
      expertise: ["Flutter", "React Native", "iOS", "Android"],
      bio: "Emily Rodriguez is a mobile development expert who has built apps for Fortune 500 companies. She specializes in cross-platform development and has taught over 12,000 students worldwide.",
      education: [
        {
          degree: "M.S. in Mobile Computing",
          institution: "University of Washington",
          year: "2014",
        },
        {
          degree: "B.S. in Computer Science",
          institution: "UT Austin",
          year: "2012",
        },
      ],
      achievements: [
        "Google Developer Expert for Flutter",
        "Published 5 mobile apps with 1M+ downloads",
        "Speaker at Google I/O 2023",
        "Women in Tech Leadership Award",
      ],
      social: {
        github: "emilyrodriguez",
        linkedin: "emilyrodriguez",
        twitter: "emilycodes",
      },
      courses: [
        {
          id: 106,
          title: "Flutter & Dart: Complete Development Guide",
          category: "Mobile Development",
          level: "Beginner",
          students: 8200,
          rating: 4.9,
          price: 549,
          image: "📱",
          color: "green",
          description:
            "Build beautiful native apps for iOS and Android with Flutter.",
          lectures: 198,
          duration: "20 weeks",
          badge: "Bestseller",
        },
        {
          id: 107,
          title: "React Native: Build Production Apps",
          category: "Mobile Development",
          level: "Intermediate",
          students: 4140,
          rating: 4.8,
          price: 499,
          image: "⚛️",
          color: "blue",
          description:
            "Create cross-platform mobile apps with React Native and Expo.",
          lectures: 167,
          duration: "16 weeks",
          badge: "Top Rated",
        },
      ],
    },
  ];

  // Get modal width class
  const getModalWidthClass = () => {
    if (activeModal === "InstructorDetail") return "w-full max-w-6xl";
    if (activeModal === "course") return "w-full max-w-4xl";
    return "w-full max-w-4xl";
  };

  // Modal variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Modals
  const Modals = {
    InstructorDetail: ({ instructor }) => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`bg-gradient-to-b from-gray-900 to-black rounded-2xl ${getModalWidthClass()} mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto`}
      >
        {/* Cover Image */}
        <div className="h-48 sm:h-64 relative">
          <img
            src={instructor.coverImage}
            alt={instructor.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <button
            onClick={() => setActiveModal(null)}
            className="absolute top-4 right-4 bg-gradient-to-t from-red-500 to-red-700 text-white p-2 rounded-full hover:bg-black/70"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Profile Section */}
        <div className="px-4 sm:px-6 md:px-8 pb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 mb-6">
          
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {instructor.name}
              </h1>
              <p className="text-base sm:text-lg text-blue-400">
                {instructor.title}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <StarIcon className="text-yellow-400 w-5 h-5" />
                  <span className="text-white font-semibold">
                    {instructor.rating}
                  </span>
                  <span className="text-gray-400">
                    ({instructor.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <PeopleIcon className="text-gray-400 w-5 h-5" />
                  <span className="text-white">
                    {instructor.students.toLocaleString()} students
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MenuBookIcon className="text-gray-400 w-5 h-5" />
                  <span className="text-white">
                    {instructor.courses.length} courses
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-800 mb-6 overflow-x-auto">
            <div className="flex gap-6 min-w-max">
              {["overview", "courses", "testimonials", "achievements"].map(
                (tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 font-semibold capitalize transition-colors ${
                      activeTab === tab
                        ? "text-blue-400 border-b-2 border-blue-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === "overview" && (
              <>
                {/* Bio */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    About Me
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {instructor.bio}
                  </p>
                </div>

                {/* Expertise */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Education
                  </h3>
                  <div className="space-y-3">
                    {instructor.education.map((edu, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <SchoolIcon className="text-gray-400 w-5 h-5 mt-0.5" />
                        <div>
                          <p className="text-white font-semibold">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-gray-400">
                            {edu.institution} • {edu.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    Connect with Me
                  </h3>
                  <div className="flex gap-3">
                    {instructor.social.github && (
                      <a
                        href={`https://github.com/${instructor.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    {instructor.social.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${instructor.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {instructor.social.twitter && (
                      <a
                        href={`https://twitter.com/${instructor.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
                      >
                        <TwitterIcon />
                      </a>
                    )}
                    {instructor.social.youtube && (
                      <a
                        href={`https://youtube.com/@${instructor.social.youtube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
                      >
                        <YouTubeIcon />
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}

            {activeTab === "courses" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">
                    Current Courses
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {instructor.courses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer"
                        onClick={() => {
                          setSelectedCourse(course);
                          setActiveModal("course");
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`text-3xl bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}
                          >
                            {course.image}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-white font-semibold line-clamp-1">
                                {course.title}
                              </h4>
                              {course.badge && (
                                <span
                                  className={`px-2 py-0.5 text-xs rounded-full ${
                                    course.badge === "Bestseller"
                                      ? "bg-yellow-500/20 text-yellow-400"
                                      : course.badge === "Top Rated"
                                        ? "bg-purple-500/20 text-purple-400"
                                        : "bg-green-500/20 text-green-400"
                                  }`}
                                >
                                  {course.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                              {course.description}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-gray-400">
                              <span>{course.level}</span>
                              <span>•</span>
                              <span>{course.lectures} lectures</span>
                              <span>•</span>
                              <span>{course.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {instructor.upcomingCourses &&
                  instructor.upcomingCourses.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4">
                        Upcoming Courses
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {instructor.upcomingCourses.map((course) => (
                          <div
                            key={course.id}
                            className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 border-dashed"
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`text-3xl bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 w-12 h-12 rounded-lg flex items-center justify-center opacity-50`}
                              >
                                {course.image}
                              </div>
                              <div>
                                <h4 className="text-white font-semibold">
                                  {course.title}
                                </h4>
                                <p className="text-sm text-green-400">
                                  Launching {course.launchDate}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            )}

            {activeTab === "testimonials" && (
              <div className="space-y-4">
                {instructor.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h4 className="text-white font-semibold">
                            {testimonial.student}
                          </h4>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating
                                    ? "text-yellow-400"
                                    : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">
                          "{testimonial.comment}"
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span>{testimonial.course}</span>
                          <span>•</span>
                          <span>{testimonial.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "achievements" && (
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Achievements & Recognition
                </h3>
                <div className="space-y-3">
                  {instructor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <EmojiEventsIcon className="text-yellow-500 w-5 h-5 mt-0.5" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    ),

    CourseDetail: ({ course }) => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`bg-gradient-to-b from-gray-900 to-black rounded-2xl ${getModalWidthClass()} mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto`}
      >
        <div
          className={`bg-gradient-to-r from-${course.color}-600 to-${course.color}-800 p-6`}
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{course.image}</div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      course.badge === "Bestseller"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : course.badge === "Top Rated"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {course.badge}
                  </span>
                  <span className="text-white/80 text-sm">{course.level}</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {course.title}
                </h2>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="text-white/80 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-300 mb-6">{course.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div>
              <div className="text-xl font-bold text-white">
                {course.students.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400">Students</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">
                {course.rating}
              </div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">
                {course.lectures}
              </div>
              <div className="text-xs text-gray-400">Lectures</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">
                {course.duration}
              </div>
              <div className="text-xs text-gray-400">Duration</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-white">
                ${course.price}
              </span>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700">
              Enroll Now
            </button>
          </div>
        </div>
      </motion.div>
    ),
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-blue-400 font-semibold text-sm mb-6 border border-blue-500/30">
              Teacher
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Learn from{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expert Instructors
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our instructors are industry professionals with years of
              real-world experience. Learn from the best and accelerate your
              career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {instructors.map((instructor) => (
              <motion.div
                key={instructor.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 cursor-pointer group"
                onClick={() => {
                  setSelectedInstructor(instructor);
                  setActiveModal("InstructorDetail");
                  setActiveTab("overview");
                }}
              >
                {/* Cover Image */}
                <div className="h-32 relative">
                  <img
                    src={instructor.coverImage}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                {/* Profile */}
                <div className="px-6 pb-6 mt-12">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-blue-400 mb-3">
                    {instructor.title}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      <span>{instructor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <PeopleIcon className="w-4 h-4" />
                      <span>{instructor.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MenuBookIcon className="w-4 h-4" />
                      <span>{instructor.courses.length}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {instructor.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {instructor.expertise.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

          
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Instructors */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Learn From Our Instructors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <VerifiedIcon className="text-4xl text-blue-400" />,
                title: "Industry Experts",
                description:
                  "All instructors have 10+ years of industry experience",
              },
              {
                icon: <RocketLaunchIcon className="text-4xl text-purple-400" />,
                title: "Real-World Projects",
                description:
                  "Learn through practical, project-based curriculum",
              },
              {
                icon: <GroupsIcon className="text-4xl text-green-400" />,
                title: "1M+ Students",
                description: "Trusted by over a million students worldwide",
              },
              {
                icon: <EmojiEventsIcon className="text-4xl text-yellow-400" />,
                title: "Certified Excellence",
                description: "Award-winning instructors and courses",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              {activeModal === "InstructorDetail" && selectedInstructor && (
                <Modals.InstructorDetail instructor={selectedInstructor} />
              )}
              {activeModal === "course" && selectedCourse && (
                <Modals.CourseDetail course={selectedCourse} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
