/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */


export const PostCustNtfcList = (body, callback) => ({
  type: 'POST_CUSTOMER_NTFC_LIST', body, callback
});
export const PostCustNtfcListUpdate = (callback) => ({
  type: 'POST_CUSTOMER_NTFC_LIST_UPDATE', callback
});
export const PostCustNtfcnsCount = (callback) => ({
  type: 'POST_CUSTOMER_NTFC_UNREAD_COUNT', callback
});
