/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

import hashHistory from '../../hashHistory';
import '../../styles/Styles.css';
import '../../styles/BreadcrumbsStyles.css';
import FilterComponent from '../filters/FilterComponent';
import FooterComponent from '../footer';
import { Header } from '../../containers/header';
import SidebarWidgetComponent from './SidebarWidgetComponent';
import { PostItemsList } from '../../actions/Items/ItemsActions';
import ListItemViewComponent from './ListItemViewComponent';
import localForage from '../../hooks/localForage';
import NoData from '../../assets/images/no-data-found.jpg';
class ProductsPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddToCart: false,
      isFilterOpen: false,
      custsItemsListData: [],
      custsItemsListCount: 0,
      crntPgNum: 1,
      pageLimit: 8,
      searchStr: '',
      unit: {},
      count: 0,
      cartData: [],
      isAccountDropdown: false,
      value: false,
      sort: '',
      selectedCategories: [],
      selectedC: [],
      filterByUnits: [],
      filterByPrice: '',
      filterByRating: [],
      appAssured: '',
    }
  }
  handleAddCart = () => {
    this.setState({ isAddToCart: true })
  }
  async componentDidMount() {
    this.postItemsList(this.props.type, this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, [], this.state.filterByPrice, [], [], this.state.appAssured);
    this.getCartData();
  }
  componentDidUpdate(prevProps, prevState) {
    const currentData = this.props.type;
    const previousData = prevProps.type;
    if(currentData !== previousData) {
      this.componentDidMount();
    }
  }
  postItemsList = (type, crntPgNum, pageLimit, searchStr, sort, selectedCategories, sPrice, filterByUnits, filterByRating, trusted) => {
    const category = type == 'Pulses' ? 'Pulses' : (type == 'Spices' ? 'Spices' : (type == 'Millets' ? 'Millets' : (type == 'Oils' ? 'Oils' : (type == 'Cereals' ? 'Cereals' : (type == 'Dry fruits' ? 'Dry fruits' : (type == 'Rice' ? 'Rice' : ''))))));
    const searchString = type ? (type == 'all' ? '' : category ? '' : type) : searchStr;
    const itemCategory = selectedCategories.length > 0 ? selectedCategories : category ? category : '';
    const sellingPrice = sPrice ? sPrice : '';
    const rating = filterByRating.length > 0 ? filterByRating : [];
    const units = filterByUnits.length > 0 ? filterByUnits : []
    const appAssured = trusted ? trusted : ''
    const reqBody = {
      itemCategory, crntPgNum, pageLimit, searchStr: searchString, sort, sellingPrice, rating, units, appAssured
    }
    this.props.PostItemsList(reqBody, (resObj) => {
      if (resObj.status == '200') {
        this.setState({ custsItemsListData: resObj.resData.result.custsItemsListData, custsItemsListCount: resObj.resData.result.custsItemsListCount })
      } else {
        this.setState({ custsItemsListData: [], custsItemsListCount: 0 })
      }
    })
  }

  getCartData = async () => {
    const cartD = await localForage.getItem('cart');
    const cartData = cartD.value || [];
    this.setState({ count: cartData.length, cartData })
  }
  sidebarSelectItems = (key) => {
    hashHistory.push(`/products/${key}`);
    this.setState({ searchStr: '', selectedCategories: [], filterByPrice: '', filterByUnits: [], filterByRating: [], appAssured: '', isFilterOpen: false })
    this.postItemsList(key, 1, this.state.pageLimit, '', this.state.sort, [], '', [], [], '');
  }
  handleChangePage = (pageNumber) => {
    this.setState({ crntPgNum: pageNumber });
    this.postItemsList(this.props.type, pageNumber, this.state.pageLimit, this.state.searchStr, this.state.sort, this.state.selectedCategories, this.state.filterByPrice, this.state.filterByUnits, this.state.filterByRating, this.state.appAssured);
  }

  filterClose = () => {
    this.setState({ isFilterOpen: false, selectedCategories: [], filterByPrice: '', filterByUnits: [], filterByRating: [], appAssured: '' });
    this.postItemsList(this.state.type, this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, [], '', [], [], '');
  }
  unitsChange = (e) => {
    let unit = this.state.unit;
    unit['_id'] = e.target.value;
    this.setState({ unit })
  }
  shareClick = (productIndex) => {
    if (productIndex === this.state.isAccountDropdown) {
      this.setState({ isAccountDropdown: false });
    } else {
      this.setState({ isAccountDropdown: productIndex });
    }
  }
  sortChange = (e) => {
    const sort = e.target.value
    this.setState({ sort });
    this.postItemsList(this.props.type, this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, sort, this.state.selectedCategories, this.state.filterByPrice, this.state.filterByUnits, this.state.filterByRating, this.state.appAssured);
  }
  filterSelectItems = (e, category) => {
    let categories = ['Pulses', 'Spices', 'Millets', 'Oils', 'Dry fruits', 'Rice', 'Cereals'];
    if (category === 'all') {
      if(e.target.checked) {
        this.setState({ selectedCategories : [], value: true});
        this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, [], this.state.filterByPrice, this.state.filterByUnits, this.state.filterByRating, this.state.appAssured);
      } else {
       this.setState({ value: false, selectedCategories: this.state.selectedC});
        this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, this.state.selectedC, this.state.filterByPrice, this.state.filterByUnits, this.state.filterByRating, this.state.appAssured);
      }
    } else {
      let selectedCategories = this.state.selectedCategories;
      const index =  selectedCategories.indexOf(category);
      if (index > -1) {
        selectedCategories.splice(index, 1);
      } else {
        selectedCategories.push(category);
      }
      const data =  this.state.value ? categories: selectedCategories
      this.setState({ selectedCategories, selectedC: selectedCategories });
      this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, data, this.state.filterByPrice, this.state.filterByUnits, this.state.filterByRating, this.state.appAssured);
    }
  }
  filterByPrice = (e, price) => {
    this.setState({ filterByPrice: price });
    if (e.target.checked) {
      this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, this.state.selectedCategories, price, this.state.filterByUnits, this.state.filterByRating, this.state.appAssured);
    } else {
      this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, this.state.selectedCategories, '', this.state.filterByUnits, this.state.filterByRating, this.state.appAssured);
    }
  }
  filterByRating = (e, rating) => {
    const { filterByRating } = this.state;
    if (rating === 'appAssured') {
      this.setState({ appAssured: e.target.checked ? rating : ''});
      e.target.checked ? this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, this.state.selectedCategories, this.state.filterByPrice, this.state.filterByUnits, this.state.filterByRating, rating) : this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, this.state.selectedCategories, this.state.filterByPrice, this.state.filterByUnits, this.state.filterByRating, '');
    } else  {
      const index = filterByRating.indexOf(rating);
      if (index > -1) {
        filterByRating.splice(index, 1);
      } else {
        filterByRating.push(rating);
      }
      this.setState({ filterByRating, appAssured: '' });
      this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, this.state.selectedCategories, this.state.filterByPrice, this.state.filterByUnits,  filterByRating, '');
    } 
  }
  filterUnitsItems = (e, units) => {
    const { filterByUnits } = this.state;
    const index = filterByUnits.indexOf(units);
    if (index > -1) {
      filterByUnits.splice(index, 1); 
    } else {
      filterByUnits.push(units); 
    }
    this.setState({ filterByUnits });
    this.postItemsList('', this.state.crntPgNum, this.state.pageLimit, this.state.searchStr, this.state.sort, this.state.selectedCategories, this.state.filterByPrice, filterByUnits, this.state.filterByRating, this.state.appAssured);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header count={this.state.count} type={this.props.type} />
        {/* ====================================================== */}
        <section className='container-fluid bread-crumbs-section '>
          <div className='row align-items-center'>
            <div className='col-sm-12 px-0'>
              <div className="dokan_only_breadcrumb">
                <div className="auto-container">
                  <div className="breadcrumbs nest">
                    <ul className="breadcrumb m-auto">
                      <li>
                        <a onClick={() => hashHistory.push('/home')} >
                          <i className="fa-solid fa-house me-2"></i>Home </a>
                      </li>
                      <li className="active">Products</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====================================================== */}
        <section className='products-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row '>
              <div className='col-sm-3 mt-4'>
                <SidebarWidgetComponent sidebarSelectItems={this.sidebarSelectItems} />
              </div>
              <div className='col-sm-9 mt-4'>
                {/* <FilteredLabelsComponent /> */}
                <div class="shop-product-fillter">
                    <div class="totall-product d-flex">
                      <h1 className='title'> Products </h1>
                    </div>
                    <div class="sort-by-product-area">
                        <div class="sort-by-cover mr-10">
                          <p className='ms-5 pt-2'>Showing {this.state.custsItemsListData.length > 0 ? 1 : 0}-{this.state.custsItemsListData.length}  of over {this.state.custsItemsListCount} results</p>
                        </div>
                        <div class="sort-by-cover mr-10">
                          <button onClick={() => this.setState({ isFilterOpen:  true})} className='sort-by-product-wrap'><span><i className='fa fa-filter mx-2'></i></span>Filter</button>
                        </div>
                        <div class="sort-by-cover">
                          <select className="border-2 p-2" value={this.state.sort} onChange={(e) => this.sortChange(e)}>
                            <option value=''>Select</option>
                            <option value='popularity'>Recommended</option>
                            <option value='lowtoHigh'>Low to High</option>
                            <option value='hightoLow'>High to Low</option>
                            <option value='newItems'>New Items</option>
                          </select>
                      </div>
                    </div>
                </div>
                <div className='row'>
                  {/* =======================Items List======================= */}
                  {this.state.custsItemsListData && this.state.custsItemsListData.length > 0 ?
                    <div className='row'>
                      {this.state.custsItemsListData.map((item, i) => {
                        return (
                          <div className='col-sm-3 col-6 p-2' key={i}>
                            <ListItemViewComponent state={this.state} custsItemsListData={this.state.custsItemsListData} item={item} handleAddCart={this.handleAddCart} cartData={this.getCartData} unitsChange={this.unitsChange} i={i} shareClick={this.shareClick} />
                          </div>
                        )
                      })}
                    </div> :
                    <div className='col-md-12 mt-10'>
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
                    </div>

                  }
                  {/* =======================Items List======================= */}
                </div>
                {this.state.custsItemsListCount > 0 && <div className='mt-1'>
                  <Pagination
                    activePage={this.state.crntPgNum}
                    itemsCountPerPage={Number(this.state.pageLimit)}
                    totalItemsCount={this.state.custsItemsListCount}
                    pageRangeDisplayed={5}
                    onChange={this.handleChangePage}
                    activeLinkClass='active-a-item'
                  />
                </div>}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============================== footer start ================================= --> */}
        <FooterComponent />
        {this.state.isFilterOpen ?
          <FilterComponent filterSelectItems={this.filterSelectItems} filterByRating={this.filterByRating} filterByPrice={this.filterByPrice} filterUnitsItems={this.filterUnitsItems} filterClose={this.filterClose} /> : ''}
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
  };
};

export default connect(mapStateToProps, mapDistachToProps)(ProductsPageComponent);
