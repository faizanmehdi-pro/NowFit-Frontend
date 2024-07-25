import React from "react";
import { BCActiveText, BCDivider, BCText, CustomBreadCrumb } from "../../reuseableComponents/globalStyles";

const UpdateClientBreadCrumb = ({setUpdateClientData, isAdmin, setClientLoading}) => {
  return (
      <CustomBreadCrumb>
        <BCText 
          onClick={() => {
            setUpdateClientData(false);
            setClientLoading(true);
          }}
          >{isAdmin === "false" ? "Clients" : "Coaches"}</BCText>
        <BCDivider>/</BCDivider>
        <BCActiveText>{isAdmin === "false" ? "Update Client" : "Update Coach"}</BCActiveText>
      </CustomBreadCrumb>
  );
};

export default UpdateClientBreadCrumb;
