import React, { useEffect, useState } from "react";
import {
  MenuTopbar,
  SidebarComponentContainer,
  SidebarComponents,
  SidebarMenu,
} from "./sidebarStyles";
import Topbar from "../Topbar/topbar";
import Cards from "../Cards/Cards";
import Dashboard from "../dashboard/dashboard";
import Clients from "../clients/clients";
import MonthlyRevenue from "../monthlyRevenue/monthlyRevenue";
import ClientSetting from "../clientSetting/clientSetting";
import UpdateClient from "../updateClient/updateClient";
import { useLocation } from "react-router-dom";

const SidebarComponent = ({ showSidebar, setShowSidebar, analytics, analyticsLoading, chartYearData }) => {
  const location = useLocation();
  const activeSidebarComponent = location.pathname.slice(1);

  // Function to determine if a link should be considered active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  const [updateClientData, setUpdateClientData] = useState(false);
  const [getClientData, setGetClientData] = useState();
  const [clientLoading, setClientLoading] = useState(true);
  return (
    <SidebarComponents>
      <SidebarComponentContainer active={isActiveLink("/dashboard")}>
        <MenuTopbar>
          <SidebarMenu 
            showSidebar={showSidebar} 
            onClick={() => setShowSidebar(true)}
          />
          <Topbar activeSidebarComponent={activeSidebarComponent}/>
        </MenuTopbar>
        <Dashboard 
          analytics={analytics}
          analyticsLoading={analyticsLoading}
          chartYearData={chartYearData}
        />
      </SidebarComponentContainer>
      {updateClientData ? (
      <SidebarComponentContainer active={isActiveLink("/clients")}>
        <UpdateClient 
          showSidebar={showSidebar} 
          setShowSidebar={setShowSidebar} 
          setUpdateClientData= {setUpdateClientData} 
          getClientData={getClientData} 
          setClientLoading={setClientLoading}
        />
      </SidebarComponentContainer>
      ) : (
        <SidebarComponentContainer active={isActiveLink("/clients")}>
          <MenuTopbar>
            <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
            <Topbar activeSidebarComponent={activeSidebarComponent}/>
          </MenuTopbar>
          <Clients 
            setUpdateClientData={setUpdateClientData} 
            setGetClientData={setGetClientData} 
            clientLoading={clientLoading} 
            setClientLoading={setClientLoading}
            analytics={analytics}
            analyticsLoading={analyticsLoading}
          />
        </SidebarComponentContainer>
        )}
      <SidebarComponentContainer active={isActiveLink("/transactions")}>
        <MenuTopbar>
          <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
          <Topbar activeSidebarComponent={activeSidebarComponent}/>
        </MenuTopbar>
        <MonthlyRevenue 
          analytics={analytics}
          analyticsLoading={analyticsLoading}
          clientLoading={clientLoading}
        />
      </SidebarComponentContainer>
      <SidebarComponentContainer  active={isActiveLink("/setting")}>
        <ClientSetting showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      </SidebarComponentContainer>
      <SidebarComponentContainer  active={isActiveLink("/help")}>
        Help
      </SidebarComponentContainer>
    </SidebarComponents>
  );
};

export default SidebarComponent;
