/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import {ProductViewComponent} from '../../components/products';
import { useParams } from "react-router-dom";

const  ProductView = () => {
  let { id } = useParams();

    return (
      <ProductViewComponent id ={id}/>
    );

}

export default ProductView;
