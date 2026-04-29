/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

export const PostCartItemsList = (callback) => ({
  type: 'POST_CART_ITEMS_LIST', callback
});
export const PostAddToCartItem = (body, callback) => ({
  type: 'POST_ADD_TO_CART_ITEM', body, callback
});
export const PostCartItemUpdate = (body, callback) => ({
  type: 'POST_CART_ITEM_UPDATE', body, callback
});
export const PostCartItemRemove = (body, callback) => ({
  type: 'POST_CART_ITEM_REMOVE', body, callback
});
export const SetCartData = (cartData, cartItemsData) => ({
  type: 'SET_CART_DATA', cartData, cartItemsData
});