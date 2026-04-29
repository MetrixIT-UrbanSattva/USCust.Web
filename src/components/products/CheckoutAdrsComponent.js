/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */
import React, { Component } from 'react'
import Modal from 'react-modal';
import { connect } from 'react-redux';
import localforage from '../../hooks/localForage';

import CheckoutAdrsEditComponent from '../../components/products/CheckoutAdrsEditComponent';
import StateDistricts from '../../../public/data/StateDistricts.json';
import DistrictsAreaLocalities from '../../../public/data/DistrictAreaLocalities.json';
import { PutCustAdrsUpdate, PostCustAdrsCreate } from '../../actions/Addresses/CustAdrsActions';
import CreateAddress from '../../containers/address/CreateAddress';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '90%'
  },
};
Modal.setAppElement('#root');

class CheckoutAdrsComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false,
      adrsData: {},
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
      otherLocation: '',
      modalOpen: false
    }
  }
  async componentDidMount() {
    this.getAuthObj();
  }
  getAuthObj = async () => {
    const userData = await localforage.getItem('userInfo');
    this.setState({ contactMobNumber: userData.value.mobNum, contactName: userData.value.fullName });
  }
  editAdrsClick = (adrsData) => {
    let data = this.setData(adrsData);
    let countryValue = adrsData.desamCode + '$' + adrsData.desam;
    let stateValue = adrsData.rastrCode + '$' + adrsData.rastr;
    let districts = StateDistricts[adrsData.rastrCode] || [];
    const jillaCode = adrsData.jillaCode === 'HYD' ? 'TSHYD' : adrsData.jillaCode
    let districtValue = jillaCode + '$' + adrsData.jilla;
    let mandals = DistrictsAreaLocalities[jillaCode] || [];
    this.setState({ isModalOpen: true, ...data, data, countryValue, stateValue, districts, districtValue, mandals });
  }
  setData = (resObj) => {
    const selectedOption = resObj.lName == 'Home' ? 'Home' : resObj.lName == 'Office' ? 'Office' : 'Other';
    let showOtherInput = selectedOption === 'Other' ? true : false;
    let otherLocation = selectedOption === 'Other' ? resObj.lName : ''
    return {
      id: resObj._id,
      selectedOption,
      showOtherInput,
      otherLocation,
      contactName: resObj.cName,
      countryMobCode: resObj.cMobCc,
      contactMobNumber: resObj.cMobNum,
      landmark: resObj.lmark,
      pincode: resObj.pincode,
      country: resObj.desam,
      stateValue: resObj.rastr,
      districtValue: resObj.jilla,
      mandal: resObj.mandal,
      village: resObj.vuru,
      houseNumber: resObj.intiNum,
      street: resObj.veedhi,
      isDefault: resObj.isDefault,
    }
  }

  setStateData = (data) => {
    this.setState({ ...data })
  };

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
      this.setState({ isDisable: true })
      this.props.PutCustAdrsUpdate(reqBody, (resObj) => {
        if (resObj.status == '200') {
          this.setState({ isDisable: false, isModalOpen: false });
          this.props.addressesList();
        } else {
          setTimeout(() => {
            this.setState({ isDisable: false });
          }, 3000);
        }
      });
    }
  }
  setDefaultChange = (e) => {
    this.setState({ isDefault: e.target.checked, disable: !this.state.disable });
  }
  handleOptionChange = (e) => {
    const showOtherInput = e.target.value === "Other" ? true : false;
    this.setState({ selectedOption: e.target.value, showOtherInput });
  };
  createModalClose = () => {
    this.setState({ modalOpen: false })
  }
  render() {
    const defaultAdrs = this.props.defaultAdrs;
    return (
      <div>
        {defaultAdrs.length > 0 && defaultAdrs.map((data, i) => {
          const houseNumber = data && data.intiNum ? data.intiNum + ', ' : '';
          const street = data && data.veedhi ? data.veedhi + ', ' : '';
          const village = data && data.vuru ? data.vuru + ', ' : '';
          const mandal = data && data.mandal ? data.mandal + ', ' : '';
          const dist = data && data.jilla ? data.jilla + ', ' : '';
          const state = data && data.rastr ? data.rastr + ', ' : '';
          const desam = data && data.desam ? data.desam + ', ' : '';
          const pincode = data && data.pincode
          const totalData = houseNumber + street + village + mandal + dist + state + desam + pincode;
          return (
            <div className='each-category-card my-3 me-3' key={i}>
              <div className='card-body m-2'>
                <div className='row'>
                  <div className='form-check col-sm-6 text-start'>
                    <label className="form-check-label " htmlFor="flexCheckChecked">
                      <strong>{data.lName}</strong>
                    </label>
                    <i className='fa fa-edit mx-3 text-secondary' onClick={() => this.editAdrsClick(data)} />
                  </div>
                  <div className='col-sm-6 text-end'>
                    <button onClick={() => this.setState({ modalOpen: true })} className='btn btn-outline-secondary btn-add-address-text'><span><i className='fa-solid fa-location-dot me-2 mt-1'></i></span>Add New Address </button>
                  </div>
                </div>
                <div className='contact-infor'>
                  <div className='d-flex'>
                    <i className='fa-solid fa-location-dot me-2 mt-1'></i>
                    <div>
                      <strong>Address :</strong>
                      <p className=' mt-3'>{totalData}</p>
                    </div>
                  </div>
                </div>
                <div className='contact-infor'>
                  <i className='fa-solid fa-phone me-2'></i>
                  <strong>Call Us</strong>
                  <p className='ms-3 mt-2'><a className=' ms-2 mobile-text'>{data.cName} | {data.cMobCcNum}</a></p>
                </div>
              </div>
            </div>
          )
        })}
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={() => this.setState({ isModalOpen: false })}
          style={customStyles}
        >
          <button onClick={() => this.setState({ isModalOpen: !this.state.isModalOpen })} className='btn btn-outline-danger btn-md modal-close-btn'>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <CheckoutAdrsEditComponent state={this.state} setDefaultChange={this.setDefaultChange} handleOptionChange={this.handleOptionChange} handleChangeCountry={this.handleChangeCountry} handleChangeState={this.handleChangeState}
            handleChangeCity={this.handleChangeCity} handleChangeAreaLocality={this.handleChangeAreaLocality} updateAddress={this.updateAddress} setStateData={this.setStateData} defaultAdrs={defaultAdrs} handleNumerical={this.handleNumerical} />
        </Modal>
        {/* create */}
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={() => this.setState({ modalOpen: false })}
          style={customStyles}
        >
          <button onClick={() => this.setState({ modalOpen: !this.state.modalOpen })} className='btn btn-outline-danger btn-md modal-close-btn'>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <CreateAddress url='chechOut' createModalClose={this.createModalClose} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDistachToProps = (dispatch) => {
  return {
    PutCustAdrsUpdate: (body, callback) => dispatch(PutCustAdrsUpdate(body, callback)),
    PostCustAdrsCreate: (body, callback) => dispatch(PostCustAdrsCreate(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(CheckoutAdrsComponent);