/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';

import hashHistory from '../../hashHistory';
import './css/ProfileStyles.css';
import apis from '../../../config/apis.json';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import localForage from '../../hooks/localForage';
import 'react-toastify/dist/ReactToastify.css';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';
import unnamed from '../../assets/images/unnamed.png'

import { PostCustAdrsList } from '../../actions/Addresses/CustAdrsActions';
import { PostGetWishlistItems } from '../../actions/wish-list/WishlistAction';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      src: '',
      atObj: '',
      imgPreview: '',
      profilePath: '',
      menuValue: '',
      showCrop: false,
      imageFileUrl: '',
      errorMessage: '',
      successMsg: '',
      show: true,
      show1: true,
      crop: { unit: '%', width: 50, height: 50 },
      imageFile: ''
    };
  }
  componentDidMount = () => {
    this.getUserData()
  }
  getUserData = async () => {
    const atObj = await localForage.getItem('userInfo');
    if (atObj.value.ppPath == '') {
      this.setState({ profilePath: '' });
    } else {
      const profilePath = atObj.value.ppPath;
      this.setState({ profilePath, show1: false });
    }
  }
  handleHome = () => {
    hashHistory.push('/home')
  }
  handleMyDetails = () => {
    hashHistory.push('/profile-details')
  }
  addressClick = () => {
    hashHistory.push('/addresses')
  }
  viewedProductsClick = () => {
    hashHistory.push('/viewed-products')
  }
  handleNotifications = () => {
    hashHistory.push('/notifications')
  }
  wishlist = () => {
    hashHistory.push('/wishlist')
  }
  monthBasket = () => {
    hashHistory.push('/m-basket')
  }
  handleSupport = () => {
    hashHistory.push('/support')
  }
  handleLegalandPolicies = () => {
    hashHistory.push('/policies')
  }
  handleLogout = async () => {
    await localForage.removeItem('accesstoken');
    await localForage.removeItem('userInfo');
    await localForage.removeItem('cart');
    await localForage.removeItem('cartItems');
    this.props.SetLoggedInUserDataRes({});
    this.props.PostCustAdrsList((resObj) => { });
    this.props.PostGetWishlistItems((resObj) => { });
    hashHistory.push('/');
    this.setState({ isAccountDropdown: !this.state.isAccountDropdown });
  }


  handlProfile = (event) => {
    const fileType = event.target.files[0].type.replace(/\/.+/g, "$'");
    const file = event.target.files[0];
    if (fileType == 'image') {
      this.setState({ file, show: false, show1: false, imageFileUrl: URL.createObjectURL(file) });
    }
  }

  handleBackgroundProfilePicUpdate = async () => {
    let data = new FormData();
    data.append("profile", this.state.file);
    const atObj = await localForage.getItem('accesstoken');
    const kmvcatoken = atObj.value ? atObj.value : {};
    const type = 'pic-update'
    const headers = { headers: { kmvcatoken } };
    axios.post(apis.putProfilePicUpdateAPI + type, data, headers)
      .then(async (resObj) => {
        if (resObj.data.status == '200') {
          const profilePath = resObj.data.resData.result.user.ppPath;
          this.setState({ show: true, show1: false, imageFileUrl: '', profilePath });
          toast.success('Profile Pic Updated Successfully');
          const cartData = resObj.data.resData.result.cart.vocCartItems;
          const cartItemsData = resObj.data.resData.result.cartItems;
          await localForage.setItem('cart', cartData);
          await localForage.setItem('cartItems', cartItemsData);
          await localForage.setItem('userInfo', resObj.data.resData.result.user);
          await localForage.setItem('address', resObj.data.resData.result.address);
        } else {
          toast.error('Profile Pic Updated Failed');
        }
      }).catch((err) => {
        this.setState({ err })
      });
  }
  handleClearProfilePic = () => {
    this.setState({ imageFileUrl: '', show: true, show1: !this.state.profilePath ? true : false});
  }

  handleBackgroundProfilePicRemove = async () => {
    let data = new FormData();
    data.append('profile', 'delete');
    const atObj = await localForage.getItem('accesstoken');
    const kmvcatoken = atObj.value ? atObj.value : {};
    const type = 'pic-delete'
    const headers = { headers: { kmvcatoken } };
    axios.post(apis.putProfilePicUpdateAPI + type, data, headers)
      .then(async (resObj) => {
        if (resObj.data.status == '200') {
          this.setState({ profilePath: '', imageFileUrl: '', show1: true });
          toast.success('Profile Pic Deleted Successfully');
          const cartData = resObj.data.resData.result.cart.vocCartItems;
          const cartItemsData = resObj.data.resData.result.cartItems;
          await localForage.setItem('cart', cartData);
          await localForage.setItem('cartItems', cartItemsData);
          await localForage.setItem('userInfo', resObj.data.resData.result.user);
          await localForage.setItem('address', resObj.data.resData.result.address);
        } else {
          toast.error('Profile Pic Deleted Failed');
        }
      }).catch((err) => {
        this.setState({ err })
      });
  }

  render() {
    return (
      <div className='col-sm-3 text-center profile-sidemenu'>
        <div className='card shadow'>
          <div className='card-body'>
            <div className='profile-image-div m-auto '>
              {this.state.imageFileUrl
                ? <img src={`${this.state.imageFileUrl}`} alt="AvImg2" className='img-fluid rounded-circle' />
                : (<img
                  src={this.state.profilePath
                    ? `${this.state.profilePath}`
                    : unnamed}
                  alt="Image"
                />
                )}
              <a className='profile-cam-optopn'>
                <i className="fa-solid fa-camera"></i>
                <input type='file' className='file-input'
                  accept='image/*'
                  onChange={this.handlProfile}
                />
              </a>
            </div>
            <div className='col-sm-12' >
              <button className='btn btn-sm btn-secondary  mt-3 mb-2' disabled={this.state.show} onClick={this.handleBackgroundProfilePicUpdate} >Update</button> &nbsp;
              <button className="btn btn-sm btn-secondary mt-3 mb-2" disabled={this.state.show1} onClick={() => this.state.imageFileUrl ? this.handleClearProfilePic() : this.handleBackgroundProfilePicRemove()}>{this.state.imageFileUrl ? 'Clear' : 'Remove'}</button>
              <div className='contact-infor'>
                <div className='d-flex'>
                  <p className=' mt-3'><span><i className='fa-solid fa-location-dot me-2 mt-1'></i></span>Skill works IT, Madapur, Hyderabad, Telangana, 500007.</p>
                </div>
              </div>
              <div className='contact-infor profile-mobi-pos'>
                <p className='ms-3'><a className=' ms-2 mobile-text'><span><i className='fa-solid fa-phone me-2'></i></span>(+91)9090909090</a></p>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.handleHome}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>Home</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.handleMyDetails}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>My Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.addressClick}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div' >
                    <a className='category-title'>My Addresses</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.viewedProductsClick}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>My Viewed Products</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.handleNotifications}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>My Notifications</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.wishlist}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>My Wishlist</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.monthBasket}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>My MonthBasket</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.handleSupport}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>Support</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.handleLegalandPolicies}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-regular fa-user' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>Legal and Policies</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=' each-category-card' onClick={this.handleLogout}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className='category-icon-img me-3'>
                    <i className='fa-solid fa-power-off' ></i>
                  </div>
                  <div className='category-title-div'>
                    <a className='category-title'>Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    PostUserLogin: (body, callback) => dispatch(PostUserLogin(body, callback)),
    PostUserOtpLogin: (body, callback) => dispatch(PostUserOtpLogin(body, callback)),
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback)),
    PostCustAdrsList: (callback) => dispatch(PostCustAdrsList(callback))
  };
};
export default connect(mapStateToProps, mapDistachToProps)(ProfileComponent);
