import * as actions from '../action_types';

const initState = {
  categoryList: [],
  loading: false,
  message: '',
};

const productCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_PRODUCT_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoryList: action.data,
        loading: false,
      };
    case actions.GET_PRODUCT_CATEGORIES_FAIL:
      return {
        ...state,
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
};

export default productCategoryReducer;
