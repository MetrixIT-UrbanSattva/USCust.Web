/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */


import React from 'react';
import Modal from 'react-modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import UserLoginComponent from '../login';
import hashHistory from '../../hashHistory';
import Logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search.png';
import bellIcon from '../../assets/images/bell.png';
import cartIcon from '../../assets/images/icon-cart.png';
import userIcon from '../../assets/images/icon-user.png';

import '../../styles/Styles.css';
import '../../styles/animate.min';
import '../../styles/main.css';
import '../header/css/MobileSidebarStyles.css';
// import localforage from '../../hooks/localForage';
// import { PostItemsList } from '../../actions/Items/ItemsActions';
// import { SetLoggedInUserDataRes } from '../../actions/LoginActions';
// import { PostCustAdrsList } from '../../actions/Addresses/CustAdrsActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { searchStr, isSearchOpen, isLoginModal, notifCount, cartCount, userInfo, isOpenMobileSideMenu } = this.props.state;
    const { closeLoginModal, luObj, filteredSuggestions, setStateData, handleSuggestionClick, handleSearch, cName, handleSearchSubmit,
      handleLoginModal, handleMyAccount, logOutClick, defaultAdrs, handleToggleMobileSideMenu, defaultAdrsClick } = this.props;
    return (
      <header className='header-area header-style-1 header-height-2 sticky-bar stick'>
        <div className='header-middle header-middle-ptb-1 d-none d-lg-block'>
          <div className='container'>
            {isOpenMobileSideMenu ? <div className="body-overlay-1"></div> : null}
            <div className='header-wrap'>
              <div className='logo logo-width-1'>
                <a onClick={() => hashHistory.push('/home')} className='navbar-brand'>
                  <img className='image-fluid' src={Logo} />
                </a>
              </div>
              <div className='header-right'>
                <div className='search-style-2'>
                  <Form>
                    <select className='select-active select2-hidden-accessible' data-select2-id='1' tabIndex='-1' aria-hidden='true'>
                      <option data-select2-id='3'>All Categories</option>
                      <option data-select2-id='15'>Ghee</option>
                      <option data-select2-id='16'>Honey</option>
                      <option data-select2-id='17'>Oils</option>
                      <option data-select2-id='18'>Pulses</option>
                      <option data-select2-id='19'>Spices</option>
                    </select>

                    <input type='search' className='form-control' placeholder='Search here' value={searchStr} onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()} onChange={(e) => handleSearch(e)} />
                    <div className='search_img' onClick={handleSearchSubmit}>
                      <img src={searchIcon} className='img' />
                    </div>
                    {isSearchOpen &&
                      <div className='search_div_suggestion_box'>
                        {filteredSuggestions.length ? (
                          <ul>
                            {filteredSuggestions.map((item, i) => (
                              <li key={item + i}><a onClick={() => handleSuggestionClick(item)} >{item}</a></li>
                            ))}
                          </ul>
                        ) : <div className='d-flex align-items-center justify-content-center'>No Items to match</div>}
                      </div>}
                  </Form>
                </div>
                <div className='header-action-right'>
                  <div className='header-action-2'>
                    <div className="header-action-icon-2">
                      {/* <a><img src={shopIcon} /></a> */}
                      {/* <a onClick={() => hashHistory.push('/my-orders')}><span className="lable ml-0"> Count: {userInfo.info && userInfo.info.sogActCount}</span></a> */}
                    </div>
                    {this.props.userInfo ? <div className="search-location">
                      <form onClick={defaultAdrsClick}>
                        <div className="select-active select2-hidden-accessible" data-select2-id="4" tabIndex="-1" aria-hidden="true">
                          <div style={{ fontSize: 'small' }}>Deliver To {cName ? cName : ''}</div>
                          <span><i className="fa-sharp fa-solid fa-location-dot me-2"></i><b data-select2-id="6">{defaultAdrs}</b> </span>
                        </div>
                      </form>
                    </div> : ''}
                    <div className='header-action-icon-2' onClick={() => hashHistory.push('/notifications')}>
                      <a><img src={bellIcon} /></a>{this.props.state.notifCount > 0 ? this.props.state.notifCount : ''}
                    </div>
                    <div className='header-action-icon-2' onClick={() => hashHistory.push('/cart-page')}>
                      <a><img src={cartIcon} />{this.props.count > 0 ? <span className='pro-count blue'> {this.props.count}</span> : ''}</a>
                      <a ><span className='lable ml-0'> {' '} Cart</span></a>
                    </div>
                    <div className='header-action-icon-2'>
                      {/* <a><img src={userIcon} /></a> */}
                      {luObj && luObj.userId ?
                        <a onClick={handleMyAccount}><img src={userIcon} /><span className='lable ml-0'>{luObj.fullName}</span></a>
                        : <a onClick={handleLoginModal} className='nav-link'><img src={userIcon} /><span className='lable ml-0'> Login </span></a>
                      }
                      {luObj && luObj.userId &&
                        <div className='cart-dropdown-wrap cart-dropdown-hm2 account-dropdown'>
                          <ul>
                            <li>
                              <a onClick={() => hashHistory.push('/profile-details')} ><span className='me-1'><i className='fa-regular fa-user'></i></span> My Account</a>
                            </li>
                            <li>
                              <a onClick={() => hashHistory.push('/my-orders')} ><span className='me-1'><i className='fa-solid fa-cart-arrow-down'></i></span> My Orders</a>
                            </li>
                            <li>
                              <a onClick={logOutClick}><span className='me-1'><i className='fa-solid fa-power-off'></i> </span> Logout</a>
                            </li>
                          </ul>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal
            isOpen={isLoginModal}
            onRequestClose={closeLoginModal}
            style={customStyles}
          >
            <UserLoginComponent closeModal={closeLoginModal} />
          </Modal>
        </div>
        <div className='header-bottom header-bottom-bg-color sticky-bar'>
          <div className='container'>
            <div className='header-wrap header-space-between position-relative'>
              <div className='logo logo-width-1 d-block d-lg-none'>
                <a onClick={() => hashHistory.push('/home')} className='navbar-brand'>
                  <img className='image-fluid' src={Logo} />
                </a>
              </div>
              <div className='header-action-icon-2 d-block d-lg-none'>
                <div className='burger-icon burger-icon-white' onClick={handleToggleMobileSideMenu}>
                  <span className='burger-icon-top'></span>
                  <span className='burger-icon-mid'></span>
                  <span className='burger-icon-bottom'></span>
                </div>
              </div>
              <div className='header-action-right d-block d-lg-none'>
                <div className='header-action-2'>
                  <div className='header-action-icon-2' onClick={() => hashHistory.push('/cart-page')}>
                    <a><img src={cartIcon} />{this.props.count > 0 ? <span className='pro-count blue'> {this.props.count}</span> : ''}</a>
                    <a ><span className='lable ml-0'> {' '} Cart</span></a>
                  </div>
                  <div className='header-action-icon-2'>
                    {luObj && luObj.userId ?
                      <a onClick={handleMyAccount}><img src={userIcon} /><span className='lable ml-0'>{luObj.fullName}</span></a>
                      : <a onClick={handleLoginModal} className='nav-link'><img src={userIcon} /><span className='lable ml-0'> Login </span></a>
                    }
                    {luObj && luObj.userId &&
                      <div className='cart-dropdown-wrap cart-dropdown-hm2 account-dropdown'>
                        <ul>
                          <li>
                            <a onClick={() => hashHistory.push('/profile-details')} ><span className='me-1'><i className='fa-regular fa-user'></i></span> My Account</a>
                          </li>
                          <li>
                            <a onClick={() => hashHistory.push('/my-orders')} ><span className='me-1'><i className='fa-solid fa-cart-arrow-down'></i></span> My Orders</a>
                          </li>
                          <li>
                            <a onClick={logOutClick}><span className='me-1'><i className='fa-solid fa-power-off'></i> </span> Logout</a>
                          </li>
                        </ul>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isOpenMobileSideMenu
          ? <div className='mobile-header-active mobile_menu_default mobile-header-wrapper-style sidebar-visible left-0'>
            <div className='mobile-header-wrapper-inner'>
              <div className='mobile-header-top'>
                <div className='mobile-menu-close close-style-wrap close-style-position-inherit'>
                  <div className='close-style search-close'>
                    <button onClick={handleToggleMobileSideMenu} className='btn btn-sm btn-outline-success'>
                      <i className='fa-solid fa-close' ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className='mobile-header-content-area'>
                <div className='mobile-menu-wrap mobile-header-border'>
                  <div className='menu_cat_tab'>
                    <Tabs
                      id='mobilemenuContent'
                      className='mb-3'
                    >
                      <Tab eventKey='menu' title='Menu'>
                        <div className='menu-options'>
                          <ul id='menu-category-on-mobile' className='mobile-menu font-heading'>
                            <li className='menu-item' onClick={() => hashHistory.push('/home')}>
                              <a className='nav_link'>
                                <span >Home</span>
                              </a>
                            </li>
                            <li className='menu-item'>
                              <a className='nav_link'>
                                <span >Wishlist</span>
                              </a>
                            </li>
                            <li className='menu-item'>
                              <a className='nav_link'>
                                <span >Saved Products</span>
                              </a>
                            </li>
                            <li className='menu-item' onClick={() => hashHistory.push('/my-orders')}>
                              <a className='nav_link'>
                                <span >My Orders</span>
                              </a>
                            </li>
                            <li className='menu-item'>
                              <a className='nav_link'>
                                <span >Contact</span>
                              </a>
                            </li>
                            <li className='menu-item' onClick={() => hashHistory.push('/profile-details')}>
                              <a className='nav_link'>
                                <span >Profile</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Tab>
                      <Tab eventKey='category' title='Category'>
                        Category
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : null}
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LoginReducer: state.LoginReducer,
    ItemsListReducer: state.ItemsListReducer,
    AddressesReducer: state.AddressesReducer,
    CartItemsReducer: state.CartItemsReducer
  }
};
const mapDistachToProps = (dispatch) => {
  return {
    PostItemsList: (body, callback) => dispatch(PostItemsList(body, callback)),
    SetLoggedInUserDataRes: () => dispatch(SetLoggedInUserDataRes({})),
    ResetAddressData: () => dispatch(ResetAddressData()),
  };
};
export default connect(mapStateToProps, mapDistachToProps)(HeaderComponent);