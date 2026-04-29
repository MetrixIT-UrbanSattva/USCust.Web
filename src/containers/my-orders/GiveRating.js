/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { GiveRatingComponent } from '../../components/my-orders';
import { useParams } from 'react-router-dom';

const GiveRating = () => {
  let { id } = useParams();

  return (
    <GiveRatingComponent id={id}/>
  );
}

export default GiveRating;