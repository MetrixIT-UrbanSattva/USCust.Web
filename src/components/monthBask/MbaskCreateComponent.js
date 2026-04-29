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
import { Profile } from '../../containers/profile';
import { PostItemsList } from '../../actions/Items/ItemsActions';
import { connect } from 'react-redux';
import MbaskProdComponent from './MbaskProdComponent';
import { PostMonthBasketCreate } from '../../actions/mbasket/MonthBasketActions';
import hashHistory from '../../hashHistory';

class MonthBasketCreateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bName: '',
      voItems: [],
      voiCodes: [],
      vocBasketItems: [],
      custsItemsListData: [],
      custsItemsListCount: 0,
      key: 'all',
      crntPgNum: 1,
      pageLimit: 10,
      searchStr: '',
      errorMessage: '',
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

  handleBasName = (e) => this.setState({ bName: e.target.value, errorMessage: '' });
  setData = (data) => {
    this.setState({ ...data })
  }
  handleBasketCreate = () => {
    const { bName, voItems, voiCodes, vocBasketItems } = this.state;
    if (!bName) {
      this.setState({ errorMessage: 'Basket Name is Required' });
    } else {
      const reqObj = {
        bName,
        voItems,
        voiCodes,
        vocBasketItems
      };
      this.props.PostMonthBasketCreate(reqObj, (resObj) => {
        if (resObj && resObj.status == '200') {
          setTimeout(() => {
            hashHistory.push('/m-basket')
          }, 100);
        }
      });
    }
  };
  render() {
    const { bName, errorMessage } = this.state;
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
                      <h3 className='sub-title'>Create MonthBasket </h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                    <div className='row justify-content-between'>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <div className='mb-2'>
                            <label htmlFor='form-label' className='form-label'>
                              Basket Name
                              <span className='text-danger'>*</span>
                            </label>
                            <input type='text' value={bName} onChange={this.handleBasName} className='form-control' placeholder='Basket Name' maxLength='40' />
                          </div>
                        </div>
                      </div>
                      <div>
                        <MbaskProdComponent custsItemsListData={this.state.custsItemsListData} voItems={this.state.voItems} voiCodes={this.state.voiCodes} vocBasketItems={this.state.vocBasketItems} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} setData={this.setData} />
                      </div>
                      <div className='text-center'>
                        <p className='text-danger'>{errorMessage}</p>
                      </div>
                      <div className='row mt-3 d-flex'>
                        <div className='text-center justify-content-center'>
                          <button className='btn btn-success' onClick={this.handleBasketCreate}>Submit</button> &nbsp;
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
    PostMonthBasketCreate: (body, callback) => dispatch(PostMonthBasketCreate(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(MonthBasketCreateComponent);
