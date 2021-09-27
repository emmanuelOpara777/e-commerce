import {showMessage} from '../global';
let error = false;

export const validateSignUp = data => {
  if (data.firstname === '') {
    showMessage('danger', 'Sign up error', 'Firstname is required..');
    error = true;
  } else if (data.lastname === '') {
    showMessage('danger', 'Sign up error', 'Lastname is required');
    error = true;
  } else if (data.email === '') {
    showMessage('danger', 'Sign up error', 'Email address is required');
    error = true;
  } else if (data.phone === '') {
    showMessage('danger', 'Sign up error', 'Phone number is required');
    error = true;
  } else if (data.password === '') {
    showMessage('danger', 'Sign up error', 'Password is required');
    error = true;
  } else if (data.password.length < 6) {
    showMessage(
      'danger',
      'Sign up error',
      'Password character length must be at least 6 characters',
    );
    error = true;
  } else {
    error = false;
  }
  return error;
};

export const validateSignIn = data => {
  if (data.email === '') {
    showMessage('danger', 'Sign in error', 'Username is required');
    error = true;
  } else if (data.password === '') {
    showMessage('danger', 'Sign in error', 'Password is required');
    error = true;
  } else if (data.password.length < 6) {
    showMessage(
      'danger',
      'Sign in error',
      'Password character length must be at least 6 characters',
    );
    error = true;
  } else {
    error = false;
  }
  return error;
};
