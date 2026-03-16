/* eslint-disable no-dupe-keys */
// /* eslint-disable react-hooks/purity */
// /* eslint-disable no-dupe-keys */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import {
//   School as SchoolIcon,
//   Code as CodeIcon,
//   People as PeopleIcon,
//   Star as StarIcon,
//   TrendingUp as TrendingUpIcon,
//   Verified as VerifiedIcon,
//   WhatsApp as WhatsAppIcon,
//   Instagram as InstagramIcon,
//   YouTube as YouTubeIcon,
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   Facebook as FacebookIcon,
//   GitHub as GitHubIcon,
//   ArrowForward as ArrowForwardIcon,
//   CheckCircle as CheckCircleIcon,
//   MenuBook as MenuBookIcon,
//   Speed as SpeedIcon,
//   Security as SecurityIcon,
//   Storage as StorageIcon,
//   Cloud as CloudIcon,
//   Devices as DevicesIcon,
//   Brush as BrushIcon,
//   Timeline as TimelineIcon,
//   Close as CloseIcon,
//   LocationOn as LocationIcon,
//   Email as EmailIcon,
//   Phone as PhoneIcon,
//   Book as BookIcon,
//   Person as PersonIcon,
//   CalendarToday as CalendarIcon,
//   AccessTime as TimeIcon,
//   EmojiEvents as EmojiEventsIcon,
//   RocketLaunch as RocketLaunchIcon,
//   Groups as GroupsIcon,
//   Psychology as PsychologyIcon,
//   Language as LanguageIcon,
//   Handshake as HandshakeIcon,
//   Lightbulb as LightbulbIcon,
//   Favorite as FavoriteIcon,
//   PlayCircle as PlayCircleIcon,
//   Description as DescriptionIcon,
//   Quiz as QuizIcon,
//   Assignment as AssignmentIcon,
//   Download as DownloadIcon,
//   Bookmark as BookmarkIcon,
//   BookmarkBorder as BookmarkBorderIcon,
//   PlayArrow as PlayArrowIcon,
//   Pause as PauseIcon,
//   VolumeUp as VolumeUpIcon,
//   VolumeOff as VolumeOffIcon,
//   Fullscreen as FullscreenIcon,
//   Speed as SpeedIcon1,
//   Subtitles as SubtitlesIcon,
//   Settings as SettingsIcon,
//   KeyboardArrowDown as KeyboardArrowDownIcon,
//   KeyboardArrowUp as KeyboardArrowUpIcon,
//   CheckCircleOutline as CheckCircleOutlineIcon,
//   RadioButtonUnchecked as RadioButtonUncheckedIcon,
//   Lock as LockIcon,
//   LockOpen as LockOpenIcon,
//   Timeline as TimelineIcon1,
//   BarChart as BarChartIcon,
//   Assessment as AssessmentIcon,
//   MenuBook as MenuBookIcon1,
//   OndemandVideo as OndemandVideoIcon,
//   PictureAsPdf as PictureAsPdfIcon,
//   InsertDriveFile as InsertDriveFileIcon,
//   CloudDownload as CloudDownloadIcon,
//   Share as ShareIcon,
//   Forum as ForumIcon,
//   Help as HelpIcon,
//   Announcement as AnnouncementIcon,
//   Grade as GradeIcon,
//   WorkspacePremium as WorkspacePremiumIcon,
//   Downloading as DownloadingIcon,
//   CheckCircle as CheckCircleIcon1,
//   PlayCircleFilled as PlayCircleFilledIcon,
//   PauseCircleFilled as PauseCircleFilledIcon,
//   SkipNext as SkipNextIcon,
//   SkipPrevious as SkipPreviousIcon,
//   Replay as ReplayIcon,
//   VolumeDown as VolumeDownIcon,
//   VolumeUp as VolumeUpIcon1,
//   ClosedCaption as ClosedCaptionIcon,
//   SettingsOverscan as SettingsOverscanIcon,
//   PlaylistPlay as PlaylistPlayIcon,
//   PlaylistAdd as PlaylistAddIcon,
//   PlaylistAddCheck as PlaylistAddCheckIcon,
//   Speed as SpeedIcon2,
//   Forward10 as Forward10Icon,
//   Replay10 as Replay10Icon,
//   TheaterComedy as TheaterComedyIcon,
//   AccessTime,
//   Web,
// } from '@mui/icons-material';

// export const Courses = () => {
//   const [activeModal, setActiveModal] = useState(null);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedLesson, setSelectedLesson] = useState(null);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [bookmarked, setBookmarked] = useState({});
//   const [expandedSections, setExpandedSections] = useState({});
//   const [playingVideo, setPlayingVideo] = useState(null);
//   const [videoProgress, setVideoProgress] = useState({});
//   const [videoVolume, setVideoVolume] = useState(80);
//   const [videoMuted, setVideoMuted] = useState(false);
//   const [videoSpeed, setVideoSpeed] = useState(1);
//   const [captionsEnabled, setCaptionsEnabled] = useState(false);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [notes, setNotes] = useState({});
//   const [noteText, setNoteText] = useState('');
//   const [quizAnswers, setQuizAnswers] = useState({});
//   const [quizResults, setQuizResults] = useState({});
//   const [downloads, setDownloads] = useState({});
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedLevel, setSelectedLevel] = useState('all');
//   const [sortBy, setSortBy] = useState('popular');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     course: '',
//   });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     hover: { 
//       scale: 1.05,
//       y: -10,
//       transition: { duration: 0.3 }
//     }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//     exit: { opacity: 0, scale: 0.8, y: 50 }
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   // Course categories
//   const categories = [
//     { id: 'all', name: 'All Courses', icon: <MenuBookIcon /> },
//     { id: 'web', name: 'Web Development', icon: <CodeIcon /> },
//     { id: 'data', name: 'Data Science', icon: <StorageIcon /> },
//     { id: 'mobile', name: 'Mobile Development', icon: <DevicesIcon /> },
//     { id: 'security', name: 'Cyber Security', icon: <SecurityIcon /> },
//     { id: 'cloud', name: 'Cloud Computing', icon: <CloudIcon /> },
//     { id: 'ai', name: 'AI & ML', icon: <TimelineIcon /> },
//     { id: 'design', name: 'UI/UX Design', icon: <BrushIcon /> },
//   ];

//   // Course levels
//   const levels = [
//     { id: 'all', name: 'All Levels' },
//     { id: 'beginner', name: 'Beginner' },
//     { id: 'intermediate', name: 'Intermediate' },
//     { id: 'advanced', name: 'Advanced' },
//   ];

//   // Sort options
//   const sortOptions = [
//     { id: 'popular', name: 'Most Popular' },
//     { id: 'newest', name: 'Newest' },
//     { id: 'rating', name: 'Highest Rated' },
//     { id: 'price-low', name: 'Price: Low to High' },
//     { id: 'price-high', name: 'Price: High to Low' },
//   ];

//   // Courses data with lessons, notes, quizzes, downloads
//   const coursesData = [
//     {
//       id: 'web-dev-1',
//       title: 'Complete Web Development Bootcamp 2024',
//       instructor: 'Dr. Sarah Johnson',
//       instructorImage: 'SJ',
//       category: 'web',
//       level: 'beginner',
//       language: 'English',
//       subtitles: ['English', 'Spanish', 'French', 'Arabic'],
//       rating: 4.9,
//       students: 15420,
//       price: 499,
//       originalPrice: 999,
//       discount: 50,
//       duration: '24 weeks',
//       totalHours: 168,
//       lectures: 245,
//       quizzes: 28,
//       assignments: 12,
//       downloads: 35,
//       certificate: true,
//       badge: 'Bestseller',
//       badgeColor: 'yellow',
//       image: '🌐',
//       color: 'blue',
//       description: 'Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 15+ real-world projects.',
//       longDescription: 'This comprehensive bootcamp covers everything you need to become a professional web developer. From front-end fundamentals to back-end architecture, you\'ll learn through hands-on projects and real-world scenarios.',
//       whatYoullLearn: [
//         'Build 15+ complete web applications',
//         'Master HTML5, CSS3, and JavaScript ES6+',
//         'Create responsive designs with Flexbox and Grid',
//         'Build dynamic UIs with React.js and Redux',
//         'Develop RESTful APIs with Node.js and Express',
//         'Work with MongoDB and SQL databases',
//         'Implement authentication and authorization',
//         'Deploy applications to cloud platforms',
//         'Version control with Git and GitHub',
//         'Optimize performance and SEO'
//       ],
//       requirements: [
//         'No prior coding experience required',
//         'A computer with internet connection',
//         'Eagerness to learn and build projects'
//       ],
//       targetAudience: [
//         'Complete beginners who want to become web developers',
//         'Aspiring freelancers who want to build websites',
//         'Current developers wanting to expand their skills',
//         'Entrepreneurs who want to build their own products'
//       ],
//       curriculum: [
//         {
//           section: 'Introduction to Web Development',
//           lectures: [
//             { id: '1-1', title: 'Welcome to the Course', duration: '10:30', type: 'video', free: true, completed: false },
//             { id: '1-2', title: 'How the Internet Works', duration: '15:45', type: 'video', free: true, completed: false },
//             { id: '1-3', title: 'Setting Up Your Development Environment', duration: '20:15', type: 'video', free: false, completed: false },
//             { id: '1-4', title: 'Introduction to HTML', duration: '25:30', type: 'video', free: false, completed: false },
//             { id: '1-5', title: 'HTML Quiz', duration: '10', type: 'quiz', questions: 10, free: false, completed: false },
//           ]
//         },
//         {
//           section: 'HTML5 & CSS3 Fundamentals',
//           lectures: [
//             { id: '2-1', title: 'HTML Document Structure', duration: '18:20', type: 'video', free: false, completed: false },
//             { id: '2-2', title: 'Working with Text and Links', duration: '22:15', type: 'video', free: false, completed: false },
//             { id: '2-3', title: 'Images and Media', duration: '19:45', type: 'video', free: false, completed: false },
//             { id: '2-4', title: 'CSS Selectors and Properties', duration: '28:30', type: 'video', free: false, completed: false },
//             { id: '2-5', title: 'Box Model and Layout', duration: '32:10', type: 'video', free: false, completed: false },
//             { id: '2-6', title: 'HTML/CSS Assignment', duration: '60', type: 'assignment', free: false, completed: false },
//           ]
//         },
//         {
//           section: 'JavaScript Essentials',
//           lectures: [
//             { id: '3-1', title: 'JavaScript Basics', duration: '24:15', type: 'video', free: false, completed: false },
//             { id: '3-2', title: 'Functions and Scope', duration: '28:30', type: 'video', free: false, completed: false },
//             { id: '3-3', title: 'Arrays and Objects', duration: '32:45', type: 'video', free: false, completed: false },
//             { id: '3-4', title: 'DOM Manipulation', duration: '35:20', type: 'video', free: false, completed: false },
//             { id: '3-5', title: 'Events and Event Handling', duration: '26:40', type: 'video', free: false, completed: false },
//             { id: '3-6', title: 'JavaScript Quiz', duration: '15', type: 'quiz', questions: 15, free: false, completed: false },
//           ]
//         },
//         {
//           section: 'React.js Mastery',
//           lectures: [
//             { id: '4-1', title: 'React Fundamentals', duration: '32:10', type: 'video', free: false, completed: false },
//             { id: '4-2', title: 'Components and Props', duration: '28:45', type: 'video', free: false, completed: false },
//             { id: '4-3', title: 'State and Lifecycle', duration: '34:20', type: 'video', free: false, completed: false },
//             { id: '4-4', title: 'Hooks Deep Dive', duration: '42:15', type: 'video', free: false, completed: false },
//             { id: '4-5', title: 'Routing with React Router', duration: '26:30', type: 'video', free: false, completed: false },
//           ]
//         }
//       ],
//       notes: [
//         { id: 'note1', lectureId: '1-1', content: 'Introduction to the course structure', timestamp: '12:30' },
//         { id: 'note2', lectureId: '1-2', content: 'The internet is a network of networks', timestamp: '08:15' },
//       ],
//       downloads: [
//         { id: 'dl1', title: 'Course Syllabus', type: 'pdf', size: '2.4 MB' },
//         { id: 'dl2', title: 'HTML Cheat Sheet', type: 'pdf', size: '1.1 MB' },
//         { id: 'dl3', title: 'CSS Reference Guide', type: 'pdf', size: '3.2 MB' },
//         { id: 'dl4', title: 'JavaScript Code Samples', type: 'zip', size: '5.7 MB' },
//         { id: 'dl5', title: 'Project Starter Files', type: 'zip', size: '12.3 MB' },
//       ],
//       resources: [
//         { id: 'res1', title: 'VS Code Setup Guide', type: 'article' },
//         { id: 'res2', title: 'Git Cheat Sheet', type: 'pdf' },
//         { id: 'res3', title: 'Developer Roadmap 2024', type: 'image' },
//       ],
//       discussions: [
//         { id: 'dis1', user: 'Alex Chen', question: 'How do I set up React with Vite?', replies: 5, time: '2 hours ago' },
//         { id: 'dis2', user: 'Maria Garcia', question: 'Best practices for state management?', replies: 8, time: '5 hours ago' },
//       ],
//       announcements: [
//         { id: 'ann1', title: 'New React 19 Features Added', date: '2 days ago' },
//         { id: 'ann2', title: 'Live Q&A Session Next Week', date: '3 days ago' },
//       ]
//     },
//     {
//       id: 'data-science-1',
//       title: 'Data Science & Machine Learning Masterclass',
//       instructor: 'Prof. Michael Chen',
//       instructorImage: 'MC',
//       category: 'data',
//       level: 'intermediate',
//       language: 'English',
//       subtitles: ['English', 'German', 'Japanese'],
//       rating: 4.8,
//       students: 8920,
//       price: 599,
//       originalPrice: 1299,
//       discount: 54,
//       duration: '28 weeks',
//       totalHours: 192,
//       lectures: 312,
//       quizzes: 35,
//       assignments: 18,
//       downloads: 42,
//       certificate: true,
//       badge: 'Hot & New',
//       badgeColor: 'red',
//       image: '📊',
//       color: 'purple',
//       description: 'Master Python, SQL, machine learning algorithms, and data visualization. Build real-world data projects.',
//       longDescription: 'This comprehensive data science program takes you from Python basics to advanced machine learning. Learn to analyze data, build predictive models, and communicate insights effectively.',
//       whatYoullLearn: [
//         'Master Python programming for data science',
//         'Work with NumPy, Pandas, and Matplotlib',
//         'Build machine learning models with scikit-learn',
//         'Create interactive visualizations with Plotly',
//         'Work with SQL and databases',
//         'Implement deep learning with TensorFlow',
//         'Deploy ML models to production',
//         'Build end-to-end data science projects'
//       ],
//       requirements: [
//         'Basic math knowledge',
//         'No programming experience required',
//         'Interest in data and analytics'
//       ],
//       targetAudience: [
//         'Aspiring data scientists',
//         'Analysts wanting to upskill',
//         'Developers interested in AI/ML',
//         'Business professionals wanting data skills'
//       ],
//       curriculum: [
//         {
//           section: 'Python for Data Science',
//           lectures: [
//             { id: '1-1', title: 'Python Basics', duration: '28:30', type: 'video', free: true, completed: false },
//             { id: '1-2', title: 'NumPy Fundamentals', duration: '32:15', type: 'video', free: true, completed: false },
//             { id: '1-3', title: 'Pandas Data Manipulation', duration: '38:20', type: 'video', free: false, completed: false },
//           ]
//         },
//         {
//           section: 'Machine Learning',
//           lectures: [
//             { id: '2-1', title: 'Linear Regression', duration: '42:10', type: 'video', free: false, completed: false },
//             { id: '2-2', title: 'Classification Algorithms', duration: '45:30', type: 'video', free: false, completed: false },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     },
//     {
//       id: 'app-dev-1',
//       title: 'Flutter & React Native: Build Mobile Apps',
//       instructor: 'Emily Rodriguez',
//       instructorImage: 'ER',
//       category: 'mobile',
//       level: 'beginner',
//       language: 'English',
//       subtitles: ['English', 'Spanish'],
//       rating: 4.9,
//       students: 12340,
//       price: 549,
//       originalPrice: 1099,
//       discount: 50,
//       duration: '20 weeks',
//       totalHours: 144,
//       lectures: 198,
//       quizzes: 22,
//       assignments: 14,
//       downloads: 28,
//       certificate: true,
//       badge: 'Bestseller',
//       badgeColor: 'yellow',
//       image: '📱',
//       color: 'green',
//       description: 'Build iOS and Android apps with Flutter and React Native. Publish to App Store and Google Play.',
//       longDescription: 'Learn to build beautiful, performant mobile apps for both iOS and Android using Flutter and React Native. Master state management, APIs, and app store deployment.',
//       whatYoullLearn: [
//         'Build cross-platform apps with Flutter',
//         'Develop native-like apps with React Native',
//         'Manage app state effectively',
//         'Integrate APIs and backend services',
//         'Implement authentication and databases',
//         'Publish apps to App Store and Google Play',
//         'Monetize your applications',
//         'Build 10+ complete mobile apps'
//       ],
//       requirements: [
//         'Basic programming knowledge helpful',
//         'No mobile dev experience needed',
//         'A computer (Mac for iOS development)'
//       ],
//       targetAudience: [
//         'Aspiring mobile app developers',
//         'Web developers wanting to go mobile',
//         'Entrepreneurs with app ideas',
//         'Anyone wanting to build mobile apps'
//       ],
//       curriculum: [
//         {
//           section: 'Flutter Fundamentals',
//           lectures: [
//             { id: '1-1', title: 'Introduction to Flutter', duration: '18:30', type: 'video', free: true, completed: false },
//             { id: '1-2', title: 'Dart Programming Basics', duration: '32:15', type: 'video', free: true, completed: false },
//           ]
//         },
//         {
//           section: 'React Native Basics',
//           lectures: [
//             { id: '2-1', title: 'React Native Setup', duration: '22:10', type: 'video', free: false, completed: false },
//             { id: '2-2', title: 'Components and Navigation', duration: '38:20', type: 'video', free: false, completed: false },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     },
//     {
//       id: 'cybersecurity-1',
//       title: 'Cyber Security Expert: Ethical Hacking & Defense',
//       instructor: 'Dr. James Wilson',
//       instructorImage: 'JW',
//       category: 'security',
//       level: 'intermediate',
//       language: 'English',
//       subtitles: ['English'],
//       rating: 4.7,
//       students: 6540,
//       price: 649,
//       originalPrice: 1499,
//       discount: 57,
//       duration: '26 weeks',
//       totalHours: 184,
//       lectures: 276,
//       quizzes: 32,
//       assignments: 16,
//       downloads: 38,
//       certificate: true,
//       badge: 'Trending',
//       badgeColor: 'blue',
//       image: '🔒',
//       color: 'red',
//       description: 'Master ethical hacking, penetration testing, network security, and incident response.',
//       longDescription: 'Become a certified cybersecurity professional. Learn to identify vulnerabilities, protect networks, and respond to security incidents.',
//       whatYoullLearn: [
//         'Master ethical hacking techniques',
//         'Perform penetration testing',
//         'Secure networks and systems',
//         'Implement encryption and cryptography',
//         'Conduct security audits',
//         'Respond to security incidents',
//         'Prepare for CEH and CISSP certifications',
//         'Build a security career'
//       ],
//       requirements: [
//         'Basic networking knowledge',
//         'Familiarity with operating systems',
//         'Interest in security'
//       ],
//       targetAudience: [
//         'Aspiring security professionals',
//         'IT professionals wanting security skills',
//         'Developers wanting secure coding',
//         'Anyone interested in cybersecurity'
//       ],
//       curriculum: [
//         {
//           section: 'Ethical Hacking Basics',
//           lectures: [
//             { id: '1-1', title: 'Introduction to Ethical Hacking', duration: '25:30', type: 'video', free: true, completed: false },
//             { id: '1-2', title: 'Setting Up Your Lab', duration: '28:15', type: 'video', free: true, completed: false },
//           ]
//         },
//         {
//           section: 'Network Security',
//           lectures: [
//             { id: '2-1', title: 'Network Fundamentals', duration: '32:10', type: 'video', free: false, completed: false },
//             { id: '2-2', title: 'Firewalls and IDS/IPS', duration: '35:20', type: 'video', free: false, completed: false },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     },
//     {
//       id: 'cloud-1',
//       title: 'AWS & Cloud Computing: Complete Guide',
//       instructor: 'Priya Patel',
//       instructorImage: 'PP',
//       category: 'cloud',
//       level: 'intermediate',
//       language: 'English',
//       subtitles: ['English', 'Hindi'],
//       rating: 4.8,
//       students: 7230,
//       price: 599,
//       originalPrice: 1199,
//       discount: 50,
//       duration: '22 weeks',
//       totalHours: 156,
//       lectures: 234,
//       quizzes: 26,
//       assignments: 15,
//       downloads: 32,
//       certificate: true,
//       badge: 'Top Rated',
//       badgeColor: 'purple',
//       image: '☁️',
//       color: 'cyan',
//       description: 'Master AWS, Azure, Google Cloud, Docker, Kubernetes, and DevOps practices.',
//       longDescription: 'Become a cloud expert with hands-on training in all major cloud platforms. Learn to architect, deploy, and manage scalable applications.',
//       whatYoullLearn: [
//         'Master AWS services (EC2, S3, Lambda)',
//         'Work with Azure and Google Cloud',
//         'Implement Docker and Kubernetes',
//         'Build CI/CD pipelines',
//         'Practice Infrastructure as Code',
//         'Design cloud architectures',
//         'Prepare for cloud certifications',
//         'Deploy real-world applications'
//       ],
//       requirements: [
//         'Basic IT knowledge',
//         'No cloud experience required',
//         'Interest in infrastructure'
//       ],
//       targetAudience: [
//         'Aspiring cloud architects',
//         'DevOps engineers',
//         'System administrators',
//         'Developers wanting cloud skills'
//       ],
//       curriculum: [
//         {
//           section: 'AWS Fundamentals',
//           lectures: [
//             { id: '1-1', title: 'Introduction to Cloud Computing', duration: '20:30', type: 'video', free: true, completed: false },
//             { id: '1-2', title: 'AWS Global Infrastructure', duration: '24:15', type: 'video', free: true, completed: false },
//           ]
//         },
//         {
//           section: 'Core AWS Services',
//           lectures: [
//             { id: '2-1', title: 'EC2 and Compute Services', duration: '38:10', type: 'video', free: false, completed: false },
//             { id: '2-2', title: 'S3 and Storage Solutions', duration: '32:20', type: 'video', free: false, completed: false },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     },
//     {
//       id: 'ai-ml-1',
//       title: 'Artificial Intelligence: Deep Learning & Generative AI',
//       instructor: 'Dr. James Wilson',
//       instructorImage: 'JW',
//       category: 'ai',
//       level: 'advanced',
//       language: 'English',
//       subtitles: ['English'],
//       rating: 4.9,
//       students: 4320,
//       price: 699,
//       originalPrice: 1599,
//       discount: 56,
//       duration: '30 weeks',
//       totalHours: 216,
//       lectures: 324,
//       quizzes: 38,
//       assignments: 20,
//       downloads: 45,
//       certificate: true,
//       badge: 'Advanced',
//       badgeColor: 'orange',
//       image: '🧠',
//       color: 'orange',
//       description: 'Master deep learning, neural networks, NLP, computer vision, and generative AI.',
//       longDescription: 'Dive deep into advanced AI concepts. Build neural networks, work with LLMs, and create generative AI applications.',
//       whatYoullLearn: [
//         'Master deep learning with TensorFlow and PyTorch',
//         'Build and train neural networks',
//         'Implement NLP and transformer models',
//         'Work with computer vision',
//         'Create generative AI applications',
//         'Fine-tune large language models',
//         'Deploy AI models to production',
//         'Build cutting-edge AI projects'
//       ],
//       requirements: [
//         'Strong Python skills',
//         'Mathematics background',
//         'Previous ML experience helpful'
//       ],
//       targetAudience: [
//         'Data scientists wanting AI skills',
//         'ML engineers',
//         'AI researchers',
//         'Advanced developers'
//       ],
//       curriculum: [
//         {
//           section: 'Deep Learning Fundamentals',
//           lectures: [
//             { id: '1-1', title: 'Neural Networks Basics', duration: '35:30', type: 'video', free: true, completed: false },
//             { id: '1-2', title: 'Backpropagation Explained', duration: '42:15', type: 'video', free: true, completed: false },
//           ]
//         },
//         {
//           section: 'Advanced Neural Networks',
//           lectures: [
//             { id: '2-1', title: 'Convolutional Neural Networks', duration: '48:10', type: 'video', free: false, completed: false },
//             { id: '2-2', title: 'Recurrent Neural Networks', duration: '45:20', type: 'video', free: false, completed: false },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     }
//   ];

//   // Filter and sort courses
//   const filteredCourses = coursesData
//     .filter(course => {
//       if (selectedCategory !== 'all' && course.category !== selectedCategory) return false;
//       if (selectedLevel !== 'all' && course.level !== selectedLevel) return false;
//       if (searchQuery) {
//         return course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
//       }
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'popular') return b.students - a.students;
//       if (sortBy === 'rating') return b.rating - a.rating;
//       if (sortBy === 'price-low') return a.price - b.price;
//       if (sortBy === 'price-high') return b.price - a.price;
//       return 0;
//     });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast.success(`You've successfully enrolled in ${selectedCourse?.title || 'the course'}! Check your email for details.`);
//     setActiveModal(null);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       message: '',
//       course: '',
//     });
//   };

//   const toggleBookmark = (courseId) => {
//     setBookmarked(prev => ({
//       ...prev,
//       [courseId]: !prev[courseId]
//     }));
//     toast.success(bookmarked[courseId] ? 'Removed from bookmarks' : 'Added to bookmarks');
//   };

//   const toggleSection = (sectionIndex) => {
//     setExpandedSections(prev => ({
//       ...prev,
//       [sectionIndex]: !prev[sectionIndex]
//     }));
//   };

//   const handleVideoPlay = (lectureId) => {
//     setPlayingVideo(lectureId);
//   };

//   const handleVideoPause = () => {
//     setPlayingVideo(null);
//   };

//   const handleVideoProgress = (lectureId, progress) => {
//     setVideoProgress(prev => ({
//       ...prev,
//       [lectureId]: progress
//     }));
//   };

//   const handleNoteSave = (lectureId) => {
//     if (noteText.trim()) {
//       const newNote = {
//         id: Date.now(),
//         lectureId,
//         content: noteText,
//         timestamp: new Date().toLocaleTimeString()
//       };
//       setNotes(prev => ({
//         ...prev,
//         [lectureId]: [...(prev[lectureId] || []), newNote]
//       }));
//       setNoteText('');
//       toast.success('Note saved successfully');
//     }
//   };

//   const handleQuizAnswer = (quizId, questionIndex, answer) => {
//     setQuizAnswers(prev => ({
//       ...prev,
//       [quizId]: {
//         ...prev[quizId],
//         [questionIndex]: answer
//       }
//     }));
//   };

//   const handleQuizSubmit = (quizId) => {
//     // Calculate score (mock implementation)
//     const score = Math.floor(Math.random() * 30) + 70; // Random score between 70-100
//     setQuizResults(prev => ({
//       ...prev,
//       [quizId]: score
//     }));
//     toast.success(`Quiz submitted! Your score: ${score}%`);
//   };

//   const handleDownload = (downloadId, title) => {
//     setDownloads(prev => ({
//       ...prev,
//       [downloadId]: true
//     }));
//     toast.success(`Downloading ${title}...`);
//   };

