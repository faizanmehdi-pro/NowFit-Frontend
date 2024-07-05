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
import AddClient from "../updateClient/AddClient";

const SidebarComponent = ({ showSidebar, setShowSidebar, analytics, analyticsLoading, chartYearData, isAdmin, setAnalyticsLoading }) => {
  const location = useLocation();
  const clientLink = isAdmin === "true" ? "clients" : "coaches";
  const activeSidebarComponent = location.pathname.slice(1);

  // Function to determine if a link should be considered active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  const [updateClientData, setUpdateClientData] = useState(false);
  const [getClientData, setGetClientData] = useState();
  const [clientLoading, setClientLoading] = useState(true);
  const [AddClientData, setAddClientData] = useState(false);
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
        <>
        {AddClientData ? (
          <SidebarComponentContainer active={isActiveLink(`/${clientLink}`)}>
            <AddClient 
              showSidebar={showSidebar} 
              setShowSidebar={setShowSidebar} 
              setUpdateClientData= {setUpdateClientData} 
              getClientData={getClientData} 
              setClientLoading={setClientLoading}
              isAdmin={isAdmin}
              setAnalyticsLoading={setAnalyticsLoading}
              setAddClientData={setAddClientData}
            />
          </SidebarComponentContainer>
        ) : (
          <SidebarComponentContainer active={isActiveLink(`/${clientLink}`)}>
            <UpdateClient 
              showSidebar={showSidebar} 
              setShowSidebar={setShowSidebar} 
              setUpdateClientData= {setUpdateClientData} 
              getClientData={getClientData} 
              setClientLoading={setClientLoading}
              isAdmin={isAdmin}
              setAnalyticsLoading={setAnalyticsLoading}
            />
          </SidebarComponentContainer>
        )
      }
      </>
      ) : (
        <SidebarComponentContainer active={isActiveLink(`/${clientLink}`)}>
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
            isAdmin={isAdmin}
            setAddClientData={setAddClientData}
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
        {isAdmin ==="true" ? "Setting" : <ClientSetting showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>}
      </SidebarComponentContainer>
      <SidebarComponentContainer  active={isActiveLink("/help")}>
        Help
      </SidebarComponentContainer>
    </SidebarComponents>
  );
};

export default SidebarComponent;
