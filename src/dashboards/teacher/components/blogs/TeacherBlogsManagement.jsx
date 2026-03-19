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
  Article as ArticleIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Comment as CommentIcon,
  ThumbUp as ThumbUpIcon,
  ThumbUpOutlined as ThumbUpOutlinedIcon,
  VisibilityOutlined as VisibilityOutlinedIcon,
  Category as CategoryIcon,
  Tag as TagIcon,
  Image as ImageIcon,
  Link as LinkIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  FormatListBulleted as FormatListBulletedIcon,
  FormatListNumbered as FormatListNumberedIcon,
  FormatQuote as FormatQuoteIcon,
  Title as TitleIcon,
  Subtitles as SubtitlesIcon,
  Photo as PhotoIcon,
  AttachFile as AttachFileIcon,
  Save as SaveIcon,
  Preview as PreviewIcon,
  Publish as PublishIcon,
  History as HistoryIcon,
  Analytics as AnalyticsIcon,
  MoreHoriz as MoreHorizIcon,
  Public as PublicIcon,
  Archive as ArchiveIcon,
  Unarchive as UnarchiveIcon,
  ContentCopy as ContentCopyIcon,
  ContentCut as ContentCutIcon,
  ContentPaste as ContentPasteIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  FormatClear as FormatClearIcon,
  BorderColor as BorderColorIcon,
  PhotoCamera as PhotoCameraIcon,
  Telegram as TelegramIcon,
  Reddit as RedditIcon,
  Pinterest as PinterestIcon,
} from "@mui/icons-material";

