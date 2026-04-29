/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import config from '../../../config/config.json';
import localForage from '../../hooks/localForage';
import StateDistricts from '../../../public/data/StateDistricts.json';
import { PostCreateCustsGuests } from '../../actions/landing-screen/LandingScreenActions';
import hashHistory from '../../hashHistory';
import { PostCustAdrsList, ResetAddressData } from '../../actions/Addresses/CustAdrsActions';
import { SetCartData } from '../../actions/cart-items/CartItemsActions';
import flshLogo from '../../assets/images/flash-logo.png';

import './css/landing.css';
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

const LandingScreenComponent = (props) => {

  useEffect(() => {
    validateUser();
    const device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (device) {
      hashHistory.push('/home');
    }
  }, []);

  const validateUser = async () => {
    const accesstokenData = await localForage.getItem('accesstoken');
    const accesstoken = accesstokenData.value ? accesstokenData.value : '';
    const userData = await localForage.getItem('userInfo');
    const userInfo = userData.value ? userData.value : '';
    if (!accesstoken || !userInfo) {
      createGuest();
    }
  }

  const createGuest = () => {
    // fetch(config.ipAddressApi)
    //   .then(response => response.json())
    //   .then(data => {
    //     landingScreen(data);
    //   }).catch(error => { });
    landingScreen(ipData);
  }
  const landingScreen = async (defaultAdrsData) => {
    const dData = data(defaultAdrsData);
    const { region_code, city } = defaultAdrsData;
    const code = region_code === 'TG' ? 'TS' : region_code;
    const satetsData = StateDistricts[code];
    const cityCodeData = satetsData && satetsData.length > 0 && satetsData.filter((cityObj) => cityObj.distName === city);
    const reqBody = {
      ...defaultAdrsData, region_code: code, cityCode: cityCodeData[0].distCode,
    }
    props.PostCreateCustsGuests(reqBody, async (resObj) => {
      if (resObj.status == '200') {
        const cartData = resObj.resData.result.cart.vocCartItems;
        const cartItemsData = resObj.resData.result.cartItems
        await localForage.setItem('cart', cartData);
        await localForage.setItem('cartItems', cartItemsData);
        await localForage.setItem('userInfo', resObj.resData.result.user);
        const defaultAdrs = resObj.resData.result.address._id ? resObj.resData.result.address : [dData]
        await localForage.setItem('address', defaultAdrs);
        props.ResetAddressData(defaultAdrs);
        props.SetCartData(cartData, cartItemsData);
      }
    });
  }
  const data = (defaultAdrsData) => {
    return {
      jilla: defaultAdrsData.city,
      pincode: defaultAdrsData.postal,
      rastr: defaultAdrsData.region,
      rastrCode: defaultAdrsData.region_code,
      desam: defaultAdrsData.country_name,
      desamCode: defaultAdrsData.country_code_iso3,
      isDefault: true
    }
  }

  return (
    <div className='landing-screen'>
      <a onClick={() => hashHistory.push('/home')} >
        <img src={flshLogo} width={200} />
      </a>
      <h2 className='text-white'>Urban Sattva</h2>
    </div>
  )
}

const mapStateToProps = () => ({});
const mapDistachToProps = (dispatch) => ({
  PostCreateCustsGuests: (body, callback) => dispatch(PostCreateCustsGuests(body, callback)),
  PostCustAdrsList: (callback) => dispatch(PostCustAdrsList(callback)),
  ResetAddressData: (data) => dispatch(ResetAddressData(data)),
  SetCartData: (cartData, cartItemsData) => dispatch(SetCartData(cartData, cartItemsData)),
});
export default connect(mapStateToProps, mapDistachToProps)(LandingScreenComponent);