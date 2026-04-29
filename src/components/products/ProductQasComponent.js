/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { PostItemQasList } from '../../actions/Items/ItemsActions';

const ProductQasComponent = (props) => {

  const [qasList, setQasList] = useState([]);
  const [qasCount, setQasCount] = useState(0);

  useEffect(() => {
    itemQasData(props.id);
  }, [props.id])

  const itemQasData = (unitId) => {
    const reqBody = { unitId, crntPgNum: 1, pageLimit: 20 }
    props.PostItemQasList(reqBody, (resObj) => {
      if (resObj.status == '200') {
        const res = resObj.resData.result;
        setQasList(res.custsItemQasList);
        setQasCount(res.custsItemQasListCount);
      } else {
        setQasList([]);
        setQasCount(0);
      }
    })
  }
  return (
    <div className='reviews-section mt-5'>
      {qasList.length > 0 &&
        <div className='row'>
          <div className='col-sm-6 col-12'>
            <h2 className='foo_wid_title '>Question and Answers</h2>
          </div>
        </div>}
      <div className='row'>
        <div className='col-sm-12 col-12'>
          <div className='each-q-a'>
            <div className='ml-3 mt-2'>
              {qasList.length > 0 && qasList.map((item, i) => (
                <div>
                  <p className='text-dark'>Q).{item.qtn}</p>
                  <p>A). {item.ans}</p>
                  <div className='d-flex ms-4'>
                    <div className='d-flex like-div'>
                      <a onClick={this.handleLikes}>
                        <span className='like'>
                          <i class="fa-regular fa-thumbs-up"></i>
                          {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-up"></i> */}
                        </span>
                      </a>
                      <p className='px-3'>{item.lCount}</p>
                    </div>
                    <div className='d-flex dislike-div'>
                      <a onClick={this.handleLikes}>
                        <span className='like'>
                          <i class="fa-regular fa-thumbs-down"></i>
                          {/* replace icon class name on click condition is --- <i class="fa-solid fa-thumbs-down"></i> */}
                        </span>
                      </a>
                      <p className='px-3'>{item.dlCount}</p>
                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
        {qasList.length > 0 &&
          <div className='col-sm-12 '>
            <button className='btn  btn-sm btn-warning ms-3 mt-4 mb-4' >See All Questions</button>
          </div>
        }
      </div>
    </div>)
}

const mapStateToProps = (state) => { return {} };

const mapDistachToProps = (dispatch) => {
  return {
    PostItemQasList: (body, callback) => dispatch(PostItemQasList(body, callback)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(ProductQasComponent);
