/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import hashHistory from '../../hashHistory';

import RatingComponent from '../common/RatingComponent';
import { PostAddToCartItem, PostCartItemUpdate, PostCartItemRemove } from '../../actions/cart-items/CartItemsActions';
import { PostGetWishlistItems, PostAddItemToWishlist } from '../../actions/wish-list/WishlistAction';
import BaskApis from './BaskApis';

import { PostMonItemsListDelete, PostMonItemQtyUpdate } from '../../actions/mbasket/MonthBasketActions';


class MbaskItemListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleWishList = (item) => {
    this.props.PostAddItemToWishlist(item, (resObj) => { })
    this.removeItemFromCart(item);
    this.props.PostGetWishlistItems(resObj1 => { })
  }

  increment = (item) => {
    BaskApis.increment(item, this.props.baskId, (reqBody) => {
      this.props.PostMonItemQtyUpdate(reqBody, (resObj) => {
        this.props.setBaskData();
      })
    })
  };

  decrement = (item) => {
    BaskApis.decrement(item, this.props.baskId, 'update', (reqBody) => {
      this.props.PostMonItemQtyUpdate(reqBody, (resObj) => {
      })
      this.props.setBaskData();
    })
  }

  handleBasketItemDelete = (item) => {
    const reqBody = {
      voItems: item.voItem,
      voiCodes: item.voiCode,
      basketId: this.props.baskId
    }
    this.props.PostMonItemsListDelete(reqBody, (resObj) => {
      if (resObj && resObj.status == '200') {
        this.props.handleItemsList();
      }
    })
  }

  render() {
    const cartItemsQtyList = this.props.cartItemsQtyList;
    const cartItemsData = this.props.cartItemsData;
    return (
      <div>
        <div>
          {cartItemsData.length > 0 && cartItemsData.map((item, outerIndex) => {
            const qtyList = cartItemsQtyList.length > 0 && cartItemsQtyList.filter(item1 => item1.voItem == item.voItem);
            return (
              <div key={outerIndex} className=' each-category-card mx-3 my-3'>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='row align-items-center'>
                    <div className='col-sm-2 col-3'>
                      <div className='category-product-img1 me-3' onClick={() => hashHistory.push(`/product_view/${item.voItem}`)}>
                        <img src={item.filePath} className='img-fluid' />
                      </div>
                    </div>
                    <div className='col-sm-5 col-3'>
                      <div className='category-title-div'>
                        <a className='product-title' onClick={() => hashHistory.push(`/product_view/${item.voItem}`)}>{item.itemPeru} </a>
                        <div className='d-flex'>
                          <RatingComponent />
                        </div>
                        <div className='d-flex'>
                          <p className='price mb-0'>{item.units} - ₹{item.isPrice}</p>
                          <p className='text-strikeoff mb-0'>₹ {item.iMrp}</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-8'>
                      {qtyList.length > 0 && qtyList.map((item1, i) => {
                        return (
                          <div className='d-flex justify-content-between' key={i}>
                            <div className='btn-qty-cart col-sm-8'>
                              <i className="fa-solid fa-minus" onClick={() => this.decrement(item1)}></i>
                              <p>{item1.qty}</p>
                              <i className="fa-solid fa-plus" onClick={() => this.increment(item1)}></i>
                            </div>
                            <div className='col-sm-12'>
                              <div className='d-flex justify-content-center'>
                                <i className="fa-regular fa-heart p-2" onClick={() => this.handleWishList(item)} style={{ fontSize: 18 }}></i>
                                <a className='btn btn-sm btn-outline-danger m-2' onClick={() => this.handleBasketItemDelete(item)}><i className="fa-solid fa-xmark"></i></a>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
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
    PostAddToCartItem: (body, callback) => dispatch(PostAddToCartItem(body, callback)),
    PostCartItemUpdate: (body, callback) => dispatch(PostCartItemUpdate(body, callback)),
    PostCartItemRemove: (body, callback) => dispatch(PostCartItemRemove(body, callback)),
    PostAddItemToWishlist: (body, callback) => dispatch(PostAddItemToWishlist(body, callback)),
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback)),
    PostMonItemsListDelete: (body, callback) => dispatch(PostMonItemsListDelete(body, callback)),
    PostMonItemQtyUpdate: (body, callback) => dispatch(PostMonItemQtyUpdate(body, callback)),

  };
};

export default connect(mapStateToProps, mapDistachToProps)(MbaskItemListComponent);