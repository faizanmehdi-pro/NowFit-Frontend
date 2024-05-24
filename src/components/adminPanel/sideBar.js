import React, { useState } from "react";
import { Img } from "../../reuseableComponents/globalStyles"
import logo from "../../assets/images/logo.png"
import dashboard from "../../assets/images/dashboard.svg"
import dashboardActive from "../../assets/images/dashboardActive.svg"
import clients from "../../assets/images/clients.svg"
import clientsActive from "../../assets/images/clientsActive.svg"
import transaction from "../../assets/images/transaction.svg"
import transactionActive from "../../assets/images/transactionActive.svg"
import setting from "../../assets/images/setting.svg"
import settingActive from "../../assets/images/settingActive.svg"
import help from "../../assets/images/help.png"
import logout from "../../assets/images/logout.svg"
import { SidebarLink, SideBarContainer, SideBarLogo, SideBarLinks, SideBarBottom, SideBarTop, SideBarDivider } from "./sidebarStyles";


const SideBar = ({ setActiveSidebarComponent,  showSidebar }) => {
  const [activeButton, setActiveButton] = useState("Dashboard");

  const handleButtonClick = (value) => {
    setActiveButton(value);
    setActiveSidebarComponent(value);
  };

  return (
    <SideBarContainer showSidebar={showSidebar}>
      <SideBarTop>
      <SideBarLogo><Img src={logo} alt="logo" /></SideBarLogo>
        <SideBarLinks>
        <SidebarLink
            active={activeButton === "Dashboard"}
            onClick={() => handleButtonClick("Dashboard")}
          >
            <Img src={activeButton === "Dashboard" ? dashboardActive : dashboard} alt="icon" />
            <h3>Dashboard</h3>
          </SidebarLink>
          <SidebarLink
            active={activeButton === "Clients"}
            onClick={() => handleButtonClick("Clients")}
          >
          <Img src={activeButton === "Clients" ? clientsActive : clients} alt="icon" />
          <h3>Clients</h3>
          </SidebarLink>
          <SidebarLink
            active={activeButton === "Transactions"}
            onClick={() => handleButtonClick("Transactions")}
          >
          <Img src={activeButton === "Transactions" ? transactionActive : transaction} alt="icon" />
          <h3>Transactions</h3>
          </SidebarLink>
          <SideBarDivider />
          <SidebarLink
            active={activeButton === "Setting"}
            onClick={() => handleButtonClick("Setting")}
          >
          <Img src={activeButton === "Setting" ? settingActive : setting} alt="icon" />
          <h3>Setting</h3>
          </SidebarLink>
          <SidebarLink
            active={activeButton === "Help"}
            onClick={() => handleButtonClick("Help")}
          >
          <Img src={activeButton === "Help" ? help : help} alt="icon" />
          <h3>Help</h3>
          </SidebarLink>
        </SideBarLinks>
      </SideBarTop>
      <SideBarBottom><Img src={logout} alt="logout" /> <h3> Log Out </h3></SideBarBottom>
    </SideBarContainer>
  );
};

export default SideBar;
