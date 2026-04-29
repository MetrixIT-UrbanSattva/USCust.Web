/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { connect } from 'react-redux';

import FooterComponent from '../footer';
import { Header } from '../../containers/header';
import Profile from '../profile/ProfileComponent';
import hashHistory from '../../hashHistory';
import moment from 'moment';
import MobCountryCodes from '../../../config/data/MobCountryCodes.json';
import localForage from '../../hooks/localForage';
import { PostProfileDetailUpdate } from '../../actions/profile/ProfileDetailAction';
import CommonToaster from '../../containers/CommonToaster';
class ProfileEditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordId: '',
      custName: '',
      displayName: '',
      mobCc: '',
      mobNumber: '',
      emailId: '',
      userId: '',
      primaryType: '',
      primary: '',
      altMobCc: '',
      altMobNumber: '',
      altEmailId: '',
      dob: '',
      status: '',
      gender: '',
      errorMsg: '',
      initialData: {},
      disable: true,
      isDisable: false,
      errorMessage: '',
      successMsg: '',
      warnMsg: '',
    }
  }
  componentDidMount() {
    this.postVocUserView();
  }
  postVocUserView = async () => {
    const atObj = await localForage.getItem('userInfo');
    const authObj = atObj.value || atObj.value.result;
    let uData = this.setData(authObj)
    this.setState({ ...uData });
  }
  setData = (resObj) => {
    const primary = resObj.primary
    return {
      recordId: resObj.info._id,
      custName: resObj.fullName,
      displayName: resObj.displayName,
      primaryType: resObj.primary,
      primary: primary == 'Mobile' ? resObj.mobCc+resObj.mobNum : resObj.emID,
      mobCc: resObj.mobCc,
      mobNumber: resObj.mobNum,
      altMobCc: resObj.altMobCc,
      altMobNumber: resObj.altMobNum,
      emailId: resObj.emID,
      altEmailId: resObj.altEmID,
      dob: resObj.dob,
      gender: resObj.gender,
    }
  }

  handlePrimaryType = (e) => {
    const primaryType = e.target.value;
    if (primaryType) {
      const { emailId, mobCc, mobNumber } = this.state;
      this.setState({ primaryType, primary: (primaryType === 'Email' ? emailId : mobCc + mobNumber), errorMessage: '' });
    } else {
      this.setState({ primaryType, primary: '', errorMessage: 'Primary is required' });
    }
  }

  handleEdit = () => {
    const { custName, recordId, displayName, primaryType, primary, mobNumber, altMobNumber,
      emailId, altEmailId, dob, gender } = this.state;
    const mobCc = mobNumber ? this.state.mobCc : '';
    const altMobCc = altMobNumber ? this.state.altMobCc : '';
    const phRegex = /^\d{10}$/;
    const emailIdVld = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[\.]{1}[a-zA-Z]{2,5}$/;
    if (!custName) {
      this.setState({ errorMessage: 'Full Name is Required' });
    } else if (!displayName) {
      this.setState({ errorMessage: 'Short Name is Required' });
    } else if (!primaryType) {
      this.setState({ errorMessage: 'Primary is Required' });
    } else if (primaryType === 'Mobile' && !mobNumber) {
      this.setState({ errorMessage: 'Mobile Number is Required' });
    } else if (mobNumber && !phRegex.test(mobNumber)) {
      this.setState({ errorMessage: 'Invalid Mobile Number' });
    } else if (altMobNumber && !phRegex.test(altMobNumber)) {
      this.setState({ errorMessage: 'Invalid Alternate Mobile Number' });
    } else if (!emailId) {
      this.setState({ errorMessage: 'Email is Required' });
    } else if (emailId && !emailIdVld.test(emailId)) {
      this.setState({ errorMessage: 'Invalid Email' });
    } else if (altEmailId && !emailIdVld.test(altEmailId)) {
      this.setState({ errorMessage: 'Invalid Alternate Email' });
    } else {
      this.setState({ isDisable: true });
      const reqObj = {
        recordId, custName, displayName, mobCc, mobNumber, emailId, primaryType, primary, altMobCc, altMobNumber, altEmailId, dob, gender
      };
      this.props.PostProfileDetailUpdate(reqObj, async (resObj) => {
        if (resObj && resObj.status == '200') {
          const cartData = resObj.resData.result.cart.vocCartItems;
          const cartItemsData = resObj.resData.result.cartItems;
          await localForage.setItem('cart', cartData);
          await localForage.setItem('cartItems', cartItemsData);
          await localForage.setItem('userInfo', resObj.resData.result.user);
          await localForage.setItem('address', resObj.resData.result.address);
          setTimeout(() => {
            this.setState({ isDisable: false, successMsg: 'Customer User Update Success' });
            hashHistory.push('/profile-details');
          }, 100);
        } else {
          setTimeout(() => {
            this.setState({ isDisable: false, errorMsg: 'Customer User Update Failed' });
          }, 100);
        }
      });
    }
  }
  render() {
    const { custName, displayName, primaryType, primary, mobCc, mobNumber, altMobCc, altMobNumber,
      emailId, altEmailId, dob, gender, errorMessage, isDisable } = this.state;
    return (
      <div className='wrapper'>
        <Header />
        <section className='container-fluid bread-crumbs-section '>
          <div className='row align-items-center'>
            <div className='col-sm-12 px-0'>
              <div className="dokan_only_breadcrumb">
                <div className="auto-container">
                  <div className="breadcrumbs nest">
                    <ul className="breadcrumb m-auto">
                      <li>
                        <a onClick={() => hashHistory.push('/home')} >
                          <i className="fa-solid fa-house me-2"></i>Home </a>
                      </li>
                      <li>
                        <a onClick={() => hashHistory.push('/addresses')}  >Addresses List</a>
                      </li>
                      <li className="active">Edit Profile</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='create-new-address-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row'>
              <Profile />
              <div className='col-sm-8'>
                <div className='card shadow mt-2'>
                  <div className='card-header bg-transparent '>
                    <div className='row mt-2'>
                      <div className='col-sm-7 col-10'>
                        <h3 className='sub-title'>Edit Profile</h3>
                      </div>
                    </div>
                  </div>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label for='form-label' className='form-label'> Full Name <span className='text-danger'>*</span></label>
                          <input type='text' className='form-control' placeholder='Full Name' value={custName}
                            onChange={(e) => this.setState({ custName: e.target.value, errorMessage: '' })} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label for='form-label' className='form-label'>Display Name <span className='text-danger'>*</span></label>
                          <input type='text' className='form-control' value={displayName} placeholder='Display Name'
                            onChange={(e) => this.setState({ displayName: e.target.value, errorMessage: '' })} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Primary<span className='text-danger'>*</span></label>
                          <select className='form-select form-select-md' value={primaryType}
                            onChange={this.handlePrimaryType}>
                            <option value='Email'>Email</option>
                            <option value='Mobile'>Mobile</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label for='txtMobile' className='form-label'>Mobile # {primaryType == 'Mobile' && <span className='text-danger'>*</span>}</label>
                          <div className='d-flex'>
                            <select className='w-auto bg-light form-select' value={mobCc}
                              onChange={(e) => this.setState({ mobCc: e.target.value, primary: (primaryType == 'Mobile' ? e.target.value + mobNumber : primary) })}>
                              {MobCountryCodes.map((mcc, i) => <option key={i} value={mcc}>{mcc}</option>)}
                            </select>
                            <input type='text' className='form-control' value={mobNumber} placeholder='Mobile Number' maxLength='10'
                              onChange={(e) => this.setState({ mobNumber: e.target.value, primary: (primaryType == 'Mobile' ? mobCc + e.target.value : primary), errorMessage: '' })} />
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='txtMobile form-label'>Alternate Mobile #</label>
                          <div className='d-flex'>
                            <select className='w-auto bg-light form-select' value={altMobCc}
                              onChange={(e) => this.setState({ altMobCc: e.target.value })}>
                              {MobCountryCodes.map((mcc, i) => <option key={i} value={mcc}>{mcc}</option>)}
                            </select>
                            <input type='text' className='form-control'
                              onChange={(e) => this.setState({ altMobNumber: e.target.value })}
                              value={altMobNumber} placeholder='Alternate MobileNumber' maxLength='10' />
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Email <span className='text-danger'>*</span></label>
                          <input type='text' value={emailId} className='form-control' placeholder='Email'
                            onChange={(e) => this.setState({ emailId: e.target.value, primary: (primaryType == 'Email' ? e.target.value : primary), errorMessage: '' })} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Alternate Email </label>
                          <input type='text' value={altEmailId} className='form-control' placeholder='Alternate Email'
                            onChange={(e) => this.setState({ altEmailId: e.target.value })} />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='form-group date-picker'>
                          <label className='form-label'>Date of Birth</label>
                          <input type='date' className='form-control'
                            value={dob} onChange={(e) => this.setState({ dob: e.target.value })} max={moment().format('YYYY-MM-DD')} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3 '>
                          <label className='form-label'>Gender</label>
                          <select className='form-select form-select-md form-control' value={gender}
                            onChange={(e) => this.setState({ gender: e.target.value })}>
                            <option value=''>Select Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                          </select>
                        </div>
                      </div>
                      <center>
                        <span className='text-danger'>{errorMessage}</span>
                        <br />
                        <button type='button' className='btn btn-outline-primary' disabled={isDisable} onClick={this.handleEdit}>Submit</button> &nbsp;
                        <button className='btn btn-danger' onClick={() => hashHistory.push('/profile-details')}>Back</button>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CommonToaster errorMsg={this.state.errorMsg} successMsg={this.state.successMsg} warnMsg={this.state.warnMsg} />
        <FooterComponent />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostProfileDetailUpdate: (body, callback) => dispatch(PostProfileDetailUpdate(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(ProfileEditComponent);
