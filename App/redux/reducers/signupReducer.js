import * as actions from '../action_types';

const initState = {
  user: {},
  loading: false,
  message: '',
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SignUp_START:
      return {
        ...state,
        loading: true,
      };
    case actions.SignUp_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false,
        message: 'Registration was successful',
      };
    case actions.SignUp_FAILED:
      return {
        ...state,
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
};

export default signupReducer;
