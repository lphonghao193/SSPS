import React, { useState } from 'react';
import { FaUser, FaBell } from 'react-icons/fa'; // Importing icons from react-icons
import './navBar.css'; // Importing the CSS file for styling

function Notification(notifications) {
  return notifications > 0 ? <span className="notification-badge">{notifications}</span> : <></>
}

function LoginButton({ isLoggedIn, notifications }) {
  if (isLoggedIn == "true") {
    return (
      <>
        <a href="/Login">
          <FaUser className="login-icon" />
        </a>
        <div className="bell-container">
          <FaBell className="bell-icon" />
          {Notification(notifications)}
        </div>
      </>
    );
  } else {
  }
}

function NavBar() {
  // State for notifications
  const [notifications, setNotifications] = useState(5); // Example: 5 notifications
  const isLoggedIn = window.sessionStorage.getItem("isLoggedIn")
  if (isLoggedIn) {
    if (window.sessionStorage.getItem("role") === "HCMUT") {
      return (
        <nav className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/"><img src="/logobk.png" alt="Logo" className="navbar-logo" /></a>
        </div>

        {/* Navigation links */}
        <ul className="nav-links">
          <li className="nav-item"><a href="/">Trang chủ</a></li>
          <li className="nav-item"><a href="/Student/Print/1">In tài liệu</a></li>
          <li className="nav-item"><a href="/Student/BuyPages/1">Mua trang in</a></li>
          <li className="nav-item"><a href="/Student/History">Lịch sử</a></li>
        </ul>

        <a href="/Student/Info">
            <FaUser className="login-icon" />
        </a>
        <div className="bell-container">
            <FaBell className="bell-icon" />
            {Notification(notifications)}
        </div>
        </nav>
      );
    } else if (window.sessionStorage.getItem("role") === "SPSO" || window.sessionStorage.getItem("role") === "Admin") {
      return (
        <nav className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/"><img src="/logobk.png" alt="Logo" className="navbar-logo" /></a>
        </div>
  
        {/* Navigation links */}
        <ul className="nav-links">
          <li className="nav-item"><a href="/">Trang chủ</a></li>
          <li className="nav-item"><a href="/SPSO/Printer">Máy in</a></li>
          <li className="nav-item"><a href="/SPSO/System">Hệ thống</a></li>
          <li className="nav-item"><a href="/SPSO/History">Lịch sử</a></li>
        </ul>
  
        <a href="/SPSO/Info">
            <FaUser className="login-icon" />
        </a>
        <div className="bell-container">
            <FaBell className="bell-icon" />
            {Notification(notifications)}
        </div>
        </nav>
      );
    }
  } 
  return (
    <nav className="navbar">
    {/* Logo */}
    <div className="nav-logo">
      <a href="/"><img src="/logobk.png" alt="Logo" className="navbar-logo" /></a>
    </div>

    {/* Navigation links */}
    <ul className="nav-links">
      <li className="nav-item"><a href="/">Trang chủ</a></li>
      <li className="nav-item"><a href="/">In tài liệu</a></li>
      <li className="nav-item"><a href="/">Mua trang in</a></li>
      <li className="nav-item"><a href="/">Lịch sử</a></li>
    </ul> 
    <a href="/Login">Đăng nhập</a>
    </nav>
  );
}

export default NavBar;