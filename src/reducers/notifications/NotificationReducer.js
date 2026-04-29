/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

const initialState = {
  NotificationList: []
};

const NotificationReducer = (state = initialState, action) => {
  const newState = { ...state };
  const data = action.data;
  switch (action.type) {
    case 'SET_NOTIFICATION_LIST_RES':
      if (data.status === '200') {
        newState.NotificationList = data.resData.result;
      } else {
        newState.NotificationList = [];
      }
      break;
  }
  return newState;
}

export default NotificationReducer;
