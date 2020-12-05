import { combineReducers } from 'redux';
import products from './products';
import productsCart from './cart';
import editItem from './edit';

const rootReducer = combineReducers({
  products,
  productsCart,
  editItem
});

export default rootReducer;
