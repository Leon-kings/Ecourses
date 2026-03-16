/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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



  ThumbUp as ThumbUpIcon,
  ThumbUpAlt as ThumbUpAltIcon,
  ThumbUpOffAlt as ThumbUpOffAltIcon,
  ThumbDown as ThumbDownIcon,
  ThumbDownAlt as ThumbDownAltIcon,
  ThumbDownOffAlt as ThumbDownOffAltIcon,
  Share as ShareIcon1,
  Reply as ReplyIcon,
  ReplyAll as ReplyAllIcon,
  Forward as ForwardIcon,
  Redo as RedoIcon,
  Undo as UndoIcon,
  ContentCopy as ContentCopyIcon,
  ContentPaste as ContentPasteIcon,
  ContentCut as ContentCutIcon,
  ContentCopy as ContentCopyIcon1,
  ContentPaste as ContentPasteIcon1,
  ContentCut as ContentCutIcon1,
  FilterList as FilterListIcon1,
  FilterListOff as FilterListOffIcon,
  Sort as SortIcon,
  SortByAlpha as SortByAlphaIcon1,
  Search as SearchIcon1,
  SearchOff as SearchOffIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  ZoomOutMap as ZoomOutMapIcon,
  ZoomInMap as ZoomInMapIcon,
  Fullscreen as FullscreenIcon1,
  FullscreenExit as FullscreenExitIcon,
  RotateLeft as RotateLeftIcon,
  RotateRight as RotateRightIcon,
  Crop as CropIcon,
  CropRotate as CropRotateIcon,
  CropFree as CropFreeIcon,
  CropSquare as CropSquareIcon,
  CropPortrait as CropPortraitIcon,
  CropLandscape as CropLandscapeIcon,
  CropOriginal as CropOriginalIcon,
  Crop75 as Crop75Icon,
  Crop169 as Crop169Icon,
  Crop32 as Crop32Icon,
  Crop54 as Crop54Icon,
  Crop75 as Crop75Icon1,
  CropDin as CropDinIcon,
  GridOn as GridOnIcon,
  GridOff as GridOffIcon,
  Grid3x3 as Grid3x3Icon,
  Grid4x4 as Grid4x4Icon,
  GridGoldenratio as GridGoldenratioIcon,
  TableChart as TableChartIcon,
  TableRows as TableRowsIcon1,
  TableView as TableViewIcon,



  BorderAll as BorderAllIcon,
  BorderBottom as BorderBottomIcon,
  BorderTop as BorderTopIcon,
  BorderLeft as BorderLeftIcon,
  BorderRight as BorderRightIcon,
  BorderClear as BorderClearIcon,
  BorderHorizontal as BorderHorizontalIcon,
  BorderVertical as BorderVerticalIcon,
  BorderOuter as BorderOuterIcon,
  BorderInner as BorderInnerIcon,
  BorderStyle as BorderStyleIcon,
  BorderColor as BorderColorIcon1,
  Search,
  Visibility,
  AccessTime,

} from '@mui/icons-material';

