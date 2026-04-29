/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import hashHistory from '../../hashHistory';
import { AddressesListComponent } from '../../components/address';
import localForage from '../../hooks/localForage';
import { PostCustAdrsList, PutCustAdrsDelete, PutCustAdrsSetDefault } from '../../actions/Addresses/CustAdrsActions';

class AddressesList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      adrsList: [],
      isDefault: false,
      cart:[]
    }
  }
 async componentDidMount () {
    this.addressesList();
    const cartD = await localForage.getItem('cart');
    const cart = cartD.value || [];
    this.setState({cart})
  }
  addressesList = () => {
    this.props.PostCustAdrsList((resObj) => {
      if (resObj.status == '200') {
        this.setState({ adrsList: resObj.resData.result });
      } else {
        this.setState({ adrsList: [] });
      }
    })
  }
  createAddress = () => {
    hashHistory.push('/create-address');
  }
  editAddress = (id) => {
    hashHistory.push(`/edit-address/${id}`);
  }
  setDefaultChange = async (id, e) => {
    this.setState({ isDefault: e.target.value });
    this.props.PutCustAdrsSetDefault(id, async (resObj) => {
      if (resObj.status == '200') {
        await localForage.setItem('address', [resObj.resData.result]);
        setTimeout(() => {
          this.addressesList();
        }, 100);
      }
    })
  }
  deleteAdrs = (data) => {
    this.props.PutCustAdrsDelete(data._id, (resObj) => {
      if (resObj.status == '200') {
        toast.success('Address deleted successfully');
        this.addressesList();
      } else {
        toast.warn('Address delete failed');
      }
    })
  }
  render() {
    return (
      <div>
        <AddressesListComponent state={this.state} createAddress={this.createAddress} editAddress={this.editAddress} setDefaultChange={this.setDefaultChange} deleteAdrs={this.deleteAdrs} adrsList={this.state.adrsList} isDefault={this.state.isDefault} cart={this.state.cart}
        />
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
    PostCustAdrsList: (callback) => dispatch(PostCustAdrsList(callback)),
    PutCustAdrsDelete: (id, callback) => dispatch(PutCustAdrsDelete(id, callback)),
    PutCustAdrsSetDefault: (id, callback) => dispatch(PutCustAdrsSetDefault(id, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(AddressesList);