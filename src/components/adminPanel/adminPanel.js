import React, { useState, useEffect } from "react";
import {
  AdminPanelContent,
  SideBarOverly
} from "./sidebarStyles";
import SideBar from "./sideBar";
import SidebarComponent from "./sidebarComponent";
import { getAllAnalysis } from "../../api/getAllAnalysis";

const AdminPanel = () => {
  
  const isAdmin = localStorage.getItem("isAdmin");

  const [activeSidebarComponent, setActiveSidebarComponent] = useState("Dashboard");
  const [showSidebar, setShowSidebar] = useState(false);
  const [analytics, setAnalytics] = useState();
  const [analyticsLoading, setAnalyticsLoading] = useState(true);
  const [chartYearData, setchartYearData] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const resp = await getAllAnalysis();
        setAnalytics(resp);
        setAnalyticsLoading(false)
        const values = Object.values(resp?.chart_data);
        setchartYearData(values);
      } catch (err) {
        console.log(err);
      }
    };

    fetchClients();
  }, [analyticsLoading]); 

  return (
    <AdminPanelContent>
    <SideBarOverly showSidebar={showSidebar} onClick={() => setShowSidebar(false)}/>
      <SideBar 
        setActiveSidebarComponent={setActiveSidebarComponent}
        showSidebar={showSidebar}
        isAdmin={isAdmin}
      />
      <SidebarComponent 
        activeSidebarComponent={activeSidebarComponent} 
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        analytics={analytics}
        analyticsLoading={analyticsLoading}
        chartYearData={chartYearData}
        isAdmin={isAdmin}
        setAnalyticsLoading={setAnalyticsLoading}
      />
    </AdminPanelContent>
  );
};

export default AdminPanel;
