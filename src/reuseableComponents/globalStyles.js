import styled from "styled-components";

export const Img = styled.img`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
  height: auto;
`;

export const CustomBreadCrumb = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
background: #ffffff;
padding: 10px 20px;
border-radius: 100px;
width: 300px;
@media screen and (max-width: 760px) {width: 220px; padding: 10px; gap: 5px;}
`;

export const BCText = styled.button`
font-size: 20px;
font-weight: 700;
color: #000;
background: none;
border: none;
outline: none;
cursor: pointer;

@media screen and (max-width: 760px) {font-size: 16px;}
`;

export const BCDivider = styled.div`
font-size: 20px;
font-weight: 700;
color: #A7A7A7;
@media screen and (max-width: 760px) {font-size: 16px;}
`;

export const BCActiveText = styled.div`
font-size: 20px;
font-weight: 700;
color: #F78852;
text-decoration: underline;
@media screen and (max-width: 760px) {font-size: 16px;}
`;