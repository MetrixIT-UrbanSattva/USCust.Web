/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

export const PostAddItemToWishlist = (body, callback) => ({
  type: 'POST_ADD_ITEM_TO_WISH_LIST', body, callback
});

export const PostRemoveItemFromWishlist = (body, callback) => ({
  type: 'POST_REMOVE_ITEM_FROM_WISH_LIST', body, callback
});

export const PostGetWishlistItems = (callback) => ({
  type: 'POST_GET_WISH_LIST_ITEMS', callback
});

export const PostGetWishlistItemsWithPgn = (body, callback) => ({
  type: 'POST_GET_WISH_LIST_ITEMS_WITH_PGN', body, callback
})