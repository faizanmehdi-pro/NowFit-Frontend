import styled from "styled-components";

export const MonthlyRevenueContainer = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`;
export const MonthlyRevenueChartContainer = styled.div`
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