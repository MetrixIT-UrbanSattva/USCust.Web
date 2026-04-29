/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import localForage from './hooks/localForage';
var { v4: uuidv4 } = require('uuid');

const handleAddCart = async (itemData, cartId, callback) => {
  let itemData1 = itemData;
  itemData1['_id'] = uuidv4();
  itemData1['qty'] = 1;

  const voItems = [itemData1.voItem];
  const voiCodes = [itemData1.voiCode];
  const vocCartItems = setAllData(itemData1);

  const cartD = await localForage.getItem('cart');
  const cartItem = await localForage.getItem('cartItems');
  let cartData1 = cartD.value || [];
  let cartitemD = cartItem.value || [];
  cartData1.push(vocCartItems[0]);
  cartitemD.push(itemData1)
  await localForage.setItem('cart', cartData1);
  await localForage.setItem('cartItems', cartitemD);

  const reqBody = {
    vocCartItemsData: itemData1,
    status: 'In cart',
    voItems,
    voiCodes,
    vocCartItems,
    cartId
  };
  callback(reqBody);
}

 const setAllData = (itemData) => {
  const data = {
    _id: itemData._id,
    seq: 1,
    voItem: itemData.voItem,
    voiCode: itemData.voiCode,
    itemPeru: itemData.itemPeru,
    units: itemData.units,
    qty: itemData.qty,
  };
  return [data];
}

const increment = async (item, cartId, callback) => {
  const cartData = await localForage.getItem('cart');
  let cartData1 = cartData.value || [];
  const cartItemData = await localForage.getItem('cartItems');
  let cartItemData1 = cartItemData.value || [];
  const oldVocCartItems = cartData1.length && cartData1.filter(item1 => item1.voItem == item.voItem);
  const index = cartData1.length && cartData1.findIndex(item1 => item1.voItem == item.voItem);
  const vocCartItems = oldVocCartItems.length ? oldVocCartItems[0] : {};
  updateQuantity(index, vocCartItems, "inc", cartData1, cartItemData1, cartId, callback);
};

const decrement = async (item, cartId, value, callback) => {
  const cartData = await localForage.getItem('cart');
  let cartData1 = cartData.value || [];
  const cartItemData = await localForage.getItem('cartItems');
  let cartItemData1 = cartItemData.value || [];
  const oldVocCartItems = cartData1.length && cartData1.filter(item1 => item1.voItem == item.voItem);
  const index = cartData1.length && cartData1.findIndex(item1 => item1.voItem == item.voItem);
  const vocCartItems = oldVocCartItems.length ? oldVocCartItems[0] : {};
  if (vocCartItems.qty == 1 || value == 'del') {
    removeItemFromCart(vocCartItems, cartData1, cartItemData1, cartId, callback)
  } else {
    updateQuantity(index, vocCartItems, "dec", cartData1, cartItemData1, cartId, callback);
  }
};
const removeItemFromCart = async (vocCartItems, cartData, cartItemData1, cartId, callback) => {
  const vocCartItemsData = cartData.length && cartData.filter(item => item._id != vocCartItems._id);
   let cartItemData =  cartItemData1.filter(item => item._id != vocCartItems._id)
  await localForage.setItem('cart', vocCartItemsData);
  await localForage.setItem('cartItems', cartItemData);
  const reqBody = {
    cartId,
    cartItemId: vocCartItems._id,
    cartVocItemId: vocCartItems.voItem,
    cartVocItemCode: vocCartItems.voiCode,
  }
  callback(reqBody)
}
const updateQuantity = async (index, vocCartItems, value, cartData, cartItemData, cartId, callback) => {
  const qty = value === 'inc' ? vocCartItems.qty + 1 : vocCartItems.qty - 1;
  cartData[index]['qty'] = qty;
  cartItemData[index]['qty'] = qty;
  await localForage.setItem('cart', cartData);
  await localForage.setItem('cartItems', cartItemData);
  const reqBody = {
    qty,
    recordId: cartId,
    cartItemId: vocCartItems._id,
    value: "update"
  }
  callback(reqBody)
}

export default {handleAddCart, increment, decrement, removeItemFromCart}