/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import profilePic from '../../assets/images/22.jpg';
import RatingComponent from '../common/RatingComponent';
import { PostItemRvrsList } from '../../actions/Items/ItemsActions';
import { PostCustomerLikesCount, PostCustomerRRReports } from '../../actions/my-orders/CustMyOrdersAction';

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

const ProductRvrsComponent = (props) => {
  const [reviewRtngsList, setReviewRtngsList] = useState([]);
  const [reviewRtngsListCount, setreviewRtngsListCount] = useState(0);
  const [totalRatingCount, setTotalRatingCount] = useState(0);
  const [lCount, setLCount] = useState(0);
  const [dlCount, setDlCount] = useState(0);
  const [reportPopUp, setreportPopUp] = useState(false);
  const [reportData, setReportData] = useState({});
  const [reportType, setReportType] = useState('');
  const [reportMsg, setReportMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    itemRvrsData(props.id);
  }, [props.id])

  const itemRvrsData = (unitId) => {
    const reqBody = { unitId, crntPgNum: 1, pageLimit: 20 }
    props.PostItemRvrsList(reqBody, (resObj) => {
      if (resObj.status == '200') {
        const res = resObj.resData.result;
        setReviewRtngsList(res.custsItemRvRtngsListData);
        setreviewRtngsListCount(res.custsItemRvRtngsListCount);
        let totalRating = 0;
        res.custsItemRvRtngsListData.length > 0 && res.custsItemRvRtngsListData.map(item => totalRating += item.rating)
        setTotalRatingCount(totalRating);
        props.count(totalRating, res.custsItemRvRtngsListCount);
      } else {
        setReviewRtngsList([]);
        setreviewRtngsListCount(0);
        setTotalRatingCount(0)
      }
    })
  }
  const likeClick = (rating, item) => {
    if (rating === 'Liked') {
      const count = item.lCount + 1;
      setLCount(count);
      setDlCount(item.dlCount);
      let reqBody = {
        count,
        lType: rating,
        dCount: item.dlCount - 1,
        ...item
      }
      props.PostCustomerLikesCount(reqBody, (resObj) => {
        if (resObj.status === '200') {
          itemRvrsData(props.id);
        }
      });

    } else if (rating === 'DisLiked') {
      const count = item.dlCount + 1;
      setDlCount(count);
      setLCount(item.lCount);
      let reqBody = {
        count,
        lType: rating,
        dCount: item.lCount - 1,
        ...item
      }
      props.PostCustomerLikesCount(reqBody, (resObj) => {
        if (resObj.status === '200') {
          itemRvrsData(props.id);
        }
      });
    }
    else {
      if (rating === 'Liked') {
        setLCount(item.lCount + 1);
        item.dlCount > 0 && setDlCount(item.dlCount - 1);
      }
      else {
        setDlCount(item.dlCount + 1);
        item.lCount > 0 && setLCount(item.lCount - 1);
      }
    }
  }
  const reportClick = (item) => {
    setreportPopUp(!reportPopUp);
    setReportData(item);
  }
  const closeLoginModal = () => {
    setreportPopUp(!reportPopUp)
  }
  const reportChange = (value) => {
    setReportType(value);
    setErrorMsg('');
  }
  const submitReport = (item, reportType) => {
    if (!reportType) {
      setErrorMsg('Please enter atleast one report');
    } else {
      const reqBody = {
        rvrtngId: item._id,
        vndrOrg: item.vndrOrg,
        item: item.item,
        itemCode: item.itemCode,
        voItem: item.voItem,
        voiCode: item.voiCode,
        reportType,
        reportMsg
      }
      props.PostCustomerRRReports(reqBody, (resObj) => {
        if (resObj.status === '200') {
          toast.success('Reported');
          setreportPopUp(false);
        } else if (resObj.status === '201') {
          toast.success('Reported');
          setreportPopUp(false);
        } else {
          setreportPopUp(false);
          toast.error('Report Failed');
        }
      });
    }
  }
  return (
    <div className='reviews-section mt-4'>
      <div className='row'>
        <div className='col-sm-12 col-12'>
          <h2 className='foo_wid_title '>Reviews ({reviewRtngsListCount})</h2>
        </div>
        <div className='col-sm-12 col-12'>
          <RatingComponent count={totalRatingCount} /> <span className='mx-1'>({reviewRtngsListCount})</span>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-12'>
          <div className='d-flex'>
            {reviewRtngsList.length > 0 && reviewRtngsList.map((item, i) => (
              <div>
                <div className='reviewer'>
                  <img src={profilePic} width={50} /> <span>{item.pName}</span>
                </div>
                <div className='mx-3'>
                  <h6>{item.reviewTitle}</h6>
                  <RatingComponent count={item.rating} />
                  <p >{item.review}</p>
                </div>
                <div className='col-sm-2 m-3 d-flex justify-content-between'>
                  <div className='me-3 d-flex justify-content-between' onClick={() => likeClick('Liked', item)}>
                    <div><i className='fa-regular fa-thumbs-up me-1'></i></div>
                    <div>{lCount ? lCount : item.lCount}</div>
                  </div>
                  <div className='me-3 d-flex justify-content-between' onClick={() => likeClick('DisLiked', item)}>
                    <div><i className='fa-regular fa-thumbs-down me-1'></i></div>
                    <div>{dlCount ? dlCount : item.dlCount}</div>
                  </div>
                  <div className='me-3 d-flex justify-content-between' onClick={() => reportClick(item)}>
                    <div><i class="far fa-flag"></i></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {reviewRtngsList.length > 0 &&
          <div className='col-sm-12 '>
            <button className='btn  btn-sm btn-warning ms-5 mt-5 mb-5' >See All Reviews</button>
          </div>
        }
      </div>
      <Modal
        isOpen={reportPopUp}
        onRequestClose={closeLoginModal}
        style={customStyles}
      >
        <section className='login-section'>
          <div className='col-sm-12 col-12'>
            <div className='card border-0 '>
              <button onClick={closeLoginModal} className='btn btn-outline-danger btn-md modal-close-btn'>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className='card-header'>
                <h4> Report Post What is the issue </h4>
              </div>
              <div className='card-body mx-5'>
                <div className='row justify-content-center'>
                  <div className='form-check mb-2'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={() => reportChange('Sexual content')} />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Sexual content
                    </label>
                  </div>
                  <div className='form-check mb-2'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={() => reportChange('Violent or repulsive content')} />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Violent or repulsive content
                    </label>
                  </div>
                  <div className='form-check mb-2'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={() => reportChange('Hateful or abusive content')} />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Hateful or abusive content
                    </label>
                  </div>
                  <div className='form-check mb-2'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={() => reportChange('Harmful or dangerous acts')} />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Harmful or dangerous acts
                    </label>
                  </div>
                  <div className='form-check mb-2'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={() => reportChange('Child abuse')} />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Child abuse
                    </label>
                  </div>
                  <div className='form-check mb-2'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={() => reportChange('Spam or misleading')} />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Spam or misleading
                    </label>
                  </div>
                  <div className='form-check mb-2'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={() => reportChange('Infringes my rights')} />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Infringes my rights
                    </label>
                  </div>
                  <div className='form-check mb-2'>
                    <input className='form-check-input' type='radio' name='flexRadioDefault' onChange={() => reportChange('Captions issue')} />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Captions issue
                    </label>
                  </div>
                </div>
              </div>
              <div className='mb-3 mx-5'>
                <textarea type='text' className='form-control' placeholder='Type here' value={reportMsg} onChange={(e) => setReportMsg(e.target.value)} />
              </div>
              <div className='text-danger text-center'>{errorMsg}</div>
              <div className="countdown-text d-flex justify-content-between mb-2 mx-5">
                <button className='btn btn-danger' onClick={() => setreportPopUp(false)}>Cancel</button>
                <button className='btn btn-light' onClick={() => submitReport(reportData, reportType)}>Report</button>
              </div>
            </div>
          </div>
        </section>
      </Modal>
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
const mapStateToProps = (state) => { return {} };

const mapDistachToProps = (dispatch) => {
  return {
    PostItemRvrsList: (body, callback) => dispatch(PostItemRvrsList(body, callback)),
    PostCustomerLikesCount: (body, callback) => dispatch(PostCustomerLikesCount(body, callback)),
    PostCustomerRRReports: (body, callback) => dispatch(PostCustomerRRReports(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(ProductRvrsComponent);