import React from "react";
import { BCActiveText, BCDivider, BCText, CustomBreadCrumb } from "../../reuseableComponents/globalStyles";

const UpdateClientBreadCrumb = ({setUpdateClientData}) => {
  return (
      <CustomBreadCrumb>
        <BCText onClick={() => setUpdateClientData(false)}>Clients</BCText>
        <BCDivider>/</BCDivider>
        <BCActiveText>Update Client</BCActiveText>
      </CustomBreadCrumb>
  );
};

export default UpdateClientBreadCrumb;
