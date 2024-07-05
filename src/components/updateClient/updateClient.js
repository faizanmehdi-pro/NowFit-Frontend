import React from "react";
import { ClientSettingContainer } from "./clientSettingStyles";
import UpdateClientBreadCrumb from "./updateClientBreadCrumb";
import UpdateClientForm from "./updateClientForm";
import { MenuTopbar, SidebarMenu } from "../adminPanel/sidebarStyles";

const UpdateClient = ({showSidebar, setShowSidebar, setUpdateClientData, getClientData, setClientLoading, isAdmin, setAnalyticsLoading}) => {

  return (
    <ClientSettingContainer>
    <MenuTopbar>
      <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
      <UpdateClientBreadCrumb 
        setUpdateClientData={setUpdateClientData}
        isAdmin={isAdmin}
      />
    </MenuTopbar>
      <UpdateClientForm 
        getClientData={getClientData} 
        setUpdateClientData={setUpdateClientData} 
        setClientLoading={setClientLoading}
        setAnalyticsLoading={setAnalyticsLoading}
        />
    </ClientSettingContainer>
  );
};

export default UpdateClient;
