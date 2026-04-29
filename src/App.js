/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

// import hashHistory from './hashHistory';
// import localForage from './hooks/localForage';

import './i18n';

import { UserSignUp } from './containers/sign-up';
import { HomePage } from './containers/home';
import { ProductsPage, ProductView, CartPage, WishlistPage, CheckoutPage } from './containers/products';
import { CreateAddress, EditAddress, AddressesList } from './containers/address';
import { PaymentScreen, PaymentSuccess } from './containers/payments';
import { MyOrders } from './containers/my-orders';
import { Notifications } from './containers/notifications';
import { GiveRating } from './containers/my-orders';
import { EditRating } from './containers/my-orders';
import { OrderView, TrackOrder } from './containers/my-orders';
import { Profile } from './containers/profile';
import ViewedProducts from './containers/products/ViewedProducts';
import { Reviews } from './containers/reviews';
import { QuestionAndAnswers } from './containers/ques-ans';
import localForage from './hooks/localForage';
import { SetLoggedInUserAuthObj } from './actions/LoginActions';
import { PostCartItemsList, /*SetCartData*/ } from './actions/cart-items/CartItemsActions';
import { PostGetWishlistItems } from './actions/wish-list/WishlistAction';
import { LandingScreen } from './containers/landing-screen';
import { ResetAddressData } from './actions/Addresses/CustAdrsActions'
import { InvoicePage } from './containers/invoice';
import { Support } from './containers/support';
import { ProfileDetails } from './containers/profile';
import { LegalandPolicies } from './containers/legalandpolicies';
import { ProfileEdit } from './containers/profile';
import { SupportCreate } from './containers/support';
import  PrivacyPolicy  from './components/legalandpolicies/PrivacyPolicy';
import  TermsAndCondition  from './components/legalandpolicies/TermsAndCondition';
import {MonthBasket, MonthBaskCreate, MonthBaskItemCreate} from './containers/mbasket';


const App = (props) => {

  useEffect(() => {
    SetLoggedInUserAuthObj();
  }, []);

  const SetLoggedInUserAuthObj = async () => {
    const logObj = await localForage.getItem('userInfo');
    const authObj = logObj && logObj.value || {};
    authObj.userId && props.SetLoggedInUserAuthObj(authObj);
    authObj.userId && props.PostCartItemsList((resObj) => { });
    authObj.userId && props.PostGetWishlistItems((resObj) => { });
    const adrsData = await localForage.getItem('address');
    const address = adrsData && adrsData.value || {};
    props.ResetAddressData(address);
  }
  // const location = useLocation();

  // useEffect(() => {
  //   handleUserLogin();
  // }, [location]);

  // const handleUserLogin = async () => {
  //   if(location.pathname !== '/' && location.pathname !== '/login') {
  //     const userObj = await localForage.getItem('userInfo');
  //     const userData = userObj.value;
  //     const atObj = await localForage.getItem('accesstoken');
  //     const accesstoken = atObj.value;
  //     if(!userData || !userData.userId || !accesstoken) {
  //       hashHistory.push('/');
  //     }
  //   }
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="login" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="sign-up" element={<UserSignUp />} />
        <Route path="products/viewmore/:type" element={<ProductsPage />} />
        <Route path="products/search/:type" element={<ProductsPage />} />
        <Route path="products/:type" element={<ProductsPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product_view/:id" element={<ProductView />} />
        <Route path="cart-page" element={<CartPage />} />
        <Route path='wishlist' element={<WishlistPage />} />
        <Route path='checkout' element={<CheckoutPage />} />
        <Route path='create-address' element={<CreateAddress />} />
        <Route path='edit-address/:id' element={<EditAddress />} />
        <Route path='payment' element={<PaymentScreen />} />
        <Route path='my-orders' element={<MyOrders />} />
        <Route path='notifications' element={<Notifications />} />
        <Route path='give-rating/:id' element={<GiveRating />} />
        <Route path='edit-rating/:id' element={<EditRating />} />
        <Route path='order-view/:id' element={<OrderView />} />
        <Route path='order-tracking/:id' element={<TrackOrder />} />
        <Route path='my-account' element={<Profile />} />
        <Route path='addresses' element={<AddressesList />} />
        <Route path='viewed-products' element={<ViewedProducts />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='questions' element={<QuestionAndAnswers />} />
        <Route path='invoice/bill/:id' element={<InvoicePage />} />
        <Route path='support' element={<Support />} />
        <Route path='m-basket' element={<MonthBasket />} />
        <Route path='create-basket' element={<MonthBaskCreate />} />
        <Route path='create-item/:id' element={<MonthBaskItemCreate />} />
        <Route path='create-support' element={<SupportCreate />} />
        <Route path='profile-details' element={<ProfileDetails />} />
        <Route path='profile-edit' element={<ProfileEdit />} />
        <Route path='policies' element={<LegalandPolicies />} />
        <Route path='payment-success' element={<PaymentSuccess />} />
        <Route path='privacy' element={<PrivacyPolicy />} />
        <Route path='terms' element={<TermsAndCondition />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = () => ({

});
const mapDistachToProps = (dispatch) => ({
  SetLoggedInUserAuthObj: (authObj) => dispatch(SetLoggedInUserAuthObj(authObj)),
  PostCartItemsList: (callback) => dispatch(PostCartItemsList(callback)),
  ResetAddressData: (address) => dispatch(ResetAddressData(address)),
  PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback)),
});

export default connect(mapStateToProps, mapDistachToProps)(App);
