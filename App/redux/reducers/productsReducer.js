import * as actions from '../action_types';

const initState = {
  productList: [],
  cartList: [],
  loading: false,
  message: '',
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: action.data,
        loading: false,
        message: action.message,
      };
    case actions.GET_PRODUCT_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
      };
    case actions.HANDLE_CART:
      return {
        ...state,
        cartList: action.data,
        productList: action.productList,
        message: action.message,
      };
    case actions.HANDLE_FILTER:
      return {
        ...state,
        productList: action.productList,
      };

    default:
      return state;
  }
};

export default productReducer;
