/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import '../../styles/Styles.css';
import ListItemViewComponent from '../products/ListItemViewComponent';
import { PostItemViewedList } from '../../actions/Items/ItemsActions';

class RcntlyViewedProdComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ViewedItemList: [],
      unit: {},
      path: '',
      crntPgNum: 1,
      pageLimit: 10,
      searchStr: '',
      isAccountDropdown: false
    }
  }

  componentDidMount() {
    this.ViewedListData();
  }
  ViewedListData = () => {
    const { crntPgNum, pageLimit, searchStr } = this.state;
    const reqBody = {
      crntPgNum,
      pageLimit,
      searchStr
    }
    this.props.PostItemViewedList(reqBody, (resObj) => {
      if (resObj && resObj.status == '200') {
        this.setState({ ViewedItemList: resObj.resData.result.custItemsViewedList })
      }
    })
  }

  shareClick = (productIndex) => {
    if (productIndex === this.state.isAccountDropdown) {
      this.setState({ isAccountDropdown: false });
    } else {
      this.setState({ isAccountDropdown: productIndex });
    }
  }

  cartData = () => {
    this.props.cartData()
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    const { ViewedItemList } = this.state;
    const custsItemsListData = this.props.ItemsListReducer.custsItemsListData;
    return (
      <div className='related-products-section my-5' >
        {
          ViewedItemList && ViewedItemList.length > 0 ?
            <><div className='row text-center '>
              <div className='col-sm-12 col-12'>
                <h2 className='foo_wid_title '>Recently Viewed Products</h2>
              </div>
            </div>
              <div  style={{ position: "relative"}}>
                <Carousel responsive={responsive} >
                  {ViewedItemList.map((item, i) => {
                    return (
                      <div className='col-sm-8 col-6 p-2 m-5' key={i}>
                        <ListItemViewComponent item={item} i={i} custsItemsListData={custsItemsListData} cartData={this.cartData} shareClick={this.shareClick} state={this.state} itemApi={this.props.itemApi} />
                      </div>
                    );
                  })}
                </Carousel>
              </div></>
            : null
        }
      </div >
    );
  }
}


const mapStateToProps = (state) => {
  return {
    ItemsListReducer: state.ItemsListReducer
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostItemViewedList: (body, callback) => dispatch(PostItemViewedList(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(RcntlyViewedProdComponent);

