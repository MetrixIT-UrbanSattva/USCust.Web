/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';

import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import FooterComponent from '../footer';
import { Profile } from '../../containers/profile';
import support from '../../assets/images/coming.jpg';
import hashHistory from '../../hashHistory';

class LegalAndPoliciesComponent extends Component {

  handleTerms = () => {
    hashHistory.push('/terms')
  }
  handlePrivacy = () => {
    hashHistory.push('/privacy')
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        <section className='profile-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row'>
              <Profile />
              <div className='col-sm-8'>
                <div className='card shadow mt-2'>
                  <div className='card-header bg-transparent '>
                    <div className='row mt-2'>
                      <h3 className='sub-title'>Legal & Policies</h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                    <div className='row justify-content-between'>
                      <div className='card' onClick={this.handleTerms}>
                        <div className='card-body'>
                          <a><h5>Terms and Conditions</h5></a>
                        </div>
                      </div>
                      <div className='card' onClick={this.handlePrivacy}>
                        <div className='card-body'>
                          <a><h5>Privacy Policy</h5></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>
    )
  }
}

export default LegalAndPoliciesComponent
