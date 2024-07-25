import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards'
import { MonthlyRevenueContainer } from './monthlyRevenueStyles'
import MonthlyRevenueTables from './monthlyRevenueTable'
import { getAllTransactions } from '../../api/auth/getAllTransactions'

const MonthlyRevenue = ({analytics, analyticsLoading, clientLoading, isAdmin}) => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [transactionLoading, setTransactionLoading] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const resp = await getAllTransactions();
        setAllTransactions(resp?.data);
        setTransactionLoading(false)
      } catch (err) {
        console.log(err);
      }
    };

    fetchTransactions();
  }, [transactionLoading]); 
  return (
    <MonthlyRevenueContainer>
        <Cards 
          analytics={analytics}
          analyticsLoading={analyticsLoading}
          isAdmin={isAdmin}
        />
        <MonthlyRevenueTables 
          allTransactions={allTransactions}
          clientLoading={clientLoading} 
        />
    </MonthlyRevenueContainer>
  )
}

export default MonthlyRevenue