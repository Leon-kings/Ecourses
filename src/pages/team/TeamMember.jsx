/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
  CheckCircleOutline as CheckCircleOutlineIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
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
  Celebration as CelebrationIcon,
  Diversity3 as Diversity3Icon,
  Groups2 as Groups2Icon,
  GroupAdd as GroupAddIcon,
  GroupRemove as GroupRemoveIcon,
  GroupWork as GroupWorkIcon,
  SupervisorAccount as SupervisorAccountIcon,
  Engineering as EngineeringIcon,
  Science as ScienceIcon1,
  Biotech as BiotechIcon1,
  Psychology as PsychologyIcon1,
  HealthAndSafety as HealthAndSafetyIcon,
  SafetyDivider as SafetyDividerIcon,
  SocialDistance as SocialDistanceIcon,
  Diversity1 as Diversity1Icon,
  Diversity2 as Diversity2Icon,
  Transgender as TransgenderIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
  Man as ManIcon,
  Woman as WomanIcon,
  Boy as BoyIcon,
  Girl as GirlIcon,
  BabyChangingStation as BabyChangingStationIcon,
  WheelchairPickup as WheelchairPickupIcon,
  Accessible as AccessibleIcon,
  Accessibility as AccessibilityIcon,
  AccessibilityNew as AccessibilityNewIcon,
  Hearing as HearingIcon,
  HearingDisabled as HearingDisabledIcon,
  NotAccessible as NotAccessibleIcon,
  SignLanguage as SignLanguageIcon,
  Blind as BlindIcon,
  Visibility as VisibilityIcon1,
  VisibilityOff as VisibilityOffIcon1,
  RemoveRedEye as RemoveRedEyeIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Brightness4 as Brightness4Icon,
  Brightness5 as Brightness5Icon,
  Brightness6 as Brightness6Icon,
  Brightness7 as Brightness7Icon,
  BrightnessAuto as BrightnessAutoIcon,
  BrightnessHigh as BrightnessHighIcon,
  BrightnessLow as BrightnessLowIcon,
  BrightnessMedium as BrightnessMediumIcon,
  Contrast as ContrastIcon,
  Opacity as OpacityIcon,
  Palette as PaletteIcon,
  ColorLens as ColorLensIcon,
  FormatPaint as FormatPaintIcon,
  Brush as BrushIcon1,
  Draw as DrawIcon,
  Gesture as GestureIcon,
  Edit as EditIcon,
  EditNote as EditNoteIcon,
  EditOff as EditOffIcon,
  BorderColor as BorderColorIcon,
  ModeEdit as ModeEditIcon,
  ModeEditOutline as ModeEditOutlineIcon,
  Create as CreateIcon,
  NoteAdd as NoteAddIcon,
  PostAdd as PostAddIcon,
  AddComment as AddCommentIcon,
  Comment as CommentIcon,
  CommentBank as CommentBankIcon,
  QuestionAnswer as QuestionAnswerIcon1,
  Forum as ForumIcon1,
  Chat as ChatIcon,
  ChatBubble as ChatBubbleIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Textsms as TextsmsIcon,
  Sms as SmsIcon,
  SmsFailed as SmsFailedIcon,
  Markunread as MarkunreadIcon,
  MarkunreadMailbox as MarkunreadMailboxIcon,
  Mail as MailIcon,
  MailOutline as MailOutlineIcon,
  LocalPostOffice as LocalPostOfficeIcon,
  Send as SendIcon,
  SendAndArchive as SendAndArchiveIcon,
  OutgoingMail as OutgoingMailIcon,
  Inbox as InboxIcon,
  Outbox as OutboxIcon,
  AllInbox as AllInboxIcon,
  MoveToInbox as MoveToInboxIcon,
  Unarchive as UnarchiveIcon,
  Archive as ArchiveIcon,
  Delete as DeleteIcon,
  DeleteOutline as DeleteOutlineIcon,
  DeleteForever as DeleteForeverIcon,
  Restore as RestoreIcon,
  RestoreFromTrash as RestoreFromTrashIcon,
  RestorePage as RestorePageIcon,
  History as HistoryIcon,
  HistoryEdu as HistoryEduIcon,
  HistoryToggleOff as HistoryToggleOffIcon,
  Schedule as ScheduleIcon,
  ScheduleSend as ScheduleSendIcon,
  Timer as TimerIcon1,
  TimerOff as TimerOffIcon,
  Alarm as AlarmIcon,
  AlarmAdd as AlarmAddIcon,
  AlarmOff as AlarmOffIcon,
  AlarmOn as AlarmOnIcon,
  WatchLater as WatchLaterIcon,
  AvTimer as AvTimerIcon,
  HourglassBottom as HourglassBottomIcon,
  HourglassTop as HourglassTopIcon,
  HourglassEmpty as HourglassEmptyIcon,
  HourglassFull as HourglassFullIcon,
  MoreTime as MoreTimeIcon,
  Update as UpdateIcon,
  UpdateDisabled as UpdateDisabledIcon,
  Pending as PendingIcon,
  PendingActions as PendingActionsIcon,
  Event as EventIcon,
  EventAvailable as EventAvailableIcon,
  EventBusy as EventBusyIcon,
  EventNote as EventNoteIcon,
  EventRepeat as EventRepeatIcon,
  DateRange as DateRangeIcon,
  Today as TodayIcon,
  CalendarMonth as CalendarMonthIcon,
  CalendarToday as CalendarTodayIcon1,
  CalendarViewDay as CalendarViewDayIcon,
  CalendarViewMonth as CalendarViewMonthIcon,
  CalendarViewWeek as CalendarViewWeekIcon,
  CalendarViewWeek as CalendarViewWeekIcon1,
  ViewWeek as ViewWeekIcon,
  ViewDay as ViewDayIcon,
  ViewComfy as ViewComfyIcon,
  ViewComfyAlt as ViewComfyAltIcon,
  ViewCompact as ViewCompactIcon,
  ViewCompactAlt as ViewCompactAltIcon,
  ViewArray as ViewArrayIcon,
  ViewCarousel as ViewCarouselIcon,
  ViewColumn as ViewColumnIcon,
  ViewHeadline as ViewHeadlineIcon,
  ViewList as ViewListIcon1,
  ViewModule as ViewModuleIcon1,
  ViewQuilt as ViewQuiltIcon,
  ViewSidebar as ViewSidebarIcon,
  ViewStream as ViewStreamIcon1,
  ViewTimeline as ViewTimelineIcon,
  Timeline as TimelineIcon2,
} from "@mui/icons-material";

