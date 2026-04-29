/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

const initialState = {
  custsItemsListData: [],
  custsItemsListCount: 0,
  custsItemDetailsView: {}
};

const ItemsListReducer = (state = initialState, action) => {
  const newState = { ...state };
  const data = action.data;
  switch (action.type) {
    case 'SET_ITEMS_LIST_RES':
      if (data.status === '200') {
        newState.custsItemsListData = data.resData.result.custsItemsListData;
        newState.custsItemsListCount = data.resData.result.custsItemsListCount
      } else {
        newState.custsItemsListData = [];
        newState.custsItemsListCount = 0;
      }
      break;
    case 'SET_ITEM_DETAILS_VIEW':
      if (data.status === '200') {
        newState.custsItemDetailsView = data.resData.result;
      } else {
        newState.custsItemDetailsView = {};
      }
  }

  return newState;
}

export default ItemsListReducer;