import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actions from '../action_types';

import {baseURL, showMessage} from '../../global';
import {validateSignIn} from '../../helper';

export const signinStart = () => ({
  type: actions.SignIn_START,
  loading: true,
});

export const signinSuccess = payload => {
  return {
    type: actions.SignIn_SUCCESS,
    data: payload.data,
  };
};

export const signinFailed = payload => {
  return {
    type: actions.SignIn_FAILED,
    message: payload.message,
  };
};

const signUp = data => {
  let config = {
    url: `${baseURL}/auth/login`,
    method: 'POST',
    data: {
      username: data.email,
      password: data.password,
    },
  };

  return dispatch => {
    let error = validateSignIn(data);

    if (!error) {
      NetInfo.fetch().then(state => {
        if (!state.isConnected) {
          showMessage(
            'danger',
            'Network error',
            'Check your network connection and try again!',
          );
        } else {
          dispatch(signinStart());
          axios(config)
            .then(({data}) => {
              console.log('---', data);
              if (data.token) {
                showMessage(
                  'success',
                  'Sign in',
                  'Your sign in was successful!',
                );

                dispatch(signinSuccess(data));
                AsyncStorage.multiSet([['token', data.token]]);
              } else {
                showMessage('danger', 'Sign error', data.msg);
                dispatch(signinFailed(data.msg));
              }
            })
            .catch(err => {
              dispatch(signinFailed('Error occured!'));
              showMessage(
                'danger',
                'Error',
                'Something went wrong. Please try again later!',
              );
            });
        }
      });
    }
  };
};

export default signUp;
