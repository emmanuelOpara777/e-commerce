import * as actions from '../action_types';

const handleCart = (id, products, action) => {
  let result = products.productList.find(product => product.id === id),
    {cartList} = products,
    data = [],
    flag = false,
    message = '',
    newItems = [];

  //check if item is in cart already
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i]['id'] === id) {
      flag = true;
      break;
    }
  }

  if (action === 'remove') {
    message = 'Product removed from cart';
    if (products.cartList && products.cartList.length > 0) {
      let cartItems = products.cartList.filter(item => item.id !== id);
      data = [...cartItems];
      return dispatch => {
        dispatch({
          type: actions.HANDLE_CART,
          data,
          productList: products.productList,
          message,
        });
      };
    }
  }

  if (action === 'add' && flag === false) {
    data = [...cartList, result];
    message = 'Product added to cart';
  } else {
    message = 'Product already in the cart!';
    return dispatch => {
      dispatch({
        type: actions.HANDLE_CART,
        data: products.cartList,
        productList: products.productList,
        message,
      });
    };
  }

  return dispatch => {
    dispatch({
      type: actions.HANDLE_CART,
      data,
      productList: products.productList,
      message,
    });
  };
};

export default handleCart;
