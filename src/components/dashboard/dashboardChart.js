import React, { useState, useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { getYear, getMonth, getWeek, eachDayOfInterval, format } from 'date-fns';
import Chart from 'chart.js/auto';
import { ChartTopLine, DChart, DashboardChartContainer } from './dashboardStyles';


const DashboardChart = ({analytics, chartYearData}) => {

  const [expensesData, setExpensesData] = useState([]);
  const [filter, setFilter] = useState('thisYear');
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  console.log("Year", chartYearData)

  useEffect(() => {
    const fetchExpensesData = async () => {
      let data = [];
      switch (filter) {
        case 'thisYear':
          data = generateExpensesDataForYear(chartYearData);
          break;
        case 'thisMonth':
          data = generateExpensesDataForMonth();
          break;
        case 'thisWeek':
          data = generateExpensesDataForWeek();
          break;
        default:
          break;
      }
      setExpensesData(data);
    };

    fetchExpensesData();
  }, [filter, analytics]);

  useEffect(() => {
    renderChart();
    // Cleanup function to destroy the previous chart instance
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [expensesData]); // Re-run this effect when expensesData changes

  const renderChart = () => {
    const chartCanvas = chartRef.current;
    const ctx = chartCanvas.getContext('2d');
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    const maxExpense = Math.max(...expensesData);
    const maxExpenseIndex = expensesData.indexOf(maxExpense);
  
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels:
          filter === 'thisWeek'
            ? ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            : filter === 'thisMonth'
            ? Array.from({ length: getWeeksInMonth(getYear(new Date()), getMonth(new Date()) + 1) }, (_, i) => `Week ${i + 1}`)
            : Array.from({ length: 12 }, (_, i) => format(new Date(0, i + 1, 0), 'MMM')),
        datasets: [
          {
            label: 'Expenses',
            backgroundColor: expensesData.map((expense, index) => index === maxExpenseIndex ? 'rgba(247, 136, 82, 0.5)' : 'rgba(75,192,192,0.2)'),
            // borderColor: expensesData.map((expense, index) => index === maxExpenseIndex ? 'rgba(247, 136, 82, 0.5)' : 'rgba(75,192,192,1)'),
            borderWidth: 1,
            borderRadius: 8,
            hoverBackgroundColor: expensesData.map((expense, index) => index === maxExpenseIndex ? 'rgba(247, 136, 82, 1)' : 'rgba(75,192,192,0.4)'),
            // hoverBorderColor: expensesData.map((expense, index) => index === maxExpenseIndex ? 'rgba(255, 99, 132, 1)' : 'rgba(75,192,192,1)'),
            data: expensesData,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            grid: {
              display: false,
              drawBorder: false, // Remove border from y-axis
            },
            ticks: {
            color: '#A7A7A7'
            }
          },
          y: {
            ticks: {
              stepSize: 10,
              color: '#A7A7A7'
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    chartInstanceRef.current = newChart; // Save chart instance
  };
  

  const generateExpensesDataForYear = () => {
    const currentYear = getYear(new Date());
    const data = chartYearData || [];
    return data;
  };
  
  const generateExpensesDataForMonth = () => {
    const currentYear = getYear(new Date());
    const currentMonth = getMonth(new Date()) + 1;
    const weeksInMonth = getWeeksInMonth(currentYear, currentMonth);
    const data = [20, 40, 10, 20, 30];
    return data;
  };
  
  const generateExpensesDataForWeek = () => {
    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(startDate.getDate() - startDate.getDay());
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    const daysInWeek = eachDayOfInterval({ start: startDate, end: endDate });
    const data = [20, 30, 20, 30, 20, 40, 50, 30, 40, 20, 40, 30];
    return data;
  };
  
  const getWeeksInMonth = (year, month) => {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });
    const weeksInMonth = new Set(daysInMonth.map((date) => getWeek(date)));
    return weeksInMonth.size;
  };
  

  return (
    <DashboardChartContainer>
      <ChartTopLine>
        <h3>Revenue Chart</h3>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="thisYear">This Year</option>
            <option value="thisMonth">This Month</option>
            <option value="thisWeek">This Week</option>
          </select>
      </ChartTopLine>
      <DChart>
      <canvas ref={chartRef} />
      </DChart>
    </DashboardChartContainer>
  );
};

export default DashboardChart;
