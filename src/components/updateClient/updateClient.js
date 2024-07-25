import React, {useState,useEffect} from "react";
import { ClientSettingContainer } from "./clientSettingStyles";
import UpdateClientBreadCrumb from "./updateClientBreadCrumb";
import UpdateClientForm from "./updateClientForm";
import { MenuTopbar, SidebarMenu } from "../adminPanel/sidebarStyles";
import UpdateCoachForm from "./UpdateCoachForm";
import { getLocation } from "../../api/getLocation";
import Loader from "../../reuseableComponents/loader/loader";

const UpdateClient = ({showSidebar, setShowSidebar, setUpdateClientData, getClientData, clientLoading, setClientLoading, isAdmin, setAnalyticsLoading}) => {
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
      <UpdateClientBreadCrumb 
        setUpdateClientData={setUpdateClientData}
        isAdmin={isAdmin}
        setClientLoading={setClientLoading}
      />
    </MenuTopbar>
        <>
          {isAdmin === "false" ? (
                <UpdateClientForm 
                  getClientData={getClientData} 
                  setUpdateClientData={setUpdateClientData} 
                  setClientLoading={setClientLoading}
                  setAnalyticsLoading={setAnalyticsLoading}
                />
            ) : (
              <>
              {clientLoading ? (
                <Loader colorProp="#F78852"/>
              ) : (
                <UpdateCoachForm 
                  getClientData={getClientData} 
                  setUpdateClientData={setUpdateClientData} 
                  setClientLoading={setClientLoading}
                  setAnalyticsLoading={setAnalyticsLoading}
                  locations={locations}
                />
              )
            }
            </>
            )
          }
        </>
    </ClientSettingContainer>
  );
};

export default UpdateClient;
