import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

import * as actions from '../action_types';
import {baseURL, showMessage} from '../../global';

export const getCartStart = () => ({
  type: actions.GET_CART_FAIL,
  loading: true,
});

export const getCartSuccess = payload => {
  return {
    type: actions.GET_CART_SUCCESS,
    data: payload,
    message: 'Get cart successs!',
    loading: false,
  };
};

export const getCartFailed = payload => {
  return {
    type: actions.GET_CART_SUCCESS,
    message: payload,
    loading: false,
  };
};

const getCart = () => {
  //config data
  let config = {
    url: `${baseURL}/carts/5`,
    method: 'GET',
  };

  return dispatch => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        showMessage(
          'danger',
          'Network error',
          'Check your network connection and try again!',
        );
      } else {
        dispatch(getCartStart());

        axios(config)
          .then(({data}) => {
            if (data) {
              dispatch(getCartSuccess(data));
            }
          })
          .catch(err => {
            dispatch(getCartFailed('Error occured!'));
            showMessage(
              'danger',
              'Error',
              'Something went wrong. Please try again later!',
            );
          });
      }
    });
  };
};

export default getCart;
