import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

import * as actions from '../action_types';
import {baseURL, showMessage} from '../../global';

export const getProductStart = () => ({
  type: actions.GET_PRODUCT_START,
  loading: true,
});

export const getProductSuccess = payload => {
  return {
    type: actions.GET_PRODUCT_SUCCESS,
    data: payload,
    message: 'Products fetched!',
    loading: false,
  };
};

export const getProductFailed = payload => {
  return {
    type: actions.GET_PRODUCT_FAIL,
    message: payload.message,
    loading: false,
  };
};

export const getProducts = categoryId => {
  //config data
  let config = {
    url: `${baseURL}/products/category/${categoryId}`,
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
        dispatch(getProductStart());

        axios(config)
          .then(({data}) => {
            if (data) {
              dispatch(getProductSuccess(data));
            }
          })
          .catch(err => {
            console.log(err.response);
            showMessage(
              'danger',
              'Error',
              'Something went wrong. Please try again later!',
            );
            dispatch(getProductFailed('Error occured!'));
          });
      }
    });
  };
};
