/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import FooterComponent from '../footer';
import { Profile } from '../../containers/profile';
import { PostItemTotalViewedList } from '../../actions/Items/ItemsActions';
import NoData from '../../assets/images/no-data-found.jpg';
import Pagination from 'react-js-pagination';
import ListItemViewComponent from '../products/ListItemViewComponent';
import localForage from '../../hooks/localForage';

class ViewedProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddToCart: false,
      ViewedItemList: [],
      crntPgNum: 1,
      pageLimit: 10,
      searchStr: '',
      cartCount: 0,
      userInfo: {},
      unit: {},
      isAccountDropdown: false,
    }
  }

  componentDidMount() {
    const { crntPgNum, pageLimit, searchStr } = this.state;
    this.ViewedListData(crntPgNum, pageLimit, searchStr);
    this.cartData();
  }
  ViewedListData = (crntPgNum, pageLimit, searchStr) => {
    const reqBody = {
      crntPgNum,
      pageLimit,
      searchStr
    }
    this.props.PostItemTotalViewedList(reqBody, (resObj) => {
      if (resObj && resObj.status == '200') {
        this.setState({ ViewedItemList: resObj.resData.result });
      }
    })
  }
  cartData = async () => {    
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    this.setState({ count: cartData.length, cartData });
  }
  handleAddCart = () => {
    this.setState({ isAddToCart: true })
  }
  unitsChange = (e) => {
    let unit = this.state.unit;
    unit['_id'] = e.target.value;
    this.setState({ unit })
  }

  handleChangePage = (pageNum) => {
    this.setState({crntPgNum: pageNum});
    const { crntPgNum, pageLimit, searchStr } = this.state;
    this.ViewedListData(pageNum, pageLimit, searchStr);
  }

  shareClick = (productIndex) => {
    if (productIndex === this.state.isAccountDropdown) {
      this.setState({ isAccountDropdown: false });
    } else {
      this.setState({ isAccountDropdown: productIndex });
    }
  }

  render() {
    const { ViewedItemList } = this.state;
    let custsItemsListData = ViewedItemList && ViewedItemList.CustsItemsViewedList;
    const custItemsCount = ViewedItemList && ViewedItemList.CustsItemsViewedCount;
    return (
      <div className='wrapper'>
        <Header count = {this.state.count}/>
        <BreadcrumbsComponent />
        <section className='profile-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row'>
              <Profile />
              <div className='col-sm-8'>
                <div className='card shadow mt-2'>
                  <div className='card-header bg-transparent '>
                    <div className='row mt-2'>
                      <h3 className='sub-title'>My Viewed Products</h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                    <div className='row justify-content-between'>
                      {custsItemsListData && custsItemsListData.length > 0 ?
                        <div className='row mt-5'>
                          {custsItemsListData.map((item, i) => {
                            return (
                              <div className='col-sm-3 col-6 p-2' key={i}>
                                <ListItemViewComponent  i={i} state={this.state} custsItemsListData={custsItemsListData} handleAddCart={this.handleAddCart} cartData={this.cartData} unitsChange={this.unitsChange} item={item} shareClick={this.shareClick} />
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
                    </div>
                  </div>
                  {custItemsCount > 10 && <div className='mt-5'>
                  <Pagination
                    activePage={this.state.crntPgNum}
                    itemsCountPerPage={Number(this.state.pageLimit)}
                    totalItemsCount={custItemsCount}
                    pageRangeDisplayed={5}
                    onChange={this.handleChangePage}
                    activeLinkClass='active-a-item'
                  />
                </div>}
                </div>
              </div>
            </div>
          </div>

        </section>
        <FooterComponent />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostItemTotalViewedList: (body, callback) => dispatch(PostItemTotalViewedList(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(ViewedProductsComponent);