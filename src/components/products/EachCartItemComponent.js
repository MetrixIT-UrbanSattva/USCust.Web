/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import hashHistory from '../../hashHistory';
import moment from 'moment';

import RatingComponent from '../common/RatingComponent';
import { PostAddToCartItem, PostCartItemUpdate, PostCartItemRemove } from '../../actions/cart-items/CartItemsActions';
import { PostGetWishlistItems, PostAddItemToWishlist } from '../../actions/wish-list/WishlistAction';
import CartApis from '../../CartApis';

class EachCartItemComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleWishList = (item) => {
    this.props.PostAddItemToWishlist(item, (resObj) => { })
    this.removeItemFromCart(item);
    this.props.PostGetWishlistItems(resObj1 => {})
  }

  increment = (item) => {
    CartApis.increment(item, this.props.cartId, (reqBody) => {
      this.props.PostCartItemUpdate(reqBody, (resObj) => {
        this.props.setCartData();
      })
    })
  };

  decrement = (item) => {
    CartApis.decrement(item, this.props.cartId, 'update', (reqBody) => {
      if (reqBody.value == "update") {
        this.props.PostCartItemUpdate(reqBody, (resObj) => {
          this.props.setCartData();
        })
      } else {
        this.props.PostCartItemRemove(reqBody, (resObj) => {
          this.props.setCartData();
        });
      }
    })
  }
  removeItemFromCart = (item) => {
    CartApis.decrement(item, this.props.cartId, 'del', (reqBody) => {
      this.props.PostCartItemRemove(reqBody, (resObj) => {
        this.props.setCartData();
      })
    })
  }
  getDispatchDate = (category) => {
    if (category === 'Pulses' || category === 'Millets' || category === 'Rice') {
      return moment().add(1, 'days').format('MM/DD/YYYY') ? 'Next day dispatch' : '';
    } else if (category === 'Spices' || category === 'Oils' || category === 'Dry fruits') {
      return moment().add(2, 'days').format('MM/DD/YYYY') ? 'Dispatch in 2 days' : '';
    } else {
      return '';
    }
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
                        <p className='mb-0'>{this.getDispatchDate(item.vargam)}</p>
                        <div className='d-flex'>
                          <RatingComponent />
                        </div>
                        <div className='d-flex'>
                          <p className='price mb-0'>{item.units} - ₹{item.isPrice}</p>
                          <p className='text-strikeoff mb-0'>₹ {item.iMrp}</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-4'>
                      {qtyList.length > 0 && qtyList.map((item1, i) => {
                        return (
                          <div className='d-flex justify-content-between' key={i}>
                              <div className='btn-qty-cart col-sm-6'>
                                <i className="fa-solid fa-minus" onClick={() => this.decrement(item1)}></i>
                                <input type='text' className='form-control qty-input' value={item1.qty} />
                                <i className="fa-solid fa-plus" onClick={() => this.increment(item1)}></i>
                              </div>
                              <div className='col-sm-4'>
                                <div className='d-flex justify-content-center'>
                                  <i className="fa-regular fa-heart p-2" onClick={() => this.handleWishList(item)} style={{ fontSize: 18 }}></i>                             
                                  <a className='btn btn-sm btn-outline-danger m-2' onClick={() => this.removeItemFromCart(item1)}><i className="fa-solid fa-xmark"></i></a>
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
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback))
  };
};

export default connect(mapStateToProps, mapDistachToProps)(EachCartItemComponent);