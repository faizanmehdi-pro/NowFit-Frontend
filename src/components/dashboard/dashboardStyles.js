import styled from "styled-components";

export const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
`;
export const DashboardChartContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
background: #fff;
padding: 20px;
`;
export const ChartTopLine = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 30px;

select{
    width: 120px;
    font-weight: 700;
    padding: 5px;
    border-radius: 8px;
    outline: none;
}
@media screen and (max-width: 760px) {
padding: 0;
select{
    width: 100px;
    font-weight: 600;
    font-size: 12px;
}
h3{
    font-size: 16px;
}
}
`;
export const DChart = styled.div`
width: 99%;
height: 100%;
`;