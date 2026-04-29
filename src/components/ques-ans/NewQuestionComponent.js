/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import Modal from 'react-modal';

import hashHistory from '../../hashHistory';

import FooterComponent from '../footer';
import {HeaderComponent} from '../header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import RatingComponent from '../common/RatingComponent';

class NewQuestionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='container-fluid auto-container '>
      
      <div className='card  shadow-none text-start'>
        <div className='card-body p-4'>
          <div className='row'>
            <div className='col-sm-8'>
              <div className='mb-3 pt-2'>
                <label className='form-label'>Write your Question? <span className='required-field'>*</span></label>
                <input type='text' className='form-control' placeholder='Good, Excellent..' />
                {/* <p className='required'>Email / User name required</p> */}
              </div>
            </div>
            
            
            <div className='col-sm-2 text-start mt-3 pb-3'>
              <div className='d-flex'>
                <button className='btn btn-success px-4 mt-4 mb-3'>Submit</button>
                <p className='required-center m-4'>error</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

}

export default NewQuestionComponent;