export const Blog = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});
  const [likedPosts, setLikedPosts] = useState({});
  const [commentText, setCommentText] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [comments, setComments] = useState({});
  const [newsletterEmail, setNewsletterEmail] = useState('');

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

  // Blog Categories
  const categories = [
    { id: 'all', name: 'All Posts', icon: <AppsIcon />, count: 24 },
    { id: 'tutorials', name: 'Tutorials', icon: <CodeIcon />, count: 8 },
    { id: 'career', name: 'Career Advice', icon: <RocketLaunchIcon />, count: 6 },
    { id: 'industry', name: 'Industry News', icon: <TrendingUpIcon />, count: 4 },
    { id: 'interviews', name: 'Interviews', icon: <PeopleIcon />, count: 3 },
    { id: 'tips', name: 'Tips & Tricks', icon: <LightbulbIcon />, count: 3 },
  ];

  // Sort options
  const sortOptions = [
    { id: 'latest', name: 'Latest First' },
    { id: 'oldest', name: 'Oldest First' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'trending', name: 'Trending' },
  ];

  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React: A Complete Guide for Beginners',
      slug: 'getting-started-with-react',
      excerpt: 'Learn React from scratch with this comprehensive guide. We\'ll cover components, hooks, state management, and build your first React app.',
      content: `
        <h2>Introduction to React</h2>
        <p>React has revolutionized how we build user interfaces. In this comprehensive guide, we'll take you from absolute beginner to building your first React application.</p>
        
        <h3>What is React?</h3>
        <p>React is a JavaScript library for building user interfaces. It was created by Facebook and has become one of the most popular front-end frameworks in the world. React allows developers to create reusable UI components and manage the state of their applications efficiently.</p>
        
        <h3>Why Learn React?</h3>
        <ul>
          <li><strong>High Demand:</strong> React developers are in high demand, with competitive salaries.</li>
          <li><strong>Component-Based:</strong> Build reusable components that save time and effort.</li>
          <li><strong>Virtual DOM:</strong> React's virtual DOM makes updates fast and efficient.</li>
          <li><strong>Strong Community:</strong> With millions of developers, you'll never be stuck.</li>
          <li><strong>Job Opportunities:</strong> From startups to Fortune 500 companies, everyone uses React.</li>
        </ul>
        
        <h3>Prerequisites</h3>
        <p>Before diving into React, you should have basic knowledge of:</p>
        <ul>
          <li>HTML and CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>Basic understanding of the DOM</li>
        </ul>
        
        <h3>Setting Up Your Development Environment</h3>
        <p>Let's get your computer ready for React development:</p>
        <ol>
          <li><strong>Install Node.js:</strong> Visit nodejs.org and download the LTS version.</li>
          <li><strong>Choose a Code Editor:</strong> VS Code is highly recommended.</li>
          <li><strong>Create React App:</strong> Run npx create-react-app my-first-app</li>
          <li><strong>Start Development:</strong> cd my-first-app && npm start</li>
        </ol>
        
        <h3>Understanding JSX</h3>
        <p>JSX is a syntax extension for JavaScript that looks similar to HTML. It makes writing React components intuitive:</p>
        
        <pre><code>
const element = &lt;h1&gt;Hello, World!&lt;/h1&gt;;
        </code></pre>
        
        <h3>Your First Component</h3>
        <p>Components are the building blocks of React. Here's a simple component:</p>
        
        <pre><code>
function Welcome() {
  return &lt;h1&gt;Welcome to React!&lt;/h1&gt;;
}
        </code></pre>
        
        <h3>Next Steps</h3>
        <p>Now that you understand the basics, start building! Practice by creating small projects, and don't forget to check out our React course for in-depth learning.</p>
      `,
      author: {
        name: 'Emily Rodriguez',
        avatar: 'ER',
        role: 'Lead Instructor - Web Development',
        bio: 'Emily is a full-stack developer with 10+ years experience. She has created 20+ successful web courses and helped 2000+ students become professional developers.'
      },
      category: 'tutorials',
      tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
      coverImage: '⚛️',
      coverColor: 'from-blue-600 to-cyan-400',
      readTime: 12,
      publishedDate: '2024-02-15',
      views: 15420,
      likes: 1234,
      comments: 89,
      shares: 456,
      featured: true,
      trending: true,
    },
    {
      id: 2,
      title: '10 Essential Python Tips Every Data Scientist Should Know',
      slug: 'python-tips-data-science',
      excerpt: 'Master Python for data science with these 10 essential tips and tricks that will boost your productivity and code quality.',
      content: `
        <h2>Python Tips for Data Scientists</h2>
        <p>Python is the language of choice for data science. Here are 10 essential tips that will make you a more effective data scientist.</p>
        
        <h3>1. Use List Comprehensions</h3>
        <p>List comprehensions are more Pythonic and faster than traditional loops:</p>
        <pre><code>
# Instead of:
squares = []
for i in range(10):
    squares.append(i**2)

# Use:
squares = [i**2 for i in range(10)]
        </code></pre>
        
        <h3>2. Leverage Pandas Vectorization</h3>
        <p>Avoid loops when working with DataFrames:</p>
        <pre><code>
# Instead of:
df['new_column'] = df.apply(lambda row: row['a'] + row['b'], axis=1)

# Use vectorized operations:
df['new_column'] = df['a'] + df['b']
        </code></pre>
        
        <h3>3. Use NumPy for Numerical Operations</h3>
        <p>NumPy arrays are faster than Python lists for numerical computations.</p>
        
        <h3>4. Profile Your Code</h3>
        <p>Use cProfile to find bottlenecks in your code.</p>
        
        <h3>5. Master Pandas GroupBy</h3>
        <p>GroupBy operations are powerful for data aggregation.</p>
        
        <h3>6. Use f-strings for Formatting</h3>
        <p>f-strings are the most readable way to format strings:</p>
        <pre><code>
name = "Python"
version = 3.9
print(f"Welcome to {name} {version}!")
        </code></pre>
        
        <h3>7. Handle Missing Data Properly</h3>
        <p>Use pandas methods like fillna() and dropna() appropriately.</p>
        
        <h3>8. Use Virtual Environments</h3>
        <p>Always use virtual environments to manage dependencies.</p>
        
        <h3>9. Document Your Code</h3>
        <p>Good documentation saves hours of debugging time.</p>
        
        <h3>10. Practice Regularly</h3>
        <p>The best way to improve is consistent practice.</p>
      `,
      author: {
        name: 'Dr. James Wilson',
        avatar: 'JW',
        role: 'Data Science Director',
        bio: 'Dr. James Wilson is a renowned data scientist with a passion for teaching. He has helped 500+ students land data jobs at top companies.'
      },
      category: 'tutorials',
      tags: ['Python', 'Data Science', 'Pandas', 'NumPy', 'Tips'],
      coverImage: '🐍',
      coverColor: 'from-green-600 to-emerald-400',
      readTime: 8,
      publishedDate: '2024-02-10',
      views: 12340,
      likes: 987,
      comments: 67,
      shares: 234,
      featured: true,
      trending: true,
    },
    {
      id: 3,
      title: 'How to Land Your First Tech Job: A Complete Career Guide',
      slug: 'land-first-tech-job',
      excerpt: 'From resume tips to interview preparation, learn everything you need to know to land your dream job in tech.',
      content: `
        <h2>Your Guide to Landing a Tech Job</h2>
        <p>The tech industry offers incredible opportunities, but breaking in can be challenging. Here's your complete guide to landing that first tech job.</p>
        
        <h3>1. Build a Strong Foundation</h3>
        <p>Master the fundamentals before diving deep into any specific technology. Understanding core concepts will make learning new technologies easier.</p>
        
        <h3>2. Create a Portfolio</h3>
        <p>Your portfolio is your best resume. Build projects that demonstrate your skills:</p>
        <ul>
          <li>Start with simple projects and gradually increase complexity</li>
          <li>Contribute to open source</li>
          <li>Document your projects well</li>
          <li>Host them online (GitHub Pages, Netlify, etc.)</li>
        </ul>
        
        <h3>3. Network Effectively</h3>
        <p>Networking opens doors. Here's how to do it right:</p>
        <ul>
          <li>Attend tech meetups and conferences</li>
          <li>Engage on LinkedIn and Twitter</li>
          <li>Join developer communities</li>
          <li>Connect with alumni from your program</li>
        </ul>
        
        <h3>4. Master the Interview Process</h3>
        <p>Technical interviews can be intimidating. Prepare by:</p>
        <ul>
          <li>Practicing coding challenges on LeetCode</li>
          <li>Doing mock interviews</li>
          <li>Studying system design basics</li>
          <li>Preparing your own questions</li>
        </ul>
        
        <h3>5. Create an Outstanding Resume</h3>
        <p>Your resume should highlight:</p>
        <ul>
          <li>Relevant projects and their impact</li>
          <li>Technical skills and proficiency levels</li>
          <li>Quantifiable achievements</li>
          <li>Continuous learning and certifications</li>
        </ul>
        
        <h3>6. Prepare for Behavioral Questions</h3>
        <p>Use the STAR method (Situation, Task, Action, Result) to structure your answers.</p>
        
        <h3>7. Negotiate Your Offer</h3>
        <p>Don't accept the first offer. Research market rates and negotiate confidently.</p>
        
        <h3>8. Keep Learning</h3>
        <p>The learning never stops in tech. Stay curious and keep updating your skills.</p>
      `,
      author: {
        name: 'Alex Thompson',
        avatar: 'AT',
        role: 'Student Success Manager',
        bio: 'Alex has helped 1000+ students successfully transition into tech careers. He manages our student success programs and career services.'
      },
      category: 'career',
      tags: ['Career', 'Job Search', 'Interview', 'Resume', 'Networking'],
      coverImage: '💼',
      coverColor: 'from-purple-600 to-pink-400',
      readTime: 10,
      publishedDate: '2024-02-05',
      views: 21340,
      likes: 2134,
      comments: 156,
      shares: 789,
      featured: true,
      trending: true,
    },
    {
      id: 4,
      title: 'The Future of AI: What Developers Need to Know in 2024',
      slug: 'future-of-ai-2024',
      excerpt: 'Explore the latest trends in AI and machine learning, and learn how developers can prepare for the AI-driven future.',
      content: `
        <h2>The AI Revolution: What's Coming in 2024</h2>
        <p>Artificial Intelligence is evolving at an unprecedented pace. Here's what developers need to know to stay ahead.</p>
        
        <h3>1. Large Language Models (LLMs)</h3>
        <p>LLMs like GPT-4 are becoming more accessible and powerful. Developers can now:</p>
        <ul>
          <li>Build applications with natural language interfaces</li>
          <li>Automate content generation</li>
          <li>Create intelligent chatbots</li>
          <li>Enhance search and recommendation systems</li>
        </ul>
        
        <h3>2. Multimodal AI</h3>
        <p>AI models that can understand and generate multiple types of data (text, images, audio) are becoming mainstream.</p>
        
        <h3>3. AI-Powered Development Tools</h3>
        <p>Tools like GitHub Copilot are changing how we code:</p>
        <ul>
          <li>AI-assisted coding</li>
          <li>Automated testing</li>
          <li>Code review and optimization</li>
          <li>Documentation generation</li>
        </ul>
        
        <h3>4. Ethics and Responsible AI</h3>
        <p>As AI becomes more powerful, ethical considerations become crucial:</p>
        <ul>
          <li>Bias detection and mitigation</li>
          <li>Privacy and data protection</li>
          <li>Transparency and explainability</li>
          <li>Regulatory compliance</li>
        </ul>
        
        <h3>5. Edge AI</h3>
        <p>Running AI models on edge devices (phones, IoT) is becoming feasible, enabling new applications.</p>
        
        <h3>6. AI Skills in Demand</h3>
        <p>To thrive in the AI era, developers should focus on:</p>
        <ul>
          <li>Understanding AI fundamentals</li>
          <li>Learning to work with AI APIs</li>
          <li>Prompt engineering</li>
          <li>AI integration patterns</li>
        </ul>
        
        <h3>7. The Human Element</h3>
        <p>While AI automates many tasks, human skills like creativity, critical thinking, and empathy become more valuable.</p>
      `,
      author: {
        name: 'Dr. Lisa Wang',
        avatar: 'LW',
        role: 'AI Research Lead',
        bio: 'Dr. Lisa Wang is a leading researcher in artificial intelligence. Her work has been featured in major tech publications and conferences.'
      },
      category: 'industry',
      tags: ['AI', 'Machine Learning', 'Technology Trends', 'Future'],
      coverImage: '🤖',
      coverColor: 'from-indigo-600 to-purple-400',
      readTime: 15,
      publishedDate: '2024-01-28',
      views: 18920,
      likes: 1876,
      comments: 134,
      shares: 567,
      featured: true,
      trending: false,
    },
    {
      id: 5,
      title: 'Interview with Google Tech Lead: Secrets to Success in Tech',
      slug: 'interview-google-tech-lead',
      excerpt: 'We sat down with a Google Tech Lead to discuss career growth, technical skills, and what it takes to succeed in big tech.',
      content: `
        <h2>Exclusive Interview: Google Tech Lead Reveals Success Secrets</h2>
        <p>We had the privilege of interviewing Michael Chen, a Tech Lead at Google with over 12 years of experience. Here's what he shared.</p>
        
        <h3>Q: What does a typical day look like for you?</h3>
        <p>"No two days are the same. I might spend mornings on code reviews and mentoring, afternoons on architecture decisions, and evenings on strategic planning. The variety keeps it exciting."</p>
        
        <h3>Q: What skills are most important for career growth?</h3>
        <p>"Technical skills get you in the door, but soft skills determine your growth. Communication, leadership, and the ability to influence without authority are crucial."</p>
        
        <h3>Q: How can junior developers stand out?</h3>
        <p>"Take ownership. Don't just complete tasks – understand the why behind them. Volunteer for challenging projects. Help others. Build a reputation for reliability."</p>
        
        <h3>Q: What's your advice for preparing for technical interviews?</h3>
        <p>"Practice consistently. LeetCode is great, but don't just memorize solutions – understand the patterns. Also, practice system design – it's often the differentiator."</p>
        
        <h3>Q: How important is a computer science degree?</h3>
        <p>"Less important than it used to be. We've hired many successful engineers without CS degrees. What matters is demonstrated skill and continuous learning."</p>
        
        <h3>Q: What trends are you excited about?</h3>
        <p>"AI-assisted development is game-changing. Also, WebAssembly opens new possibilities. The pace of innovation is incredible."</p>
        
        <h3>Q: Final advice for our readers?</h3>
        <p>"Stay curious. The tech landscape changes fast. Build a learning habit, not just a skillset. And remember to enjoy the journey."</p>
      `,
      author: {
        name: 'Prof. Michael Chen',
        avatar: 'MC',
        role: 'Head of Curriculum',
        bio: 'Prof. Michael Chen leads our curriculum development team. With 12+ years of experience and an ex-Google Tech Lead, he ensures our courses meet industry standards.'
      },
      category: 'interviews',
      tags: ['Interview', 'Google', 'Career Advice', 'Tech Lead'],
      coverImage: '🎙️',
      coverColor: 'from-yellow-600 to-orange-400',
      readTime: 12,
      publishedDate: '2024-01-20',
      views: 22340,
      likes: 2341,
      comments: 189,
      shares: 890,
      featured: true,
      trending: true,
    },
    {
      id: 6,
      title: 'Mastering CSS Grid: A Complete Guide with Examples',
      slug: 'mastering-css-grid',
      excerpt: 'Learn CSS Grid from basics to advanced with practical examples. Create complex layouts with ease.',
      content: `
        <h2>Mastering CSS Grid</h2>
        <p>CSS Grid is a powerful layout system that revolutionizes how we create web layouts. Here's everything you need to know.</p>
        
        <h3>What is CSS Grid?</h3>
        <p>CSS Grid is a two-dimensional layout system that allows you to create complex grid-based layouts with ease. Unlike Flexbox (which is one-dimensional), Grid can handle both rows and columns simultaneously.</p>
        
        <h3>Basic Concepts</h3>
        <ul>
          <li><strong>Grid Container:</strong> The parent element with display: grid</li>
          <li><strong>Grid Items:</strong> Direct children of the grid container</li>
          <li><strong>Grid Lines:</strong> The dividing lines that make up the grid</li>
          <li><strong>Grid Tracks:</strong> The rows and columns of the grid</li>
          <li><strong>Grid Cells:</strong> The intersection of a row and column</li>
          <li><strong>Grid Areas:</strong> A rectangular area spanning multiple cells</li>
        </ul>
        
        <h3>Creating Your First Grid</h3>
        <pre><code>
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
  gap: 20px;
}
        </code></pre>
        
        <h3>Responsive Grids with fr Units</h3>
        <pre><code>
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
}
        </code></pre>
        
        <h3>Grid Template Areas</h3>
        <pre><code>
.container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  gap: 20px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
        </code></pre>
        
        <h3>Advanced Techniques</h3>
        <ul>
          <li>Using minmax() for flexible tracks</li>
          <li>Auto-placement with grid-auto-flow</li>
          <li>Nesting grids</li>
          <li>Alignment with justify-items and align-items</li>
        </ul>
        
        <h3>Browser Support</h3>
        <p>CSS Grid is supported in all modern browsers, making it safe to use in production.</p>
      `,
      author: {
        name: 'Emily Rodriguez',
        avatar: 'ER',
        role: 'Lead Instructor - Web Development',
        bio: 'Emily is a full-stack developer with 10+ years experience. She has created 20+ successful web courses.'
      },
      category: 'tutorials',
      tags: ['CSS', 'Web Development', 'Frontend', 'Design'],
      coverImage: '🎨',
      coverColor: 'from-pink-600 to-rose-400',
      readTime: 10,
      publishedDate: '2024-01-15',
      views: 14560,
      likes: 1456,
      comments: 98,
      shares: 345,
      featured: false,
      trending: false,
    },
    {
      id: 7,
      title: 'Cybersecurity Best Practices for Developers in 2024',
      slug: 'cybersecurity-best-practices-2024',
      excerpt: 'Protect your applications and users with these essential cybersecurity practices every developer should know.',
      content: `
        <h2>Cybersecurity Best Practices for Developers</h2>
        <p>Security is everyone's responsibility. Here are essential practices to keep your applications secure.</p>
        
        <h3>1. Input Validation</h3>
        <p>Never trust user input. Always validate and sanitize:</p>
        <ul>
          <li>Use allowlists instead of blocklists</li>
          <li>Validate data type, length, format</li>
          <li>Escape output to prevent XSS</li>
        </ul>
        
        <h3>2. Authentication & Authorization</h3>
        <ul>
          <li>Use strong password hashing (bcrypt, Argon2)</li>
          <li>Implement MFA (Multi-Factor Authentication)</li>
          <li>Use OAuth 2.0 / OIDC for third-party auth</li>
          <li>Implement proper session management</li>
        </ul>
        
        <h3>3. API Security</h3>
        <ul>
          <li>Use HTTPS everywhere</li>
          <li>Implement rate limiting</li>
          <li>Validate API inputs</li>
          <li>Use API keys and tokens properly</li>
        </ul>
        
        <h3>4. Database Security</h3>
        <ul>
          <li>Use parameterized queries (prevent SQL injection)</li>
          <li>Encrypt sensitive data at rest</li>
          <li>Use least privilege principle</li>
          <li>Regular backups</li>
        </ul>
        
        <h3>5. Dependency Management</h3>
        <ul>
          <li>Regularly update dependencies</li>
          <li>Use tools like npm audit, Snyk</li>
          <li>Review dependencies before adding</li>
        </ul>
        
        <h3>6. Secure Development Lifecycle</h3>
        <ul>
          <li>Threat modeling early</li>
          <li>Security code reviews</li>
          <li>Automated security testing</li>
          <li>Penetration testing</li>
        </ul>
        
        <h3>7. Incident Response</h3>
        <ul>
          <li>Have a response plan</li>
          <li>Monitor for breaches</li>
          <li>Know how to contain and recover</li>
          <li>Learn from incidents</li>
        </ul>
      `,
      author: {
        name: 'Priya Patel',
        avatar: 'PP',
        role: 'Cybersecurity Lead',
        bio: 'Priya is a certified ethical hacker and former security consultant for Fortune 500 companies. She leads our cybersecurity programs.'
      },
      category: 'tutorials',
      tags: ['Cybersecurity', 'Security', 'Best Practices', 'Development'],
      coverImage: '🔒',
      coverColor: 'from-red-600 to-orange-400',
      readTime: 12,
      publishedDate: '2024-01-08',
      views: 16780,
      likes: 1678,
      comments: 112,
      shares: 456,
      featured: true,
      trending: false,
    },
    {
      id: 8,
      title: 'From Bootcamp to Senior Developer: A Success Story',
      slug: 'bootcamp-to-senior-developer',
      excerpt: 'Read how a bootcamp graduate progressed from junior to senior developer in just 3 years, with practical advice for your own journey.',
      content: `
        <h2>From Bootcamp to Senior Developer: A Journey</h2>
        <p>Sarah Martinez graduated from our bootcamp in 2021. Three years later, she's a senior developer at a tech company. Here's her story.</p>
        
        <h3>The Beginning</h3>
        <p>"I came to coding with no technical background. I was working in retail and knew I needed a change. The bootcamp was intense but transformative."</p>
        
        <h3>First Job: Junior Developer</h3>
        <p>"My first job was at a small startup. I was the only frontend developer. It was terrifying but also the best learning experience. I made mistakes, learned from them, and grew quickly."</p>
        
        <h3>Year 1: Learning the Ropes</h3>
        <p>"I spent my first year absorbing everything. I asked questions, volunteered for challenging tasks, and spent evenings learning new technologies. I also found a mentor who guided me."</p>
        
        <h3>Year 2: Taking Ownership</h3>
        <p>"By year two, I was leading features. I learned to break down complex requirements, communicate with stakeholders, and mentor new junior developers. This is when I knew I was on the right track."</p>
        
        <h3>Year 3: Senior Role</h3>
        <p>"When I got the senior offer, I was surprised but ready. The promotion recognized not just my technical skills, but my ability to lead projects and mentor others."</p>
        
        <h3>Key Lessons</h3>
        <ul>
          <li>Never stop learning</li>
          <li>Ask questions without fear</li>
          <li>Build your network</li>
          <li>Find mentors and be a mentor</li>
          <li>Focus on fundamentals</li>
          <li>Work on side projects</li>
          <li>Document your learning</li>
        </ul>
        
        <h3>Advice for New Developers</h3>
        <p>"Trust the process. The beginning is hard, but it gets easier. Every expert was once a beginner. Stay curious, stay humble, and keep building."</p>
      `,
      author: {
        name: 'Alex Thompson',
        avatar: 'AT',
        role: 'Student Success Manager',
        bio: 'Alex has helped 1000+ students successfully transition into tech careers.'
      },
      category: 'career',
      tags: ['Career', 'Success Story', 'Bootcamp', 'Growth'],
      coverImage: '📈',
      coverColor: 'from-emerald-600 to-teal-400',
      readTime: 10,
      publishedDate: '2024-01-01',
      views: 19340,
      likes: 1934,
      comments: 145,
      shares: 678,
      featured: true,
      trending: true,
    },
    {
      id: 9,
      title: '10 VS Code Extensions That Will Boost Your Productivity',
      slug: 'vscode-extensions-productivity',
      excerpt: 'Discover the best VS Code extensions to supercharge your development workflow and write better code faster.',
      content: `
        <h2>Essential VS Code Extensions for Developers</h2>
        <p>VS Code is powerful out of the box, but these extensions will take your productivity to the next level.</p>
        
        <h3>1. Prettier - Code Formatter</h3>
        <p>Automatically formats your code according to consistent rules. No more debates about semicolons or indentation.</p>
        
        <h3>2. ESLint</h3>
        <p>Find and fix problems in your JavaScript code. Catches errors before they cause issues.</p>
        
        <h3>3. GitLens</h3>
        <p>Supercharges Git capabilities. See who changed what, when, and why, right in your editor.</p>
        
        <h3>4. Live Share</h3>
        <p>Collaborate in real-time. Share your session with others for pair programming or code reviews.</p>
        
        <h3>5. Thunder Client</h3>
        <p>Test APIs directly in VS Code. A lightweight alternative to Postman.</p>
        
        <h3>6. Bracket Pair Colorizer</h3>
        <p>Colors matching brackets to make code structure easier to read.</p>
        
        <h3>7. Path Intellisense</h3>
        <p>Autocompletes filenames when typing import paths.</p>
        
        <h3>8. Code Spell Checker</h3>
        <p>Catches spelling errors in your code and comments.</p>
        
        <h3>9. Import Cost</h3>
        <p>Displays the size of imported packages, helping you keep bundles lean.</p>
        
        <h3>10. Peacock</h3>
        <p>Changes the color of your VS Code workspace. Great when working with multiple projects.</p>
        
        <h3>Bonus: Custom Snippets</h3>
        <p>Create your own snippets for repetitive code patterns. Saves hours over time.</p>
        
        <h3>How to Install</h3>
        <p>Open VS Code, click the extensions icon (or press Ctrl+Shift+X), search for the extension, and click Install.</p>
      `,
      author: {
        name: 'Emily Rodriguez',
        avatar: 'ER',
        role: 'Lead Instructor - Web Development',
        bio: 'Emily is a full-stack developer with 10+ years experience.'
      },
      category: 'tips',
      tags: ['VS Code', 'Tools', 'Productivity', 'Development'],
      coverImage: '🔧',
      coverColor: 'from-blue-600 to-sky-400',
      readTime: 7,
      publishedDate: '2023-12-20',
      views: 21560,
      likes: 2156,
      comments: 167,
      shares: 890,
      featured: false,
      trending: true,
    },
    {
      id: 10,
      title: 'Understanding Docker: A Beginner\'s Guide',
      slug: 'docker-beginners-guide',
      excerpt: 'Learn Docker from scratch. Understand containers, images, and how to containerize your applications.',
      content: `
        <h2>Docker for Beginners</h2>
        <p>Docker has revolutionized how we deploy applications. Here's everything you need to get started.</p>
        
        <h3>What is Docker?</h3>
        <p>Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and consistent environments that package your application with everything it needs to run.</p>
        
        <h3>Containers vs Virtual Machines</h3>
        <p>Unlike VMs, containers share the host OS kernel, making them much more lightweight and faster to start. They're like apartments in a building, while VMs are like separate houses.</p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Images:</strong> Blueprints for containers</li>
          <li><strong>Containers:</strong> Running instances of images</li>
          <li><strong>Dockerfile:</strong> Instructions to build an image</li>
          <li><strong>Docker Hub:</strong> Repository for sharing images</li>
          <li><strong>Volumes:</strong> Persistent data storage</li>
          <li><strong>Networks:</strong> Communication between containers</li>
        </ul>
        
        <h3>Installing Docker</h3>
        <p>Visit docker.com and download Docker Desktop for your OS. Installation is straightforward.</p>
        
        <h3>Your First Container</h3>
        <pre><code>
# Run a hello-world container
docker run hello-world

# Run an nginx web server
docker run -p 8080:80 nginx
        </code></pre>
        
        <h3>Creating a Dockerfile</h3>
        <pre><code>
FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
        </code></pre>
        
        <h3>Building and Running</h3>
        <pre><code>
# Build the image
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
        </code></pre>
        
        <h3>Docker Compose</h3>
        <p>Define and run multi-container applications with docker-compose.yml:</p>
        <pre><code>
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: mongo
    volumes:
      - data:/data/db
        </code></pre>
        
        <h3>Next Steps</h3>
        <p>Practice by containerizing your own applications. Learn about orchestration with Kubernetes when you're ready.</p>
      `,
      author: {
        name: 'David Okonkwo',
        avatar: 'DO',
        role: 'DevOps & Cloud Instructor',
        bio: 'David is a DevOps expert with experience building CI/CD pipelines for global companies.'
      },
      category: 'tutorials',
      tags: ['Docker', 'DevOps', 'Containers', 'Deployment'],
      coverImage: '🐳',
      coverColor: 'from-sky-600 to-blue-400',
      readTime: 14,
      publishedDate: '2023-12-15',
      views: 18760,
      likes: 1876,
      comments: 134,
      shares: 567,
      featured: true,
      trending: false,
    }
  ];

  // Filter and sort blog posts
  const filteredPosts = blogPosts
    .filter(post => {
      if (filterCategory !== 'all' && post.category !== filterCategory) return false;
      if (searchQuery) {
        return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
               post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.publishedDate) - new Date(a.publishedDate);
      if (sortBy === 'oldest') return new Date(a.publishedDate) - new Date(b.publishedDate);
      if (sortBy === 'popular') return b.views - a.views;
      if (sortBy === 'trending') return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      return 0;
    });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending);

  const handleBookmark = (postId) => {
    setBookmarkedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    toast.success(bookmarkedPosts[postId] ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleShare = (post) => {
    navigator.clipboard.writeText(`https://ecourses.com/blog/${post.slug}`);
    toast.success('Link copied to clipboard!');
  };

  const handleComment = (postId) => {
    if (commentText.trim()) {
      setComments(prev => ({
        ...prev,
        [postId]: [
          ...(prev[postId] || []),
          {
            id: Date.now(),
            author: 'Guest User',
            avatar: 'GU',
            text: commentText,
            timestamp: new Date().toISOString(),
            likes: 0,
            replies: []
          }
        ]
      }));
      setCommentText('');
      toast.success('Comment added!');
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      toast.success('Successfully subscribed to newsletter!');
      setNewsletterEmail('');
    }
  };

  const Modals = {
    PostDetail: ({ post }) => {
      const [showComments, setShowComments] = useState(false);
      const postComments = comments[post.id] || [];

      return (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-4xl mx-4 overflow-hidden shadow-2xl border border-gray-800 max-h-[90vh] overflow-y-auto"
        >
          {/* Header with cover */}
          <div className={`bg-gradient-to-r ${post.coverColor} p-8 relative`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="text-7xl">{post.coverImage}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-white/90 text-sm">
                      <AccessTime className="w-4 h-4" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{post.title}</h2>
                  <p className="text-white/80">{post.excerpt}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Author info */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold text-white border-2 border-white/30">
                  {post.author.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{post.author.name}</p>
                  <p className="text-white/70 text-sm">{post.author.role}</p>
                </div>
              </div>
            
            </div>
          </div>

          {/* Post content */}
          <div className="p-6">
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700">
                    #{tag}
                         </span>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div className="mt-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
                  {post.author.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">About {post.author.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{post.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Comments section */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">
                  Comments ({postComments.length})
                </h3>
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  {showComments ? 'Hide' : 'Show'} Comments
                </button>
              </div>

              {showComments && (
                <div className="space-y-4">
                  {/* Add comment */}
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                      GU
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="2"
                      ></textarea>
                      <button
                        onClick={() => handleComment(post.id)}
                        disabled={!commentText.trim()}
                        className="mt-2 bg-gradient-to-t from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-blue-500 disabled:opacity-50"
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>

                  {/* Comments list */}
                  {postComments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                        {comment.avatar}
                      </div>
                      <div className="flex-1 bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-white">{comment.author}</span>
                          <span className="text-xs text-gray-400">
                            {new Date(comment.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      );
    },

    NewsletterModal: () => (
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl w-full max-w-md mx-4 overflow-hidden shadow-2xl border border-gray-800"
      >
        <div className={`bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center`}>
          <MailIcon className="text-6xl text-white mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-white/80">Get the latest posts delivered right to your inbox</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubscribe}>
            <div className="mb-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-t from-blue-600 to-blue-400 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
            >
              Subscribe Now
            </button>
          </form>

          <button
            onClick={() => setActiveModal(null)}
            className="w-full mt-3 text-gray-400 hover:text-white text-sm"
          >
            Maybe later
          </button>
        </div>
      </motion.div>
    )
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
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights, Tutorials &{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Industry News
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest in tech. Learn from experts, explore tutorials, and get career advice.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-800/80 border border-gray-700 text-white rounded-full pl-14 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Categories */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-8 border-y border-gray-800 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
         

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map(option => (
                <option key={option.id} value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && filterCategory === 'all' && !searchQuery && (
        <section className="bg-gradient-to-b from-black to-gray-900 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <StarIcon className="text-yellow-400" />
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map(post => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
                  onClick={() => {
                    setSelectedPost(post);
                    setActiveModal('PostDetail');
                  }}
                >
                  <div className={`bg-gradient-to-r ${post.coverColor} p-6 relative`}>
                    <div className="text-5xl text-center mb-3">{post.coverImage}</div>
                    <span className="absolute top-4 right-4 px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                          {post.author.avatar}
                        </div>
                        <span className="text-sm text-gray-300">{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trending Posts */}
      {trendingPosts.length > 0 && filterCategory === 'all' && !searchQuery && (
        <section className="bg-gradient-to-b from-gray-900 to-black py-12 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUpIcon className="text-red-400" />
              Trending Now
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {trendingPosts.slice(0, 5).map(post => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700 cursor-pointer text-center"
                  onClick={() => {
                    setSelectedPost(post);
                    setActiveModal('PostDetail');
                  }}
                >
                  <div className="text-4xl mb-2">{post.coverImage}</div>
                  <h4 className="text-sm font-semibold text-white mb-1 line-clamp-2">{post.title}</h4>
                  <p className="text-xs text-gray-400">{post.readTime} min read</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">
            {searchQuery ? 'Search Results' : filterCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === filterCategory)?.name}`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer"
                onClick={() => {
                  setSelectedPost(post);
                  setActiveModal('PostDetail');
                }}
              >
                <div className={`bg-gradient-to-r ${post.coverColor} p-6 relative`}>
                  <div className="text-5xl text-center mb-3">{post.coverImage}</div>
                  {post.trending && (
                    <span className="absolute top-4 left-4 px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-semibold flex items-center gap-1">
                      <TrendingUpIcon className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-blue-400 font-semibold">{post.category}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">{post.readTime} min read</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmark(post.id);
                      }}
                      className={`transition-colors ${
                        bookmarkedPosts[post.id] ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'
                      }`}
                    >
                      {bookmarkedPosts[post.id] ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                        {post.author.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{post.author.name}</p>
                        <p className="text-xs text-gray-400">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-700 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Visibility className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbUpIcon className="w-4 h-4" />
                      <span>{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CommentIcon className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Popular Tags */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Popular Topics</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => {
              const count = blogPosts.filter(post => post.tags.includes(tag)).length;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setFilterCategory('all');
                    setSearchQuery(tag);
                  }}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <span>#{tag}</span>
                  <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <MailIcon className="text-6xl text-blue-400 mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss an Article
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join our newsletter to get the latest posts delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <button
              onClick={() => setActiveModal('newsletter')}
              className="bg-gradient-to-t from-blue-600 to-blue-400 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-500 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              Subscribe Now
              <ArrowForwardIcon className="w-5 h-5" />
            </button>
          </motion.div>
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
              {activeModal === 'PostDetail' && <Modals.PostDetail post={selectedPost} />}
              {activeModal === 'newsletter' && <Modals.NewsletterModal />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};