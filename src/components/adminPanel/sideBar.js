import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import { Img } from "../../reuseableComponents/globalStyles";
import logo from "../../assets/images/logo.png";
import dashboard from "../../assets/images/dashboard.svg";
import dashboardActive from "../../assets/images/dashboardActive.svg";
import clients from "../../assets/images/clients.svg";
import clientsActive from "../../assets/images/clientsActive.svg";
import transaction from "../../assets/images/transaction.svg";
import transactionActive from "../../assets/images/transactionActive.svg";
import setting from "../../assets/images/setting.svg";
import settingActive from "../../assets/images/settingActive.svg";
import help from "../../assets/images/help.png";
import logout from "../../assets/images/logout.svg";
import {
  SidebarLink,
  SideBarContainer,
  SideBarLogo,
  SideBarLinks,
  SideBarBottom,
  SideBarTop,
  SideBarDivider,
} from "./sidebarStyles";

const SideBar = ({ showSidebar, isAdmin }) => {
  const clientLink = isAdmin === "false" ? "clients" : "coaches";
  const location = useLocation();

  // Function to determine if a link should be considered active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/');
  };
  return (
    <SideBarContainer showSidebar={showSidebar}>
      <SideBarTop>
        <SideBarLogo>
          <Img src={logo} alt="logo" />
        </SideBarLogo>
        <SideBarLinks>
          <SidebarLink to="/dashboard" active={isActiveLink("/dashboard")}>
            <Img
              src={isActiveLink("/dashboard") ? dashboardActive : dashboard}
              alt="icon"
            />
            <h3>Dashboard</h3>
          </SidebarLink>
          <SidebarLink to={`/${clientLink}`} active={isActiveLink(`/${clientLink}`)}>
            <Img
              src={isActiveLink(`/${clientLink}`) ? clientsActive : clients}
              alt="icon"
            />
            <h3>{clientLink}</h3>
          </SidebarLink>
          <SidebarLink to="/transactions" active={isActiveLink("/transactions")}>
            <Img
              src={
                isActiveLink("/transactions") ? transactionActive : transaction
              }
              alt="icon"
            />
            <h3>Transactions</h3>
          </SidebarLink>
          <SideBarDivider />
          <SidebarLink  to="/setting" active={isActiveLink("/setting")}>
            <Img
              src={isActiveLink("/setting") ? settingActive : setting}
              alt="icon"
            />
            <h3>Setting</h3>
          </SidebarLink>
          <SidebarLink  to="/help" active={isActiveLink("/help")}>
            <Img src={isActiveLink("/help") ? help : help} alt="icon" />
            <h3>Help</h3>
          </SidebarLink>
        </SideBarLinks>
      </SideBarTop>
      <SideBarBottom onClick={handleLogout}>
        <Img src={logout} alt="logout" /> <h3> Log Out </h3>
      </SideBarBottom>
    </SideBarContainer>
  );
};

export default SideBar;
