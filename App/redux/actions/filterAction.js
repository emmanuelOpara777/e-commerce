import * as actions from '../action_types';

const handleFilter = (products, text) => {
  if (products.productList.length > 0) {
    let result = products.productList.find(product =>
      product.title
        .toString()
        .toLowerCase()
        .includes(text.toString().toLowerCase()),
    );
    return dispatch => {
      dispatch({
        type: actions.HANDLE_FILTER,
        productList: result,
      });
    };
  } else {
    return dispatch => {
      dispatch({
        type: actions.HANDLE_FILTER,
        productList: [],
      });
    };
  }
};

export default handleFilter;
