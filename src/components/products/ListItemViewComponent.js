/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import RatingComponent from '../common/RatingComponent';
import hashHistory from '../../hashHistory';
import { PostAddToCartItem, PostCartItemUpdate, PostCartItemRemove } from '../../actions/cart-items/CartItemsActions';
import { PostAddItemToWishlist, PostRemoveItemFromWishlist, PostGetWishlistItems } from '../../actions/wish-list/WishlistAction';
import localForage from '../../hooks/localForage';
import CartApis from '../../CartApis';
import SocialMediaShareComponent from '../social-media/SocialMediaShareComponent';

class ListItemViewComponent extends Component {
  constructor(props) {
    super(props);
    const { item } = props;
    this.state = {
      unit: item._id,
      item,
      qty: 0,
      userInfo: {},
      cartData: [],
      cartItemsData: [],
      isAccountDropdown: false,
      color: ''
    }
  }
  componentDidMount() {
    this.setData();
  }

  componentDidUpdate(prevProps, prevState) {
    const currentData = this.props.item;
    const previousData = prevProps.item;
    if (currentData._id !== previousData._id) {
      this.setData();
    }
  }
  setData = async () => {
    const userData = await localForage.getItem('userInfo');
    const userInfo = userData.value || {};
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    const vocData = cartData.length > 0 ? cartData.find(item1 => item1.voItem == this.props.item._id) : {};
    const data =   vocData && vocData._id ? vocData : {};
    const totalWishlistData = this.props.WishlistReducer.custsWishlistData;
    const wishListItem = totalWishlistData.length > 0 ? totalWishlistData.find(item1 => item1.voItem == this.props.item._id) : {};
    const wishListData = wishListItem && wishListItem._id ? wishListItem : {}    
    this.setState({ qty: data.qty ? data.qty : 0, userInfo, cartData, item: this.props.item, color: wishListData._id ? 'red' : '' })
  }

  handleViewProduct = (item) => {
    hashHistory.push(`/product_view/${item._id}`)
    this.props.itemApi && this.props.itemApi(item._id);
  }

  handleWishList = (item) => {
    this.setState({color: 'red' });
    this.props.PostAddItemToWishlist(item, (resObj) => {
      this.props.PostGetWishlistItems((resObj1)=> {
      })
    })
  }

  handleRemoveWishList = (item) => {
    this.setState({color: '' });
    const reqBody = {voItem: item.voItem, voiCode: item.voiCode, itemData: item};
    this.props.PostRemoveItemFromWishlist(reqBody, (resObj) => {
      this.props.PostGetWishlistItems((resObj1)=> {
      })
    })
  }

  unitsChange = async (e) => {
    const unit = e.target.value;
    const cartItemD = await localForage.getItem('cartItems');
    const cartItemsData = cartItemD.value || [];
    const cartItem = cartItemsData.length > 0 && cartItemsData.find(item => item.voItem == unit);
    const unitsData = this.props.custsItemsListData.length > 0 ? this.props.custsItemsListData.find(item => item.voItem == unit) : {};
    const item = cartItem && cartItem._id ? cartItem : unitsData;
    const totalWishlistData = this.props.WishlistReducer.custsWishlistData;
    const wishListItem = totalWishlistData.length > 0 ? totalWishlistData.find(item1 => item1.voItem == unit) : {};
    const wishListData = wishListItem && wishListItem._id ? wishListItem : {}   
    this.setState({ unit, qty: cartItem && cartItem._id ? item.qty : 0, item, color: wishListData._id ? 'red' : ''  });
  }
  handleAddCart = () => {
    this.setState({ qty: 1 });
    CartApis.handleAddCart(this.state.item, this.state.userInfo.cartId, (reqBody) => {
      this.props.PostAddToCartItem(reqBody, (resObj) => {
        this.props.cartData();
        this.handleRemoveWishList(this.state.item);
      })
    });
  }
  increment = () => {
    CartApis.increment(this.state.item, this.state.userInfo.cartId, (reqBody) => {
      this.setState({ qty: reqBody.qty });
      this.props.PostCartItemUpdate(reqBody, (resObj) => { })
    })
  };

