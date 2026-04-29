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
function* WatchUserLoginSaga() {
  yield takeLatest('POST_USER_LOGIN', workerUserLogin);
  yield takeLatest('POST_LOGIN_VERIFY_OTP', workerUserLoginVerifyOtp);
}
export default WatchUserLoginSaga;
//--- End: Saga main Action Watcher generator function

function* workerUserLogin(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postUserOtpAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerUserLoginVerifyOtp(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here 
    let obj = { apiUrl: apis.postVerifyUserOtpAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    yield put({ type: 'SET_LOGEDIN_USER_DATA_RES', data: resObj });
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
