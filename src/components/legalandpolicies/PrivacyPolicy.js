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

class PrivacyPolicy extends Component {
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
                      <h3 className='sub-title'>Privacy Policy</h3>
                    </div>
                  </div>
                  <div className='card-body ps-5'>
                    <div className='row justify-content-between'>



                      <div className='mb-3 text-center'>Privacy Policy</div>
                      <div className='m-3'>Last Updated as of 23rd  February 2023.</div>

                      The Urbansattva application and website (“Platform”) are made available to you by Fashnear Technologies Private Limited and/or its affiliates (hereinafter may be referred to as the “Company”, “we”, “us”, and “our”) respect your privacy and is committed to protecting it through its compliance with its privacy policy. This policy amongst other things describes: (i) the type of information that the Company may collect from you when you access or use its websites, applications and other online services (hereinafter collectively referred to as the “Services”); and (ii) the Company’s practices for collecting, using, maintaining, protecting and disclosing that information.<br />
                      We encourage you to read this policy carefully to understand the Company's policies and practices regarding your information. By accessing or using its Services or its Platform, registering an account with the Company, becoming a supplier, reseller or customer on the Platform, or by attempting to become a supplier, reseller or customer, you expressly agree to be bound by the terms and conditions of this privacy policy and you are consenting to the Company's collection, use, disclosure and retention of your personal information as described here.<br />
                      This policy may change from time to time, your continued use of the Company's Services after it makes any change is deemed to be acceptance of those changes, so please check the policy periodically for updates. <br />
                      <div><strong>1. Applicability of the Policy</strong>
                      <ul>1.1.This policy applies only to the information the Company collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.</ul>
                      <ul>1.2.This Policy does not apply to the information that you provide to, or that is collected by, any third-party, that you use in connection with its services. The Company encourages you to consult directly with such third parties about their privacy practices.</ul>
                      </div>
                      <div className='mt-3'><strong >2. Collection of the information</strong>
                      <div >
                        2.1. Some of our Services may be used without revealing any personal information, and for other Services, personal information is required. We may also collect ‘Non-Personal Information’ (i.e., information that cannot be used to identify you). Non-Personal Information includes information like the web pages that you have viewed. In order to access certain features and benefits on our Services, you may need to submit ‘Personally Identifiable Information’ i.e., information that can be used to identify you (as described below). Inaccurate information may affect your ability to use the Services, the information you receive when using the Services, and our ability to contact you. For example, your email address and contact number should be kept valid because these may be the primary channels through which we communicate with you. You are responsible for ensuring the accuracy of the Personally Identifiable Information you submit to the Company.
                        <br />2.2. The Company collects several types of information from and about users of our Services, including: (i) Your Personally Identifiable Information- Personally Identifiable Information is the information that can be associated with a specific person and could be used to identify that specific person whether from that data, or from the data and other information that we have, or is likely to have access to. We do not consider Personally Identifiable Information to include information that has been made anonymous or aggregated so that it can no longer be used to identify a specific person, whether in combination with other information or otherwise. Personally Identifiable Information can include, but not be limited to, information such as your name, email address, contact number (cellular and landline), educational qualification(s), occupation, date of birth, marital status, monthly income, city and state of residence, marital status, number of children, employer details,  Aadhaar number, PAN, social security and tax identification numbers, and post-qualification or work experience among other things; and/or (ii) Information about your internet connection, the equipment you use to access our Services and your usage details.
                        <br />2.3. We may collect this information either (i) directly from you when you provide it to us; (ii) automatically as you navigate through our Services (information collected automatically may include usage details, IP addresses and information collected through cookies, web beacons and other tracking technologies); and/or (iii) from any other source of information including from other third party sources, such as updated delivery and address information from our carriers, which we use to correct our records and deliver your next purchase more easily.
                        <br />2.4. Information you provide to us.
                        <br />2.4.1. Your account information: Your full name, email address, postal code, password and other information you may provide with your account, such as your gender, mobile phone number and website. Your profile picture (if any) that will be publicly displayed as part of your account profile. You may optionally provide us with this information through third-party sign-in services such as Facebook and Google Plus. In such cases, we fetch and store whatever information is made available to us by you through these sign-in services.
                        <br />2.4.2. Your preferences: Your preferences and settings such as time zone and language.
                        <br />2.4.3. Your content: Information you provide through our Services, including your reviews, photographs, comments, lists, followers, the users you follow, ordering details and history, favourite categories, special requests, contact information of people you add to, or notify of, your orders through our Services, names, and other information you provide on our Services, and other information in your account profile.
                        <br />2.4.4. Your searches and other activities: The search terms you have looked up and results you selected.
                        <br />2.4.5. Your browsing information: How long you used our Services and which features you used; the ads you clicked on.
                        <br />2.4.6. Your communications: Communications between you and other users or suppliers through our Services; your participation in a survey, poll, sweepstakes, contest or promotion scheme; your request for certain features (e.g., newsletters, updates or other products); your communication with us about employment opportunities posted to the Services.
                        <br />2.4.7. Your transactional information: If you make use of our Services, we may collect and store information about you to process your requests and automatically complete forms for future transactions, including (but not limited to) your name, phone number, gender, transaction details, PAN number, device type, Platform usage details, address, email, billing information and credit or payment card information or other payment related details. This information may be shared with third parties which assist in processing and fulfilling your requests, including PCI compliant payment gateway processors and credit information companies. If you write reviews about businesses with which you conduct transactions through our Services, we may publicly display information that you transacted with those businesses.
                        <br />2.4.8. Your Public Posts: You also may provide information (such as ratings, reviews, tips, photos, comments, likes, bookmarks, friends, lists, etc.) to be published or displayed (hereinafter, “posted”) on publicly accessible areas of our Services or transmitted to other users of our Services or third parties (hereinafter collectively referred to as “User Contributions”). Your User Contributions are posted on and transmitted to others at your own risk. Please be aware that no security measures are perfect or impenetrable (see the "Security" section below). Additionally, we cannot control the actions of other users of our Services with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons. We may display this information on the Services, share it with businesses, and further distribute it to a wider audience through third party sites and services. You should be careful about revealing any sensitive details about yourself in such postings.
                        <br />2.4.9. We use the information you provide to us to analyse and enhance the functionality and improve the quality of our Services, and to personalize your experience while using our Services. We also use this information to display relevant advertising, provide services to you, provide support to you, communicate with you, and comply with our legal obligations.
                        <br />2.5.    Information we may automatically collect include but may not be limited to the following.
                        <br />2.5.1. We may automatically collect certain information about the computer or devices (including mobile devices) you use to access the Services, and about your use of the Services, even if you use the Services without registering or logging in.
                        <br />2.5.2. Usage information: Details of your use of our Services, including traffic data, location data, logs and other communication data and the resources that you access and use on or through our Services.
                        <br />2.5.3. Computer and device information: Information about your computer, Internet connection and mobile device, including your IP address, operating systems, platforms, browser type, other browsing information (connection, speed, connection type etc.), device type, device's unique device identifier, mobile network information and the device's telephone number.
                        <br />2.5.4. Stored information and files: Our Services also may access metadata and other information associated with other files stored on your mobile device. This may include, for example, photographs, audio and video clips, personal contacts and address book information.
                        <br />2.5.5. Location information: Our applications collect real-time information about the location of your device, as permitted by you.
                        <br />2.5.6. Last URL visited: The URL of the last web page you visited before visiting our websites.
                        <br />2.5.7. Mobile device IDs: Unique mobile device identifier (e.g. IDFA, GAID or other device IDs on Apple devices like the iPhone and iPad), if you're using our Services on a mobile device, we may use mobile device IDs (the unique identifier assigned to a device by the manufacturer), instead of cookies, to recognize you. We may do this to store your preferences and track your use of our applications. Unlike cookies, mobile device IDs cannot be deleted. Advertising companies may use device IDs to track your use of our applications, track the number of advertisements displayed, measure advertising performance and display advertisements that are more relevant to you. Analytics companies may use mobile device IDs to track your usage of our applications.
                        <br />2.5.8. Your preferences: Your preferences and settings such as time zone and language.
                        <br />2.5.9. Your activity on the Services: Information about your activity on the Services, such as your search queries, comments, domain names, search results selected, number of clicks, pages viewed and the order of those pages, how long you visited our Services, the date and time you used the Services, error logs, and other similar information.
                        <br />2.5.10. Mobile status: For mobile application users, the online or offline status of your application.
                        <br />2.5.11. Applications: If you use the Company’s application, the Company may collect information about the presence and/ or absence and/or details pertaining to other applications on your mobile phone. The applications we gather information for, may vary across categories including, without limitation, shopping, fashion, food and travel. This will help us understand you and your preferences better and enable the Company to provide you with a personalized experience. We may collect, process and store your user ID associated with any social media account (such as your Facebook and Google account) that you use to sign into the Services or connect with or use with the Services. Please see your social media provider's privacy policy and help center for more information about how they share information when you choose to connect your account.
                        <br />2.6 You may withdraw the consent provided to us to collect and use your personal information by writing to the designated Grievance Officer as provided in Section 14 of this Privacy Policy. However, in case of withdrawal of such consent, we may not undertake the activities for which the information was sought.
                      </div>
                      </div>
                      <div className='mt-3'><strong>3. Use of the information</strong><br />
                        We use the information we collect from and about you for a variety of purposes, including:
                        <ul>
                          3.1. For purchase and delivery of products and services. We use your personal information to take, handle and fulfil orders, deliver products and services, process payments, and communicate with you about orders, products and services, and promotional offers.
                        </ul>
                        <ul>
                          3.2. To provide, troubleshoot, and improve the Services. We use your personal information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Services.
                        </ul>
                        <ul>
                          3.3. For recommendations and personalization. We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with the Services. We may also share your preferences, or the Services availed by you with your network followers on the Company for marketing and other promotional activities of our Services
                        </ul>
                        <ul>
                          3.4. To comply with legal obligations. In certain cases, we collect and use your personal information to comply with laws. For instance, we collect from sellers, information regarding place of establishment and bank account information for identity verification and other purposes.
                        </ul>
                        <ul>
                          3.5. To Communicate with you. We use your personal information to communicate with you in relation to the Services via different channels (e.g., by phone, e-mail, chat).
                        </ul>
                        <ul>
                          3.6. For advertising. We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads.
                        </ul>
                        <ul>
                          3.7. For Fraud Prevention and Credit Risks. We use personal information to prevent and detect possibility of non-payment, fraud, and abuse in order to protect the security of our users, the Company, and others. We may also, directly or through a third party (including CICs), use scoring methods to assess and manage credit risks, including by way of sharing the result of said scoring methods with relevant third parties, payment gateways, financial institutions.
                        </ul>
                        <ul>
                          3.8. To administer contests and sweepstakes.
                        </ul>
                        <ul>
                          3.9. To carry out Company’s obligations and enforcing rights arising from any contracts entered into between you and the Company, including for billing and collection.
                        </ul>
                        <ul>
                          3.10. Research. Generating and reviewing reports and data, and to conduct research on the Company’s user base and service usage patterns. To conduct research following internal review protocols to ensure the balancing of privacy and to use anonymized data for research. Use for internal purposes such as auditing. understand our users (what they do on our Services, what features they like, how they use them, etc.), improve the content and features of our Services (such as by personalizing content to your interests), process and complete your transactions, and make special offers
                        </ul>
                        <ul>
                          3.11. To fulfil any other purpose for which you provide us the information and/or for any other purpose with your consent.
                        </ul>
                        <ul>
                          3.12 To check your eligibility for certain products/services including but not limited to credit and payment products and provide access to the services being offered by us, our affiliates, banks, financial institutions or our lending partners.
                        </ul>
                      </div>
                      <div>
                        <strong>4. Sharing of the information</strong>
                        <ul> 4.1. We may disclose personal information that we collect, or you provide, as described in this privacy policy, in the following ways:
                        </ul>
                        <ul> 4.1.1. General Information Disclosures
                        </ul>
                        <ul> a. To our holding companies, subsidiaries and affiliates, which are entities under common ownership or control of the Company.
                        </ul>
                        <ul> b. To contractors, advertisers/service providers, credit information agencies, analytics and research partners, other banks or financial institutions, insurers or intermediaries and other third parties whom we use to support our business (e.g. logistics and delivery, to collect payments), or to improve your experience on our platform and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.
                        </ul>
                        <ul> c. To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of the Company's assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by the Company about the users of our Services are among the assets transferred.
                        </ul>
                        <ul> d. To third parties to market their products or services to you which we feel may be of interest or beneficial to you.                                                                                                                                   We contractually require these thirdparties to keep personal information confidential and use it only for the purposes for which we disclose it to them.
                        </ul>
                        <ul> 4.1.2. To fulfil the purpose for which you provide it.
                        </ul>
                        <ul> 4.1.3. For any other purpose disclosed by us when you provide the information.
                        </ul>
                        <ul> 4.2. Service Providers. We may share your information with outside vendors that we use for a variety of purposes, such as to send you communications via emails, messages or tele-call to inform you about the services and/or products  that may be of interest to you, push notifications to your mobile device on our behalf, provide voice recognition services to process your spoken queries and questions, help us analyze use of our Services, process and collect payments, help us diversify the payment processing and collection methods available, and offer you special offers and services where available. Some of our products, services and databases are hosted by third party hosting services providers. We also may use vendors for other projects, such as conducting surveys, organizing sweepstakes for us, advertising, marketing and advertisement measuring purposes. We may share information about you with these vendors only to enable them to perform their services.
                        </ul>
                        <ul> 4.3. Credit Analysis. You hereby authorize and expressly consent for us to share your personal information with third parties, which may include Credit Information Companies ("CIC") to do an aggregate check of your credit profile for trying to make a wider variety of payment options available for you, some of which options may depend on the result of your credit analysis. Your credit score and/or credit information report (together “Credit Information”) will be obtained on your behalf, through a 'soft enquiry’ from the relevant CIC and we have no control over the content or accuracy of information provided in your Credit Information by CIC. We get this information from CICs for and on your behalf only when you agree to appoint us as your lawfully appointed authorized agent/representative for collecting your Credit Information from CICs. By consenting to use and avail your credit information report through us, you agree that we and the CICs shall be entitled to rely on your authorization and consent granted by you to us. You also consent to the sharing of your Credit Information with third parties by the CIC or us, for the purpose of checking your eligibility to avail of additional payment options and/or any other special offers.
                        </ul>
                        <ul>
                          4.4  Legal Purposes. We may share your information when we believe in good faith that such sharing is reasonably necessary in order to investigate, prevent, or take action regarding possible illegal activities or to comply with legal process. We may also share your information to investigate and address threats or potential threats to the physical safety of any person, to investigate and address violations of this Privacy Policy or the Company’s Terms of Service, or to investigate and address violations of the rights of third parties and/or to protect the rights, property and safety of the Company, our employees, users, or the public. This may involve the sharing of your information with law enforcement, government agencies, courts, and/or other organizations on account of legal requests such as subpoena, court order or government demand to comply with the law.
                        </ul>
                        <ul>
                          4.4. Social Networks. If you interact with social media features on our Services, such as the Facebook Like button, or use your social media credentials to log-in or post content, these features may collect information about your use of the Services, as well as post information about your activities on the social media service. Your interactions with social media companies are governed by their privacy policies.
                        </ul>
                        <ul>
                          4.5. To enforce or apply our Terms of Use available at https://urbansattva.com/terms-conditions and other agreements, including for billing and collection purposes.
                        </ul>
                        <ul>
                          4.6. If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our users or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction of the Company, our users, our service providers, our payment processing partners etc.
                        </ul>
                        <ul>
                          4.7. Consent. We may share your information in any other circumstances where we have your consent.
                        </ul>
                      </div>
                      <div>
                        <strong>5.    Third Party links and services</strong>
                        <ul> 5.1.  The Services may contain links to third-party websites. Your use of these features may result in the collection, processing or sharing of information about you, depending on the feature. Please be aware that we are not responsible for the content or privacy practices of other websites or services which may be linked on the Company’s Services. We do not endorse or make any representations about third-party websites or services. Our Privacy Policy does not cover the information you choose to provide to or that is collected by these third parties. We strongly encourage you to read such third parties' privacy policies.</ul>
                      </div>
                      <div>
                        <strong>6.    Anonymous or de-identified data</strong>
                        <ul>6.1.  We may anonymize and/or de-identify information collected from you through the Services or via other means, including via the use of third-party web analytic tools as described below. As a result, our use and disclosure of aggregated and/or de-identified information is not restricted by this Privacy Policy, and it may be used and disclosed to others without limitation.</ul>
                      </div>

