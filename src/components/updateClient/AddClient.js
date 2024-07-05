import React from "react";
import { ClientSettingContainer } from "./clientSettingStyles";
import { MenuTopbar, SidebarMenu } from "../adminPanel/sidebarStyles";
import AddClientBreadCrumb from "./AddClientBreadCrumb";
import AddClientForm from "./AddClientForm";

const AddClient = ({showSidebar, setShowSidebar, setUpdateClientData, getClientData, setClientLoading, isAdmin, setAnalyticsLoading, setAddClientData}) => {

  return (
    <ClientSettingContainer>
    <MenuTopbar>
      <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
      <AddClientBreadCrumb 
        setUpdateClientData={setUpdateClientData}
        isAdmin={isAdmin}
        setAddClientData={setAddClientData}
      />
    </MenuTopbar>
      <AddClientForm 
        getClientData={getClientData} 
        setUpdateClientData={setUpdateClientData} 
        setClientLoading={setClientLoading}
        setAnalyticsLoading={setAnalyticsLoading}
        setAddClientData={setAddClientData}
        isAdmin={isAdmin}
        />
    </ClientSettingContainer>
  );
};

export default AddClient;
