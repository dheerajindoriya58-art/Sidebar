import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <header className="top-navbar">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <FaSearch />
      </div>
      <div className="nav-icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
}