export const Team = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [filterRole, setFilterRole] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 50 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Team Members Data
  const teamMembers = [
    // Leadership Team
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      department: "leadership",
      image: "SJ",
      color: "from-blue-600 to-blue-400",
      badge: "Founder",
      badgeColor: "yellow",
      email: "sarah.johnson@ecourses.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      expertise: [
        "AI & Machine Learning",
        "Educational Technology",
        "Strategic Leadership",
      ],
      bio: "Dr. Sarah Johnson founded E-Courses in 2018 with a vision to democratize tech education. With a PhD in Computer Science from Stanford and 15+ years in tech education, she has helped thousands of students launch successful careers in tech.",
      fullBio:
        "Dr. Sarah Johnson is a visionary leader in the field of tech education. Before founding E-Courses, she was a professor at Stanford University where she pioneered innovative teaching methods for computer science. Her research in AI-powered learning systems has been published in numerous academic journals. Under her leadership, E-Courses has grown from a small startup to a global platform serving over 15,000 students across 50+ countries.",
      education: [
        "PhD in Computer Science - Stanford University",
        "MSc in Artificial Intelligence - MIT",
        "BSc in Computer Engineering - UC Berkeley",
      ],
      achievements: [
        "Tech Education Leader of the Year 2023",
        "Forbes 30 Under 40 in Education 2022",
        "Published 25+ research papers",
        "Keynote speaker at 50+ international conferences",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson",
        github: "https://github.com/sarahjohnson",
        website: "https://sarahjohnson.dev",
      },
      studentsMentored: 15000,
      coursesCreated: 25,
      yearsExperience: 15,
      funFact:
        "Dr. Sarah wrote her first line of code at age 12 and still codes every day.",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      role: "Head of Curriculum",
      department: "leadership",
      image: "MC",
      color: "from-purple-600 to-purple-400",
      badge: "Curriculum Lead",
      badgeColor: "purple",
      email: "michael.chen@ecourses.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      expertise: [
        "Curriculum Design",
        "AI & Machine Learning",
        "Educational Psychology",
      ],
      bio: "Prof. Michael Chen leads our curriculum development team. With 12+ years of experience and an ex-Google Tech Lead, he ensures our courses meet industry standards and student needs.",
      fullBio:
        "Michael Chen brings a unique blend of industry experience and academic excellence to E-Courses. As a former Tech Lead at Google, he worked on large-scale machine learning systems before transitioning to education. His innovative approach to curriculum design has made our courses industry-relevant and engaging. Michael holds multiple patents in educational technology and has designed over 50 successful courses.",
      education: [
        "PhD in Educational Technology - Columbia University",
        "MS in Computer Science - Carnegie Mellon",
        "BS in Computer Engineering - University of Washington",
      ],
      achievements: [
        "Ex-Google Tech Lead (8 years)",
        "3 patents in educational technology",
        "Designed 50+ industry-leading courses",
        "Mentored 500+ students into tech careers",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        github: "https://github.com/michaelchen",
        website: "https://michaelchen.dev",
      },
      studentsMentored: 5000,
      coursesCreated: 50,
      yearsExperience: 12,
      funFact:
        "Michael speaks 5 languages and once coded an entire app during a 14-hour flight.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead Instructor - Web Development",
      department: "instruction",
      image: "ER",
      color: "from-green-600 to-green-400",
      badge: "Top Instructor",
      badgeColor: "green",
      email: "emily.rodriguez@ecourses.com",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      expertise: ["Full Stack Development", "React.js", "Node.js", "MongoDB"],
      bio: "Emily is a full-stack developer with 10+ years experience. She has created 20+ successful web courses and helped 2000+ students become professional developers.",
      fullBio:
        "Emily Rodriguez started her career as a self-taught developer and understands the challenges of learning to code. She has worked at startups and Fortune 500 companies, building scalable web applications. Her teaching philosophy focuses on practical, project-based learning. Emily's courses are known for their clarity and real-world applicability, with students consistently rating her as a top instructor.",
      education: [
        "MS in Computer Science - UT Austin",
        "BS in Information Technology - Florida State",
        "Full Stack Development Certification",
      ],
      achievements: [
        "Top Instructor Award 2022, 2023",
        "Created 20+ best-selling courses",
        "2000+ students placed in tech jobs",
        "Open source contributor to React.js",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        twitter: "https://twitter.com/emilyrodriguez",
        github: "https://github.com/emilyrodriguez",
        website: "https://emilyrodriguez.dev",
      },
      studentsMentored: 8000,
      coursesCreated: 20,
      yearsExperience: 10,
      funFact:
        "Emily is also a professional musician and has released two jazz albums.",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "Data Science Director",
      department: "leadership",
      image: "JW",
      color: "from-red-600 to-red-400",
      badge: "AI Expert",
      badgeColor: "red",
      email: "james.wilson@ecourses.com",
      phone: "+1 (555) 456-7890",
      location: "Boston, MA",
      expertise: [
        "Data Science",
        "Machine Learning",
        "Deep Learning",
        "Big Data",
      ],
      bio: "Dr. James Wilson leads our Data Science department. With a PhD in Data Science and published research, he has helped 500+ students land data jobs at top companies.",
      fullBio:
        "Dr. James Wilson is a renowned data scientist with a passion for teaching. Before joining E-Courses, he was a lead data scientist at a Fortune 500 company where he built machine learning systems processing billions of data points daily. His research in deep learning has been cited over 1000 times. James brings real-world experience and academic rigor to every course he teaches.",
      education: [
        "PhD in Data Science - MIT",
        "MS in Statistics - Harvard University",
        "BS in Mathematics - Princeton",
      ],
      achievements: [
        "Published 30+ research papers",
        "1000+ academic citations",
        "Built ML systems for Fortune 500",
        "Mentored 500+ data scientists",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/jameswilson",
        twitter: "https://twitter.com/jameswilson",
        github: "https://github.com/jameswilson",
        website: "https://jameswilson.dev",
      },
      studentsMentored: 3500,
      coursesCreated: 15,
      yearsExperience: 14,
      funFact:
        "James is a certified wine sommelier and teaches wine appreciation classes on weekends.",
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Cybersecurity Lead",
      department: "security",
      image: "PP",
      color: "from-orange-600 to-orange-400",
      badge: "Security Expert",
      badgeColor: "orange",
      email: "priya.patel@ecourses.com",
      phone: "+1 (555) 567-8901",
      location: "Washington, DC",
      expertise: [
        "Cybersecurity",
        "Ethical Hacking",
        "Network Security",
        "Penetration Testing",
      ],
      bio: "Priya is a certified ethical hacker and former security consultant for Fortune 500 companies. She leads our cybersecurity programs and has trained 1000+ security professionals.",
      fullBio:
        "Priya Patel has over a decade of experience in cybersecurity, working with government agencies and Fortune 500 companies to secure their digital infrastructure. As a certified ethical hacker, she has conducted hundreds of penetration tests and security audits. Priya's practical approach to teaching has made our cybersecurity program one of the most sought-after in the industry.",
      education: [
        "MS in Cybersecurity - Carnegie Mellon",
        "BS in Computer Science - Georgia Tech",
        "Certified Ethical Hacker (CEH)",
        "CISSP Certification",
      ],
      achievements: [
        "Former security consultant for Fortune 500",
        "Certified Ethical Hacker (CEH)",
        "Discovered 50+ security vulnerabilities",
        "Trained 1000+ security professionals",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/priyapatel",
        twitter: "https://twitter.com/priyapatel",
        github: "https://github.com/priyapatel",
        website: "https://priyapatel.dev",
      },
      studentsMentored: 2500,
      coursesCreated: 12,
      yearsExperience: 11,
      funFact:
        "Priya is also a black belt in Taekwondo and teaches self-defense classes.",
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Student Success Manager",
      department: "support",
      image: "AT",
      color: "from-cyan-600 to-cyan-400",
      badge: "Student Champion",
      badgeColor: "cyan",
      email: "alex.thompson@ecourses.com",
      phone: "+1 (555) 678-9012",
      location: "Chicago, IL",
      expertise: [
        "Student Mentoring",
        "Career Coaching",
        "Curriculum Support",
        "Community Building",
      ],
      bio: "Alex is passionate about mentoring and has helped 1000+ students successfully transition into tech careers. He manages our student success programs and career services.",
      fullBio:
        "Alex Thompson brings a unique perspective to student success, having transitioned from a non-technical background to a successful tech career himself. He understands the challenges students face and has developed comprehensive support programs that address both technical and soft skills. Alex's empathetic approach and practical career guidance have made him a favorite among students.",
      education: [
        "MS in Counseling Psychology - Northwestern",
        "BS in Psychology - University of Michigan",
        "Career Coaching Certification",
      ],
      achievements: [
        "Helped 1000+ students land tech jobs",
        "Developed career success program",
        "95% student satisfaction rate",
        "Built 50+ employer partnerships",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/alexthompson",
        twitter: "https://twitter.com/alexthompson",
        github: "https://github.com/alexthompson",
        website: "https://alexthompson.dev",
      },
      studentsMentored: 4000,
      coursesCreated: 5,
      yearsExperience: 8,
      funFact:
        "Alex is a marathon runner and has completed 10 marathons across 5 continents.",
    },
    {
      id: 7,
      name: "Dr. Lisa Wang",
      role: "AI Research Lead",
      department: "research",
      image: "LW",
      color: "from-indigo-600 to-indigo-400",
      badge: "AI Researcher",
      badgeColor: "indigo",
      email: "lisa.wang@ecourses.com",
      phone: "+1 (555) 789-0123",
      location: "Seattle, WA",
      expertise: ["Deep Learning", "Computer Vision", "NLP", "Generative AI"],
      bio: "Dr. Lisa Wang leads our AI research initiatives. With a PhD from MIT and experience at top AI labs, she brings cutting-edge AI research into our curriculum.",
      fullBio:
        "Dr. Lisa Wang is a leading researcher in artificial intelligence. Before joining E-Courses, she worked at Google AI and OpenAI, where she contributed to groundbreaking research in large language models. Her work has been featured in major tech publications and conferences. Lisa ensures our AI curriculum stays ahead of the curve, incorporating the latest developments in the field.",
      education: [
        "PhD in AI - MIT",
        "MS in Computer Science - Stanford",
        "BS in Mathematics - Caltech",
      ],
      achievements: [
        "Published 20+ papers in top AI conferences",
        "Former researcher at Google AI",
        "Contributor to open-source AI frameworks",
        "Mentored 200+ AI researchers",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/lisawang",
        twitter: "https://twitter.com/lisawang",
        github: "https://github.com/lisawang",
        website: "https://lisawang.dev",
      },
      studentsMentored: 1000,
      coursesCreated: 8,
      yearsExperience: 9,
      funFact:
        "Lisa is also an accomplished pianist and has performed with several orchestras.",
    },
    {
      id: 8,
      name: "Marcus Williams",
      role: "Mobile Development Lead",
      department: "instruction",
      image: "MW",
      color: "from-pink-600 to-pink-400",
      badge: "Mobile Expert",
      badgeColor: "pink",
      email: "marcus.williams@ecourses.com",
      phone: "+1 (555) 890-1234",
      location: "Miami, FL",
      expertise: [
        "iOS Development",
        "Android Development",
        "Flutter",
        "React Native",
      ],
      bio: "Marcus has been building mobile apps since the early days of the App Store. He has published 50+ apps and now teaches others to do the same.",
      fullBio:
        "Marcus Williams started his career as one of the first iOS developers in 2008. Over the years, he has built apps for startups and Fortune 500 companies, with several of his apps reaching the top of the App Store charts. Marcus brings this wealth of practical experience to his teaching, showing students not just how to code, but how to create successful, marketable apps.",
      education: [
        "MS in Mobile Computing - University of Miami",
        "BS in Computer Science - Florida International",
        "Apple Certified iOS Developer",
      ],
      achievements: [
        "Published 50+ apps on App Store",
        "3 apps reached #1 in their category",
        "Mentored 500+ mobile developers",
        "Speaker at 30+ tech conferences",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/marcuswilliams",
        twitter: "https://twitter.com/marcuswilliams",
        github: "https://github.com/marcuswilliams",
        website: "https://marcuswilliams.dev",
      },
      studentsMentored: 3000,
      coursesCreated: 18,
      yearsExperience: 15,
      funFact:
        "Marcus is also a DJ and has performed at several tech conferences.",
    },
    {
      id: 9,
      name: "Dr. Rachel Kim",
      role: "Cloud Computing Director",
      department: "leadership",
      image: "RK",
      color: "from-teal-600 to-teal-400",
      badge: "Cloud Architect",
      badgeColor: "teal",
      email: "rachel.kim@ecourses.com",
      phone: "+1 (555) 901-2345",
      location: "Denver, CO",
      expertise: ["AWS", "Azure", "Google Cloud", "DevOps", "Kubernetes"],
      bio: "Dr. Rachel Kim is a certified cloud architect with experience designing systems for Fortune 500 companies. She leads our cloud computing programs.",
      fullBio:
        "Dr. Rachel Kim has designed and implemented cloud architectures for some of the world's largest companies. As a multi-cloud expert with certifications across AWS, Azure, and Google Cloud, she brings unparalleled depth to our cloud curriculum. Rachel's courses focus on practical, scalable solutions that prepare students for real-world cloud challenges.",
      education: [
        "PhD in Distributed Systems - Cornell",
        "MS in Computer Science - Columbia",
        "BS in Computer Engineering - UCLA",
      ],
      achievements: [
        "All major cloud certifications (AWS, Azure, GCP)",
        "Designed cloud systems for Fortune 500",
        "Published 15+ papers on distributed systems",
        "Mentored 1000+ cloud architects",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/rachelkim",
        twitter: "https://twitter.com/rachelkim",
        github: "https://github.com/rachelkim",
        website: "https://rachelkim.dev",
      },
      studentsMentored: 2800,
      coursesCreated: 14,
      yearsExperience: 13,
      funFact:
        "Rachel is also a certified yoga instructor and leads wellness sessions for the team.",
    },
    {
      id: 10,
      name: "David Okonkwo",
      role: "DevOps & Cloud Instructor",
      department: "instruction",
      image: "DO",
      color: "from-amber-600 to-amber-400",
      badge: "DevOps Expert",
      badgeColor: "amber",
      email: "david.okonkwo@ecourses.com",
      phone: "+1 (555) 012-3456",
      location: "Atlanta, GA",
      expertise: [
        "DevOps",
        "CI/CD",
        "Docker",
        "Kubernetes",
        "Infrastructure as Code",
      ],
      bio: "David is a DevOps expert with experience building CI/CD pipelines for global companies. He brings real-world DevOps practices to our students.",
      fullBio:
        "David Okonkwo has spent the last decade mastering DevOps practices and tools. He has implemented CI/CD pipelines that deploy code hundreds of times a day, and containerized applications that scale to millions of users. David's practical approach focuses on the tools and practices that actually matter in the industry, preparing students for real DevOps roles.",
      education: [
        "MS in Software Engineering - Georgia Tech",
        "BS in Computer Science - Morehouse College",
        "AWS Certified DevOps Engineer",
        "Certified Kubernetes Administrator",
      ],
      achievements: [
        "Built CI/CD for companies reaching millions",
        "Certified Kubernetes Administrator",
        "Open source contributor to Jenkins",
        "Mentored 800+ DevOps engineers",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/davidokonkwo",
        twitter: "https://twitter.com/davidokonkwo",
        github: "https://github.com/davidokonkwo",
        website: "https://davidokonkwo.dev",
      },
      studentsMentored: 2200,
      coursesCreated: 10,
      yearsExperience: 10,
      funFact:
        "David is also a professional photographer and has exhibited his work in galleries.",
    },
    {
      id: 11,
      name: "Sofia Garcia",
      role: "UI/UX Design Lead",
      department: "design",
      image: "SG",
      color: "from-rose-600 to-rose-400",
      badge: "Design Expert",
      badgeColor: "rose",
      email: "sofia.garcia@ecourses.com",
      phone: "+1 (555) 123-4567",
      location: "Los Angeles, CA",
      expertise: [
        "UI Design",
        "UX Research",
        "Figma",
        "Adobe XD",
        "Design Systems",
      ],
      bio: "Sofia leads our design curriculum, teaching students to create beautiful, user-centered digital experiences. She has designed products for millions of users.",
      fullBio:
        "Sofia Garcia has spent her career bridging the gap between design and development. She has led design teams at tech companies, creating products used by millions of people worldwide. Sofia's teaching philosophy emphasizes user-centered design, backed by research and testing. She helps students build portfolios that showcase not just beautiful designs, but thoughtful, user-tested solutions.",
      education: [
        "MFA in Design - ArtCenter College of Design",
        "BS in Psychology - UCLA",
        "Certified UX Researcher",
      ],
      achievements: [
        "Designed products for 10M+ users",
        "Led design teams at 3 unicorn startups",
        "Published 5 design systems",
        "Mentored 500+ designers",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/sofiagarcia",
        twitter: "https://twitter.com/sofiagarcia",
        github: "https://github.com/sofiagarcia",
        website: "https://sofiagarcia.design",
      },
      studentsMentored: 1800,
      coursesCreated: 9,
      yearsExperience: 9,
      funFact: "Sofia is also a ceramic artist and sells her pottery online.",
    },
    {
      id: 12,
      name: "Thomas Anderson",
      role: "Blockchain & Web3 Lead",
      department: "research",
      image: "TA",
      color: "from-violet-600 to-violet-400",
      badge: "Web3 Expert",
      badgeColor: "violet",
      email: "thomas.anderson@ecourses.com",
      phone: "+1 (555) 234-5678",
      location: "Miami, FL",
      expertise: ["Blockchain", "Smart Contracts", "Web3", "Solidity", "DeFi"],
      bio: "Thomas leads our blockchain and Web3 initiatives. With deep expertise in decentralized technologies, he prepares students for the future of the web.",
      fullBio:
        "Thomas Anderson has been at the forefront of blockchain technology since its early days. He has built decentralized applications, audited smart contracts, and advised blockchain startups. Thomas brings this cutting-edge knowledge to our curriculum, ensuring students are prepared for the rapidly evolving Web3 landscape.",
      education: [
        "MS in Cryptography - University of Maryland",
        "BS in Computer Science - Virginia Tech",
        "Certified Blockchain Architect",
      ],
      achievements: [
        "Built 20+ blockchain applications",
        "Audited smart contracts worth $100M+",
        "Advised 10+ successful Web3 startups",
        "Published book on blockchain development",
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/thomasanderson",
        twitter: "https://twitter.com/thomasanderson",
        github: "https://github.com/thomasanderson",
        website: "https://thomasanderson.dev",
      },
      studentsMentored: 1200,
      coursesCreated: 7,
      yearsExperience: 8,
      funFact:
        "Thomas is also a chess master and has competed in international tournaments.",
    },
  ];

  // Department filters
  const departments = [
    {
      id: "all",
      name: "All Team Members",
      icon: <PeopleIcon />,
      count: teamMembers.length,
    },
    {
      id: "leadership",
      name: "Leadership",
      icon: <SupervisorAccountIcon />,
      count: teamMembers.filter((m) => m.department === "leadership").length,
    },
    {
      id: "instruction",
      name: "Instructors",
      icon: <SchoolIcon />,
      count: teamMembers.filter((m) => m.department === "instruction").length,
    },
    {
      id: "research",
      name: "Research",
      icon: <ScienceIcon1 />,
      count: teamMembers.filter((m) => m.department === "research").length,
    },
    {
      id: "security",
      name: "Security",
      icon: <SecurityIcon1 />,
      count: teamMembers.filter((m) => m.department === "security").length,
    },
    {
      id: "design",
      name: "Design",
      icon: <BrushIcon1 />,
      count: teamMembers.filter((m) => m.department === "design").length,
    },
    {
      id: "support",
      name: "Student Support",
      icon: <SupportAgentIcon />,
      count: teamMembers.filter((m) => m.department === "support").length,
    },
  ];

  // Sort options
  const sortOptions = [
    { id: "name", name: "Name (A-Z)" },
    { id: "name-desc", name: "Name (Z-A)" },
    { id: "experience", name: "Most Experienced" },
    { id: "students", name: "Most Students Mentored" },
    { id: "courses", name: "Most Courses Created" },
  ];

  // Filter and sort team members
  const filteredMembers = teamMembers
    .filter((member) => {
      if (filterRole !== "all" && member.department !== filterRole)
        return false;
      if (searchQuery) {
        return (
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.expertise.some((e) =>
            e.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      if (sortBy === "experience") return b.yearsExperience - a.yearsExperience;
      if (sortBy === "students") return b.studentsMentored - a.studentsMentored;
      if (sortBy === "courses") return b.coursesCreated - a.coursesCreated;
      return 0;
    });

  const Modals = {
    MemberDetail: ({ member }) => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
      >
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${member.color} p-8 relative`}>
          <div className="flex items-start gap-6">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-4xl font-bold text-white border-4 border-white/30">
              {member.image}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold text-white">{member.name}</h2>
                <span
                  className={`px-3 py-1 bg-${member.badgeColor}-500/20 text-${member.badgeColor}-300 rounded-full text-xs font-semibold`}
                >
                  {member.badge}
                </span>
              </div>
              <p className="text-xl text-white/90 mb-2">{member.role}</p>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <LocationIcon className="w-4 h-4" />
                  {member.location}
                </span>
                <span className="flex items-center gap-1">
                  <EmailIcon className="w-4 h-4" />
                  {member.email}
                </span>
              </div>
            </div>

            <button
              onClick={() => setActiveModal(null)}
              className="bg-gradient-to-t from-red-500 to-red-700 p-2 rounded-2xl text-white transition-colors"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">
                {member.yearsExperience}+
              </div>
              <div className="text-xs text-gray-400">Years Experience</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">
                {member.studentsMentored}+
              </div>
              <div className="text-xs text-gray-400">Students Mentored</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">
                {member.coursesCreated}
              </div>
              <div className="text-xs text-gray-400">Courses Created</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {member.expertise.length}
              </div>
              <div className="text-xs text-gray-400">Areas of Expertise</div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Biography</h3>
            <p className="text-gray-300 leading-relaxed">{member.fullBio}</p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
            <ul className="space-y-2">
              {member.education.map((edu, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <SchoolIcon className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {member.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <EmojiEventsIcon className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((exp, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-500/30">
            <div className="flex items-start gap-3">
              <CelebrationIcon className="text-purple-400 w-6 h-6" />
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-1">
                  Fun Fact
                </h4>
                <p className="text-gray-300">{member.funFact}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect with {member.name.split(" ")[0]}
            </h3>
            <div className="flex gap-3">
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <LinkedInIcon className="text-blue-400" />
              </a>
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <TwitterIcon className="text-blue-400" />
              </a>
              <a
                href={member.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <GitHubIcon className="text-gray-300" />
              </a>
              <a
                href={member.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <LanguageIcon className="text-green-400" />
              </a>
            </div>
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experts
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn from industry professionals with years of real-world
              experience. Our team is dedicated to your success.
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-400">
                  {teamMembers.length}+
                </div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">
                  {teamMembers.reduce((acc, m) => acc + m.yearsExperience, 0)}+
                </div>
                <div className="text-sm text-gray-400">Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">
                  {teamMembers
                    .reduce((acc, m) => acc + m.studentsMentored, 0)
                    .toLocaleString()}
                  +
                </div>
                <div className="text-sm text-gray-400">Students Mentored</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-8 border-y border-gray-800 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-96">
              <input
                type="text"
                placeholder="Search by name, role, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
                onClick={() => {
                  setSelectedMember(member);
                  setActiveModal("MemberDetail");
                }}
              >
                {/* Profile Header with Gradient */}
                <div
                  className={`bg-gradient-to-br ${member.color} p-6 relative`}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl font-bold text-white border-4 border-white/30 mb-3">
                    {member.image}
                  </div>
                  <h3 className="text-lg font-bold text-white text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white/80 text-center">
                    {member.role}
                  </p>

                  {/* Badge */}
                  <span
                    className={`absolute top-4 right-4 px-2 py-1 bg-${member.badgeColor}-500/20 text-${member.badgeColor}-300 rounded-full text-xs font-semibold`}
                  >
                    {member.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Location & Contact */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <LocationIcon className="w-4 h-4" />
                      <span className="truncate">{member.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <EmailIcon className="w-4 h-4" />
                      <span className="truncate">{member.email}</span>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {member.expertise.slice(0, 2).map((exp, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-700 text-blue-400 px-2 py-1 rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="text-xs bg-gray-700 text-gray-400 px-2 py-1 rounded-full">
                        +{member.expertise.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="font-bold text-blue-400">
                        {member.yearsExperience}y
                      </div>
                      <div className="text-gray-500">Exp</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-400">
                        {member.studentsMentored}k
                      </div>
                      <div className="text-gray-500">Students</div>
                    </div>
                    <div>
                      <div className="font-bold text-purple-400">
                        {member.coursesCreated}
                      </div>
                      <div className="text-gray-500">Courses</div>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <button className="w-full mt-3 border-2 border-gray-700 text-gray-300 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-300 group-hover:border-blue-500 group-hover:text-blue-400">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No team members found matching your criteria.
              </p>
            </div>
          )}
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
              {activeModal === "MemberDetail" && (
                <Modals.MemberDetail member={selectedMember} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Missing icon import
const SupportAgentIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z" />
    <circle cx="9" cy="13" r="1" />
    <circle cx="15" cy="13" r="1" />
    <path d="M18 11.03C17.52 8.18 15.04 6 12 6s-5.52 2.18-6 5.03c1.51-.63 3.33-1.03 6-1.03 2.67 0 4.49.4 6 1.03z" />
  </svg>
);
