/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import { Component } from 'react';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { PostItemsList } from '../../actions/Items/ItemsActions';
import ProductComponent from './ProductComponent';

class TabsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 'all',
      custsItemsListData: [],
      custsItemsListCount: 0,
      crntPgNum: 1,
      pageLimit: 10,
      searchStr: '',
    }
  }
  componentDidMount() {
    this.postItemsList(this.state.key, this.state.crntPgNum, this.state.pageLimit, this.state.searchStr);
  }
  postItemsList = (key, crntPgNum, pageLimit, searchStr) => {
    const itemCategory = key === 'all' ? '': key
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
  handleItemTabChange = (val) => {
    this.setState({ key: val })
    this.postItemsList(val, this.state.crntPgNum, this.state.pageLimit, this.state.searchStr);
  }
  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={(val) => this.handleItemTabChange(val)}
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
          <ProductComponent custsItemsListData={this.state.custsItemsListData} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.props.cartData}/>
        </Tab>
        <Tab eventKey="Pulses" title="Pulses" >
          <ProductComponent custsItemsListData={this.state.custsItemsListData} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.props.cartData}/>
        </Tab>
        <Tab eventKey="Spices" title="Spices" >
          <ProductComponent custsItemsListData={this.state.custsItemsListData} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.props.cartData}/>
        </Tab>
        <Tab eventKey="Millets" title="Millets" >
          <ProductComponent custsItemsListData={this.state.custsItemsListData} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.props.cartData}/>
        </Tab>
        <Tab eventKey="Oils" title="Oils" >
          <ProductComponent custsItemsListData={this.state.custsItemsListData} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.props.cartData}/>
        </Tab>
        <Tab eventKey="Dry fruits" title="Dry fruits" >
          <ProductComponent custsItemsListData={this.state.custsItemsListData} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.props.cartData}/>
        </Tab>
        <Tab eventKey="Rice" title="Rice" >
          <ProductComponent custsItemsListData={this.state.custsItemsListData} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.props.cartData}/>
        </Tab>
        <Tab eventKey="Cereals" title="Cereals" >
          <ProductComponent custsItemsListData={this.state.custsItemsListData} custsItemsListCount={this.state.custsItemsListCount} keyValue={this.state.key} cartData={this.props.cartData}/>
        </Tab>
      </Tabs>
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
  };
};

export default connect(mapStateToProps, mapDistachToProps)(TabsComponent);