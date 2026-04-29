/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */
import React, { useState } from 'react';

function FilteredLabelsComponent() {
  return (
    <div className='row pt-4'>
      <div className='col-sm-12 col-12'>
        <div className='d-flex flex-wrap'>
          <div className='filtered-label-div'>
            <i className='fa fa-close' />
            <label>25000 to 35000</label>
          </div>
          <div className='filtered-label-div'>
            <i className='fa fa-close' />
            <label>500 grms</label>
          </div>
          <div className='filtered-label-div'>
            <i className='fa fa-close' />
            <label>1000 grms</label>
          </div>
          <div className='filtered-label-div'>
            <i className='fa fa-close' />
            <label>900 Milliliters</label>
          </div>
          <div className='filtered-label-div'>
            <i className='fa fa-close' />
            <label>5000 Milliliters</label>
          </div>
          <div className='filtered-label-div'>
            <i className='fa fa-close' />
            <label>Honey</label>
          </div>
          <div className='filtered-label-div'>
            <i className='fa fa-close' />
            <label>Pulses</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilteredLabelsComponent;