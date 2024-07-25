import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../reuseableComponents/globalStyles"
import activeRevenue from "../../assets/images/activeRevenue.svg"
import revenue from "../../assets/images/revenue.svg"
import activeClient from "../../assets/images/clientsActive.svg"
import client from "../../assets/images/clients.svg"
import Loader from "../../reuseableComponents/loader/loader";

const CardsContainer = styled.div`
display: flex;
gap: 20px;
@media screen and (max-width: 760px) {flex-wrap: wrap;}
`;
const Card = styled.button`
height: 150px;
width: 33%;
outline: none;
cursor: pointer;
background: ${({ active }) => (active ? '#F78852' : '#fff')};
color: ${({ active }) => (active ? '#fff' : '#000')};
border: none;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: flex-start;
align-items: flex-start;
padding: 20px;
font-size: 16px;
font-weight: 700;
border-radius: 8px;
text-align: left;
h3{
  padding-left: 40px;
}
@media screen and (max-width: 1100px) {font-size: 14px;}
@media screen and (max-width: 760px) {width: 100%;}
`;
const CardHeading = styled.div`
display: flex;
align-items: center;
gap: 10px;
h3{
  padding: 0;
}
img{
  width: 25px;
  height: 25px;
}
`;
const Cards = ({analytics, analyticsLoading, isAdmin}) => {
    const [activeButton, setActiveButton] = useState("Total Revenue");
    let colorProp = "#F78852";

    const handleButtonClick = (value) => {
      setActiveButton(value);
    };
  return (
    <CardsContainer>
      <Card
        active={activeButton === "Total Revenue"}
        onClick={() => handleButtonClick("Total Revenue")}
      >
        <CardHeading>
          {activeButton === "Total Revenue" ?
          <Img src={activeRevenue} alt="activeRevenue" />
          : 
          <Img src={revenue} alt="revenue" />
  }
          <h3>Total Revenue</h3>
        </CardHeading>
        <h3>{analyticsLoading ? "" : "$"} {analyticsLoading? (<Loader colorProp={activeButton === "Total Revenue" ? "#fff" : "#F78852"} />) : analytics?.total_revenue}</h3>
      </Card>
      <Card
        active={activeButton === "Active Clients"}
        onClick={() => handleButtonClick("Active Clients")}
      >
      <CardHeading>
        {activeButton === "Active Clients" ?
        <Img src={activeClient} alt="activeClient" />
        : 
        <Img src={client} alt="client" />
}
        <h3>Active {isAdmin === "false" ? 'Clients' : 'Coaches'}</h3>
      </CardHeading>
        <h3>{analyticsLoading? (<Loader colorProp={activeButton === "Active Clients" ? "#fff" : "#F78852"} />) : analytics?.active_clients}</h3>
      </Card>
      <Card
        active={activeButton === "Expiring Clients"}
        onClick={() => handleButtonClick("Expiring Clients")}
      >
      <CardHeading>
        {activeButton === "Expiring Clients" ?
        <Img src={activeClient} alt="activeClient" />
        : 
        <Img src={client} alt="client" />
}
        <h3>Expiring {isAdmin === "false" ? 'Clients' : 'Coaches'}</h3>
      </CardHeading>
        <h3>{analyticsLoading? (<Loader colorProp={activeButton === "Expiring Clients" ? "#fff" : "#F78852"} />) : analytics?.expiring_clients}</h3>
      </Card>
    </CardsContainer>
  );
};

export default Cards;
