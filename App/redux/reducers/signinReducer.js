import * as actions from '../action_types';

const initState = {
  user: {},
  loading: false,
  message: '',
};

const signinReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SignIn_START:
      return {
        ...state,
        loading: true,
      };
    case actions.SignIn_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false,
        message: 'Login was successful',
      };
    case actions.SignIn_FAILED:
      return {
        ...state,
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
};

export default signinReducer;
