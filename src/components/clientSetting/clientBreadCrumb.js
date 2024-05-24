import React from "react";
import { BCActiveText, BCDivider, BCText, CustomBreadCrumb } from "../../reuseableComponents/globalStyles";

const ClientBreadCrumb = () => {
  return (
      <CustomBreadCrumb>
        <BCText>Settings</BCText>
        <BCDivider>/</BCDivider>
        <BCActiveText>Connect Stripe</BCActiveText>
      </CustomBreadCrumb>
  );
};

export default ClientBreadCrumb;
