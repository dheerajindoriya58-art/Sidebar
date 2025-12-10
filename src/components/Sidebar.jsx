import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const menuItems = [
  { path: "/", label: "Dashboard", icon: <FaHome /> },
  { path: "/profile", label: "Profile", icon: <FaUser /> },
  { path: "/settings", label: "Settings", icon: <FaCog /> },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? <FaBars /> : <RxCross2 />}
        </button>

        {isOpen && <h2>MyAdmin</h2>}
      </div>

      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
