import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UsersTable from "./pages/UsersTable";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="main-content">
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
