/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import RatingComponent from '../common/RatingComponent';
import hashHistory from '../../hashHistory';

import { PostItemsList } from '../../actions/Items/ItemsActions';
import RelatedProductsSubComponent from './RelatedProductsSubComponent';

const RelatedProductComponent = (props) => {

  const [similarItemsList, setSimilarItemsList] = useState([]);
  const [similarItemsCount, setSimilarItemsCount] = useState([]);
  const [isAccountDropdown, setIsAccountDropdown] = useState(false);
  const itemDetailsView = props.ItemsListReducer.custsItemDetailsView

  useEffect(() => {
    similarItemsListData();
  }, [itemDetailsView])

  const similarItemsListData = () => {
    const reqBody = { crntPgNum: 1, pageLimit: 50, similarObj: { itemCommonName: itemDetailsView.icn, manufacuter: itemDetailsView.maker, brand: itemDetailsView.make, itemId: itemDetailsView.item }, searchStr: '' }
    props.PostItemsList(reqBody, (resObj) => {
      if (resObj.status == '200') {
        setSimilarItemsList(resObj.resData.result.custsItemsListData);
        setSimilarItemsCount(resObj.resData.result.custsItemsListCount);
      } else {
        setSimilarItemsList([]);
        setSimilarItemsCount(0);
      }
    })
  }
  const accountDropdown = (productIndex) => {
    if (productIndex === isAccountDropdown) {
      setIsAccountDropdown(false)
    } else {
      setIsAccountDropdown(productIndex)
    }
}
  return (
    <div className='related-products-section my-3'>
      {similarItemsList.length > 0 &&
        <div className='row'>
          <div className='col-sm-12 col-12'>
            <h2 className='foo_wid_title '>Related Products</h2>
          </div>
        </div>
      }
      <div className='row'>
        <div className='row mt-4'>
          {similarItemsList && similarItemsList.length > 0 && similarItemsList.map((item, i) => {
            return  <RelatedProductsSubComponent i={i} item={item} cartData={props.cartData} setCartData={props.setCartData} itemApi={props.itemApi} isAccountDropdown={isAccountDropdown} userInfo={props.userInfo} accountDropdown={accountDropdown} similarItemsList={similarItemsList} />
          }
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ItemsListReducer: state.ItemsListReducer
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostItemsList: (body, callback) => dispatch(PostItemsList(body, callback)),
    PostAddToCartItem: (body, callback) => dispatch(PostAddToCartItem(body, callback)),
    PostCartItemUpdate: (body, callback) => dispatch(PostCartItemUpdate(body, callback)),
    PostCartItemRemove: (body, callback) => dispatch(PostCartItemRemove(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(RelatedProductComponent);

