import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import ListItemViewComponent from '../products/ListItemViewComponent';

import { PostMonthBasketList } from '../../actions/mbasket/MonthBasketActions';

import NoData from '../../assets/images/no-data-found.jpg';


class CommonProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccountDropdown: false
    }
  }

  viewMoreClick = () => {
    const keyVal = this.props.keyValue
    hashHistory.push(`/products/viewmore/${keyVal}`);
  }

  shareClick = (productIndex) => {
    this.setState({ isAccountDropdown: productIndex});
  }
  render() {
    const monthBasketList = this.props.monthBasketList;
    const custsItemsListData = this.props.ItemsListReducer.custsItemsListData;
    return (
      <div>
        {monthBasketList && monthBasketList.length > 0 ?
          <div className='row'>
            {monthBasketList.map((item, i) => {
              return (
                <div className='col-sm-3 col-6 p-2' key={i}>
                  <ListItemViewComponent item={item} i={i} custsItemsListData={custsItemsListData} cartData={this.props.cartData} shareClick={this.shareClick} state={this.state}/>
                </div>
              )
            })}
          </div> :
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
        }
        {monthBasketList && monthBasketList.length > 12 ? <div className='text-end' onClick={this.viewMoreClick}> <button className='btn btn-danger'>View More</button></div> : ''}
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  ItemsListReducer: state.ItemsListReducer

});
const mapDistachToProps = (dispatch) => ({
  PostMonthBasketList: (body, cb) => dispatch(PostMonthBasketList(body, cb))
});

export default connect(mapStateToProps, mapDistachToProps)(CommonProduct);
