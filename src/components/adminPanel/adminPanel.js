import React, { useState } from "react";
import {
  AdminPanelContent,
  SideBarOverly
} from "./sidebarStyles";
import SideBar from "./sideBar";
import SidebarComponent from "./sidebarComponent";

const AdminPanel = () => {
  const [activeSidebarComponent, setActiveSidebarComponent] = useState("Dashboard");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <AdminPanelContent>
    <SideBarOverly showSidebar={showSidebar} onClick={() => setShowSidebar(false)}/>
      <SideBar 
        setActiveSidebarComponent={setActiveSidebarComponent}
        showSidebar={showSidebar}
      />
      <SidebarComponent 
        activeSidebarComponent={activeSidebarComponent} 
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </AdminPanelContent>
  );
};

export default AdminPanel;
