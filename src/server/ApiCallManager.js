/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import * as rdd from 'react-device-detect';

import hashHistory from '../hashHistory';
import localForage from '../hooks/localForage';
import config from '../../config/config.json';

const noInternetRes = {status: '12000', message: 'No Internet Connection'};

export const getApiCall = async (reqObj) => {
  const internet = navigator.onLine;
  if (internet) {
    const atObj = await localForage.getItem('accesstoken');
    const kmvcatoken = atObj.value;
    const kmvcuiinfo = getUiInfo();
    const options = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': config.apiKey,
        kmvcatoken, kmvcuiinfo
      }
    };
    return callApi(reqObj.apiUrl, options);
  } else {
    hashHistory.push('/no-internet');
    return noInternetRes;
  }
}
export const postApiCall = async (reqObj) => {
  const internet = navigator.onLine;
  if (internet) {
    const atObj = await localForage.getItem('accesstoken');
    const otObj = await localForage.getItem('otptoken');
    const kmvcatoken = atObj.value ? { kmvcatoken: atObj.value } : {};
    const kmvcotoken = otObj.value ? { kmvcotoken: otObj.value } : {};
    const kmvcuiinfo = getUiInfo();
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': config.apiKey,
        ...kmvcatoken, ...kmvcotoken, kmvcuiinfo,
      },
      body: JSON.stringify(reqObj.body)
    };
    return callApi(reqObj.apiUrl, options);
  } else {
    hashHistory.push('/no-internet');
    return noInternetRes;
  }
}
export const putApiCall = async (reqObj) => {
  const internet = navigator.onLine;
  if (internet) {
    const atObj = await localForage.getItem('accesstoken');
    const kmvcatoken = atObj.value;
    const kmvcuiinfo = getUiInfo();
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': config.apiKey,
        kmvcatoken, kmvcuiinfo
      },
      body: JSON.stringify(reqObj.body)
    };
    return callApi(reqObj.apiUrl, options);
  } else {
    hashHistory.push('/no-internet');
    return noInternetRes;
  }
}
export const deleteCall = async (reqObj) => {
  const internet = navigator.onLine;
  if (internet) {
    const atObj = await localForage.getItem('accesstoken');
    const kmvcatoken = atObj.value;
    const kmvcuiinfo = getUiInfo();
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': config.apiKey,
        kmvcatoken, kmvcuiinfo
      },
      body: JSON.stringify(reqObj.body)
    };
    return callApi(reqObj.apiUrl, options);
  } else {
    hashHistory.push('/no-internet');
    return noInternetRes;
  }
}

const callApi = async (apiUrl, options) => {
  try {
    const response = await fetch(apiUrl, options);
    const responseJson = await response.json();
    if (response.headers.get('kmvcatoken')) {
      await localForage.setItem('accesstoken', response.headers.get('kmvcatoken'));
    }
    if (response.headers.get('kmvcotoken')) {
      await localForage.setItem('otptoken', response.headers.get('kmvcotoken'));
    }
    if(responseJson.status === '401') {
      localForage.clearItems();
      hashHistory.push('/');
    }
    return responseJson;
  } catch (error) {
    return {status: '504', message: 'Un konwn error'};
  }
}

const getUiInfo = () => {
  const uiInfo = {
    osVersion: rdd.osVersion,
    osName: rdd.osName,
    fullBrowserVersion: rdd.fullBrowserVersion,
    browserVersion: rdd.browserVersion,
    browserName: rdd.browserName,
    deviceType: rdd.deviceType,
    mobileVendor: rdd.mobileVendor,
    mobileModel: rdd.mobileModel,
    engineName: rdd.engineName,
    engineVersion: rdd.engineVersion,
    ua: rdd.getUA,
  };
  return JSON.stringify(uiInfo);
}
