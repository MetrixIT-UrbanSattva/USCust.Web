/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import FooterComponent from '../footer';
import { Header } from '../../containers/header';
import hashHistory from '../../hashHistory';
import RcntlyViewedProdComponent from './RcntlyViewedProdComponent';

import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import RelatedProductComponent from './RelatedProductComponent';
import ProductDetailsComponent from './ProductDetailsComponent';
import RatingComponent from '../common/RatingComponent';
import ProductQasComponent from './ProductQasComponent';
// import ProductRvrsComponent from './ProductRvrsComponent';
import { PostItemFilesList, PostItemView, PostItemViewed } from '../../actions/Items/ItemsActions';
import { PostAddToCartItem, PostCartItemUpdate, PostCartItemsList, PostCartItemRemove, SetCartData } from '../../actions/cart-items/CartItemsActions';
import { PostAddItemToWishlist, PostRemoveItemFromWishlist, PostGetWishlistItems } from '../../actions/wish-list/WishlistAction';
import localForage from '../../hooks/localForage';
import CartApis from '../../CartApis';
import config from '../../../config/config.json';
import StateDistricts from '../../../public/data/StateDistricts.json';
import { PostCreateCustsGuests } from '../../actions/landing-screen/LandingScreenActions';
import { PostCustAdrsList, ResetAddressData } from '../../actions/Addresses/CustAdrsActions';

