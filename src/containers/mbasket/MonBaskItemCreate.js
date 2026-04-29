/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import MbaskItemCreateComponent from '../../components/monthBask/MbaskItemCreateComponent';
import { useParams } from 'react-router-dom';
const MonBaskItemCreate = () =>  {
  let { id } = useParams();
    return (
      <MbaskItemCreateComponent id={id}/>
    );
}

export default MonBaskItemCreate;
