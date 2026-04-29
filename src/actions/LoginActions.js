/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

export const PostUserLogin = (body, callback) => ({
  type: 'POST_USER_LOGIN', body, callback
});
export const PostUserOtpLogin = (body, callback) => ({
  type: 'POST_LOGIN_VERIFY_OTP', body, callback
});
export const SetLoggedInUserDataRes = (data) =>({
  type: 'SET_LOGEDIN_USER_DATA_RES', data
});
export const SetLoggedInUserAuthObj = (data) =>({
  type: 'LOGGED_IN_USER_AUTH_OBJ', data
});
