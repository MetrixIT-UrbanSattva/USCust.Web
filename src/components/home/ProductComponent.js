/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import { Component } from 'react';

import hashHistory from '../../hashHistory';
import NoData from '../../assets/images/no-data-found.jpg';
import ListItemViewComponent from '../products/ListItemViewComponent';
class ProductComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAccountDropdown: false,
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
  render() {
    const custsItemsListData = this.props.custsItemsListData;
    const custsItemsListCount = this.props.custsItemsListCount;
    return (
      <div>
        {custsItemsListData.length ?
          <div className='row product-grid-4 mt-5'>
            {custsItemsListData.map((item, i) => {
              return (
                <div className='col-lg-1-5 col-md-3 col-12 col-sm-6' key={item._id}>
                  <ListItemViewComponent item={item} i={i} custsItemsListData={custsItemsListData} cartData={this.props.cartData} shareClick={this.shareClick} state={this.state}/>
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

export default ProductComponent;