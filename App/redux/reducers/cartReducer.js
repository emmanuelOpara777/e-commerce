import * as actions from '../action_types';

const initState = {
  cart: [],
  loading: false,
  message: '',
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CART_START:
      return {
        ...state,
        loading: true,
      };
    case actions.CART_SUCCESS:
      return {
        ...state,
        cart: action.data,
        loading: false,
      };
    case actions.CART_FAIL:
      return {
        ...state,
        cart: [],
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
