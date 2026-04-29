/**
 * Copyright (C) Skill Work Team - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Skill Work Team <devteam@dev.skillwrk.com>, Jan 2022
 */

import React, { Component } from 'react';

import { Header } from '../../containers/header';
import BreadcrumbsComponent from '../common/BreadcrumbsComponent';
import FooterComponent from '../footer';
import { Profile } from '../../containers/profile';
import support from '../../assets/images/coming.jpg';
import hashHistory from '../../hashHistory';

class TermsAndCondition extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <BreadcrumbsComponent />
        <section className='profile-section my-3'>
          <div className='container-fluid auto-container'>
            <div className='row'>
              <Profile />
              <div className='col-sm-8'>
                <div className='card shadow mt-2'>
                  <div className='card-header bg-transparent '>
                    <div className='row mt-2'>
                      <h3 className='sub-title'>Terms and Conditions</h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                    <div className='row justify-content-between'>

                      <div className='mb-3'>Last Updated on 24rd February 2023</div>
                      <div className='mb-3 text-center'>Terms and Conditions</div>

                      <div className='mb-3'>Please read these terms and conditions ("Terms") carefully before accessing or using the Platform (defined hereinafter). These Terms along with the Privacy Policy published on the Platform ("Privacy Policy") and other policies (as may be notified/displayed/published on the Platform) constitutes the contract between the Users of this Platform and the Company (collectively "Agreement"). By use of the Platform, Users agree to be bound by these Agreement as posted on the Platform from time to time.</div>
                      <div>
                        <strong className='mb-3'>1. ABOUT THE TERMS</strong>
                        <ol>1.1 What is UrbanSattva and who operates it?</ol>
                        <ol>1. UrbanSattva is an application which provides an online marketplace ("Application") where registered suppliers ("Suppliers") can offer to sell their products to registered Users of Application including to resellers ("Resellers").
                          The Application and the website at www.UrbanSattva.com ("Website") (collectively, "Platform") are operated by Fashnear Technologies Private Limited ("Company").
                          The Company’s role is limited to managing the Application and associated marketing, facilitating payment collections, fulfilment, order management, enquiry management and other incidental services to enable the transactions between the Suppliers and the Users ("Services").
                          Services are not made available on the Website and to avail the same, Users are required to install the Application.
                        </ol>
                        <ol>1.2 When are these Terms applicable and binding on User?
                          The Agreement is applicable to any person when they install, download or even merely visit or access any part of the Platform or utilise the Services, such persons are referred to as users, which include without limitation users who are browsers, Suppliers, Resellers, merchants, other purchaser or contributors of content (collectively, "User").
                          The Agreement between User and Company is effective on the date on which the Application is downloaded/Website is accessed and/or the date on which terms of Agreement are updated, creating a legally binding arrangement between the User and the Company.
                        </ol>
                        <ol>1.3 Whether the terms of this Agreement can be modified?
                          Users can review the most current version of the Agreement at any time on the Website. Company reserves the right to unilaterally update, change or replace any part of the Agreement by publishing updates or changes on the Platform and such amended provisions of the Agreement shall be effective immediately upon being posted on the Platform.
                        </ol>
                        <ol>1.4 What if the terms of the Agreement are not acceptable to User?</ol>
                        <ol> If the User does not agree with the terms of the Agreement, the User is advised to refrain from using the Platform. By the use of the Services, it is signified that the User agrees to abide by the terms of the Agreement (as updated from time to time).</ol>
                      </div>

                      <div>
                        <strong className='mb-3'>2. ACCOUNT REGISTRATION, SUSPENSION AND TERMINATION</strong>
                        <ul>
                          2.1 Does a User necessarily need to create an account on the Platform?
                          Company does not permit Users to avail the Services on the Platform without prior registration. Users may access the Application by registering to create an account and become a member. The membership is limited for the purpose of buying or selling products, is subject to this Agreement and strictly not transferable.
                        </ul>
                        <ol>2.2 For the use of Platform, is a User subject to any eligibility criteria?
                          The Services on the Platform shall be availed by User(s) who can form legally binding contracts under Indian Contract Act, 1872 and are at least eighteen (18) years of age.
                          The Company reserves the right to terminate the User’s account and/or deny access to the Platform if it is brought to the Company’s notice or if it is discovered that the User does not meet the conditions herein. Users accessing or using the Platform represent and warrant that they have the right to access or use the Platform.
                        </ol>
                        <ol>
                          2.3 Are there any specific requirements for registering an account on Platform?
                          The Users are required to enter a valid phone number while registering on Platform. By such registration, User consents to be contacted by Company via phone calls, SMS notifications, instant messages or other such means of communication inter alia for subscription/services/promotional updates etc. Users may 'opt out' of such subscription/service/promotional updates either through the ‘opt out’ means provided or by writing to the support team.
                          It is the responsibility of the Users to provide correct mobile number so that the Company can communicate with the Users via SMS. The Users understand and agree that if the Company sends an SMS, but the Users do not receive it because the Users’ mobile number is incorrect or out of data or blocked by the User's service provider, or the Users are otherwise unable to receive SMS, the Company shall be deemed to have provided the communication to the Users effectively.
                          It is the User’s responsibility to provide accurate, current and complete information during the registration process and to update such information to keep it accurate, current and complete.
                        </ol>
                        <ul>
                          2.4 Can User account registered on Platform be suspended or terminated?
                          The Company reserves the right to suspend or terminate the account or access to Services (or any part thereof) on the Application including blocking any amounts due to the User and associated account without notice and the Users will remain liable for all amounts due up to and including the date of termination, if:
                          any information provided during the registration process or thereafter proves to be inaccurate, not current or incomplete; and/or
                          in Company's assessment, the User has:
                          <li>▪ charged an unreasonably high price;</li>
                          <li>▪unreasonable instances of returns and/or cancellations initiated;</li>
                          <li>▪engaged in actions that are unlawful, fraudulent, negligent or derogatory to the Company’s interests.</li>
                          <li>▪failed or is suspected to have failed to comply with any term or provision of the Agreement or applicable law.</li>
                          User is found to be non-compliant with the Agreement.
                          Further, where the viuation of the Agreement gives rise to criminal or civil action, the Company may at its sole discretion pursue such action.
                          Without prejudice to the above stated rights of the Company, in case of alleged fraud or other breach of this Agreement by User, Company may at its sole discretion (a) withhold all amounts payable to such User; and (b) impose penalties as the Company may reasonably determine and set off such penalties from the monies payable by Company to such User.
                        </ul>
                        <ol>2.5 What are User obligations vis-à-vis its registered account on Platform?
                          Having an account on the Platform gives authenticity to the actions of the User. It means that the User is solely responsible for all activities that occur under its account and that all transactions made by such User is intended for bona fide sale or consumption in the course of their business activities.
                          Any and every activity undertaken by a User under his/her account shall be the sole responsibility of such User and the Company shall not be liable for such activity in any manner. Hence it shall be the responsibility of the User to treat the user identification code, password and any other piece of information that is provided by the Company, as part of the security procedures, as confidential and not disclose the same to any person or entity other than the Company.
                          User acknowledges and agrees that having an account on Platform does not grant it any rights on Platform not specifically granted to them by the Company, and that the User has no ownership or other interest in the account. The User understands that all rights in and to the account are and shall forever be owned by and inure to the benefit of the Company.
                          On registration, the Users may receive a password protected account and an identification. The Users agree to:
                          maintain the confidentiality of their password, if applicable;
                          take full responsibility for all activities by Users accessing the Application through their account;
                          immediately notify the Company of any unauthorised use of their account or any other breach of security that they become aware of; and
                          ensure that they exit from their account at the end of each session.
                        </ol>
                        <div>
                          The Application allows Users to place orders for the products listed by Suppliers on Application and the Application, subject to Agreement herein, facilitates the placement of orders for the products by the Users.
                          On receipt of an order from a User, Company shall send electronically a confirmation of such order to Supplier and the User concerned. Further, the Company may inform the User about the availability or unavailability or change in price of the order as informed by Supplier concerned, from time to time. Confirmation of the order by Supplier shall be treated as final.
                        </div>
                      </div>

                      <div className='mt-3'>
                        <strong>3. PLACING ORDERS AND FINANCIAL TERMS</strong>
                        <ul>3.1 How does order placement work on the Platform?</ul>
                        <ul>3.2 How are the commercial terms fixed on Application?

                          The Company does not own, sell or resell any products on its own and/or does not control the Suppliers and only facilitates the transaction between buyers and sellers including User and Supplier as a 'marketplace'. Company makes all reasonable efforts to promptly update the User’s account and other information to facilitate the transaction completion. Hence, Users are required to provide current, complete, and accurate purchase and account information for all purchases made at on the Application.
                          All commercial/contractual terms of sale are offered by Suppliers and agreed to between Suppliers and the Users alone. The commercial/contractual terms include without limitation, price, date, period and mode of delivery, warranties related to products, etc. Company does not have any control or does not determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms between the Suppliers and the Users.
                          Additionally, fulfilment of orders to their end users/consumers by a Reseller shall be the responsibility of the Reseller inter se such end user/consumer. Any add-on service provided by Platform towards such order shall be provided merely as a service provider of such Reseller by the Platform and accordingly, Platform shall not have any privity of contract with such end user/consumer.
                        </ul>

                        <ul>3.3 How does payment and settlement of payment work on the Platform?
                          Similarly in case of deliveries effected by Resellers using the Platform, the Platform only acts as a service provider for the Reseller facilitating delivery or other service related to an order. Company does not have any control, nor does it determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms between Reseller and its end user/consumer.
                          The Users acknowledge and agree that the Company may, at the request of the Supplier or the Reseller, act as the payment agent for the limited purpose of accepting payments on behalf of such Suppliers and Resellers. The Users understand, accept, and agree that the payment facility provided by the Company is neither a banking nor financial service but is merely a facilitator providing a third-party payment processor for the transactions on the Application. Further, by providing payment facility, the Company is neither acting as a trustee nor acting in a fiduciary capacity with respect to the transaction or the transaction price. The Company will not be liable for any charges made by the Users bank in relation to payment of the total amount.
                          Policies related to returns/exchanges, penalties, refunds, cancellation will be updated in the Application from time to time. The Company holds the right to change these policies as required in the Application without any permission from the Users.

                          In connection with any order, information such as name, , transaction details, device type, Platform usage details, PAN number, payment details, billing address and credit card information and any other information in relation thereto may need to be provided either to the Company or the third-party payment processor. If the Users are directed to the third-party payment processor, they may be subject to terms and conditions governing use of that third party’s service and that third party’s personal information collection practices. Users are requested to review such terms and conditions and privacy policy before using the Application. In case of Reseller providing billing information, delivery address or other contact information of its end user/consumer to Company or other delivery service provider, Reseller shall ensure that it has necessary consents and approvals from the respective end user/consumer as may be required under applicable law.
                        </ul>
                        <ul>
                          3.4 Whether Company charges User(s) for Services provided by Company on the Platform?
                          Company merely collects the payment on behalf of the Supplier or Reseller, as the case may be. All applicable taxes and levies, the rates thereof and the manner of applicability of such taxes are to be charged and determined by the Supplier or Reseller. Company holds no responsibility for the legal correctness/validity of the levy of such taxes. The sole liability with respect to any legal issue arising on the taxes payable shall be with the Reseller.
                          Services on Platform may require payment of charges, rate of which shall be solely at the discretion of the Company and shall be subject to User approval at the time of placing an order on the Platform. Company reserves the right to revise charges towards Service at any time at its sole discretion. The charge, applicable at any given time, will be the charge displayed at the time of purchase/booking of the respective Service (if any) by User on the Platform.
                          The transaction is bilateral between Suppliers & Users and/or Reseller & end users/consumers ("User Transactions"), the Company is not liable to charge or deposit any taxes applicable on such transaction.
                        </ul>
                        <ul>
                          3.5 Whether for transacting on Platform, User is required to be registered under the Central or State Goods and Services Tax Legislations ("GST Laws")?
                          Company reserves the right to introduce additional chargeable services on the Platform including charges for a premium return service, cancellation charges, cash on delivery handling fees etc.
                        </ul>

                        <ul>
                          3.6(A) What are the terms and conditions regarding the offers and benefits provided on the Platform and advertised by UrbanSattva?
                          Company is not obligated towards any direct or indirect tax obligation of the User that may arise as a result of User's access or use of Services on the Platform. The requirement for registration and compliances under the GST Laws and other tax laws is the sole responsibility of the User including Reseller, the Company is not liable for any omissions or commissions by such User who acts in violation of the any applicable law. Accordingly, User is advised to seek independent tax advice relating to its business and/or transaction through Platform including whether it is liable for GST registration.
                          <br />c. UrbanSattva Offers shall be subject to the terms and conditions which are solely determined by us, and the terms of such discounts and offers may vary for the customers based on factors relating to the customer such as usage of the platform, volume of transactions, time spent on the platform, city, place of residence, time, etc.
                          <br />a. Subject to below and unless otherwise mentioned, all product discounts and offers are by the Suppliers and not by the Company (“Supplier Offers”).
                          <br />b. From time to time, we may conduct various types of marketing and promotional campaigns which may include offers, discounts and other promotional offers to be used on our platform (“UrbanSattva Offers”).
                          <br />d. We reserve the right to make these offer available for a limited time period and to void, amend, discontinue, cancel or reject the use of any of the offers, discounts or promotional offers, including any aspect or feature of such offers at any time without any prior intimation.
                          <br />e. We reserve the right to vary the timing and dates of the offer; the number and category of products available for offer, at any time, subject to our absolute discretion.
                          <br />f. The offers, discounts and promotional offers may be changed or amended from time to time.
                          <br />g. We reserve the right to make certain offers valid for limited inventory and subject to availability of product at the time of booking.
                          <br />h. Certain offers may apply only to products covered under such promotional offers. It will not be applicable to the same or similar products sold by the same Supplier or other suppliers but not covered under offers. These offers will operate on UrbanSattva’s discretion on first-come-first served basis. Once the offer product stocks are over, you may purchase the same product on the platform outside the promotional offers available.
                          <br />i. UrbanSattva at its own discretion reserve the right to cancel your option to return or exchange any product purchased under offers and discounts.
                          <br />j. It is your responsibility to review and comply with the terms and conditions governing the offers, discounts and other promotional offers provided on our platform.
                          <br />k. Any of the offers, discounts or promotional offers may not be valid when used in conjunction with other promotional offers or vouchers unless explicitly permitted by us or the Supplier.
                          <br />l. The offers, discounts and promotional offers cannot be exchanged for cash and can only be availed in accordance with the terms and conditions of the offers, unless otherwise communicated.
                          <br />m. Certain offers, discounts and promotions offered such as first order discount, reactivation discount etc., may be applied at the cart level and in the event that multiple products are purchased in a single transaction, then such offer, discount, promotion may be divided and applied to each product in the cart, in a manner determined by us.
                          <br />n. Subject to UrbanSattva’s Cancellation and/or Return, Refund and Replacement policy, if the User: (i) cancels any product which is subject to any promotions, offer or discounts; or (ii) returns any product purchased which is subject to any promotions, offer or discounts, the User will be eligible to receive only the refund of the amount paid by the User on the purchase of such product.
                          <br />o. In the event, any product is cancelled or returned in accordance with UrbanSattva's Cancellation and/or Return, Refund and Replacement Policy, then save and except as provided herein,  any offer, promotion, discount applied to such product shall be forfeited.
                          <br />p.  We and/or the Supplier shall have no liability with respect to the offers, discounts and promotional offers on the Platform.
                        </ul>

                        <ul>  3.6(B) What are the terms and conditions regarding the Supplier Offers?
                          <br />a. Such offers shall be subject to the terms and conditions which are solely determined by us, and the terms of such discounts and offers may vary for the customers based on factors relating to the customer such as usage of the platform, volume of transactions, time spent on the platform, city, place of residence, time, etc.
                          <br />b. We reserve the right to make the offer available for a limited time period and to void, amend, discontinue, cancel or reject the use of any of the offers, discounts or promotional offers, including any aspect or feature of such offers at any time without any prior intimation.
                          <br />c. We reserve the right to vary the timing and dates of the offer; the number and category of products available for offer, at any time, subject to our absolute discretion.
                          <br />d. The offers, discounts and promotional offers may be changed or amended from time to time.
                          <br />e. We reserve the right to make certain offers valid for limited inventory and subject to availability of product at the time of booking.
                          <br />f. Certain offers may apply only to products covered under such promotional offers. It will not be applicable to the same or similar products sold by the same Supplier or other suppliers but not covered under offers. These offers will operate on UrbanSattva’s discretion on first-come-first served basis. Once the offer product stocks are over, you may purchase the same product on the platform outside the promotional offers available.                      g.    UrbanSattva at its own discretion reserve the right to cancel your option to return or exchange any product purchased under offers and discounts.                      h.        It is your responsibility to review and comply with the terms and conditions governing the offers, discounts and other promotional offers provided on our platform.                      i.     Any of the offers, discounts or promotional offers may not be valid when used in conjunction with other promotional offers or vouchers unless explicitly permitted by us or the Supplier.
                          <br />j. The offers, discounts and promotional offers cannot be exchanged for cash and can only be availed in accordance with the terms and conditions of the offers, unless otherwise communicated.
                          <br />k. Certain offers, discounts and promotions offered such as first order discount, reactivation discount etc., may be applied at the cart level and in the event that multiple products are purchased in a single transaction, then such offer, discount, promotion may be divided and applied to each product in the cart, in a manner determined by us.
                          <br />l. Subject to UrbanSattva’s Cancellation and/or Return, Refund and Replacement policy, if the User: (i) cancels any product which is subject to any promotions, offer or discounts; or (ii) returns any product purchased which is subject to any promotions, offer or discounts, the User will be eligible to receive only the refund of the amount paid by the User on the purchase of such product.
                          <br />m. In the event, any product is cancelled or returned in accordance with UrbanSattva's Cancellation and/or Return, Refund and Replacement Policy, then save and except as provided herein,  any offer, promotion, discount applied to such product shall be forfeited.
                          <br />n. We and/or the Supplier shall have no liability with respect to the offers, discounts and promotional offers on the Platform.
                        </ul>
                      </div>

                      <div className='mb-3'>
                        <strong>4. USE OF THE PLATFORM AND SERVICES</strong>

                        <ul>
                          4.1 Can User access and use the Platform at any time or could there be any limitations?
                          Company endeavours to make the Application available 24X7. However, the Company does not represent that access to the Application will be uninterrupted, timely, error free, free of viruses or other harmful components or that such defects will be corrected.
                          Users understand and acknowledge that the use of Application requires internet connectivity and telecommunication links. Users shall bear the costs incurred to access and use the Application and avail Services, and Company shall not, under any circumstances whatsoever, be responsible or liable for such costs.
                          Company does not warrant that Application will be compatible with all hardware and software which is used by Users.
                          Application may be under constant upgrades, and some functions and features may not be fully operational. Application is provided on an 'as is' and 'as available' basis. Company expressly disclaims all warranties of any kind, whether express or implied with respect to the records and other data that is made available by it to Users.
                          Users shall be solely responsible for damages to their data system or for loss of data arising from download of content from Application. No guidance or information, written or oral, obtained from Company or via Platform, shall constitute any warranty, unless stated otherwise.
                        </ul>
                        <ul>
                          4.2 Does the Company guarantee performance of the agreement or other arrangements inter se between User(s) or otherwise in respect of products on Platform?
                          Company, through Platform, is a mere facilitator of the transaction including between Supplier and User and is not responsible for any non-performance or breach of any contract entered into towards User Transactions. The Company cannot and does not guarantee that the concerned Suppliers will perform any transaction concluded on the Platform. The Company shall not and is not required to mediate or resolve any dispute or disagreement between the Users concerned including with any other third party.
                          The Company does not represent any of the Users or the Suppliers, and disclaims any liability with respect to any error or inconsistency with respect to any information relating to such Suppliers or Users displayed on the Platform.
                          The Company does not make any representation or warranty as to the item-specifics (such as legal title, creditworthiness, identity, etc.) of any of its Users. Company shall not be liable for any misuse of information shared by Users with it; or through the Users profile; or with a third party on the Platform, chat rooms, forums, or comments.
                          Users acknowledge and agree that the Company is not an arbitrator or judge of disputes concerning intellectual property and it cannot, by any means, verify that any Supplier or Reseller selling or supplying merchandise on/through the Platform have the right to sell the products. Company encourages Users to assist it in identifying listings on the Platform, which, according to the Users’ knowledge or belief infringe their rights or third-party rights.
                          Company does not at any point of time during any transaction between any Supplier and a User take possession of any product offered nor does it at any point gain title to or have any rights or claims over such products. At no time shall the Company hold any right, title or interest over the products, nor shall the Company have any obligations or liabilities in respect of such contract entered into between the Users. Company is not responsible for damages or delays as a result of products which are out of stock, unavailable or back ordered.
                        </ul>
                        <ul>
                          4.3 Whether the use of Platform (a) is restricted in any manner; and (b) requires any generic compliances from User?
                          User should not use the Platform to host, display, upload, download, modify, publish, transmit, update, or share any information which:
                          belongs to another person and to which the User does not have a right whatsoever;
                          is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, slanderous, criminally inciting or invasive of another’s privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatsoever; or unlawfully threatening or unlawfully harassing including but not limited to “indecent representation of women” within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986;
                          is patently offensive to the online community, such as sexually explicit content, or content that promotes obscenity, paedophilia, racism, bigotry, hatred or physical harm of any kind against any group or individual;
                          is harmful to a child or a minor;
                          harasses or advocates harassment of another person;

                          infringes upon or violates any third party’s rights including, but not limited to, intellectual property rights, rights of privacy (including without limitation unauthorized disclosure of a person’s name, email address, physical address or phone number) or rights of publicity;
                          promotes an illegal or unauthorized copy of another person’s copyrighted work, such as providing pirated computer programs or links to them, providing information to circumvent manufacture-installed copy-protect devices;
                          tries to gain unauthorized access or exceeds the scope of authorized access to the Application or to the profiles, blogs, communities, account information, or other areas of the Application or solicits passwords or personal identifying information for commercial or unlawful purposes from other Users;
                          interferes with another User’s use and enjoyment of the Platform or any third party users enjoyment of similar services;
                          refers to any website or URL that, in our sole discretion, contains material that is inappropriate for the Platform or any other website, contains content that would be prohibited or violates the spirit of these Terms;
                          violates any law for the time being in force;

                          XII.            deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact, including creation of a false identity for the purpose of misleading others;
                          impersonates another person;
                          threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, threatens public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or insulting other nations.
                          Contains software viruses or other computer programming routines that may damage, detrimentally interfere with, diminish value of, surreptitiously intercept or expropriate any system, data, or personal information; and
                          directly or indirectly, offers, attempts to offer, trades, or attempts to trade in any item, dealing of which is prohibited or restricted in any manner under the provisions of any applicable law, rule, regulation or guideline for the time being in force.
                          XVII.            is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity, or agency for financial gain or to cause any injury to any person.
                          When accessing or using the Platform or availing the Services, the User has to comply with and ensure the following:

                          All registration information submitted by User is truthful, lawful and accurate
                          User's use of the Application/Platform shall be solely for their use and they shall not authorize others to use their account
                          User does not submit, post, upload, distribute, or otherwise make available or transmit any information that: (i) is defamatory, abusive, harassing, insulting, threatening, or that could be deemed to be stalking or constitute an invasion of a right of privacy of another person; (ii) is bigoted, hateful, or racially or otherwise offensive; (iii) is violent, vulgar, obscene, pornographic or otherwise sexually explicit; (iv) is illegal or encourages or advocates illegal activity or the discussion of illegal activities with the intent to commit them
                          All necessary licenses, consents, permissions and rights are owned by Users and there is no need for any payment or permission or authorization required from any other party or entity to use, distribute or otherwise exploit in all manners permitted by the Agreement, all trademarks, copyrights, patents, trade secrets, privacy and publicity rights and/or other proprietary rights contained in any content that Users submit, post, upload, distribute or otherwise transmit or make available
                          User will not use Platform in any way that is unlawful, or harms the Company or any other person or entity
                          User will not post, submit, upload, distribute, or otherwise transmit or make available any software or other computer files that contain a virus or other harmful component, or otherwise impair or damage the Platform or any connected network, or otherwise interfere with any person or entity’s use or enjoyment of Application
                          User will not use another person’s username, password or other account information, or another person’s name, likeness, voice, image or photograph or impersonate any person or entity or misrepresent your identity or affiliation with any person or entity
                          User will not or attempt to delete or modify any content of Platform, including but not limited to, disclaimers or proprietary notices such as copyright or trademark symbols, logos
                          User will not post or contribute any information or data that may be obscene, indecent, pornographic, vulgar, profane, racist, sexist, discriminatory, offensive, derogatory, harmful, harassing, threatening, embarrassing, malicious, abusive, hateful, menacing, defamatory, untrue or political or contrary to our interest
                          User shall not access Platform without authority or use Platform in a manner that damages, interferes or disrupts, any part of Platform or any equipment or any network on which Platform is stored or any equipment of any third party
                          User shall not attempt to gain unauthorized access to any portion or feature of the Application, or any other systems or networks connected to the Platform by any means. User shall not probe, scan, or test the vulnerability of Platform nor breach the security or authentication measures on Platform or any network connected to Platform
                          User agrees not to use any device, software or routine to interfere or attempt to interfere with the proper working of Platform or any transaction being conducted on Platform, or with any other person’s use of Platform. User may not use Platform or any of its content for any purpose that is unlawful or prohibited by this Agreement
                          User shall at all times ensure full compliance with the applicable law, as amended from time to time, including that of (i) the Information Technology Act, 2000 and the rules thereunder; (ii) all applicable domestic laws, rules and regulations (including the provisions of any applicable exchange control laws or regulations in force); and (iii) international laws, foreign exchange laws, statutes, ordinances and regulations (including, but not limited to Direct and Indirect Taxes applicable as per current statue in the country) regarding the use of the Application and listing, purchase, solicitation of offers to purchase, and sale of products or Services. User shall not engage in any transaction which is prohibited by the provisions of any applicable law including exchange control laws or regulations for the time being in force
                          In order to allow Company to use the information supplied by the Users, without violating any rights or any laws, Users agree to grant Company a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sub-licensable (through multiple tiers) right to exercise the copyright, publicity, database rights or any other rights. Company will only use the information in accordance with this Agreement, applicable to use of Platform and for provision of Services
                          The User shall behave respectfully and in a civil manner to all the third parties (including delivery personnel) who shall come into contact with the User
                          Company shall at times and at their sole discretion reserve the right to disable any user identification code or password if any User has failed to comply with any of the provisions of this Agreement. Company shall have all the rights to take necessary action and claim damages that may occur due to User's involvement/participation in any way either on their own or through group/s of people, intentionally or unintentionally in hacking.

                        </ul>

                      </div>

                      <div className='mb-3'>
                        5. FAIR USAGE POLCY
                        We always strive hard to provide the best experience to our customers on the Platform. To ensure that all customers use our Platform in good faith, we keep track of customer behaviour which includes maintaining order history and other details relating to the manner of use of our Platform. In the event of any abuse of our Platform or the policies, which include excessive returns or refusal to accept shipments which are not otherwise wrong or defective, actions such as levying a service fee, discontinuing COD options, restraining or refusing the option to return products etc. may be undertaken to address such issues. Customers whose profiles indicate high volumes of valid transactions on the Platform may be offered benefits by suppliers, from time to time, based on their discretion and policies.
                        <br />
                      </div>

                      <div>
                        <strong>6. ACCURACY AND COMPLETENESS OF INFORMATION ON PLATFORM</strong>
                        <ul>
                          6.1 What is the accuracy and completeness of all information displayed on the Platform?
                          Company takes all endeavours to the best of its efforts to keep information on the Platform accurate. However, the material and content on the Platform is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or timely sources of information. Reference to paragraph 6.2 below, User will agree that a majority of content including products displayed on Platform are provided by the respective Suppliers, who shall at all times be responsible for provision of information related to such products listed by them. Apart from reasonable checks to ensure general hygiene of Platform, Company does not exercise any control over such content or information.
                          Company undertakes no obligation to update, amend or clarify information in the Platform, including without limitation, pricing information, except as required by law. Company does not own any responsibility or obligation whatsoever towards ensuring the accuracy of the information provided by the Users. Any reliance on the material on Platform is at the Users’ own risk.
                          Platform may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. The Company reserves the right to modify the contents of Platform at any time but has no obligation to update any information on Platform. User is solely responsible to monitor changes to the information on Platform. No specified update or refresh date applied to Platform should be taken to indicate that all information on Platform or pertaining to the Services have been modified or updated.
                          Occasionally there may be information on Platform that contains typographical errors, inaccuracies or omissions that may relate to information pertaining to the products, pricing, promotions, offers, shipping charges, transit times and availability. Company reserves the right to correct any errors, inaccuracies, or omissions, and to change or update information if any information on Platform is inaccurate at any time without prior notice.
                          The Information is provided ‘as is’ with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of the Information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose. Nothing contained in this Agreement shall to any extent substitute for the independent investigations and the sound technical and business judgment of User.
                        </ul>
                        <ul>
                          6.2 Is information related to products on Platform provided by the Company?
                          Not all information on the Platform is provided by Company. From time to time, Users who are Suppliers provide information relating to the products proposed to be sold by them and are hence responsible for the same. In this connection, Suppliers undertake that all such information shall be accurate in all respects. Suppliers are discouraged from and should not exaggerate or overemphasise the attributes of such products so as to mislead Users in any manner.
                          Company reserves the right, but has no obligation, to monitor the materials posted on Platform. Company, however, has the right to remove or edit any content that in its sole discretion violates, or is alleged to violate, any applicable law or the spirit of these Terms. In no event shall Company assume any responsibility or liability for any content posted or for any claims, damages or losses resulting from use of content and/or appearance of content on Platform.
                          Suppliers take sole responsibility for the correctness of the details pertaining to specifics (such as quality, value, saleability, etc.) of the products proposed to be sold or offered to be sold or purchased on Platform. Company does not implicitly or explicitly support or endorse the sale or purchase of any products nor provide any warrantee/guarantee of the products sold to Users, and in no event shall such products be the responsibility of Company. Company does not represent or warrant that the information available on Platform will be correct, accurate or otherwise reliable.
                          Company is not responsible for any inaccuracy, incompleteness or outdated information made available on the Application, either provided by any User including Suppliers.
                        </ul>
                      </div>

                      <div>
                        <strong>7. LISTING AND SELLING</strong>
                        <ul>
                          7.1 As Supplier, in addition to this Agreement, what other terms is a User required to abide by?
                          Suppliers, in addition to this Agreement are also bound by applicable laws of India, including without limitation, the following laws:
                          The Legal Metrology Act, 2009 and Legal Metrology (Packaged Commodities) Rules, 2011 (Packaging Rules);
                          Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945 (D&C Rules);
                          The Consumer Protection (E-Commerce) Rules, 2020;
                          Food Safety and standard Act, 2006, Food Safety and Standard (Packaging and labelling) Regulation 2011, (FSS Packaging Regulation) Food Safety and Standard (Food Product Standard and Food Addictive) Regulation, 2011 (FSS Standard Regulations) and Food Safety and Standard (food or Health Supplements, Nutraceuticals, Food for Special Medical Purpose, Functional Food and Novel Food) Regulation 2016 (FSS Supplement Regulation).
                          As per above mentioned statutes and regulations and any other relevant law in place during the tenure of this association, Company understands that there is an obligation on Supplier to ensure that the package in which the products are sold complies with labelling and packing requirements and other laws that may be prescribed in this regard. Hence, it shall be the sole responsibility of Supplier to comply with applicable laws and the Company shall not be held responsible in any manner. Suppliers shall indemnify Company and Platform for any harm or loss in relation to contravention of above regulations or other applicable laws.
                        </ul>
                        <ul>
                          7.2 When can the Suppliers get their products listed?
                          Suppliers are permitted to list products for sale on the Application in accordance with the terms mentioned in this Agreement and any other contract entered into with Company for the said purpose, wherein other rights and obligations of the parties are defined in detail.
                          By listing its products on the Platform, the Suppliers represent and warrant that they are legally capable to sell or list the products on Platform; and the listed items do not infringe upon the intellectual property, trade secret or other proprietary rights or rights of publicity or privacy rights of any third party. Suppliers and Users agree that the Company is not responsible for the breach of the same.
                        </ul>
                      </div>

                      <div>
                        <strong>8. USER INFORMATION AND THIRD-PARTY TOOLS/LINKS</strong>
                        <ul>
                          8.1 What information is collected from the User? How does Company deal with the information provided to it by a User while using Platform?
                          Company collects various types of information, some information is non-personal information and some is personal information.
                          All information about Users that are collected, stored, or transmitted in any way on Platform is processed for facilitating various operations on Platform, including registration, order placement, listing, or payments.
                          For a more comprehensive understanding, Users are encouraged to view the Platform’s Privacy Policy available on the Platform.
                        </ul>
                        <ul>
                          8.2 Does the Company use Third Party tools on Platform?
                          The Company may provide User with access to third-party tools over the Platform which Company neither monitors nor has any control over. User acknowledges and agrees that access to such tools is on an 'as is' and 'as available' basis, without any warranties, representations or conditions of any kind and without any endorsement by Company. Company shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
                          Any use by the User of the optional tools offered through the Application/Platform is entirely at its own risk and discretion and it is the responsibility of User that it ensures that it is familiar with and approves the terms on which such tools are provided by the relevant third-party provider(s).
                          The Company may from time to time, offer new features through Platform which may include the use new third-party tools and resources. Such new features shall also be subject to this Agreement. Complaints, claims, concerns, or questions regarding third-party tools or third-party websites should be directed to the third-party.
                        </ul>
                        <ul>
                          8.3 Does Company use third-party links or third-party tools on Platform? Are these links and tools accurate and secure?
                          Certain content or products available via the Platform may include materials from third parties. Third-party links on the Application/Platform may direct User to third-party websites that are not affiliated with the Company. The Company is not responsible for examining or evaluating the content or accuracy and does not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third parties.
                          Company is not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites regardless of the existence of any third-party link on Platform. Please review carefully such third-party’s policies and practices and make sure to understand them before engaging in any transactions.
                        </ul>
                      </div>

                      <div>
                        <strong>9. INTELLECTUAL PROPERTY (IP) AND IP INFRINGEMENT</strong>
                        <ul>
                          9.1 Can User use the content published on Platform such as "UrbanSattva" mark when doing business with other parties?
                          Users may not use any trademark, service mark or logo of any independent third parties without prior written approval from such parties.
                          "UrbanSattva" and related icons and logos whether registered or unregistered are the trademarks of the Company and are protected under applicable copyright, trademark and other proprietary and intellectual property laws. Users’ unauthorized adoption, copying, modification, use or publication of these marks is strictly prohibited.
                          Users must not modify the paper or digital copies of any materials printed or downloaded in any way, and they must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.
                          Users must not use any part of the materials on Platform for commercial purposes without obtaining a licence to do so from Company. All rights, not otherwise claimed under this Agreement by Company are hereby reserved.
                          User understands that Platform and software embodied within Platform may include security components that permit digital materials to be protected, and that use of these materials is subject to usage rules set by Company or other parties that facilitate the same. User agrees that it will not attempt to override, disable, circumvent, or otherwise interfere with any such security components and usage rules embedded in the Platform.
                        </ul>
                        <ul>
                          9.2 How does the Company deal with IP infringement?
                          Any trademark, word mark or intellectual property of any User(s) or Supplier(s) belongs to such User(s)/Supplier(s) alone, and Company has no right or claim over the same.
                          Company reserves the right in its sole discretion to remove any material/content/photos/offers displayed on the Platform which in Company’s reasonable belief is unlawful or could subject Company to liability or is in violation of this Agreement or is otherwise found inappropriate in the Company’s opinion. Company reserves the right to cooperate with any investigation in this regard.
                          Company reserves the right to suspend or terminate the account of a User as deemed appropriate by it. Users agree that the Company shall have no liability to any Users, including liability in respect of consequential or any other damages, in the event Company takes any of the actions pursuant to allegations of IP infringement.
                          Users acknowledge and agree that Company is not an arbitrator or judge of disputes concerning intellectual property and it cannot, by any means, verify that any Supplier selling or supplying merchandise on the Platform has the right to sell the products. Company encourages Users to assist it in identifying listings on the Platform, which, according to Users’ knowledge or belief infringe their rights or third-party rights.
                          The delisting of product from Platform is to safeguard Company’s interest, by taking down a listing, Company does not and cannot be deemed to be endorsing a claim of infringement and further in those instances in which Company declines to take down a listing, Company does not and cannot be deemed to be endorsing that the listing is not infringing of third party rights or endorsing any sale or supply of merchandise or services pursuant to or on account of such listing.
                          We request you to review the Intellectual Property Policy available on the Application for more information.
                        </ul>
                      </div>

                      <div><strong>10. DISCLAIMER AND LIABILITIES</strong>
                        <ul>
                          10.1 What are the standard disclaimers in relation to the Platform and the Services?
                          Company, in no event, is or will be liable to User including the Reseller or anyone claiming through a User in respect of product or other User Transaction under contract, negligence, strict liability or other legal or equitable theory for any special, incidental, indirect, consequential, exemplary or punitive damages, loss of goodwill, loss of revenue, loss of opportunity, loss of anticipated profits, whatsoever, including those resulting from loss of use, data or profits, whether or not foreseeable or whether or not Company has been advised of the possibility of such damages, or based on any theory of liability, including breach of contract or warranty or negligence or any other claim arising out of or in connection with the use of or access of Platform.
                          Company shall not be liable for: any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation any financial losses, loss of data, replacement costs, or any similar damages, whether based in contract, tort, strict liability or otherwise, arising from the use of Platform, or for any other claim related in any way to the use of the Application, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the Application/Platform or any content posted, transmitted, or otherwise made available via the Application/Platform, even if advised of their possibility.
                          Users shall be solely responsible for damages, if any, to their data system or for loss of data arising from download of content from Platform. No guidance or information, written or oral, obtained from Company or via the Platform, shall constitute any warranty, unless stated otherwise.
                          The Suppliers listing their products on the Platform are solely responsible for the accuracy of product information. Users shall solely be responsible for using the products in a safe and legal manner. The Company shall not assume any loss, claims, damages, or injury, that may arise from the violent or illegal use, or misuse of the product sold by the Suppliers over Platform.
                        </ul>
                        <ul>
                          10.2 What are the disclaimers regarding advertisements (including any information or offer thereunder) contained on, distributed through, or linked, downloaded, or accessed from Platform (“Advertisements”)?
                          a.   Advertisements in Platform are intended, solely to provide general information for the personal use of the User(s). The Company does not represent, warrant, or endorse in any manner the accuracy or reliability of the Advertisements. The Company accepts no responsibility or liability in relation to the Advertisements including without limitation on account of your use or reliance placed by you on such Subject Information.
                          b. The Advertisements on the Platform are advertised/displayed at the behest of the advertisers. The Company does not by itself create such content and neither does it exercise any control over the content that is displayed by the advertisers. The advertisers are third parties over which UrbanSattva does not have any direct or indirect control. The Company does not make any representation, warranty, recommendation, guarantee in respect of the content of the Advertisements as well as its subject matter and the products/services being advertised (including without limitation with respect to suitability, merchantability, reliability, availability or quality of the product/service) nor does the Company implicitly or explicitly support or endorse the sale or purchase of any products/services which are subject matter of the advertisements or are referred therein. The Company accepts no liability for any error, inaccuracy or omission of third parties and advertisers in this regard.
                          c. The correspondence or business dealings of Users with, or participation in promotions of, advertisers found on or through the Platform, including payment and delivery of related products or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between the User and such advertiser. The Company shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers on the Platform.
                          d. In the event, a link is displayed on the Advertisement and if you select to click on a link which leaves Platform, you will be redirected to a third-party website that is not owned, operated, or controlled by the Company or its affiliates. The link is provided solely for the convenience of the User and may assist the User in locating other useful information on the internet. The third-party website is governed exclusively by its respective policies over which we have no control. You bear the sole risk in proceeding to access the contents, products/services of the third-party website and links provided therein.
                          e.      The User shall not hold the Company responsible and the Company disclaims any liabilities, losses, damages, expenses, claims or injury arising out of or in connection with: (i) the advertisements displayed on Platform; (ii) contents of the Advertisement; (iii) representations and statements made by the advertiser; (iv) subject matter of the Advertisements and the products/services referred thereunder (including without limitation on account of suitability, merchantability, reliability, availability or quality of the product/service); and/or (v) Advertisement being misleading and/or not in compliance with applicable laws.
                        </ul>
                        <ul>
                          10.3 What are the disclaimers regarding advertisements (including any information or offer thereunder) of products listed on the Platform and shown on other media and forums (including print media, digital platforms etc.,) (“Other  Advertisements”)?
                          The images of the products shown in Other Advertisements are for illustrative purposes and creative representation only and  may vary from the actual products.
                          Unless otherwise mentioned, all the product related deals/discounts mentioned in Other Advertisements are offered by the participating sellers/brands to the total exclusion of the Company.
                          All Other Advertisements with details of starting prices for a product category are for reference only and the actual price of the product may vary.
                          The scenes, characters, references in brand films and videos are purely fictional and only for representational purposes.
                          The offers, discounts and other promotional offers displayed in Other Advertisements may vary for the customers based on factors relating to the customer such as usage of the platform, volume of transactions, time spent on the platform, city, place of residence, time, etc.
                          UrbanSattva and/or the Suppliers reserves the right to amend or discontinue any of the offers/deals/discounts at their sole discretion and without any prior intimation to any User.
                          UrbanSattva accepts no responsibility or liability for any inaccuracies in the data displayed in the Other advertisements. In respect to any data displayed in relation to the products sold on UrbanSattva, please note that this number may not be the most recent number and may be aggregated over a period of time.
                        </ul>
                        <ul>
                          10.4 What happens to User order in case of a lockdown or other force majeure event?
                          Company shall not be liable for any damages whatsoever arising out of force majeure or other similar circumstances, directly or indirectly affecting Company and/or the Platform. Examples of force majeure events include without limitation real or potential labour disputes, governmental actions, war or threat of war, sabotage, civil unrest, demonstrations, fire, storm, flooding, explosion, earthquake, epidemic or pandemic, provisions or limitations of materials or resources, inability to obtain the relevant authorization, accident, and defect in electricity or telecommunication network.
                          Force majeure or other events beyond the Company’s control, hindrance, delay or complication in the maintenance of the Platform entitles the Company to suspend or limit the Platform until further notice.
                        </ul>
                        <ul>
                          10.5 Under what circumstances may User be liable for any damages to Company?
                          User shall indemnify, defend, and hold harmless Company and its subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, from and against any and all losses, liabilities, claims, suits, proceedings, penalties, interests, damages, demands, costs, and expenses (including legal and statutory fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by Company that arise out of, result from, or in connection with:
                          User’s breach of this Agreement;
                          any claims made by any third party due to, or arising out of, or in connection with User’s use of Platform including by end users/consumers of Reseller(s);
                          the User’s violation of any rights of another, including intellectual property rights; and/or
                          the User’s violation of any applicable laws.
                        </ul>
                      </div>

                      <div>
                        <strong>11. COMMUNICATION</strong>

                        <ul>
                          11.1 How to contact Company in case of any queries regarding this Agreement or grievances relating to Platform?
                          a.      All queries, concerns or questions about the Agreement should be sent to Company at legalsupport@UrbanSattva.com. Lopamudra Rao is the designated Grievance Officer in respect of this Agreement. Any complaints or concerns with regard to the Platform or any breach of this Agreement can be directed to the designated Grievance Officer in writing at the following address: 06-105-B, 06-102, (138 WU), Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur Village Varthur Hobli, Bengaluru, Karnataka – 560103.
                        </ul>
                        <ul>
                          11.2     Consumer Protection Compliance
                          In accordance with the Consumer Protection (E-Commerce) Rules, 2020, please find the required details:

                          Legal name of the e-commerce entity: Fashnear Technologies Private Limited
                          Address: skill work it solutions - 2nd floor, near The Alley Drive In, Madhapur, Telangana – 500081
                          Website: https://www.UrbanSattva.com/
                          Email Address: query@UrbanSattva.com
                        </ul>

                        <ul>
                          11.3 How will the Company contact User?
                          All notices or demands to or upon a User(s) shall be effective if either delivered personally, sent by courier, certified mail, by facsimile or email to the last-known correspondence, fax or email address provided by User(s) on the Platform, or by posting such notice or demand on an area of the Platform that is publicly accessible.
                          Notice to a User(s) shall be deemed to be received by such User(s) when sent at the address, email or other communication details provided by such User at the time of registration, whether in physical or electronic form or immediately upon publishing of such notice on an area of the Platform that is publicly accessible.
                        </ul>
                        <ul>
                          11.4 In case of a call from a person asking for access to User account registered with Company, what should User do?
                          Company urges the Users to beware of fake offers and fraudulent callers/messengers who may impersonate themselves as representatives of the Company. The Company’s authorised representatives will never contact the Users to demand money for prizes or ask for password/PIN/CVV. In the event you are asked for confidential details by anyone posing as the Company’s representatives, please ask them to communicate with you through email and only respond to emails from UrbanSattva.com domain. Please see our Anti Phishing communication available on the Platform.
                        </ul>
                        <ul>
                          11.5 Can User disclose its communication through calls with the Company to third parties?
                          a.    All calls to the Company are completely confidential. However, the Users’ calls may be recorded to ensure quality of service. Further, for training purpose and to ensure excellent customer service, calls from the Company may be monitored and recorded.
                        </ul>
                      </div>
                      <div>
                        <strong>12. MISCELLANEOUS PROVISIONS APPLICABLE TO AGREEMENT</strong>
                        <ul>
                          12.1 This Agreement is governed by the laws of India. Any action, suit, or other legal proceeding, which is commenced to resolve any matter arising under or relating to this Agreement or the Platform shall be subject to the jurisdiction of the courts at Bangalore, India.
                        </ul>
                        <ul>
                          12.2  Company shall have the right to assign its obligations and duties in this Agreement to any person or entity.
                        </ul>
                        <ul>
                          12.3   The failure of Company to exercise or enforce any right or provision of this Agreement   shall not constitute a waiver of such right or provision.
                        </ul>
                        <ul>
                          12.4   Platform is controlled and operated from India and Company makes no representation that the content, information or materials made available herein are appropriate or will be available for use in other locations. Access and use of this Platform from outside India is entirely at User's sole risk and User agrees and undertakes to be responsible for compliance with all applicable local laws and agrees to release, discharge and absolve Company from any liability or loss in this respect.
                        </ul>
                        <ul>
                          12.5 Company reserves the right to introduce and initiate new features, functionalities and components to Platform and/or change, alter, modify, suspend, discontinue or remove the existing ones without any prior notice to you. Further, Company is entitled to discontinue (either permanently or temporarily) one or more of the Services provided or terminate the Platform or charge for Service which were early free of cost, without any prior notice to User.
                        </ul>
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

export default TermsAndCondition
