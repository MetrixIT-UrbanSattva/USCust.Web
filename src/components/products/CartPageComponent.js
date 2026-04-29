/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import hashHistory from '../../hashHistory';
import { connect } from 'react-redux';

import FooterComponent from '../footer';
// import { HeaderComponent } from '../header';
import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import shopCart from '../../assets/images/shoppingcart.jpg';
import EachCartItemComponent from './EachCartItemComponent';
import { PostCartItemsList } from '../../actions/cart-items/CartItemsActions';
import localForage from '../../hooks/localForage';


class CartPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddToCart: false,
      isCartEmpty: false,
      cartData: [],
      cartItemsData: [],
      userInfo: {},
      isLoginModal: false
    }
  }
  async componentDidMount() {
    const userData = await localForage.getItem("userInfo");
    const userInfo = userData.value || {}
    this.setState({ userInfo })
    this.setCartData();
  }

  setCartData = async () => {
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    const cartItemsD = await localForage.getItem('cartItems');
    const cartItemsData = cartItemsD.value || [];
    this.setState({ cartData, isCartEmpty: cartData.length > 0 ? true : false, cartItemsData });
  }
  checkOutClick = () => {
    if (!this.state.userInfo.userId) {
      alert('Please Login to your account')
    } else {
      hashHistory.push('/checkout')
    }
  }

  render() {
    const cartItemsQtyList = this.state.cartData;
    const totalQty = cartItemsQtyList.length ? cartItemsQtyList.map(item => item.qty) : [];
    const totalQtySum = totalQty.reduce((qty1, qty2) => qty1 + qty2, 0);
    const totalPriceSum = this.state.cartData.reduce((acc, curr) => {
      const item = this.state.cartItemsData.find(item => item.voItem === curr.voItem);
      return acc + (item ? item.isPrice * curr.qty : 0);
    }, 0);
    return (
      <div className='wrapper'>
        <Header count={this.state.cartData.length} popup={this.state.isLoginModal} />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  =============================  --> */}
        <section className='products-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h1 className='title'> Cart page </h1>
              </div>
            </div>
            <div className='row '>
            {this.state.isCartEmpty
                ? <div className='col-sm-9 col-12'>
                  <EachCartItemComponent cartItemsQtyList={cartItemsQtyList} cartItemsData={this.state.cartItemsData} cartId={this.state.userInfo.cartId} cartItemsList={this.cartItemsList} setCartData={this.setCartData} />
                </div>
                : <div className={!this.state.isCartEmpty ? 'col-sm-12 col-12' : 'col-sm-8 col-12'}>
                  <div className='card1' >
                    <div className='card-body' >
                      <div className=' d-flex justify-content-center align-items-center' style={{ marginTop: 80 }}>
                        <div className='my-5'>
                          <div className=' d-flex justify-content-center align-items-center' >
                            <img src={shopCart} className='img-fluid' width={80} />
                          </div>
                          <div >
                            <p className='text-center font-weight-bold'>Your cart is empty</p>
                            <button className='btn btn-success br-22 px-3 mb-3 ' onClick={() => hashHistory.push('/products')}>Add Items to Cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              {this.state.isCartEmpty
                ? <div className='col-sm-3 col-12 ps-0'>
                  <div className='each-category-card my-3 me-3'>
                    <div className='card-body cart-summary'>
                      <h2 className="foo_wid_title mb-0">Cart Summary</h2>
                      <div className='my-4'>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Total Quantity</p>
                          <p className='value'>{totalQtySum}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Total Price</p>
                          <p className='value'>₹{totalPriceSum}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                          <p className='label'>Deliver Charges</p>
                          <p className='value'>₹0.0</p>
                        </div>
                      </div>
                      <hr />
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Sub Total</p>
                        <p className='value'>₹{totalPriceSum}</p>
                      </div>
                      <div className='d-flex justify-content-center'>
                        <button onClick={this.checkOutClick} className='btn btn-success br-22 px-3 w-100 text-white'>Proceed To Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
                : null}
              {/*  related products start */}
              <div className='related-products-section my-3 mx-4' >
                <div className='row'>
                  <div className='col-sm-12 col-12'>
                    <h2 className='foo_wid_title '>Related Products</h2>
                  </div>
                </div>
                <div className='row'>
                  {/* <RelatedProductComponent /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
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
    PostCartItemsList: (callback) => dispatch(PostCartItemsList(callback)),
    PostCartItemRemove: (callback) => dispatch(PostCartItemRemove(callback)),
    PostAddItemToWishlist: (body, callback) => dispatch(PostAddItemToWishlist(body, callback)),
    PostRemoveItemFromWishlist: (id, callback) => dispatch(PostRemoveItemFromWishlist(id, callback))
  };
};

export default connect(mapStateToProps, mapDistachToProps)(CartPageComponent);