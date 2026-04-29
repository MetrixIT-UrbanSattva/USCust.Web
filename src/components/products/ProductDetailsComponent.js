/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { PostItemDetailsView } from '../../actions/Items/ItemsActions';
import ProductRvrsComponent from './ProductRvrsComponent';

const ProductDetailsComponent = (props) => {
  const [itemDetailsData, setitemDetailsData] = useState({});

  useEffect(() => {
    itemDetailsView(props.id);
  }, [props.id])


  const itemDetailsView = (id) => {
    const reqBody = { id }
    props.PostItemDetailsView(reqBody, async (resObj) => {
      if (resObj.status == '200') {
        var itemDetailsData = resObj.resData.result
        itemDetailsData.about && await itemDetailsData.about.sort(sortOrder('seq'));
        itemDetailsData.techDtls && await itemDetailsData.techDtls.sort(sortOrder('seq'));
        itemDetailsData.points && await itemDetailsData.points.sort(sortOrder('seq'));
        setitemDetailsData(itemDetailsData)
      } else {
        setitemDetailsData({})
      }
    })
  };

  const sortOrder = (prop) => {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  }
  return (
    <div>
      <div className='menu_cat_tab'>
        <Tabs  id='mobilemenuContent' className='mb-3'>
          <Tab eventKey='about' title='About This Item'>
            <div>
              {itemDetailsData.about && itemDetailsData.about.length > 0 && itemDetailsData.about.map((item, i) => (
                <div className='mb-3' key={i}>
                  {/* <h2>{item.title}</h2> */}
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey='highlight' title='Highlight Points'>
            <div>
            {itemDetailsData.points && itemDetailsData.points.length > 0 && itemDetailsData.points.map((item, i) => (
              <div className='style_list_two m-2' key={i}>
                <ul className='product-more-infor'>
                  <li className='sub_title'>
                    <span>{item.point}</span>
                  </li>
                </ul>
              </div>
            ))}
            </div>
          </Tab>
          <Tab eventKey='technical' title='Technical Details'>
            <div>
              {itemDetailsData.techDtls && itemDetailsData.techDtls.length > 0 && itemDetailsData.techDtls.map((item, i) => (
                <div className="container" key={i}>
                  <b>{item.label} :</b><span className='mx-3'>{item.value}</span>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey='reviews ' title='Reviews'>
            <ProductRvrsComponent id={props.id} count={props.count} />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => { return {} };

const mapDistachToProps = (dispatch) => {
  return {
    PostItemDetailsView: (body, callback) => dispatch(PostItemDetailsView(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(ProductDetailsComponent);
