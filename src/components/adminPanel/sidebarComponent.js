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

const SidebarComponent = ({ activeSidebarComponent, showSidebar, setShowSidebar }) => {
  return (
    <SidebarComponents>
      <SidebarComponentContainer active={activeSidebarComponent === "Dashboard"}>
        <MenuTopbar>
          <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)}/>
          <Topbar activeSidebarComponent={activeSidebarComponent}/>
        </MenuTopbar>
        <Dashboard />
      </SidebarComponentContainer>
      <SidebarComponentContainer active={activeSidebarComponent === "Clients"}>
        <MenuTopbar>
          <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
          <Topbar activeSidebarComponent={activeSidebarComponent}/>
        </MenuTopbar>
        <Clients />
      </SidebarComponentContainer>
      <SidebarComponentContainer active={activeSidebarComponent === "Transactions"}>
        <MenuTopbar>
          <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
          <Topbar activeSidebarComponent={activeSidebarComponent}/>
        </MenuTopbar>
        <MonthlyRevenue />
      </SidebarComponentContainer>
      <SidebarComponentContainer active={activeSidebarComponent === "Setting"}>
        {/* <Topbar activeSidebarComponent={activeSidebarComponent}/>
        Setting */}
        <ClientSetting showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      </SidebarComponentContainer>
      <SidebarComponentContainer active={activeSidebarComponent === "Help"}>
        Help
      </SidebarComponentContainer>
    </SidebarComponents>
  );
};

export default SidebarComponent;
