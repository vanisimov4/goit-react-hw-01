import PropTypes from 'prop-types';
import css from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.cellType}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
    .isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
