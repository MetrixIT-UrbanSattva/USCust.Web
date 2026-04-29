/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */


import React from 'react';
import moment from 'moment';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import FooterComponent from '../footer';
import {Header} from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import Logo from '../../assets/images/logo.png'

class InvoiceComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  printDocument = () => {
    const input = document.getElementById('divToPrint');
    var options = { quality: 2.00 };
    html2canvas(input, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice.pdf');
    });
  };

  render() {
    const { soGrpData, soGrpItemData } = this.props;
    const deliveryCharges = soGrpData.gsgc + soGrpData.gdc + soGrpData.gsc + soGrpData.gwhc;
    const disAmt = soGrpData.gdAmt;
    const offAmt = soGrpData.gaoAmt;
    const spTotal = soGrpData.gspTotal;
    const totalAmt = soGrpData.gNetAmt - offAmt;
    const savedAmt = offAmt + disAmt;
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        <section className='checkout-section mt-3 mb-5'>
          <div className='container-fluid auto-container'>
            <div className='row align-items-center'>
              <div className='col-sm-12'>
                <div className='d-flex justify-content-between'>
                  <h3 className='screen-title'>Invoice</h3>
                  <div className='flex-end'>
                    <button className='btn btn-sm btn-success' onClick={this.printDocument}>Download Invoice</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='invoice invoice-content invoice-2'>
              <div className='back-top-home hover-up mt-30 ml-30'>
              </div>
              <div className='invoice-inner'>
                <div className='invoice-info' id='invoice_wrapper'>
                  <div id='divToPrint' className='mt4' >
                    <div className='invoice-header'>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <div className='invoice-numb'>
                            <h4 className='invoice-header-1 mb-10 mt-20'>Invoice No: <span className='text-brand'>{soGrpData.invoice}</span>
                            </h4>
                            <h6 className=''>Date: {moment(soGrpData.cDtStr).format('Do MMM, YYYY')}</h6>
                            <h6 className=''>Order No: {soGrpData.soGrpCode}</h6>
                          </div>
                        </div>
                        <div className='col-sm-6'>
                          <div className='invoice-name text-end'>
                            <div className='logo'>
                              <a>
                                <img src={Logo} width={200} alt='logo' />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='invoice-top'>
                      <div className='row'>
                        <div className='col-lg-9 col-md-6'>
                          <div className='invoice-number'>
                            <h4 className='invoice-title-1 mb-10'>Supplier Details</h4>
                            <p className='invoice-addr-1'>
                            <strong>{soGrpData && soGrpData.voName}</strong>
                              <br /><strong>{soGrpData && soGrpData.sodl && soGrpData.voCode}</strong> 
                              <br /><strong>Cin: {soGrpData && soGrpData.voCinNum }</strong>
                              <br /> <strong>Gst: { soGrpData && soGrpData.voGstNum}</strong>
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                          <div className='invoice-number'>
                            <h4 className='invoice-title-1 mb-10'>Ship To/Bill To</h4>
                            <p className='invoice-addr-1'>
                              <strong>{soGrpData && soGrpData.sodl && soGrpData.sodl.pName}</strong>
                              <br /> <strong>{soGrpData && soGrpData.sodl && soGrpData.sodl.intiNum}</strong> <br /><strong>{soGrpData && soGrpData.sodl && soGrpData.sodl.chirunama},</strong> <strong>{soGrpData && soGrpData.sodl && soGrpData.sodl.veedhi}</strong>
                              <br />  <strong>{soGrpData && soGrpData.sodl && soGrpData.sodl.jilla},</strong><strong>{soGrpData && soGrpData.sodl && soGrpData.sodl.rastr}</strong> <strong>{soGrpData && soGrpData.sodl && soGrpData.sodl.pincode}</strong> 
                              <br /> <strong>{soGrpData && soGrpData.sodl && soGrpData.sodl.desam}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='invoice-center'>
                      <div className='table-responsive'>
                        <table className='table invoice-table'>
                          <thead className='bg-active'>
                            <tr>
                              <th>#</th>
                              <th>Item</th>
                              <th className='text-end'>MRP</th>
                              <th className='text-end'>Unit Price</th>
                              <th className='text-end'>Qty</th>
                              <th className='text-end'>Sub Total</th>
                              <th className='text-end'>GST %</th>
                              <th className='text-end'>GST Amount</th>
                              <th className='text-end'>Discount</th>
                              <th className='text-end'>Total</th>
                            </tr>
                          </thead>
                          {soGrpItemData && soGrpItemData.map((data, i) =>
                            <tbody key={i}>
                              <tr>
                                <td>{i+1}</td>
                                <td>
                                  <div className='item-desc-1'>
                                    <span>{data.icn}</span>
                                    <small>SKU: {data.iSkuNum}</small>
                                  </div>
                                </td>
                                <td className='text-end'>₹{data.mrp}</td>
                                <td className='text-end'>₹{data.asPrice}</td>
                                <td className='text-end'>{data.iQty}</td>
                                <td className='text-end'>₹{data.aspTotal}</td>
                                <td className='text-end'>{data.iGst}</td>
                                <td className='text-end'>₹{data.tiGstAmt}</td>
                                <td className='text-end'>₹{data.dAmt}</td>
                                <td className='text-end'>₹{data.spTotal}</td>
                              </tr>
                            </tbody>
                          )}
                          <tr>
                            <td colSpan='8' className='text-end f-w-600'></td>
                            <td className='text-end'>₹{disAmt}</td>
                            <td className='text-end'>₹{spTotal}</td>
                          </tr>
                        </table>
                      </div>
                      <div className='row mt-3'>
                        <div className='col-8'></div>
                        <div className='col-4'>
                          <div className='table-responsive'>
                            <table>
                              <tbody>
                                <tr>
                                  <td className='text-end'>Total</td>
                                  <td className='text-end'><strong>₹{spTotal}</strong></td>
                                </tr>
                                <tr>
                                  <td className='text-end'>Delivery Charges</td>
                                  <td className='text-end'><strong>₹{deliveryCharges}</strong></td>
                                </tr>
                                <tr>
                                  <td className='text-end'>Offer</td>
                                  <td className='text-end text-success'><strong>₹{offAmt}</strong></td>
                                </tr>
                                <tr>
                                  <td className='text-end'><strong className='mb-8'>Net Amount</strong></td>
                                  <td className='text-end'><strong className='mb-12'>₹{totalAmt}</strong></td>
                                </tr>
                              </tbody>
                            </table>
                            <div className='text-end'>
                              <strong className='col-sm-6 col-offsite'>You Saved : </strong>
                              <strong className='value text-success'>₹{savedAmt}</strong>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='invoice-bottom'>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <div>
                            <h3 className='invoice-title-1'>Important Note</h3>
                            <ul className='important-notes-list-1'>
                              <li>All amounts shown on this invoice are in Rupess</li>
                              <li>Finance charge of 1.5% will be made on unpaid balances after 30 days.</li>
                              <li>Once order done, money can't refund</li>
                              <li>Delivery might delay due to some external dependency</li>
                            </ul>
                          </div>
                        </div>
                        <div className='col-sm-6 col-offsite'>
                          <div className='text-end'>
                            <p className='mb-0 text-13'>Thank you for your business</p>
                            <p>
                              <strong>Urban Sattva</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterComponent />
      </div>

    )
  }
}
export default InvoiceComponent;