const ipData = {
  "ip": "183.82.120.68",
  "network": "183.82.120.0/21",
  "version": "IPv4",
  "city": "Hyderabad",
  "region": "Telangana",
  "region_code": "TG",
  "country": "IN",
  "country_name": "India",
  "country_code": "IN",
  "country_code_iso3": "IND",
  "country_capital": "New Delhi",
  "country_tld": ".in",
  "continent_code": "AS",
  "in_eu": false,
  "postal": "500072",
  "latitude": 17.411,
  "longitude": 78.4487,
  "timezone": "Asia/Kolkata",
  "utc_offset": "+0530",
  "country_calling_code": "+91",
  "currency": "INR",
  "currency_name": "Rupee",
  "languages": "en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc",
  "country_area": 3287590,
  "country_population": 1352617328,
  "asn": "AS18209",
  "org": "Atria Convergence Technologies pvt ltd"
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
class ProductViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddToCart: false,
      modalIsOpen: false,
      custsItemsListData: [],
      itemData: {},
      itemFilesData: [],
      cartData: [],
      userInfo: {},
      path: '',
      id: props.id,
      isAccountDropdown: false,
      qty: 0,
      cartCount: 0,
      totalRatingCount: 0,
      totalRatedUsers: 0,
      color: ''
    }
  }
  async componentDidMount() {
    this.validateUser();
    this.itemData(this.state.id);
    this.setCartData();
  }
  validateUser = async () => {
    const accesstokenData = await localForage.getItem('accesstoken');
    const accesstoken = accesstokenData.value ? accesstokenData.value : '';
    const userData = await localForage.getItem('userInfo');
    const userInfo = userData.value ? userData.value : '';
    if (!accesstoken || !userInfo) {
      this.createGuest();
    }
  }
  createGuest = () => {
    // fetch(config.ipAddressApi)
    //   .then(response => response.json())
    //   .then(data => {
    //     landingScreen(data);
    //   }).catch(error => { });
    this.landingScreen(ipData);
  }
  landingScreen = async (defaultAdrsData) => {
    const dData = this.data(defaultAdrsData);
    const { region_code, city } = defaultAdrsData;
    const code = region_code === 'TG' ? 'TS' : region_code;
    const satetsData = StateDistricts[code];
    const cityCodeData = satetsData && satetsData.length > 0 && satetsData.filter((cityObj) => cityObj.distName === city);
    const reqBody = {
      ...defaultAdrsData, region_code: code, cityCode: cityCodeData[0].distCode,
    }
    this.props.PostCreateCustsGuests(reqBody, async (resObj) => {
      if (resObj.status == '200') {
        const cartData = resObj.resData.result.cart.vocCartItems;
        const cartItemsData = resObj.resData.result.cartItems
        await localForage.setItem('cart', cartData);
        await localForage.setItem('cartItems', cartItemsData);
        await localForage.setItem('userInfo', resObj.resData.result.user);
        const defaultAdrs = resObj.resData.result.address._id ? resObj.resData.result.address : [dData]
        await localForage.setItem('address', defaultAdrs);
        this.props.ResetAddressData(defaultAdrs);
        this.props.SetCartData(cartData, cartItemsData);
      }
    });
  }
  data = (defaultAdrsData) => {
    return {
      jilla: defaultAdrsData.city,
      pincode: defaultAdrsData.postal,
      rastr: defaultAdrsData.region,
      rastrCode: defaultAdrsData.region_code,
      desam: defaultAdrsData.country_name,
      desamCode: defaultAdrsData.country_code_iso3,
      isDefault: true
    }
  }
  itemData = (itemId) => {
    const reqBody = { itemId }
    this.props.PostItemView(reqBody, (resObj) => {
      if (resObj.status == '200') {
        const totalWishlistData = this.props.WishlistReducer.custsWishlistData;
        const wishListItem = totalWishlistData.length > 0 ? totalWishlistData.find(item1 => item1.voItem == itemId) : {};
        const wishListData = wishListItem && wishListItem._id ? wishListItem : {};
        this.setState({ itemData: resObj.resData.result, id: itemId, color: wishListData._id ? 'red' : '' })
        this.itemFilesView(resObj.resData.result.item);
        this.handleViewed(resObj.resData.result);
      } else {
        this.setState({ itemData: {} })
      }
    })
  }
  itemFilesView = (itemId) => {
    const reqBody = { itemId }
    this.props.PostItemFilesList(reqBody, (resObj) => {
      if (resObj.status == '200') {
        this.setState({ itemFilesData: resObj.resData.result })
      } else {
        this.setState({ itemFilesData: [] })
      }
    })
  }
  handleViewed = (resData) => {
    const reqBody = {
      itemId: resData._id,
      item: resData.item,
      itemCode: resData.itemCode,
      itemUnitId: resData.voItem,
      itemUnitCode: resData.voiCode,
      itemSection: resData.vibagam,
      itemGroup: resData.samuham,
      itemCategory: resData.vargam,
      searchStrings: resData.inSearch,
      itemCommonName: resData.icn,
      itemPeru: resData.itemPeru,
      itemOtherName: resData.icn || '',
      itemRate: resData.iMrp,
      minQuantity: resData.minQty || '',
      maxQuantity: resData.maxQty || '',
      sellingPrice: resData.isPrice,
      itemDiscPercentage: resData.idp || '',
      itemDiscAmount: resData.ida || '',
      all: resData.all,
      // offerName: resData ,
      // offerCode: resData ,
      // offerFilePath: resData ,
      // offerItemRate: resData ,
      // offerminQuantity: resData ,
      // offerMaxQuantity: resData ,
      // offerSellingPrice: resData ,
      // offerItemDiscPercentge: resData ,
      // offeritemDiscAmount: resData ,
      // offerStatus: resData ,
      // offerStartDate: resData ,
      // offerEndDate: resData ,
      unitWeight: resData.units,
      itemTotalRatings: resData.iTotalRatings || '',
      itemRatedUsers: resData.iRatedUsers || '',
      itemAvgRating: resData.iAvgRating || ''
    }
    this.props.PostItemViewed(reqBody, (resObj) => {
    })
  }
  setCartData = async () => {
    const userData = await localForage.getItem("userInfo");
    const userInfo = userData.value || {}
    const cartD = await localForage.getItem("cart");
    const cartData = cartD.value || [];
    const cartItems = cartData.filter(item => item.voItem === this.props.id) || [];
    if (cartItems.length)
      this.setState({ isAddToCart: true, qty: cartItems[0].qty, cartData, cartCount: cartData.length, userInfo });
    else
      this.setState({ isAddToCart: false, qty: 0, cartData, cartCount: cartData.length, userInfo });
  }
  shareClick = () => {
    this.setState({ isAccountDropdown: !this.state.isAccountDropdown })
  }
  count = (totalRatingCount, totalRatedUsers) => {
    this.setState({ totalRatingCount, totalRatedUsers })
  }
  openModal = (path) => { this.setState({ modalIsOpen: true, path }) }

  itemApi = (id) => {
    this.itemData(id);
    window.scrollTo(0, 0);
    this.setState({ id })
  }
  shareClick = () => {
    this.setState({
      isAccountDropdown: !this.state.isAccountDropdown
    })
  }
  handleShare = (platform) => {
    const { width, height } = 800;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const description = `Item: ${this.state.itemData.itemPeru}`
    const buyingLink = `${config.socialMediaUrl}#/product_view/${this.state.itemData.voItem}`
    const text = `${config.socialMediaUrl}\n${description}\n${buyingLink}`;
    let url = '';
    if (platform === 'whatsapp') {
      url = `${config.whatsappUrl}${encodeURIComponent(`${text}`)}`;
    } else if (platform === 'facebook') {
      url = `${config.facebookUrl}${encodeURIComponent(`${text}`)}`;
    } else if (platform === 'gmail') {
      url = `${config.gmailUrl}${encodeURIComponent(`${text}`)}`;
    } else if (platform === 'twitter') {
      url = `${config.twitterUrl}${encodeURIComponent(`${text}`)}`;
    } else if (platform === 'instagram') {
      // window.open(`${config.instagramUrl}${encodeURIComponent(this.state.imagePath)}`);
    }
    window.open(url, "Popup", `width=${width}, height=${height}, left=${left}, top=${top}`);
  };
  handleChange = async (e) => {
    const unit = e.target.value;
    this.itemData(e.target.value);
    hashHistory.push(`/product_view/${e.target.value}`)
    const cartItemD = await localForage.getItem('cartItems');
    const cartItemsData = cartItemD.value || [];
    const cartItem = cartItemsData.length > 0 ? cartItemsData.find(item => item.voItem == unit) : {};
    const totalWishlistData = this.props.WishlistReducer.custsWishlistData;
    const wishListItem = totalWishlistData.length > 0 && totalWishlistData.find(item1 => item1.voItem == e.target.value);
    const wishListData = wishListItem && wishListItem._id ? wishListItem : {}
    this.setState({ qty: cartItem && cartItem.qty ? cartItem.qty : 0, isAddToCart: cartItem && cartItem._id ? true : false, color: wishListData._id ? 'red' : '' });
  }

  handleWishList = () => {
    this.setState({ color: 'red' })
    this.props.PostAddItemToWishlist(this.state.itemData, (resObj) => {
      this.props.PostGetWishlistItems((resObj1) => {
      })
    })
  }

  handleRemoveWishList = () => {
    this.setState({ color: '' })
    const reqBody = { voItem: this.state.itemData.voItem, voiCode: this.state.itemData.voiCode, itemData: this.state.itemData };
    this.props.PostRemoveItemFromWishlist(reqBody, (resObj) => {
      this.props.PostGetWishlistItems((resObj1) => {
      })
    })
  }

  handleAddCart = () => {
    this.setState({ isAddToCart: true, qty: 1 });
    CartApis.handleAddCart(this.state.itemData, this.state.userInfo.cartId, (reqBody) => {
      this.props.PostAddToCartItem(reqBody, (resObj) => {
        this.setCartData();
        this.handleRemoveWishList();
      })
    });
  }

  increment = () => {
    CartApis.increment(this.state.itemData, this.state.userInfo.cartId, (reqBody) => {
      this.setState({ qty: reqBody.qty });
      this.props.PostCartItemUpdate(reqBody, (resObj) => { })
    })
  };

  decrement = () => {
    CartApis.decrement(this.state.itemData, this.state.userInfo.cartId, '', (reqBody) => {
      if (reqBody.value == "update") {
        this.setState({ qty: reqBody.qty });
        this.props.PostCartItemUpdate(reqBody, (resObj) => {
          this.setCartData();
        })
      } else {
        this.props.PostCartItemRemove(reqBody, (resObj) => {
          this.setState({ isAddToCart: false })
          this.setCartData();
        });
      }
    })
  }
  render() {
    const { itemData, itemFilesData } = this.state;
    return (
      <div className='wrapper'>
        <Header count={this.state.cartCount} />
        <BreadcrumbsComponent />
        {/* <!--  =============================  products start  ================================  --> */}
        <section className='products-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='product-detail accordion-detail'>
              <div className='row'>
                {/* image -section */}
                <div className='col-md-4 col-sm-12 col-xs-12 mb-md-0 mb-sm-5'>
                  <div className='detail-gallery'>
                    <div className='product-image-slider slick-initialized slick-slider mb-3'>
                      {itemFilesData.length > 0 ? itemFilesData.map((item, i) => <img key={i} className='img-fluid m-1' src={item.path} onClick={() => this.openModal(item.path)} width='400' height='300' />) : <img className='img-fluid m-1' src={itemData.filePath} onClick={() => this.openModal(itemData.filePath)} width='400' height='300' />}
                    </div>
                  </div>
                </div>
                {/* details section */}
                <div className='col-md-8 col-sm-12 col-xs-12'>
                  <div className='detail-info'>
                    <h2 className='title-detail'>{itemData.itemPeru} </h2>
                    {this.state.qty < 1 && <a> <span>{!this.state.color ? <i className="fa-regular fa-heart me-4 mb-2" onClick={this.handleWishList} style={{ fontSize: 25 }}></i> : <i className="fa-solid fa-heart me-4 mb-2" onClick={this.handleRemoveWishList} style={{ fontSize: 25, color: "#d2421e" }}></i>}</span></a>}
                    <div className="product-detail-rating">
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          {/* <div className="product-rating"></div> */}
                          <RatingComponent count={this.state.totalRatingCount} /><span className='mx-2'>({this.state.totalRatedUsers})</span>
                        </div>
                        <span className='font-small text-muted'><a onClick={this.handleReviews}> View Reviews </a> </span>
                      </div>
                    </div>
                    <div className="clearfix product-price-cover">
                      <div className="product-price primary-color float-left">
                        <span className="current-price text-brand">₹ {itemData.isPrice} </span>
                        <span>
                          {/* <span className="save-price font-md color3 ml-15">26% Off</span> */}
                          <span className="old-price font-md ml-15">₹ {itemData.iMrp}</span>
                        </span>
                      </div>
                    </div>
                    {this.state.isAccountDropdown ?
                      <div className='account-dropdownn d-flex align-items-center justify-content-center '>

                        <div className="p-2" style={{ cursor: 'pointer' }}>
                          <div className='shareIcons mb-2' onClick={() => this.handleShare('whatsapp')}>
                            <i className="fa-brands fa-whatsapp fa-2x text-success d-flex justify-content-center p-3"></i>
                          </div>
                          <div className='text-center'>Whatsapp</div>
                        </div>

                        <div className="p-2" style={{ cursor: 'pointer' }} onClick={() => this.handleShare('facebook')}>
                          <div className='shareIcons mb-2'>
                            <i className="fa-brands fa-facebook fa-2x text-primary d-flex justify-content-center p-3"></i>
                          </div>
                          <div className='text-center'>Facebook</div>
                        </div>

                        <div className="p-2" style={{ cursor: 'pointer' }} onClick={() => this.handleShare('gmail')}>
                          <div className='shareIcons mb-2'>
                            <i className="fa-solid fa-envelope fa-2x text-danger d-flex justify-content-center p-3"></i>
                          </div>
                          <div className='text-center'>Email</div>
                        </div>

                        <div className="p-2" style={{ cursor: 'pointer' }} onClick={() => this.handleShare('twitter')}>
                          <div className='shareIcons mb-2'>
                            <i className="fa-brands fa-twitter fa-2x text-primary d-flex justify-content-center p-3"></i>
                          </div>
                          <div className='text-center'>Twitter</div>
                        </div>

                        <div className="p-2" style={{ cursor: 'pointer' }} onClick={() => this.handleShare('instagram')}>
                          <div className='shareIcons mb-2'>
                            <i className="fa-brands fa-square-instagram fa-2x  text-danger d-flex justify-content-center p-3"></i>
                          </div>
                          <div className='text-center'>instagram</div>
                        </div>
                      </div>
                      : null}
                  </div>
                  <div className="detail-extralink">
                    <select className="detail-qty border radius" value={this.state.id} onChange={this.handleChange}>
                      {itemData.all && itemData.all.length > 0 && itemData.all.map((item, i) =>
                        <option key={i} value={item._id}>{item.units} - ₹{item.isPrice}</option>
                      )}
                    </select>
                    {/* </div> */}
                    <div className="product-extra-link2">
                      {/* <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart"></i>Add to cart</button> */}
                      {!this.state.isAddToCart ?
                        <button className='btn addcart-button text-white fw-bold' onClick={this.handleAddCart} ><i className='fa-solid fa-cart-shopping me-2'></i>Add cart </button>
                        : <div className='cart-buttons-div'>
                          <button className='btn btn-sm' onClick={this.decrement}><i className='fa-solid fa-minus'></i></button>
                          <label>{this.state.qty}</label>
                          <button className='btn btn-sm' onClick={this.increment}><i className='fa-solid fa-plus'></i></button>
                        </div>}
                      <a onClick={this.shareClick} aria-label="Add To Wishlist" className="action-btn hover-up" ><i className="fas fa-share"></i></a>
                      {/* <a aria-label="Compare" className="action-btn hover-up"><i className="fi-rs-shuffle"></i></a> */}
                    </div>
                  </div>
                  <div className='sku_wrapper me-3 mt-3'>
                    Categories:
                    <a className='sku text-success  mx-2'>{itemData.vargam}</a>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  {/* Product Details start */}
                  <div>
                    <ProductDetailsComponent id={this.state.id} count={this.count} />
                  </div>
                  {/* Questions and Answers section start */}
                  <ProductQasComponent id={this.state.id} />
                  <hr className='mt-5 ' />
                  {/* reviews design start */}
                  {/* <ProductRvrsComponent id={this.state.id} count={this.count} /> */}
                  {/* {recently viewed Products} */}
                  <RcntlyViewedProdComponent id={this.state.id} itemApi={this.itemApi} cartData={this.setCartData} />
                </div>
                {/*  related products start */}
                <div>
                  <RelatedProductComponent itemApi={this.itemApi} setCartData={this.setCartData} cartData={this.state.cartData} userInfo={this.state.userInfo} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.setState({ modalIsOpen: false })}
          style={customStyles}
        >
          <div className='row align-items-center justify-content-center'>
            <div className='col-10'>
              <button onClick={() => this.setState({ modalIsOpen: false })} className='btn btn-outline-danger btn-md modal-close-btn'>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className='product-gallery__image border border-0' >
                <img className='img-fluid' src={this.state.path} />
              </div>
            </div>
          </div>
        </Modal>
        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    CartItemsReducer: state.CartItemsReducer,
    WishlistReducer: state.WishlistReducer
  }
};
const mapDistachToProps = (dispatch) => {
  return {
    PostItemFilesList: (body, callback) => dispatch(PostItemFilesList(body, callback)),
    PostItemView: (body, callback) => dispatch(PostItemView(body, callback)),
    PostAddToCartItem: (body, callback) => dispatch(PostAddToCartItem(body, callback)),
    PostCartItemUpdate: (body, callback) => dispatch(PostCartItemUpdate(body, callback)),
    PostCartItemsList: (callback) => dispatch(PostCartItemsList(callback)),
    PostCartItemRemove: (body, callback) => dispatch(PostCartItemRemove(body, callback)),
    SetCartData: (cartData, cartItemsData) => dispatch(SetCartData(cartData, cartItemsData)),
    PostItemViewed: (body, callback) => dispatch(PostItemViewed(body, callback)),
    PostAddItemToWishlist: (body, callback) => dispatch(PostAddItemToWishlist(body, callback)),
    PostRemoveItemFromWishlist: (body, callback) => dispatch(PostRemoveItemFromWishlist(body, callback)),
    PostGetWishlistItems: (callback) => dispatch(PostGetWishlistItems(callback)),
    PostCreateCustsGuests: (body, callback) => dispatch(PostCreateCustsGuests(body, callback)),
    PostCustAdrsList: (callback) => dispatch(PostCustAdrsList(callback)),
    ResetAddressData: (data) => dispatch(ResetAddressData(data)),
    SetCartData: (cartData, cartItemsData) => dispatch(SetCartData(cartData, cartItemsData)),
  };
};
export default connect(mapStateToProps, mapDistachToProps)(ProductViewComponent);