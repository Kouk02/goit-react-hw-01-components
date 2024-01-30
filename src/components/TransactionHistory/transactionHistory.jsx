import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
  overflow: hidden; /* Додано для коректного відображення тіні при заокругленні */
`;

export const TableHeaderCell = styled.th`
  border: 1px solid #444;
  padding: 10px;
  text-align: center; /* Вирівнюємо текст по центру */
  font-size: 1em;
  background-color: #4a4a4a;
  color: #fff;
`;

export const TableDataCell = styled.td`
  border: 1px solid #444;
  padding: 10px;
  text-align: center; /* Вирівнюємо текст по центру */
  font-size: 1em;
  background-color: #3a3a3a;
  color: #fff;
`;

export const EvenRowDataCell = styled(TableDataCell)`
  background-color: #3a3a3a;
`;