/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

export const PostCustomerMyOrdersList = (body, callback) => ({ type: 'POST_CUSTOMER_MY_ORDERS_LIST', body, callback });
export const PostCustomerMyOrdersView = (body, callback) => ({ type: 'POST_CUSTOMER_MY_ORDERS_VIEW', body, callback });
export const PostCustomerMyOrdersItemsView = (body, callback) => ({ type: 'POST_CUSTOMER_MY_ORDERS_ITEMS_VIEW', body, callback });
export const PostCustomerMyOrdersItemCancel = (body, callback) => ({ type: 'POST_CUSTOMER_MY_ORDERS_CANCEL', body, callback });
export const PostCustomerMyOrdersItemReviewRating = (body, callback) => ({ type: 'POST_CUSTOMER_MY_ORDERS_ITEM_REVIEW_RATING', body, callback });
export const PostCustomerMyOrdersItemView = (body, callback) => ({ type: 'POST_CUSTOMER_MY_ORDERS_ITEM_VIEW', body, callback });
export const PostCustomerItemReviewRatingView = (body, callback) => ({ type: 'POST_CUSTOMER_ITEM_REVIEW_RATING_VIEW', body, callback });
export const PostCustomerItemReviewRatingEdit = (body, callback) => ({ type: 'POST_CUSTOMER_ITEM_REVIEW_RATING_EDIT', body, callback });
export const PostMyOrdersCreate = (body, callback) => ({ type: 'POST_CUSTOMER_MY_ORDERS_CREATE', body, callback });
export const PostCustomerLikesCount = (body, callback) => ({ type: 'POST_CUSTOMER_LIKES_COUNT', body, callback });
export const PostCustomerRRReports = (body, callback) => ({ type: 'POST_CUSTOMER_RRReports', body, callback });
