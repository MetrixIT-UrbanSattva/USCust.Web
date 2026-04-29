/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import { Component } from 'react';

import hashHistory from '../../hashHistory';
import NoData from '../../assets/images/no-data-found.jpg';
import MbaskItemsComponent from '../monthBask/MbaskItemsComponent'
var { v4: uuidv4 } = require('uuid');
import localForage from '../../hooks/localForage';

class MbaskProdComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAccountDropdown: false,
      voItems: this.props.voItems,
      voiCodes: this.props.voiCodes,
      vocBasketItems: this.props.vocBasketItems
    }
  }
  viewMoreClick = () => {
    const keyVal = this.props.keyValue
    hashHistory.push(`/products/viewmore/${keyVal}`);
  }
  shareClick = (productIndex) => {
    if (productIndex === this.state.isAccountDropdown) {
      this.setState({ isAccountDropdown: false });
    } else {
      this.setState({ isAccountDropdown: productIndex });
    }
  }
  handleAddBasket = async (item, basketData, baskItemD) => {
    let voItems = [item.voItem, ...this.state.voItems];
    let voiCodes = [item.voiCode, ...this.state.voiCodes]
    let vocBasketItems = [];
    const items = {
      itemPeru: item.itemPeru,
      units: item.units,
      voiCode: item.voiCode,
      voItem: item.voItem,
      qty: 1,
      item: item.item,
      itemCode: item.itemCode,
      vibagam: item.vibagam,
      ipPack: item.ipPack,
      samuham: item.samuham,
      vargam: item.vargam,
      inSearch: item.inSearch,
      icn: item.icn,
      siCount: item.siCount,
      soiCount: item.soiCount,
      scCount: item.scCount,
      uqaaQty: item.uqaaQty,
      uqapQty: item.uqapQty,
      uqbQty: item.uqbQty,
      uqcQty: item.uqcQty,
      iTotalRatings: item.iTotalRatings,
      iRatedUsers: item.iRatedUsers,
      iAvgRating: item.iAvgRating,
      isPrice: item.isPrice,
      iMrp: item.iMrp,
      ida: item.ida,
      idp: item.idp,
      filePath: item.filePath,
      _id: uuidv4()
      // seq: 
    }
    await localForage.setItem('bask', basketData);
    await localForage.setItem('baskItems', baskItemD);

    vocBasketItems.push(items, ...this.state.vocBasketItems);
    this.props.setData({ voItems, voiCodes, vocBasketItems })
    this.setState({ voItems, voiCodes, vocBasketItems })
  }

  render() {
    const custsItemsListData = this.props.custsItemsListData;
    const baskId = this.props.baskId;
    const custsItemsListCount = this.props.custsItemsListCount;

    return (
      <div>
        {custsItemsListData.length ?
          <div className='row product-grid-4 mt-5'>
            {custsItemsListData.map((item, i) => {
              return (
                <div className='col-lg-6 col-md-3 col-12 col-sm-6' key={item._id}>
                  <MbaskItemsComponent item={item} i={i} custsItemsListData={custsItemsListData} baskId={baskId} cartData={this.props.cartData} handleItemsList={this.props.handleItemsList} shareClick={this.shareClick} handleAddBasketItem={this.handleAddBasket} state={this.state} />
                </div>
              )
            })}
          </div> :
          <div className='col-md-12 mt-10'>
            <div className='product-cart-wrap' >
              <div className='card-body p-2'>
                <div className='text-center'>
                  <img src={NoData} width={250} />
                </div>
                <div className='product-content-wrap text-center'>
                  <p className='mb-0'><strong>No Data Found </strong></p>
                </div>
              </div>
            </div>
          </div>
        }
        {custsItemsListCount > 10 ? <div className='text-end' onClick={this.viewMoreClick}> <button className='btn btn-danger'>View More</button></div> : ''}
      </div>
    );
  }

}

export default MbaskProdComponent;