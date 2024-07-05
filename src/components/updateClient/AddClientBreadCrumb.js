import React from "react";
import { BCActiveText, BCDivider, BCText, CustomBreadCrumb } from "../../reuseableComponents/globalStyles";

const AddClientBreadCrumb = ({setUpdateClientData, isAdmin, setAddClientData}) => {
  return (
      <CustomBreadCrumb>
        <BCText 
          onClick={() => {
            setAddClientData(false);
            setUpdateClientData(false);
          }}
        >
          {isAdmin === "true" ? "Clients" : "Coaches"}
        </BCText>
        <BCDivider>/</BCDivider>
        <BCActiveText>{isAdmin === "true" ? "Add Client" : "Add Coach"}</BCActiveText>
      </CustomBreadCrumb>
  );
};

export default AddClientBreadCrumb;
