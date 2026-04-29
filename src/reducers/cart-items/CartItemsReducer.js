/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

const initialState = {
  cartData: [],
  cartItemsData: [],
};

const CartItemsReducer = (state = initialState, action) => {
  const newState = { ...state };
  const data = action.data;
  switch (action.type) {
    case 'SET_CART_ITEMS_DATA':
      if (data.status === '200') {
        newState.cartData = data.resData.result.cartData.vocCartItems;
        newState.cartItemsData = data.resData.result.cartItemsData;
      } else {
        newState.cartData = [];
        newState.cartItemsData = [];
      }
      break;
    case 'SET_CART_DATA':
      newState.cartData = action.cartData;
      newState.cartItemsData = action.cartItemsData;
      break;
  }

  return newState;
}

export default CartItemsReducer;