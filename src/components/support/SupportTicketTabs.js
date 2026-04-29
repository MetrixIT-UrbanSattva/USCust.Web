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

import FooterComponent from '../footer';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import { Profile } from '../../containers/profile';
import { Header } from '../../containers/header';

import SupportTicketListComponent from '../support/SupportTicketListComponent'

import { supportTicketsList } from '../../actions/profile/ProfileDetailAction';
import hashHistory from '../../hashHistory';

class SupportTicketTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 'Active',
      supportTicketsListData: [],
      supportTicketsListCount: 0,
      actPgNum: 1,
      rLimit: 10,
      searchStr: '',
    }
  }
  componentDidMount() {
    this.supportTicketsList(this.state.key, this.state.actPgNum, this.state.rLimit, this.state.searchStr);
  }
  supportTicketsList = (key, actPgNum, rLimit, searchStr) => {
    const reqBody = {
      status: key, actPgNum, rLimit, searchStr
    }
    this.props.supportTicketsList(reqBody, (resObj) => {
      if (resObj.status == '200') {
        this.setState({ supportTicketsListData: resObj.resData.result.custsSupportList, supportTicketsListCount: resObj.resData.result.custsSupportListCount });
      } else {
        this.setState({ supportTicketsListData: [], supportTicketsListCount: 0 });
      }
    })
  }

  handleChangeLimit = (event) => {
    this.setState({ rLimit: event.target.value });
    this.supportTicketsList(this.state.key, this.state.actPgNum, event.target.value, this.state.searchStr)
  }

  handleChangeSearch = (event) => {
    this.setState({ searchStr: event.target.value });
    this.supportTicketsList(this.state.key, this.state.actPgNum, this.state.rLimit, event.target.value)
  }

  handleChangePage = (actPgNum) => {
    this.setState({ actPgNum });
    this.supportTicketsList(this.state.key, actPgNum, this.state.rLimit, this.state.searchStr)
  }


  handleChangeSearch = (event) => {
    this.setState({ searchStr: event.target.value });
    if (event.target.value === '') {
      this.supportTicketsList(this.state.key, this.state.actPgNum, this.state.rLimit, '')
    }
  }
  handleKeyInput = (e) => e.key === "Enter" && this.getUsersList();

  getUsersList = () => {
    this.supportTicketsList(this.state.key, this.state.actPgNum, this.state.rLimit, this.state.searchStr)
  }

  handleShowCreate = () => {
    hashHistory.push('/create-support')
  }

  handleItemTabChange = (val) => {
    this.setState({ key: val });
    this.supportTicketsList(val, this.state.actPgNum, this.state.rLimit, this.state.searchStr);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='checkout-section mt-3 mb-5'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <h3 className='screen-title'> Notifications </h3>
              </div>
            </div>
            <div className='row' id='notifications'>
              <Profile />
              <div className='col-sm-8'>
                <div className='row'>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={(val) => this.handleItemTabChange(val)}
                    className="mb-3"
                  >
                    <Tab eventKey="Active" title="Active">
                      <SupportTicketListComponent state={this.state} handleChangeLimit={this.handleChangeLimit} handleChangeSearch={this.handleChangeSearch} handleKeyInput={this.handleKeyInput} handleChangePage={this.handleChangePage} getUsersList={this.getUsersList} handleShowCreate={this.handleShowCreate} />
                    </Tab>
                    <Tab eventKey="Close" title="Closed" >
                      <SupportTicketListComponent state={this.state} handleChangeLimit={this.handleChangeLimit} handleChangeSearch={this.handleChangeSearch} handleKeyInput={this.handleKeyInput} handleChangePage={this.handleChangePage} getUsersList={this.getUsersList} handleShowCreate={this.handleShowCreate} />
                    </Tab>
                  </Tabs>
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
    supportTicketsList: (body, callback) => dispatch(supportTicketsList(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(SupportTicketTabs);