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
function* WatchLandingScreen() {
  // postGuestOtpAPI
  yield takeLatest('POST_CREATE_CUSTS_GUESTS', workerCreateCustsGuests);
  yield takeLatest('POST_CUSTS_GUEST_OTP_API', workerCustsGuestLoginOtp);
  yield takeLatest('POST_CUSTS_GUEST_VERIFY_OTP_API', workerCustsGuestVerifyOtp);
  yield takeLatest('POST_SALES_ORDERS_GRPS_LIST', workerSalesOrdersGrpsList);
}
export default WatchLandingScreen;
//--- End: Saga main Action Watcher generator function

function* workerCreateCustsGuests(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCreateCustsGuestsAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerCustsGuestLoginOtp(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postGuestOtpAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

function* workerCustsGuestVerifyOtp(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postGuestOtpVerifyAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_LOGEDIN_USER_DATA_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerSalesOrdersGrpsList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postSalesOrderGrpsListAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
