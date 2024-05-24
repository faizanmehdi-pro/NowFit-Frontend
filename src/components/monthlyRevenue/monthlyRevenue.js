import React from 'react'
import Cards from '../Cards/Cards'
import { MonthlyRevenueContainer } from './monthlyRevenueStyles'
import MonthlyRevenueTables from './monthlyRevenueTable'

const MonthlyRevenue = () => {
  return (
    <MonthlyRevenueContainer>
        <Cards />
        <MonthlyRevenueTables />
    </MonthlyRevenueContainer>
  )
}

export default MonthlyRevenue