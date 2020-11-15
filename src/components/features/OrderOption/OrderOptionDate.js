import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = () => (
  <div className={styles.date}>
    <input type='date'>
    </input>
  </div>
);


export default OrderOptionDate;