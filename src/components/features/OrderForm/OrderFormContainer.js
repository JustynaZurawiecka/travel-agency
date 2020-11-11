import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {
  getOrderOptions, 
  setOrderOption,
} from '../../../redux/orderRedux';
// import OrderOption from '../OrderOption/OrderOption';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: orderOption => dispatch(setOrderOption(orderOption)),
});

export default connect(mapStateToProps,mapDispatchToProps)(OrderForm);