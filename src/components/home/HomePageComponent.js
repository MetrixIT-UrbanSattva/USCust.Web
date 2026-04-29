/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';

import '../../styles/Styles.css';
import '../../styles/ResponsiveStyles.css';

import BigBannerComponent from './BigBannerComponent';
import CommonTabsComponent from '../common/CommonTabsComponent';
import FooterComponent from '../footer/FooterComponent';
import { Header } from '../../containers/header';
import MobileFooterComponent from '../footer/MobileFooterComponent';
import PreFooterComponent from './PreFooterComponent';
import FeaturedCategoriesComponent from './FeaturedCategoriesComponent';
import SmallBannerComponent from './SmallBannerComponent';
import localForage from '../../hooks/localForage';
import RcntlyViewedProdComponent from '../products/RcntlyViewedProdComponent';
import TabsComponent from './TabsComponent';
import asideBanner from '../../assets/images/banners/oil.png';
import SalesOrdersGrpComponent from './SalesOrdersGrpComponent';

class HomePageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      userInfo: {}
    }
  }
  async componentDidMount() {
    const accesstokenData = await localForage.getItem('accesstoken');
    this.cartData();
  }
  cartData = async () => {
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    const userData = await localForage.getItem("userInfo");
    const userInfo = userData.value ? userData.value : {}
    this.setState({ cartCount: cartData.length, userInfo })
  }

  render() {
    const count = this.state.userInfo.info && this.state.userInfo.info.sogActCount;
    return (
      <div className='wrapper' id='mobile-wrapper'>
        <Header count={this.state.cartCount} />
        {/* <!--  =============================  section-2 featured section start  ================================  --> */}
        <section className='popular-categories section-padding category-section'>
          <FeaturedCategoriesComponent />
        </section>
        {count > 0 && <SalesOrdersGrpComponent count={count} />}
        {/* <!--  =============================  banner slider start  ================================  --> */}
        <div className='home-slider position-relative'>
          <div className='container' >
            <div className='home-slide-cover'>
              <div className='hero-slider-1 style-4 dot-style-1 dot-style-1-position-1 slick-initialized slick-slider slick-dotted'>
                <div className='slick-list draggable'>
                  <BigBannerComponent />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--  =============================  section-4 featured section start  ================================  --> */}
        <section className='popular-categories section-padding featured-section'>
          <SmallBannerComponent />
        </section>

        {/* <!--  =============================  section-4 Recent section start  ================================  --> */}
        <section className='popular-categories section-padding featured-section'>
          <div className='container-fluid auto-container'>
            {/* <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h1 className='title'>Recently Viewed Products</h1>
              </div>
            </div> */}
            <div className='col-sm-12'>
              <RcntlyViewedProdComponent cartData={this.cartData} />
            </div>
          </div>
        </section>

        {/* <!-- =============================== section 3 popular products start ================================= --> */}
        <section className='popular-products product-tabs section-padding position-relative'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h1 className='title'>Our New Products </h1>
              </div>
            </div>
            <div className='col-sm-12'>
              <TabsComponent cartData={this.cartData} />
            </div>
          </div>
        </section>
        {/* <!-- =============================== section 4 Daily Best Sells start ================================= --> */}
        <section className='popular-products my-5' id='month-basket'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h1 className='title'> Month Basket </h1>
              </div>
            </div>
            <div className='row mt-2'>
              <div className='col-sm-3 '>
                <div className='banner-img-section'>
                  <div className=' card'>
                    <div className='banner-text'>
                      <h2 className='mb-100'>Month<br /> Basket</h2>
                      <button className='btn btn-sm btn-success'>shop now <i className='fa fa-arrow-right'></i></button>
                    </div>
                    <img src={asideBanner} className='aside-banner' />
                  </div>
                </div>
              </div>
              <div className='col-sm-9'>
                <CommonTabsComponent cartData={this.cartData} />
              </div>
            </div>
          </div>
        </section>
        {/* ================================= section 7 Pre footer banner Start ============================ */}
        <PreFooterComponent />

        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent className='d-sm-none d-block' />
        <section className='mobile-footer-section d-lg-none d-block'>
          <div className='mobile-footer-div'>
            <MobileFooterComponent />
          </div>
        </section>
      </div>
    );
  }

}

export default HomePageComponent;
