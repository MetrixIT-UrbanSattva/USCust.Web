/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as ApiCallManager from '../../server/ApiCallManager';
import apis from '../../../config/apis.json';

const errEmptyRes = {};
const timeOutRes = { status: '777', message: 'Server not responding' };

//--- Begin: Saga main Action Watcher generator function
function* watchMyOrdersSaga() {
  yield takeLatest('POST_CUSTOMER_MY_ORDERS_LIST', workerPostCustomerMyOrdersList);
  yield takeLatest('POST_CUSTOMER_MY_ORDERS_VIEW', workerPostCustomerMyOrdersView);
  yield takeLatest('POST_CUSTOMER_MY_ORDERS_ITEMS_VIEW', workerPostCustomerMyOrdersItemsView);
  yield takeLatest('POST_CUSTOMER_MY_ORDERS_CANCEL', workerPostCustomerMyOrdersCancel);
  yield takeLatest('POST_CUSTOMER_MY_ORDERS_ITEM_REVIEW_RATING', workerPostCustomerMyOrdersItemReviewRating);
  yield takeLatest('POST_CUSTOMER_MY_ORDERS_ITEM_VIEW', workerPostCustomerMyOrdersItemView);
  yield takeLatest('POST_CUSTOMER_ITEM_REVIEW_RATING_VIEW', workerPostCustomerItemReviewRatingView);
  yield takeLatest('POST_CUSTOMER_ITEM_REVIEW_RATING_EDIT', workerPostCustomerItemReviewRatingEdit);
  yield takeLatest('POST_CUSTOMER_MY_ORDERS_CREATE', workerPostMyOrdersCreate);
  yield takeLatest('POST_CUSTOMER_LIKES_COUNT', workerPostCustomerLikesCount);
  yield takeLatest('POST_CUSTOMER_RRReports', workerPostCustomerRRReports);
}
export default watchMyOrdersSaga;
//--- End: Saga main Action Watcher generator function

function* workerPostCustomerMyOrdersList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerMyOrdersAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_CUSTOMER_MY_ORDERS_LIST_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerPostCustomerMyOrdersView(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerMyOrdersViewAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_CUSTOMER_MY_ORDER_VIEW_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerPostCustomerMyOrdersItemsView(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerMyOrdersItemsViewAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_CUSTOMER_MY_ORDER_ITEMS_VIEW_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerPostCustomerMyOrdersCancel(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerMyOrdersCancelAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_MONTHBASKET_LIST_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerPostCustomerMyOrdersItemReviewRating(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerMyOrdersItemReviewRatingAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_MONTHBASKET_LIST_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerPostCustomerMyOrdersItemView(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerMyOrdersItemViewAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_MONTHBASKET_LIST_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerPostCustomerItemReviewRatingView(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerItemReviewRatingViewAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_MONTHBASKET_LIST_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerPostCustomerItemReviewRatingEdit(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerItemReviewRatingEditAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_MONTHBASKET_LIST_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerPostMyOrdersCreate(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postMyOrdersCreateAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerPostCustomerLikesCount(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerLikeCountAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerPostCustomerRRReports(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustomerRRReportsAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
