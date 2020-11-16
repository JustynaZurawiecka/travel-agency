import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = (props) => {
  // debugger;
  const {tripCost, options} =  props;
  return (
    <h2 className={styles.component}>
      Total:<strong>$ {calculateTotal(formatPrice(tripCost), options).toFixed(2)} </strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.any,
};

export default OrderSummary;