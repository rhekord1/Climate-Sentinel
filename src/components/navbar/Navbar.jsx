import navbarlogo from "../../assets/logo.svg";
import { BellIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const notificationsRef = useRef(null);
  const userMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "New message",
      description: "You have a new message",
      time: "2 mins ago",
      read: false
    },
    {
      id: 2,
      title: "System update",
      description: "New update available",
      time: "1 hour ago",
      read: true
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.hamburger-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-between p-4">
        {/* Logo and Hamburger (mobile only) */}
        <div className="flex items-center">
          <div className="mt-0"> {/* Removed mt-1 to keep original logo position */}
            <a href="">
              <img src={navbarlogo} alt="Logo" className="h-auto" /> {/* Removed fixed height */}
            </a>
          </div>
          <button 
            className="hamburger-button ml-4 p-1 rounded-md hover:bg-gray-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Desktop Nav Links (show on tablet and up) */}
        <div className="hidden md:flex list-none gap-6">
          <li className="group">
            <a
              href="/"
              className="font-inter text-sm font-normal leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#4CAF4F] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
          </li>
          <li className="group">
            <a
              href="/about"
              className="font-inter text-sm font-normal leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#4CAF4F] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>
          </li>
          <li className="group">
            <a
              href="/dashboard"
              className="font-inter text-sm font-normal leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#4CAF4F] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Dashboard
            </a>
          </li>
          <li className="group">
            <a
              href="/analytics"
              className="font-inter text-sm font-normal leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#4CAF4F] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Analytics
            </a>
          </li>
          <li className="group">
            <a
              href="/camera-panel"
              className="font-inter text-sm font-normal leading-6 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#4CAF4F] after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
            >
              Camera Panel
            </a>
          </li>
        </div>

        {/* Icons (show on mobile and up) */}
        <div className="flex gap-3">
          {/* Notification Button and Dropdown */}
          <div className="relative" ref={notificationsRef}>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 relative"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowUserMenu(false);
              }}
            >
              <BellIcon className="h-5 w-5 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#4CAF4F]"></span>
              )}
            </button>
            
            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-100">
                <div className="py-1">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <p className="text-xs font-medium text-gray-700">Notifications ({unreadCount})</p>
                  </div>
                  {notifications.length > 0 ? (
                    <div className="max-h-60 overflow-y-auto">
                      {notifications.map(notification => (
                        <div 
                          key={notification.id}
                          className={`px-3 py-2 hover:bg-gray-50 cursor-pointer text-xs ${!notification.read ? 'bg-blue-50' : ''}`}
                        >
                          <p className="font-medium text-gray-900 truncate">{notification.title}</p>
                          <p className="text-gray-500 truncate">{notification.description}</p>
                          <p className="mt-0.5 text-gray-400 text-xxs">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="px-3 py-2 text-center text-xs text-gray-500">
                      No new notifications
                    </div>
                  )}
                  <div className="px-3 py-1 border-t border-gray-100 text-center">
                    <a href="#" className="text-xs font-medium text-[#4CAF4F] hover:text-[#3d8b40]">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* User Avatar Button and Dropdown */}
          <div className="relative" ref={userMenuRef}>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowNotifications(false);
              }}
            >
              <UserCircleIcon className="h-5 w-5 text-gray-600" />
            </button>
            
            {/* User Dropdown */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-100">
                <div className="py-1">
                  <a
                    href="/login"
                    className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <div className="border-t border-gray-100"></div>
                  <button
                    onClick={() => console.log("Logging out...")}
                    className="block w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 hover:text-red-500"
                  >
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (show on mobile only) */}
      <div 
        ref={mobileMenuRef}
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}
      >
        <div className="px-4 py-2 flex flex-col gap-1">
          <a
            href="/"
            className="font-inter text-sm py-2 px-3 rounded hover:bg-gray-50 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="font-inter text-sm py-2 px-3 rounded hover:bg-gray-50 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/dashboard"
            className="font-inter text-sm py-2 px-3 rounded hover:bg-gray-50 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </a>
          <a
            href="/analytics"
            className="font-inter text-sm py-2 px-3 rounded hover:bg-gray-50 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Analytics
          </a>
          <a
            href="/camera-panel"
            className="font-inter text-sm py-2 px-3 rounded hover:bg-gray-50 text-[#18191F] hover:text-[#4CAF4F] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Camera Panel
          </a>
        </div>
      </div>
    </div>
  );
}