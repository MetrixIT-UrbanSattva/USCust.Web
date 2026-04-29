/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommonToaster = (props) => {
  if(props.successMsg) {
    toast.success(props.successMsg);
  }
  if(props.errorMsg) {
    toast.error(props.errorMsg);
  }
  if(props.warnMsg) {
    toast.warn(props.warnMsg);
  }

  return <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
}

export default CommonToaster;
