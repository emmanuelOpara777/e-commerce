import * as actions from '../action_types';

const initState = {
  cart: [],
  loading: false,
  message: '',
};

const getCartReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_CART_START:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CART_SUCCESS:
      return {
        ...state,
        cart: action.data,
        loading: false,
      };
    case actions.GET_CART_FAIL:
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

export default getCartReducer;
