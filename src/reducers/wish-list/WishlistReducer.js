/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

const initialState = {
  custsWishlistData: [],
};

const WishlistReducer = (state = initialState, action) => {
  const newState = { ...state };
  const data = action.data;
  switch (action.type) {
    case 'SET_WISH_LIST_RES':
      if (data.status === '200') {
        newState.custsWishlistData = data.resData.result.custItemsWishListData;
      } else {
        newState.custsWishlistData = [];
      }
      break;
  }

  return newState;
}

export default WishlistReducer;