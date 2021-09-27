import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

import * as actions from '../action_types';
import {baseURL, showMessage} from '../../global';

export const getProductCategoriesStart = () => ({
  type: actions.GET_PRODUCT_CATEGORIES_START,
  loading: true,
});

export const getProductCategoriesSuccess = payload => {
  return {
    type: actions.GET_PRODUCT_CATEGORIES_SUCCESS,
    data: payload,
    message: 'Categories fetched!',
    loading: false,
  };
};

export const getProductCategoriesFailed = payload => {
  return {
    type: actions.GET_PRODUCT_CATEGORIES_FAIL,
    message: payload,
    loading: false,
  };
};

const getCategories = () => {
  //config data
  let config = {
    url: `${baseURL}/products/categories`,
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
        dispatch(getProductCategoriesStart());

        axios(config)
          .then(({data}) => {
            if (data) {
              dispatch(getProductCategoriesSuccess(data));
            }
          })
          .catch(err => {
            console.log(err.response);
            dispatch(getProductCategoriesFailed('Error occured!'));
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

export default getCategories;
