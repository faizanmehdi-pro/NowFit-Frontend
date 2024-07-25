import React, {useState, useEffect} from "react";
import { ClientSettingContainer } from "./clientSettingStyles";
import { MenuTopbar, SidebarMenu } from "../adminPanel/sidebarStyles";
import AddClientBreadCrumb from "./AddClientBreadCrumb";
import { getLocation } from "../../api/getLocation";
import AddCoachForm from "./AddCoachForm";
import AddClientForm from "./AddClientForm";

const AddClient = ({showSidebar, setShowSidebar, setUpdateClientData, getClientData, setClientLoading, isAdmin, setAnalyticsLoading, setAddClientData}) => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const resp = await getLocation();
        setLocations(resp?.locations);
      } catch (err) {
        console.log(err);
      }
    };

    fetchClients();
  }, []); 

  return (
    <ClientSettingContainer>
    <MenuTopbar>
      <SidebarMenu showSidebar={showSidebar} onClick={() => setShowSidebar(true)} />
      <AddClientBreadCrumb 
        setUpdateClientData={setUpdateClientData}
        isAdmin={isAdmin}
        setAddClientData={setAddClientData}
        setClientLoading={setClientLoading}
      />
    </MenuTopbar>
      <>
      {isAdmin === "false" ? (
        <AddClientForm
          getClientData={getClientData} 
          setUpdateClientData={setUpdateClientData} 
          setClientLoading={setClientLoading}
          setAnalyticsLoading={setAnalyticsLoading}
          setAddClientData={setAddClientData}
          isAdmin={isAdmin}
          locations={locations}
          />
        ):(
        <AddCoachForm 
          getClientData={getClientData} 
          setUpdateClientData={setUpdateClientData} 
          setClientLoading={setClientLoading}
          setAnalyticsLoading={setAnalyticsLoading}
          setAddClientData={setAddClientData}
          isAdmin={isAdmin}
          locations={locations}
          />
        )}
      </>
    </ClientSettingContainer>
  );
};

export default AddClient;
