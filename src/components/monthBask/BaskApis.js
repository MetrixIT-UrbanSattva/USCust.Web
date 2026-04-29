/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import localForage from '../../hooks/localForage';

const increment = async (item, baskId, callback) => {
  const baskData = await localForage.getItem('bask');
  let baskData1 = baskData.value || [];
  const baskItemData = await localForage.getItem('baskItems');
  let baskItemData1 = baskItemData.value || [];
  const oldBaskItems = baskData1.length && baskData1.filter(item1 => item1.voItem == item.voItem);
  const index = baskData1.length && baskData1.findIndex(item1 => item1.voItem == item.voItem);
  const baskItems = oldBaskItems.length ? oldBaskItems[0] : {};
  updateQuantity(index, baskItems, "inc", baskData1, baskItemData1, baskId, callback);
};

const decrement = async (item, baskId, value, callback) => {
  const baskData = await localForage.getItem('bask');
  let baskData1 = baskData.value || [];
  const baskItemData = await localForage.getItem('baskItems');
  let baskItemData1 = baskItemData.value || [];
  const oldBaskItems = baskData1.length && baskData1.filter(item1 => item1.voItem == item.voItem);
  const index = baskData1.length && baskData1.findIndex(item1 => item1.voItem == item.voItem);
  const baskItems = oldBaskItems.length ? oldBaskItems[0] : {};
  if (baskItems.qty == 1 || value == 'del') {
    removeItemFromCart(baskItems, baskData1, baskItemData1, baskId, callback)
  } else {
    updateQuantity(index, baskItems, "dec", baskData1, baskItemData1, baskId, callback);
  }
};
const removeItemFromCart = async (baskItems, baskData1, baskItemData1, baskId, callback) => {
  const vocCartItemsData = baskData1.length && baskData1.filter(item => item._id != baskItems._id);
  let cartItemData = baskItemData1.filter(item => item._id != baskItems._id)
  await localForage.setItem('bask', vocCartItemsData);
  await localForage.setItem('baskItems', cartItemData);
  const reqBody = {
    baskId,
    cartItemId: baskItems._id,
    cartVocItemId: baskItems.voItem,
    cartVocItemCode: baskItems.voiCode,
  }
  callback(reqBody)
}

const updateQuantity = async (index, baskItems, value, baskData, baskItemData, baskId, callback) => {
  const qty = value === 'inc' ? baskItems.qty + 1 : baskItems.qty - 1;
  baskData[index]['qty'] = qty;
  baskItemData[index]['qty'] = qty;
  await localForage.setItem('bask', baskData);
  await localForage.setItem('baskItems', baskItemData);
  const reqBody = {
    qty,
    recordId: baskId,
    voItem: baskItems.voItem,
    value: "update"
  }
  callback(reqBody)
}

export default { increment, decrement }