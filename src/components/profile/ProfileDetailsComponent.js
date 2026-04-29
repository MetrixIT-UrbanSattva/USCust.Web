/**
 * Copyright (C) Skill Works IT Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT Team <contact@skillworksit.com>, Jan 2023
 */

import React from 'react';

import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import FooterComponent from '../footer';
import { Profile } from '../../containers/profile';
import localForage from '../../hooks/localForage';
import hashHistory from '../../hashHistory';
import { Header } from '../../containers/header';

class ProfileDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordId: this.props.id,
      userDetails: {},
      cart: []
    };
  }
  componentDidMount() {
    this.getUserDetails();
  }
  getUserDetails = async () => {
    const atObj = await localForage.getItem('userInfo');
    const userDetails = atObj.value || atObj.value.result;
    const cartD = await localForage.getItem('cart');
    const cart = cartD.value || [];
    this.setState({ userDetails, cart });
  }

  handleUserEdit = () => {
    hashHistory.push('/profile-edit')
  }

  render() {
    return (
      <div className='wrapper'>
        <Header count={this.state.cart.length} />
        <BreadcrumbsComponent />
        <section className='profile-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row'>
              <Profile />
              <div className='col-sm-8'>
                <div className='card shadow mt-2'>
                  <div className='card-header bg-transparent '>
                    <div className='row mt-2'>
                      <h3 className='sub-title'>My Details</h3>
                    </div>
                    <div className='text-end' onClick={this.handleUserEdit}><i title='Edit' className='fa fa-edit me-3 text-success'></i></div>
                  </div>
                  <div className='card-body ps-5'>
                    <div className='row justify-content-between'>
                      <div>
                        <form id='validation-form'>
                          <div className='row'>
                            <div className="row d-flex justify-content-between col-sm-12">
                              <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                <div className='d-flex col-sm-4 '>
                                  <div><strong>Full Name</strong></div>
                                </div>
                                <div className='col-sm-8'>
                                  {this.state.userDetails && this.state.userDetails.fullName || this.state.userDetails.mName}
                                </div>
                              </div>
                              <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                <div className='d-flex col-sm-4 '>
                                  <div><strong>Display Name</strong></div>
                                </div>
                                <div className='col-sm-8'>
                                  {this.state.userDetails && this.state.userDetails.displayName}
                                </div>
                              </div>

                              <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                <div className='d-flex col-sm-4 '>
                                  <div><strong>Email</strong></div>
                                </div>
                                <div className='col-sm-8'>
                                  {this.state.userDetails && this.state.userDetails.emID}
                                </div>
                              </div>

                              <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                <div className='d-flex col-sm-4 '>
                                  <div><strong>Alternate Email</strong></div>
                                </div>
                                <div className='col-sm-8'>
                                  {this.state.userDetails && this.state.userDetails.altEmID}
                                </div>
                              </div>
                              <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                <div className='d-flex col-sm-4 '>
                                  <div><strong>Mobile Number</strong></div>
                                </div>
                                <div className='col-sm-8'>
                                  {this.state.userDetails && this.state.userDetails.mobNum}
                                </div>
                              </div>
                              <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                <div className='d-flex col-sm-4 '>
                                  <div><strong>Alternate Mobile Number</strong></div>
                                </div>
                                <div className='col-sm-8'>
                                  {this.state.userDetails && this.state.userDetails.altMobNum}
                                </div>
                              </div>
                              <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                <div className='d-flex col-sm-4 '>
                                  <div><strong>Gender</strong></div>
                                </div>
                                <div className='col-sm-8'>
                                  {this.state.userDetails && this.state.userDetails.gender}
                                </div>
                              </div>
                              <div className='d-flex justify-content-between col-sm-10 mt-3'>
                                <div className='d-flex col-sm-4 '>
                                  <div><strong>Date Of Birth</strong></div>
                                </div>
                                <div className='col-sm-8'>
                                  {this.state.userDetails && this.state.userDetails.dob}
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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

export default ProfileDetailsComponent;