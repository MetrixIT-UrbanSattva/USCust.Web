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
function* WatchNotificationSaga() {
    yield takeLatest('POST_CUSTOMER_NTFC_LIST', workerCustNtfcList);
    yield takeLatest('POST_CUSTOMER_NTFC_UNREAD_COUNT', workerCustNtfcnsCountApi);
    yield takeLatest('POST_CUSTOMER_NTFC_LIST_UPDATE', workerCustNtfcListUpdate);

    
  }
  export default WatchNotificationSaga;
  //--- End: Saga main Action Watcher generator function
  

  function* workerCustNtfcList(action) {
    const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
    try {
      let obj = { apiUrl: apis.postcustNtfcListApi, body:action.body };
      const resObj = yield call(ApiCallManager.postApiCall, obj);
      yield put({ type: 'SET_NOTIFICATION_LIST_RES', data: resObj });
      clearTimeout(timeOutApiCall);
      action.callback(resObj);
    } catch (error) {
      clearTimeout(timeOutApiCall);
      action.callback(errEmptyRes);
    }
  }
  function* workerCustNtfcnsCountApi(action) {
    const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
    try {
      let obj = { apiUrl: apis.postCustNtfcCountAPI };
      const resObj = yield call(ApiCallManager.postApiCall, obj);
      yield put({ type: 'SET_NOTIFICATION_LIST_RES', data: resObj });
      clearTimeout(timeOutApiCall);
      action.callback(resObj);
    } catch (error) {
      clearTimeout(timeOutApiCall);
      action.callback(errEmptyRes);
    }
  }
  

  function* workerCustNtfcListUpdate(action) {
    const timeOutApiCall = setTimeout(() => { action.callback(timeOutRes) }, 30000);
    try {
      let obj = { apiUrl: apis.postCustNtfcUpdateAPI };
      const resObj = yield call(ApiCallManager.putApiCall, obj);
      yield put({ type: 'SET_NOTIFICATION_LIST_RES', data: resObj });

      clearTimeout(timeOutApiCall);
      action.callback(resObj);
    } catch (error) {
      clearTimeout(timeOutApiCall);
      action.callback(errEmptyRes);
    }
  }

  