import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
