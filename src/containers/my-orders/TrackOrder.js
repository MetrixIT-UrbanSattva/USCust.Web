/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { useParams } from "react-router-dom";
import {TrackOrderComponent} from '../../components/my-orders';

const TrackOrder = () => {
  let {id} = useParams();
    return (
      <TrackOrderComponent id={id}/>
    );
  }


export default TrackOrder;
