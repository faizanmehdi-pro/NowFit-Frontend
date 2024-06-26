import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const AdminPanelContent = styled.div`
background: #F5F5F5;
display: flex;
width: 100%;
`;
export const MenuTopbar = styled.div`
display: flex;
align-items: center;
gap: 20px;
width: 100%;
`;
export const SidebarMenu = styled(IoMdMenu)`
display: none;
color: #F78852;
font-size: 40px;
cursor: pointer;
@media screen and (max-width: 990px) {display: block;}
`;
export const SideBarOverly = styled.div`
display: none;
@media screen and (max-width: 990px) {
display: ${({ showSidebar }) => (showSidebar ? 'flex' : 'none')};
background: rgba(255, 255, 255, 0.5);
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: 1;
}
`;
export const SideBarContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #FFFCFC;
padding: 20px;
width: 250px;
min-width: 250px;
@media screen and (max-width: 990px) {
display: ${({ showSidebar }) => (showSidebar ? 'flex' : 'none')};
position: fixed;
top: 0;
left: 0;
bottom: 0;
z-index: 2;
}
`;
export const SideBarTop = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;
export const SideBarLogo = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;
export const SideBarLinks = styled.div`
display: flex;
flex-direction: column;
`;
export const SidebarLink = styled(NavLink)`
height: 50px;
outline: none;
cursor: pointer;
background: ${({ active }) => (active ? '#F78852' : 'none')};
color: ${({ active }) => (active ? '#fff' : '#000')};
border: none;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 0 20px;
border-radius: 8px;
gap: 10px;
text-decoration: none;

img{
    width: 25px;
    height: 25px;
}
`;
export const SideBarDivider = styled.div`
height: 1px;
background: #000;
margin: 20px 0;
`;
export const SideBarBottom = styled.button`
border: none;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 0 20px;
cursor: pointer;
background: none;
gap: 10px;

img{
    width: 20px;
    height: 20px;
}
`;

export const SidebarComponents = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
padding: 20px;
`;
export const SidebarComponentContainer = styled.div`
display: ${({ active }) => (active ? 'flex' : 'none')};
flex-direction: column;
gap: 20px;
`;