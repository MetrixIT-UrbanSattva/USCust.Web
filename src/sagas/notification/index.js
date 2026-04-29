/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import { all, fork } from 'redux-saga/effects';
import WatchNotificationSaga from './Notification';

function* RootSaga() {
  yield all([
    fork(WatchNotificationSaga),
  ]);
}

export default RootSaga;