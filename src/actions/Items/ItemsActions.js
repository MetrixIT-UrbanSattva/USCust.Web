/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

export const PostItemsList = (body, callback) => ({
  type: 'POST_ITEMS_LIST', body, callback
});
export const PostItemDetailsView = (body, callback) => ({
  type: 'POST_ITEM_DETAILS_VIEW', body, callback
});
export const PostItemFilesList = (body, callback) => ({
  type: 'POST_ITEM_FILES_LIST', body, callback
});
export const PostItemView = (body, callback) => ({
  type: 'POST_ITEM_VIEW', body, callback
});
export const PostItemQasList = (body, callback) => ({
  type: 'POST_ITEM_QAS_LIST', body, callback
});
export const PostItemRvrsList = (body, callback) => ({
  type: 'POST_ITEM_RVRS_LIST', body, callback
});
export const PostItemViewed = (body, callback) => ({
  type: 'POST_ITEM_VIEWED', body, callback
});
export const PostItemViewedList = (body, callback) => ({
  type: 'POST_ITEM_VIEWED_LIST', body, callback
});
export const PostItemTotalViewedList = (body, callback) => ({
  type: 'POST_ITEM_TOTAL_VIEWED_LIST', body, callback
});
