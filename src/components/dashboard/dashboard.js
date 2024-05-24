import React from 'react'
import Cards from '../Cards/Cards'
import DashboardChart from './dashboardChart'
import { DashboardContainer } from './dashboardStyles'

const Dashboard = () => {
  return (
    <DashboardContainer>
        <Cards />
        <DashboardChart />
    </DashboardContainer>
  )
}

export default Dashboard