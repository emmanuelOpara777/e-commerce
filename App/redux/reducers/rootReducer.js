import {combineReducers} from 'redux';

import productCategoryReducer from './productCategoryReducer';
import productsReducer from './productsReducer';
import signupReducer from './signupReducer';
import signinReducer from './signinReducer';
import cartReducer from './cartReducer';
import getCartReducer from './getCartReducer';

export const appReducer = combineReducers({
  signupReducer,
  signinReducer,
  productCategoryReducer,
  productsReducer,
  cartReducer,
  getCartReducer,
});
