import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../reuseableComponents/globalStyles"
import activeRevenue from "../../assets/images/activeRevenue.svg"
import revenue from "../../assets/images/revenue.svg"
import activeClient from "../../assets/images/clientsActive.svg"
import client from "../../assets/images/clients.svg"

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
const Cards = () => {
    const [activeButton, setActiveButton] = useState("Total Revenue");

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
        <h3>$50K</h3>
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
        <h3>Active Clients</h3>
      </CardHeading>
        <h3>5</h3>
      </Card>
      <Card
        active={activeButton === "Monthly Revenue"}
        onClick={() => handleButtonClick("Monthly Revenue")}
      >
      <CardHeading>
        {activeButton === "Monthly Revenue" ?
        <Img src={activeRevenue} alt="activeRevenue" />
        : 
        <Img src={revenue} alt="revenue" />
}
        <h3>Monthly Revenue</h3>
      </CardHeading>
        <h3>$10K</h3>
      </Card>
    </CardsContainer>
  );
};

export default Cards;