//   const Modals = {
//     CourseDetail: ({ course }) => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
//       >
//         {/* Course Header */}
//         <div className={`bg-gradient-to-r from-${course.color}-600 to-${course.color}-800 p-8 sticky top-0 z-10`}>
//           <div className="flex justify-between items-start">
//             <div className="flex items-center gap-4">
//               <div className="text-6xl">{course.image}</div>
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <span className={`px-3 py-1 bg-${course.badgeColor}-500/20 text-${course.badgeColor}-400 rounded-full text-xs font-semibold`}>
//                     {course.badge}
//                   </span>
//                   <span className="flex items-center gap-1 text-white">
//                     <StarIcon className="w-4 h-4 text-yellow-400" />
//                     {course.rating} ({course.students.toLocaleString()} students)
//                   </span>
//                 </div>
//                 <h2 className="text-3xl font-bold text-white mb-2">{course.title}</h2>
//                 <p className="text-white/80">{course.description}</p>
//               </div>
//             </div>
//             <button
//               onClick={() => toggleBookmark(course.id)}
//               className="text-white hover:scale-110 transition-transform"
//             >
//               {bookmarked[course.id] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
//             </button>
//           </div>

//           {/* Course Meta */}
//           <div className="flex flex-wrap gap-6 mt-6 text-white">
//             <div className="flex items-center gap-2">
//               <PersonIcon className="w-4 h-4" />
//               <span>Instructor: {course.instructor}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <AccessTimeIcon className="w-4 h-4" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MenuBookIcon className="w-4 h-4" />
//               <span>{course.lectures} lectures</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <LanguageIcon className="w-4 h-4" />
//               <span>{course.language}</span>
//             </div>
//           </div>

//           {/* Price and CTA */}
//           <div className="flex items-center justify-between mt-6">
//             <div>
//               <span className="text-3xl font-bold text-white">${course.price}</span>
//               <span className="text-white/60 line-through ml-2">${course.originalPrice}</span>
//               <span className="ml-2 text-green-400">{course.discount}% off</span>
//             </div>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => {
//                   setSelectedCourse(course);
//                   setActiveModal('enroll');
//                 }}
//                 className="bg-gradient-to-t from-green-600 to-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-300"
//               >
//                 Enroll Now
//               </button>
//               <button
//                 onClick={() => setActiveModal(null)}
//                 className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="border-b border-gray-800">
//           <div className="flex overflow-x-auto">
//             {['overview', 'curriculum', 'notes', 'downloads', 'discussions', 'announcements'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-4 font-semibold capitalize transition-colors ${
//                   activeTab === tab
//                     ? `text-${course.color}-400 border-b-2 border-${course.color}-400`
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="p-6">
//           {activeTab === 'overview' && (
//             <div className="space-y-6">
//               {/* What You'll Learn */}
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
//                 <div className="grid md:grid-cols-2 gap-3">
//                   {course.whatYoullLearn.map((item, index) => (
//                     <div key={index} className="flex items-start gap-2">
//                       <CheckCircleIcon className={`text-${course.color}-400 w-5 h-5 mt-0.5`} />
//                       <span className="text-gray-300">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Requirements */}
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
//                 <ul className="list-disc list-inside text-gray-300 space-y-2">
//                   {course.requirements.map((req, index) => (
//                     <li key={index}>{req}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Target Audience */}
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4">Who This Course Is For</h3>
//                 <ul className="list-disc list-inside text-gray-300 space-y-2">
//                   {course.targetAudience.map((audience, index) => (
//                     <li key={index}>{audience}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}

//           {activeTab === 'curriculum' && (
//             <div>
//               {course.curriculum.map((section, sectionIndex) => (
//                 <div key={sectionIndex} className="mb-4 border border-gray-800 rounded-lg overflow-hidden">
//                   <button
//                     onClick={() => toggleSection(sectionIndex)}
//                     className="w-full bg-gray-800 p-4 flex justify-between items-center hover:bg-gray-700 transition-colors"
//                   >
//                     <div className="flex items-center gap-2">
//                       <MenuBookIcon className="text-blue-400" />
//                       <span className="font-semibold text-white">{section.section}</span>
//                       <span className="text-sm text-gray-400">
//                         ({section.lectures.length} lectures)
//                       </span>
//                     </div>
//                     {expandedSections[sectionIndex] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                   </button>
                  
//                   <AnimatePresence>
//                     {expandedSections[sectionIndex] && (
//                       <motion.div
//                         initial={{ height: 0 }}
//                         animate={{ height: 'auto' }}
//                         exit={{ height: 0 }}
//                         className="overflow-hidden"
//                       >
//                         {section.lectures.map((lecture, lectureIndex) => (
//                           <div
//                             key={lectureIndex}
//                             className="p-4 border-t border-gray-800 hover:bg-gray-800/50 flex items-center justify-between"
//                           >
//                             <div className="flex items-center gap-3">
//                               {lecture.type === 'video' && (
//                                 lecture.free ? <PlayCircleIcon className="text-green-400" /> : <LockIcon className="text-gray-500" />
//                               )}
//                               {lecture.type === 'quiz' && <QuizIcon className="text-purple-400" />}
//                               {lecture.type === 'assignment' && <AssignmentIcon className="text-orange-400" />}
//                               <div>
//                                 <span className="text-white">{lecture.title}</span>
//                                 {lecture.type === 'video' && (
//                                   <span className="text-sm text-gray-400 ml-2">{lecture.duration}</span>
//                                 )}
//                                 {lecture.type === 'quiz' && (
//                                   <span className="text-sm text-gray-400 ml-2">{lecture.questions} questions</span>
//                                 )}
//                               </div>
//                               {lecture.free && (
//                                 <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Free</span>
//                               )}
//                             </div>
//                             {lecture.type === 'video' && (
//                               <button
//                                 onClick={() => {
//                                   setSelectedLesson(lecture);
//                                   setActiveModal('video');
//                                 }}
//                                 className="text-blue-400 hover:text-blue-300"
//                               >
//                                 <PlayArrowIcon />
//                               </button>
//                             )}
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === 'notes' && (
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Your Notes</h3>
//               <div className="space-y-4">
//                 {course.notes.map((note, index) => (
//                   <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
//                     <div className="flex justify-between mb-2">
//                       <span className="text-sm text-blue-400">Lecture {note.lectureId}</span>
//                       <span className="text-xs text-gray-400">{note.timestamp}</span>
//                     </div>
//                     <p className="text-gray-300">{note.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'downloads' && (
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Course Downloads</h3>
//               <div className="grid gap-3">
//                 {course.downloads.map((dl, index) => (
//                   <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       {dl.type === 'pdf' ? <PictureAsPdfIcon className="text-red-400" /> : <InsertDriveFileIcon className="text-blue-400" />}
//                       <div>
//                         <span className="text-white">{dl.title}</span>
//                         <span className="text-sm text-gray-400 ml-2">({dl.size})</span>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => handleDownload(dl.id, dl.title)}
//                       className="text-blue-400 hover:text-blue-300"
//                     >
//                       <CloudDownloadIcon />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'discussions' && (
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Discussions</h3>
//               <div className="space-y-4">
//                 {course.discussions.map((disc, index) => (
//                   <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
//                     <div className="flex justify-between mb-2">
//                       <span className="text-sm text-blue-400">{disc.user}</span>
//                       <span className="text-xs text-gray-400">{disc.time}</span>
//                     </div>
//                     <p className="text-white mb-2">{disc.question}</p>
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm text-gray-400">{disc.replies} replies</span>
//                       <button className="text-blue-400 text-sm hover:underline">Reply</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'announcements' && (
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Announcements</h3>
//               <div className="space-y-4">
//                 {course.announcements.map((ann, index) => (
//                   <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
//                     <div className="flex justify-between mb-2">
//                       <span className="font-semibold text-white">{ann.title}</span>
//                       <span className="text-xs text-gray-400">{ann.date}</span>
//                     </div>
//                     <AnnouncementIcon className="text-blue-400 w-4 h-4" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </motion.div>
//     ),

//     VideoPlayer: ({ lesson }) => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="relative bg-black aspect-video">
//           {/* Video Player Mockup */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <PlayCircleFilledIcon className="text-white/50 text-8xl cursor-pointer hover:text-white/70 transition-colors" />
//               <p className="text-white mt-2">Video Player Demo</p>
//             </div>
//           </div>

//           {/* Video Controls Mockup */}
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
//             <div className="flex items-center gap-4">
//               <button className="text-white hover:text-blue-400">
//                 <PlayArrowIcon />
//               </button>
//               <button className="text-white hover:text-blue-400">
//                 <SkipPreviousIcon />
//               </button>
//               <button className="text-white hover:text-blue-400">
//                 <SkipNextIcon />
//               </button>
//               <div className="flex-1 h-1 bg-gray-600 rounded-full">
//                 <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
//               </div>
//               <span className="text-white text-sm">12:30 / 42:15</span>
//               <button className="text-white hover:text-blue-400">
//                 {videoMuted ? <VolumeOffIcon /> : <VolumeUpIcon1 />}
//               </button>
//               <button className="text-white hover:text-blue-400">
//                 <ClosedCaptionIcon className={captionsEnabled ? 'text-blue-400' : ''} />
//               </button>
//               <button className="text-white hover:text-blue-400">
//                 <SettingsIcon />
//               </button>
//               <button className="text-white hover:text-blue-400">
//                 <FullscreenIcon />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h3 className="text-xl font-bold text-white">{lesson?.title}</h3>
//               <p className="text-gray-400">Duration: {lesson?.duration}</p>
//             </div>
//             <button
//               onClick={() => setActiveModal(null)}
//               className="text-gray-400 hover:text-white"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           {/* Notes Section */}
//           <div className="mt-4">
//             <h4 className="text-lg font-semibold text-white mb-2">Your Notes</h4>
//             <div className="flex gap-2">
//               <textarea
//                 value={noteText}
//                 onChange={(e) => setNoteText(e.target.value)}
//                 placeholder="Take notes while watching..."
//                 className="flex-1 bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows="3"
//               ></textarea>
//               <button
//                 onClick={() => handleNoteSave(lesson?.id)}
//                 className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500"
//               >
//                 Save Note
//               </button>
//             </div>

//             {/* Saved Notes */}
//             {notes[lesson?.id]?.length > 0 && (
//               <div className="mt-4 space-y-2">
//                 {notes[lesson?.id].map((note, index) => (
//                   <div key={note.id} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
//                     <div className="flex justify-between text-sm text-gray-400 mb-1">
//                       <span>Note {index + 1}</span>
//                       <span>{note.timestamp}</span>
//                     </div>
//                     <p className="text-gray-300">{note.content}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     ),

//     Quiz: ({ quiz }) => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-bold text-white">Quiz: {quiz?.title}</h3>
//             <button
//               onClick={() => setActiveModal(null)}
//               className="text-gray-400 hover:text-white"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           <p className="text-gray-400 mb-4">10 questions • 15 minutes</p>

//           {quizResults[quiz?.id] ? (
//             <div className="text-center py-8">
//               <div className="text-5xl font-bold text-green-400 mb-2">{quizResults[quiz?.id]}%</div>
//               <p className="text-gray-300 mb-4">Your Score</p>
//               <button
//                 onClick={() => {
//                   setQuizResults(prev => {
//                     const newResults = {...prev};
//                     delete newResults[quiz?.id];
//                     return newResults;
//                   });
//                 }}
//                 className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500"
//               >
//                 Retake Quiz
//               </button>
//             </div>
//           ) : (
//             <>
//               {/* Mock Quiz Questions */}
//               <div className="space-y-4">
//                 {[1, 2, 3].map((q, index) => (
//                   <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
//                     <p className="text-white mb-2">Question {index + 1}: What is HTML?</p>
//                     <div className="space-y-2">
//                       {['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language'].map((opt, optIndex) => (
//                         <label key={optIndex} className="flex items-center gap-2 text-gray-300">
//                           <input type="radio" name={`q${index}`} className="accent-blue-500" />
//                           {opt}
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => handleQuizSubmit(quiz?.id)}
//                 className="w-full mt-6 bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500"
//               >
//                 Submit Quiz
//               </button>
//             </>
//           )}
//         </div>
//       </motion.div>
//     ),

//     Enroll: ({ course }) => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//       >
//         <div className="flex flex-col lg:flex-row">
//           <div className="lg:w-1/2 bg-gradient-to-t from-blue-600 to-blue-800 p-8 flex items-center justify-center">
//             <div className="text-center text-white">
//               <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
//               <h2 className="text-3xl font-bold mb-4">Enroll in Course</h2>
//               <p className="text-lg mb-2">{course?.title}</p>
//               <p className="text-3xl font-bold mt-4">${course?.price}</p>
//               <p className="text-sm line-through opacity-75">${course?.originalPrice}</p>
//             </div>
//           </div>

//           <div className="lg:w-1/2 p-8 bg-gray-900">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-2xl font-bold text-white">Student Information</h3>
//               <button
//                 onClick={() => setActiveModal(null)}
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <CloseIcon />
//               </button>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//                   required
//                 />
//               </div>
//               <div>
//                 <select
//                   name="payment"
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 >
//                   <option value="">Select Payment Method</option>
//                   <option value="card">Credit/Debit Card</option>
//                   <option value="paypal">PayPal</option>
//                   <option value="bank">Bank Transfer</option>
//                 </select>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg"
//               >
//                 Complete Enrollment
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     )
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden pt-20">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 py-16 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-blue-400 font-semibold text-sm mb-6 border border-blue-500/30">
//               Our Courses
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               Learn from the Best{' '}
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Coding Courses
//               </span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//               Master in-demand skills with our comprehensive courses. Learn at your own pace with video lectures,
//               hands-on projects, and personalized support.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Search and Filters */}
//       <section className="bg-gradient-to-b from-gray-900 to-black py-8 border-y border-gray-800 sticky top-16 z-40">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//             {/* Search */}
//             <div className="w-full lg:w-96">
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />
//             </div>