export const TeacherBlogsManagement = () => {
  const [activeTab, setActiveTab] = useState("all"); // all, drafts, published, archived
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");
  const [sortBy, setSortBy] = useState("newest"); // newest, oldest, popular, trending
  const [viewMode, setViewMode] = useState("grid"); // grid, list
  const [expandedSections, setExpandedSections] = useState({
    stats: true,
    recent: true,
    popular: true,
    categories: true,
  });

  // Mock blog statistics
  const blogStats = {
    totalPosts: 48,
    publishedPosts: 32,
    draftPosts: 12,
    archivedPosts: 4,
    totalViews: 245890,
    totalLikes: 18765,
    totalComments: 3421,
    totalShares: 8923,
    averageReadTime: 8.5, // minutes
    subscribers: 3456,
    topCategories: [
      { name: "Web Development", count: 15, views: 89200 },
      { name: "React", count: 12, views: 65400 },
      { name: "Career Advice", count: 8, views: 42300 },
      { name: "JavaScript", count: 7, views: 38900 },
      { name: "Node.js", count: 6, views: 32100 },
    ],
    monthlyViews: [
      { month: "Jan", views: 18500 },
      { month: "Feb", views: 21200 },
      { month: "Mar", views: 19800 },
      { month: "Apr", views: 22400 },
      { month: "May", views: 25600 },
      { month: "Jun", views: 27800 },
      { month: "Jul", views: 30100 },
      { month: "Aug", views: 32500 },
      { month: "Sep", views: 34800 },
      { month: "Oct", views: 37200 },
      { month: "Nov", views: 39500 },
      { month: "Dec", views: 42100 },
    ],
  };

  // Mock categories
  const categories = [
    {
      id: 1,
      name: "Web Development",
      slug: "web-dev",
      count: 15,
      color: "blue",
    },
    { id: 2, name: "React", slug: "react", count: 12, color: "cyan" },
    {
      id: 3,
      name: "JavaScript",
      slug: "javascript",
      count: 7,
      color: "yellow",
    },
    { id: 4, name: "Node.js", slug: "nodejs", count: 6, color: "green" },
    { id: 5, name: "Career Advice", slug: "career", count: 8, color: "purple" },
    { id: 6, name: "TypeScript", slug: "typescript", count: 5, color: "blue" },
    { id: 7, name: "Database", slug: "database", count: 4, color: "orange" },
    { id: 8, name: "DevOps", slug: "devops", count: 3, color: "red" },
  ];

  // Mock tags
  const popularTags = [
    "react",
    "javascript",
    "nodejs",
    "webdev",
    "programming",
    "tutorial",
    "beginners",
    "career",
    "interview",
    "performance",
    "security",
    "database",
    "api",
    "rest",
    "graphql",
    "mongodb",
    "postgresql",
    "docker",
    "kubernetes",
  ];

  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks: A Comprehensive Guide",
      slug: "understanding-react-hooks-comprehensive-guide",
      excerpt:
        "Learn everything about React Hooks from useState to useMemo with practical examples and best practices.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "React",
      tags: ["react", "hooks", "javascript", "frontend"],
      status: "published",
      visibility: "public",
      publishedAt: "2024-03-15T10:30:00Z",
      lastEdited: "2024-03-16T14:20:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 15420,
        likes: 1234,
        comments: 89,
        shares: 456,
        avgReadTime: 12,
        bookmarks: 234,
      },
      seo: {
        title: "React Hooks Guide - Complete Tutorial with Examples",
        description:
          "Master React Hooks with this comprehensive guide. Learn useState, useEffect, useContext, and custom hooks with practical examples.",
        keywords: ["react hooks", "useState", "useEffect", "react tutorial"],
        slug: "understanding-react-hooks-comprehensive-guide",
      },
      comments: [
        {
          id: 101,
          user: "Michael Chen",
          avatar: "MC",
          comment: "Best explanation of hooks I've ever read!",
          date: "2024-03-16T09:15:00Z",
          likes: 23,
          replies: [
            {
              id: 1011,
              user: "Sarah Johnson",
              avatar: "SJ",
              comment: "Thank you Michael! Glad it helped.",
              date: "2024-03-16T10:30:00Z",
              likes: 5,
            },
          ],
        },
        {
          id: 102,
          user: "Emily Rodriguez",
          avatar: "ER",
          comment: "The useMemo section was particularly helpful. Thanks!",
          date: "2024-03-15T16:45:00Z",
          likes: 15,
          replies: [],
        },
      ],
      relatedPosts: [2, 3, 5],
    },
    {
      id: 2,
      title: "Building Scalable Node.js Microservices",
      slug: "building-scalable-nodejs-microservices",
      excerpt:
        "Learn how to design and implement scalable microservices architecture using Node.js, Docker, and Kubernetes.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Node.js",
      tags: ["nodejs", "microservices", "docker", "kubernetes", "backend"],
      status: "published",
      visibility: "public",
      publishedAt: "2024-03-10T08:00:00Z",
      lastEdited: "2024-03-11T11:30:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 12300,
        likes: 987,
        comments: 67,
        shares: 234,
        avgReadTime: 15,
        bookmarks: 156,
      },
      seo: {
        title: "Node.js Microservices Tutorial - Scalable Architecture",
        description:
          "Complete guide to building scalable microservices with Node.js, Docker, and Kubernetes. Learn service discovery, load balancing, and more.",
        keywords: [
          "nodejs microservices",
          "docker",
          "kubernetes",
          "scalable architecture",
        ],
        slug: "building-scalable-nodejs-microservices",
      },
      comments: [
        {
          id: 201,
          user: "David Kim",
          avatar: "DK",
          comment: "This is exactly what I needed for my project!",
          date: "2024-03-11T14:20:00Z",
          likes: 12,
          replies: [],
        },
      ],
      relatedPosts: [1, 4, 6],
    },
    {
      id: 3,
      title: "TypeScript Best Practices for 2024",
      slug: "typescript-best-practices-2024",
      excerpt:
        "Stay up to date with the latest TypeScript best practices, patterns, and techniques for writing type-safe code.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "TypeScript",
      tags: ["typescript", "javascript", "best practices", "2024"],
      status: "draft",
      visibility: "private",
      lastEdited: "2024-03-14T09:45:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 0,
        likes: 0,
        comments: 0,
        shares: 0,
        avgReadTime: 10,
        bookmarks: 0,
      },
      seo: {
        title: "TypeScript Best Practices 2024 - Modern TypeScript Guide",
        description:
          "Learn the latest TypeScript best practices for 2024. Includes strict mode, utility types, decorators, and performance tips.",
        keywords: ["typescript", "best practices", "2024", "type safety"],
        slug: "typescript-best-practices-2024",
      },
      comments: [],
      relatedPosts: [1, 4, 7],
    },
    {
      id: 4,
      title: "How to Land Your First Developer Job: A Complete Guide",
      slug: "how-to-land-first-developer-job",
      excerpt:
        "Practical advice on building your portfolio, preparing for interviews, and landing your first job in tech.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Career Advice",
      tags: ["career", "jobs", "interview", "portfolio", "beginners"],
      status: "published",
      visibility: "public",
      publishedAt: "2024-03-05T12:00:00Z",
      lastEdited: "2024-03-06T10:15:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 28400,
        likes: 2456,
        comments: 234,
        shares: 1234,
        avgReadTime: 8,
        bookmarks: 567,
      },
      seo: {
        title: "First Developer Job Guide - Portfolio, Interview, Job Search",
        description:
          "Complete guide to landing your first developer job. Includes portfolio tips, interview preparation, and job search strategies.",
        keywords: [
          "developer job",
          "first job",
          "tech career",
          "interview tips",
        ],
        slug: "how-to-land-first-developer-job",
      },
      comments: [
        {
          id: 401,
          user: "James Wilson",
          avatar: "JW",
          comment: "This gave me the confidence to start applying!",
          date: "2024-03-07T08:30:00Z",
          likes: 45,
          replies: [
            {
              id: 4011,
              user: "Sarah Johnson",
              avatar: "SJ",
              comment: "You've got this! Let me know how it goes.",
              date: "2024-03-07T09:15:00Z",
              likes: 12,
            },
          ],
        },
      ],
      relatedPosts: [7, 8, 9],
    },
    {
      id: 5,
      title: "Advanced React Patterns: Compound Components",
      slug: "advanced-react-patterns-compound-components",
      excerpt:
        "Deep dive into compound components pattern in React for building flexible and reusable components.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "React",
      tags: ["react", "patterns", "advanced", "components"],
      status: "published",
      visibility: "public",
      publishedAt: "2024-02-28T09:00:00Z",
      lastEdited: "2024-02-29T16:30:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 8900,
        likes: 678,
        comments: 45,
        shares: 123,
        avgReadTime: 10,
        bookmarks: 89,
      },
      seo: {
        title: "Advanced React Patterns - Compound Components",
        description:
          "Learn the compound components pattern in React. Build flexible, reusable components with this advanced pattern.",
        keywords: ["react patterns", "compound components", "advanced react"],
        slug: "advanced-react-patterns-compound-components",
      },
      comments: [],
      relatedPosts: [1, 3, 6],
    },
    {
      id: 6,
      title: "MongoDB Performance Optimization Tips",
      slug: "mongodb-performance-optimization-tips",
      excerpt:
        "Learn how to optimize your MongoDB queries, indexing strategies, and schema design for maximum performance.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Database",
      tags: ["mongodb", "database", "performance", "optimization"],
      status: "archived",
      visibility: "public",
      publishedAt: "2024-02-15T11:30:00Z",
      lastEdited: "2024-02-16T13:45:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 5600,
        likes: 432,
        comments: 28,
        shares: 67,
        avgReadTime: 9,
        bookmarks: 45,
      },
      seo: {
        title: "MongoDB Performance Tips - Query Optimization Guide",
        description:
          "Essential MongoDB performance optimization tips. Learn indexing strategies, query optimization, and schema design.",
        keywords: ["mongodb", "performance", "optimization", "indexing"],
        slug: "mongodb-performance-optimization-tips",
      },
      comments: [],
      relatedPosts: [2, 7, 8],
    },
    {
      id: 7,
      title: "Building a Portfolio That Gets You Hired",
      slug: "portfolio-that-gets-you-hired",
      excerpt:
        "Learn what recruiters look for in developer portfolios and how to showcase your projects effectively.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Career Advice",
      tags: ["portfolio", "career", "jobs", "projects"],
      status: "draft",
      visibility: "private",
      lastEdited: "2024-03-17T15:20:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 0,
        likes: 0,
        comments: 0,
        shares: 0,
        avgReadTime: 7,
        bookmarks: 0,
      },
      seo: {
        title: "Developer Portfolio Guide - Get Hired Faster",
        description:
          "Build a developer portfolio that impresses recruiters. Learn what projects to include and how to present your work.",
        keywords: [
          "portfolio",
          "developer portfolio",
          "job search",
          "projects",
        ],
        slug: "portfolio-that-gets-you-hired",
      },
      comments: [],
      relatedPosts: [4, 8, 9],
    },
    {
      id: 8,
      title: "10 Common JavaScript Interview Questions",
      slug: "common-javascript-interview-questions",
      excerpt:
        "Prepare for your next JavaScript interview with these common questions and detailed explanations.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Career Advice",
      tags: ["javascript", "interview", "career", "questions"],
      status: "published",
      visibility: "public",
      publishedAt: "2024-03-01T10:00:00Z",
      lastEdited: "2024-03-02T14:30:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 32400,
        likes: 2876,
        comments: 189,
        shares: 2345,
        avgReadTime: 6,
        bookmarks: 678,
      },
      seo: {
        title: "JavaScript Interview Questions - Top 10 Explained",
        description:
          "Prepare for JavaScript interviews with these 10 common questions. Includes closures, hoisting, event loop, and more.",
        keywords: ["javascript interview", "coding interview", "js questions"],
        slug: "common-javascript-interview-questions",
      },
      comments: [
        {
          id: 801,
          user: "Anna Lee",
          avatar: "AL",
          comment: "Thanks for this! Had two of these in my interview today.",
          date: "2024-03-03T18:20:00Z",
          likes: 34,
          replies: [],
        },
      ],
      relatedPosts: [4, 7, 9],
    },
    {
      id: 9,
      title: "Remote Developer: Pros, Cons, and How to Succeed",
      slug: "remote-developer-pros-cons-succeed",
      excerpt:
        "Everything you need to know about working as a remote developer, from productivity tips to communication strategies.",
      content: "Full content here...",
      featuredImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Career Advice",
      tags: ["remote work", "career", "productivity", "work-life balance"],
      status: "published",
      visibility: "public",
      publishedAt: "2024-02-20T09:30:00Z",
      lastEdited: "2024-02-21T11:45:00Z",
      author: {
        name: "Dr. Sarah Johnson",
        avatar: "SJ",
        role: "Senior Instructor",
      },
      stats: {
        views: 18700,
        likes: 1567,
        comments: 98,
        shares: 876,
        avgReadTime: 7,
        bookmarks: 234,
      },
      seo: {
        title: "Remote Developer Guide - Pros, Cons, Success Tips",
        description:
          "Complete guide to remote work for developers. Learn productivity tips, communication strategies, and work-life balance.",
        keywords: [
          "remote work",
          "remote developer",
          "work from home",
          "productivity",
        ],
        slug: "remote-developer-pros-cons-succeed",
      },
      comments: [],
      relatedPosts: [4, 7, 8],
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
      case "published":
        return "text-green-400 bg-green-400/10 border-green-400/20";
      case "draft":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "archived":
        return "text-gray-400 bg-gray-400/10 border-gray-400/20";
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20";
    }
  };

  const getVisibilityIcon = (visibility) => {
    switch (visibility) {
      case "public":
        return <PublicIcon className="w-4 h-4" />;
      case "private":
        return <LockIcon className="w-4 h-4" />;
      case "password":
        return <LockOpenIcon className="w-4 h-4" />;
      default:
        return <PublicIcon className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const filterPosts = () => {
    return blogPosts
      .filter((post) => {
        // Filter by status tab
        if (activeTab !== "all" && post.status !== activeTab) return false;

        // Filter by category
        if (selectedCategory !== "all" && post.category !== selectedCategory)
          return false;

        // Filter by tag
        if (selectedTag !== "all" && !post.tags.includes(selectedTag))
          return false;

        // Filter by search query
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          return (
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.tags.some((tag) => tag.toLowerCase().includes(query))
          );
        }

        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return (
              new Date(b.publishedAt || b.lastEdited) -
              new Date(a.publishedAt || a.lastEdited)
            );
          case "oldest":
            return (
              new Date(a.publishedAt || a.lastEdited) -
              new Date(b.publishedAt || b.lastEdited)
            );
          case "popular":
            return b.stats.views - a.stats.views;
          case "trending":
            return (
              b.stats.likes +
              b.stats.comments -
              (a.stats.likes + a.stats.comments)
            );
          default:
            return 0;
        }
      });
  };

  const getCategoryColor = (categoryName) => {
    const category = categories.find((c) => c.name === categoryName);
    return category?.color || "gray";
  };

  // Post Detail Modal
  const PostDetailModal = ({ post, onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
    >
      {/* Header with Featured Image */}
      <div className="relative h-64">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <CloseIcon />
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(post.status)}`}
            >
              {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
            </span>
            <span className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-300 flex items-center gap-1">
              {getVisibilityIcon(post.visibility)}
              {post.visibility}
            </span>
            <span className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-300">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white">{post.title}</h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Author and Meta Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              {post.author.avatar}
            </div>
            <div>
              <p className="text-white font-semibold">{post.author.name}</p>
              <p className="text-sm text-gray-400">{post.author.role}</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-400">
            <p>Published: {formatDate(post.publishedAt)}</p>
            <p>Last edited: {formatDate(post.lastEdited)}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-gray-800/30 rounded-lg p-3 text-center">
            <VisibilityIcon className="text-blue-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">
              {formatNumber(post.stats.views)}
            </div>
            <div className="text-xs text-gray-400">Views</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 text-center">
            <ThumbUpIcon className="text-green-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">
              {formatNumber(post.stats.likes)}
            </div>
            <div className="text-xs text-gray-400">Likes</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 text-center">
            <CommentIcon className="text-purple-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">
              {formatNumber(post.stats.comments)}
            </div>
            <div className="text-xs text-gray-400">Comments</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 text-center">
            <ShareIcon className="text-yellow-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">
              {formatNumber(post.stats.shares)}
            </div>
            <div className="text-xs text-gray-400">Shares</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 text-center">
            <BookmarkIcon className="text-orange-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-xl font-bold text-white">
              {formatNumber(post.stats.bookmarks)}
            </div>
            <div className="text-xs text-gray-400">Bookmarks</div>
          </div>
        </div>

        {/* Excerpt */}
        <div className="bg-gray-800/30 rounded-lg p-4">
          <h3 className="text-lg font-bold text-white mb-2">Excerpt</h3>
          <p className="text-gray-300 italic">{post.excerpt}</p>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* SEO Data */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">SEO Preview</h3>
          <div className="bg-gray-800/30 rounded-lg p-4">
            <p className="text-blue-400 text-sm mb-1">{post.seo.title}</p>
            <p className="text-gray-400 text-sm mb-1">
              {window.location.origin}/blog/{post.seo.slug}
            </p>
            <p className="text-gray-500 text-sm">{post.seo.description}</p>
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">
            Comments ({post.comments.length})
          </h3>
          <div className="space-y-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-800/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center text-white font-bold text-sm">
                    {comment.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-semibold">
                        {comment.user}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatDate(comment.date)}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">
                      {comment.comment}
                    </p>
                    <div className="flex items-center gap-3">
                      <button className="text-xs text-gray-400 hover:text-blue-400 flex items-center gap-1">
                        <ThumbUpOutlinedIcon className="w-3 h-3" />{" "}
                        {comment.likes}
                      </button>
                      <button className="text-xs text-gray-400 hover:text-blue-400">
                        Reply
                      </button>
                    </div>

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="mt-3 ml-4 space-y-3">
                        {comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="flex items-start gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                              {reply.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-white text-sm font-semibold">
                                  {reply.user}
                                </span>
                                <span className="text-xs text-gray-400">
                                  {formatDate(reply.date)}
                                </span>
                              </div>
                              <p className="text-gray-300 text-sm">
                                {reply.comment}
                              </p>
                              <div className="flex items-center gap-3 mt-1">
                                <button className="text-xs text-gray-400 hover:text-blue-400 flex items-center gap-1">
                                  <ThumbUpOutlinedIcon className="w-3 h-3" />{" "}
                                  {reply.likes}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-800">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
            <EditIcon className="w-4 h-4" /> Edit Post
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2">
            <PreviewIcon className="w-4 h-4" /> Preview
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2">
            <AnalyticsIcon className="w-4 h-4" /> Analytics
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2">
            <ShareIcon className="w-4 h-4" /> Share
          </button>
          {post.status === "published" ? (
            <button className="px-4 py-2 bg-yellow-600/20 text-yellow-400 rounded-lg hover:bg-yellow-600/30 flex items-center gap-2">
              <ArchiveIcon className="w-4 h-4" /> Archive
            </button>
          ) : post.status === "draft" ? (
            <button className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 flex items-center gap-2">
              <PublishIcon className="w-4 h-4" /> Publish
            </button>
          ) : (
            <button className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 flex items-center gap-2">
              <UnarchiveIcon className="w-4 h-4" /> Restore
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );

  // Create/Edit Post Modal
  const CreatePostModal = ({ onClose, editPost = null }) => {
    const [activeTab, setActiveTab] = useState("write"); // write, preview, seo
    const [title, setTitle] = useState(editPost?.title || "");
    const [content, setContent] = useState(editPost?.content || "");
    const [excerpt, setExcerpt] = useState(editPost?.excerpt || "");
    const [category, setCategory] = useState(editPost?.category || "");
    const [tags, setTags] = useState(editPost?.tags?.join(", ") || "");
    const [featuredImage, setFeaturedImage] = useState(
      editPost?.featuredImage || "",
    );
    const [status, setStatus] = useState(editPost?.status || "draft");
    const [visibility, setVisibility] = useState(
      editPost?.visibility || "public",
    );
    const [seoTitle, setSeoTitle] = useState(editPost?.seo?.title || "");
    const [seoDescription, setSeoDescription] = useState(
      editPost?.seo?.description || "",
    );
    const [seoKeywords, setSeoKeywords] = useState(
      editPost?.seo?.keywords?.join(", ") || "",
    );

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-6xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              {editPost ? "Edit Post" : "Create New Post"}
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
          {/* Tabs */}
          <div className="flex gap-4 border-b border-gray-800 mb-6">
            {["write", "preview", "seo"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "write" && (
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 text-lg"
                  placeholder="Enter post title..."
                />
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Featured Image URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="https://example.com/image.jpg"
                  />
                  <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex items-center gap-2">
                    <PhotoCameraIcon className="w-4 h-4" /> Upload
                  </button>
                </div>
              </div>

              {/* Content Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Content
                </label>
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                  {/* Toolbar */}
                  <div className="bg-gray-800 p-2 flex flex-wrap gap-1 border-b border-gray-700">
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <FormatBoldIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <FormatItalicIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <FormatUnderlinedIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <span className="w-px h-6 bg-gray-700 mx-1"></span>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <FormatListBulletedIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <FormatListNumberedIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <span className="w-px h-6 bg-gray-700 mx-1"></span>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <FormatQuoteIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <CodeIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <LinkIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <ImageIcon className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <textarea
                    rows="12"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 text-white focus:outline-none"
                    placeholder="Write your post content here..."
                  ></textarea>
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Excerpt
                </label>
                <textarea
                  rows="3"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Brief summary of your post..."
                ></textarea>
              </div>

              {/* Category and Tags */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="react, javascript, tutorial"
                  />
                </div>
              </div>

              {/* Status and Visibility */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Visibility
                  </label>
                  <select
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="password">Password Protected</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === "preview" && (
            <div className="bg-gray-800/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                {title || "Post Title"}
              </h2>
              {featuredImage && (
                <img
                  src={featuredImage}
                  alt="Featured"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 whitespace-pre-wrap">
                  {content || "Post content will appear here..."}
                </p>
              </div>
            </div>
          )}

          {activeTab === "seo" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  SEO Title
                </label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="SEO optimized title..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  Recommended: 50-60 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Meta Description
                </label>
                <textarea
                  rows="3"
                  value={seoDescription}
                  onChange={(e) => setSeoDescription(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Brief description for search engines..."
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended: 150-160 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  value={seoKeywords}
                  onChange={(e) => setSeoKeywords(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="react, tutorial, web development"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400"
                  readOnly
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-800">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 flex items-center gap-2">
              <SaveIcon className="w-4 h-4" /> Save Draft
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 flex items-center gap-2">
              <PublishIcon className="w-4 h-4" /> Publish
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Stats Modal
  const StatsModal = ({ onClose }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
    >
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Blog Analytics</h2>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <div className="text-3xl font-bold text-white">
              {blogStats.totalPosts}
            </div>
            <div className="text-sm text-gray-400">Total Posts</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4">
            <div className="text-3xl font-bold text-green-400">
              {blogStats.publishedPosts}
            </div>
            <div className="text-sm text-gray-400">Published</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4">
            <div className="text-3xl font-bold text-yellow-400">
              {blogStats.draftPosts}
            </div>
            <div className="text-sm text-gray-400">Drafts</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4">
            <div className="text-3xl font-bold text-gray-400">
              {blogStats.archivedPosts}
            </div>
            <div className="text-sm text-gray-400">Archived</div>
          </div>
        </div>

        {/* Engagement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/30 rounded-lg p-4">
            <VisibilityIcon className="text-blue-400 w-5 h-5 mb-2" />
            <div className="text-2xl font-bold text-white">
              {formatNumber(blogStats.totalViews)}
            </div>
            <div className="text-xs text-gray-400">Total Views</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4">
            <ThumbUpIcon className="text-green-400 w-5 h-5 mb-2" />
            <div className="text-2xl font-bold text-white">
              {formatNumber(blogStats.totalLikes)}
            </div>
            <div className="text-xs text-gray-400">Total Likes</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4">
            <CommentIcon className="text-purple-400 w-5 h-5 mb-2" />
            <div className="text-2xl font-bold text-white">
              {formatNumber(blogStats.totalComments)}
            </div>
            <div className="text-xs text-gray-400">Comments</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4">
            <ShareIcon className="text-yellow-400 w-5 h-5 mb-2" />
            <div className="text-2xl font-bold text-white">
              {formatNumber(blogStats.totalShares)}
            </div>
            <div className="text-xs text-gray-400">Shares</div>
          </div>
        </div>

        {/* Monthly Views Chart */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Monthly Views</h3>
          <div className="bg-gray-800/30 rounded-lg p-6">
            <div className="h-48 flex items-end justify-between gap-2">
              {blogStats.monthlyViews.map((month, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg"
                    style={{ height: `${(month.views / 45000) * 100}%` }}
                  ></div>
                  <span className="text-xs text-gray-400">{month.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Top Categories</h3>
          <div className="space-y-3">
            {blogStats.topCategories.map((category, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-24 text-sm text-gray-400">
                  {category.name}
                </span>
                <div className="flex-1">
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{
                        width: `${(category.views / blogStats.topCategories[0].views) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm text-white">
                  {formatNumber(category.views)} views
                </span>
                <span className="text-xs text-gray-400">
                  ({category.count} posts)
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribers */}
        <div className="bg-gray-800/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">
                Newsletter Subscribers
              </h3>
              <p className="text-3xl font-bold text-green-400 mt-2">
                {formatNumber(blogStats.subscribers)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Avg. Read Time</p>
              <p className="text-2xl font-bold text-white">
                {blogStats.averageReadTime} min
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Category Management Modal
  const CategoryModal = ({ onClose }) => {
    const [newCategory, setNewCategory] = useState({
      name: "",
      slug: "",
      color: "blue",
    });

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Manage Categories</h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Add New Category */}
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4">
              Add New Category
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Category Name"
                value={newCategory.name}
                onChange={(e) =>
                  setNewCategory({
                    ...newCategory,
                    name: e.target.value,
                    slug: e.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-"),
                  })
                }
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Slug"
                value={newCategory.slug}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, slug: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
              />
              <select
                value={newCategory.color}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, color: e.target.value })
                }
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
              >
                <option value="blue">Blue</option>
                <option value="cyan">Cyan</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="red">Red</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
              </select>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700">
                Add Category
              </button>
            </div>
          </div>

          {/* Existing Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Existing Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-${category.color}-500`}
                    ></div>
                    <span className="text-white">{category.name}</span>
                    <span className="text-xs text-gray-400">
                      ({category.count} posts)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <EditIcon className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <DeleteIcon className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
                Blog<span className="text-orange-400">Management</span>
              </h1>
              <div className="hidden md:flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
                <ArticleIcon className="text-orange-400 w-5 h-5" />
                <span className="text-sm text-gray-300">
                  Manage your articles
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowStatsModal(true)}
                className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <AnalyticsIcon className="w-4 h-4" />
                <span className="hidden md:inline">Analytics</span>
              </button>
              <button
                onClick={() => setShowCategoryModal(true)}
                className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 flex items-center gap-2"
              >
                <CategoryIcon className="w-4 h-4" />
                <span className="hidden md:inline">Categories</span>
              </button>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 flex items-center gap-2"
              >
                <AddIcon className="w-4 h-4" />
                <span className="hidden md:inline">New Post</span>
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
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-white">
              {blogStats.totalPosts}
            </div>
            <div className="text-xs text-gray-400">Total Posts</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-green-400">
              {blogStats.publishedPosts}
            </div>
            <div className="text-xs text-gray-400">Published</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-yellow-400">
              {blogStats.draftPosts}
            </div>
            <div className="text-xs text-gray-400">Drafts</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-purple-400">
              {formatNumber(blogStats.totalViews)}
            </div>
            <div className="text-xs text-gray-400">Total Views</div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 rounded-lg p-4 border border-gray-700"
          >
            <div className="text-2xl font-bold text-blue-400">
              {blogStats.subscribers}
            </div>
            <div className="text-xs text-gray-400">Subscribers</div>
          </motion.div>
        </motion.div>

        {/* Tabs and Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex gap-2">
            {["all", "published", "draft", "archived"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? "bg-orange-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-orange-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="popular">Most Popular</option>
            <option value="trending">Trending</option>
          </select>

          <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-orange-600 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <ViewModuleIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${viewMode === "list" ? "bg-orange-600 text-white" : "text-gray-400 hover:text-white"}`}
            >
              <ViewAgendaIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Posts Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {filterPosts().map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => {
                setSelectedPost(post);
                setShowPostModal(true);
              }}
              className={`bg-gray-800/30 rounded-xl border border-gray-700 cursor-pointer overflow-hidden hover:border-orange-500/50 transition-all ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              {viewMode === "grid" ? (
                // Grid View
                <>
                  <div className="h-48 relative">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getStatusColor(post.status)}`}
                      >
                        {post.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs bg-${getCategoryColor(post.category)}-500/20 text-${getCategoryColor(post.category)}-400`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3" />
                        {formatDate(post.publishedAt || post.lastEdited)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <VisibilityIcon className="w-3 h-3" />
                          {formatNumber(post.stats.views)}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbUpIcon className="w-3 h-3" />
                          {formatNumber(post.stats.likes)}
                        </span>
                        <span className="flex items-center gap-1">
                          <CommentIcon className="w-3 h-3" />
                          {post.stats.comments}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <EditIcon className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-700 rounded">
                          <ShareIcon className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // List View
                <>
                  <div className="w-48 h-32 flex-shrink-0">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs bg-${getCategoryColor(post.category)}-500/20 text-${getCategoryColor(post.category)}-400`}
                      >
                        {post.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(post.status)}`}
                      >
                        {post.status}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3" />
                        {formatDate(post.publishedAt || post.lastEdited)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2 line-clamp-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <VisibilityIcon className="w-3 h-3" />
                          {formatNumber(post.stats.views)} views
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbUpIcon className="w-3 h-3" />
                          {formatNumber(post.stats.likes)} likes
                        </span>
                        <span className="flex items-center gap-1">
                          <CommentIcon className="w-3 h-3" />
                          {post.stats.comments} comments
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {post.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="text-xs text-gray-500">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Popular Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-gray-800/30 rounded-xl border border-gray-700 p-6"
        >
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <TagIcon className="text-orange-400 w-5 h-5" />
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedTag(selectedTag === tag ? "all" : tag)
                }
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? "bg-orange-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Modals */}
      <AnimatePresence>
        {showPostModal && selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPostModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <PostDetailModal
                post={selectedPost}
                onClose={() => setShowPostModal(false)}
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
              <CreatePostModal onClose={() => setShowCreateModal(false)} />
            </div>
          </motion.div>
        )}

        {showEditModal && selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowEditModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <CreatePostModal
                editPost={selectedPost}
                onClose={() => setShowEditModal(false)}
              />
            </div>
          </motion.div>
        )}

        {showStatsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowStatsModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <StatsModal onClose={() => setShowStatsModal(false)} />
            </div>
          </motion.div>
        )}

        {showCategoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCategoryModal(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <CategoryModal onClose={() => setShowCategoryModal(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
