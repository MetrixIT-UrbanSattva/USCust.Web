/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './css/LoginStyles.css';
import { PostUserLogin, PostUserOtpLogin } from '../../actions/LoginActions';
import { PostCustsGuestOtp, PostCustsGuestVerifyOtp } from '../../actions/landing-screen/LandingScreenActions';
import { PostCartItemsList, SetCartData } from '../../actions/cart-items/CartItemsActions';
import { PostCustAdrsList } from '../../actions/Addresses/CustAdrsActions';
import { PostGetWishlistItems } from '../../actions/wish-list/WishlistAction';
import localforage from '../../hooks/localForage';
import localForage from '../../hooks/localForage';
import StateDistricts from '../../../public/data/StateDistricts.json';
import config from '../../../config/config.json';

const numericRegex = /^[0-9]{1}$/;
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

class UserLoginComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOTP: true,
      mobileNumber: '',
      countryMobCode: '+91',
      otpNum: '',
      onesPlace: '',
      twosPlace: '',
      threesPlace: '',
      foursPlace: '',
      name: '',
      showNameInput: false,
      userInfo: {},
      seconds: 30,
      minutes: 0,
      timerValue: false,
      isDisable: false
    }
  }
  handleNumerical = (event) => {
    if ((event.charCode >= 32 && event.charCode < 48 && event.charCode !== 40 &&
      event.charCode !== 41 && event.charCode !== 43 && event.charCode !== 45) ||
      (event.charCode > 57 && event.charCode < 127)) {
      event.preventDefault()
    }
  }
  async componentDidMount() {
    const user = await localForage.getItem('userInfo');
    const userInfo = user.value || {};
    this.setState({ userInfo });
  }
  handleLoginSubmit = () => {
    const phRegex = /^\d{10}$/;
    if (!this.state.mobileNumber) {
      this.setState({ errorMsg: 'Please Enter Mobile Number' });
    } else if (!phRegex.test(this.state.mobileNumber)) {
      this.setState({ errorMsg: 'Please Enter Valid Mobile Number' });
    } else {
      const reqBody = {
        userId: this.state.countryMobCode + this.state.mobileNumber,
      }
      this.props.PostUserLogin(reqBody, (resObj) => {
        if (resObj.status == '200') {
          this.setState({ isOTP: false, otpNum: resObj.resData.otpNum });
          this.otpTimer();
        } else {
          this.setState({ showNameInput: true })
        }
      })
    }
  }
  otpTimer = () => {
    const interval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1, timerValue: true })
      }
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          clearInterval(interval);
          this.setState({ timerValue: false })
        } else {
          this.setState({ minutes: this.state.minutes - 1, seconds: 59 })
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }
  handleGuestLogin = () => {
    const phRegex = /^\d{10}$/;
    if (!this.state.mobileNumber) {
      this.setState({ errorMsg: 'Please Enter Mobile Number' });
    } else if (!phRegex.test(this.state.mobileNumber)) {
      this.setState({ errorMsg: 'Please Enter Valid Mobile Number' });
    } else if (!this.state.name) {
      this.setState({ errorMsg: 'Please Enter Your Name' });
    } else if (this.state.name && this.state.name.length < 3) {
      this.setState({ errorMsg: 'Name should be atleast 3 characters' });
    } else {
      const sName = this.state.name.split(' ')
      const reqBody = {
        mobileCode: this.state.countryMobCode,
        mobileNumber: this.state.mobileNumber,
        mobileCcNumber: this.state.countryMobCode + this.state.mobileNumber,
        primary: this.state.countryMobCode + this.state.mobileNumber,
        emailId: '',
        primaryType: "Mobile",
        name: this.state.name,
        shortName: sName[0]
      }
      this.props.PostCustsGuestOtp(reqBody, (resObj) => {
        if (resObj.status == '200') {
          this.setState({ isOTP: false, otpNum: resObj.resData.otpNum });
          this.otpTimer();
        }
      })
    }
  }
  handleOnesPlace = (e) => {
    const text = e.target.value;
    if (numericRegex.test(text) || !text) {
      this.setState({ onesPlace: text, errorMsg: '' });
      text.trim().length == 1 && this.secondTextInput.focus();
    }
  }

  handleTwosPlace = (e) => {
    const text = e.target.value;
    if (numericRegex.test(text) || !text) {
      this.setState({ twosPlace: text, errorMsg: '' });
      text.trim().length == 1 && this.thirdTextInput.focus();
    }
  }

  handleThreesPlace = (e) => {
    const text = e.target.value;
    if (numericRegex.test(text) || !text) {
      this.setState({ threesPlace: text, errorMsg: '' });
      text.trim().length == 1 && this.fourthTextInput.focus();
    }
  }
  handleFoursPlace = (e) => {
    const text = e.target.value;
    if (numericRegex.test(text) || !text) {
      this.setState({ foursPlace: text, errorMsg: '' });
      text.trim().length == 1 && this.verifyButtonInput.focus();
    }
  }
  handleOnesBackSpace = (event) => {
    if (event.key === 'Backspace') {
      this.firstTextInput.focus();
    }
  }
  handleTwosBackSpace = (event) => {
    if (event.key === 'Backspace') {
      this.state.twosPlace.length == 0 && this.firstTextInput.focus();
    }
  }
  handleThreesBackSpace = (event) => {
    if (event.key === 'Backspace') {
      this.state.threesPlace.length == 0 && this.secondTextInput.focus();
    }
  }
  handleFoursBackSpace = (event) => {
    if (event.key === 'Backspace') {
      this.state.foursPlace.length == 0 && this.thirdTextInput.focus();
    }
  }
  handleVerifyOtp = async () => {
    const { onesPlace, twosPlace, threesPlace, foursPlace } = this.state;
    const otpNumber = onesPlace + twosPlace + threesPlace + foursPlace;
    if (!otpNumber) {
      this.setState({ errorMsg: 'Please Enter OTP' });
    } else if (otpNumber.trim().length != 4) {
      this.setState({ errorMsg: 'OTP Should be 4 digits' });
    } else {
      // fetch(config.ipAddressApi)
      //   .then(response => response.json())
      //   .then(data => {
      //     this.handleVerifyOtpApiCall(data, otpNumber)
      //   }).catch(error => { });
      this.handleVerifyOtpApiCall(ipData, otpNumber);
    }
  }

  handleVerifyOtpApiCall = (defaultAdrsData, otpNumber) => {
    const { region_code, city } = defaultAdrsData;
    const code = region_code === 'TG' ? 'TS' : region_code;
    const satetsData = StateDistricts[code];
    const cityCodeData = satetsData && satetsData.length > 0 && satetsData.filter((cityObj) => cityObj.distName === city);
    const reqBody = {
      otpNum: otpNumber,
      ...defaultAdrsData,
      cityCode: cityCodeData[0].distCode,
      region_code: code
    }
    { this.state.showNameInput ? this.handleGuestVerifyOtp(reqBody) : this.handleUserVerifyOtp(reqBody) }
  }
  handleGuestVerifyOtp = async (reqBody) => {
    this.setState({ isDisable: true });
    this.props.PostCustsGuestVerifyOtp(reqBody, async (resObj) => {
      if (resObj.status == '200') {
        const cartData = resObj.resData.result.cart.vocCartItems;
        const cartItemsData = resObj.resData.result.cartItems
        toast.success('User Login Successfull');
        await localforage.removeItem('otptoken');
        await localForage.setItem('cart', cartData);
        await localForage.setItem('cartItems', cartItemsData);
        await localForage.setItem('userInfo', resObj.resData.result.user);
        await localForage.setItem('address', resObj.resData.result.address);
        this.props.SetCartData(cartData, cartItemsData);
        setTimeout(() => {
          this.setState({ isDisable: false });
          this.props.closeModal();
        }, 3000);
      } else if (resObj.status == '100') {
        this.setState({ isDisable: false, errorMsg: resObj.resData.message });
      }
    })
  }
  handleUserVerifyOtp = async (reqBody) => {
    this.setState({ isDisable: true });
    this.props.PostUserOtpLogin(reqBody, async (resObj) => {
      if (resObj.status == '200') {
        const cartData = resObj.resData.result.cart.vocCartItems;
        const cartItemsData = resObj.resData.result.cartItems
        this.props.PostCustAdrsList((resObj) => { })
        this.props.PostGetWishlistItems((resObj) => { })
        toast.success('User Login Successfull');
        await localforage.removeItem('otptoken');
        await localForage.setItem('cart', cartData);
        await localForage.setItem('cartItems', cartItemsData);
        await localForage.setItem('userInfo', resObj.resData.result.user);
        await localForage.setItem('address', resObj.resData.result.address);
        this.props.SetCartData(cartData, cartItemsData);
        setTimeout(() => {
          this.setState({ isDisable: false });
          this.props.closeModal();
        }, 3000);
      } else if (resObj.status == '100') {
        this.setState({ isDisable: false, errorMsg: resObj.resData.message })
      }
    })
  }
  resendOTP = () => {
    this.setState({ timerValue: true, seconds: 30, minutes: 0 })
    this.state.showNameInput ? this.handleGuestLogin() : this.handleLoginSubmit()
  }
  render() {
    const buttonLabel = this.state.showNameInput ? 'Send OTP' : 'Next';
    return (
      <div>
        <section className='login-section'>
          {this.state.isOTP
            ? <div className='col-sm-12 col-12 '>
              <div className='card border-0 '>
                <button onClick={this.props.closeModal} className='btn btn-outline-danger btn-md modal-close-btn'>
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <div className='card-header'>
                  <h1 className='title mb-3'> Log In </h1>
                  <p className='mb-0'>Please enter your mobile number to login</p>
                </div>
                <div className='card-body'>
                  <div className='mb-3'>
                    <label className='form-label'>Mobile#</label>
                    <div className='d-flex'>
                      <select className="form-control border-left-0" style={{ width: 'auto' }}>
                        <option>{this.state.countryMobCode}</option>
                      </select>
                      <input type='email' className='form-control' id='exampleFormControlInput1' placeholder='Mobile Number' value={this.state.mobileNumber} onChange={(e) => this.setState({ mobileNumber: e.target.value, errorMsg: '' })} onKeyPress={this.handleNumerical} maxLength='10' />
                    </div>
                  </div>
                  {!this.state.userInfo.userId && this.state.showNameInput && <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <div className='d-flex'>
                      <input type='text' className='form-control' id='exampleFormControlInput1' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value, errorMsg: '' })} />
                    </div>
                  </div>}
                  <div style={{ textAlign: 'center', color: 'red' }}>{this.state.errorMsg}</div>
                </div>
                <div className='card-footer'>
                  <button className='btn btn-success px-4 w-100' onClick={this.state.showNameInput ? this.handleGuestLogin : this.handleLoginSubmit}>{buttonLabel}</button>
                </div>
              </div>
            </div>
            : <div className='col-sm-12 col-12'>
              <div className='card border-0 '>
                <button onClick={this.props.closeModal} className='btn btn-outline-danger btn-md modal-close-btn'>
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <div className='card-header'>
                  <h1 className='title mb-3'> OTP </h1>
                  <p className='mb-0'>Please enter OTP {this.state.otpNum} sent to your Mobile {this.state.mobileNumber}</p>
                </div>
                <div className='card-body'>
                  <div className='row justify-content-center'>
                    <div className='col-2'>
                      <div className='mb-3'>
                        <input autoFocus type='text' className='form-control' id='exampleFormControlInput1' value={this.state.onesPlace} ref={(input) => { this.firstTextInput = input; }} onChange={this.handleOnesPlace} onKeyDown={this.handleOnesBackSpace} />
                      </div>
                    </div>
                    <div className='col-2'>
                      <div className='mb-3'>
                        <input type='text' className='form-control' id='exampleFormControlInput1' value={this.state.twosPlace} ref={(input) => { this.secondTextInput = input; }} onChange={this.handleTwosPlace} onKeyDown={this.handleTwosBackSpace} />
                      </div>
                    </div>
                    <div className='col-2'>
                      <div className='mb-3'>
                        <input type='text' className='form-control' id='exampleFormControlInput1' value={this.state.threesPlace} ref={(input) => { this.thirdTextInput = input; }} onChange={this.handleThreesPlace} onKeyDown={this.handleThreesBackSpace} />
                      </div>
                    </div>
                    <div className='col-2'>
                      <div className='mb-3'>
                        <input type='text' className='form-control' id='exampleFormControlInput1' value={this.state.foursPlace} ref={(input) => { this.fourthTextInput = input; }} onChange={this.handleFoursPlace} onKeyDown={this.handleFoursBackSpace} />
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', color: 'red' }}>{this.state.errorMsg}</div>
                </div>
                <div className="countdown-text d-flex justify-content-between mb-2">
                  {this.state.seconds > 0 || this.state.minutes > 0 || this.state.timerValue ? (
                    <p>
                      Time Remaining: {this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}:
                      {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
                    </p>
                  ) : (
                    <p>Didn't recieve code?</p>
                  )}
                  <button className='btn btn-danger' disabled={this.state.seconds > 0 || this.state.minutes > 0 && this.state.timerValue} onClick={this.resendOTP}>
                    Resend OTP
                  </button>
                </div>
                <div className='card-footer'>
                  <button disabled={this.state.isDisable} ref={(input) => { this.verifyButtonInput = input; }} className='btn btn-success px-4 w-100' onClick={this.handleVerifyOtp}>Verify OTP</button>
                </div>
              </div>
            </div>}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CartItemsReducer: state.CartItemsReducer
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostUserLogin: (body, callback) => dispatch(PostUserLogin(body, callback)),
    PostUserOtpLogin: (body, callback) => dispatch(PostUserOtpLogin(body, callback)),
    PostCartItemsList: (callback) => dispatch(PostCartItemsList(callback)),
    PostCustAdrsList: (callback) => dispatch(PostCustAdrsList(callback)),
    PostCustsGuestOtp: (body, callback) => dispatch(PostCustsGuestOtp(body, callback)),
    PostCustsGuestVerifyOtp: (body, callback) => dispatch(PostCustsGuestVerifyOtp(body, callback)),
    SetCartData: (cartData, cartItemsData) => dispatch(SetCartData(cartData, cartItemsData)),
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(UserLoginComponent);
