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
import Countries from '../../../public/data/Countries.json';
import CountryStates from '../../../public/data/CountryStates.json';
import StateDistricts from '../../../public/data/StateDistricts.json';
import DistrictsAreaLocalities from '../../../public/data/DistrictAreaLocalities.json';
import { PutCustAdrsUpdate, PostCustAdrsView } from '../../actions/Addresses/CustAdrsActions';
import CommonToaster from '../../containers/CommonToaster';

class EditAddressComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
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
      errorMsg: '',
      stateValue: '',
      districtValue: '',
      country: '',
      countryCode: '',
      countryValue: '',
      isDefault: false,
      initialData: {},
      states: [],
      disable: true,
      isDisable: false,
      errorMessage: '',
      successMsg: '',
      warnMsg: '',
      selectedOption: '',
      showOtherInput: false,
      otherLocation: ''
    }
  }
  componentDidMount = () => {
    this.postCustAdrsView(this.state.id);
  }
  postCustAdrsView = (id) => {
    this.props.PostCustAdrsView(id, (resObj) => {
      if (resObj.status == '200') {
        const res = resObj.resData.result;
        let initialData = this.setData(res);
        let countryValue = res.countryCode + '$' + res.country;
        let stateValue = res.stateCode + '$' + res.state;
        const districts = StateDistricts[res.stateCode] || [];
        let districtValue = res.districtCode + '$' + res.district;
        let mandals = DistrictsAreaLocalities[res.districtCode] || [];
        this.setState({ ...initialData, initialData, countryValue, stateValue, districtValue, districts, mandals })
      }
    })
  }
  setData = (resObj) => {
    const selectedOption = resObj.locationName == 'Home' ? 'Home' : resObj.locationName == 'Office' ? 'Office' : 'Other';
    let showOtherInput = selectedOption === 'Other' ? true : false;
    let otherLocation = selectedOption === 'Other' ? resObj.locationName : ''
    return {
      selectedOption,
      showOtherInput,
      otherLocation,
      contactName: resObj.contactName,
      countryMobCode: resObj.contactMobCC,
      contactMobNumber: resObj.contactMobNumber,
      landmark: resObj.landmark,
      pincode: resObj.pincode,
      country: resObj.country,
      stateValue: resObj.state,
      districtValue: resObj.district,
      mandal: resObj.mandal,
      village: resObj.village,
      houseNumber: resObj.houseNumber,
      street: resObj.street,
      isDefault: resObj.isDefault,
    }
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
    this.setState({ countryValue, countryCode: countryData[1], country: countryData[0] })

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
  updateAddress = () => {
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
        id: this.state.id,
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
        state: stateData[1] ? stateData[1] : "",
        stateCode: stateData[0] ? stateData[0] : "",
        country: countryData[1] ? countryData[1] : '',
        countryCode: countryData[0] ? countryData[0] : '',
        isDefault: this.state.isDefault
      }
      const updatedData = {
        locationName: this.state.locationName,
        contactName: this.state.contactName,
        countryMobCode: this.state.countryMobCode,
        contactMobNumber: this.state.contactMobNumber,
        landmark: this.state.landmark,
        pincode: this.state.pincode,
        country: countryData[1] ? countryData[1] : '',
        stateValue: stateData[1] ? stateData[1] : "",
        districtValue: distrctisData[1] ? distrctisData[1] : '',
        mandal: this.state.mandal,
        village: this.state.village,
        houseNumber: this.state.houseNumber,
        street: this.state.street,
        isDefault: this.state.isDefault
      }
      this.setState({ isDisable: true })
      if (JSON.stringify(updatedData) != JSON.stringify(this.state.initialData)) {
        this.props.PutCustAdrsUpdate(reqBody, (resObj) => {
          if (resObj.status == '200') {
            this.setState({ successMsg: 'Address Updated Successfully' });
            setTimeout(() => {
              this.setState({ isDisable: false });
              hashHistory.push('/addresses');
            }, 3000);
          } else {
            setTimeout(() => {
              this.setState({ isDisable: false });
            }, 3000);
            this.setState({ errorMessage: 'Address Update failed' });
          }
        });
      } else {
        setTimeout(() => {
          this.setState({ isDisable: false });
        }, 3000);
        this.setState({ warnMsg: 'There are no changes' });
      }
    }
  }
  setDefaultChange = (e) => {
    this.setState({ isDefault: e.target.checked, disable: !this.state.disable });
  }
  handleOptionChange = (e) => {
    const showOtherInput = e.target.value === "Other" ? true : false;
    this.setState({ selectedOption: e.target.value, showOtherInput });
  };
  render() {
    const { locationName, contactName, countryMobCode, contactMobNumber, houseNumber, street, landmark, pincode, village, isDefault, otherLocation, errorMsg } = this.state;
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
                      <li className="active">Edit Address</li>
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
                        <h3 className='sub-title'>Edit Address</h3>
                      </div>
                    </div>
                  </div>
                  <div className='card-body p-4'>
                    <div className='row'>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Contact Person <span className='required-field'>*</span></label>
                          <input type='text' className='form-control' placeholder='Contact Person' value={contactName} onChange={(e) => this.setState({ contactName: e.target.value, errorMsg: '' })} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Mobile No(#) <span className='required-field'>*</span></label>
                          <div className='d-flex'>
                            <select className="form-control border-left-0" style={{ width: 'auto' }} value={countryMobCode} onChange={(e) => this.setState({ countryMobCode: e.target.value })}>
                              {Countries.map((data, i) => {
                                return (
                                  <option key={i} value={data.mobCC}>{data.mobCC}</option>
                                )
                              })}
                            </select>
                            <input type='text' className='form-control' placeholder='Mobile No(#)' maxLength='10' value={contactMobNumber} onChange={(e) => this.setState({ contactMobNumber: e.target.value, errorMsg: '' })} onKeyPress={this.handleNumerical} />
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>House No / Flat no / Building Name <span className='required-field'>*</span></label>
                          <input type='text' className='form-control' placeholder='House No / Flat no / Building Name' value={houseNumber} onChange={(e) => this.setState({ houseNumber: e.target.value, errorMsg: '' })} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Street / Locality <span className='required-field'>*</span></label>
                          <input type='text' className='form-control' placeholder='Street / Locality' value={street} onChange={(e) => this.setState({ street: e.target.value, errorMsg: '' })} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Landmark </label>
                          <input type='text' className='form-control' placeholder='Landmark' value={landmark} onChange={(e) => this.setState({ landmark: e.target.value, errorMsg: '' })} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Country <span className='required-field'>*</span></label>
                          <select className="form-control" id="stateName" autoFocus value={this.state.countryValue} onChange={this.handleChangeCountry} >
                            <option value="">Select Country</option>
                            {Countries.map((data, i) => <option key={i} value={data.code + '$' + data.value}>{data.value}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Zip/Pincode <span className='required-field'>*</span></label>
                          <input type='text' className='form-control' placeholder='Zip/Pincode ' maxLength={6} value={pincode} onChange={(e) => this.setState({ pincode: e.target.value, errorMsg: '' })} onKeyPress={this.handleNumerical} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>State <span className='required-field'>*</span></label>
                          <select className="form-control" id="stateName" autoFocus value={this.state.stateValue} onChange={this.handleChangeState} >
                            <option value="">Select State</option>
                            {(CountryStates.IND).map((data, i) => <option key={i} value={data.value + '$' + data.label}>{data.label}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>District <span className='required-field'>*</span></label>
                          <select className="form-control" id="districtName" placeholder="Enter City" maxLength='100' onChange={this.handleChangeCity} value={this.state.districtValue} >
                            <option value="">Select City / District</option>
                            {this.state.districts.map((data, i) => <option key={i} value={data.value + '$' + data.label}>{data.label}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Mandal <span className='required-field'>*</span></label>
                          <select className="form-control" id="cityName" placeholder="AreaLocality" maxLength='100' onChange={this.handleChangeAreaLocality} value={this.state.mandal} >
                            <option value="">Select  Mandal</option>
                            {this.state.mandals.map((data, i) => <option key={i} value={data.value}>{data.label}</option>)}
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Area/Village <span className='required-field'>*</span></label>
                          <input type='text' className='form-control' placeholder='Area/Village' value={village} onChange={(e) => this.setState({ village: e.target.value, errorMsg: '' })} />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <label className='form-label'>Location Name <span className='required-field'>*</span></label>
                        <div className='mb-3'>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadio" id="exampleRadio1" value="Home" checked={this.state.selectedOption === "Home"} onChange={this.handleOptionChange} />
                            <label className="form-check-label" htmlFor="exampleRadio1">Home</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadio" id="exampleRadio2" value="Office" checked={this.state.selectedOption === "Office"} onChange={this.handleOptionChange} />
                            <label className="form-check-label" htmlFor="exampleRadio2">Office</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="exampleRadio" id="exampleRadio3" value="Other" checked={this.state.selectedOption === "Other"} onChange={this.handleOptionChange} />
                            <label className="form-check-label" htmlFor="exampleRadio3">Other</label>
                          </div>
                        </div>
                      </div>
                      {this.state.showOtherInput && <div className='col-sm-4'>
                        <div className='mb-3'>
                          <label className='form-label'>Other <span className='required-field'>*</span></label>
                          <input type='text' className='form-control' placeholder='Home, Office, Work ..' value={otherLocation} onChange={(e) => this.setState({ otherLocation: e.target.value, errorMsg: '' })} />
                        </div>
                      </div>}
                      <div className='row d-flex justify-content between'>
                        <div className='col-sm-6'>
                          <div className="form-check mt-4 pt-2">
                            <input className="form-check-input" type="checkbox" value={isDefault} disabled={isDefault === true ? this.state.disable : !this.state.disable} checked={isDefault} onChange={(e) => this.setDefaultChange(e)} />
                            <label className="form-check-label text-primary" >
                              Set as default address
                            </label>
                          </div>
                        </div>
                      </div>
                      <p className='required-center'>{errorMsg}</p>
                      <div className='col-sm-12 text-center mt-3 pb-3'>
                        <button className='btn btn-success px-4' disabled={this.state.isDisable} onClick={this.updateAddress}>Update Address</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CommonToaster errorMsg={this.state.errorMessage} successMsg={this.state.successMsg} warnMsg={this.state.warnMsg} />
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
    PutCustAdrsUpdate: (body, callback) => dispatch(PutCustAdrsUpdate(body, callback)),
    PostCustAdrsView: (id, callback) => dispatch(PostCustAdrsView(id, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(EditAddressComponent);
