import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { connect } from 'react-redux';

import CommonProduct from './CommonProduct';
import { PostMonthBasketList } from '../../actions/mbasket/MonthBasketActions';


function CommonTabsComponent(props) {
  const [key, setKey] = useState('all');
  const [bType, setbType] = useState('Default');

  const [monthBasketList, setMonthBasketList] = useState([]);

  useEffect(() => {
    handleMonthBasket(bType, key);
  }, []);

  const handleMonthBasket = (bType, key) => {
    const reqBody = { bType, itemCategory: key }
    props.PostMonthBasketList(reqBody, (resObj) => {
      if (resObj && resObj.status == '200') {
        setMonthBasketList(resObj.resData.result);
      } else {
        setMonthBasketList([])
      }
    })
  }

  const setTabs = (k) => {
    setKey(k);
    handleMonthBasket(bType, k)
  }


  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setTabs(k)}
      className="mb-3"
    >
      <Tab eventKey="all" title="All" >
        <CommonProduct monthBasketList={monthBasketList} keyValue={key} cartData={props.cartData}/>
      </Tab>
      <Tab eventKey="pulses" title="pulses" >
        <CommonProduct monthBasketList={monthBasketList} keyValue={key} cartData={props.cartData}/>
      </Tab>
      <Tab eventKey="ghee" title="ghee" >
        <CommonProduct monthBasketList={monthBasketList} keyValue={key} cartData={props.cartData}/>
      </Tab>
      <Tab eventKey="honey" title="honey" >
        <CommonProduct monthBasketList={monthBasketList} keyValue={key} cartData={props.cartData}/>
      </Tab>
      <Tab eventKey="dryfruits" title="dryfruits" >
        <CommonProduct monthBasketList={monthBasketList} keyValue={key} cartData={props.cartData}/>
      </Tab>
    </Tabs>
  );
}

const mapStateToProps = (state) => ({
  MonthBasketReducer: state.MonthBasketReducer
});
const mapDistachToProps = (dispatch) => ({
  PostMonthBasketList: (body, cb) => dispatch(PostMonthBasketList(body, cb))
});

export default connect(mapStateToProps, mapDistachToProps)(CommonTabsComponent);


