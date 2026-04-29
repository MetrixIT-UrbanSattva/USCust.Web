/**
 * Copyright (C) Skill Works IT Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Works IT Team <contact@skillworksit.com>, Jan 2023
 */

import React from 'react';
import Pagination from 'react-js-pagination';

class SupportTicketListComponent extends React.Component {
  render() {
    const { state, handleChangeLimit, handleShowCreate, handleChangeSearch, getUsersList, handleKeyInput, handleChangePage } = this.props;
    return (
      <div className='wrapper'>
        <div className='main'>
          <main className='content'>
            <div className='container-fluid p-0'>
              <a className='btn btn-primary float-end mt-n1' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight' aria-controls='offcanvasRight'
                onClick={handleShowCreate}
              >
                <i className='fas fa-plus'></i> Create Support
              </a>
              <h1 className='h3 mb-3'>Support Ticket List</h1>
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='dataTables_wrapper dt-bootstrap5 no-footer'>
                        <div className='row mb-3'>
                          <div className='col-sm-12 col-md-6'>
                            <div className='dataTables_length' id='datatables-reponsive_length'>
                              <label>Show <select name='datatables-reponsive_length' aria-controls='datatables-reponsive' className='form-select form-select-sm' value={state.rLimit} onChange={handleChangeLimit}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                              </select>
                              </label>
                            </div>
                          </div>
                          <div className='row col-md-6'>
                            <div id='datatables-reponsive_filter' className='dataTables_filter col-sm-6'>
                              <input type='search' className='form-control form-control-sm' placeholder='Search' aria-controls='datatables-reponsive' onKeyPress={handleKeyInput} value={state.searchStr} onChange={handleChangeSearch} />
                            </div>
                            <div id='datatables-reponsive_filter' className='dataTables_filter col-sm-6'>
                              <span className=' bg-violet' id='inputGroup-sizing-default'> <button className='btn btn-default btn-md bg-violet' onClick={getUsersList}> Search</button></span>
                            </div>

                          </div>
                        </div>
                        <div className='table-responsive'>
                          <table >
                            <thead>
                              <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Message</th>
                                <th scope='col'>Mobile #</th>
                                <th scope='col'>Support Type</th>
                                <th scope='col'>Status</th>
                                <th scope='col'>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {state.supportTicketsListData && state.supportTicketsListData.map((list, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{list.scName}</td>
                                    <td>{list.sMsg}</td>
                                    <td>{list.scMobNum}</td>
                                    <td>{list.sType}</td>
                                    <td>{list.cHoda}</td>
                                    <td>{list.hoda}</td>
                                    <td>
                                      <a className='me-2'><i className='fa fa-edit' onClick={() => handleEditUser(list._id)}> </i></a>
                                      <a onClick={() => handleViewUser(list._id)}><i className='fa fa-eye' ></i></a>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='paginate_button page-item active'>
                {state.supportTicketsListCount &&
                  <Pagination
                    className='mt-0'
                    activePage={state.actPgNum}
                    itemsCountPerPage={state.rLimit}
                    totalItemsCount={state.supportTicketsListCount}
                    pageRangeDisplayed={5}
                    onChange={handleChangePage}
                  />}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default SupportTicketListComponent;
