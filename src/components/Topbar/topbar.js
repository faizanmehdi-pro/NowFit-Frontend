import React from "react";
import styled from "styled-components";
import { Img } from "../../reuseableComponents/globalStyles"
import user from "../../assets/images/user.png"

const TopbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
@media screen and (max-width: 760px) {
h2{font-size: 18px;}
}
`;
const User = styled.div`
display: flex;
align-items: center;
gap: 10px;
img{
  width: 40px;
  height: 40px;
}
@media screen and (max-width: 760px) {
gap: 5px;
h4{font-size: 14px;}
img{
  width: 30px;
  height: 30px;
}
}
`;

const Topbar = ({activeSidebarComponent}) => {
  return (
    <TopbarContainer>
      <h2>{activeSidebarComponent}</h2>
      <User>
        <Img src={user} alt="user" />
        <h4>John Smith</h4>
      </User>
    </TopbarContainer>
  );
};

export default Topbar;
