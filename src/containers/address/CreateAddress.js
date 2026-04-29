/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import hashHistory from '../../hashHistory';
import localforage from '../../hooks/localForage';
import StateDistricts from '../../../public/data/StateDistricts.json';
import DistrictsAreaLocalities from '../../../public/data/DistrictAreaLocalities.json';
import CreateAddressComponent from '../../components/address/CreateAddressComponent';
import { PostCustAdrsCreate } from '../../actions/Addresses/CustAdrsActions';
import CommonToaster from '../CommonToaster';
import CheckoutAdrsComponent from '../../components/products/CheckoutAdrsComponent';
import CheckoutAdrsCreateComponent from '../../components/products/CheckoutAdrsCreateComponent';

class CreateAddress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      districts: [],
      mandals: [],
      locationName: '',
      contactName: '',
      contactMobNumber: '',
      houseNumber: '',
      street: '',
      landmark: '',
      pincode: '',
      mandal: '',
      village: '',
      countryMobCode: '+91',
      stateValue: '',
      districtValue: '',
      countryValue: '',
      isDefault: true,
      errorMsg: '',
      value: '',
      disable: true,
      isDisable: false,
      errorMessage: '',
      successMsg: '',
      userInfo: {},
      selectedOption: 'Home',
      showOtherInput: false,
      otherLocation: '',
      modalOpen: false,
    }
  }
  async componentDidMount() {
    this.getAuthObj();
  }
  setStateData = (data) => {
    this.setState({ ...data })
  };
  getAuthObj = async () => {
    const userData = await localforage.getItem('userInfo');
    this.setState({ contactMobNumber: userData.value.mobNum, contactName: userData.value.fullName });
  }
  handleNumerical = (event) => {
    if ((event.charCode >= 32 && event.charCode < 48 && event.charCode !== 40 &&
      event.charCode !== 41 && event.charCode !== 43 && event.charCode !== 45) ||
      (event.charCode > 57 && event.charCode < 127)) {
      event.preventDefault();
    }
  }
  handleChangeCountry = (event) => {
    let countryValue = event.target.value;
    let countryData = countryValue.split('$');
    this.setState({ countryData, countryValue });
  }
  handleChangeState = (event) => {
    let stateValue = event.target.value;
    let stateData = stateValue.split('$');
    let districts = StateDistricts[stateData[0]] || [];
    this.setState({ errorMsg: '', stateValue, districts, districtValue: '', mandal: '', mandals: [] });
    event.preventDefault();
  }
  handleChangeCity = (event) => {
    let districtValue = event.target.value;
    let districtData = districtValue.split('$');
    let mandals = DistrictsAreaLocalities[districtData[0]] || [];
    this.setState({ errorMsg: '', mandals, districtValue, mandal: '' });
    event.preventDefault();
  }
  handleChangeAreaLocality = (event) => {
    let mandal = event.target.value;
    this.setState({ errorMsg: '', mandal });
    event.preventDefault();
  }
  createAddress = async () => {
    const { locationName, contactName, contactMobNumber, houseNumber, street, pincode, mandal, village, otherLocation } = this.state;
    const phRegex = /^\d{10}$/;
    let countryData = this.state.countryValue.split('$');
    let stateData = this.state.stateValue.split('$');
    let distrctisData = this.state.districtValue.split('$');
    if (this.state.selectedOption === 'Other' && !otherLocation) {
      this.setState({ errorMsg: 'Location name is required' });
    } else if (!contactName) {
      this.setState({ errorMsg: 'Contact Person is required' });
    } else if (!contactMobNumber) {
      this.setState({ errorMsg: 'Mobile number is required' });
    } else if (contactMobNumber && !phRegex.test(contactMobNumber)) {
      this.setState({ errorMsg: 'Invalid Mobile number' });
    } else if (!houseNumber) {
      this.setState({ errorMsg: 'House number is required' });
    } else if (!street) {
      this.setState({ errorMsg: 'Street is required' });
    } else if (!pincode) {
      this.setState({ errorMsg: 'Pincode is required' });
    } else if (!mandal) {
      this.setState({ errorMsg: 'Mandal is required' });
    } else if (!village) {
      this.setState({ errorMsg: 'Area is required' });
    } else {
      const reqBody = {
        locationName: this.state.selectedOption === 'Other' ? this.state.otherLocation : this.state.selectedOption,
        contactName: this.state.contactName,
        contactMobCC: this.state.countryMobCode,
        contactMobNumber: this.state.contactMobNumber,
        cMobCcNum: this.state.countryMobCode + this.state.contactMobNumber,
        landmark: this.state.landmark,
        houseNumber: this.state.houseNumber,
        street: this.state.street,
        village: this.state.village,
        mandal: this.state.mandal,
        district: distrctisData[1] ? distrctisData[1] : '',
        districtCode: distrctisData[0] ? distrctisData[0] : '',
        pincode: this.state.pincode,
        state: stateData[1] ? stateData[1] : '',
        stateCode: stateData[0] ? stateData[0] : '',
        country: countryData[1] ? countryData[1] : '',
        countryCode: countryData[0] ? countryData[0] : '',
        isDefault: this.state.isDefault
      }
      this.setState({ isDisable: true });
      this.props.PostCustAdrsCreate(reqBody, async (resObj) => {
        if (resObj.status == '200') {
          this.setState({ successMsg: 'Address Created Successfully' });
          {
            this.props.url == 'chechOut' ? this.props.createModalClose() :
            setTimeout(() => {
              this.setState({ isDisable: false });
              hashHistory.push('/addresses')
            }, 3000);
          }
        } else {
          this.setState({ errorMessage: 'Address Creation Failed' });
          setTimeout(() => {
            this.setState({ isDisable: false });
          }, 3000);
        }
      })
    }
  }
  handleOptionChange = (e) => {
    const showOtherInput = e.target.value === "Other" ? true : false;
    this.setState({ selectedOption: e.target.value, showOtherInput });
  };
  render() {
    return (
      <div>
        {this.props.url == 'chechOut' ?
          <CheckoutAdrsCreateComponent state={this.state} handleNumerical={this.handleNumerical} handleChangeCountry={this.handleChangeCountry} handleChangeState={this.handleChangeState}
            handleChangeCity={this.handleChangeCity} handleChangeAreaLocality={this.handleChangeAreaLocality} createAddress={this.createAddress} setStateData={this.setStateData}
            handleOptionChange={this.handleOptionChange} modalOpen={this.state.modalOpen}
          /> :
          <>
            <CreateAddressComponent state={this.state} handleNumerical={this.handleNumerical} handleChangeCountry={this.handleChangeCountry} handleChangeState={this.handleChangeState}
              handleChangeCity={this.handleChangeCity} handleChangeAreaLocality={this.handleChangeAreaLocality} createAddress={this.createAddress} setStateData={this.setStateData}
              handleOptionChange={this.handleOptionChange} />
            <CommonToaster errorMsg={this.state.errorMessage} successMsg={this.state.successMsg} />
          </>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    LoginReducer: state.LoginReducer
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostCustAdrsCreate: (body, callback) => dispatch(PostCustAdrsCreate(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(CreateAddress);