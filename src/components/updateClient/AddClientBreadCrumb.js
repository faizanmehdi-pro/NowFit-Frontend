import React from "react";
import { BCActiveText, BCDivider, BCText, CustomBreadCrumb } from "../../reuseableComponents/globalStyles";

const AddClientBreadCrumb = ({setUpdateClientData, isAdmin, setAddClientData, setClientLoading}) => {
  return (
      <CustomBreadCrumb>
        <BCText 
          onClick={() => {
            setAddClientData(false);
            setUpdateClientData(false);
            setClientLoading(true);
          }}
        >
          {isAdmin === "false" ? "Clients" : "Coaches"}
        </BCText>
        <BCDivider>/</BCDivider>
        <BCActiveText>{isAdmin === "false" ? "Add Client" : "Add Coach"}</BCActiveText>
      </CustomBreadCrumb>
  );
};

export default AddClientBreadCrumb;
