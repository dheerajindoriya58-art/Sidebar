import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import { useState } from "react";
// import "./Sidebar.css";

// ✅ Menu configuration (scalable & reusable)
const menuItems = [
  { path: "/", label: "Dashboard", icon: <FaHome /> },
  { path: "/profile", label: "Profile", icon: <FaUser /> },
  { path: "/settings", label: "Settings", icon: <FaCog /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      {/* ✅ Toggle Button */}
      <div className="sidebar-header">
        <button
          className="toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
        >
          <FaBars />
        </button>
        {isOpen && <h2 className="logo">MyAdmin</h2>}
      </div>

      {/* ✅ Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{item.icon}</span>
            {isOpen && <span className="text">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
