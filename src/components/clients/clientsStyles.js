import styled from "styled-components";

export const ShowAddClientForm = styled.div`
display: ${({ showAddClientForm }) => (showAddClientForm ? 'flex' : 'none')};
flex-direction: column;
gap: 20px;
`;
export const ClientsContainer = styled.div`
display: ${({ showAddClientForm }) => (showAddClientForm ? 'none' : 'flex')};
flex-direction: column;
gap: 30px;
`;
export const ClientsChartContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
background: #fff;
padding: 20px;
`;
export const Divider = styled.div`
width: 100%;
height: 20px;
`;
export const Status = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
img{
    width: 25px;
    height: 25px;
    cursor: pointer;
}
`;
export const StatusCircle = styled.div`
width: 13px;
height: 13px;
background: ${({ hoverIcons }) => (hoverIcons ? '#fff' : '#57D054')};
border-radius: 100px;
`;
export const AddClient = styled.button`
height: 50px;
width: 200px;
outline: none;
cursor: pointer;
background: #F78852;
color: #fff;
border: none;
display: flex;
justify-content: center;
align-items: center;
align-self: flex-end;
font-size: 16px;
font-weight: 700;
border-radius: 8px;
h3{
  padding-left: 40px;
}
`;