                      <div>
                        <strong>7.    Cookies</strong>
                        <ul>
                          7.1.  Cookies are alphanumeric identifiers with a small amount of data that is stored on the user’s device hard-drive containing information about the user, commonly used as an anonymous unique identifier. We may offer certain features only through ‘cookies’ and may also collect information about you using these cookies. Please note, a cookie in no way gives the Company access to your device. Other websites may place their own cookies or other files on your device, collect data or solicit personal information from you, for which the Company shall not be held responsible or liable. We encourage you to read the privacy policies of all external sites. We also use cookies from third party partners for marketing and promotional purposes. Please note that most web browsers are set to accept cookies by default.
                        </ul>
                        <ul>
                          7.2.  We strive to provide you with choices regarding the personal information you provide to us.
                        </ul>
                      </div>

                      <div>
                        <strong>8.    Security Precautions</strong>
                        <ul> 8.1.  We ensure to maintain reasonable physical, electronic, and managerial procedures to safeguard and help prevent unauthorized access to your information and to maintain data security. These safeguards take into account the sensitivity of the information that we collect, process and store and the current state of technology. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. The access to the Services is offered through the use of a secure server and adhere to our security guidelines to protect it against unauthorized access. However, by using the Services, the users accept the inherent security implications of data transmission over the internet and the World Wide Web which cannot always be guaranteed as completely secure, and therefore, there would always remain certain inherent risks regarding use of the Services.
                        </ul>
                        <ul>
                          8.2.  We assume no liability or responsibility for disclosure of your information due to errors in transmission, unauthorized third-party access, or other causes beyond our control. You play an important role in keeping your personal information secure. You should not share your username, password, or other security information for your account with anyone. If we receive instructions using your username and password, we will consider that you have authorized the instructions for such use.
                        </ul>
                      </div>

