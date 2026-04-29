/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

export const PostProfileDetailUpdate = (body, callback) => ({
  type: 'PUT_PROFILE_DETAIL_UPDATE', body, callback
});
export const PostCustSuppCreate = (body, callback) => ({
  type: 'PUT_CUSTOMER_SUPPORT_CREATE', body, callback
});
export const supportTicketsList = (body, callback) => ({
  type: 'PUT_CUSTOMER_SUPPORT_TICKET_LIST', body, callback
});
