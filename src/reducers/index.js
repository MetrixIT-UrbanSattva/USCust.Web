/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import { combineReducers } from 'redux';

import LoginReducer from './login/LoginReducer';
import MonthBasketReducer from './mbasket/MonthBasketReducer';
import ItemsListReducer from './Items/ItemsListReducer';
import AddressesReducer from './addresses/AddressesReducer';
import CartItemsReducer from './cart-items/CartItemsReducer';
import NotificationReducer from './notifications/NotificationReducer'
import WishlistReducer from './wish-list/WishlistReducer';

const appReducer = combineReducers({
  LoginReducer,
  MonthBasketReducer,
  ItemsListReducer,
  AddressesReducer,
  CartItemsReducer,
  NotificationReducer,
  WishlistReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
