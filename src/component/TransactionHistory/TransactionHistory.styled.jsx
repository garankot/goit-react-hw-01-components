import styled from 'styled-components';

export const Table = styled.table`
  width: 720px;
  background-color: #edecec;
  margin-top: 50px;
  color: white;
  table-layout: fixed;
  border-radius: 5px;
`;
export const THead = styled.thead`
  background-color: #58babf;
`;
export const TRow = styled.tr`
  height: 40px;
`;
export const TBody = styled.tbody`
  margin: 5px;
  border-collapse: collapse;
`;
export const TRowBody = styled.tr`
  text-align: center;
  :nth-child(odd) {
    background-color: #e1f4f7;
  }
`;
export const TD = styled.td`
  padding: 10px;
  text-transform: uppercase;
  color: gray;
`;
