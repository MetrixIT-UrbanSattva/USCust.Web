/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { connect } from 'react-redux';

import { Profile } from '../../containers/profile';
import FooterComponent from '../footer';
import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import NoData from '../../assets/images/no-data-found.jpg';
import localforage from '../../hooks/localForage';
import { PostCustNtfcList, PostCustNtfcListUpdate } from '../../actions/notifications/NotificationAction';

class NotificationsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddToCart: false,
      isCartEmpty: false,
      actPgNum: 1,
      notificationList: [],
      cart: []
    }
  }

  async componentDidMount() {
    this.handleNtfcListUpd()
    const userData = await localforage.getItem("userInfo");
    const cartD = await localforage.getItem('cart');
    const cart = cartD.value || [];  
    const { actPgNum } = this.state;
    const reqBOdy = {
      actPgNum
    }
    this.props.PostCustNtfcList(reqBOdy, (resObj) => {
      if (resObj && resObj.status == '200') {
        this.setState({ notificationList: resObj.result.cusUsrsNtfcList })
      } else {
      }
    })
    this.setState({ userInfo: userData.value, cart });
  }
  handleNtfcListUpd = () => {
    this.props.PostCustNtfcListUpdate((resObj) => { });
  }

  render() {
    const notificationList = this.props.NotificationReducer.NotificationList;
    const notifications = notificationList.cusUsrsNtfcList;
    const notifCount = notificationList.cusUsrsNtfcListCount
    return (
      <div className='wrapper'>
        <Header count = {this.state.cart.length}/>
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='profile-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row'>
              <Profile />
              <div className='col-sm-8'>
                <div className='card shadow mt-2'>
                  <div className='card-header bg-transparent '>
                    <div className='row mt-2'>
                      <h3 className='sub-title'>Notifications</h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                    {notifCount > 0 ?
                      <div className='row justify-content-between'>
                        {notifications && notifications.map((list, i) => {
                          return (
                            <div className='col-sm-6' key={i}>
                              <div className='card card-border-light shadow-sm mt-4'>
                                <div className='card-body '>
                                  <div className='category-title-div'>
                                    <a className='product-title'>{list.nTitle} </a>
                                    <p className='mb-0 notification-description'>{list.nMsg}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
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
                      </div>}
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

const mapStateToProps = (state) => ({
  NotificationReducer: state.NotificationReducer,
});
const mapDistachToProps = (dispatch) => ({
  PostCustNtfcList: (body, callback) => dispatch(PostCustNtfcList(body, callback)),
  PostCustNtfcListUpdate: (callback) => dispatch(PostCustNtfcListUpdate(callback)),
});


export default connect(mapStateToProps, mapDistachToProps)(NotificationsComponent);
