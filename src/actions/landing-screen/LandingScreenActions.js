/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

export const PostCreateCustsGuests = (body, callback) => ({
  type: 'POST_CREATE_CUSTS_GUESTS', body, callback
});
export const PostCustsGuestOtp = (body, callback) => ({
  type: 'POST_CUSTS_GUEST_OTP_API', body, callback
});
export const PostCustsGuestVerifyOtp = (body, callback) => ({
  type: 'POST_CUSTS_GUEST_VERIFY_OTP_API', body, callback
});
export const PostSalesOrderGrpsList = (body, callback) => ({
  type: 'POST_SALES_ORDERS_GRPS_LIST', body, callback
});