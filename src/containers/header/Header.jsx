/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { connect } from 'react-redux';

import hashHistory from '../../hashHistory';
import { HeaderComponent } from '../../components/header';
import localforage from '../../hooks/localForage';
import { PostItemsList } from '../../actions/Items/ItemsActions';
import { SetLoggedInUserDataRes } from '../../actions/LoginActions';
import { PostCustAdrsList } from '../../actions/Addresses/CustAdrsActions';
import { PostGetWishlistItems } from '../../actions/wish-list/WishlistAction';
import { PostCustNtfcnsCount } from '../../actions/notifications/NotificationAction'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchOpen: false,
      isLoginModal: false,
      notifCount: 0,
      isLogin: false,
      isOpenMobileSideMenu: false,
      searchStr: props.type ? props.type : '',
      isAccountDropdown: false,
      cartCount: '',
      cartData: [],
      data: {},
      address: {},
      userInfo: {},
    };
  }

  async componentDidMount() {
    this.notCount()
    const cartD = await localforage.getItem('cart');
    const cartCount = cartD.value ? cartD.value.length : [];
    const userData = await localforage.getItem("userInfo");
    const userInfo = userData.value || {};
    const defaultAdrs = await localforage.getItem("address");
    const address = defaultAdrs.value || [];
    this.setState({ cartCount, userInfo, address })
  }
  closeLoginModal = () => this.setState({ isLoginModal: !this.state.isLoginModal });
  setStateData = (data) => this.setState({ ...data });

  handleSearch = (event) => {
    const searchStr = event.target.value;
    this.apiCallTime && clearTimeout(this.apiCallTime);
    this.setState({ searchStr, isSearchOpen: true });
    this.apiCallTime = setTimeout(() => { this.apiItemsList('', 1, 20, searchStr); }, 800);
  }
  apiItemsList = (itemCategory, crntPgNum, pageLimit, searchStr) => {
    const reqBody = { itemCategory, crntPgNum, pageLimit, searchStr };
    this.props.PostItemsList(reqBody, (resObj) => { });
  }
  notCount = () => {
    this.props.PostCustNtfcnsCount((resObj) => {
      if(resObj && resObj.status == '200'){
        const unReadCount = resObj.resData.result[0]        
        this.setState({ notifCount : unReadCount.count})
      }
    })
  }
  handleMyAccount = () => {
    this.setState({
      isAccountDropdown: !this.state.isAccountDropdown
    })
  }
  handleLoginModal = () => {
    this.setState({ isLoginModal: !this.state.isLoginModal });
  }
  handleSearchSubmit = () => {
    this.setState({ isSearchOpen: false });
    hashHistory.push(`/products/search/${this.state.searchStr}`);
  }
  handleSuggestionClick = (suggestion) => {
    this.setState({ searchStr: suggestion, isSearchOpen: false });
    this.apiItemsList('', 1, 20, suggestion);
    hashHistory.push(`/products/search/${suggestion}`);
  }

  logOutClick = async () => {
    await localforage.removeItem('accesstoken');
    await localforage.removeItem('userInfo');
    await localforage.removeItem('cart');
    await localforage.removeItem('cartItems');
    this.props.SetLoggedInUserDataRes({});
    this.props.PostCustAdrsList((resObj) => { });
    this.props.PostGetWishlistItems((resObj) => { });
    hashHistory.push('/');
    this.setState({ isAccountDropdown: !this.state.isAccountDropdown });
  }
  handleToggleMobileSideMenu = () => {
    this.setState({
      isOpenMobileSideMenu: !this.state.isOpenMobileSideMenu
    })
  }
  defaultAdrsClick = () => {
    const userObj = this.props.LoginReducer.luObj;
    {userObj && userObj.userId ? hashHistory.push('/addresses') : this.setState({ isLoginModal: true }) }
  }
  render() {
    // login
    const { luObj } = this.props.LoginReducer;
    const { custsAdrsListData } = this.props.AddressesReducer;
    // search
    const { custsItemsListData } = this.props.ItemsListReducer;
    const data = custsItemsListData.map((item) => item.inSearch);
    const singleArray = data.reduce((acc, curr) => acc.concat(curr), []);
    const filteredSuggestions = singleArray.filter(suggestion => suggestion.toLowerCase().includes(this.state.searchStr.toLowerCase()));

    // default address
    const defaultAddress = custsAdrsListData && custsAdrsListData.length > 0 && custsAdrsListData.find(item => item.isDefault === true);
    const cName = defaultAddress.cName ? defaultAddress.cName : '';
    const village = defaultAddress.vuru ? defaultAddress.vuru + '  ' : defaultAddress.jilla + '  ';
    const pincode = defaultAddress.pincode ? defaultAddress.pincode : '';
    const defaultAdrs = `${village} ${pincode}`;

    return (
      <HeaderComponent state={this.state} luObj={luObj} filteredSuggestions={filteredSuggestions} count={this.props.count}
        closeLoginModal={this.closeLoginModal} setStateData={this.setStateData} handleSearch={this.handleSearch} cName={cName}
        handleSearchSubmit={this.handleSearchSubmit} handleSuggestionClick={this.handleSuggestionClick} handleLoginModal={this.handleLoginModal}
        handleMyAccount={this.handleMyAccount} logOutClick={this.logOutClick} defaultAdrs={defaultAdrs} handleToggleMobileSideMenu={this.handleToggleMobileSideMenu} defaultAdrsClick={this.defaultAdrsClick} userInfo={this.state.userInfo}/>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    LoginReducer: state.LoginReducer,
    ItemsListReducer: state.ItemsListReducer,
    AddressesReducer: state.AddressesReducer,
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostCustAdrsList: (callback) => dispatch(PostCustAdrsList(callback)),
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback)),
    PostCustNtfcnsCount: (callback) => dispatch(PostCustNtfcnsCount(callback)),
    PostItemsList: (body, callback) => dispatch(PostItemsList(body, callback)),
    SetLoggedInUserDataRes: (body, callback) => dispatch(SetLoggedInUserDataRes(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(Header);
