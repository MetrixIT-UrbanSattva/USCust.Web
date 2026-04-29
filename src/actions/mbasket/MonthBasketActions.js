/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

  export const PostMonthBasketList = (body, callback) => ({
    type: 'POST_MONTH_BASKET_LIST', body, callback
  });
  export const PostMonthBasketCreate = (body, callback) => ({
    type: 'POST_MONTH_BASKET_CREATE', body, callback
  });
  export const PostMonBasketList = ( callback) => ({
    type: 'POST_MON_BASKET_LIST',  callback
  });
  export const PostMonBasketItemsList = (body, callback) => ({
    type: 'POST_MON_BASKET_ITEMS_LIST', body, callback
  });
  export const PostMonBasketListDelete = (body, callback) => ({
    type: 'POST_MON_BASKET_LIST_DELETE', body, callback
  });
  export const PostMonItemsListDelete = (body, callback) => ({
    type: 'POST_MON_LIST_DELETE', body, callback
  });
  export const PostMonItemQtyUpdate = (body, callback) => ({
    type: 'POST_MON_LIST_ITEM_QTY_UPDATE', body, callback
  });
  export const PostMonItemCreate = (body, callback) => ({
    type: 'POST_MON_LIST_ITEM_CREATE', body, callback
  });
  