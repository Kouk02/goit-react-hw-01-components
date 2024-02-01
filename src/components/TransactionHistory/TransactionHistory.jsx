import {
  TransactionHistoryTable,
  TableHeaderCell,
  TableDataCell,
  EvenRowDataCell,
} from './TransactionHistory.styled'

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable className="transaction-history">
      <thead>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction, index) => (
          <tr key={transaction.id}>
            {index % 2 === 0 ? (
              <EvenRowDataCell>{transaction.type}</EvenRowDataCell>
            ) : (
              <TableDataCell>{transaction.type}</TableDataCell>
            )}
            <TableDataCell>{transaction.amount}</TableDataCell>
            <TableDataCell>{transaction.currency}</TableDataCell>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

export default TransactionHistory;