                      <div>
                        <strong>9.    Permissible Age</strong>
                        <ul>
                          9.1.  The Services are not intended for users under the age of 18 (eighteen), unless permitted under applicable local laws (Permissible Age). We do not knowingly collect any personal information from users or market to or solicit information from anyone under the age of 18 and use of our Services is available only to persons who can form a legally binding contract under the Indian Contract Act, 1872.
                        </ul>
                        <ul>
                          9.2.  If you are under the age of 18 years then you must use the Services under the supervision of your parent, or legal guardian. If we become aware that a person submitting personal information is under the age of 18 years, we will delete the account and any related information as soon as possible.
                        </ul>
                      </div>
                      <div>
                        <strong>10.   Data Retention</strong>
                        <ul>
                          10.1. A user can close an account by visiting the profile settings page on our website. A user may request for deletion of its personal information by raising a request with the Grievance Officer as per the provisions of Section 14 of this Privacy Policy. Notwithstanding the foregoing, we reserve the right to retain your personal information in accordance with applicable laws, for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. We may retain information about you for the purposes authorized under this Privacy Policy unless prohibited by law. Thereafter, we will either delete your personal information or de-identify it so that it is anonymous and not attributed to your identity. We may archive information to prevent, investigate, or identify possible wrongdoing in connection with the Service or to comply with legal obligations. We may also continue to retain your data in anonymised form for analytical and research purposes.
                        </ul>
                      </div>
                      <div>
                        <strong>11.   Job Applicants</strong>
                        <ul>
                          11.1. If your information is submitted to us through our Service when applying for a position with the Company, the information will be used to consider your application. We may retain your information for any period of time. This information may be shared with other companies for the purpose of evaluating your qualifications for the particular position or other available positions, as well as with third-party service providers retained by us to collect, maintain and analyze candidate submissions for job postings.
                        </ul>
                      </div>