  decrement = () => {
    CartApis.decrement(this.state.item, this.state.userInfo.cartId, 'update', (reqBody) => {
      if (reqBody.value == "update") {
        this.setState({ qty: reqBody.qty });
        this.props.PostCartItemUpdate(reqBody, (resObj) => { })
      } else {
        this.props.PostCartItemRemove(reqBody, (resObj) => {
          this.setCartData();
          this.props.cartData();
        });
      }
    })
  }
  setCartData = async() => {
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    const vocData = cartData.length > 0 ? cartData.find(item1 => item1.voItem == this.props.item._id) : {};
    const data =  vocData && vocData._id ? vocData : {};
    this.setState({ qty: data.qty ? data.qty : 0, cartData})
  }
  render() {
    const { i, shareClick } = this.props;
    const { isAccountDropdown} = this.props.state;
    const { unit, qty, item } = this.state;
    return (

      <div key={item._id}>
        <div className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated" data-wow-delay=".1s">
          <div className="product-img-action-wrap">
            <div className="product-img product-img-zoom">
              <a>
                <img src={item.filePath} className='img-fluid' onClick={() => this.handleViewProduct(item)} style={{ cursor: 'pointer' }} />
              </a>
            </div>
            {/* <div className="product-action-1">
              <a aria-label="Share" className="action-btn"><i className="fa-solid fa-share"></i></a>
            </div> */}
            {item.idp !== 0 &&
              <div className="product-badges product-badges-position product-badges-mrg">
                <span className="hot">{Math.trunc(item.idp) + '%'} Off</span>
              </div>}
          </div>
          <div className="product-content-wrap">
            <div className="product-category">
              <a>{item.vargam}</a>
            </div>
            <SocialMediaShareComponent item={item} i={i} isAccountDropdown={isAccountDropdown} shareClick={shareClick} />
           {qty < 1 && <a> <span>{!this.state.color ? <i className="fa-regular fa-heart me-4 mb-2" onClick={() => this.handleWishList(item)} style={{ fontSize: 18 }}></i> : <i className="fa-solid fa-heart me-4 mb-2" onClick={() => this.handleRemoveWishList(item)} style={{ fontSize: 18, color: "#d2421e" }}></i>}</span></a>}
            <div className="product-rate-cover">
              <div className="product-rate d-inline-block">
                <div className="product-rating">
                  <RatingComponent count={item.iAvgRating} />
                </div>
              </div>
              {/* <span className="font-small ml-5 text-muted"> (4.0)</span> */}
            </div>
            <div className='d-flex'>
              <p className='mb-0 mt-2 me-2'>Units </p>
              <select className="form-select form-select-sm mt-2" aria-label="Default select example" value={unit} onChange={this.unitsChange}>
                {item.all.map((item1, i) => {
                  return (
                    <option key={i} value={item1._id}>{item1.units} - ₹{item1.isPrice}</option>
                  )
                }
                )}
              </select>
            </div>
            <div className="product-card-bottom">
              <div className="product-price">
                <span>₹ {item.isPrice}</span>
                <span className="old-price">₹ {item.iMrp}</span>
              </div>
              <div className="add-cart">
                {qty ?
                  <div className='add'>
                    <button className='btn btn-sm' onClick={this.decrement}><i className='fa-solid fa-minus'></i></button>
                    <label>{qty}</label>
                    <button className='btn btn-sm' onClick={this.increment}><i className='fa-solid fa-plus'></i></button>
                  </div>
                  : <button className='btn addcart-button text-white fw-bold' onClick={this.handleAddCart} ><i className='fa-solid fa-cart-shopping me-2'></i>Add cart </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    LoginReducer: state.LoginReducer,
    WishlistReducer: state.WishlistReducer
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostAddToCartItem: (body, callback) => dispatch(PostAddToCartItem(body, callback)),
    PostCartItemUpdate: (body, callback) => dispatch(PostCartItemUpdate(body, callback)),
    PostCartItemRemove: (body, callback) => dispatch(PostCartItemRemove(body, callback)),
    PostAddItemToWishlist: (body, callback) => dispatch(PostAddItemToWishlist(body, callback)),
    PostRemoveItemFromWishlist: (body, callback) => dispatch(PostRemoveItemFromWishlist(body, callback)),
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback))
  }
};

export default connect(mapStateToProps, mapDistachToProps)(ListItemViewComponent);