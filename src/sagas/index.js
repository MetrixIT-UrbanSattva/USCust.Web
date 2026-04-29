/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import { all, fork } from 'redux-saga/effects';

import WatchUserLoginSaga from './login';
import WatchCustomerAdrsSaga from './addresses';
import WatchItemsSaga from './Items';
import watchMonthBasketSaga from './mbasket';
import WatchCartItemsSaga from './cart-items';
import WatchLandingScreen from './landing-screen';
import watchMyOrdersSaga from './my-orders';
import WatchNotificationSaga from './notification/Notification';
import watchProfileDetailsSaga from './profile';
import WatchWishListSaga from './wish-list';

function* RootSaga() {
  yield all([
    fork(WatchUserLoginSaga),
    fork(WatchCustomerAdrsSaga),
    fork(WatchItemsSaga),
    fork(watchMonthBasketSaga),
    fork(WatchCartItemsSaga),
    fork(WatchLandingScreen),
    fork(watchMyOrdersSaga),
    fork(WatchNotificationSaga),
    fork(watchProfileDetailsSaga),
    fork(WatchWishListSaga)
  ]);
}

export default RootSaga;
