/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

const initialState = {
  mbasketList: []
};

const MonthBasketReducer = (state = initialState, action) => {
  const newState = { ...state };
  const data = action.data;
  switch (action.type) {
    case 'SET_MONTHBASKET_LIST_RES':
      if (data.status === '200') {
        newState.mbasketList = data.resData.result;
      } else {
        newState.mbasketList = [];
      }
      break;
  }

  return newState;
}

export default MonthBasketReducer;
