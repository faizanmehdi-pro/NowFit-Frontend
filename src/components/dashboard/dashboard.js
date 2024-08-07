import React from 'react'
import Cards from '../Cards/Cards'
import DashboardChart from './dashboardChart'
import { DashboardContainer } from './dashboardStyles'
import Loader from '../../reuseableComponents/loader/loader'

const Dashboard = ({analytics, analyticsLoading, chartYearData, isAdmin}) => {
  return (
    <DashboardContainer>
        <Cards 
          analytics={analytics}
          analyticsLoading={analyticsLoading}
          isAdmin={isAdmin}
        />
        {analyticsLoading ? 
        (
          <Loader colorProp="#F78852"/>
        ) : (
        <DashboardChart 
          analytics={analytics}
          analyticsLoading={analyticsLoading}
          chartYearData={chartYearData}
        />
        )}
    </DashboardContainer>
  )
}

export default Dashboard