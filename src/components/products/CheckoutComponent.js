/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import hashHistory from '../../hashHistory';
import FooterComponent from '../footer';
import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import { PostCustAdrsList } from '../../actions/Addresses/CustAdrsActions';
import CheckoutAdrsComponent from './CheckoutAdrsComponent';
import localForage from '../../hooks/localForage';
import RatingComponent from '../common/RatingComponent';
import { PostMyOrdersCreate } from '../../actions/my-orders/CustMyOrdersAction';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    height: '90%'
  },
};
class CheckoutComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAddToCart: false,
      isCartEmpty: false,
      isEnableCheckout: false,
      adrsList: [],
      isDefault: false,
      cartData: [],
      cartItemsData: [],

      // groups: [],
      pmcGroup: [],
      pmcitems: [],
      pmcitemsIds: [],
      pmcMrpTotal: 0,
      pmcItemsCount: 0,
      pmcItemsQty: 0,
      pmcDiscPercentage: 0,
      pmcDiscAmount: 0,
      totalgrpSavings: 0,

      srGroup: [],
      sritemsIds: [],
      srItems: [],
      srMrpTotal: 0,
      srItemsCount: 0,
      srItemsQty: 0,
      srDiscPercentage: 0,
      srDiscAmount: 0,
      srgrpSavings: 0,

      odGroup: [],
      oditemsIds: [],
      odItems: [],
      odMrpTotal: 0,
      odItemsCount: 0,
      odItemsQty: 0,
      odDiscPercentage: 0,
      odDiscAmount: 0,
      odgrpSavings: 0,

      // total
      totalGrpsItems: 0,
      totalGrpsQtySum: 0,
      totalMrpSum: 0,
      subTotal: 0,
      dCharges: 0,
      nextDayDispatch: '',
      twoDayDispatch: '',
    }
  }
  async componentDidMount() {
    this.addressesList();
    this.setCartData();
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
  setCartData = async () => {
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    const cartItemsD = await localForage.getItem('cartItems');
    const cartItemsData = cartItemsD.value || [];
    this.setState({ cartData, cartItemsData });
    this.pmcGroup(cartItemsData, cartData);
    this.srGroup(cartItemsData, cartData);
    this.odGroup(cartItemsData, cartData);
    this.totalallGrpsPrice(cartItemsData, cartData);
    this.totalAllMrpsPrice(cartItemsData, cartData);
  }

  pmcGroup = (cartItemsData, cartData) => {
    const pmcGroup = cartItemsData.filter(item => ['Pulses', 'Millets', 'Cereals'].includes(item.vargam));
    let pmcitemsIds = [];
    let pmcitems = pmcGroup.map(item => {
      const qtyList = cartData.length > 0 && cartData.filter(item1 => item1.voItem == item.voItem);
      const qty = qtyList && qtyList.map(item1 => item1.qty);
      pmcitemsIds.push(item.voItem);
      const itm = {
        itemId: item._id,
        itemCode: item.itemCode,
        voItem: item.voItem,
        voiCode: item.voCode,
        itemSection: item.vibagam,
        premiumPackage: item.ipPack,
        itemGroup: item.samuham,
        category: item.vargam,
        itemCommonName: item.icn,
        itemName: item.itemPeru,
        itemPath: item.filePath,
        mrp: item.iMrp,
        sPrice: item.isPrice,
        asPrice: item.isPrice,
        itemQty: qty[0],
        discPercentage: item.idp,
        discAmount: item.ida,
        offer: 0,
        totalDisc: item.ida,
        mrpTotal: qty * item.iMrp,
        asellingPriceTotal: item.isPrice * qty,
        sellingPriceTotal: item.isPrice * qty,
        totalAmount: item.iMrp,
        aNetAmount: item.isPrice * qty,
        netAmount: item.isPrice * qty,
        units: item.units
      };
      return itm;

    })
    const pmcItemsCount = pmcGroup.length;
    const pmcSubtotal = this.calculateTotal(pmcGroup, cartData, (item, qtyItem) => {
      return item.isPrice * (qtyItem ? qtyItem.qty : 0);
    });
    const pmcMrpTotal = this.calculateTotal(pmcGroup, cartData, (item, qtyItem) => {
      return item.iMrp * (qtyItem ? qtyItem.qty : 0);
    });
    const pmcItemsQty = this.calculateTotal(pmcGroup, cartData, (item, qtyItem) => {
      return qtyItem.qty || 0;
    });
    const totalgrpSavings = pmcMrpTotal - pmcSubtotal;
    const originalGrpPrice = totalgrpSavings + pmcSubtotal;
    const pmcDiscPercentage = (totalgrpSavings / originalGrpPrice) * 100;
    this.setState({ pmcGroup, pmcSubtotal, pmcMrpTotal, pmcitems, pmcItemsCount, pmcItemsQty, pmcDiscPercentage, totalgrpSavings, pmcitemsIds })
  }
  srGroup = (cartItemsData, cartData) => {
    const srGroup = cartItemsData.filter(item => ['Spices', 'Rice'].includes(item.vargam));
    let sritemsIds = [];
    let srItems = srGroup.map(item => {
      const qtyList = cartData.length > 0 && cartData.filter(item1 => item1.voItem == item.voItem);
      const qty = qtyList && qtyList.map(item1 => item1.qty);
      sritemsIds.push(item.voItem);
      const itm = {
        itemId: item._id,
        itemCode: item.itemCode,
        voItem: item.voItem,
        voiCode: item.voCode,
        itemSection: item.vibagam,
        premiumPackage: item.ipPack,
        itemGroup: item.samuham,
        category: item.vargam,
        itemCommonName: item.icn,
        itemName: item.itemPeru,
        itemPath: item.filePath,
        mrp: item.iMrp,
        sPrice: item.isPrice,
        asPrice: item.isPrice,
        itemQty: qty[0],
        discPercentage: item.idp,
        discAmount: item.ida,
        offer: 0,
        totalDisc: item.ida,
        mrpTotal: qty * item.iMrp,
        asellingPriceTotal: item.isPrice * qty,
        sellingPriceTotal: item.isPrice * qty,
        totalAmount: item.iMrp,
        aNetAmount: item.isPrice * qty,
        netAmount: item.isPrice * qty,
        units: item.units
      };
      return itm;
    });
    const srItemsCount = srGroup.length;
    const srSubtotal = this.calculateTotal(srGroup, cartData, (item, qtyItem) => {
      return item.isPrice * (qtyItem ? qtyItem.qty : 0);
    });
    const srMrpTotal = this.calculateTotal(srGroup, cartData, (item, qtyItem) => {
      return item.iMrp * (qtyItem ? qtyItem.qty : 0);
    });
    const srItemsQty = this.calculateTotal(srGroup, cartData, (item, qtyItem) => {
      return qtyItem.qty || 0;
    });
    const srgrpSavings = srMrpTotal - srSubtotal;
    const originalGrpPrice = srgrpSavings + srSubtotal;
    const srDiscPercentage = (srgrpSavings / originalGrpPrice) * 100;
    this.setState({ srGroup, srSubtotal, srMrpTotal, srItems, srItemsCount, srItemsQty, srDiscPercentage, srgrpSavings, sritemsIds })
  }
  odGroup = (cartItemsData, cartData) => {
    const odGroup = cartItemsData.filter(item => ['Oils', 'Dry fruits'].includes(item.vargam));
    let oditemsIds = [];
    let odItems = odGroup.map(item => {
      const qtyList = cartData.length > 0 && cartData.filter(item1 => item1.voItem == item.voItem);
      const qty = qtyList && qtyList.map(item1 => item1.qty);
      oditemsIds.push(item.voItem);
      const itm = {
        itemId: item._id,
        itemCode: item.itemCode,
        voItem: item.voItem,
        voiCode: item.voCode,
        itemSection: item.vibagam,
        premiumPackage: item.ipPack,
        itemGroup: item.samuham,
        category: item.vargam,
        itemCommonName: item.icn,
        itemName: item.itemPeru,
        itemPath: item.filePath,
        mrp: item.iMrp,
        sPrice: item.isPrice,
        asPrice: item.isPrice,
        itemQty: qty[0],
        discPercentage: item.idp,
        discAmount: item.ida,
        offer: 0,
        totalDisc: item.ida,
        mrpTotal: qty * item.iMrp,
        asellingPriceTotal: item.isPrice * qty,
        sellingPriceTotal: item.isPrice * qty,
        totalAmount: item.iMrp,
        aNetAmount: item.isPrice * qty,
        netAmount: item.isPrice * qty,
        units: item.units
      };
      return itm;
    });
    const odItemsCount = odGroup.length;
    const odSubtotal = this.calculateTotal(odGroup, cartData, (item, qtyItem) => {
      return item.isPrice * (qtyItem ? qtyItem.qty : 0);
    });
    const odMrpTotal = this.calculateTotal(odGroup, cartData, (item, qtyItem) => {
      return item.iMrp * (qtyItem ? qtyItem.qty : 0);
    });
    const odItemsQty = this.calculateTotal(odGroup, cartData, (item, qtyItem) => {
      return qtyItem.qty || 0;
    });
    const odgrpSavings = odMrpTotal - odSubtotal;
    const originalGrpPrice = odgrpSavings + odSubtotal;
    const odDiscPercentage = (odgrpSavings / originalGrpPrice) * 100;
    this.setState({ odGroup, odSubtotal, odMrpTotal, odItems, odItemsCount, odItemsQty, odDiscPercentage, odgrpSavings, oditemsIds })
  }

  calculateTotal = (Group, cartData, getItemValue) => {
    return Group.reduce((acc, item) => {
      const qtyItem = cartData.find(c => c.voItem === item.voItem);
      return acc + getItemValue(item, qtyItem);
    }, 0);
  }
  totalallGrpsPrice = (cartItemsData, cartData) => {
    const totalGrpsItems = cartData.length;
    const totalQty = cartData.length ? cartData.map(item => item.qty) : [];
    const totalGrpsQtySum = totalQty.reduce((qty1, qty2) => qty1 + qty2, 0);
    const totalPriceSum = cartData.reduce((acc, curr) => {
      const item = cartItemsData.find(item => item.voItem === curr.voItem);
      return acc + (item ? item.isPrice * curr.qty : 0);
    }, 0);
    this.setState({ subTotal: totalPriceSum, totalGrpsQtySum, totalGrpsItems })
  }
  totalAllMrpsPrice = (cartItemsData, cartData) => {
    const totalMrpSum = cartData.reduce((acc, curr) => {
      const item = cartItemsData.find(item => item.voItem === curr.voItem);
      return acc + (item ? item.iMrp * curr.qty : 0);
    }, 0);
    this.setState({ totalMrpSum });
  }
  getDispatchDate = (category) => {
    if (category == 'pmcGroup') {
      this.setState({ nextDayDispatch: moment().add(1, 'days').format('YYYY-MM-DD') });
      return moment().add(1, 'days').format('MM/DD/YYYY') ? 'Next day dispatch' : '';
    } else if (category === 'srGroup' || category === 'odGroup') {
      this.setState({ twoDayDispatch: moment().add(2, 'days').format('YYYY-MM-DD') });
      return moment().add(2, 'days').format('MM/DD/YYYY') ? 'Dispatch in 2 days' : '';
    } else {
      return '';
    }
  }
  placeOrder = () => {
    const { totalMrpSum, subTotal, totalGrpsItems, totalGrpsQtySum, dCharges,
      pmcGroup, nextDayDispatch, pmcMrpTotal, pmcSubtotal, pmcitems, pmcItemsQty, pmcDiscPercentage, totalgrpSavings, pmcitemsIds,
      srGroup, twoDayDispatch, srMrpTotal, srSubtotal, srItems, srItemsQty, srDiscPercentage, srgrpSavings, sritemsIds,
      odGroup, odMrpTotal, odSubtotal, odItems, odItemsQty, odDiscPercentage, odgrpSavings, oditemsIds } = this.state;
    this.setState({ paymentModal: true });
    const adrsList = this.state.adrsList.length > 0 && this.state.adrsList[0]
    const totalSavings = totalMrpSum - subTotal;
    const originalPrice = totalSavings + subTotal;
    const discPercentage = (totalSavings / originalPrice) * 100;

    const totalDiscAmount = totalSavings + 0
    let year = moment().year(), month = moment().month(), day = moment().day();

    const soGrp = []
    pmcitems && pmcitems.length > 0 && soGrp.push({
      expDelDate: nextDayDispatch,
      soGrpItemsCount: pmcGroup.length,
      soGrpItemsQty: pmcItemsQty,
      grpDiscPercentage: Math.trunc(pmcDiscPercentage ? pmcDiscPercentage : 0),
      grpDiscAmount: totalgrpSavings,
      grpOfferAmount: 0,
      grpTotalDiscAmount: totalgrpSavings + 0,
      grpMrpTotal: pmcMrpTotal,
      grpaSlngPriceTotal: pmcSubtotal,
      grpaSlngPrice: pmcSubtotal,
      grpTotalAmount: pmcMrpTotal + dCharges,
      grpaNetAmount: pmcSubtotal,
      grpNetAmount: pmcSubtotal,
      itemsIds: pmcitemsIds,
      soItems: pmcitems
    });
    srItems && srItems.length > 0 && soGrp.push({
      expDelDate: twoDayDispatch,
      soGrpItemsCount: srGroup.length,
      soGrpItemsQty: srItemsQty,
      grpDiscPercentage: Math.trunc(srDiscPercentage),
      grpDiscAmount: srgrpSavings,
      grpOfferAmount: 0,
      grpTotalDiscAmount: totalgrpSavings + 0,
      grpMrpTotal: srMrpTotal,
      grpaSlngPriceTotal: srSubtotal,
      grpaSlngPrice: srSubtotal,
      grpTotalAmount: srMrpTotal + dCharges,
      grpaNetAmount: srSubtotal,
      grpNetAmount: srSubtotal,
      itemsIds: sritemsIds,
      soItems: srItems
    });
    odItems && odItems.length > 0 && soGrp.push({
      expDelDate: twoDayDispatch,
      soGrpItemsCount: odGroup.length,
      soGrpItemsQty: odItemsQty,
      grpDiscPercentage: Math.trunc(odDiscPercentage),
      grpDiscAmount: odgrpSavings,
      grpOfferAmount: 0,
      grpTotalDiscAmount: totalgrpSavings + 0,
      grpMrpTotal: odMrpTotal,
      grpaSlngPriceTotal: odSubtotal,
      grpaSlngPrice: odSubtotal,
      grpTotalAmount: odMrpTotal + dCharges,
      grpaNetAmount: odSubtotal,
      grpNetAmount: odSubtotal,
      itemsIds: oditemsIds,
      soItems: odItems
    });
    const reqBody = {
      soAt: 'App',
      soBy: 'Customer',
      sot: 'Normal Delivery',
      soItemsCount: totalGrpsItems,
      idSeq: {
        seq: adrsList.desamCode + adrsList.rastrCode + adrsList.jillaCode,
        pincode: adrsList.pincode,
        desamCode: adrsList.desamCode,
        rastrCode: adrsList.rastrCode,
        jillaCode: adrsList.jillaCode,
        mandal: adrsList.mandal,
        vuru: adrsList.vuru,
        year, month, day
      },
      soDelLoc: {
        lName: adrsList.lName,
        pName: adrsList.cName,
        mobCcNum: adrsList.mobCcNum,
        emID: adrsList.emID,
        chirunama: adrsList.chirunama,
        lmark: adrsList.lmark,
        intiNum: adrsList.intiNum,
        veedhi: adrsList.veedhi,
        vuru: adrsList.vuru,
        mandal: adrsList.mandal,
        jilla: adrsList.jilla,
        jillaCode: adrsList.jillaCode,
        pincode: adrsList.pincode,
        rastr: adrsList.rastr,
        rastrCode: adrsList.rastrCode,
        zone: adrsList.zone,
        zoneCode: adrsList.zoneCode,
        desam: adrsList.desam,
        desamCode: adrsList.desamCode,
      },
      soItemsQty: totalGrpsQtySum,
      discPercentage: Math.trunc(discPercentage),
      discAmount: totalSavings,
      offerAmount: 0,
      totalDiscAmount: totalDiscAmount,
      soTotalMrp: totalMrpSum,
      soaspTotal: (subTotal - dCharges),
      sospTotal: (subTotal - dCharges),
      soTotalAmount: totalMrpSum + dCharges,
      soaNetAmount: (subTotal - dCharges) + dCharges,
      soNetAmount: subTotal,
      paymentType: 'Cash on Delivery',
      paidAmount: 0,
      pendingAmount: subTotal,
      soGrp: soGrp
    }
    this.props.PostMyOrdersCreate(reqBody, async (resObj) => {
      if (resObj.status == '200') {
        const user = await localForage.getItem('userInfo');
        const userInfo = user.value || {};
        let data = userInfo;
        data.info = resObj.resData.userInfo
        localForage.setItem('userInfo', data);
        localForage.setItem('cart', []);
        localForage.setItem('cartItems', []);
        hashHistory.push('/payment-success');
      }
    })
  }

  render() {
    const { pmcGroup, pmcSubtotal, srGroup, srSubtotal, odGroup, odSubtotal, subTotal, totalGrpsQtySum,
      dCharges, pmcMrpTotal, srMrpTotal, odMrpTotal, totalGrpsItems, totalMrpSum } = this.state;

    const defaultAdrs = this.state.adrsList.length > 0 && this.state.adrsList.filter(item => item.isDefault === true);
    const totalSavings = totalMrpSum - subTotal;
    return (
      <div className='wrapper'>
        <Header count={this.state.cartData.length} />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='checkout-section my-5'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12 d-flex justify-content-between'>
                <div className='col-sm-6'>
                  <h1 className='title'> Checkout </h1>
                </div>
                <div className='col-sm-6 text-end'>
                  <button className='btn btn-success' onClick={this.placeOrder}> Place Order </button>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                <div className='card'>
                  {pmcGroup.length > 0 ?
                    <div className=' each-category-card mx-3 my-3'>
                      {/* start Pulses Millets Cereals */}
                      {pmcGroup.map((item, outerIndex) => {
                        const qtyList = this.state.cartData.length > 0 && this.state.cartData.filter(item1 => item1.voItem == item.voItem);
                        return (
                          <div key={outerIndex} >
                            <div className='row d-flex justify-content-between mb-3'>
                              <div className='col-sm-2 col-3'>
                                <div className='category-product-img1 me-3' onClick={() => hashHistory.push(`/product_view/${item.voItem}`)}>
                                  <img src={item.filePath} className='img-fluid' />
                                </div>
                              </div>
                              <div className='col-sm-5 col-3'>
                                <div className='category-title-div'>
                                  <a className='product-title' onClick={() => hashHistory.push(`/product_view/${item.voItem}`)}>{item.itemPeru} </a>
                                  <p>{item.vargam} </p>
                                  <div className='d-flex'>
                                  </div>
                                  <div className='d-flex'>
                                    <p className='price mb-0'>₹ {item.isPrice}</p>
                                    <p className='text-strikeoff mb-0'>₹ {item.iMrp}</p>
                                  </div>
                                </div>
                              </div>
                              <div className='col-sm-2'>
                                {qtyList.length > 0 && qtyList.map((item1, innerIndex) => {
                                  return (
                                    <div className='d-flex' key={innerIndex}>
                                      <div className='me-2'>Qty: </div>
                                      <div>{item1.qty}</div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                        )
                      })
                      }
                      <hr className='col-sm-12' />
                      <div className='row d-flex justify-content-between mb-3'>
                        <p className=''> {this.getDispatchDate("pmcGroup")}</p>
                        <div className='col-sm-2 col-3'>
                          <div className='category-product-img1 me-3'>
                            <div className='label'>Total</div>
                          </div>
                        </div>
                        <div className='col-sm-5 col-3'>
                          <div className='category-title-div'>
                            <div className='d-flex'>
                              <p className='price mb-0'>₹ {pmcSubtotal}</p>
                              <p className='text-strikeoff mb-0'>₹ {pmcMrpTotal}</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-2 d-flex justify-content-between me-4'>
                          <p className='price mb-0'>Items Count</p>
                          <p className='mb-0'>{pmcGroup.length}</p>
                        </div>
                      </div>
                    </div> : ''}
                  {/* start Spices and Rice */}
                  {srGroup.length > 0 ?
                    <div className=' each-category-card mx-3 my-3'>
                      {srGroup.map((item, outerIndex) => {
                        const qtyList = this.state.cartData.length > 0 && this.state.cartData.filter(item1 => item1.voItem == item.voItem);
                        return (
                          <div key={outerIndex} >
                            <div className='row d-flex justify-content-between mb-3'>
                              <div className='col-sm-2 col-3'>
                                <div className='category-product-img1 me-3' onClick={() => hashHistory.push(`/product_view/${item.voItem}`)}>
                                  <img src={item.filePath} className='img-fluid' />
                                </div>
                              </div>
                              <div className='col-sm-5 col-3'>
                                <div className='category-title-div'>
                                  <a className='product-title' onClick={() => hashHistory.push(`/product_view/${item.voItem}`)}>{item.itemPeru} </a>
                                  <p>{item.vargam} </p>
                                  <div className='d-flex'>
                                    <RatingComponent />
                                  </div>
                                  <div className='d-flex'>
                                    <p className='price mb-0'>₹{item.isPrice}</p>
                                    <p className='text-strikeoff mb-0'>₹{item.iMrp}</p>
                                  </div>
                                </div>
                              </div>
                              <div className='col-sm-2'>
                                {qtyList.length > 0 && qtyList.map((item1, innerIndex) => {
                                  return (
                                    <div className='d-flex' key={innerIndex}>
                                      <div className='me-2'>Qty: </div>
                                      <div>{item1.qty}</div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                        )
                      })
                      }
                      <hr className=' col-sm-12' />
                      <div className='row d-flex justify-content-between mb-3'>
                        <p className=''> {this.getDispatchDate("srGroup")}</p>
                        <div className='col-sm-2 col-3'>
                          <div className='category-product-img1 me-3'>
                            <div className='label'>Total</div>
                          </div>
                        </div>
                        <div className='col-sm-5 col-3'>
                          <div className='category-title-div'>
                            <div className='d-flex'>
                              <p className='price mb-0'>₹ {srSubtotal}</p>
                              <p className='text-strikeoff mb-0'>₹ {srMrpTotal}</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-2 d-flex justify-content-between me-4'>
                          <p className='price mb-0'>Items Count</p>
                          <p className='mb-0'>{srGroup.length}</p>
                        </div>
                      </div>
                    </div>
                    : ''}
                  {/* Start Oils and Dry fruits */}
                  {odGroup.length > 0 ?
                    <div className=' each-category-card mx-3 my-3'>
                      {odGroup.map((item, outerIndex) => {
                        const qtyList = this.state.cartData.length > 0 && this.state.cartData.filter(item1 => item1.voItem == item.voItem);
                        return (
                          <div key={outerIndex} >
                            <div className='row d-flex justify-content-between mb-3'>
                              <div className='col-sm-2 col-3'>
                                <div className='category-product-img1 me-3' onClick={() => hashHistory.push(`/product_view/${item.voItem}`)}>
                                  <img src={item.filePath} className='img-fluid' />
                                </div>
                              </div>
                              <div className='col-sm-5 col-3'>
                                <div className='category-title-div'>
                                  <a className='product-title' onClick={() => hashHistory.push(`/product_view/${item.voItem}`)}>{item.itemPeru} </a>
                                  <p>{item.vargam} </p>
                                  <div className='d-flex'>
                                    <RatingComponent />
                                  </div>
                                  <div className='d-flex'>
                                    <p className='price mb-0'>₹{item.isPrice}</p>
                                    <p className='text-strikeoff mb-0'>₹{item.iMrp}</p>
                                  </div>
                                </div>
                              </div>
                              <div className='col-sm-2'>
                                {qtyList.length > 0 && qtyList.map((item1, innerIndex) => {
                                  return (
                                    <div className='d-flex' key={innerIndex}>
                                      <div className='me-2'>Qty: </div>
                                      <div>{item1.qty}</div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                        )
                      })
                      }
                      <hr className=' col-sm-12' />
                      <div className='row d-flex justify-content-between mb-3'>
                        <p className=''> {this.getDispatchDate("odGroup")}</p>
                        <div className='col-sm-2 col-3'>
                          <div className='category-product-img1 me-3'>
                            <div className='label'>Total</div>
                          </div>
                        </div>
                        <div className='col-sm-5 col-3'>
                          <div className='category-title-div'>
                            <div className='d-flex'>
                              <p className='price mb-0'>₹ {odSubtotal}</p>
                              <p className='text-strikeoff mb-0'>₹ {odMrpTotal}</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-sm-2 d-flex justify-content-between me-4'>
                          <p className='price mb-0'>Items Count</p>
                          <p className='mb-0'>{odGroup.length}</p>
                        </div>
                      </div>
                    </div> : ''}
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='each-category-card my-3 me-3'>
                  <div className='card-body cart-summary p-3'>
                    <h2 className="foo_wid_title mb-0">Cart Summary</h2>
                    <div className='my-4'>
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Total Cart Items</p>
                        <p className='value'>{totalGrpsItems}</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Total Items Quantity</p>
                        <p className='value'>{totalGrpsQtySum}</p>
                      </div>
                      <hr />
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Sub Total</p>
                        <p className='value'>₹{subTotal}</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='label'>Deliver Charges</p>
                        <p className='value'>₹{dCharges}</p>
                      </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                      <p className='label'>Net Total</p>
                      <p className='value'>₹{subTotal}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='label'>Total Savings</p>
                      <p className='price'>₹{totalSavings}</p>
                    </div>
                    {this.state.isEnableCheckout && <div className='d-flex justify-content-center'>
                      <button onClick={() => hashHistory.push('/payment')} className='btn btn-success br-22 px-3 w-100 text-white'>Proceed To Payment</button>
                    </div>}
                  </div>
                </div>
                <CheckoutAdrsComponent defaultAdrs={defaultAdrs} addressesList={this.addressesList} />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div >
    );
  }

}

const mapStateToProps = (state) => {
  return {}
};

const mapDistachToProps = (dispatch) => {
  return {
    PostCustAdrsList: (callback) => dispatch(PostCustAdrsList(callback)),
    PostMyOrdersCreate: (body, callback) => dispatch(PostMyOrdersCreate(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(CheckoutComponent);