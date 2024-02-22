import { MDBContainer } from "mdb-react-ui-kit";
import MySidebar from "../../Components/sidebar/Mysidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { useState } from "react";
import ExcelEditor from "../../Components/Dashboard/DashboardUI";

const DashboardUI = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleLogout = () => {
    // Add logic for handling logout
  };

  return (
    <>
      <MySidebar open={sidebarOpen} onClose={toggleSidebar} />
      <div className="my-5">
        <Topbar
          user="User"
          onToggleSidebar={toggleSidebar}
          onLogout={handleLogout}
        />
      </div>
      <div style={{marginTop:'80px'}}><ExcelEditor /></div>
    </>
  );
};
export default DashboardUI;