                      <div>
                        <strong>12.   Your Consent</strong>
                      
                      <ul>
                        12.1. By accessing or using the Services or by providing your information, you consent to the collection, use, storage, disclosure and otherwise processing of your information (including sensitive personal information) on the Services in accordance with this Privacy Policy. If you disclose to us any personal information relating to other people, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy.
                      </ul>
                      <ul>
                        12.2. You, while providing your personal information in relation to the Services or any partner platforms or establishments, consent to us (including our other corporate entities, affiliates, lending partners, CIC’s, technology partners, marketing channels, business partners and other third parties) to contact you through SMS, instant messaging apps, call and/or e-mail for the purposes specified in this Privacy Policy.
                      </ul>
                      </div>
                      <div><strong>13.   Changes to this Privacy policy</strong>
                      <ul>
                        
                      13.1. We reserve the right to amend this Privacy Policy from time to time to reflect changes in the law, our data collection and use practices, the features of our services, or advances in technology. Please check this page periodically for changes. Use of information we collect is subject to the Privacy Policy in effect at the time such information is used. If we make any material changes to this Privacy Policy, we will post the changes here. Please review the changes carefully. Your continued use of the Services following the posting of changes to this Privacy Policy will constitute your consent and acceptance of those changes.

                      </ul>
                      </div>
                      

                      <div>
                      <strong>14.   Grievance Officer</strong>
                      <ul>
                      14.1. In accordance with Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the name and contact details of the Grievance Officer are provided below:
                      </ul>
                      <div> Address :Skill works IT,  Madapur,</div>
                      <div> Near The Alley Drive In</div>
                      <div> Hyderabad, Telangana. 500081</div>
                      <div> email id: legalsupport@urbansattva.com</div>
                      </div>
                      <div className='mt-3'>
                      <strong>15.   Contact us</strong>
                      <ul>
                      15.1.      If you have any queries relating to the processing/ usage of information provided by you or the Company's Privacy Policy or if you would like to raise any other inquiries, you may email us at the contact information provided above under section 14 of this privacy policy.
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

export default PrivacyPolicy
