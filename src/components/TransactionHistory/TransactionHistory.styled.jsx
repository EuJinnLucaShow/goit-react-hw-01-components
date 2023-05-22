import styled from '@emotion/styled'

export const TransactionHistoryTable = styled.table`
  border-collapse: collapse;  
  table-layout: auto;
  border: 2px solid silver;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.5);
  width: 400px;
  margin: 60px auto;
  padding: 5px;
  background-color: beige;  
`
export const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: #bfeef5;  
`
export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`
export const TableRow = styled.tr`
:nth-of-type(even) {
  background-color: #f9f9f9;
}
:hover {
  background-color: #f0f0f0;
}
`
