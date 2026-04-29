/**
 * Copyright (C) Skill Works IT Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT Team <contact@skillworksit.com>, Jan 2023
 */

import React from 'react';

import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import FooterComponent from '../footer';
import localForage from '../../hooks/localForage';
import { Profile } from '../../containers/profile';
import { PostItemsList } from '../../actions/Items/ItemsActions';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import MbaskProdComponent from './MbaskProdComponent';
import { PostMonItemCreate } from '../../actions/mbasket/MonthBasketActions';
import hashHistory from '../../hashHistory';

class MbaskItemCreateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voItems: [],
      voiCodes: [],
      vocBasketItems: [],
      custsItemsListData: [],
      custsItemsListCount: 0,
      cartCount: 0,
      items: [],
      userInfo: {},
      key: 'all',
      crntPgNum: 1,
      pageLimit: 10,
      searchStr: '',
    };
  }

  componentDidMount() {
    this.postItemsList(this.state.key, this.state.crntPgNum, this.state.pageLimit, this.state.searchStr);
  }
  postItemsList = (key, crntPgNum, pageLimit, searchStr) => {
    const itemCategory = key === 'all' ? '' : key
    const reqBody = {
      itemCategory, crntPgNum, pageLimit, searchStr
    }
    this.props.PostItemsList(reqBody, (resObj) => {
      if (resObj.status == '200') {
        this.setState({ custsItemsListData: resObj.resData.result.custsItemsListData, custsItemsListCount: resObj.resData.result.custsItemsListCount })
      } else {
        this.setState({ custsItemsListData: [], custsItemsListCount: 0 })
      }
    })
  }

  cartData = async () => {
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    const userData = await localForage.getItem("userInfo");
    const userInfo = userData.value ? userData.value : {}
    this.setState({ cartCount: cartData.length, userInfo })
  }

  setData = (data) => {
    this.setState({ ...data })
  }
  handleBasketItemCreate = () => {
    const { voItems, voiCodes, vocBasketItems } = this.state;
    const reqObj = {
      bsktId: this.props.id,
      voItems,
      voiCodes,
      vocBasketItems: vocBasketItems
    };
    this.props.PostMonItemCreate(reqObj, (resObj) => {
      if (resObj && resObj.status == '200') {
        toast.success('Basket Created Successfully');
        setTimeout(() => {
          hashHistory.push('/m-basket')
        }, 100);
      }
    });
  };
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        <section className='profile-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row'>
              <Profile />
              <div className='col-sm-8'>
                <div className='card shadow mt-2'>
                  <div className='card-header bg-transparent '>
                    <div className='row mt-2'>
                      <h3 className='sub-title'>Item Create Of Basket</h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                    <div className='row justify-content-between'>
                      <div>
                        <MbaskProdComponent custsItemsListData={this.state.custsItemsListData} voItems={this.state.voItems} voiCodes={this.state.voiCodes} vocBasketItems={this.state.vocBasketItems} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.cartData} setData={this.setData} />
                      </div>
                      <div className='row mt-3 d-flex'>
                        <div className='text-center justify-content-center'>
                          <button className='btn btn-success' onClick={this.handleBasketItemCreate}>Submit</button> &nbsp;
                          <button className='btn btn-danger' onClick={() => hashHistory.push('/m-basket')}>Back</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
    PostItemsList: (body, callback) => dispatch(PostItemsList(body, callback)),
    PostMonItemCreate: (body, callback) => dispatch(PostMonItemCreate(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(MbaskItemCreateComponent);
