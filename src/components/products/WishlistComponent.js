/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { connect } from 'react-redux';

import FooterComponent from '../footer';
import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import { Profile } from '../../containers/profile';
import EachWishListComponent from './EachWishListComponent';
import { PostGetWishlistItemsWithPgn } from '../../actions/wish-list/WishlistAction';
import localForage from '../../hooks/localForage';
import NoData from '../../assets/images/no-data-found.jpg';

class WishlistComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CustsItemsWishList: [],
      CustsItemsWishListCount: 0,
      userInfo: {},
      cartData: [],
      isAccountDropdown: false
    }
  }

  async componentDidMount() {
    const userData = await localForage.getItem("userInfo");
    const userInfo = userData.value || {}
    this.setState({ userInfo })
    this.setCartData();
    this.getWishListData();
  }
  setCartData = async () => {
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    this.setState({ cartData });
  }
  getWishListData = () => {
    const reqBody = { crntPgNum: 1, pageLimit: 50 }
    this.props.PostGetWishlistItemsWithPgn(reqBody, (resObj) => {
      if (resObj.status == '200') {
        this.setState({ CustsItemsWishList: resObj.resData.result.CustsItemsWishList, CustsItemsWishListCount: resObj.resData.result.CustsItemsWishListCount })
      } else {
        this.setState({ CustsItemsWishList: [], CustsItemsWishListCount: 0 })
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
  render() {
    return (
      <div className='wrapper'>
        <Header count={this.state.cartData.length} />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='products-section my-5'>
          <div className='container-fluid auto-container'>
            <div className='row '>
              <Profile />
              <div className='col-sm-8'>
                <div className='card shadow mt-2'>
                  <div className='card-header bg-transparent '>
                    <div className='row mt-2'>
                      <h3 className='sub-title'>Wishlist</h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                  {this.state.CustsItemsWishList.length > 0 ? this.state.CustsItemsWishList.map((item, i) => (
                      <div className='col-sm-12 col-12'>
                        <EachWishListComponent i={i} item={item} userInfo={this.state.userInfo} setCartData={this.setCartData} getWishListData={this.getWishListData} shareClick={this.shareClick} isAccountDropdown={this.state.isAccountDropdown}/>
                      </div>))
                      :
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
              </div>
            </div>
          </div>
        </section>

        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
  }
};
const mapDistachToProps = (dispatch) => {
  return {
    PostGetWishlistItemsWithPgn: (body, callback) => dispatch(PostGetWishlistItemsWithPgn(body, callback)),
  };
};
export default connect(mapStateToProps, mapDistachToProps)(WishlistComponent);