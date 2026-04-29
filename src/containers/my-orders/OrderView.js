/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { OrderViewComponent } from '../../components/my-orders';
import { useParams } from "react-router-dom";
import { PostCustomerMyOrdersView, PostCustomerMyOrdersItemsView } from '../../actions/my-orders/CustMyOrdersAction'


const OrderView = (props) => {
  let { id } = useParams();
  const [soGrpData, setSoGrpData] = useState({});
  const [soGrpItemData, setSoGrpItemData] = useState([]);

  useEffect(() => {
    custSoGrpOrdersView();
    custSoGrpOrdsItemView();
  }, []);

  const custSoGrpOrdersView = () => {
    const reqBody = { soId: id };
    props.PostCustomerMyOrdersView(reqBody, resObj => {
      if (resObj.status == '200') {
        setSoGrpData(resObj.resData)
      } else {
        setSoGrpData({})
      }
    });
  }

  const custSoGrpOrdsItemView = () => {
    const reqBody = { soId: id };
    props.PostCustomerMyOrdersItemsView(reqBody, resObj => {
      if (resObj.status == '200') {
        setSoGrpItemData(resObj.resData);
      } else {
        setSoGrpItemData([]);
      }
    });
  }

  return (
    <OrderViewComponent soGrpData={soGrpData} soGrpItemData={soGrpItemData} soId={id} />
  );
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    PostCustomerMyOrdersView: (body, callback) => dispatch(PostCustomerMyOrdersView(body, callback)),
    PostCustomerMyOrdersItemsView: (body, callback) => dispatch(PostCustomerMyOrdersItemsView(body, callback))
  };
};

export default connect(mapStateToProps, mapDistachToProps)(OrderView);
// export default OrderView;
