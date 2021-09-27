import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actions from '../action_types';

import {baseURL, showAlert, showMessage} from '../../global';
import {validateSignUp} from '../../helper';

export const signupStart = () => ({
  type: actions.SignUp_START,
  loading: true,
});

export const signupSuccess = payload => {
  return {
    type: actions.SignUp_SUCCESS,
    data: payload.data,
  };
};

export const signupFailed = payload => {
  return {
    type: actions.SignUp_FAILED,
    message: payload.message,
  };
};

const signUp = data => {
  let config = {
    url: `${baseURL}/customer/register`,
    method: 'POST',
    data,
  };

  return dispatch => {
    let error = validateSignUp(data);
    if (!error) {
      NetInfo.fetch().then(state => {
        if (!state.isConnected) {
          showMessage(
            'danger',
            'Network error',
            'Check your network connection and try again!',
          );
        } else {
          dispatch(signupStart());
          axios(config)
            .then(({data}) => {
              if (data.status) {
                showMessage(
                  'success',
                  'Sign up',
                  'Your registration was successful!',
                );

                dispatch(signupSuccess(data));
              }
            })
            .catch(err => {
              if (err.message && err.message === 'Network Error') {
                showMessage(
                  'danger',
                  'Network error',
                  'Check your network connection and try again!',
                );
                dispatch(signupFailed(err.message));
              } else if (err.response.data.message) {
                showMessage(
                  'danger',
                  'Sign up error',
                  err.response.data.message,
                );
                dispatch(signupFailed(err.response.data.message));
              } else {
                showMessage(
                  'danger',
                  'Error',
                  'Something went wrong. Please try again later!',
                );
                dispatch(signupFailed(err.response.data.message));
              }
            });
        }
      });
    }
  };
};

export default signUp;
