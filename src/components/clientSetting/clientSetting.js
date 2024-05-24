import React from "react";
import { ClientSettingContainer } from "./clientSettingStyles";
import ClientBreadCrumb from "./clientBreadCrumb";
import ClientStripeForm from "./clientStripeForm";
import { MenuTopbar, SidebarMenu } from "../adminPanel/sidebarStyles";

const ClientSetting = ({showSidebar, setShowSidebar}) => {
  return (
    <ClientSettingContainer>
    <MenuTopbar>
      <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
      <ClientBreadCrumb />
    </MenuTopbar>
      <ClientStripeForm />
    </ClientSettingContainer>
  );
};

export default ClientSetting;
