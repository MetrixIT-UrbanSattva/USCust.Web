/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

const initialState = {
  luObj: {}
};

const LoginReducer = (state = initialState, action) => {
  const newState = { ...state };
  const data = action.data;
  switch (action.type) {
    case 'SET_LOGEDIN_USER_DATA_RES':
      if (data.status === '200') {
        newState.luObj = data.resData.result.user;
      } else {
        newState.luObj = {};
      }
      break;
    case 'LOGGED_IN_USER_AUTH_OBJ':
      newState.luObj = data;
      break;
  }

  return newState;
}

export default LoginReducer;
