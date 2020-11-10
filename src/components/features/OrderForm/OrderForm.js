import React from 'react';
// import styles from './OrderForm.scss';
import {Col, Row, Grid}  from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = ({tripCost, options}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Trip options' />
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
    </Row>
  </Grid>


);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.node,
};

export default OrderForm;