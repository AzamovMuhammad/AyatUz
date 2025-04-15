import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../style/userLayout.css";

// ⬇️ react-icons kutubxonasidan hamburger menu
import { FaBars } from "react-icons/fa";

function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="layout-container">
      {/* Mobile menu toggle button */}
      <button className="menu-toggle" onClick={toggleSidebar}>
        <FaBars size={24} />
      </button>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
