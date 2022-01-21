import PropTypes from 'prop-types';

import {Table, THead, TRow, TBody, TRowBody, TD } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <div>
      <Table>
        <THead>
          <TRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TRow>
        </THead>

        <TBody>
          {items.map(item => (
            <TRowBody>
              <TD>{item.type}</TD>
              <TD>{item.amount}</TD>
              <TD>{item.currency}</TD>
            </TRowBody>
          ))}
        </TBody>
      </Table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