//             {/* Filters */}
//             <div className="flex flex-wrap gap-3">
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {categories.map(cat => (
//                   <option key={cat.id} value={cat.id}>{cat.name}</option>
//                 ))}
//               </select>

//               <select
//                 value={selectedLevel}
//                 onChange={(e) => setSelectedLevel(e.target.value)}
//                 className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {levels.map(level => (
//                   <option key={level.id} value={level.id}>{level.name}</option>
//                 ))}
//               </select>

//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {sortOptions.map(option => (
//                   <option key={option.id} value={option.id}>{option.name}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Grid */}
//       <section className="bg-gradient-to-b from-black to-gray-900 py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredCourses.map((course, index) => (
//               <motion.div
//                 key={course.id}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover="hover"
//                 viewport={{ once: true }}
//                 className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
//                 onClick={() => {
//                   setSelectedCourse(course);
//                   setActiveModal('CourseDetail');
//                 }}
//               >
//                 {/* Course Image */}
//                 <div className={`bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 p-6 relative`}>
//                   <div className="text-6xl text-center">{course.image}</div>
//                   {course.badge && (
//                     <span className={`absolute top-4 right-4 px-2 py-1 bg-${course.badgeColor}-500/20 text-${course.badgeColor}-400 rounded-full text-xs font-semibold`}>
//                       {course.badge}
//                     </span>
//                   )}
//                 </div>

//                 {/* Course Info */}
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-2">
//                     <span className={`text-${course.color}-400 text-sm font-semibold`}>
//                       {categories.find(c => c.id === course.category)?.name}
//                     </span>
//                     <span className="text-gray-500">•</span>
//                     <span className="text-gray-400 text-sm">{course.level}</span>
//                   </div>

//                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                     {course.title}
//                   </h3>

//                   <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

//                   {/* Instructor */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-${course.color}-500 to-${course.color}-600 flex items-center justify-center text-xs text-white font-bold`}>
//                       {course.instructorImage}
//                     </div>
//                     <span className="text-sm text-gray-300">{course.instructor}</span>
//                   </div>

//                   {/* Rating */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <StarIcon key={star} className={`w-4 h-4 ${star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-300">{course.rating}</span>
//                     <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
//                   </div>

//                   {/* Course Stats */}
//                   <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
//                     <div className="flex items-center gap-1">
//                       <MenuBookIcon className="w-4 h-4" />
//                       <span>{course.lectures} lectures</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <AccessTime className="w-4 h-4" />
//                       <span>{course.duration}</span>
//                     </div>
//                   </div>

//                   {/* Price and CTA */}
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <span className="text-2xl font-bold text-white">${course.price}</span>
//                       <span className="text-sm text-gray-400 line-through ml-2">${course.originalPrice}</span>
//                     </div>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedCourse(course);
//                         setActiveModal('enroll');
//                       }}
//                       className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
//                     >
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {filteredCourses.length === 0 && (
//             <div className="text-center py-16">
//               <p className="text-gray-400 text-lg">No courses found matching your criteria.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Learning Path Section */}
//       <section className="bg-gradient-to-b from-gray-900 to-black py-20 border-t border-gray-800">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="text-center max-w-3xl mx-auto mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Choose Your{' '}
//               <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
//                 Learning Path
//               </span>
//             </h2>
//             <p className="text-gray-400 text-lg">
//               Not sure where to start? Choose a curated learning path based on your career goals.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: 'Frontend Developer',
//                 icon: <CodeIcon className="text-blue-400" />,
//                 courses: ['HTML/CSS', 'JavaScript', 'React.js', 'Vue.js'],
//                 duration: '6 months',
//                 jobs: ['Frontend Developer', 'UI Developer', 'Web Designer']
//               },
//               {
//                 title: 'Full Stack Developer',
//                 icon: <Web className="text-purple-400" />,
//                 courses: ['Frontend', 'Backend', 'Databases', 'DevOps'],
//                 duration: '12 months',
//                 jobs: ['Full Stack Developer', 'Software Engineer', 'Technical Lead']
//               },
//               {
//                 title: 'Data Scientist',
//                 icon: <StorageIcon className="text-green-400" />,
//                 courses: ['Python', 'Statistics', 'Machine Learning', 'Deep Learning'],
//                 duration: '10 months',
//                 jobs: ['Data Scientist', 'ML Engineer', 'AI Specialist']
//               }
//             ].map((path, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover="hover"
//                 viewport={{ once: true }}
//                 className="bg-gray-800 rounded-xl p-6 border border-gray-700"
//               >
//                 <div className="text-4xl mb-4">{path.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-2">{path.title}</h3>
//                 <p className="text-sm text-blue-400 mb-4">{path.duration}</p>
//                 <div className="space-y-2 mb-4">
//                   {path.courses.map((course, idx) => (
//                     <div key={idx} className="flex items-center gap-2">
//                       <CheckCircleIcon className="w-4 h-4 text-green-400" />
//                       <span className="text-gray-300 text-sm">{course}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="border-t border-gray-700 pt-4">
//                   <p className="text-sm text-gray-400 mb-2">Career Opportunities:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {path.jobs.map((job, idx) => (
//                       <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
//                         {job}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal Overlay */}
//       <AnimatePresence>
//         {activeModal && (
//           <motion.div
//             variants={overlayVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={() => setActiveModal(null)}
//           >
//             <div onClick={(e) => e.stopPropagation()}>
//               {activeModal === 'CourseDetail' && <Modals.CourseDetail course={selectedCourse} />}
//               {activeModal === 'video' && <Modals.VideoPlayer lesson={selectedLesson} />}
//               {activeModal === 'quiz' && <Modals.Quiz quiz={selectedLesson} />}
//               {activeModal === 'enroll' && <Modals.Enroll course={selectedCourse} />}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };


















// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import {
//   School as SchoolIcon,
//   Code as CodeIcon,
//   People as PeopleIcon,
//   Star as StarIcon,
//   TrendingUp as TrendingUpIcon,
//   Verified as VerifiedIcon,
//   WhatsApp as WhatsAppIcon,
//   Instagram as InstagramIcon,
//   YouTube as YouTubeIcon,
//   LinkedIn as LinkedInIcon,
//   Twitter as TwitterIcon,
//   Facebook as FacebookIcon,
//   GitHub as GitHubIcon,
//   ArrowForward as ArrowForwardIcon,
//   CheckCircle as CheckCircleIcon,
//   MenuBook as MenuBookIcon,
//   Speed as SpeedIcon,
//   Security as SecurityIcon,
//   Storage as StorageIcon,
//   Cloud as CloudIcon,
//   Devices as DevicesIcon,
//   Brush as BrushIcon,
//   Timeline as TimelineIcon,
//   Close as CloseIcon,
//   LocationOn as LocationIcon,
//   Email as EmailIcon,
//   Phone as PhoneIcon,
//   Book as BookIcon,
//   Person as PersonIcon,
//   CalendarToday as CalendarIcon,
//   AccessTime as TimeIcon,
//   EmojiEvents as EmojiEventsIcon,
//   RocketLaunch as RocketLaunchIcon,
//   Groups as GroupsIcon,
//   Psychology as PsychologyIcon,
//   Language as LanguageIcon,
//   Handshake as HandshakeIcon,
//   Lightbulb as LightbulbIcon,
//   Favorite as FavoriteIcon,
//   PlayCircle as PlayCircleIcon,
//   Description as DescriptionIcon,
//   Quiz as QuizIcon,
//   Assignment as AssignmentIcon,
//   Download as DownloadIcon,
//   Bookmark as BookmarkIcon,
//   BookmarkBorder as BookmarkBorderIcon,
//   PlayArrow as PlayArrowIcon,
//   Pause as PauseIcon,
//   VolumeUp as VolumeUpIcon,
//   VolumeOff as VolumeOffIcon,
//   Fullscreen as FullscreenIcon,
//   Speed as SpeedIcon1,
//   Subtitles as SubtitlesIcon,
//   Settings as SettingsIcon,
//   KeyboardArrowDown as KeyboardArrowDownIcon,
//   KeyboardArrowUp as KeyboardArrowUpIcon,
//   CheckCircleOutline as CheckCircleOutlineIcon,
//   RadioButtonUnchecked as RadioButtonUncheckedIcon,
//   Lock as LockIcon,
//   LockOpen as LockOpenIcon,
//   Timeline as TimelineIcon1,
//   BarChart as BarChartIcon,
//   Assessment as AssessmentIcon,
//   MenuBook as MenuBookIcon1,
//   OndemandVideo as OndemandVideoIcon,
//   PictureAsPdf as PictureAsPdfIcon,
//   InsertDriveFile as InsertDriveFileIcon,
//   CloudDownload as CloudDownloadIcon,
//   Share as ShareIcon,
//   Forum as ForumIcon,
//   Help as HelpIcon,
//   Announcement as AnnouncementIcon,
//   Grade as GradeIcon,
//   WorkspacePremium as WorkspacePremiumIcon,
//   Downloading as DownloadingIcon,
//   CheckCircle as CheckCircleIcon1,
//   PlayCircleFilled as PlayCircleFilledIcon,
//   PauseCircleFilled as PauseCircleFilledIcon,
//   SkipNext as SkipNextIcon,
//   SkipPrevious as SkipPreviousIcon,
//   Replay as ReplayIcon,
//   VolumeDown as VolumeDownIcon,
//   VolumeUp as VolumeUpIcon1,
//   ClosedCaption as ClosedCaptionIcon,
//   SettingsOverscan as SettingsOverscanIcon,
//   PlaylistPlay as PlaylistPlayIcon,
//   PlaylistAdd as PlaylistAddIcon,
//   PlaylistAddCheck as PlaylistAddCheckIcon,
//   Speed as SpeedIcon2,
//   Forward10 as Forward10Icon,
//   Replay10 as Replay10Icon,
//   TheaterComedy as TheaterComedyIcon,
//   RadioButtonChecked as RadioButtonCheckedIcon,
//   RadioButtonUnchecked as RadioButtonUncheckedIcon1,
//   CheckBox as CheckBoxIcon,
//   CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
//   FormatListNumbered as FormatListNumberedIcon,
//   Timer as TimerIcon,
//   Refresh as RefreshIcon,
//   Home as HomeIcon,
//   Menu as MenuIcon,
//   Search as SearchIcon,
//   FilterList as FilterListIcon,
//   Sort as SortIcon,
//   ArrowDropDown as ArrowDropDownIcon,
//   ArrowDropUp as ArrowDropUpIcon,
//   Visibility as VisibilityIcon,
//   VisibilityOff as VisibilityOffIcon,
//   FavoriteBorder as FavoriteBorderIcon,
//   Share as ShareIcon1,
//   MoreVert as MoreVertIcon,
//   ExpandMore as ExpandMoreIcon,
//   ExpandLess as ExpandLessIcon,
//   ChevronRight as ChevronRightIcon,
//   ChevronLeft as ChevronLeftIcon,
//   FirstPage as FirstPageIcon,
//   LastPage as LastPageIcon,
//   PlayLesson as PlayLessonIcon,
//   VideoLibrary as VideoLibraryIcon,
//   LibraryBooks as LibraryBooksIcon,
//   QuestionAnswer as QuestionAnswerIcon,
//   Assessment as AssessmentIcon1,
//   Leaderboard as LeaderboardIcon,
//   EmojiEvents as EmojiEventsIcon1,
//   MilitaryTech as MilitaryTechIcon,
//   WorkspacePremium as WorkspacePremiumIcon1,
//   School as SchoolIcon1,
//   AutoStories as AutoStoriesIcon,
//   CastForEducation as CastForEducationIcon,
//   Computer as ComputerIcon,
//   LaptopMac as LaptopMacIcon,
//   DeveloperMode as DeveloperModeIcon,
//   IntegrationInstructions as IntegrationInstructionsIcon,
//   DataArray as DataArrayIcon,
//   DataObject as DataObjectIcon,
//   Javascript as JavascriptIcon,
//   Css as CssIcon,
//   Html as HtmlIcon,
//   Terminal as TerminalIcon,
//   CodeOff as CodeOffIcon,
//   BugReport as BugReportIcon,
//   Science as ScienceIcon,
//   Biotech as BiotechIcon,
//   PrecisionManufacturing as PrecisionManufacturingIcon,
//   SettingsSuggest as SettingsSuggestIcon,
//   AccountTree as AccountTreeIcon,
//   DeviceHub as DeviceHubIcon,
//   Hub as HubIcon,
//   Lan as LanIcon,
//   Wifi as WifiIcon,
//   NetworkCheck as NetworkCheckIcon,
//   Security as SecurityIcon1,
//   Shield as ShieldIcon,
//   LockClock as LockClockIcon,
//   Key as KeyIcon,
//   VpnKey as VpnKeyIcon,
//   Password as PasswordIcon,
//   Fingerprint as FingerprintIcon,
//   Face as FaceIcon,
//   VoiceOverOff as VoiceOverOffIcon,
//   RecordVoiceOver as RecordVoiceOverIcon,
//   Mic as MicIcon,
//   MicOff as MicOffIcon,
//   Videocam as VideocamIcon,
//   VideocamOff as VideocamOffIcon,
//   ScreenShare as ScreenShareIcon,
//   StopScreenShare as StopScreenShareIcon,
//   Cast as CastIcon,
//   CastConnected as CastConnectedIcon,
//   PictureInPicture as PictureInPictureIcon,
//   PictureInPictureAlt as PictureInPictureAltIcon,
//   Hd as HdIcon,
//   Sd as SdIcon,
//   HighQuality as HighQualityIcon,
//   Subtitles as SubtitlesIcon1,
//   ClosedCaption as ClosedCaptionIcon1,
//   AudioFile as AudioFileIcon,
//   VideoFile as VideoFileIcon,
//   Image as ImageIcon,
//   FilePresent as FilePresentIcon,
//   Folder as FolderIcon,
//   FolderOpen as FolderOpenIcon,
//   FolderShared as FolderSharedIcon,
//   CloudUpload as CloudUploadIcon,
//   CloudDownload as CloudDownloadIcon1,
//   CloudDone as CloudDoneIcon,
//   CloudOff as CloudOffIcon,
//   Attachment as AttachmentIcon,
//   Link as LinkIcon,
//   LinkOff as LinkOffIcon,
//   OpenInNew as OpenInNewIcon,
//   OpenInBrowser as OpenInBrowserIcon,
//   Launch as LaunchIcon,
//   ExitToApp as ExitToAppIcon,
//   Login as LoginIcon,
//   Logout as LogoutIcon,
//   AppRegistration as AppRegistrationIcon,
//   HowToReg as HowToRegIcon,
//   PersonAdd as PersonAddIcon,
//   PersonRemove as PersonRemoveIcon,
//   PersonOutline as PersonOutlineIcon,
//   ManageAccounts as ManageAccountsIcon,
//   AccountCircle as AccountCircleIcon,
//   AdminPanelSettings as AdminPanelSettingsIcon,
//   Settings as SettingsIcon1,
//   SettingsApplications as SettingsApplicationsIcon,
//   SettingsInputComponent as SettingsInputComponentIcon,
//   Tune as TuneIcon,
//   FilterAlt as FilterAltIcon,
//   SortByAlpha as SortByAlphaIcon,
//   ViewList as ViewListIcon,
//   ViewModule as ViewModuleIcon,
//   ViewStream as ViewStreamIcon,
//   Dashboard as DashboardIcon,
//   Widgets as WidgetsIcon,
//   Apps as AppsIcon,
//   GridView as GridViewIcon,
//   TableRows as TableRowsIcon,
//   Window as WindowIcon,
//   AccessTime,
// } from '@mui/icons-material';

// export const Courses = () => {
//   const [activeModal, setActiveModal] = useState(null);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [selectedLesson, setSelectedLesson] = useState(null);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [bookmarked, setBookmarked] = useState({});
//   const [expandedSections, setExpandedSections] = useState({});
//   const [playingVideo, setPlayingVideo] = useState(null);
//   const [videoProgress, setVideoProgress] = useState({});
//   const [videoVolume, setVideoVolume] = useState(80);
//   const [videoMuted, setVideoMuted] = useState(false);
//   const [videoSpeed, setVideoSpeed] = useState(1);
//   const [captionsEnabled, setCaptionsEnabled] = useState(false);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [notes, setNotes] = useState({});
//   const [noteText, setNoteText] = useState('');
//   const [currentNoteLecture, setCurrentNoteLecture] = useState(null);
//   const [quizAnswers, setQuizAnswers] = useState({});
//   const [quizResults, setQuizResults] = useState({});
//   const [currentQuiz, setCurrentQuiz] = useState(null);
//   const [quizTimer, setQuizTimer] = useState(0);
//   const [quizActive, setQuizActive] = useState(false);
//   const [downloads, setDownloads] = useState({});
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedLevel, setSelectedLevel] = useState('all');
//   const [sortBy, setSortBy] = useState('popular');
//   const [watchedLectures, setWatchedLectures] = useState({});
//   const [courseProgress, setCourseProgress] = useState({});
//   const [pdfViewer, setPdfViewer] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState('');
//   const [currentPdf, setCurrentPdf] = useState(null);
//   const [enrollmentData, setEnrollmentData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     paymentMethod: 'card',
//     cardNumber: '',
//     cardExpiry: '',
//     cardCvv: '',
//     agreeTerms: false
//   });

//   const videoRef = useRef(null);
//   const playerContainerRef = useRef(null);
//   const quizTimerRef = useRef(null);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.5, ease: "easeOut" }
//     },
//     hover: { 
//       scale: 1.05,
//       y: -10,
//       transition: { duration: 0.3 }
//     }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//     exit: { opacity: 0, scale: 0.8, y: 50 }
//   };

//   const overlayVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   // Course categories
//   const categories = [
//     { id: 'all', name: 'All Courses', icon: <MenuBookIcon /> },
//     { id: 'web', name: 'Web Development', icon: <CodeIcon /> },
//     { id: 'data', name: 'Data Science', icon: <StorageIcon /> },
//     { id: 'mobile', name: 'Mobile Development', icon: <DevicesIcon /> },
//     { id: 'security', name: 'Cyber Security', icon: <SecurityIcon /> },
//     { id: 'cloud', name: 'Cloud Computing', icon: <CloudIcon /> },
//     { id: 'ai', name: 'AI & ML', icon: <TimelineIcon /> },
//     { id: 'design', name: 'UI/UX Design', icon: <BrushIcon /> },
//   ];

//   // Course levels
//   const levels = [
//     { id: 'all', name: 'All Levels' },
//     { id: 'beginner', name: 'Beginner' },
//     { id: 'intermediate', name: 'Intermediate' },
//     { id: 'advanced', name: 'Advanced' },
//   ];

//   // Sort options
//   const sortOptions = [
//     { id: 'popular', name: 'Most Popular' },
//     { id: 'newest', name: 'Newest' },
//     { id: 'rating', name: 'Highest Rated' },
//     { id: 'price-low', name: 'Price: Low to High' },
//     { id: 'price-high', name: 'Price: High to Low' },
//   ];

//   // Courses data with YouTube videos and PDFs
//   const coursesData = [
//     {
//       id: 'web-dev-1',
//       title: 'Complete Web Development Bootcamp 2024',
//       instructor: 'Dr. Sarah Johnson',
//       instructorImage: 'SJ',
//       category: 'web',
//       level: 'beginner',
//       language: 'English',
//       subtitles: ['English', 'Spanish', 'French', 'Arabic'],
//       rating: 4.9,
//       students: 15420,
//       price: 499,
//       originalPrice: 999,
//       discount: 50,
//       duration: '24 weeks',
//       totalHours: 168,
//       lectures: 245,
//       quizzes: 28,
//       assignments: 12,
//       downloads: 35,
//       certificate: true,
//       badge: 'Bestseller',
//       badgeColor: 'yellow',
//       image: '🌐',
//       color: 'blue',
//       description: 'Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 15+ real-world projects.',
//       longDescription: 'This comprehensive bootcamp covers everything you need to become a professional web developer. From front-end fundamentals to back-end architecture, you\'ll learn through hands-on projects and real-world scenarios.',
//       whatYoullLearn: [
//         'Build 15+ complete web applications',
//         'Master HTML5, CSS3, and JavaScript ES6+',
//         'Create responsive designs with Flexbox and Grid',
//         'Build dynamic UIs with React.js and Redux',
//         'Develop RESTful APIs with Node.js and Express',
//         'Work with MongoDB and SQL databases',
//         'Implement authentication and authorization',
//         'Deploy applications to cloud platforms',
//         'Version control with Git and GitHub',
//         'Optimize performance and SEO'
//       ],
//       requirements: [
//         'No prior coding experience required',
//         'A computer with internet connection',
//         'Eagerness to learn and build projects'
//       ],
//       targetAudience: [
//         'Complete beginners who want to become web developers',
//         'Aspiring freelancers who want to build websites',
//         'Current developers wanting to expand their skills',
//         'Entrepreneurs who want to build their own products'
//       ],
//       curriculum: [
//         {
//           section: 'Introduction to Web Development',
//           lectures: [
//             { 
//               id: '1-1', 
//               title: 'Welcome to the Course', 
//               duration: '10:30', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'dGcsHMXbSOA', // Sample YouTube ID
//               description: 'Introduction to the course structure and what you will learn.'
//             },
//             { 
//               id: '1-2', 
//               title: 'How the Internet Works', 
//               duration: '15:45', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'hJHvdBlSxug',
//               description: 'Understanding the basics of how the internet functions.'
//             },
//             { 
//               id: '1-3', 
//               title: 'Setting Up Your Development Environment', 
//               duration: '20:15', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'c2AwTtW3T48',
//               description: 'Install and configure VS Code, Git, and necessary tools.'
//             },
//             { 
//               id: '1-4', 
//               title: 'Introduction to HTML', 
//               duration: '25:30', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'qz0aGYrrlhU',
//               description: 'Learn the basics of HTML structure and elements.'
//             },
//             { 
//               id: '1-5', 
//               title: 'HTML Fundamentals Quiz', 
//               duration: '10', 
//               type: 'quiz', 
//               questions: 10, 
//               free: false, 
//               completed: false,
//               quizData: {
//                 questions: [
//                   {
//                     question: 'What does HTML stand for?',
//                     options: [
//                       'Hyper Text Markup Language',
//                       'High Tech Modern Language',
//                       'Hyper Transfer Markup Language',
//                       'Home Tool Markup Language'
//                     ],
//                     correct: 0
//                   },
//                   {
//                     question: 'Which tag is used for the largest heading?',
//                     options: ['<h1>', '<heading>', '<h6>', '<head>'],
//                     correct: 0
//                   },
//                   {
//                     question: 'What is the correct HTML for creating a hyperlink?',
//                     options: [
//                       '<a href="url">link</a>',
//                       '<link>url</link>',
//                       '<a>url</a>',
//                       '<href>url</href>'
//                     ],
//                     correct: 0
//                   },
//                   {
//                     question: 'Which tag is used for inserting an image?',
//                     options: ['<img>', '<image>', '<src>', '<pic>'],
//                     correct: 0
//                   },
//                   {
//                     question: 'What does CSS stand for?',
//                     options: [
//                       'Cascading Style Sheets',
//                       'Creative Style System',
//                       'Computer Style Sheets',
//                       'Colorful Style Sheets'
//                     ],
//                     correct: 0
//                   }
//                 ]
//               }
//             },
//           ]
//         },
//         {
//           section: 'HTML5 & CSS3 Fundamentals',
//           lectures: [
//             { 
//               id: '2-1', 
//               title: 'HTML Document Structure', 
//               duration: '18:20', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'mJgBOIoGihA',
//               description: 'Understanding proper HTML document structure.'
//             },
//             { 
//               id: '2-2', 
//               title: 'Working with Text and Links', 
//               duration: '22:15', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'V7U0dQGV0RI',
//               description: 'Formatting text and creating links.'
//             },
//             { 
//               id: '2-3', 
//               title: 'Images and Media', 
//               duration: '19:45', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: '0xYMFAYzM9s',
//               description: 'Adding images, audio, and video to web pages.'
//             },
//             { 
//               id: '2-4', 
//               title: 'CSS Selectors and Properties', 
//               duration: '28:30', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: '1PnVor36_40',
//               description: 'Learn CSS selectors and basic properties.'
//             },
//             { 
//               id: '2-5', 
//               title: 'Box Model and Layout', 
//               duration: '32:10', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'rIO5326FgPE',
//               description: 'Understanding the CSS box model and layout techniques.'
//             },
//             { 
//               id: '2-6', 
//               title: 'HTML/CSS Assignment', 
//               duration: '60', 
//               type: 'assignment', 
//               free: false, 
//               completed: false,
//               assignmentData: {
//                 title: 'Build a Personal Portfolio Page',
//                 description: 'Create a personal portfolio page using HTML and CSS.',
//                 instructions: [
//                   'Create an HTML file with proper structure',
//                   'Add a header with your name and navigation',
//                   'Create sections for About, Projects, and Contact',
//                   'Style the page with CSS (colors, fonts, layout)',
//                   'Make it responsive with media queries'
//                 ],
//                 resources: ['HTML Cheat Sheet', 'CSS Reference'],
//                 submissionType: 'github'
//               }
//             },
//           ]
//         },
//         {
//           section: 'JavaScript Essentials',
//           lectures: [
//             { 
//               id: '3-1', 
//               title: 'JavaScript Basics', 
//               duration: '24:15', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'W6NZfCO5SIk',
//               description: 'Introduction to JavaScript syntax and basics.'
//             },
//             { 
//               id: '3-2', 
//               title: 'Functions and Scope', 
//               duration: '28:30', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'N8ap4k_1QEQ',
//               description: 'Understanding functions and variable scope.'
//             },
//             { 
//               id: '3-3', 
//               title: 'Arrays and Objects', 
//               duration: '32:45', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'oigfaZ5ApsM',
//               description: 'Working with arrays and objects in JavaScript.'
//             },
//             { 
//               id: '3-4', 
//               title: 'DOM Manipulation', 
//               duration: '35:20', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: '5fb2aPlgoys',
//               description: 'Manipulating the DOM with JavaScript.'
//             },
//             { 
//               id: '3-5', 
//               title: 'Events and Event Handling', 
//               duration: '26:40', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'YiOlaiscqDY',
//               description: 'Handling user events in JavaScript.'
//             },
//             { 
//               id: '3-6', 
//               title: 'JavaScript Quiz', 
//               duration: '15', 
//               type: 'quiz', 
//               questions: 15, 
//               free: false, 
//               completed: false,
//               quizData: {
//                 questions: [
//                   {
//                     question: 'Which keyword is used to declare a variable in JavaScript?',
//                     options: ['var', 'let', 'const', 'All of the above'],
//                     correct: 3
//                   },
//                   {
//                     question: 'What is the output of 2 + "2" in JavaScript?',
//                     options: ['4', '22', 'Error', 'NaN'],
//                     correct: 1
//                   },
//                   {
//                     question: 'Which method adds elements to the end of an array?',
//                     options: ['push()', 'pop()', 'shift()', 'unshift()'],
//                     correct: 0
//                   },
//                   {
//                     question: 'What does JSON stand for?',
//                     options: [
//                       'JavaScript Object Notation',
//                       'JavaScript Online Network',
//                       'Java Source Object Notation',
//                       'JavaScript Object Naming'
//                     ],
//                     correct: 0
//                   },
//                   {
//                     question: 'Which operator is used for strict equality?',
//                     options: ['==', '===', '=', '!='],
//                     correct: 1
//                   }
//                 ]
//               }
//             },
//           ]
//         },
//         {
//           section: 'React.js Mastery',
//           lectures: [
//             { 
//               id: '4-1', 
//               title: 'React Fundamentals', 
//               duration: '32:10', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'Ke90Tje7VS0',
//               description: 'Introduction to React and its core concepts.'
//             },
//             { 
//               id: '4-2', 
//               title: 'Components and Props', 
//               duration: '28:45', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'Y2hgEGPzTZY',
//               description: 'Creating components and passing props.'
//             },
//             { 
//               id: '4-3', 
//               title: 'State and Lifecycle', 
//               duration: '34:20', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: '4ORZ1GmjaMc',
//               description: 'Managing state and component lifecycle.'
//             },
//             { 
//               id: '4-4', 
//               title: 'Hooks Deep Dive', 
//               duration: '42:15', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'TNhaISOUy6Q',
//               description: 'Understanding React Hooks in depth.'
//             },
//             { 
//               id: '4-5', 
//               title: 'Routing with React Router', 
//               duration: '26:30', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'Ul3y1LXxzdU',
//               description: 'Implementing routing in React applications.'
//             },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [
//         { 
//           id: 'dl1', 
//           title: 'Course Syllabus', 
//           type: 'pdf', 
//           size: '2.4 MB',
//           url: '/pdfs/syllabus.pdf',
//           description: 'Complete course outline and learning objectives'
//         },
//         { 
//           id: 'dl2', 
//           title: 'HTML Cheat Sheet', 
//           type: 'pdf', 
//           size: '1.1 MB',
//           url: '/pdfs/html-cheatsheet.pdf',
//           description: 'Quick reference for HTML tags and attributes'
//         },
//         { 
//           id: 'dl3', 
//           title: 'CSS Reference Guide', 
//           type: 'pdf', 
//           size: '3.2 MB',
//           url: '/pdfs/css-reference.pdf',
//           description: 'Comprehensive CSS properties and values guide'
//         },
//         { 
//           id: 'dl4', 
//           title: 'JavaScript Code Samples', 
//           type: 'zip', 
//           size: '5.7 MB',
//           url: '/downloads/js-samples.zip',
//           description: 'Example JavaScript code and projects'
//         },
//         { 
//           id: 'dl5', 
//           title: 'Project Starter Files', 
//           type: 'zip', 
//           size: '12.3 MB',
//           url: '/downloads/starter-files.zip',
//           description: 'Starter templates for course projects'
//         },
//       ],
//       resources: [
//         { id: 'res1', title: 'VS Code Setup Guide', type: 'article', url: 'https://code.visualstudio.com/docs' },
//         { id: 'res2', title: 'Git Cheat Sheet', type: 'pdf', url: '/pdfs/git-cheatsheet.pdf' },
//         { id: 'res3', title: 'Developer Roadmap 2024', type: 'image', url: '/images/roadmap.png' },
//       ],
//       discussions: [
//         { id: 'dis1', user: 'Alex Chen', question: 'How do I set up React with Vite?', replies: 5, time: '2 hours ago' },
//         { id: 'dis2', user: 'Maria Garcia', question: 'Best practices for state management?', replies: 8, time: '5 hours ago' },
//       ],
//       announcements: [
//         { id: 'ann1', title: 'New React 19 Features Added', date: '2 days ago', content: 'We\'ve updated the React section with the latest features.' },
//         { id: 'ann2', title: 'Live Q&A Session Next Week', date: '3 days ago', content: 'Join us for a live Q&A with the instructor.' },
//       ]
//     },
//     {
//       id: 'data-science-1',
//       title: 'Data Science & Machine Learning Masterclass',
//       instructor: 'Prof. Michael Chen',
//       instructorImage: 'MC',
//       category: 'data',
//       level: 'intermediate',
//       language: 'English',
//       subtitles: ['English', 'German', 'Japanese'],
//       rating: 4.8,
//       students: 8920,
//       price: 599,
//       originalPrice: 1299,
//       discount: 54,
//       duration: '28 weeks',
//       totalHours: 192,
//       lectures: 312,
//       quizzes: 35,
//       assignments: 18,
//       downloads: 42,
//       certificate: true,
//       badge: 'Hot & New',
//       badgeColor: 'red',
//       image: '📊',
//       color: 'purple',
//       description: 'Master Python, SQL, machine learning algorithms, and data visualization. Build real-world data projects.',
//       longDescription: 'This comprehensive data science program takes you from Python basics to advanced machine learning. Learn to analyze data, build predictive models, and communicate insights effectively.',
//       whatYoullLearn: [
//         'Master Python programming for data science',
//         'Work with NumPy, Pandas, and Matplotlib',
//         'Build machine learning models with scikit-learn',
//         'Create interactive visualizations with Plotly',
//         'Work with SQL and databases',
//         'Implement deep learning with TensorFlow',
//         'Deploy ML models to production',
//         'Build end-to-end data science projects'
//       ],
//       requirements: [
//         'Basic math knowledge',
//         'No programming experience required',
//         'Interest in data and analytics'
//       ],
//       targetAudience: [
//         'Aspiring data scientists',
//         'Analysts wanting to upskill',
//         'Developers interested in AI/ML',
//         'Business professionals wanting data skills'
//       ],
//       curriculum: [
//         {
//           section: 'Python for Data Science',
//           lectures: [
//             { 
//               id: '1-1', 
//               title: 'Python Basics', 
//               duration: '28:30', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'YYXdXT2l-Gg',
//               description: 'Introduction to Python programming.'
//             },
//             { 
//               id: '1-2', 
//               title: 'NumPy Fundamentals', 
//               duration: '32:15', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'QUT1VHiLmmI',
//               description: 'Working with NumPy arrays and operations.'
//             },
//             { 
//               id: '1-3', 
//               title: 'Pandas Data Manipulation', 
//               duration: '38:20', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'vmEHCJofslg',
//               description: 'Data manipulation with Pandas DataFrames.'
//             },
//           ]
//         },
//         {
//           section: 'Machine Learning',
//           lectures: [
//             { 
//               id: '2-1', 
//               title: 'Linear Regression', 
//               duration: '42:10', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'CtsRRUddV2s',
//               description: 'Understanding and implementing linear regression.'
//             },
//             { 
//               id: '2-2', 
//               title: 'Classification Algorithms', 
//               duration: '45:30', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'HcqpanDedyQ',
//               description: 'Classification algorithms like logistic regression and decision trees.'
//             },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     },
//     {
//       id: 'app-dev-1',
//       title: 'Flutter & React Native: Build Mobile Apps',
//       instructor: 'Emily Rodriguez',
//       instructorImage: 'ER',
//       category: 'mobile',
//       level: 'beginner',
//       language: 'English',
//       subtitles: ['English', 'Spanish'],
//       rating: 4.9,
//       students: 12340,
//       price: 549,
//       originalPrice: 1099,
//       discount: 50,
//       duration: '20 weeks',
//       totalHours: 144,
//       lectures: 198,
//       quizzes: 22,
//       assignments: 14,
//       downloads: 28,
//       certificate: true,
//       badge: 'Bestseller',
//       badgeColor: 'yellow',
//       image: '📱',
//       color: 'green',
//       description: 'Build iOS and Android apps with Flutter and React Native. Publish to App Store and Google Play.',
//       longDescription: 'Learn to build beautiful, performant mobile apps for both iOS and Android using Flutter and React Native. Master state management, APIs, and app store deployment.',
//       whatYoullLearn: [
//         'Build cross-platform apps with Flutter',
//         'Develop native-like apps with React Native',
//         'Manage app state effectively',
//         'Integrate APIs and backend services',
//         'Implement authentication and databases',
//         'Publish apps to App Store and Google Play',
//         'Monetize your applications',
//         'Build 10+ complete mobile apps'
//       ],
//       requirements: [
//         'Basic programming knowledge helpful',
//         'No mobile dev experience needed',
//         'A computer (Mac for iOS development)'
//       ],
//       targetAudience: [
//         'Aspiring mobile app developers',
//         'Web developers wanting to go mobile',
//         'Entrepreneurs with app ideas',
//         'Anyone wanting to build mobile apps'
//       ],
//       curriculum: [
//         {
//           section: 'Flutter Fundamentals',
//           lectures: [
//             { 
//               id: '1-1', 
//               title: 'Introduction to Flutter', 
//               duration: '18:30', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'fq4N0hgOWzU',
//               description: 'Introduction to Flutter framework.'
//             },
//             { 
//               id: '1-2', 
//               title: 'Dart Programming Basics', 
//               duration: '32:15', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'Ej_Pcr4uC2Q',
//               description: 'Learning Dart programming language.'
//             },
//           ]
//         },
//         {
//           section: 'React Native Basics',
//           lectures: [
//             { 
//               id: '2-1', 
//               title: 'React Native Setup', 
//               duration: '22:10', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: '0-S5a0eXPoc',
//               description: 'Setting up React Native development environment.'
//             },
//             { 
//               id: '2-2', 
//               title: 'Components and Navigation', 
//               duration: '38:20', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: '8N4f4h6S9d0',
//               description: 'Building components and implementing navigation.'
//             },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     },
//     {
//       id: 'cybersecurity-1',
//       title: 'Cyber Security Expert: Ethical Hacking & Defense',
//       instructor: 'Dr. James Wilson',
//       instructorImage: 'JW',
//       category: 'security',
//       level: 'intermediate',
//       language: 'English',
//       subtitles: ['English'],
//       rating: 4.7,
//       students: 6540,
//       price: 649,
//       originalPrice: 1499,
//       discount: 57,
//       duration: '26 weeks',
//       totalHours: 184,
//       lectures: 276,
//       quizzes: 32,
//       assignments: 16,
//       downloads: 38,
//       certificate: true,
//       badge: 'Trending',
//       badgeColor: 'blue',
//       image: '🔒',
//       color: 'red',
//       description: 'Master ethical hacking, penetration testing, network security, and incident response.',
//       longDescription: 'Become a certified cybersecurity professional. Learn to identify vulnerabilities, protect networks, and respond to security incidents.',
//       whatYoullLearn: [
//         'Master ethical hacking techniques',
//         'Perform penetration testing',
//         'Secure networks and systems',
//         'Implement encryption and cryptography',
//         'Conduct security audits',
//         'Respond to security incidents',
//         'Prepare for CEH and CISSP certifications',
//         'Build a security career'
//       ],
//       requirements: [
//         'Basic networking knowledge',
//         'Familiarity with operating systems',
//         'Interest in security'
//       ],
//       targetAudience: [
//         'Aspiring security professionals',
//         'IT professionals wanting security skills',
//         'Developers wanting secure coding',
//         'Anyone interested in cybersecurity'
//       ],
//       curriculum: [
//         {
//           section: 'Ethical Hacking Basics',
//           lectures: [
//             { 
//               id: '1-1', 
//               title: 'Introduction to Ethical Hacking', 
//               duration: '25:30', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'fNzpcB7ODxQ',
//               description: 'Introduction to ethical hacking concepts.'
//             },
//             { 
//               id: '1-2', 
//               title: 'Setting Up Your Lab', 
//               duration: '28:15', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'WfJwE7qo1zI',
//               description: 'Setting up a penetration testing lab.'
//             },
//           ]
//         },
//         {
//           section: 'Network Security',
//           lectures: [
//             { 
//               id: '2-1', 
//               title: 'Network Fundamentals', 
//               duration: '32:10', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'qiQR5rTSshw',
//               description: 'Understanding network protocols and architecture.'
//             },
//             { 
//               id: '2-2', 
//               title: 'Firewalls and IDS/IPS', 
//               duration: '35:20', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'kDEX1HXybrU',
//               description: 'Implementing firewalls and intrusion detection systems.'
//             },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     },
//     {
//       id: 'cloud-1',
//       title: 'AWS & Cloud Computing: Complete Guide',
//       instructor: 'Priya Patel',
//       instructorImage: 'PP',
//       category: 'cloud',
//       level: 'intermediate',
//       language: 'English',
//       subtitles: ['English', 'Hindi'],
//       rating: 4.8,
//       students: 7230,
//       price: 599,
//       originalPrice: 1199,
//       discount: 50,
//       duration: '22 weeks',
//       totalHours: 156,
//       lectures: 234,
//       quizzes: 26,
//       assignments: 15,
//       downloads: 32,
//       certificate: true,
//       badge: 'Top Rated',
//       badgeColor: 'purple',
//       image: '☁️',
//       color: 'cyan',
//       description: 'Master AWS, Azure, Google Cloud, Docker, Kubernetes, and DevOps practices.',
//       longDescription: 'Become a cloud expert with hands-on training in all major cloud platforms. Learn to architect, deploy, and manage scalable applications.',
//       whatYoullLearn: [
//         'Master AWS services (EC2, S3, Lambda)',
//         'Work with Azure and Google Cloud',
//         'Implement Docker and Kubernetes',
//         'Build CI/CD pipelines',
//         'Practice Infrastructure as Code',
//         'Design cloud architectures',
//         'Prepare for cloud certifications',
//         'Deploy real-world applications'
//       ],
//       requirements: [
//         'Basic IT knowledge',
//         'No cloud experience required',
//         'Interest in infrastructure'
//       ],
//       targetAudience: [
//         'Aspiring cloud architects',
//         'DevOps engineers',
//         'System administrators',
//         'Developers wanting cloud skills'
//       ],
//       curriculum: [
//         {
//           section: 'AWS Fundamentals',
//           lectures: [
//             { 
//               id: '1-1', 
//               title: 'Introduction to Cloud Computing', 
//               duration: '20:30', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'M988_fsOSWo',
//               description: 'Introduction to cloud computing concepts.'
//             },
//             { 
//               id: '1-2', 
//               title: 'AWS Global Infrastructure', 
//               duration: '24:15', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'r4YIdn2eTm4',
//               description: 'Understanding AWS global infrastructure.'
//             },
//           ]
//         },
//         {
//           section: 'Core AWS Services',
//           lectures: [
//             { 
//               id: '2-1', 
//               title: 'EC2 and Compute Services', 
//               duration: '38:10', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'lZ00ne8Wj-o',
//               description: 'Working with EC2 instances and compute services.'
//             },
//             { 
//               id: '2-2', 
//               title: 'S3 and Storage Solutions', 
//               duration: '32:20', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: '77lMCiiMilo',
//               description: 'Using S3 for storage and data management.'
//             },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     },
//     {
//       id: 'ai-ml-1',
//       title: 'Artificial Intelligence: Deep Learning & Generative AI',
//       instructor: 'Dr. James Wilson',
//       instructorImage: 'JW',
//       category: 'ai',
//       level: 'advanced',
//       language: 'English',
//       subtitles: ['English'],
//       rating: 4.9,
//       students: 4320,
//       price: 699,
//       originalPrice: 1599,
//       discount: 56,
//       duration: '30 weeks',
//       totalHours: 216,
//       lectures: 324,
//       quizzes: 38,
//       assignments: 20,
//       downloads: 45,
//       certificate: true,
//       badge: 'Advanced',
//       badgeColor: 'orange',
//       image: '🧠',
//       color: 'orange',
//       description: 'Master deep learning, neural networks, NLP, computer vision, and generative AI.',
//       longDescription: 'Dive deep into advanced AI concepts. Build neural networks, work with LLMs, and create generative AI applications.',
//       whatYoullLearn: [
//         'Master deep learning with TensorFlow and PyTorch',
//         'Build and train neural networks',
//         'Implement NLP and transformer models',
//         'Work with computer vision',
//         'Create generative AI applications',
//         'Fine-tune large language models',
//         'Deploy AI models to production',
//         'Build cutting-edge AI projects'
//       ],
//       requirements: [
//         'Strong Python skills',
//         'Mathematics background',
//         'Previous ML experience helpful'
//       ],
//       targetAudience: [
//         'Data scientists wanting AI skills',
//         'ML engineers',
//         'AI researchers',
//         'Advanced developers'
//       ],
//       curriculum: [
//         {
//           section: 'Deep Learning Fundamentals',
//           lectures: [
//             { 
//               id: '1-1', 
//               title: 'Neural Networks Basics', 
//               duration: '35:30', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'aircAruvnKk',
//               description: 'Introduction to neural networks.'
//             },
//             { 
//               id: '1-2', 
//               title: 'Backpropagation Explained', 
//               duration: '42:15', 
//               type: 'video', 
//               free: true, 
//               completed: false,
//               youtubeId: 'Ilg3gGewQ5U',
//               description: 'Understanding backpropagation algorithm.'
//             },
//           ]
//         },
//         {
//           section: 'Advanced Neural Networks',
//           lectures: [
//             { 
//               id: '2-1', 
//               title: 'Convolutional Neural Networks', 
//               duration: '48:10', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'YRhxdVk_sIs',
//               description: 'Building and training CNNs for image tasks.'
//             },
//             { 
//               id: '2-2', 
//               title: 'Recurrent Neural Networks', 
//               duration: '45:20', 
//               type: 'video', 
//               free: false, 
//               completed: false,
//               youtubeId: 'qjrad0V0uJE',
//               description: 'Using RNNs for sequence data.'
//             },
//           ]
//         }
//       ],
//       notes: [],
//       downloads: [],
//       resources: [],
//       discussions: [],
//       announcements: []
//     }
//   ];

//   // Filter and sort courses
//   const filteredCourses = coursesData
//     .filter(course => {
//       if (selectedCategory !== 'all' && course.category !== selectedCategory) return false;
//       if (selectedLevel !== 'all' && course.level !== selectedLevel) return false;
//       if (searchQuery) {
//         return course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
//       }
//       return true;
//     })
//     .sort((a, b) => {
//       if (sortBy === 'popular') return b.students - a.students;
//       if (sortBy === 'rating') return b.rating - a.rating;
//       if (sortBy === 'price-low') return a.price - b.price;
//       if (sortBy === 'price-high') return b.price - a.price;
//       return 0;
//     });

//   // Check if user is enrolled in a course
//   const isEnrolled = (courseId) => {
//     return enrolledCourses.includes(courseId);
//   };

//   // Handle enrollment
//   const handleEnrollment = (course) => {
//     if (!enrollmentData.name || !enrollmentData.email) {
//       toast.error('Please fill in all required fields');
//       return;
//     }

//     // Add to enrolled courses
//     setEnrolledCourses(prev => [...prev, course.id]);
    
//     // Initialize progress
//     setCourseProgress(prev => ({
//       ...prev,
//       [course.id]: {
//         completedLectures: 0,
//         totalLectures: course.lectures,
//         quizzesPassed: 0,
//         assignmentsSubmitted: 0,
//         lastAccessed: new Date().toISOString()
//       }
//     }));

//     toast.success(`Successfully enrolled in ${course.title}!`);
//     setActiveModal(null);
//     setEnrollmentData({
//       name: '',
//       email: '',
//       phone: '',
//       paymentMethod: 'card',
//       cardNumber: '',
//       cardExpiry: '',
//       cardCvv: '',
//       agreeTerms: false
//     });
//   };

//   // Handle video playback
//   const handleVideoPlay = (lecture) => {
//     setPlayingVideo(lecture.id);
    
//     // Mark as watching
//     if (!watchedLectures[lecture.id]) {
//       // Update progress
//     }
//   };

//   const handleVideoProgress = (lectureId, progress) => {
//     setVideoProgress(prev => ({
//       ...prev,
//       [lectureId]: progress
//     }));

//     // If progress > 90%, mark as completed
//     if (progress > 90 && !watchedLectures[lectureId]) {
//       markLectureCompleted(lectureId);
//     }
//   };

//   const markLectureCompleted = (lectureId) => {
//     setWatchedLectures(prev => ({
//       ...prev,
//       [lectureId]: true
//     }));

//     // Update course progress
//     if (selectedCourse) {
//       setCourseProgress(prev => ({
//         ...prev,
//         [selectedCourse.id]: {
//           ...prev[selectedCourse.id],
//           completedLectures: (prev[selectedCourse.id]?.completedLectures || 0) + 1
//         }
//       }));
//     }

//     toast.success('Lecture marked as completed!');
//   };

//   // Handle note taking
//   const handleNoteSave = (lectureId) => {
//     if (noteText.trim()) {
//       const newNote = {
//         id: Date.now(),
//         lectureId,
//         content: noteText,
//         timestamp: new Date().toLocaleTimeString(),
//         videoTimestamp: videoProgress[lectureId] || 0
//       };
      
//       setNotes(prev => ({
//         ...prev,
//         [lectureId]: [...(prev[lectureId] || []), newNote]
//       }));
      
//       setNoteText('');
//       toast.success('Note saved successfully');
//     }
//   };

//   // Handle quiz
//   const startQuiz = (quiz) => {
//     setCurrentQuiz(quiz);
//     setQuizAnswers({});
//     setQuizActive(true);
//     setQuizTimer(quiz.duration ? parseInt(quiz.duration) * 60 : 900); // Default 15 minutes
    
//     // Start timer
//     if (quizTimerRef.current) clearInterval(quizTimerRef.current);
//     quizTimerRef.current = setInterval(() => {
//       setQuizTimer(prev => {
//         if (prev <= 1) {
//           clearInterval(quizTimerRef.current);
//           handleQuizSubmit(quiz.id);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   };

//   const handleQuizAnswer = (quizId, questionIndex, answerIndex) => {
//     setQuizAnswers(prev => ({
//       ...prev,
//       [quizId]: {
//         ...prev[quizId],
//         [questionIndex]: answerIndex
//       }
//     }));
//   };

//   const handleQuizSubmit = (quizId) => {
//     if (quizTimerRef.current) clearInterval(quizTimerRef.current);
    
//     const quiz = currentQuiz;
//     if (!quiz || !quiz.quizData) return;

//     const questions = quiz.quizData.questions;
//     const answers = quizAnswers[quizId] || {};
    
//     let correctCount = 0;
//     questions.forEach((q, index) => {
//       if (answers[index] === q.correct) correctCount++;
//     });

//     const score = Math.round((correctCount / questions.length) * 100);
    
//     setQuizResults(prev => ({
//       ...prev,
//       [quizId]: score
//     }));

//     setQuizActive(false);
    
//     if (score >= 70) {
//       toast.success(`Quiz passed! Score: ${score}%`);
//       // Mark quiz as completed
//       markLectureCompleted(quiz.id);
//     } else {
//       toast.warning(`Quiz failed. Score: ${score}%. You need 70% to pass.`);
//     }
//   };

//   // Handle PDF viewing
//   const openPdf = (pdf) => {
//     setCurrentPdf(pdf);
//     // In a real app, this would open a PDF viewer
//     // For demo, we'll open in new tab
//     window.open(pdf.url, '_blank');
//   };

//   // Handle downloads
//   const handleDownload = (download) => {
//     setDownloads(prev => ({
//       ...prev,
//       [download.id]: true
//     }));
    
//     // Simulate download
//     toast.success(`Downloading ${download.title}...`);
    
//     // In real app, this would trigger actual download
//     setTimeout(() => {
//       toast.success(`${download.title} downloaded successfully!`);
//     }, 2000);
//   };

//   // Format time for quiz timer
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   // Calculate course progress percentage
//   const getCourseProgress = (courseId) => {
//     if (!courseProgress[courseId]) return 0;
//     const progress = courseProgress[courseId];
//     return Math.round((progress.completedLectures / progress.totalLectures) * 100) || 0;
//   };

//   const Modals = {
//     CourseDetail: ({ course }) => (
//       <motion.div
//         variants={modalVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//         className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
//       >
//         {/* Course Header */}
//         <div className={`bg-gradient-to-r from-${course.color}-600 to-${course.color}-800 p-8 sticky top-0 z-10`}>
//           <div className="flex justify-between items-start">
//             <div className="flex items-center gap-4">
//               <div className="text-6xl">{course.image}</div>
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <span className={`px-3 py-1 bg-${course.badgeColor}-500/20 text-${course.badgeColor}-400 rounded-full text-xs font-semibold`}>
//                     {course.badge}
//                   </span>
//                   <span className="flex items-center gap-1 text-white">
//                     <StarIcon className="w-4 h-4 text-yellow-400" />
//                     {course.rating} ({course.students.toLocaleString()} students)
//                   </span>
//                   {isEnrolled(course.id) && (
//                     <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
//                       Enrolled
//                     </span>
//                   )}
//                 </div>
//                 <h2 className="text-3xl font-bold text-white mb-2">{course.title}</h2>
//                 <p className="text-white/80">{course.description}</p>
//               </div>
//             </div>
 
//           </div>

//           {/* Course Meta */}
//           <div className="flex flex-wrap gap-6 mt-6 text-white">
//             <div className="flex items-center gap-2">
//               <PersonIcon className="w-4 h-4" />
//               <span>Instructor: {course.instructor}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <AccessTimeIcon className="w-4 h-4" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MenuBookIcon className="w-4 h-4" />
//               <span>{course.lectures} lectures</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <LanguageIcon className="w-4 h-4" />
//               <span>{course.language}</span>
//             </div>
//             {isEnrolled(course.id) && (
//               <div className="flex items-center gap-2">
//                 <TrendingUpIcon className="w-4 h-4 text-green-400" />
//                 <span className="text-green-400">Progress: {getCourseProgress(course.id)}%</span>
//               </div>
//             )}
//           </div>

//           {/* Price and CTA */}
//           <div className="flex items-center justify-between mt-6">
//             <div>
//               {!isEnrolled(course.id) ? (
//                 <>
//                   <span className="text-3xl font-bold text-white">${course.price}</span>
//                   <span className="text-white/60 line-through ml-2">${course.originalPrice}</span>
//                   <span className="ml-2 text-green-400">{course.discount}% off</span>
//                 </>
//               ) : (
//                 <span className="text-2xl font-bold text-green-400">You're enrolled!</span>
//               )}
//             </div>
//             <div className="flex gap-3">
//               {!isEnrolled(course.id) ? (
//                 <button
//                   onClick={() => {
//                     setSelectedCourse(course);
//                     setActiveModal('enroll');
//                   }}
//                   className="bg-gradient-to-t from-green-600 to-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-300"
//                 >
//                   Enroll Now
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     setSelectedCourse(course);
//                     setActiveModal('learning');
//                   }}
//                   className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
//                 >
//                   Continue Learning
//                 </button>
//               )}
//               <button
//                 onClick={() => setActiveModal(null)}
//                 className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="border-b border-gray-800">
//           <div className="flex overflow-x-auto">
//             {['overview', 'curriculum', 'notes', 'downloads', 'discussions', 'announcements'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-4 font-semibold capitalize transition-colors ${
//                   activeTab === tab
//                     ? `text-${course.color}-400 border-b-2 border-${course.color}-400`
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="p-6">
//           {activeTab === 'overview' && (
//             <div className="space-y-6">
//               {/* What You'll Learn */}
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
//                 <div className="grid md:grid-cols-2 gap-3">
//                   {course.whatYoullLearn.map((item, index) => (
//                     <div key={index} className="flex items-start gap-2">
//                       <CheckCircleIcon className={`text-${course.color}-400 w-5 h-5 mt-0.5`} />
//                       <span className="text-gray-300">{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Requirements */}
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
//                 <ul className="list-disc list-inside text-gray-300 space-y-2">
//                   {course.requirements.map((req, index) => (
//                     <li key={index}>{req}</li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Target Audience */}
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4">Who This Course Is For</h3>
//                 <ul className="list-disc list-inside text-gray-300 space-y-2">
//                   {course.targetAudience.map((audience, index) => (
//                     <li key={index}>{audience}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           )}

//           {activeTab === 'curriculum' && (
//             <div>
//               {course.curriculum.map((section, sectionIndex) => (
//                 <div key={sectionIndex} className="mb-4 border border-gray-800 rounded-lg overflow-hidden">
         
                  
//                   <AnimatePresence>
//                     {expandedSections[sectionIndex] && (
//                       <motion.div
//                         initial={{ height: 0 }}
//                         animate={{ height: 'auto' }}
//                         exit={{ height: 0 }}
//                         className="overflow-hidden"
//                       >
//                         {section.lectures.map((lecture, lectureIndex) => (
//                           <div
//                             key={lectureIndex}
//                             className="p-4 border-t border-gray-800 hover:bg-gray-800/50 flex items-center justify-between"
//                           >
//                             <div className="flex items-center gap-3 flex-1">
//                               {lecture.type === 'video' && (
//                                 lecture.free || isEnrolled(course.id) ? 
//                                   <PlayCircleIcon className="text-green-400" /> : 
//                                   <LockIcon className="text-gray-500" />
//                               )}
//                               {lecture.type === 'quiz' && <QuizIcon className="text-purple-400" />}
//                               {lecture.type === 'assignment' && <AssignmentIcon className="text-orange-400" />}
//                               <div>
//                                 <span className="text-white">{lecture.title}</span>
//                                 {lecture.type === 'video' && (
//                                   <span className="text-sm text-gray-400 ml-2">{lecture.duration}</span>
//                                 )}
//                                 {lecture.type === 'quiz' && (
//                                   <span className="text-sm text-gray-400 ml-2">{lecture.questions} questions</span>
//                                 )}
//                                 {watchedLectures[lecture.id] && (
//                                   <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
//                                     Completed
//                                   </span>
//                                 )}
//                               </div>
//                               {lecture.free && !isEnrolled(course.id) && (
//                                 <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Free</span>
//                               )}
//                             </div>
                            
//                             {(lecture.free || isEnrolled(course.id)) && (
//                               <div className="flex items-center gap-2">
//                                 {lecture.type === 'video' && (
//                                   <button
//                                     onClick={() => {
//                                       setSelectedLesson(lecture);
//                                       setSelectedCourse(course);
//                                       setActiveModal('video');
//                                     }}
//                                     className="text-blue-400 hover:text-blue-300"
//                                   >
//                                     <PlayArrowIcon />
//                                   </button>
//                                 )}
//                                 {lecture.type === 'quiz' && (
//                                   <button
//                                     onClick={() => {
//                                       setSelectedLesson(lecture);
//                                       setCurrentQuiz(lecture);
//                                       setActiveModal('quiz');
//                                     }}
//                                     className="text-purple-400 hover:text-purple-300"
//                                   >
//                                     <QuizIcon />
//                                   </button>
//                                 )}
//                                 {lecture.type === 'assignment' && (
//                                   <button
//                                     onClick={() => {
//                                       setSelectedLesson(lecture);
//                                       setActiveModal('assignment');
//                                     }}
//                                     className="text-orange-400 hover:text-orange-300"
//                                   >
//                                     <AssignmentIcon />
//                                   </button>
//                                 )}
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === 'notes' && (
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Your Notes</h3>
//               <div className="space-y-4">
//                 {Object.keys(notes).length > 0 ? (
//                   Object.entries(notes).map(([lectureId, lectureNotes]) => (
//                     <div key={lectureId} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
//                       <h4 className="text-sm font-semibold text-blue-400 mb-2">
//                         Lecture {lectureId}
//                       </h4>
//                       {lectureNotes.map((note, index) => (
//                         <div key={note.id} className="mb-2 pb-2 border-b border-gray-700 last:border-0">
//                           <div className="flex justify-between text-xs text-gray-400 mb-1">
//                             <span>{note.timestamp}</span>
//                             <span>Video: {Math.round(note.videoTimestamp)}%</span>
//                           </div>
//                           <p className="text-gray-300 text-sm">{note.content}</p>
//                         </div>
//                       ))}
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-400">No notes yet. Start watching and take notes!</p>
//                 )}
//               </div>
//             </div>
//           )}

//           {activeTab === 'downloads' && (
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Course Downloads</h3>
//               <div className="grid gap-3">
//                 {course.downloads.map((dl, index) => (
//                   <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       {dl.type === 'pdf' ? <PictureAsPdfIcon className="text-red-400" /> : <InsertDriveFileIcon className="text-blue-400" />}
//                       <div>
//                         <span className="text-white">{dl.title}</span>
//                         <span className="text-sm text-gray-400 ml-2">({dl.size})</span>
//                         {dl.description && (
//                           <p className="text-xs text-gray-500 mt-1">{dl.description}</p>
//                         )}
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       {dl.type === 'pdf' && (
//                         <button
//                           onClick={() => openPdf(dl)}
//                           className="text-blue-400 hover:text-blue-300"
//                           title="View PDF"
//                         >
//                           <VisibilityIcon />
//                         </button>
//                       )}
//                       <button
//                         onClick={() => handleDownload(dl)}
//                         className="text-green-400 hover:text-green-300"
//                         title="Download"
//                       >
//                         <CloudDownloadIcon />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'discussions' && (
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-bold text-white">Discussions</h3>
//                 {isEnrolled(course.id) && (
//                   <button className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-500">
//                     New Discussion
//                   </button>
//                 )}
//               </div>
//               <div className="space-y-4">
//                 {course.discussions.map((disc, index) => (
//                   <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
//                     <div className="flex justify-between mb-2">
//                       <span className="text-sm text-blue-400">{disc.user}</span>
//                       <span className="text-xs text-gray-400">{disc.time}</span>
//                     </div>
//                     <p className="text-white mb-2">{disc.question}</p>
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm text-gray-400">{disc.replies} replies</span>
//                       <button className="text-blue-400 text-sm hover:underline">Reply</button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'announcements' && (
//             <div>
//               <h3 className="text-xl font-bold text-white mb-4">Announcements</h3>
//               <div className="space-y-4">
//                 {course.announcements.map((ann, index) => (
//                   <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
//                     <div className="flex justify-between mb-2">
//                       <span className="font-semibold text-white">{ann.title}</span>
//                       <span className="text-xs text-gray-400">{ann.date}</span>
//                     </div>
//                     <p className="text-gray-300 text-sm">{ann.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </motion.div>
//     ),

//     VideoPlayer: ({ lesson, course }) => {
//       const [playerReady, setPlayerReady] = useState(false);
//       const [currentTime, setCurrentTime] = useState(0);
//       const [duration, setDuration] = useState(0);
//       const [playbackRate, setPlaybackRate] = useState(1);
//       const [volume, setVolume] = useState(80);
//       const [muted, setMuted] = useState(false);
//       const [fullscreen, setFullscreen] = useState(false);
//       const [showControls, setShowControls] = useState(true);
//       const [captions, setCaptions] = useState(false);
//       const [quality, setQuality] = useState('auto');
//       const [noteText, setNoteText] = useState('');
//       const [lectureNotes, setLectureNotes] = useState([]);
      
//       const playerRef = useRef(null);
//       const controlsTimeoutRef = useRef(null);

//       // Load saved notes for this lecture
//       useEffect(() => {
//         if (notes[lesson?.id]) {
//           setLectureNotes(notes[lesson.id]);
//         }
//       }, [lesson]);

//       // Handle video time update
//       const handleTimeUpdate = () => {
//         if (playerRef.current) {
//           const current = playerRef.current.currentTime;
//           const dur = playerRef.current.duration;
//           setCurrentTime(current);
//           setDuration(dur);
          
//           // Update progress (every 10 seconds)
//           if (Math.floor(current) % 10 === 0) {
//             const progress = (current / dur) * 100;
//             handleVideoProgress(lesson.id, progress);
//           }
//         }
//       };

//       // Handle video end
//       const handleVideoEnded = () => {
//         markLectureCompleted(lesson.id);
//         toast.success('Lecture completed!');
//       };

//       // Handle playback rate change
//       const changePlaybackRate = (rate) => {
//         if (playerRef.current) {
//           playerRef.current.playbackRate = rate;
//           setPlaybackRate(rate);
//         }
//       };

//       // Handle volume change
//       const handleVolumeChange = (e) => {
//         const vol = e.target.value;
//         setVolume(vol);
//         if (playerRef.current) {
//           playerRef.current.volume = vol / 100;
//         }
//         setMuted(vol === 0);
//       };

//       // Toggle mute
//       const toggleMute = () => {
//         if (playerRef.current) {
//           playerRef.current.muted = !muted;
//           setMuted(!muted);
//         }
//       };

//       // Toggle fullscreen
//       const toggleFullscreen = () => {
//         if (!fullscreen) {
//           if (playerContainerRef.current.requestFullscreen) {
//             playerContainerRef.current.requestFullscreen();
//           }
//         } else {
//           if (document.exitFullscreen) {
//             document.exitFullscreen();
//           }
//         }
//         setFullscreen(!fullscreen);
//       };

//       // Seek forward/backward
//       const seek = (seconds) => {
//         if (playerRef.current) {
//           playerRef.current.currentTime += seconds;
//         }
//       };

//       // Format time for display
//       const formatTime = (seconds) => {
//         const hrs = Math.floor(seconds / 3600);
//         const mins = Math.floor((seconds % 3600) / 60);
//         const secs = Math.floor(seconds % 60);
        
//         if (hrs > 0) {
//           return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//         }
//         return `${mins}:${secs.toString().padStart(2, '0')}`;
//       };

//       // Save note for this lecture
//       const saveNote = () => {
//         if (noteText.trim()) {
//           const newNote = {
//             id: Date.now(),
//             content: noteText,
//             timestamp: formatTime(currentTime),
//             timeSeconds: currentTime
//           };
          
//           setLectureNotes(prev => [...prev, newNote]);
//           setNotes(prev => ({
//             ...prev,
//             [lesson.id]: [...(prev[lesson.id] || []), newNote]
//           }));
          
//           setNoteText('');
//           toast.success('Note saved at ' + formatTime(currentTime));
//         }
//       };

//       // Jump to note timestamp
//       const jumpToNote = (timeSeconds) => {
//         if (playerRef.current) {
//           playerRef.current.currentTime = timeSeconds;
//         }
//       };

//       return (
//         <motion.div
//           variants={modalVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//         >
//           <div className="flex flex-col lg:flex-row h-[90vh]">
//             {/* Video Player Section */}
//             <div className="lg:w-3/4 flex flex-col">
//               {/* Video Player */}
//               <div 
//                 ref={playerContainerRef}
//                 className="relative bg-black aspect-video"
//                 onMouseMove={() => {
//                   setShowControls(true);
//                   if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
//                   controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
//                 }}
//                 onMouseLeave={() => setShowControls(false)}
//               >
//                 <iframe
//                   ref={playerRef}
//                   width="100%"
//                   height="100%"
//                   src={`https://www.youtube.com/embed/${lesson.youtubeId}?enablejsapi=1&controls=0&fs=0&modestbranding=1&rel=0`}
//                   title={lesson.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>

//                 {/* Custom Controls */}
//                 <AnimatePresence>
//                   {showControls && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 20 }}
//                       className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4"
//                     >
//                       {/* Progress Bar */}
//                       <div className="mb-4">
//                         <input
//                           type="range"
//                           min="0"
//                           max={duration || 100}
//                           value={currentTime}
//                           onChange={(e) => {
//                             if (playerRef.current) {
//                               playerRef.current.currentTime = e.target.value;
//                             }
//                           }}
//                           className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
//                         />
//                         <div className="flex justify-between text-xs text-white mt-1">
//                           <span>{formatTime(currentTime)}</span>
//                           <span>{formatTime(duration)}</span>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => seek(-10)}
//                             className="text-white hover:text-blue-400 p-1"
//                           >
//                             <Replay10Icon />
//                           </button>
//                           <button
//                             onClick={() => {
//                               if (playerRef.current) {
//                                 if (playerRef.current.paused) {
//                                   playerRef.current.play();
//                                 } else {
//                                   playerRef.current.pause();
//                                 }
//                               }
//                             }}
//                             className="text-white hover:text-blue-400 p-1"
//                           >
//                             {playerRef.current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
//                           </button>
//                           <button
//                             onClick={() => seek(10)}
//                             className="text-white hover:text-blue-400 p-1"
//                           >
//                             <Forward10Icon />
//                           </button>
                          
//                           <div className="flex items-center gap-2 ml-2">
//                             <button onClick={toggleMute} className="text-white hover:text-blue-400">
//                               {muted ? <VolumeOffIcon /> : <VolumeUpIcon1 />}
//                             </button>
//                             <input
//                               type="range"
//                               min="0"
//                               max="100"
//                               value={volume}
//                               onChange={handleVolumeChange}
//                               className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
//                             />
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-2">
//                           {/* Playback Speed */}
//                           <select
//                             value={playbackRate}
//                             onChange={(e) => changePlaybackRate(parseFloat(e.target.value))}
//                             className="bg-gray-800 text-white text-sm rounded px-2 py-1 border border-gray-700"
//                           >
//                             <option value="0.5">0.5x</option>
//                             <option value="1">1x</option>
//                             <option value="1.25">1.25x</option>
//                             <option value="1.5">1.5x</option>
//                             <option value="2">2x</option>
//                           </select>

//                           {/* Quality */}
//                           <select
//                             value={quality}
//                             onChange={(e) => setQuality(e.target.value)}
//                             className="bg-gray-800 text-white text-sm rounded px-2 py-1 border border-gray-700"
//                           >
//                             <option value="auto">Auto</option>
//                             <option value="1080p">1080p</option>
//                             <option value="720p">720p</option>
//                             <option value="480p">480p</option>
//                             <option value="360p">360p</option>
//                           </select>

//                           {/* Captions */}
//                           <button
//                             onClick={() => setCaptions(!captions)}
//                             className={`p-1 ${captions ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
//                           >
//                             <ClosedCaptionIcon />
//                           </button>

//                           {/* Fullscreen */}
//                           <button
//                             onClick={toggleFullscreen}
//                             className="text-white hover:text-blue-400 p-1"
//                           >
//                             <FullscreenIcon />
//                           </button>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Video Info */}
//               <div className="p-4 bg-gray-900">
//                 <h3 className="text-xl font-bold text-white">{lesson.title}</h3>
//                 <p className="text-gray-400 text-sm mt-1">{lesson.description}</p>
                
//                 {/* Mark Complete Button */}
//                 {!watchedLectures[lesson.id] && (
//                   <button
//                     onClick={() => markLectureCompleted(lesson.id)}
//                     className="mt-3 bg-gradient-to-t from-green-600 to-green-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-700 hover:to-green-500"
//                   >
//                     Mark as Completed
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Notes Section */}
//             <div className="lg:w-1/4 bg-gray-900 border-l border-gray-800 flex flex-col">
//               <div className="p-4 border-b border-gray-800">
//                 <h4 className="font-semibold text-white flex items-center gap-2">
//                   <DescriptionIcon className="text-blue-400" />
//                   Lecture Notes
//                 </h4>
//               </div>

//               <div className="flex-1 overflow-y-auto p-4">
//                 {/* Add Note */}
//                 <div className="mb-4">
//                   <textarea
//                     value={noteText}
//                     onChange={(e) => setNoteText(e.target.value)}
//                     placeholder="Take notes at current timestamp..."
//                     className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     rows="3"
//                   ></textarea>
//                   <button
//                     onClick={saveNote}
//                     disabled={!noteText.trim()}
//                     className="w-full mt-2 bg-gradient-to-t from-blue-600 to-blue-400 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Save Note at {formatTime(currentTime)}
//                   </button>
//                 </div>

//                 {/* Notes List */}
//                 <div className="space-y-3">
//                   <h5 className="text-sm font-semibold text-gray-400">Saved Notes</h5>
//                   {lectureNotes.length > 0 ? (
//                     lectureNotes.map((note, index) => (
//                       <div key={note.id} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
//                         <div className="flex justify-between items-start mb-1">
//                           <button
//                             onClick={() => jumpToNote(note.timeSeconds)}
//                             className="text-xs text-blue-400 hover:underline"
//                           >
//                             {note.timestamp}
//                           </button>
//                         </div>
//                         <p className="text-sm text-gray-300">{note.content}</p>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-sm text-gray-500">No notes yet for this lecture.</p>
//                   )}
//                 </div>
//               </div>

//               {/* Close Button */}
//               <div className="p-4 border-t border-gray-800">
//                 <button
//                   onClick={() => setActiveModal(null)}
//                   className="w-full border-2 border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800"
//                 >
//                   Close Player
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       );
//     },

//     Quiz: ({ quiz, course }) => {
//       const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//       const [answers, setAnswers] = useState({});
//       const [showResults, setShowResults] = useState(false);
//       const [score, setScore] = useState(0);
//       const [timeLeft, setTimeLeft] = useState(quiz.duration ? parseInt(quiz.duration) * 60 : 900);
      
//       useEffect(() => {
//         if (!showResults && timeLeft > 0) {
//           const timer = setInterval(() => {
//             setTimeLeft(prev => {
//               if (prev <= 1) {
//                 clearInterval(timer);
//                 handleSubmit();
//                 return 0;
//               }
//               return prev - 1;
//             });
//           }, 1000);
          
//           return () => clearInterval(timer);
//         }
//       }, [showResults]);

//       const questions = quiz.quizData.questions;
      
//       const handleAnswer = (questionIndex, answerIndex) => {
//         setAnswers(prev => ({
//           ...prev,
//           [questionIndex]: answerIndex
//         }));
//       };

//       const handleSubmit = () => {
//         let correctCount = 0;
//         questions.forEach((q, index) => {
//           if (answers[index] === q.correct) correctCount++;
//         });
        
//         const finalScore = Math.round((correctCount / questions.length) * 100);
//         setScore(finalScore);
//         setShowResults(true);
        
//         // Save result
//         setQuizResults(prev => ({
//           ...prev,
//           [quiz.id]: finalScore
//         }));

//         if (finalScore >= 70) {
//           markLectureCompleted(quiz.id);
//         }
//       };

//       const formatTime = (seconds) => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins}:${secs.toString().padStart(2, '0')}`;
//       };

//       return (
//         <motion.div
//           variants={modalVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-3xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//         >
//           <div className="p-6">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h3 className="text-2xl font-bold text-white">{quiz.title}</h3>
//                 <p className="text-gray-400">{questions.length} questions</p>
//               </div>
//               {!showResults && (
//                 <div className="flex items-center gap-2 text-xl font-bold">
//                   <TimerIcon className="text-yellow-400" />
//                   <span className={timeLeft < 300 ? 'text-red-400' : 'text-white'}>
//                     {formatTime(timeLeft)}
//                   </span>
//                 </div>
//               )}
//               <button
//                 onClick={() => setActiveModal(null)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 <CloseIcon />
//               </button>
//             </div>

//             {showResults ? (
//               /* Results */
//               <div className="text-center py-8">
//                 <div className="text-6xl font-bold mb-4">
//                   <span className={score >= 70 ? 'text-green-400' : 'text-red-400'}>
//                     {score}%
//                   </span>
//                 </div>
//                 <p className="text-xl text-white mb-2">
//                   {score >= 70 ? 'Congratulations! You passed!' : 'Keep practicing!'}
//                 </p>
//                 <p className="text-gray-400 mb-6">
//                   You got {Math.round((score / 100) * questions.length)} out of {questions.length} correct
//                 </p>
                
//                 <div className="flex gap-3 justify-center">
//                   <button
//                     onClick={() => {
//                       setCurrentQuestionIndex(0);
//                       setAnswers({});
//                       setShowResults(false);
//                       setTimeLeft(quiz.duration ? parseInt(quiz.duration) * 60 : 900);
//                     }}
//                     className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500"
//                   >
//                     Retry Quiz
//                   </button>
//                   <button
//                     onClick={() => setActiveModal(null)}
//                     className="border-2 border-gray-600 text-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-800"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               /* Quiz Questions */
//               <div>
//                 {/* Progress */}
//                 <div className="mb-6">
//                   <div className="flex justify-between text-sm text-gray-400 mb-2">
//                     <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
//                     <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete</span>
//                   </div>
//                   <div className="w-full h-2 bg-gray-700 rounded-full">
//                     <div 
//                       className="h-full bg-blue-500 rounded-full transition-all"
//                       style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
//                     ></div>
//                   </div>
//                 </div>

//                 {/* Current Question */}
//                 <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
//                   <h4 className="text-lg font-semibold text-white mb-4">
//                     {questions[currentQuestionIndex].question}
//                   </h4>
//                   <div className="space-y-3">
//                     {questions[currentQuestionIndex].options.map((option, optIndex) => (
//                       <label
//                         key={optIndex}
//                         className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
//                           answers[currentQuestionIndex] === optIndex
//                             ? 'bg-blue-600/20 border-blue-500'
//                             : 'bg-gray-700/50 border-gray-600 hover:bg-gray-700'
//                         }`}
//                       >
//                         <input
//                           type="radio"
//                           name={`question-${currentQuestionIndex}`}
//                           value={optIndex}
//                           checked={answers[currentQuestionIndex] === optIndex}
//                           onChange={() => handleAnswer(currentQuestionIndex, optIndex)}
//                           className="hidden"
//                         />
//                         <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
//                           answers[currentQuestionIndex] === optIndex
//                             ? 'border-blue-500 bg-blue-500'
//                             : 'border-gray-400'
//                         }`}>
//                           {answers[currentQuestionIndex] === optIndex && (
//                             <div className="w-2 h-2 rounded-full bg-white"></div>
//                           )}
//                         </div>
//                         <span className="text-gray-300">{option}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Navigation */}
//                 <div className="flex justify-between">
//                   <button
//                     onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
//                     disabled={currentQuestionIndex === 0}
//                     className="px-4 py-2 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Previous
//                   </button>
                  
//                   {currentQuestionIndex === questions.length - 1 ? (
//                     <button
//                       onClick={handleSubmit}
//                       className="bg-gradient-to-t from-green-600 to-green-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-500"
//                     >
//                       Submit Quiz
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
//                       className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500"
//                     >
//                       Next Question
//                     </button>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </motion.div>
//       );
//     },

//     Assignment: ({ assignment, course }) => {
//       const [submission, setSubmission] = useState('');
//       const [githubUrl, setGithubUrl] = useState('');
//       const [files, setFiles] = useState([]);
//       const [submitted, setSubmitted] = useState(false);

//       const handleFileUpload = (e) => {
//         const uploadedFiles = Array.from(e.target.files);
//         setFiles(prev => [...prev, ...uploadedFiles]);
//       };

//       const handleSubmit = () => {
//         // In real app, this would upload to server
//         setSubmitted(true);
//         markLectureCompleted(assignment.id);
//         toast.success('Assignment submitted successfully!');
//       };

//       return (
//         <motion.div
//           variants={modalVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-3xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//         >
//           <div className="p-6">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//               <div>
//                 <h3 className="text-2xl font-bold text-white">{assignment.assignmentData?.title || 'Assignment'}</h3>
//                 <p className="text-gray-400">Course: {course?.title}</p>
//               </div>
//               <button
//                 onClick={() => setActiveModal(null)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 <CloseIcon />
//               </button>
//             </div>

//             {submitted ? (
//               <div className="text-center py-8">
//                 <CheckCircleIcon className="text-6xl text-green-400 mb-4" />
//                 <h4 className="text-xl font-bold text-white mb-2">Assignment Submitted!</h4>
//                 <p className="text-gray-400 mb-6">Your instructor will review your submission.</p>
//                 <button
//                   onClick={() => setActiveModal(null)}
//                   className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold"
//                 >
//                   Close
//                 </button>
//               </div>
//             ) : (
//               <>
//                 {/* Description */}
//                 <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
//                   <h4 className="font-semibold text-white mb-2">Instructions</h4>
//                   <p className="text-gray-300 mb-4">{assignment.assignmentData?.description}</p>
                  
//                   <h5 className="font-semibold text-white mb-2">Steps:</h5>
//                   <ul className="list-disc list-inside space-y-1 mb-4">
//                     {assignment.assignmentData?.instructions.map((inst, idx) => (
//                       <li key={idx} className="text-gray-300 text-sm">{inst}</li>
//                     ))}
//                   </ul>

//                   {assignment.assignmentData?.resources && (
//                     <>
//                       <h5 className="font-semibold text-white mb-2">Resources:</h5>
//                       <div className="flex gap-2">
//                         {assignment.assignmentData.resources.map((res, idx) => (
//                           <span key={idx} className="text-xs bg-gray-700 text-blue-400 px-2 py-1 rounded-full">
//                             {res}
//                           </span>
//                         ))}
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Submission Form */}
//                 <div className="space-y-4">
//                   {assignment.assignmentData?.submissionType === 'github' && (
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-300 mb-2">
//                         GitHub Repository URL
//                       </label>
//                       <input
//                         type="url"
//                         value={githubUrl}
//                         onChange={(e) => setGithubUrl(e.target.value)}
//                         placeholder="https://github.com/username/repo"
//                         className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   )}

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-300 mb-2">
//                       Additional Notes / Comments
//                     </label>
//                     <textarea
//                       value={submission}
//                       onChange={(e) => setSubmission(e.target.value)}
//                       placeholder="Any notes about your submission..."
//                       rows="4"
//                       className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     ></textarea>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-300 mb-2">
//                       Upload Files (optional)
//                     </label>
//                     <input
//                       type="file"
//                       multiple
//                       onChange={handleFileUpload}
//                       className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
//                     />
//                     {files.length > 0 && (
//                       <div className="mt-2 space-y-1">
//                         {files.map((file, idx) => (
//                           <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
//                             <InsertDriveFileIcon className="w-4 h-4" />
//                             <span>{file.name}</span>
//                             <span className="text-xs">({(file.size / 1024).toFixed(2)} KB)</span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   <button
//                     onClick={handleSubmit}
//                     disabled={assignment.assignmentData?.submissionType === 'github' && !githubUrl}
//                     className="w-full bg-gradient-to-t from-green-600 to-green-400 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     Submit Assignment
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </motion.div>
//       );
//     },

//     Enroll: ({ course }) => {
//       const [step, setStep] = useState(1);
//       const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         paymentMethod: 'card',
//         cardNumber: '',
//         cardExpiry: '',
//         cardCvv: '',
//         agreeTerms: false
//       });

//       const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//           ...prev,
//           [name]: type === 'checkbox' ? checked : value
//         }));
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         if (step === 1) {
//           setStep(2);
//         } else {
//           handleEnrollment(course);
//         }
//       };

//       return (
//         <motion.div
//           variants={modalVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
//         >
//           <div className="flex flex-col lg:flex-row">
//             {/* Left side - Course Info */}
//             <div className={`lg:w-1/2 bg-gradient-to-t from-${course.color}-600 to-${course.color}-800 p-8`}>
//               <div className="text-center text-white">
//                 <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
//                 <h2 className="text-3xl font-bold mb-4">Enroll in Course</h2>
//                 <p className="text-xl mb-2">{course.title}</p>
//                 <p className="text-lg opacity-90 mb-4">with {course.instructor}</p>
                
//                 <div className="bg-white/10 rounded-xl p-4 mb-4">
//                   <div className="text-3xl font-bold">${course.price}</div>
//                   <div className="text-sm line-through opacity-75">${course.originalPrice}</div>
//                   <div className="text-green-300 mt-1">{course.discount}% off</div>
//                 </div>

//                 <div className="space-y-2 text-left">
//                   <div className="flex items-center gap-2">
//                     <CheckCircleIcon className="text-green-300 w-5 h-5" />
//                     <span>Full lifetime access</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircleIcon className="text-green-300 w-5 h-5" />
//                     <span>{course.lectures} lectures</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircleIcon className="text-green-300 w-5 h-5" />
//                     <span>Certificate of completion</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircleIcon className="text-green-300 w-5 h-5" />
//                     <span>30-day money-back guarantee</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Enrollment Form */}
//             <div className="lg:w-1/2 p-8 bg-gray-900">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-2xl font-bold text-white">
//                   {step === 1 ? 'Student Information' : 'Payment Details'}
//                 </h3>
//                 <button
//                   onClick={() => setActiveModal(null)}
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <CloseIcon />
//                 </button>
//               </div>

//               {/* Progress Steps */}
//               <div className="flex items-center justify-between mb-8">
//                 <div className={`flex-1 h-1 ${step >= 1 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
//                 <div className={`mx-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
//                   step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
//                 }`}>1</div>
//                 <div className={`flex-1 h-1 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
//                 <div className={`mx-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
//                   step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
//                 }`}>2</div>
//                 <div className={`flex-1 h-1 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {step === 1 ? (
//                   <>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-300 mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-300 mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-300 mb-2">
//                         Phone Number (optional)
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-300 mb-2">
//                         Payment Method
//                       </label>
//                       <select
//                         name="paymentMethod"
//                         value={formData.paymentMethod}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       >
//                         <option value="card">Credit / Debit Card</option>
//                         <option value="paypal">PayPal</option>
//                         <option value="bank">Bank Transfer</option>
//                       </select>
//                     </div>

//                     {formData.paymentMethod === 'card' && (
//                       <>
//                         <div>
//                           <label className="block text-sm font-semibold text-gray-300 mb-2">
//                             Card Number
//                           </label>
//                           <input
//                             type="text"
//                             name="cardNumber"
//                             value={formData.cardNumber}
//                             onChange={handleChange}
//                             placeholder="1234 5678 9012 3456"
//                             className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             required
//                           />
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <label className="block text-sm font-semibold text-gray-300 mb-2">
//                               Expiry Date
//                             </label>
//                             <input
//                               type="text"
//                               name="cardExpiry"
//                               value={formData.cardExpiry}
//                               onChange={handleChange}
//                               placeholder="MM/YY"
//                               className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                               required
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-sm font-semibold text-gray-300 mb-2">
//                               CVV
//                             </label>
//                             <input
//                               type="text"
//                               name="cardCvv"
//                               value={formData.cardCvv}
//                               onChange={handleChange}
//                               placeholder="123"
//                               className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                               required
//                             />
//                           </div>
//                         </div>
//                       </>
//                     )}

//                     <div className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         name="agreeTerms"
//                         checked={formData.agreeTerms}
//                         onChange={handleChange}
//                         className="accent-blue-500"
//                         required
//                       />
//                       <label className="text-sm text-gray-300">
//                         I agree to the Terms of Service and Privacy Policy
//                       </label>
//                     </div>
//                   </>
//                 )}

//                 <div className="flex gap-3">
//                   {step === 2 && (
//                     <button
//                       type="button"
//                       onClick={() => setStep(1)}
//                       className="flex-1 border-2 border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800"
//                     >
//                       Back
//                     </button>
//                   )}
//                   <button
//                     type="submit"
//                     className={`flex-1 bg-gradient-to-t from-green-600 to-green-400 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 ${
//                       step === 1 ? 'w-full' : ''
//                     }`}
//                   >
//                     {step === 1 ? 'Continue to Payment' : `Pay $${course.price}`}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </motion.div>
//       );
//     },

//     Learning: ({ course }) => {
//       const [activeSection, setActiveSection] = useState(0);
//       const [activeLecture, setActiveLecture] = useState(null);
//       const courseProgress = getCourseProgress(course.id);

//       // Find first incomplete lecture
//       useEffect(() => {
//         for (const section of course.curriculum) {
//           for (const lecture of section.lectures) {
//             if (!watchedLectures[lecture.id] && (lecture.free || isEnrolled(course.id))) {
//               setActiveLecture(lecture);
//               return;
//             }
//           }
//         }
//       }, []);

//       return (
//         <motion.div
//           variants={modalVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800 h-[90vh] flex flex-col"
//         >
//           {/* Header */}
//           <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
//             <div className="flex items-center gap-4">
//               <div className="text-3xl">{course.image}</div>
//               <div>
//                 <h2 className="text-xl font-bold text-white">{course.title}</h2>
//                 <div className="flex items-center gap-2 text-sm text-gray-400">
//                   <span>Progress: {courseProgress}%</span>
//                   <div className="w-32 h-2 bg-gray-700 rounded-full">
//                     <div 
//                       className="h-full bg-green-500 rounded-full"
//                       style={{ width: `${courseProgress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => setActiveModal(null)}
//               className="text-gray-400 hover:text-white"
//             >
//               <CloseIcon />
//             </button>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 flex overflow-hidden">
//             {/* Sidebar - Curriculum */}
//             <div className="w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto">
//               {course.curriculum.map((section, sIndex) => (
//                 <div key={sIndex} className="border-b border-gray-800">
//                   <button
//                     onClick={() => setActiveSection(activeSection === sIndex ? null : sIndex)}
//                     className="w-full p-4 flex items-center justify-between hover:bg-gray-800"
//                   >
//                     <div className="flex items-center gap-2">
//                       <MenuBookIcon className="text-blue-400 w-5 h-5" />
//                       <span className="text-white font-semibold">{section.section}</span>
//                     </div>
//                     <span className="text-sm text-gray-400">
//                       {section.lectures.length} lectures
//                     </span>
//                   </button>
                  
//                   {activeSection === sIndex && (
//                     <div className="bg-gray-800/50">
//                       {section.lectures.map((lecture, lIndex) => (
//                         <button
//                           key={lIndex}
//                           onClick={() => setActiveLecture(lecture)}
//                           className={`w-full p-3 pl-8 flex items-center gap-2 hover:bg-gray-700 ${
//                             activeLecture?.id === lecture.id ? 'bg-blue-600/20' : ''
//                           }`}
//                         >
//                           {lecture.type === 'video' && (
//                             watchedLectures[lecture.id] ? 
//                               <CheckCircleIcon className="w-4 h-4 text-green-400" /> :
//                               <PlayCircleIcon className="w-4 h-4 text-gray-400" />
//                           )}
//                           {lecture.type === 'quiz' && <QuizIcon className="w-4 h-4 text-purple-400" />}
//                           {lecture.type === 'assignment' && <AssignmentIcon className="w-4 h-4 text-orange-400" />}
//                           <span className="text-sm text-gray-300 truncate flex-1 text-left">
//                             {lecture.title}
//                           </span>
//                           <span className="text-xs text-gray-500">{lecture.duration}</span>
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Main Player Area */}
//             <div className="flex-1 bg-black">
//               {activeLecture ? (
//                 activeLecture.type === 'video' ? (
//                   <div className="h-full flex flex-col">
//                     <div className="flex-1">
//                       <iframe
//                         width="100%"
//                         height="100%"
//                         src={`https://www.youtube.com/embed/${activeLecture.youtubeId}?autoplay=1`}
//                         title={activeLecture.title}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                       ></iframe>
//                     </div>
//                     <div className="bg-gray-900 p-4">
//                       <h3 className="text-white font-semibold">{activeLecture.title}</h3>
//                       <p className="text-sm text-gray-400 mt-1">{activeLecture.description}</p>
//                     </div>
//                   </div>
//                 ) : activeLecture.type === 'quiz' ? (
//                   <div className="h-full overflow-y-auto p-6">
//                     <Quiz quiz={activeLecture} course={course} />
//                   </div>
//                 ) : (
//                   <div className="h-full overflow-y-auto p-6">
//                     <Assignment assignment={activeLecture} course={course} />
//                   </div>
//                 )
//               ) : (
//                 <div className="h-full flex items-center justify-center text-gray-500">
//                   Select a lecture to start learning
//                 </div>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       );
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden pt-20">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 py-16 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-blue-400 font-semibold text-sm mb-6 border border-blue-500/30">
//               Our Courses
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
//               Learn from the Best{' '}
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Coding Courses
//               </span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//               Master in-demand skills with our comprehensive courses. Learn at your own pace with video lectures,
//               hands-on projects, and personalized support.
//             </p>

//             {/* My Learning Button */}
//             {enrolledCourses.length > 0 && (
//               <button
//                 onClick={() => {
//                   const course = coursesData.find(c => c.id === enrolledCourses[0]);
//                   setSelectedCourse(course);
//                   setActiveModal('learning');
//                 }}
//                 className="bg-gradient-to-t from-green-600 to-green-400 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
//               >
//                 <PlayLessonIcon />
//                 Continue Learning
//               </button>
//             )}
//           </motion.div>
//         </div>
//       </section>

//       {/* Search and Filters */}
//       <section className="bg-gradient-to-b from-gray-900 to-black py-8 border-y border-gray-800 sticky top-16 z-40">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//             {/* Search */}
//             <div className="w-full lg:w-96">
//               <input
//                 type="text"
//                 placeholder="Search courses..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
//               />
//             </div>

//             {/* Filters */}
//             <div className="flex flex-wrap gap-3">
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {categories.map(cat => (
//                   <option key={cat.id} value={cat.id}>{cat.name}</option>
//                 ))}
//               </select>

//               <select
//                 value={selectedLevel}
//                 onChange={(e) => setSelectedLevel(e.target.value)}
//                 className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {levels.map(level => (
//                   <option key={level.id} value={level.id}>{level.name}</option>
//                 ))}
//               </select>

//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//                 className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 {sortOptions.map(option => (
//                   <option key={option.id} value={option.id}>{option.name}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enrolled Courses Section */}
//       {enrolledCourses.length > 0 && (
//         <section className="bg-gradient-to-b from-black to-gray-900 py-12">
//           <div className="container mx-auto px-4">
//             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//               <PlayLessonIcon className="text-green-400" />
//               My Learning
//             </h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {coursesData.filter(c => enrolledCourses.includes(c.id)).map(course => (
//                 <div key={course.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex items-center gap-4">
//                   <div className={`text-4xl bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 w-16 h-16 rounded-lg flex items-center justify-center`}>
//                     {course.image}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-white font-semibold text-sm">{course.title}</h3>
//                     <div className="flex items-center gap-2 mt-1">
//                       <div className="flex-1 h-1 bg-gray-700 rounded-full">
//                         <div 
//                           className="h-full bg-green-500 rounded-full"
//                           style={{ width: `${getCourseProgress(course.id)}%` }}
//                         ></div>
//                       </div>
//                       <span className="text-xs text-gray-400">{getCourseProgress(course.id)}%</span>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => {
//                       setSelectedCourse(course);
//                       setActiveModal('learning');
//                     }}
//                     className="text-blue-400 hover:text-blue-300"
//                   >
//                     <PlayArrowIcon />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Courses Grid */}
//       <section className="bg-gradient-to-b from-black to-gray-900 py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredCourses.map((course, index) => (
//               <motion.div
//                 key={course.id}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover="hover"
//                 viewport={{ once: true }}
//                 className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
//                 onClick={() => {
//                   setSelectedCourse(course);
//                   setActiveModal('CourseDetail');
//                 }}
//               >
//                 {/* Course Image */}
//                 <div className={`bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 p-6 relative`}>
//                   <div className="text-6xl text-center">{course.image}</div>
//                   {course.badge && (
//                     <span className={`absolute top-4 right-4 px-2 py-1 bg-${course.badgeColor}-500/20 text-${course.badgeColor}-400 rounded-full text-xs font-semibold`}>
//                       {course.badge}
//                     </span>
//                   )}
//                   {isEnrolled(course.id) && (
//                     <span className="absolute top-4 left-4 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
//                       Enrolled
//                     </span>
//                   )}
//                 </div>

//                 {/* Course Info */}
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-2">
//                     <span className={`text-${course.color}-400 text-sm font-semibold`}>
//                       {categories.find(c => c.id === course.category)?.name}
//                     </span>
//                     <span className="text-gray-500">•</span>
//                     <span className="text-gray-400 text-sm">{course.level}</span>
//                   </div>

//                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
//                     {course.title}
//                   </h3>

//                   <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

//                   {/* Instructor */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-${course.color}-500 to-${course.color}-600 flex items-center justify-center text-xs text-white font-bold`}>
//                       {course.instructorImage}
//                     </div>
//                     <span className="text-sm text-gray-300">{course.instructor}</span>
//                   </div>

//                   {/* Rating */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="flex">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <StarIcon key={star} className={`w-4 h-4 ${star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-300">{course.rating}</span>
//                     <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
//                   </div>

//                   {/* Course Stats */}
//                   <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
//                     <div className="flex items-center gap-1">
//                       <MenuBookIcon className="w-4 h-4" />
//                       <span>{course.lectures} lectures</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <AccessTime className="w-4 h-4" />
//                       <span>{course.duration}</span>
//                     </div>
//                   </div>

//                   {/* Price and CTA */}
//                   <div className="flex items-center justify-between">
//                     {!isEnrolled(course.id) ? (
//                       <>
//                         <div>
//                           <span className="text-2xl font-bold text-white">${course.price}</span>
//                           <span className="text-sm text-gray-400 line-through ml-2">${course.originalPrice}</span>
//                         </div>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setSelectedCourse(course);
//                             setActiveModal('enroll');
//                           }}
//                           className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
//                         >
//                           Enroll Now
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <div className="text-green-400 text-sm font-semibold">
//                           {getCourseProgress(course.id)}% Complete
//                         </div>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setSelectedCourse(course);
//                             setActiveModal('learning');
//                           }}
//                           className="bg-gradient-to-t from-green-600 to-green-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-700 hover:to-green-500"
//                         >
//                           Continue
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {filteredCourses.length === 0 && (
//             <div className="text-center py-16">
//               <p className="text-gray-400 text-lg">No courses found matching your criteria.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Modal Overlay */}
//       <AnimatePresence>
//         {activeModal && (
//           <motion.div
//             variants={overlayVariants}
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
//             onClick={() => setActiveModal(null)}
//           >
//             <div onClick={(e) => e.stopPropagation()}>
//               {activeModal === 'CourseDetail' && <Modals.CourseDetail course={selectedCourse} />}
//               {activeModal === 'video' && <Modals.VideoPlayer lesson={selectedLesson} course={selectedCourse} />}
//               {activeModal === 'quiz' && <Modals.Quiz quiz={selectedLesson} course={selectedCourse} />}
//               {activeModal === 'assignment' && <Modals.Assignment assignment={selectedLesson} course={selectedCourse} />}
//               {activeModal === 'enroll' && <Modals.Enroll course={selectedCourse} />}
//               {activeModal === 'learning' && <Modals.Learning course={selectedCourse} />}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };




















/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
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
  Speed as SpeedIcon1,
  Subtitles as SubtitlesIcon,
  Settings as SettingsIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  Timeline as TimelineIcon1,
  BarChart as BarChartIcon,
  Assessment as AssessmentIcon,
  MenuBook as MenuBookIcon1,
  OndemandVideo as OndemandVideoIcon,
  PictureAsPdf as PictureAsPdfIcon,
  InsertDriveFile as InsertDriveFileIcon,
  CloudDownload as CloudDownloadIcon,
  Share as ShareIcon,
  Forum as ForumIcon,
  Help as HelpIcon,
  Announcement as AnnouncementIcon,
  Grade as GradeIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  Downloading as DownloadingIcon,
  CheckCircle as CheckCircleIcon1,
  PlayCircleFilled as PlayCircleFilledIcon,
  PauseCircleFilled as PauseCircleFilledIcon,
  SkipNext as SkipNextIcon,
  SkipPrevious as SkipPreviousIcon,
  Replay as ReplayIcon,
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon1,
  ClosedCaption as ClosedCaptionIcon,
  SettingsOverscan as SettingsOverscanIcon,
  PlaylistPlay as PlaylistPlayIcon,
  PlaylistAdd as PlaylistAddIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  Speed as SpeedIcon2,
  Forward10 as Forward10Icon,
  Replay10 as Replay10Icon,
  TheaterComedy as TheaterComedyIcon,
  RadioButtonChecked as RadioButtonCheckedIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon1,
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  FormatListNumbered as FormatListNumberedIcon,
  Timer as TimerIcon,
  Refresh as RefreshIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Sort as SortIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Share as ShareIcon1,
  MoreVert as MoreVertIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  FirstPage as FirstPageIcon,
  LastPage as LastPageIcon,
  PlayLesson as PlayLessonIcon,
  VideoLibrary as VideoLibraryIcon,
  LibraryBooks as LibraryBooksIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Assessment as AssessmentIcon1,
  Leaderboard as LeaderboardIcon,
  EmojiEvents as EmojiEventsIcon1,
  MilitaryTech as MilitaryTechIcon,
  WorkspacePremium as WorkspacePremiumIcon1,
  School as SchoolIcon1,
  AutoStories as AutoStoriesIcon,
  CastForEducation as CastForEducationIcon,
  Computer as ComputerIcon,
  LaptopMac as LaptopMacIcon,
  DeveloperMode as DeveloperModeIcon,
  IntegrationInstructions as IntegrationInstructionsIcon,
  DataArray as DataArrayIcon,
  DataObject as DataObjectIcon,
  Javascript as JavascriptIcon,
  Css as CssIcon,
  Html as HtmlIcon,
  Terminal as TerminalIcon,
  CodeOff as CodeOffIcon,
  BugReport as BugReportIcon,
  Science as ScienceIcon,
  Biotech as BiotechIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
  SettingsSuggest as SettingsSuggestIcon,
  AccountTree as AccountTreeIcon,
  DeviceHub as DeviceHubIcon,
  Hub as HubIcon,
  Lan as LanIcon,
  Wifi as WifiIcon,
  NetworkCheck as NetworkCheckIcon,
  Security as SecurityIcon1,
  Shield as ShieldIcon,
  LockClock as LockClockIcon,
  Key as KeyIcon,
  VpnKey as VpnKeyIcon,
  Password as PasswordIcon,
  Fingerprint as FingerprintIcon,
  Face as FaceIcon,
  VoiceOverOff as VoiceOverOffIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  ScreenShare as ScreenShareIcon,
  StopScreenShare as StopScreenShareIcon,
  Cast as CastIcon,
  CastConnected as CastConnectedIcon,
  PictureInPicture as PictureInPictureIcon,
  PictureInPictureAlt as PictureInPictureAltIcon,
  Hd as HdIcon,
  Sd as SdIcon,
  HighQuality as HighQualityIcon,
  Subtitles as SubtitlesIcon1,
  ClosedCaption as ClosedCaptionIcon1,
  AudioFile as AudioFileIcon,
  VideoFile as VideoFileIcon,
  Image as ImageIcon,
  FilePresent as FilePresentIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  FolderShared as FolderSharedIcon,
  CloudUpload as CloudUploadIcon,
  CloudDownload as CloudDownloadIcon1,
  CloudDone as CloudDoneIcon,
  CloudOff as CloudOffIcon,
  Attachment as AttachmentIcon,
  Link as LinkIcon,
  LinkOff as LinkOffIcon,
  OpenInNew as OpenInNewIcon,
  OpenInBrowser as OpenInBrowserIcon,
  Launch as LaunchIcon,
  ExitToApp as ExitToAppIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  AppRegistration as AppRegistrationIcon,
  HowToReg as HowToRegIcon,
  PersonAdd as PersonAddIcon,
  PersonRemove as PersonRemoveIcon,
  PersonOutline as PersonOutlineIcon,
  ManageAccounts as ManageAccountsIcon,
  AccountCircle as AccountCircleIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Settings as SettingsIcon1,
  SettingsApplications as SettingsApplicationsIcon,
  SettingsInputComponent as SettingsInputComponentIcon,
  Tune as TuneIcon,
  FilterAlt as FilterAltIcon,
  SortByAlpha as SortByAlphaIcon,
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  ViewStream as ViewStreamIcon,
  Dashboard as DashboardIcon,
  Widgets as WidgetsIcon,
  Apps as AppsIcon,
  GridView as GridViewIcon,
  TableRows as TableRowsIcon,
  Window as WindowIcon,
  AccessTime,
} from '@mui/icons-material';

export const Courses = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [bookmarked, setBookmarked] = useState({});
  const [expandedSections, setExpandedSections] = useState({});
  const [playingVideo, setPlayingVideo] = useState(null);
  const [videoProgress, setVideoProgress] = useState({});
  const [videoVolume, setVideoVolume] = useState(80);
  const [videoMuted, setVideoMuted] = useState(false);
  const [videoSpeed, setVideoSpeed] = useState(1);
  const [captionsEnabled, setCaptionsEnabled] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [notes, setNotes] = useState({});
  const [noteText, setNoteText] = useState('');
  const [currentNoteLecture, setCurrentNoteLecture] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizTimer, setQuizTimer] = useState(0);
  const [quizActive, setQuizActive] = useState(false);
  const [downloads, setDownloads] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [watchedLectures, setWatchedLectures] = useState({});
  const [courseProgress, setCourseProgress] = useState({});
  const [pdfViewer, setPdfViewer] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [currentPdf, setCurrentPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [freePreviewOnly, setFreePreviewOnly] = useState(false);
  const coursesPerPage = 6;
  
  const [enrollmentData, setEnrollmentData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    agreeTerms: false
  });

  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);
  const quizTimerRef = useRef(null);
  const pdfIframeRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  // Course categories
  const categories = [
    { id: 'all', name: 'All Courses', icon: <MenuBookIcon /> },
    { id: 'web', name: 'Web Development', icon: <CodeIcon /> },
    { id: 'data', name: 'Data Science', icon: <StorageIcon /> },
    { id: 'mobile', name: 'Mobile Development', icon: <DevicesIcon /> },
    { id: 'security', name: 'Cyber Security', icon: <SecurityIcon /> },
    { id: 'cloud', name: 'Cloud Computing', icon: <CloudIcon /> },
    { id: 'ai', name: 'AI & ML', icon: <TimelineIcon /> },
    { id: 'design', name: 'UI/UX Design', icon: <BrushIcon /> },
  ];

  // Course levels
  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  // Sort options
  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'newest', name: 'Newest' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
  ];

  // Sample PDF URLs for preview
  const samplePDFs = [
    { id: 'pdf1', title: 'Introduction to HTML', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { id: 'pdf2', title: 'CSS Fundamentals', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { id: 'pdf3', title: 'JavaScript Basics', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { id: 'pdf4', title: 'Python for Beginners', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { id: 'pdf5', title: 'Data Structures', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { id: 'pdf6', title: 'React Guide', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  ];

  // Courses data with YouTube videos and PDFs
  const coursesData = [
    {
      id: 'web-dev-1',
      title: 'Complete Web Development Bootcamp 2024',
      instructor: 'Dr. Sarah Johnson',
      instructorImage: 'SJ',
      category: 'web',
      level: 'beginner',
      language: 'English',
      subtitles: ['English', 'Spanish', 'French', 'Arabic'],
      rating: 4.9,
      students: 15420,
      price: 499,
      originalPrice: 999,
      discount: 50,
      duration: '24 weeks',
      totalHours: 168,
      lectures: 245,
      quizzes: 28,
      assignments: 12,
      downloads: 35,
      certificate: true,
      badge: 'Bestseller',
      badgeColor: 'yellow',
      image: '🌐',
      color: 'blue',
      description: 'Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 15+ real-world projects.',
      longDescription: 'This comprehensive bootcamp covers everything you need to become a professional web developer. From front-end fundamentals to back-end architecture, you\'ll learn through hands-on projects and real-world scenarios.',
      whatYoullLearn: [
        'Build 15+ complete web applications',
        'Master HTML5, CSS3, and JavaScript ES6+',
        'Create responsive designs with Flexbox and Grid',
        'Build dynamic UIs with React.js and Redux',
        'Develop RESTful APIs with Node.js and Express',
        'Work with MongoDB and SQL databases',
        'Implement authentication and authorization',
        'Deploy applications to cloud platforms',
        'Version control with Git and GitHub',
        'Optimize performance and SEO'
      ],
      requirements: [
        'No prior coding experience required',
        'A computer with internet connection',
        'Eagerness to learn and build projects'
      ],
      targetAudience: [
        'Complete beginners who want to become web developers',
        'Aspiring freelancers who want to build websites',
        'Current developers wanting to expand their skills',
        'Entrepreneurs who want to build their own products'
      ],
      freePreview: {
        video: 'dGcsHMXbSOA',
        pdf: samplePDFs[0],
        quiz: true
      },
      curriculum: [
        {
          section: 'Introduction to Web Development',
          lectures: [
            { 
              id: '1-1', 
              title: 'Welcome to the Course', 
              duration: '10:30', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'dGcsHMXbSOA',
              description: 'Introduction to the course structure and what you will learn.'
            },
            { 
              id: '1-2', 
              title: 'How the Internet Works', 
              duration: '15:45', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'hJHvdBlSxug',
              description: 'Understanding the basics of how the internet functions.'
            },
            { 
              id: '1-3', 
              title: 'Introduction to HTML - Free PDF', 
              duration: '20:15', 
              type: 'pdf', 
              free: true, 
              completed: false,
              pdfUrl: samplePDFs[0].url,
              description: 'Download and read the HTML fundamentals guide.'
            },
            { 
              id: '1-4', 
              title: 'Setting Up Your Development Environment', 
              duration: '20:15', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'c2AwTtW3T48',
              description: 'Install and configure VS Code, Git, and necessary tools.'
            },
            { 
              id: '1-5', 
              title: 'Introduction to HTML', 
              duration: '25:30', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'qz0aGYrrlhU',
              description: 'Learn the basics of HTML structure and elements.'
            },
            { 
              id: '1-6', 
              title: 'HTML Fundamentals Quiz - Free Preview', 
              duration: '10', 
              type: 'quiz', 
              questions: 5, 
              free: true, 
              completed: false,
              quizData: {
                questions: [
                  {
                    question: 'What does HTML stand for?',
                    options: [
                      'Hyper Text Markup Language',
                      'High Tech Modern Language',
                      'Hyper Transfer Markup Language',
                      'Home Tool Markup Language'
                    ],
                    correct: 0
                  },
                  {
                    question: 'Which tag is used for the largest heading?',
                    options: ['<h1>', '<heading>', '<h6>', '<head>'],
                    correct: 0
                  },
                  {
                    question: 'What is the correct HTML for creating a hyperlink?',
                    options: [
                      '<a href="url">link</a>',
                      '<link>url</link>',
                      '<a>url</a>',
                      '<href>url</href>'
                    ],
                    correct: 0
                  },
                  {
                    question: 'Which tag is used for inserting an image?',
                    options: ['<img>', '<image>', '<src>', '<pic>'],
                    correct: 0
                  },
                  {
                    question: 'What does CSS stand for?',
                    options: [
                      'Cascading Style Sheets',
                      'Creative Style System',
                      'Computer Style Sheets',
                      'Colorful Style Sheets'
                    ],
                    correct: 0
                  }
                ]
              }
            },
          ]
        },
        {
          section: 'HTML5 & CSS3 Fundamentals',
          lectures: [
            { 
              id: '2-1', 
              title: 'HTML Document Structure', 
              duration: '18:20', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'mJgBOIoGihA',
              description: 'Understanding proper HTML document structure.'
            },
            { 
              id: '2-2', 
              title: 'Working with Text and Links', 
              duration: '22:15', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'V7U0dQGV0RI',
              description: 'Formatting text and creating links.'
            },
          ]
        }
      ],
      notes: [],
      downloads: [
        { 
          id: 'dl1', 
          title: 'Course Syllabus', 
          type: 'pdf', 
          size: '2.4 MB',
          url: samplePDFs[0].url,
          description: 'Complete course outline and learning objectives',
          free: true
        },
        { 
          id: 'dl2', 
          title: 'HTML Cheat Sheet', 
          type: 'pdf', 
          size: '1.1 MB',
          url: samplePDFs[1].url,
          description: 'Quick reference for HTML tags and attributes',
          free: true
        },
        { 
          id: 'dl3', 
          title: 'CSS Reference Guide', 
          type: 'pdf', 
          size: '3.2 MB',
          url: samplePDFs[2].url,
          description: 'Comprehensive CSS properties and values guide',
          free: false
        },
      ],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'data-science-1',
      title: 'Data Science & Machine Learning Masterclass',
      instructor: 'Prof. Michael Chen',
      instructorImage: 'MC',
      category: 'data',
      level: 'intermediate',
      language: 'English',
      subtitles: ['English', 'German', 'Japanese'],
      rating: 4.8,
      students: 8920,
      price: 599,
      originalPrice: 1299,
      discount: 54,
      duration: '28 weeks',
      totalHours: 192,
      lectures: 312,
      quizzes: 35,
      assignments: 18,
      downloads: 42,
      certificate: true,
      badge: 'Hot & New',
      badgeColor: 'red',
      image: '📊',
      color: 'purple',
      description: 'Master Python, SQL, machine learning algorithms, and data visualization. Build real-world data projects.',
      longDescription: 'This comprehensive data science program takes you from Python basics to advanced machine learning. Learn to analyze data, build predictive models, and communicate insights effectively.',
      freePreview: {
        video: 'YYXdXT2l-Gg',
        pdf: samplePDFs[3],
        quiz: true
      },
      whatYoullLearn: [
        'Master Python programming for data science',
        'Work with NumPy, Pandas, and Matplotlib',
        'Build machine learning models with scikit-learn',
        'Create interactive visualizations with Plotly',
        'Work with SQL and databases',
        'Implement deep learning with TensorFlow',
        'Deploy ML models to production',
        'Build end-to-end data science projects'
      ],
      requirements: [
        'Basic math knowledge',
        'No programming experience required',
        'Interest in data and analytics'
      ],
      targetAudience: [
        'Aspiring data scientists',
        'Analysts wanting to upskill',
        'Developers interested in AI/ML',
        'Business professionals wanting data skills'
      ],
      curriculum: [
        {
          section: 'Python for Data Science',
          lectures: [
            { 
              id: '1-1', 
              title: 'Python Basics - Free Preview', 
              duration: '28:30', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'YYXdXT2l-Gg',
              description: 'Introduction to Python programming.'
            },
            { 
              id: '1-2', 
              title: 'Python for Beginners PDF', 
              duration: '0', 
              type: 'pdf', 
              free: true, 
              completed: false,
              pdfUrl: samplePDFs[3].url,
              description: 'Python programming fundamentals guide.'
            },
            { 
              id: '1-3', 
              title: 'NumPy Fundamentals', 
              duration: '32:15', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'QUT1VHiLmmI',
              description: 'Working with NumPy arrays and operations.'
            },
            { 
              id: '1-4', 
              title: 'Pandas Data Manipulation', 
              duration: '38:20', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'vmEHCJofslg',
              description: 'Data manipulation with Pandas DataFrames.'
            },
          ]
        },
        {
          section: 'Machine Learning',
          lectures: [
            { 
              id: '2-1', 
              title: 'Linear Regression', 
              duration: '42:10', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'CtsRRUddV2s',
              description: 'Understanding and implementing linear regression.'
            },
            { 
              id: '2-2', 
              title: 'Classification Algorithms', 
              duration: '45:30', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'HcqpanDedyQ',
              description: 'Classification algorithms like logistic regression and decision trees.'
            },
          ]
        }
      ],
      notes: [],
      downloads: [
        { 
          id: 'dl1', 
          title: 'Python Cheat Sheet', 
          type: 'pdf', 
          size: '1.8 MB',
          url: samplePDFs[3].url,
          description: 'Quick reference for Python syntax',
          free: true
        },
      ],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'app-dev-1',
      title: 'Flutter & React Native: Build Mobile Apps',
      instructor: 'Emily Rodriguez',
      instructorImage: 'ER',
      category: 'mobile',
      level: 'beginner',
      language: 'English',
      subtitles: ['English', 'Spanish'],
      rating: 4.9,
      students: 12340,
      price: 549,
      originalPrice: 1099,
      discount: 50,
      duration: '20 weeks',
      totalHours: 144,
      lectures: 198,
      quizzes: 22,
      assignments: 14,
      downloads: 28,
      certificate: true,
      badge: 'Bestseller',
      badgeColor: 'yellow',
      image: '📱',
      color: 'green',
      description: 'Build iOS and Android apps with Flutter and React Native. Publish to App Store and Google Play.',
      freePreview: {
        video: 'fq4N0hgOWzU',
        pdf: samplePDFs[4],
        quiz: true
      },
      whatYoullLearn: [
        'Build cross-platform apps with Flutter',
        'Develop native-like apps with React Native',
        'Manage app state effectively',
        'Integrate APIs and backend services',
        'Implement authentication and databases',
        'Publish apps to App Store and Google Play',
        'Monetize your applications',
        'Build 10+ complete mobile apps'
      ],
      requirements: [
        'Basic programming knowledge helpful',
        'No mobile dev experience needed',
        'A computer (Mac for iOS development)'
      ],
      targetAudience: [
        'Aspiring mobile app developers',
        'Web developers wanting to go mobile',
        'Entrepreneurs with app ideas',
        'Anyone wanting to build mobile apps'
      ],
      curriculum: [
        {
          section: 'Flutter Fundamentals',
          lectures: [
            { 
              id: '1-1', 
              title: 'Introduction to Flutter - Free', 
              duration: '18:30', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'fq4N0hgOWzU',
              description: 'Introduction to Flutter framework.'
            },
            { 
              id: '1-2', 
              title: 'Flutter Basics PDF', 
              duration: '0', 
              type: 'pdf', 
              free: true, 
              completed: false,
              pdfUrl: samplePDFs[4].url,
              description: 'Flutter framework fundamentals guide.'
            },
            { 
              id: '1-3', 
              title: 'Dart Programming Basics', 
              duration: '32:15', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'Ej_Pcr4uC2Q',
              description: 'Learning Dart programming language.'
            },
          ]
        },
        {
          section: 'React Native Basics',
          lectures: [
            { 
              id: '2-1', 
              title: 'React Native Setup', 
              duration: '22:10', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: '0-S5a0eXPoc',
              description: 'Setting up React Native development environment.'
            },
            { 
              id: '2-2', 
              title: 'Components and Navigation', 
              duration: '38:20', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: '8N4f4h6S9d0',
              description: 'Building components and implementing navigation.'
            },
          ]
        }
      ],
      notes: [],
      downloads: [
        { 
          id: 'dl1', 
          title: 'Flutter Widget Guide', 
          type: 'pdf', 
          size: '2.1 MB',
          url: samplePDFs[4].url,
          description: 'Complete guide to Flutter widgets',
          free: true
        },
      ],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'cybersecurity-1',
      title: 'Cyber Security Expert: Ethical Hacking & Defense',
      instructor: 'Dr. James Wilson',
      instructorImage: 'JW',
      category: 'security',
      level: 'intermediate',
      language: 'English',
      subtitles: ['English'],
      rating: 4.7,
      students: 6540,
      price: 649,
      originalPrice: 1499,
      discount: 57,
      duration: '26 weeks',
      totalHours: 184,
      lectures: 276,
      quizzes: 32,
      assignments: 16,
      downloads: 38,
      certificate: true,
      badge: 'Trending',
      badgeColor: 'blue',
      image: '🔒',
      color: 'red',
      description: 'Master ethical hacking, penetration testing, network security, and incident response.',
      freePreview: {
        video: 'fNzpcB7ODxQ',
        pdf: samplePDFs[5],
        quiz: true
      },
      whatYoullLearn: [
        'Master ethical hacking techniques',
        'Perform penetration testing',
        'Secure networks and systems',
        'Implement encryption and cryptography',
        'Conduct security audits',
        'Respond to security incidents',
        'Prepare for CEH and CISSP certifications',
        'Build a security career'
      ],
      requirements: [
        'Basic networking knowledge',
        'Familiarity with operating systems',
        'Interest in security'
      ],
      targetAudience: [
        'Aspiring security professionals',
        'IT professionals wanting security skills',
        'Developers wanting secure coding',
        'Anyone interested in cybersecurity'
      ],
      curriculum: [
        {
          section: 'Ethical Hacking Basics',
          lectures: [
            { 
              id: '1-1', 
              title: 'Introduction to Ethical Hacking - Free', 
              duration: '25:30', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'fNzpcB7ODxQ',
              description: 'Introduction to ethical hacking concepts.'
            },
            { 
              id: '1-2', 
              title: 'Security Basics PDF', 
              duration: '0', 
              type: 'pdf', 
              free: true, 
              completed: false,
              pdfUrl: samplePDFs[5].url,
              description: 'Introduction to cybersecurity fundamentals.'
            },
            { 
              id: '1-3', 
              title: 'Setting Up Your Lab', 
              duration: '28:15', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'WfJwE7qo1zI',
              description: 'Setting up a penetration testing lab.'
            },
          ]
        },
        {
          section: 'Network Security',
          lectures: [
            { 
              id: '2-1', 
              title: 'Network Fundamentals', 
              duration: '32:10', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'qiQR5rTSshw',
              description: 'Understanding network protocols and architecture.'
            },
            { 
              id: '2-2', 
              title: 'Firewalls and IDS/IPS', 
              duration: '35:20', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'kDEX1HXybrU',
              description: 'Implementing firewalls and intrusion detection systems.'
            },
          ]
        }
      ],
      notes: [],
      downloads: [
        { 
          id: 'dl1', 
          title: 'Security Tools Guide', 
          type: 'pdf', 
          size: '3.5 MB',
          url: samplePDFs[5].url,
          description: 'Comprehensive guide to security tools',
          free: true
        },
      ],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'cloud-1',
      title: 'AWS & Cloud Computing: Complete Guide',
      instructor: 'Priya Patel',
      instructorImage: 'PP',
      category: 'cloud',
      level: 'intermediate',
      language: 'English',
      subtitles: ['English', 'Hindi'],
      rating: 4.8,
      students: 7230,
      price: 599,
      originalPrice: 1199,
      discount: 50,
      duration: '22 weeks',
      totalHours: 156,
      lectures: 234,
      quizzes: 26,
      assignments: 15,
      downloads: 32,
      certificate: true,
      badge: 'Top Rated',
      badgeColor: 'purple',
      image: '☁️',
      color: 'cyan',
      description: 'Master AWS, Azure, Google Cloud, Docker, Kubernetes, and DevOps practices.',
      freePreview: {
        video: 'M988_fsOSWo',
        pdf: samplePDFs[0],
        quiz: true
      },
      whatYoullLearn: [
        'Master AWS services (EC2, S3, Lambda)',
        'Work with Azure and Google Cloud',
        'Implement Docker and Kubernetes',
        'Build CI/CD pipelines',
        'Practice Infrastructure as Code',
        'Design cloud architectures',
        'Prepare for cloud certifications',
        'Deploy real-world applications'
      ],
      requirements: [
        'Basic IT knowledge',
        'No cloud experience required',
        'Interest in infrastructure'
      ],
      targetAudience: [
        'Aspiring cloud architects',
        'DevOps engineers',
        'System administrators',
        'Developers wanting cloud skills'
      ],
      curriculum: [
        {
          section: 'AWS Fundamentals',
          lectures: [
            { 
              id: '1-1', 
              title: 'Introduction to Cloud Computing - Free', 
              duration: '20:30', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'M988_fsOSWo',
              description: 'Introduction to cloud computing concepts.'
            },
            { 
              id: '1-2', 
              title: 'Cloud Computing Basics PDF', 
              duration: '0', 
              type: 'pdf', 
              free: true, 
              completed: false,
              pdfUrl: samplePDFs[0].url,
              description: 'Introduction to cloud computing fundamentals.'
            },
            { 
              id: '1-3', 
              title: 'AWS Global Infrastructure', 
              duration: '24:15', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'r4YIdn2eTm4',
              description: 'Understanding AWS global infrastructure.'
            },
          ]
        },
        {
          section: 'Core AWS Services',
          lectures: [
            { 
              id: '2-1', 
              title: 'EC2 and Compute Services', 
              duration: '38:10', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'lZ00ne8Wj-o',
              description: 'Working with EC2 instances and compute services.'
            },
            { 
              id: '2-2', 
              title: 'S3 and Storage Solutions', 
              duration: '32:20', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: '77lMCiiMilo',
              description: 'Using S3 for storage and data management.'
            },
          ]
        }
      ],
      notes: [],
      downloads: [
        { 
          id: 'dl1', 
          title: 'AWS Services Overview', 
          type: 'pdf', 
          size: '2.8 MB',
          url: samplePDFs[0].url,
          description: 'Complete overview of AWS services',
          free: true
        },
      ],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'ai-ml-1',
      title: 'Artificial Intelligence: Deep Learning & Generative AI',
      instructor: 'Dr. James Wilson',
      instructorImage: 'JW',
      category: 'ai',
      level: 'advanced',
      language: 'English',
      subtitles: ['English'],
      rating: 4.9,
      students: 4320,
      price: 699,
      originalPrice: 1599,
      discount: 56,
      duration: '30 weeks',
      totalHours: 216,
      lectures: 324,
      quizzes: 38,
      assignments: 20,
      downloads: 45,
      certificate: true,
      badge: 'Advanced',
      badgeColor: 'orange',
      image: '🧠',
      color: 'orange',
      description: 'Master deep learning, neural networks, NLP, computer vision, and generative AI.',
      freePreview: {
        video: 'aircAruvnKk',
        pdf: samplePDFs[1],
        quiz: true
      },
      whatYoullLearn: [
        'Master deep learning with TensorFlow and PyTorch',
        'Build and train neural networks',
        'Implement NLP and transformer models',
        'Work with computer vision',
        'Create generative AI applications',
        'Fine-tune large language models',
        'Deploy AI models to production',
        'Build cutting-edge AI projects'
      ],
      requirements: [
        'Strong Python skills',
        'Mathematics background',
        'Previous ML experience helpful'
      ],
      targetAudience: [
        'Data scientists wanting AI skills',
        'ML engineers',
        'AI researchers',
        'Advanced developers'
      ],
      curriculum: [
        {
          section: 'Deep Learning Fundamentals',
          lectures: [
            { 
              id: '1-1', 
              title: 'Neural Networks Basics - Free', 
              duration: '35:30', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'aircAruvnKk',
              description: 'Introduction to neural networks.'
            },
            { 
              id: '1-2', 
              title: 'Deep Learning Basics PDF', 
              duration: '0', 
              type: 'pdf', 
              free: true, 
              completed: false,
              pdfUrl: samplePDFs[1].url,
              description: 'Introduction to deep learning concepts.'
            },
            { 
              id: '1-3', 
              title: 'Backpropagation Explained', 
              duration: '42:15', 
              type: 'video', 
              free: true, 
              completed: false,
              youtubeId: 'Ilg3gGewQ5U',
              description: 'Understanding backpropagation algorithm.'
            },
          ]
        },
        {
          section: 'Advanced Neural Networks',
          lectures: [
            { 
              id: '2-1', 
              title: 'Convolutional Neural Networks', 
              duration: '48:10', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'YRhxdVk_sIs',
              description: 'Building and training CNNs for image tasks.'
            },
            { 
              id: '2-2', 
              title: 'Recurrent Neural Networks', 
              duration: '45:20', 
              type: 'video', 
              free: false, 
              completed: false,
              youtubeId: 'qjrad0V0uJE',
              description: 'Using RNNs for sequence data.'
            },
          ]
        }
      ],
      notes: [],
      downloads: [
        { 
          id: 'dl1', 
          title: 'Neural Networks Guide', 
          type: 'pdf', 
          size: '4.2 MB',
          url: samplePDFs[1].url,
          description: 'Comprehensive guide to neural networks',
          free: true
        },
      ],
      resources: [],
      discussions: [],
      announcements: []
    },
    // Additional courses to reach 12 total
    {
      id: 'web-dev-2',
      title: 'Advanced React & Next.js: Build Production Apps',
      instructor: 'Alex Thompson',
      instructorImage: 'AT',
      category: 'web',
      level: 'advanced',
      language: 'English',
      subtitles: ['English'],
      rating: 4.8,
      students: 8760,
      price: 599,
      originalPrice: 1199,
      discount: 50,
      duration: '18 weeks',
      totalHours: 126,
      lectures: 189,
      quizzes: 21,
      assignments: 10,
      downloads: 28,
      certificate: true,
      badge: 'New',
      badgeColor: 'green',
      image: '⚛️',
      color: 'cyan',
      description: 'Master advanced React patterns, Next.js 14, server components, and full-stack development.',
      freePreview: {
        video: 'Ke90Tje7VS0',
        pdf: samplePDFs[2],
        quiz: true
      },
      whatYoullLearn: [
        'Advanced React patterns and hooks',
        'Next.js 14 app router and server components',
        'Full-stack development with Next.js',
        'Authentication and authorization',
        'Database integration with Prisma',
        'Deployment and optimization',
        'Build 5 production-ready apps'
      ],
      requirements: [
        'Intermediate React knowledge',
        'JavaScript ES6+ experience',
        'Basic Node.js understanding'
      ],
      targetAudience: [
        'React developers wanting to level up',
        'Frontend developers going full-stack',
        'Developers wanting to learn Next.js'
      ],
      curriculum: [
        {
          section: 'Advanced React',
          lectures: [
            { id: '1-1', title: 'Advanced Hooks Deep Dive', duration: '35:20', type: 'video', free: true, youtubeId: 'TNhaISOUy6Q' },
            { id: '1-2', title: 'Custom Hooks Patterns', duration: '28:45', type: 'video', free: true, youtubeId: 'J-g9ZJ3zV_g' },
            { id: '1-3', title: 'React Performance Optimization', duration: '32:10', type: 'video', free: false, youtubeId: '5fLW5Q5ODiE' },
          ]
        }
      ],
      downloads: [],
      notes: [],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'data-science-2',
      title: 'Python for Data Analysis: Pandas & NumPy Mastery',
      instructor: 'Dr. Maria Garcia',
      instructorImage: 'MG',
      category: 'data',
      level: 'beginner',
      language: 'English',
      subtitles: ['English', 'Spanish'],
      rating: 4.9,
      students: 15420,
      price: 449,
      originalPrice: 899,
      discount: 50,
      duration: '12 weeks',
      totalHours: 84,
      lectures: 126,
      quizzes: 14,
      assignments: 8,
      downloads: 22,
      certificate: true,
      badge: 'Bestseller',
      badgeColor: 'yellow',
      image: '🐍',
      color: 'green',
      description: 'Master data analysis with Python, Pandas, NumPy, and visualization libraries.',
      freePreview: {
        video: 'vmEHCJofslg',
        pdf: samplePDFs[3],
        quiz: true
      },
      whatYoullLearn: [
        'Master Python for data analysis',
        'Data manipulation with Pandas',
        'Numerical computing with NumPy',
        'Data visualization with Matplotlib',
        'Real-world data projects',
        'Data cleaning and preparation'
      ],
      requirements: ['No prior experience needed'],
      targetAudience: ['Beginners in data science', 'Analysts', 'Researchers'],
      curriculum: [
        {
          section: 'Python Basics',
          lectures: [
            { id: '1-1', title: 'Python Setup', duration: '15:20', type: 'video', free: true, youtubeId: 'YYXdXT2l-Gg' },
            { id: '1-2', title: 'Python Fundamentals', duration: '28:45', type: 'video', free: true, youtubeId: 'f79MRyMsjrQ' },
          ]
        }
      ],
      downloads: [],
      notes: [],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'mobile-dev-2',
      title: 'iOS Development with SwiftUI: Complete Course',
      instructor: 'Chris Evans',
      instructorImage: 'CE',
      category: 'mobile',
      level: 'beginner',
      language: 'English',
      subtitles: ['English'],
      rating: 4.7,
      students: 6540,
      price: 549,
      originalPrice: 1099,
      discount: 50,
      duration: '16 weeks',
      totalHours: 112,
      lectures: 168,
      quizzes: 18,
      assignments: 10,
      downloads: 25,
      certificate: true,
      badge: 'Trending',
      badgeColor: 'blue',
      image: '🍎',
      color: 'gray',
      description: 'Build iOS apps with SwiftUI. Learn Swift, SwiftUI, Combine, and Core Data.',
      freePreview: {
        video: 'HXoVSllLLeI',
        pdf: samplePDFs[4],
        quiz: true
      },
      whatYoullLearn: [
        'Swift programming language',
        'SwiftUI framework',
        'State management',
        'Networking and APIs',
        'Core Data and persistence',
        'App Store deployment'
      ],
      requirements: ['Mac computer required', 'No prior experience'],
      targetAudience: ['Aspiring iOS developers', 'Mac users'],
      curriculum: [
        {
          section: 'Swift Basics',
          lectures: [
            { id: '1-1', title: 'Swift Introduction', duration: '22:30', type: 'video', free: true, youtubeId: 'HXoVSllLLeI' },
            { id: '1-2', title: 'Variables and Constants', duration: '18:15', type: 'video', free: true, youtubeId: 'TQv5r7aZn18' },
          ]
        }
      ],
      downloads: [],
      notes: [],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'security-2',
      title: 'Network Security: Protect Your Infrastructure',
      instructor: 'Lisa Chen',
      instructorImage: 'LC',
      category: 'security',
      level: 'intermediate',
      language: 'English',
      subtitles: ['English'],
      rating: 4.8,
      students: 4320,
      price: 599,
      originalPrice: 1199,
      discount: 50,
      duration: '14 weeks',
      totalHours: 98,
      lectures: 147,
      quizzes: 16,
      assignments: 9,
      downloads: 24,
      certificate: true,
      badge: 'Top Rated',
      badgeColor: 'purple',
      image: '🌐',
      color: 'indigo',
      description: 'Master network security, firewalls, VPNs, and intrusion detection systems.',
      freePreview: {
        video: 'qiQR5rTSshw',
        pdf: samplePDFs[5],
        quiz: true
      },
      whatYoullLearn: [
        'Network protocols and security',
        'Firewall configuration',
        'VPN setup and management',
        'IDS/IPS implementation',
        'Network monitoring',
        'Incident response'
      ],
      requirements: ['Basic networking knowledge'],
      targetAudience: ['Network admins', 'Security professionals'],
      curriculum: [
        {
          section: 'Network Basics',
          lectures: [
            { id: '1-1', title: 'Network Fundamentals', duration: '32:10', type: 'video', free: true, youtubeId: 'qiQR5rTSshw' },
            { id: '1-2', title: 'TCP/IP Deep Dive', duration: '28:45', type: 'video', free: true, youtubeId: 'PGr0GdyCqdA' },
          ]
        }
      ],
      downloads: [],
      notes: [],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'cloud-2',
      title: 'Docker & Kubernetes: Containerization Mastery',
      instructor: 'David Kumar',
      instructorImage: 'DK',
      category: 'cloud',
      level: 'intermediate',
      language: 'English',
      subtitles: ['English'],
      rating: 4.9,
      students: 8760,
      price: 549,
      originalPrice: 1099,
      discount: 50,
      duration: '10 weeks',
      totalHours: 70,
      lectures: 105,
      quizzes: 12,
      assignments: 7,
      downloads: 20,
      certificate: true,
      badge: 'Bestseller',
      badgeColor: 'yellow',
      image: '🐳',
      color: 'blue',
      description: 'Master containerization with Docker and orchestration with Kubernetes.',
      freePreview: {
        video: 'gAkwW2BcCbE',
        pdf: samplePDFs[0],
        quiz: true
      },
      whatYoullLearn: [
        'Docker containers',
        'Docker Compose',
        'Kubernetes architecture',
        'Pods and services',
        'Deployments and scaling',
        'Container orchestration'
      ],
      requirements: ['Basic Linux knowledge'],
      targetAudience: ['DevOps engineers', 'Developers'],
      curriculum: [
        {
          section: 'Docker Basics',
          lectures: [
            { id: '1-1', title: 'Docker Introduction', duration: '25:30', type: 'video', free: true, youtubeId: 'gAkwW2BcCbE' },
            { id: '1-2', title: 'Docker Commands', duration: '22:15', type: 'video', free: true, youtubeId: 'i7ABlHngi1Q' },
          ]
        }
      ],
      downloads: [],
      notes: [],
      resources: [],
      discussions: [],
      announcements: []
    },
    {
      id: 'ai-2',
      title: 'Natural Language Processing with Python',
      instructor: 'Dr. Sarah Chen',
      instructorImage: 'SC',
      category: 'ai',
      level: 'advanced',
      language: 'English',
      subtitles: ['English'],
      rating: 4.8,
      students: 3210,
      price: 649,
      originalPrice: 1299,
      discount: 50,
      duration: '12 weeks',
      totalHours: 84,
      lectures: 126,
      quizzes: 14,
      assignments: 8,
      downloads: 22,
      certificate: true,
      badge: 'Advanced',
      badgeColor: 'orange',
      image: '📝',
      color: 'teal',
      description: 'Master NLP with Python, NLTK, spaCy, transformers, and BERT.',
      freePreview: {
        video: 'fL1J9xMqRjM',
        pdf: samplePDFs[1],
        quiz: true
      },
      whatYoullLearn: [
        'Text preprocessing',
        'NLP with NLTK and spaCy',
        'Sentiment analysis',
        'Named entity recognition',
        'Transformer models',
        'BERT and GPT applications'
      ],
      requirements: ['Python experience', 'ML basics'],
      targetAudience: ['Data scientists', 'AI engineers'],
      curriculum: [
        {
          section: 'NLP Basics',
          lectures: [
            { id: '1-1', title: 'NLP Introduction', duration: '28:30', type: 'video', free: true, youtubeId: 'fL1J9xMqRjM' },
            { id: '1-2', title: 'Text Processing', duration: '32:15', type: 'video', free: true, youtubeId: 'M7s5xTl1sHs' },
          ]
        }
      ],
      downloads: [],
      notes: [],
      resources: [],
      discussions: [],
      announcements: []
    }
  ];

  // Filter and sort courses
  const filteredCourses = coursesData
    .filter(course => {
      if (selectedCategory !== 'all' && course.category !== selectedCategory) return false;
      if (selectedLevel !== 'all' && course.level !== selectedLevel) return false;
      if (searchQuery) {
        return course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return b.students - a.students;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = freePreviewOnly 
    ? filteredCourses.filter(c => c.freePreview).slice(indexOfFirstCourse, indexOfLastCourse)
    : filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(
    (freePreviewOnly 
      ? filteredCourses.filter(c => c.freePreview).length 
      : filteredCourses.length) / coursesPerPage
  );

  // Check if user is enrolled in a course
  const isEnrolled = (courseId) => {
    return enrolledCourses.includes(courseId);
  };

  // Handle enrollment
  const handleEnrollment = (course) => {
    if (!enrollmentData.name || !enrollmentData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Add to enrolled courses
    setEnrolledCourses(prev => [...prev, course.id]);
    
    // Initialize progress
    setCourseProgress(prev => ({
      ...prev,
      [course.id]: {
        completedLectures: 0,
        totalLectures: course.lectures,
        quizzesPassed: 0,
        assignmentsSubmitted: 0,
        lastAccessed: new Date().toISOString()
      }
    }));

    toast.success(`Successfully enrolled in ${course.title}!`);
    setActiveModal(null);
    setEnrollmentData({
      name: '',
      email: '',
      phone: '',
      paymentMethod: 'card',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
      agreeTerms: false
    });
  };

  // Handle video playback
  const handleVideoPlay = (lecture) => {
    setPlayingVideo(lecture.id);
    
    // Mark as watching
    if (!watchedLectures[lecture.id]) {
      // Update progress
    }
  };

  const handleVideoProgress = (lectureId, progress) => {
    setVideoProgress(prev => ({
      ...prev,
      [lectureId]: progress
    }));

    // If progress > 90%, mark as completed
    if (progress > 90 && !watchedLectures[lectureId]) {
      markLectureCompleted(lectureId);
    }
  };

  const markLectureCompleted = (lectureId) => {
    setWatchedLectures(prev => ({
      ...prev,
      [lectureId]: true
    }));

    // Update course progress
    if (selectedCourse) {
      setCourseProgress(prev => ({
        ...prev,
        [selectedCourse.id]: {
          ...prev[selectedCourse.id],
          completedLectures: (prev[selectedCourse.id]?.completedLectures || 0) + 1
        }
      }));
    }

    toast.success('Lecture marked as completed!');
  };

  // Handle note taking
  const handleNoteSave = (lectureId) => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now(),
        lectureId,
        content: noteText,
        timestamp: new Date().toLocaleTimeString(),
        videoTimestamp: videoProgress[lectureId] || 0
      };
      
      setNotes(prev => ({
        ...prev,
        [lectureId]: [...(prev[lectureId] || []), newNote]
      }));
      
      setNoteText('');
      toast.success('Note saved successfully');
    }
  };

  // Handle quiz
  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setQuizAnswers({});
    setQuizActive(true);
    setQuizTimer(quiz.duration ? parseInt(quiz.duration) * 60 : 900); // Default 15 minutes
    
    // Start timer
    if (quizTimerRef.current) clearInterval(quizTimerRef.current);
    quizTimerRef.current = setInterval(() => {
      setQuizTimer(prev => {
        if (prev <= 1) {
          clearInterval(quizTimerRef.current);
          handleQuizSubmit(quiz.id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleQuizAnswer = (quizId, questionIndex, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [quizId]: {
        ...prev[quizId],
        [questionIndex]: answerIndex
      }
    }));
  };

  const handleQuizSubmit = (quizId) => {
    if (quizTimerRef.current) clearInterval(quizTimerRef.current);
    
    const quiz = currentQuiz;
    if (!quiz || !quiz.quizData) return;

    const questions = quiz.quizData.questions;
    const answers = quizAnswers[quizId] || {};
    
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) correctCount++;
    });

    const score = Math.round((correctCount / questions.length) * 100);
    
    setQuizResults(prev => ({
      ...prev,
      [quizId]: score
    }));

    setQuizActive(false);
    
    if (score >= 70) {
      toast.success(`Quiz passed! Score: ${score}%`);
      // Mark quiz as completed
      markLectureCompleted(quiz.id);
    } else {
      toast.warning(`Quiz failed. Score: ${score}%. You need 70% to pass.`);
    }
  };

  // Handle PDF viewing
  const openPdf = (pdf) => {
    setCurrentPdf(pdf);
    setActiveModal('pdf');
  };

  // Handle PDF download
  const handleDownload = (download) => {
    setDownloads(prev => ({
      ...prev,
      [download.id]: true
    }));
    
    // Simulate download
    toast.success(`Downloading ${download.title}...`);
    
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = download.url;
    link.download = download.title.replace(/\s+/g, '_') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      toast.success(`${download.title} downloaded successfully!`);
    }, 2000);
  };

  // Format time for quiz timer
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Calculate course progress percentage
  const getCourseProgress = (courseId) => {
    if (!courseProgress[courseId]) return 0;
    const progress = courseProgress[courseId];
    return Math.round((progress.completedLectures / progress.totalLectures) * 100) || 0;
  };

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Modals = {
    CourseDetail: ({ course }) => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
      >
        {/* Course Header */}
        <div className={`bg-gradient-to-r from-${course.color}-600 to-${course.color}-800 p-8 sticky top-0 z-10`}>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{course.image}</div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 bg-${course.badgeColor}-500/20 text-${course.badgeColor}-400 rounded-full text-xs font-semibold`}>
                    {course.badge}
                  </span>
                  <span className="flex items-center gap-1 text-white">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    {course.rating} ({course.students.toLocaleString()} students)
                  </span>
                  {isEnrolled(course.id) && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      Enrolled
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                    Free Preview Available
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{course.title}</h2>
                <p className="text-white/80">{course.description}</p>
              </div>
            </div>
          </div>

          {/* Course Meta */}
          <div className="flex flex-wrap gap-6 mt-6 text-white">
            <div className="flex items-center gap-2">
              <PersonIcon className="w-4 h-4" />
              <span>Instructor: {course.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <AccessTime className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MenuBookIcon className="w-4 h-4" />
              <span>{course.lectures} lectures</span>
            </div>
            <div className="flex items-center gap-2">
              <LanguageIcon className="w-4 h-4" />
              <span>{course.language}</span>
            </div>
            {isEnrolled(course.id) && (
              <div className="flex items-center gap-2">
                <TrendingUpIcon className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Progress: {getCourseProgress(course.id)}%</span>
              </div>
            )}
          </div>

          {/* Free Preview Section */}
          {course.freePreview && (
            <div className="mt-6 bg-white/10 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <PlayCircleIcon className="text-green-400" />
                Free Preview Available
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    const previewLecture = course.curriculum[0].lectures.find(l => l.free && l.type === 'video');
                    if (previewLecture) {
                      setSelectedLesson(previewLecture);
                      setSelectedCourse(course);
                      setActiveModal('video');
                    }
                  }}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <PlayArrowIcon />
                  Watch Free Video
                </button>
                <button
                  onClick={() => {
                    const previewPdf = course.downloads.find(d => d.free);
                    if (previewPdf) {
                      openPdf(previewPdf);
                    }
                  }}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <PictureAsPdfIcon />
                  View Free PDF
                </button>
                <button
                  onClick={() => {
                    const previewQuiz = course.curriculum[0].lectures.find(l => l.free && l.type === 'quiz');
                    if (previewQuiz) {
                      setSelectedLesson(previewQuiz);
                      setCurrentQuiz(previewQuiz);
                      setActiveModal('quiz');
                    }
                  }}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <QuizIcon />
                  Try Free Quiz
                </button>
              </div>
            </div>
          )}

          {/* Price and CTA */}
          <div className="flex items-center justify-between mt-6">
            <div>
              {!isEnrolled(course.id) ? (
                <>
                  <span className="text-3xl font-bold text-white">${course.price}</span>
                  <span className="text-white/60 line-through ml-2">${course.originalPrice}</span>
                  <span className="ml-2 text-green-400">{course.discount}% off</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-green-400">You're enrolled!</span>
              )}
            </div>
            <div className="flex gap-3">
              {!isEnrolled(course.id) ? (
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setActiveModal('enroll');
                  }}
                  className="bg-gradient-to-t from-green-600 to-green-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-300"
                >
                  Enroll Now
                </button>
              ) : (
                <button
                  onClick={() => {
                    setSelectedCourse(course);
                    setActiveModal('learning');
                  }}
                  className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                >
                  Continue Learning
                </button>
              )}
              <button
                onClick={() => setActiveModal(null)}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800">
          <div className="flex overflow-x-auto">
            {['overview', 'curriculum', 'notes', 'downloads', 'discussions', 'announcements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? `text-${course.color}-400 border-b-2 border-${course.color}-400`
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* What You'll Learn */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {course.whatYoullLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircleIcon className={`text-${course.color}-400 w-5 h-5 mt-0.5`} />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Target Audience */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Who This Course Is For</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {course.targetAudience.map((audience, index) => (
                    <li key={index}>{audience}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div>
              {course.curriculum.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-4 border border-gray-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedSections(prev => ({
                      ...prev,
                      [sectionIndex]: !prev[sectionIndex]
                    }))}
                    className="w-full p-4 bg-gray-800 flex items-center justify-between hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <MenuBookIcon className={`text-${course.color}-400`} />
                      <span className="text-white font-semibold">{section.section}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">{section.lectures.length} lectures</span>
                      {expandedSections[sectionIndex] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections[sectionIndex] && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        {section.lectures.map((lecture, lectureIndex) => (
                          <div
                            key={lectureIndex}
                            className="p-4 border-t border-gray-800 hover:bg-gray-800/50 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              {lecture.type === 'video' && (
                                lecture.free || isEnrolled(course.id) ? 
                                  <PlayCircleIcon className="text-green-400" /> : 
                                  <LockIcon className="text-gray-500" />
                              )}
                              {lecture.type === 'pdf' && (
                                lecture.free || isEnrolled(course.id) ? 
                                  <PictureAsPdfIcon className="text-red-400" /> : 
                                  <LockIcon className="text-gray-500" />
                              )}
                              {lecture.type === 'quiz' && <QuizIcon className="text-purple-400" />}
                              {lecture.type === 'assignment' && <AssignmentIcon className="text-orange-400" />}
                              <div>
                                <span className="text-white">{lecture.title}</span>
                                {lecture.type === 'video' && (
                                  <span className="text-sm text-gray-400 ml-2">{lecture.duration}</span>
                                )}
                                {lecture.type === 'quiz' && (
                                  <span className="text-sm text-gray-400 ml-2">{lecture.questions} questions</span>
                                )}
                                {watchedLectures[lecture.id] && (
                                  <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                                    Completed
                                  </span>
                                )}
                              </div>
                              {lecture.free && !isEnrolled(course.id) && (
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Free</span>
                              )}
                            </div>
                            
                            {(lecture.free || isEnrolled(course.id)) && (
                              <div className="flex items-center gap-2">
                                {lecture.type === 'video' && (
                                  <button
                                    onClick={() => {
                                      setSelectedLesson(lecture);
                                      setSelectedCourse(course);
                                      setActiveModal('video');
                                    }}
                                    className="text-blue-400 hover:text-blue-300"
                                  >
                                    <PlayArrowIcon />
                                  </button>
                                )}
                                {lecture.type === 'pdf' && (
                                  <button
                                    onClick={() => openPdf(lecture)}
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    <PictureAsPdfIcon />
                                  </button>
                                )}
                                {lecture.type === 'quiz' && (
                                  <button
                                    onClick={() => {
                                      setSelectedLesson(lecture);
                                      setCurrentQuiz(lecture);
                                      setActiveModal('quiz');
                                    }}
                                    className="text-purple-400 hover:text-purple-300"
                                  >
                                    <QuizIcon />
                                  </button>
                                )}
                                {lecture.type === 'assignment' && (
                                  <button
                                    onClick={() => {
                                      setSelectedLesson(lecture);
                                      setActiveModal('assignment');
                                    }}
                                    className="text-orange-400 hover:text-orange-300"
                                  >
                                    <AssignmentIcon />
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'notes' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Your Notes</h3>
              <div className="space-y-4">
                {Object.keys(notes).length > 0 ? (
                  Object.entries(notes).map(([lectureId, lectureNotes]) => (
                    <div key={lectureId} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">
                        Lecture {lectureId}
                      </h4>
                      {lectureNotes.map((note, index) => (
                        <div key={note.id} className="mb-2 pb-2 border-b border-gray-700 last:border-0">
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>{note.timestamp}</span>
                            <span>Video: {Math.round(note.videoTimestamp)}%</span>
                          </div>
                          <p className="text-gray-300 text-sm">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No notes yet. Start watching and take notes!</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'downloads' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Course Downloads</h3>
              <div className="grid gap-3">
                {course.downloads.map((dl, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {dl.type === 'pdf' ? <PictureAsPdfIcon className="text-red-400" /> : <InsertDriveFileIcon className="text-blue-400" />}
                      <div>
                        <span className="text-white">{dl.title}</span>
                        <span className="text-sm text-gray-400 ml-2">({dl.size})</span>
                        {dl.description && (
                          <p className="text-xs text-gray-500 mt-1">{dl.description}</p>
                        )}
                        {dl.free && (
                          <span className="mt-1 inline-block text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Free</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {(dl.free || isEnrolled(course.id)) && (
                        <>
                          <button
                            onClick={() => openPdf(dl)}
                            className="text-blue-400 hover:text-blue-300"
                            title="View PDF"
                          >
                            <VisibilityIcon />
                          </button>
                          <button
                            onClick={() => handleDownload(dl)}
                            className="text-green-400 hover:text-green-300"
                            title="Download"
                          >
                            <CloudDownloadIcon />
                          </button>
                        </>
                      )}
                      {!dl.free && !isEnrolled(course.id) && (
                        <LockIcon className="text-gray-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'discussions' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Discussions</h3>
                {isEnrolled(course.id) && (
                  <button className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-500">
                    New Discussion
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {course.discussions.map((disc, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-blue-400">{disc.user}</span>
                      <span className="text-xs text-gray-400">{disc.time}</span>
                    </div>
                    <p className="text-white mb-2">{disc.question}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">{disc.replies} replies</span>
                      <button className="text-blue-400 text-sm hover:underline">Reply</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'announcements' && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Announcements</h3>
              <div className="space-y-4">
                {course.announcements.map((ann, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-white">{ann.title}</span>
                      <span className="text-xs text-gray-400">{ann.date}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{ann.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    ),

    VideoPlayer: ({ lesson, course }) => {
      const [playerReady, setPlayerReady] = useState(false);
      const [currentTime, setCurrentTime] = useState(0);
      const [duration, setDuration] = useState(0);
      const [playbackRate, setPlaybackRate] = useState(1);
      const [volume, setVolume] = useState(80);
      const [muted, setMuted] = useState(false);
      const [fullscreen, setFullscreen] = useState(false);
      const [showControls, setShowControls] = useState(true);
      const [captions, setCaptions] = useState(false);
      const [quality, setQuality] = useState('auto');
      const [noteText, setNoteText] = useState('');
      const [lectureNotes, setLectureNotes] = useState([]);
      
      const playerRef = useRef(null);
      const controlsTimeoutRef = useRef(null);

      // Load saved notes for this lecture
      useEffect(() => {
        if (notes[lesson?.id]) {
          setLectureNotes(notes[lesson.id]);
        }
      }, [lesson]);

      // Handle video time update
      const handleTimeUpdate = () => {
        if (playerRef.current) {
          const current = playerRef.current.currentTime;
          const dur = playerRef.current.duration;
          setCurrentTime(current);
          setDuration(dur);
          
          // Update progress (every 10 seconds)
          if (Math.floor(current) % 10 === 0) {
            const progress = (current / dur) * 100;
            handleVideoProgress(lesson.id, progress);
          }
        }
      };

      // Handle video end
      const handleVideoEnded = () => {
        if (!lesson.free || isEnrolled(course.id)) {
          markLectureCompleted(lesson.id);
        }
        toast.success('Video completed!');
      };

      // Handle playback rate change
      const changePlaybackRate = (rate) => {
        if (playerRef.current) {
          playerRef.current.playbackRate = rate;
          setPlaybackRate(rate);
        }
      };

      // Handle volume change
      const handleVolumeChange = (e) => {
        const vol = e.target.value;
        setVolume(vol);
        if (playerRef.current) {
          playerRef.current.volume = vol / 100;
        }
        setMuted(vol === 0);
      };

      // Toggle mute
      const toggleMute = () => {
        if (playerRef.current) {
          playerRef.current.muted = !muted;
          setMuted(!muted);
        }
      };

      // Toggle fullscreen
      const toggleFullscreen = () => {
        if (!fullscreen) {
          if (playerContainerRef.current.requestFullscreen) {
            playerContainerRef.current.requestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
        setFullscreen(!fullscreen);
      };

      // Seek forward/backward
      const seek = (seconds) => {
        if (playerRef.current) {
          playerRef.current.currentTime += seconds;
        }
      };

      // Format time for display
      const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        
        if (hrs > 0) {
          return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };

      // Save note for this lecture
      const saveNote = () => {
        if (noteText.trim()) {
          const newNote = {
            id: Date.now(),
            content: noteText,
            timestamp: formatTime(currentTime),
            timeSeconds: currentTime
          };
          
          setLectureNotes(prev => [...prev, newNote]);
          setNotes(prev => ({
            ...prev,
            [lesson.id]: [...(prev[lesson.id] || []), newNote]
          }));
          
          setNoteText('');
          toast.success('Note saved at ' + formatTime(currentTime));
        }
      };

      // Jump to note timestamp
      const jumpToNote = (timeSeconds) => {
        if (playerRef.current) {
          playerRef.current.currentTime = timeSeconds;
        }
      };

      return (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
        >
          <div className="flex flex-col lg:flex-row h-[90vh]">
            {/* Video Player Section */}
            <div className="lg:w-3/4 flex flex-col">
              {/* Video Player */}
              <div 
                ref={playerContainerRef}
                className="relative bg-black aspect-video"
                onMouseMove={() => {
                  setShowControls(true);
                  if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
                  controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
                }}
                onMouseLeave={() => setShowControls(false)}
              >
                <iframe
                  ref={playerRef}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${lesson.youtubeId}?enablejsapi=1&controls=0&fs=0&modestbranding=1&rel=0&autoplay=1`}
                  title={lesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Custom Controls */}
                <AnimatePresence>
                  {showControls && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4"
                    >
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <input
                          type="range"
                          min="0"
                          max={duration || 100}
                          value={currentTime}
                          onChange={(e) => {
                            if (playerRef.current) {
                              playerRef.current.currentTime = e.target.value;
                            }
                          }}
                          className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-white mt-1">
                          <span>{formatTime(currentTime)}</span>
                          <span>{formatTime(duration)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => seek(-10)}
                            className="text-white hover:text-blue-400 p-1"
                          >
                            <Replay10Icon />
                          </button>
                          <button
                            onClick={() => {
                              if (playerRef.current) {
                                if (playerRef.current.paused) {
                                  playerRef.current.play();
                                } else {
                                  playerRef.current.pause();
                                }
                              }
                            }}
                            className="text-white hover:text-blue-400 p-1"
                          >
                            {playerRef.current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                          </button>
                          <button
                            onClick={() => seek(10)}
                            className="text-white hover:text-blue-400 p-1"
                          >
                            <Forward10Icon />
                          </button>
                          
                          <div className="flex items-center gap-2 ml-2">
                            <button onClick={toggleMute} className="text-white hover:text-blue-400">
                              {muted ? <VolumeOffIcon /> : <VolumeUpIcon1 />}
                            </button>
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value={volume}
                              onChange={handleVolumeChange}
                              className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {/* Playback Speed */}
                          <select
                            value={playbackRate}
                            onChange={(e) => changePlaybackRate(parseFloat(e.target.value))}
                            className="bg-gray-800 text-white text-sm rounded px-2 py-1 border border-gray-700"
                          >
                            <option value="0.5">0.5x</option>
                            <option value="1">1x</option>
                            <option value="1.25">1.25x</option>
                            <option value="1.5">1.5x</option>
                            <option value="2">2x</option>
                          </select>

                          {/* Quality */}
                          <select
                            value={quality}
                            onChange={(e) => setQuality(e.target.value)}
                            className="bg-gray-800 text-white text-sm rounded px-2 py-1 border border-gray-700"
                          >
                            <option value="auto">Auto</option>
                            <option value="1080p">1080p</option>
                            <option value="720p">720p</option>
                            <option value="480p">480p</option>
                            <option value="360p">360p</option>
                          </select>

                          {/* Captions */}
                          <button
                            onClick={() => setCaptions(!captions)}
                            className={`p-1 ${captions ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
                          >
                            <ClosedCaptionIcon />
                          </button>

                          {/* Fullscreen */}
                          <button
                            onClick={toggleFullscreen}
                            className="text-white hover:text-blue-400 p-1"
                          >
                            <FullscreenIcon />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Video Info */}
              <div className="p-4 bg-gray-900">
                <h3 className="text-xl font-bold text-white">{lesson.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{lesson.description}</p>
                
                {/* Mark Complete Button (only for enrolled users) */}
                {!lesson.free && isEnrolled(course.id) && !watchedLectures[lesson.id] && (
                  <button
                    onClick={() => markLectureCompleted(lesson.id)}
                    className="mt-3 bg-gradient-to-t from-green-600 to-green-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-700 hover:to-green-500"
                  >
                    Mark as Completed
                  </button>
                )}
                
                {/* Free Preview Notice */}
                {lesson.free && !isEnrolled(course.id) && (
                  <div className="mt-3 text-sm text-green-400">
                    This is a free preview. Enroll to access the full course!
                  </div>
                )}
              </div>
            </div>

            {/* Notes Section */}
            <div className="lg:w-1/4 bg-gray-900 border-l border-gray-800 flex flex-col">
              <div className="p-4 border-b border-gray-800">
                <h4 className="font-semibold text-white flex items-center gap-2">
                  <DescriptionIcon className="text-blue-400" />
                  Lecture Notes
                </h4>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {/* Add Note (only for enrolled users or free preview) */}
                {(isEnrolled(course.id) || lesson.free) && (
                  <div className="mb-4">
                    <textarea
                      value={noteText}
                      onChange={(e) => setNoteText(e.target.value)}
                      placeholder="Take notes at current timestamp..."
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                    ></textarea>
                    <button
                      onClick={saveNote}
                      disabled={!noteText.trim()}
                      className="w-full mt-2 bg-gradient-to-t from-blue-600 to-blue-400 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Save Note at {formatTime(currentTime)}
                    </button>
                  </div>
                )}

                {/* Notes List */}
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-gray-400">Saved Notes</h5>
                  {lectureNotes.length > 0 ? (
                    lectureNotes.map((note, index) => (
                      <div key={note.id} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                        <div className="flex justify-between items-start mb-1">
                          <button
                            onClick={() => jumpToNote(note.timeSeconds)}
                            className="text-xs text-blue-400 hover:underline"
                          >
                            {note.timestamp}
                          </button>
                        </div>
                        <p className="text-sm text-gray-300">{note.content}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No notes yet for this lecture.</p>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <div className="p-4 border-t border-gray-800">
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full border-2 border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      );
    },

    PDFViewer: ({ pdf }) => {
      return (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-5xl mx-4 overflow-hidden shadow-2xl border border-gray-800 h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center gap-3">
              <PictureAsPdfIcon className="text-red-400 text-2xl" />
              <div>
                <h3 className="text-white font-semibold">{pdf.title}</h3>
                <p className="text-xs text-gray-400">PDF Document</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownload(pdf)}
                className="text-green-400 hover:text-green-300 p-2"
                title="Download"
              >
                <CloudDownloadIcon />
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white p-2"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 bg-gray-700">
            <iframe
              ref={pdfIframeRef}
              src={`${pdf.url}#view=FitH`}
              title={pdf.title}
              width="100%"
              height="100%"
              className="border-0"
            />
          </div>
        </motion.div>
      );
    },

    Quiz: ({ quiz, course }) => {
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [answers, setAnswers] = useState({});
      const [showResults, setShowResults] = useState(false);
      const [score, setScore] = useState(0);
      const [timeLeft, setTimeLeft] = useState(quiz.duration ? parseInt(quiz.duration) * 60 : 900);
      
      useEffect(() => {
        if (!showResults && timeLeft > 0) {
          const timer = setInterval(() => {
            setTimeLeft(prev => {
              if (prev <= 1) {
                clearInterval(timer);
                handleSubmit();
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
          
          return () => clearInterval(timer);
        }
      }, [showResults]);

      const questions = quiz.quizData.questions;
      
      const handleAnswer = (questionIndex, answerIndex) => {
        setAnswers(prev => ({
          ...prev,
          [questionIndex]: answerIndex
        }));
      };

      const handleSubmit = () => {
        let correctCount = 0;
        questions.forEach((q, index) => {
          if (answers[index] === q.correct) correctCount++;
        });
        
        const finalScore = Math.round((correctCount / questions.length) * 100);
        setScore(finalScore);
        setShowResults(true);
        
        // Save result
        setQuizResults(prev => ({
          ...prev,
          [quiz.id]: finalScore
        }));

        if (finalScore >= 70 && !quiz.free) {
          markLectureCompleted(quiz.id);
        }
      };

      const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };

      return (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-3xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{quiz.title}</h3>
                <p className="text-gray-400">{questions.length} questions</p>
                {quiz.free && !isEnrolled(course.id) && (
                  <span className="mt-1 inline-block text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    Free Preview
                  </span>
                )}
              </div>
              {!showResults && (
                <div className="flex items-center gap-2 text-xl font-bold">
                  <TimerIcon className="text-yellow-400" />
                  <span className={timeLeft < 300 ? 'text-red-400' : 'text-white'}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
              )}
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white"
              >
                <CloseIcon />
              </button>
            </div>

            {showResults ? (
              /* Results */
              <div className="text-center py-8">
                <div className="text-6xl font-bold mb-4">
                  <span className={score >= 70 ? 'text-green-400' : 'text-red-400'}>
                    {score}%
                  </span>
                </div>
                <p className="text-xl text-white mb-2">
                  {score >= 70 ? 'Congratulations! You passed!' : 'Keep practicing!'}
                </p>
                <p className="text-gray-400 mb-6">
                  You got {Math.round((score / 100) * questions.length)} out of {questions.length} correct
                </p>
                
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => {
                      setCurrentQuestionIndex(0);
                      setAnswers({});
                      setShowResults(false);
                      setTimeLeft(quiz.duration ? parseInt(quiz.duration) * 60 : 900);
                    }}
                    className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500"
                  >
                    Retry Quiz
                  </button>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="border-2 border-gray-600 text-gray-300 px-6 py-2 rounded-lg font-semibold hover:bg-gray-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              /* Quiz Questions */
              <div>
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all"
                      style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Current Question */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {questions[currentQuestionIndex].question}
                  </h4>
                  <div className="space-y-3">
                    {questions[currentQuestionIndex].options.map((option, optIndex) => (
                      <label
                        key={optIndex}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                          answers[currentQuestionIndex] === optIndex
                            ? 'bg-blue-600/20 border-blue-500'
                            : 'bg-gray-700/50 border-gray-600 hover:bg-gray-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={optIndex}
                          checked={answers[currentQuestionIndex] === optIndex}
                          onChange={() => handleAnswer(currentQuestionIndex, optIndex)}
                          className="hidden"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                          answers[currentQuestionIndex] === optIndex
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-400'
                        }`}>
                          {answers[currentQuestionIndex] === optIndex && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="text-gray-300">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {currentQuestionIndex === questions.length - 1 ? (
                    <button
                      onClick={handleSubmit}
                      className="bg-gradient-to-t from-green-600 to-green-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-green-500"
                    >
                      Submit Quiz
                    </button>
                  ) : (
                    <button
                      onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                      className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500"
                    >
                      Next Question
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      );
    },

    Assignment: ({ assignment, course }) => {
      const [submission, setSubmission] = useState('');
      const [githubUrl, setGithubUrl] = useState('');
      const [files, setFiles] = useState([]);
      const [submitted, setSubmitted] = useState(false);

      const handleFileUpload = (e) => {
        const uploadedFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...uploadedFiles]);
      };

      const handleSubmit = () => {
        // In real app, this would upload to server
        setSubmitted(true);
        if (!assignment.free) {
          markLectureCompleted(assignment.id);
        }
        toast.success('Assignment submitted successfully!');
      };

      return (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-3xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{assignment.assignmentData?.title || 'Assignment'}</h3>
                <p className="text-gray-400">Course: {course?.title}</p>
                {assignment.free && !isEnrolled(course.id) && (
                  <span className="mt-1 inline-block text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    Free Preview
                  </span>
                )}
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white"
              >
                <CloseIcon />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircleIcon className="text-6xl text-green-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Assignment Submitted!</h4>
                <p className="text-gray-400 mb-6">Your instructor will review your submission.</p>
                <button
                  onClick={() => setActiveModal(null)}
                  className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Description */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
                  <h4 className="font-semibold text-white mb-2">Instructions</h4>
                  <p className="text-gray-300 mb-4">{assignment.assignmentData?.description}</p>
                  
                  <h5 className="font-semibold text-white mb-2">Steps:</h5>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    {assignment.assignmentData?.instructions.map((inst, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">{inst}</li>
                    ))}
                  </ul>

                  {assignment.assignmentData?.resources && (
                    <>
                      <h5 className="font-semibold text-white mb-2">Resources:</h5>
                      <div className="flex gap-2">
                        {assignment.assignmentData.resources.map((res, idx) => (
                          <span key={idx} className="text-xs bg-gray-700 text-blue-400 px-2 py-1 rounded-full">
                            {res}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Submission Form */}
                <div className="space-y-4">
                  {assignment.assignmentData?.submissionType === 'github' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        GitHub Repository URL
                      </label>
                      <input
                        type="url"
                        value={githubUrl}
                        onChange={(e) => setGithubUrl(e.target.value)}
                        placeholder="https://github.com/username/repo"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Additional Notes / Comments
                    </label>
                    <textarea
                      value={submission}
                      onChange={(e) => setSubmission(e.target.value)}
                      placeholder="Any notes about your submission..."
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Upload Files (optional)
                    </label>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                    />
                    {files.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {files.map((file, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <InsertDriveFileIcon className="w-4 h-4" />
                            <span>{file.name}</span>
                            <span className="text-xs">({(file.size / 1024).toFixed(2)} KB)</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={assignment.assignmentData?.submissionType === 'github' && !githubUrl}
                    className="w-full bg-gradient-to-t from-green-600 to-green-400 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Assignment
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      );
    },

    Enroll: ({ course }) => {
      const [step, setStep] = useState(1);
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        paymentMethod: 'card',
        cardNumber: '',
        cardExpiry: '',
        cardCvv: '',
        agreeTerms: false
      });

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
          setStep(2);
        } else {
          handleEnrollment(course);
        }
      };

      return (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Course Info */}
            <div className={`lg:w-1/2 bg-gradient-to-t from-${course.color}-600 to-${course.color}-800 p-8`}>
              <div className="text-center text-white">
                <SchoolIcon sx={{ fontSize: 80 }} className="mb-4" />
                <h2 className="text-3xl font-bold mb-4">Enroll in Course</h2>
                <p className="text-xl mb-2">{course.title}</p>
                <p className="text-lg opacity-90 mb-4">with {course.instructor}</p>
                
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="text-3xl font-bold">${course.price}</div>
                  <div className="text-sm line-through opacity-75">${course.originalPrice}</div>
                  <div className="text-green-300 mt-1">{course.discount}% off</div>
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="text-green-300 w-5 h-5" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="text-green-300 w-5 h-5" />
                    <span>{course.lectures} lectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="text-green-300 w-5 h-5" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="text-green-300 w-5 h-5" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Enrollment Form */}
            <div className="lg:w-1/2 p-8 bg-gray-900">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {step === 1 ? 'Student Information' : 'Payment Details'}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                <div className={`flex-1 h-1 ${step >= 1 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                <div className={`mx-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}>1</div>
                <div className={`flex-1 h-1 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                <div className={`mx-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
                }`}>2</div>
                <div className={`flex-1 h-1 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Payment Method
                      </label>
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="card">Credit / Debit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bank">Bank Transfer</option>
                      </select>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <>
                        <div>
                          <label className="block text-sm font-semibold text-gray-300 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleChange}
                              placeholder="MM/YY"
                              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              name="cardCvv"
                              value={formData.cardCvv}
                              onChange={handleChange}
                              placeholder="123"
                              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="accent-blue-500"
                        required
                      />
                      <label className="text-sm text-gray-300">
                        I agree to the Terms of Service and Privacy Policy
                      </label>
                    </div>
                  </>
                )}

                <div className="flex gap-3">
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className={`flex-1 bg-gradient-to-t from-green-600 to-green-400 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-500 ${
                      step === 1 ? 'w-full' : ''
                    }`}
                  >
                    {step === 1 ? 'Continue to Payment' : `Pay $${course.price}`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      );
    },

    Learning: ({ course }) => {
      const [activeSection, setActiveSection] = useState(0);
      const [activeLecture, setActiveLecture] = useState(null);
      const courseProgress = getCourseProgress(course.id);

      // Find first incomplete lecture
      useEffect(() => {
        for (const section of course.curriculum) {
          for (const lecture of section.lectures) {
            if (!watchedLectures[lecture.id] && (lecture.free || isEnrolled(course.id))) {
              setActiveLecture(lecture);
              return;
            }
          }
        }
      }, []);

      return (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800 h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center gap-4">
              <div className="text-3xl">{course.image}</div>
              <div>
                <h2 className="text-xl font-bold text-white">{course.title}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>Progress: {courseProgress}%</span>
                  <div className="w-32 h-2 bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${courseProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="text-gray-400 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar - Curriculum */}
            <div className="w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto">
              {course.curriculum.map((section, sIndex) => (
                <div key={sIndex} className="border-b border-gray-800">
                  <button
                    onClick={() => setActiveSection(activeSection === sIndex ? null : sIndex)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-800"
                  >
                    <div className="flex items-center gap-2">
                      <MenuBookIcon className="text-blue-400 w-5 h-5" />
                      <span className="text-white font-semibold">{section.section}</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {section.lectures.length} lectures
                    </span>
                  </button>
                  
                  {activeSection === sIndex && (
                    <div className="bg-gray-800/50">
                      {section.lectures.map((lecture, lIndex) => (
                        <button
                          key={lIndex}
                          onClick={() => setActiveLecture(lecture)}
                          className={`w-full p-3 pl-8 flex items-center gap-2 hover:bg-gray-700 ${
                            activeLecture?.id === lecture.id ? 'bg-blue-600/20' : ''
                          }`}
                        >
                          {lecture.type === 'video' && (
                            watchedLectures[lecture.id] ? 
                              <CheckCircleIcon className="w-4 h-4 text-green-400" /> :
                              <PlayCircleIcon className="w-4 h-4 text-gray-400" />
                          )}
                          {lecture.type === 'pdf' && (
                            <PictureAsPdfIcon className="w-4 h-4 text-red-400" />
                          )}
                          {lecture.type === 'quiz' && <QuizIcon className="w-4 h-4 text-purple-400" />}
                          {lecture.type === 'assignment' && <AssignmentIcon className="w-4 h-4 text-orange-400" />}
                          <span className="text-sm text-gray-300 truncate flex-1 text-left">
                            {lecture.title}
                          </span>
                          {lecture.free && (
                            <span className="text-xs text-green-400">Free</span>
                          )}
                          <span className="text-xs text-gray-500">{lecture.duration}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Main Player Area */}
            <div className="flex-1 bg-black">
              {activeLecture ? (
                activeLecture.type === 'video' ? (
                  <div className="h-full flex flex-col">
                    <div className="flex-1">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${activeLecture.youtubeId}?autoplay=1`}
                        title={activeLecture.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="bg-gray-900 p-4">
                      <h3 className="text-white font-semibold">{activeLecture.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{activeLecture.description}</p>
                      {activeLecture.free && (
                        <p className="text-xs text-green-400 mt-1">Free Preview</p>
                      )}
                    </div>
                  </div>
                ) : activeLecture.type === 'pdf' ? (
                  <div className="h-full">
                    <iframe
                      src={`${activeLecture.pdfUrl}#view=FitH`}
                      title={activeLecture.title}
                      width="100%"
                      height="100%"
                      className="border-0"
                    />
                  </div>
                ) : activeLecture.type === 'quiz' ? (
                  <div className="h-full overflow-y-auto p-6">
                    <Quiz quiz={activeLecture} course={course} />
                  </div>
                ) : (
                  <div className="h-full overflow-y-auto p-6">
                    <Assignment assignment={activeLecture} course={course} />
                  </div>
                )
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  Select a lecture to start learning
                </div>
              )}
            </div>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-blue-400 font-semibold text-sm mb-6 border border-blue-500/30">
              Our Courses
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Learn from the Best{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Coding Courses
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master in-demand skills with our comprehensive courses. Learn at your own pace with video lectures,
              hands-on projects, and personalized support. Try free previews before enrolling!
            </p>

            {/* Free Preview Toggle */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => {
                  setFreePreviewOnly(!freePreviewOnly);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  freePreviewOnly
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {freePreviewOnly ? 'Showing Free Previews' : 'Show All Courses'}
              </button>
            </div>

            {/* My Learning Button */}
            {enrolledCourses.length > 0 && (
              <button
                onClick={() => {
                  const course = coursesData.find(c => c.id === enrolledCourses[0]);
                  setSelectedCourse(course);
                  setActiveModal('learning');
                }}
                className="bg-gradient-to-t from-green-600 to-green-400 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-500 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
              >
                <PlayLessonIcon />
                Continue Learning
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-8 border-y border-gray-800 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-96">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses Section */}
      {enrolledCourses.length > 0 && (
        <section className="bg-gradient-to-b from-black to-gray-900 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <PlayLessonIcon className="text-green-400" />
              My Learning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursesData.filter(c => enrolledCourses.includes(c.id)).map(course => (
                <div key={course.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex items-center gap-4">
                  <div className={`text-4xl bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 w-16 h-16 rounded-lg flex items-center justify-center`}>
                    {course.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">{course.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1 bg-gray-700 rounded-full">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${getCourseProgress(course.id)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{getCourseProgress(course.id)}%</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCourse(course);
                      setActiveModal('learning');
                    }}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <PlayArrowIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Free Preview Banner */}
      {freePreviewOnly && (
        <div className="bg-gradient-to-r from-green-600 to-green-800 py-3">
          <div className="container mx-auto px-4 text-center text-white">
            <p className="flex items-center justify-center gap-2">
              <PlayCircleIcon />
              Showing courses with free preview content. Click on any course to try before you buy!
            </p>
          </div>
        </div>
      )}

      {/* Courses Grid */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
                onClick={() => {
                  setSelectedCourse(course);
                  setActiveModal('CourseDetail');
                }}
              >
                {/* Course Image */}
                <div className={`bg-gradient-to-br from-${course.color}-600 to-${course.color}-800 p-6 relative`}>
                  <div className="text-6xl text-center">{course.image}</div>
                  {course.badge && (
                    <span className={`absolute top-4 right-4 px-2 py-1 bg-${course.badgeColor}-500/20 text-${course.badgeColor}-400 rounded-full text-xs font-semibold`}>
                      {course.badge}
                    </span>
                  )}
                  {isEnrolled(course.id) && (
                    <span className="absolute top-4 left-4 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      Enrolled
                    </span>
                  )}
                  {course.freePreview && !isEnrolled(course.id) && (
                    <span className="absolute bottom-4 left-4 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      Free Preview
                    </span>
                  )}
                </div>

                {/* Course Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-${course.color}-400 text-sm font-semibold`}>
                      {categories.find(c => c.id === course.category)?.name}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{course.level}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-${course.color}-500 to-${course.color}-600 flex items-center justify-center text-xs text-white font-bold`}>
                      {course.instructorImage}
                    </div>
                    <span className="text-sm text-gray-300">{course.instructor}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon key={star} className={`w-4 h-4 ${star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-300">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MenuBookIcon className="w-4 h-4" />
                      <span>{course.lectures} lectures</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <AccessTime className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Free Preview Actions */}
                  {course.freePreview && !isEnrolled(course.id) && (
                    <div className="flex gap-2 mb-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const previewLecture = course.curriculum[0].lectures.find(l => l.free && l.type === 'video');
                          if (previewLecture) {
                            setSelectedLesson(previewLecture);
                            setSelectedCourse(course);
                            setActiveModal('video');
                          }
                        }}
                        className="flex-1 flex items-center justify-center gap-1 bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs transition-colors"
                      >
                        <PlayArrowIcon className="w-3 h-3" />
                        Watch Free
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const previewPdf = course.downloads.find(d => d.free);
                          if (previewPdf) {
                            openPdf(previewPdf);
                          }
                        }}
                        className="flex-1 flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs transition-colors"
                      >
                        <PictureAsPdfIcon className="w-3 h-3" />
                        View PDF
                      </button>
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    {!isEnrolled(course.id) ? (
                      <>
                        <div>
                          <span className="text-2xl font-bold text-white">${course.price}</span>
                          <span className="text-sm text-gray-400 line-through ml-2">${course.originalPrice}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCourse(course);
                            setActiveModal('enroll');
                          }}
                          className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                        >
                          Enroll Now
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="text-green-400 text-sm font-semibold">
                          {getCourseProgress(course.id)}% Complete
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCourse(course);
                            setActiveModal('learning');
                          }}
                          className="bg-gradient-to-t from-green-600 to-green-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-700 hover:to-green-500"
                        >
                          Continue
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {currentCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No courses found matching your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === i + 1
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                >
                  Next
                </button>
              </nav>
            </div>
          )}

          {/* Page Info */}
          <div className="text-center mt-4 text-gray-400 text-sm">
            Showing {indexOfFirstCourse + 1} to {Math.min(indexOfLastCourse, freePreviewOnly ? filteredCourses.filter(c => c.freePreview).length : filteredCourses.length)} of {freePreviewOnly ? filteredCourses.filter(c => c.freePreview).length : filteredCourses.length} courses
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
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveModal(null)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              {activeModal === 'CourseDetail' && <Modals.CourseDetail course={selectedCourse} />}
              {activeModal === 'video' && <Modals.VideoPlayer lesson={selectedLesson} course={selectedCourse} />}
              {activeModal === 'pdf' && <Modals.PDFViewer pdf={currentPdf} />}
              {activeModal === 'quiz' && <Modals.Quiz quiz={selectedLesson} course={selectedCourse} />}
              {activeModal === 'assignment' && <Modals.Assignment assignment={selectedLesson} course={selectedCourse} />}
              {activeModal === 'enroll' && <Modals.Enroll course={selectedCourse} />}
              {activeModal === 'learning' && <Modals.Learning course={selectedCourse} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};