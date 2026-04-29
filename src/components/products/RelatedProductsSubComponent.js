/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';

import hashHistory from '../../hashHistory';
import RatingComponent from '../common/RatingComponent';
import CartApis from '../../CartApis';
import localForage from '../../hooks/localForage';
import SocialMediaShareComponent from '../social-media/SocialMediaShareComponent';
import { PostAddToCartItem, PostCartItemUpdate, PostCartItemRemove } from '../../actions/cart-items/CartItemsActions';
import { PostAddItemToWishlist, PostRemoveItemFromWishlist, PostGetWishlistItems} from '../../actions/wish-list/WishlistAction';

const RelatedProductsSubComponent = (props) => {
  const [item, setItem] = useState(props.item);
  const [unit, setUnit] = useState(props.item._id);

  useEffect(() => {
    setItem(props.item);
    setUnit(props.item._id)
  }, [props.item])
   
  const handleView = (item) => {
    hashHistory.push(`/product_view/${item._id}`);
    props.itemApi(item._id);
    props.setCartData();
  }

  const handleWishList = () => {
    props.PostAddItemToWishlist(item, (resObj) => {
      props.PostGetWishlistItems((resObj1)=> {
      })
    })
  }

  const handleRemoveWishList = () => {
    const reqBody = { voItem: item.voItem, voiCode: item.voiCode, itemData: item};
    props.PostRemoveItemFromWishlist(reqBody, (resObj) => {
     props.PostGetWishlistItems((resObj1)=> {})
    })
  }


  const handleUnitChange = async (e) => {
    const unit = e.target.value;
    setUnit(e.target.value)
    const cartItemD = await localForage.getItem('cartItems');
    const cartItemsData = cartItemD.value || [];
    const cartItem = cartItemsData.length > 0 ? cartItemsData.find(item => item.voItem == unit) : {};
    const unitsData = props.similarItemsList.length > 0 && props.similarItemsList.find(item => item.voItem == unit);
    const item = cartItem && cartItem._id ? cartItem : unitsData;
    setItem(item);
  }
  const handleAddCart = (itemData) => {
    CartApis.handleAddCart(itemData, props.userInfo.cartId, (reqBody) => {
      props.PostAddToCartItem(reqBody, (resObj) => {
        props.setCartData();
        handleRemoveWishList();
      })
    });
  }
  const increment = (item) => {
    CartApis.increment(item, props.userInfo.cartId, (reqBody) => {
      props.PostCartItemUpdate(reqBody, (resObj) => {
        props.setCartData();
      })
    })
  };
  const decrement = (item) => {
    CartApis.decrement(item, props.userInfo.cartId, '', (reqBody) => {
      if (reqBody.value == "update") {
        props.PostCartItemUpdate(reqBody, (resObj) => {
          props.setCartData();
        })
      } else {
        props.PostCartItemRemove(reqBody, (resObj) => {
          props.setCartData();
        });
      }
    })
  }
  const shareClick = (productIndex) => {
    props.accountDropdown(productIndex);
  }
  const data = props.cartData.length > 0 ? props.cartData.find(item1 => item1.voItem == item.voItem) : {};
  const wishListData = props.WishlistReducer.custsWishlistData.length > 0 ? props.WishlistReducer.custsWishlistData.find(item1 => item1.voItem == item.voItem) : {};

  return (
    <div className='col-sm-3'>
      <div key={props.i} className='card' style={{ cursor: 'pointer' }} >
        <div className='card-body'>
          {item.idp != 0 ? <div className='discount-div'>
            <p className='discount-text'>{Math.trunc(item.idp) + '%'} off</p>
          </div> : ''}
          <div className='product-status-div'>
            <p className='discount-text'>New</p>
          </div>
          <div className='product-image' onClick={() => handleView(item)}>
            <img src={item.filePath} className='img-fluid' />
          </div>
          <div className='product-content-wrap'>
            <div className='product-category'>
              <div className='pro-cat'>
                <a className=''>{item.vargam}</a>
              </div>
            </div>
            <SocialMediaShareComponent item={item} i={props.i} isAccountDropdown={props.isAccountDropdown} shareClick={shareClick} />
            {data && data.qty ? '' :  <a> <span>{wishListData && wishListData._id ? <i className="fa-solid fa-heart me-4 mb-2" onClick={handleRemoveWishList} style={{ fontSize: 18, color: "#d2421e" }}></i> : <i className="fa-regular fa-heart me-4 mb-2" onClick={handleWishList} style={{ fontSize: 18 }}></i> }</span></a>}
            {/* </div> */}
            <div className='d-flex'>
              <RatingComponent count={item.iAvgRating} />
            </div>
          </div>
          <div className='d-flex'>
            <p className='mb-0'>Units </p>
            <select className="form-select form-select-sm w-75 ms-3" aria-label="Default select example" value={unit} onChange={handleUnitChange}>
              {item.all.map((item1, i) => {
                return (
                  <option key={i} value={item1._id}>{item1.units} - ₹{item1.isPrice}</option>
                )
              }
              )}
            </select>
          </div>
          <div className='product-card-bottom'>
            <div className='d-flex '>
              <p className='price mb-0'>₹ {item.isPrice}</p>
              <p className='text-strikeoff mb-0'>{item.iMrp}</p>
            </div>
          </div>
          <div className='addcart-section'>
            {data && data.qty ?
              <div className='cart-buttons-div'>
                <button className='btn btn-success' onClick={() => decrement(item)}><i className='fa-solid fa-minus'></i></button>
                <input type='text' className='form-control' value={data.qty} readOnly />
                <button className='btn btn-success' onClick={() => increment(item)}><i className='fa-solid fa-plus'></i></button>
              </div> :
              <button className='btn addcart-button text-white fw-bold' onClick={() => handleAddCart(item)} ><i className='fa-solid fa-cart-shopping me-2'></i>Add cart </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  WishlistReducer: state.WishlistReducer
}};

const mapDistachToProps = (dispatch) => {
  return {
    PostAddToCartItem: (body, callback) => dispatch(PostAddToCartItem(body, callback)),
    PostCartItemUpdate: (body, callback) => dispatch(PostCartItemUpdate(body, callback)),
    PostCartItemRemove: (body, callback) => dispatch(PostCartItemRemove(body, callback)),
    PostAddItemToWishlist: (body, callback) => dispatch(PostAddItemToWishlist(body, callback)),
    PostRemoveItemFromWishlist: (id, callback) => dispatch(PostRemoveItemFromWishlist(id, callback)),
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback))
  }
};

export default connect(mapStateToProps, mapDistachToProps)(RelatedProductsSubComponent);
