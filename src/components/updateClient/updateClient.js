import React from "react";
import { ClientSettingContainer } from "./clientSettingStyles";
import UpdateClientBreadCrumb from "./updateClientBreadCrumb";
import UpdateClientForm from "./updateClientForm";
import { MenuTopbar, SidebarMenu } from "../adminPanel/sidebarStyles";

const UpdateClient = ({showSidebar, setShowSidebar, setUpdateClientData, getClientData, setClientLoading}) => {

  return (
    <ClientSettingContainer>
    <MenuTopbar>
      <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
      <UpdateClientBreadCrumb setUpdateClientData={setUpdateClientData}/>
    </MenuTopbar>
      <UpdateClientForm getClientData={getClientData} setUpdateClientData={setUpdateClientData} setClientLoading={setClientLoading}/>
    </ClientSettingContainer>
  );
};

export default UpdateClient;
