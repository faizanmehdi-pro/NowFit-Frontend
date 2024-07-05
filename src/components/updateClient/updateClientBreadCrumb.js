import React from "react";
import { BCActiveText, BCDivider, BCText, CustomBreadCrumb } from "../../reuseableComponents/globalStyles";

const UpdateClientBreadCrumb = ({setUpdateClientData, isAdmin}) => {
  return (
      <CustomBreadCrumb>
        <BCText onClick={() => setUpdateClientData(false)}>{isAdmin === "true" ? "Clients" : "Coaches"}</BCText>
        <BCDivider>/</BCDivider>
        <BCActiveText>{isAdmin === "true" ? "Update Client" : "Update Coach"}</BCActiveText>
      </CustomBreadCrumb>
  );
};

export default UpdateClientBreadCrumb;
