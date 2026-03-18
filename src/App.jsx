/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */

import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { About } from "./pages/about/About";
import { Services } from "./pages/services/Services";
import { Courses } from "./pages/courses/Courses";
import { Team } from "./pages/team/TeamMember";
import { Blog } from "./pages/blog/Blogs";
import { Home } from "./pages/home/Home";
import { Dashboard } from "./dashboards/admin/Dashboard";
import { Analytics } from "./dashboards/admin/components/analystics/Analystics";
import {
  Close,
  CloseFullscreen,
  DashboardCustomize,
} from "@mui/icons-material";
import { UserManagement } from "./dashboards/admin/components/users/UserManagement";
import { CoursesManagement } from "./dashboards/admin/components/courses/CoursesManagement";
import { BlogManagement } from "./dashboards/admin/components/blogs/BlogsManagements";
import { BookingManagement } from "./dashboards/admin/components/bookings/BookingsManagements";
import { UserDashboard } from "./dashboards/users/UserDashboard";
import { MeManagement } from "./dashboards/users/components/user/MeManagement";

// Auth Context
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

// Dashboard Layout Component

const DashboardLayout = ({ children }) => {
  // Start with sidebar expanded on large screens, closed on smaller screens
  const [sidebarState, setSidebarState] = useState(() => {
    // Check if we're in a browser environment and screen is large
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024 ? "expanded" : "closed";
    }
    return "closed"; // Default for SSR
  });

  const { user, logout } = useAuth();
  const location = useLocation();

  // Update sidebar state when screen size crosses lg breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // On large screens, if sidebar is closed, open it (expanded)
        setSidebarState((prev) => (prev === "closed" ? "expanded" : prev));
      } else {
        // On small screens, if sidebar is open, close it
        setSidebarState((prev) => (prev !== "closed" ? "closed" : prev));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: "📊" },
    { path: "/dashboard/analytics", name: "Analytics", icon: "📈" },
    { path: "/dashboard/users", name: "Users", icon: "👥" },
    { path: "/dashboard/courses", name: "Courses", icon: "📚" },
    { path: "/dashboard/blog", name: "Blog Posts", icon: "✍️" },
    { path: "/dashboard/services", name: "Services", icon: "⚙️" },
    { path: "/dashboard/team", name: "Team Members", icon: "👤" },
    { path: "/dashboard/settings", name: "Settings", icon: "⚙️" },
  ];

  // Determine sidebar width based on state
  const getSidebarWidth = () => {
    switch (sidebarState) {
      case "expanded":
        return "w-64";
      case "small":
        return "w-20";
      default:
        return "w-0";
    }
  };

  // Check if we're on large screen for conditional rendering
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={`${getSidebarWidth()} bg-gradient-to-b from-purple-800 to-purple-900 text-white transition-all duration-300 ease-in-out h-full shadow-xl flex flex-col absolute lg:relative lg:absolute-none top-0 left-0 z-30 overflow-hidden`}
      >
        {/* Header with logo and controls */}
        <div className="flex items-center justify-between p-4 border-b border-purple-700 flex-shrink-0">
          <div
            className={`flex items-center overflow-hidden transition-all ${sidebarState === "expanded" ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
          >
            <span className="text-2xl font-bold whitespace-nowrap">Admin</span>
          </div>

          {/* Control buttons - only show when sidebar is not closed */}
          {sidebarState !== "closed" && (
            <div className="flex items-center gap-1 ml-auto">
              {/* Fold/unfold button */}
              <button
                onClick={() =>
                  setSidebarState(
                    sidebarState === "expanded" ? "small" : "expanded",
                  )
                }
                className="p-2 rounded-lg hover:bg-purple-700 transition-all duration-200 flex-shrink-0"
                aria-label={
                  sidebarState === "expanded"
                    ? "Collapse to icons"
                    : "Expand sidebar"
                }
              >
                {sidebarState === "expanded" ? "◀" : "▶"}
              </button>
              {/* Close button - hide on large screens when expanded? Optional: keep for consistency */}
              <button
                onClick={() => setSidebarState("closed")}
                className="p-2 rounded-lg bg-gradient-to-t from-red-500 to-red-700 text-white transition-all duration-200 flex-shrink-0"
              >
                <CloseFullscreen />
              </button>
            </div>
          )}
        </div>

        {/* User Info - visible only when expanded */}
        <div
          className={`p-4 border-b border-purple-700 transition-all duration-300 ${
            sidebarState === "expanded"
              ? "opacity-100"
              : "opacity-0 h-0 p-0 border-none overflow-hidden"
          }`}
        >
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">{user?.name?.charAt(0) || "A"}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold truncate">{user?.name || "Admin"}</p>
              <p className="text-xs text-purple-300 truncate">
                {user?.email || "admin@example.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                // On small screens, close after navigation
                if (!isLargeScreen) {
                  setSidebarState("closed");
                }
              }}
              className={`group relative flex items-center px-4 py-3 hover:bg-purple-700 transition-all duration-200 ${
                location.pathname === item.path ? "bg-purple-700" : ""
              }`}
            >
              <div className="flex items-center w-full min-w-0">
                <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
                {sidebarState === "expanded" && (
                  <span className="font-medium truncate">{item.name}</span>
                )}
              </div>

              {/* Tooltip for small state */}
              {sidebarState === "small" && (
                <span className="absolute left-20 bg-purple-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-purple-700 flex-shrink-0">
          <button
            onClick={logout}
            className="group relative flex items-center w-full px-4 py-3 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-lg transition-all duration-200 hover:from-red-600 hover:to-red-800"
          >
            <span className="text-xl mr-3 flex-shrink-0">🚪</span>
            {sidebarState === "expanded" && (
              <span className="truncate">Logout</span>
            )}

            {/* Tooltip for small state */}
            {sidebarState === "small" && (
              <span className="absolute left-20 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                Logout
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full overflow-auto flex flex-col w-full">
        {/* Top Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10 flex-shrink-0">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              {/* Button to open sidebar - visible on small screens or when sidebar is closed on large */}
              {(sidebarState === "closed" || !isLargeScreen) && (
                <button
                  onClick={() => setSidebarState("expanded")}
                  className="p-2 rounded-lg bg-gradient-to-t from-blue-500 to-indigo-700 text-white transition-all sm:block md:block lg:hidden xl:hidden duration-200"
                  aria-label="Open menu"
                >
                  <DashboardCustomize className="size-6" />
                </button>
              )}
              <h2 className="text-2xl font-semibold text-gray-800">
                {menuItems.find((item) => item.path === location.pathname)
                  ?.name || "Dashboard"}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-gray-600">Welcome,</span>
                <span className="font-semibold text-purple-600">
                  {user?.name || "Admin"}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">
                  {user?.name?.charAt(0) || "A"}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 bg-gray-50 flex-1 overflow-auto">{children}</main>
      </div>

      {/* Overlay when sidebar is open on small screens */}
      {sidebarState !== "closed" && !isLargeScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-20"
          onClick={() => setSidebarState("closed")}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

const UserDashboardLayout = ({ children }) => {
  // Start with sidebar expanded on large screens, closed on smaller screens
  const [sidebarState, setSidebarState] = useState(() => {
    // Check if we're in a browser environment and screen is large
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024 ? "expanded" : "closed";
    }
    return "closed"; // Default for SSR
  });

  const { user, logout } = useAuth();
  const location = useLocation();

  // Update sidebar state when screen size crosses lg breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // On large screens, if sidebar is closed, open it (expanded)
        setSidebarState((prev) => (prev === "closed" ? "expanded" : prev));
      } else {
        // On small screens, if sidebar is open, close it
        setSidebarState((prev) => (prev !== "closed" ? "closed" : prev));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { path: "/user/dashboard", name: "Dashboard", icon: "📊" },
    { path: "/user/dashboard/analytics", name: "Analytics", icon: "📈" },
    { path: "/user/dashboard/users", name: "Users", icon: "👥" },
    { path: "/user/dashboard/courses", name: "Courses", icon: "📚" },
    { path: "/user/dashboard/blog", name: "Blog Posts", icon: "✍️" },
    { path: "/user/dashboard/services", name: "Services", icon: "⚙️" },
    { path: "/user/dashboard/team", name: "Team Members", icon: "👤" },
    { path: "/user/dashboard/settings", name: "Settings", icon: "⚙️" },
  ];

  // Determine sidebar width based on state
  const getSidebarWidth = () => {
    switch (sidebarState) {
      case "expanded":
        return "w-64";
      case "small":
        return "w-20";
      default:
        return "w-0";
    }
  };

  // Check if we're on large screen for conditional rendering
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={`${getSidebarWidth()} bg-gradient-to-b from-purple-800 to-purple-900 text-white transition-all duration-300 ease-in-out h-full shadow-xl flex flex-col absolute lg:relative lg:absolute-none top-0 left-0 z-30 overflow-hidden`}
      >
        {/* Header with logo and controls */}
        <div className="flex items-center justify-between p-4 border-b border-purple-700 flex-shrink-0">
          <div
            className={`flex items-center overflow-hidden transition-all ${sidebarState === "expanded" ? "opacity-100 w-auto" : "opacity-0 w-0"}`}
          >
            <span className="text-2xl font-bold whitespace-nowrap">User</span>
          </div>

          {/* Control buttons - only show when sidebar is not closed */}
          {sidebarState !== "closed" && (
            <div className="flex items-center gap-1 ml-auto">
              {/* Fold/unfold button */}
              <button
                onClick={() =>
                  setSidebarState(
                    sidebarState === "expanded" ? "small" : "expanded",
                  )
                }
                className="p-2 rounded-lg hover:bg-purple-700 transition-all duration-200 flex-shrink-0"
                aria-label={
                  sidebarState === "expanded"
                    ? "Collapse to icons"
                    : "Expand sidebar"
                }
              >
                {sidebarState === "expanded" ? "◀" : "▶"}
              </button>
              {/* Close button - hide on large screens when expanded? Optional: keep for consistency */}
              <button
                onClick={() => setSidebarState("closed")}
                className="p-2 rounded-lg bg-gradient-to-t from-red-500 to-red-700 text-white transition-all duration-200 flex-shrink-0"
              >
                <CloseFullscreen />
              </button>
            </div>
          )}
        </div>

        {/* User Info - visible only when expanded */}
        <div
          className={`p-4 border-b border-purple-700 transition-all duration-300 ${
            sidebarState === "expanded"
              ? "opacity-100"
              : "opacity-0 h-0 p-0 border-none overflow-hidden"
          }`}
        >
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">{user?.name?.charAt(0) || "A"}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold truncate">{user?.name || "User"}</p>
              <p className="text-xs text-purple-300 truncate">
                {user?.email || "user@example.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                // On small screens, close after navigation
                if (!isLargeScreen) {
                  setSidebarState("closed");
                }
              }}
              className={`group relative flex items-center px-4 py-3 hover:bg-purple-700 transition-all duration-200 ${
                location.pathname === item.path ? "bg-purple-700" : ""
              }`}
            >
              <div className="flex items-center w-full min-w-0">
                <span className="text-xl mr-3 flex-shrink-0">{item.icon}</span>
                {sidebarState === "expanded" && (
                  <span className="font-medium truncate">{item.name}</span>
                )}
              </div>

              {/* Tooltip for small state */}
              {sidebarState === "small" && (
                <span className="absolute left-20 bg-purple-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-purple-700 flex-shrink-0">
          <button
            onClick={logout}
            className="group relative flex items-center w-full px-4 py-3 bg-gradient-to-t from-red-500 to-red-700 text-white rounded-lg transition-all duration-200 hover:from-red-600 hover:to-red-800"
          >
            <span className="text-xl mr-3 flex-shrink-0">🚪</span>
            {sidebarState === "expanded" && (
              <span className="truncate">Logout</span>
            )}

            {/* Tooltip for small state */}
            {sidebarState === "small" && (
              <span className="absolute left-20 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-lg">
                Logout
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full overflow-auto flex flex-col w-full">
        {/* Top Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10 flex-shrink-0">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              {/* Button to open sidebar - visible on small screens or when sidebar is closed on large */}
              {(sidebarState === "closed" || !isLargeScreen) && (
                <button
                  onClick={() => setSidebarState("expanded")}
                  className="p-2 rounded-lg bg-gradient-to-t from-blue-500 to-indigo-700 text-white transition-all sm:block md:block lg:hidden xl:hidden duration-200"
                  aria-label="Open menu"
                >
                  <DashboardCustomize className="size-6" />
                </button>
              )}
              <h2 className="text-2xl font-semibold text-gray-800">
                {menuItems.find((item) => item.path === location.pathname)
                  ?.name || "Dashboard"}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-gray-600">Welcome,</span>
                <span className="font-semibold text-purple-600">
                  {user?.name || "User"}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold">
                  {user?.name?.charAt(0) || "U"}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 bg-gray-50 flex-1 overflow-auto">{children}</main>
      </div>

      {/* Overlay when sidebar is open on small screens */}
      {sidebarState !== "closed" && !isLargeScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-20"
          onClick={() => setSidebarState("closed")}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

// Main App Component
function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes with Navbar */}
        <Route
          path="/*"
          element={
            <div className="relative">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/team" element={<Team />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
              <Footer />

              {/* Back to Top Button */}
              {showBackToTop && (
                <button
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
                  aria-label="Back to top"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
              )}
            </div>
          }
        />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={
            // <ProtectedRoute>
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/user/management" element={<UserManagement />} />
                <Route
                  path="/courses/management"
                  element={<CoursesManagement />}
                />
                <Route path="/blogs/management" element={<BlogManagement />} />
                <Route
                  path="/booking/management"
                  element={<BookingManagement />}
                />
              </Routes>
            </DashboardLayout>
            // </ProtectedRoute>
          }
        />

        {/* **********user**************** */}

        {/* Dashboard Routes */}
        <Route
          path="/user/dashboard/*"
          element={
            // <ProtectedRoute>
            <UserDashboardLayout>
              <Routes>
                <Route path="/" element={<UserDashboard />} />
                <Route path="/me" element={<MeManagement />} />
              </Routes>
            </UserDashboardLayout>
            // </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
