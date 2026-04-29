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
function* watchProfileDetailsSaga() {
  yield takeLatest('PUT_PROFILE_DETAIL_UPDATE', workerProfileDetailsUpdate);
  yield takeLatest('PUT_CUSTOMER_SUPPORT_CREATE', workerCustSuppCreate);
  yield takeLatest('PUT_CUSTOMER_SUPPORT_TICKET_LIST', workerCustSuppTickList);
}
export default watchProfileDetailsSaga;
//--- End: Saga main Action Watcher generator function

function* workerProfileDetailsUpdate(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.putProfileDetailsUpdateAPI, body: action.body };
    const resObj = yield call(ApiCallManager.putApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerCustSuppCreate(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustSupCreateAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}
function* workerCustSuppTickList(action) {
  const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
  try {
    // API calls here
    let obj = { apiUrl: apis.postCustSupTickListAPI, body: action.body };
    const resObj = yield call(ApiCallManager.postApiCall, obj);
    clearTimeout(timeOutApiCall);
    action.callback(resObj);
  } catch (error) {
    clearTimeout(timeOutApiCall);
    action.callback(errEmptyRes);
  }
}

