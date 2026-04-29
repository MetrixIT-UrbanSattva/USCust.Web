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
import hashHistory from '../../hashHistory';
import { ToastContainer, toast } from 'react-toastify';
import localForage from '../../hooks/localForage';
import { connect } from 'react-redux';
import { PostCustSuppCreate } from '../../actions/profile/ProfileDetailAction';

const ipData = {
  "ip": "183.82.120.68",
  "network": "183.82.120.0/21",
  "version": "IPv4",
  "city": "Hyderabad",
  "region": "Telangana",
  "region_code": "TG",
  "country": "IN",
  "country_name": "India",
  "country_code": "IN",
  "country_code_iso3": "IND",
  "country_capital": "New Delhi",
  "country_tld": ".in",
  "continent_code": "AS",
  "in_eu": false,
  "postal": "500072",
  "latitude": 17.411,
  "longitude": 78.4487,
  "timezone": "Asia/Kolkata",
  "utc_offset": "+0530",
  "country_calling_code": "+91",
  "currency": "INR",
  "currency_name": "Rupee",
  "languages": "en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc",
  "country_area": 3287590,
  "country_population": 1352617328,
  "asn": "AS18209",
  "org": "Atria Convergence Technologies pvt ltd"
};
class SupportCreateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uName: '',
      uEmail: '',
      mobNumber: '',
      service: '',
      userMsg: '',
      custSupNotes: '',
      successMsg: '',
      errorMessage: '',
      errMsg: '',
      authObj: {},
      ip: '',
      ipa: '',
      ipv: ''
    }
  }

  componentDidMount = () => {
    this.createSupport()
  }

  createSupport = async () => {
    // fetch(config.ipAddressApi)
    //   .then(response => response.json())
    //   .then(data => {
    //     landingScreen(data);
    //   }).catch(error => { });
    const logObj = await localForage.getItem('userInfo');
    const authObj = logObj && logObj.value || {};
    this.setState({ authObj });
    this.landingScreen(ipData);
  }

  handleChangeRegard = (e) => {
    const service = e.target.value;
    this.setState({ service, errMsg: '' });
  }

  hadnleSubmit = async () => {
    const ipDat = this.landingScreen(ipData);
    const { uName, mobNumber, custSupNotes, userMsg, uEmail, service, authObj } = this.state;
    if (!uName) {
      this.setState({ errMsg: 'Full Name is required' });
    } else if (!mobNumber) {
      this.setState({ errMsg: 'Mobile Number is required' });
    } else if (!userMsg) {
      this.setState({ errMsg: 'Message is required' });
    } else if (!service) {
      this.setState({ errMsg: 'Service is required' });
    } else {
      const reqObj = {
        custName: uName,
        custSupType: service,
        custSupMsg: userMsg,
        custMobNum: mobNumber,
        custSupNotes,
        ip: ipDat.ip,
        ipv: ipDat.ipv,
        ipa: ipDat.ip,
        custEmail: uEmail,
        userType: authObj ? 'Account User' : 'Guest User'
      }
      this.props.PostCustSuppCreate(reqObj, (resObj) => {
        if (resObj && resObj.status == '200') {
          toast.success('Support Created Successfully');
          setTimeout(() => {
            hashHistory.push('/support');
          }, 1000);
        } else {
          setTimeout(() => {
          }, 3000);
          toast.error('Support not created');
        }
      })
    }
  }

  landingScreen = (data) => {
    return {
      ip: data.ip,
      ipv: data.version,
      ipa: data.ip
    }
  }

  render() {
    const { uName, mobNumber, uEmail, service, userMsg, errMsg, custSupNotes, authObj } = this.state;
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
                      <h3 className='sub-title'>Help & Support</h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                    <div className='row justify-content-between'>
                      <div className='row'>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label for='form-label' className='form-label'> Full Name <span className='text-danger'>*</span></label>
                            <input type='text' className='form-control' placeholder='Full Name' value={uName}
                              onChange={(e) => this.setState({ uName: e.target.value, errMsg: '' })} />
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label className='form-label'>Mobile Number<span className='text-danger'>*</span></label>
                            <div className='d-flex'>
                              <input type='text' className='form-control' placeholder='Mobile Number' value={mobNumber} onChange={(e) => this.setState({ mobNumber: e.target.value, errMsg: '' })} maxLength='10' />
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-4'>
                          <div className='mb-3'>
                            <label for='form-label' className='form-label'> Email</label>
                            <input type='text' className='form-control' placeholder='Email' value={uEmail}
                              onChange={(e) => this.setState({ uEmail: e.target.value, errMsg: '' })} />
                          </div>
                        </div>
                        <div className='col-sm-8'>
                          <div className='mb-3'>
                            <label for='form-label' className='form-label'> Message <span className='text-danger'>*</span></label>
                            <input type='text' className='form-control' placeholder='Message' value={userMsg}
                              onChange={(e) => this.setState({ userMsg: e.target.value, errMsg: '' })} />
                          </div>
                        </div>
                        <div className='mb-3'>
                          <label for='form-label' className='form-label'>Services you really want:<span className='text-danger'>*</span></label>
                          <select className='form-control' value={service} onChange={this.handleChangeRegard}>
                            <option value=''>Select </option>
                            {!authObj ? <option value='Login'>Login</option> : ''}
                            <option value='Place Order'>Place Order</option>
                            <option value='Payments'>Payments</option>
                            <option value='Tracking-order'>Order Tracking</option>
                            <option value='Delivery-issue'>Delivery issue</option>
                            <option value='Sales-order'>Sales-order</option>
                            <option value='Others'>Others</option>
                          </select>
                        </div>
                        {service == 'Others' ? <input type='text' placeholder='Enter any text' value={custSupNotes} onChange={(e) => this.setState({ custSupNotes: e.target.value })} /> : null}
                      </div>
                      <div className='text-center'>
                        <p className='text-danger'>{errMsg}</p>
                      </div>
                      <div className='row mt-3 d-flex'>
                        <div className='text-center justify-content-center'>
                          <button className='btn btn-success' onClick={this.hadnleSubmit}>Submit</button> &nbsp;
                          <button className='btn btn-danger' onClick={() => hashHistory.push('/support')}>Back</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer
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
        <FooterComponent />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDistachToProps = (dispatch) => ({
  PostCustSuppCreate: (body, cb) => dispatch(PostCustSuppCreate(body, cb)),
});
export default connect(mapStateToProps, mapDistachToProps)(SupportCreateComponent);