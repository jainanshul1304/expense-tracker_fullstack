import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

const Dashboard = () => {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, [getIncomes, getExpenses]);

  const incomeAmounts = incomes.map((item) => item.amount);
  const expenseAmounts = expenses.map((item) => item.amount);

  const minIncome = incomeAmounts.length ? Math.min(...incomeAmounts) : 0;
  const maxIncome = incomeAmounts.length ? Math.max(...incomeAmounts) : 0;
  const minExpense = expenseAmounts.length ? Math.min(...expenseAmounts) : 0;
  const maxExpense = expenseAmounts.length ? Math.max(...expenseAmounts) : 0;

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <div className="salary-range">
              <h2>Income Range</h2>
              <p>Min: {dollar}{minIncome}</p>
              <p>Max: {dollar}{maxIncome}</p>
            </div>
            <div className="salary-range">
              <h2>Expense Range</h2>
              <p>Min: {dollar}{minExpense}</p>
              <p>Max: {dollar}{maxExpense}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div`
  .stats-con {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .chart-con {
      flex: 3;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .amount-con {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;

        .income,
        .expense,
        .balance {
          flex: 1;
          min-width: 200px;
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 1.2rem;

          h2 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          p {
            font-size: 2.2rem;
            font-weight: 700;
          }
        }

        .balance {
          background: #e7ffe7;

          p {
            color: var(--color-green);
          }
        }
      }
    }

    .history-con {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .salary-range {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1.2rem;

        h2 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .stats-con {
      flex-direction: column;

      .amount-con {
        flex-direction: column;
      }
    }
  }
`;

export default Dashboard;