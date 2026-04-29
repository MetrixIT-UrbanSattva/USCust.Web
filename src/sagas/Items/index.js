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
function* WatchItemsSaga() {
  yield takeLatest('POST_ITEMS_LIST', workerItemsList);
  yield takeLatest('POST_ITEM_DETAILS_VIEW', workerItemDetailsView);
  yield takeLatest('POST_ITEM_FILES_LIST', workerItemFilesView);
  yield takeLatest('POST_ITEM_VIEW', workerItemView);
  yield takeLatest('POST_ITEM_VIEWED', workerItemViewed);
  yield takeLatest('POST_ITEM_VIEWED_LIST', workerItemViewedList);
  yield takeLatest('POST_ITEM_TOTAL_VIEWED_LIST', workerTotalItemViewedList);
  yield takeLatest('POST_ITEM_QAS_LIST', workerItemQasList);
  yield takeLatest('POST_ITEM_RVRS_LIST', workerItemRvrsList);
}
export default WatchItemsSaga;
//--- End: Saga main Action Watcher generator function

function* workerItemsList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustItemsListAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_ITEMS_LIST_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerItemDetailsView(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    let obj = { apiUrl: apis.postCustItemDetailsViewAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_ITEM_DETAILS_VIEW', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerItemFilesView(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    let obj = { apiUrl: apis.postCustItemFilesListAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerItemView(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    let obj = { apiUrl: apis.postCustItemViewAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerItemViewed(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    let obj = { apiUrl: apis.postCustItemViewedAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerItemViewedList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    let obj = { apiUrl: apis.postCustItemViewedListAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerTotalItemViewedList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    let obj = { apiUrl: apis.postCustItemListAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerItemQasList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    let obj = { apiUrl: apis.postCustItemQasListAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerItemRvrsList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    let obj = { apiUrl: apis.postCustItemRvrsListAPI, body:action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}