/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

export const PostCustAdrsList = (callback) => ({
  type: 'POST_CUST_ADRS_LIST', callback
});
export const PostCustAdrsCreate = (body, callback) => ({
  type: 'POST_CUST_ADRS_CREATE', body, callback
});
export const PostCustAdrsView = (id, callback) => ({
  type: 'POST_CUST_ADRS_VIEW', id, callback
});
export const PutCustAdrsUpdate = (body, callback) => ({
  type: 'PUT_CUST_ADRS_UPDATE', body, callback
});
export const PutCustAdrsDelete = (id, callback) => ({
  type: 'PUT_CUST_ADRS_DELETE', id, callback
});
export const PutCustAdrsSetDefault = (id, callback) => ({
  type: 'PUT_CUST_ADRS_SETDEFAULT', id, callback
});
export const PutCustAdrsReduList = (body, callback) => ({
  type: 'SET_ADRS_LIST_RES', body, callback
});
export const ResetAddressData = (data) => ({
  type: "RESET_ADDRESS_DATA", data
});