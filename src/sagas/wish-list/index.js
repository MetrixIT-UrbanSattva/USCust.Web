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
function* WatchWishListSaga() {
  yield takeLatest('POST_ADD_ITEM_TO_WISH_LIST', workerAddItemToWishList);
  yield takeLatest('POST_REMOVE_ITEM_FROM_WISH_LIST', workerRemoveItemFromWishList);
  yield takeLatest('POST_GET_WISH_LIST_ITEMS', workerGetWishlistItems);
  yield takeLatest('POST_GET_WISH_LIST_ITEMS_WITH_PGN', workerGetWishlistItemsWithPgn);
}
export default WatchWishListSaga;
//--- End: Saga main Action Watcher generator function

function* workerAddItemToWishList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postAddItemToWishlist, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerRemoveItemFromWishList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here 
    let obj = { apiUrl: apis.postRemoveItemFromWishlist, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerGetWishlistItems(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here 
    let obj = { apiUrl: apis.postGetWishlistItems};
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_WISH_LIST_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerGetWishlistItemsWithPgn(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here 
    let obj = { apiUrl: apis.postGetWishlistItemsWithPgn, body: action.body};
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
