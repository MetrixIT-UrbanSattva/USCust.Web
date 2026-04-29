/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import config from '../../../config/config.json';
import SocialMediaShareComponent from '../social-media/SocialMediaShareComponent';

import { PostAddToCartItem } from '../../actions/cart-items/CartItemsActions';
import RatingComponent from '../common/RatingComponent';
import { PostGetWishlistItems, PostRemoveItemFromWishlist } from '../../actions/wish-list/WishlistAction';
import CartApis from '../../CartApis';

function EachWishListComponent(props) {

  const [wishlist, setwishlist] = useState(true);

  useEffect(() => {
  }, [props.item]);

  const handleAddToCart = () => {
    CartApis.handleAddCart(props.item, props.userInfo.cartId, (reqBody) => {
      props.PostAddToCartItem(reqBody, (resObj) => {
        removeFromWishList();
        props.setCartData();
      })
    });
  }

  const removeFromWishList = () => {
    const reqBody = { voItem: props.item.voItem, voiCode: props.item.voiCode, itemData: props.item };
    props.PostRemoveItemFromWishlist(reqBody, (resObj) => {
      props.getWishListData();
      props.PostGetWishlistItems((resObj1) => { });
    })
  }

  return (
    <div key={props.i} className=' each-category-card mx-3 my-3'>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='col-sm-12 row align-items-center'>
          <div className='col-sm-2 col-3'>
            <div className='category-product-img1 me-3'>
              <img src={props.item.filePath} className='img-fluid' />
            </div>
          </div>
          <div className='col-sm-4 col-3'>
            <div className='category-title-div'>
              <a className='product-title'>{props.item.itemPeru}</a>
              <p className='mb-0'>Order will dispatch with in 2 Hours</p>
              <div className='d-flex'>
                <RatingComponent />
              </div>
              <div className='d-flex'>
                <p className='price mb-0'>{props.item.units} - ₹{props.item.isPrice}</p>
                <p className='text-strikeoff mb-0'>{props.item.iMrp}</p>
              </div>
            </div>
          </div>
          <div className='col-sm-2'>
            <button className='btn addcart-button text-white fw-bold' onClick={handleAddToCart}><i className='fa-solid fa-cart-shopping me-2'></i>Add cart </button>
          </div>
          <div className='col-sm-2'>
            <div className='d-flex justify-content-end'>
              {/* <a className='btn btn-sm btn-outline-success m-2'  ><i class="fa-regular fa-heart"></i></a> */}
              <a className='btn btn-sm btn-outline-danger m-2' onClick={removeFromWishList} ><i class="fa-solid fa-trash"></i></a>
            </div>
          </div>
          <div className='col-sm-2'>
            <SocialMediaShareComponent item={props.item} i={props.i} isAccountDropdown={props.isAccountDropdown} shareClick={props.shareClick} wishlist={wishlist} />
          </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
  }
};
const mapDistachToProps = (dispatch) => {
  return {
    PostAddToCartItem: (body, callback) => dispatch(PostAddToCartItem(body, callback)),
    PostRemoveItemFromWishlist: (body, callback) => dispatch(PostRemoveItemFromWishlist(body, callback)),
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback)),
  };
};
export default connect(mapStateToProps, mapDistachToProps)(EachWishListComponent);