import React, { Component } from 'react';
import { Button } from 'antd'
import _privacy from './_privacy.less'
import Head from '../head'
import { Link } from 'routes'
const data = {
    type: `Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Calendar permission, Approximate location permission (non-continuous), SMS permission, Reminders permission, food related activity and date of birth.

    Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
    The Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
    All Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without any consequences on the availability or the functioning of the service.
    Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
    Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
    
    Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.`,
    most1: `The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
    The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time.`,
    most2: `The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller.`,
    most3: `The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data.`,
    use: `The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Access to third-party accounts, Device permissions for Personal Data access and Handling activity data.

The Personal Data used for each purpose is outlined in the specific sections of this document.`,
    facebook1: `This Application may ask for some Facebook permissions allowing it to perform actions with the User's Facebook account and to retrieve information, including Personal Data, from it. This service allows this Application to connect with the User's account on the Facebook social network, provided by Facebook Inc.

For more information about the following permissions, refer to the Facebook permissions documentation and to the Facebook privacy policy.

The permissions asked are the following:`,
    facebook2: `By default, this includes certain User’s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available.`,
    device1: `Depending on the User's specific device, this Application may request certain permissions that allow it to access the User's device Data as described below.

    By default, these permissions must be granted by the User before the respective information can be accessed. Once the permission has been given, it can be revoked by the User at any time. In order to revoke these permissions, Users may refer to the device settings or contact the Owner for support at the contact details provided in the present document.
    The exact procedure for controlling app permissions may be dependent on the User's device and software.
    
    Please note that the revoking of such permissions might impact the proper functioning of this Application.
    
    If User grants any of the permissions listed below, the respective Personal Data may be processed (i.e accessed to, modified or removed) by this Application.`,

    device2: `Used for accessing the User's approximate device location. This Application may collect, use, and share User location Data in order to provide location-based services.
The geographic location of the User is determined in a manner that isn't continuous. This means that it is impossible for this Application to derive the approximate position of the User on a continuous basis.`,

    device3: `Used for accessing the calendar on the User's device, including the reading, adding and removing of entries.`,
    device4: `Used for accessing the Reminders app on the User's device, including the reading, adding and removing of entries.`,
    device5: `Used for accessing features related to the User's messaging including the sending, receiving and reading of SMS.`,
    addition1: `The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services.
    The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities.`,
    addition2: `In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request.`,
    addition3: `For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.`,
    addition4: `More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document.`,
    addition5: `Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.

This Application does not support “Do Not Track” requests.
To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.`,
    addition6: `The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.`,
    addition7: `The Data Controller is responsible for this privacy policy, prepared starting from the modules provided by iubenda and hosted on iubenda's servers.`
}


class PrivacyTerm extends Component {

    render() {

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _privacy }} />
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/privacy"
                    title="Privacy Policy - Truckster"
                    description="We take your privacy seriously. Read over our Privacy Policy to gain a better understanding of how we use your information."
                />

                <div className="privacy-wrapper">

                    <div className="privacy-container">
                        <div className="privacy-header">
                            <div className="privacy-title DisplayBlackCenter">
                                Privacy & Terms</div>
                            <div className="privacy-bref Body-2GreyCenter">
                                This Application collects some Personal Data from its Users.</div>
                        </div>
                        <section className="privacy-section">
                            <div className="section-title Display-2BlackLeft">
                                Owner and Data Controller</div>
                            <div className="section-info ">
                                <div className="Body-2GreyLeft">Truckster</div>
                                <div className="Body-2GreyLeft">  Denver, Colorado</div>
                                <div className="Body-2GreyLeft">Owner contact email: <a href="mailto:connor@gotruckster.com">connor@gotruckster.com</a></div>
                            </div>
                        </section>

                        <hr />

                        <section className="privacy-section">
                            <div className="section-title Display-2BlackLeft">
                                Types of Data collected</div>
                            <div className="section-info ">
                                <div className="Body-2GreyLeft">{data.type}</div>


                            </div>
                        </section>

                        <hr />

                        <section className="privacy-section">
                            <div className="section-title Display-2BlackLeft">
                                Mode and place of processing the Data</div>
                            <div className="section-info ">
                                <div className="small-title SubheadingBlackLeft">Methods of processing</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.most1}</div>

                                <div className="small-title SubheadingBlackLeft">Place</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.most2}</div>

                                <div className="small-title SubheadingBlackLeft">Retention time</div>
                                <div className="Body-2GreyLeft">{data.most3}</div>
                            </div>
                        </section>

                        <hr />

                        <section className="privacy-section">
                            <div className="section-title Display-2BlackLeft">
                                The use of the collected Data</div>
                            <div className="section-info ">

                                <div className="Body-2GreyLeft ">{data.use}</div>

                            </div>
                        </section>

                        <hr />

                        <section className="privacy-section">
                            <div className="section-title Display-2BlackLeft">
                                Facebook permissions asked by this Application</div>
                            <div className="section-info ">

                                <div className="Body-2GreyLeft padding-bottom ">{data.facebook1}</div>

                                <div className="small-title SubheadingBlackLeft">Basic information</div>
                                <div className="Body-2GreyLeft padding-bottom ">{data.facebook2}</div>

                                <div className="small-title SubheadingBlackLeft">App Notifications</div>
                                <div className="Body-2GreyLeft padding-bottom">Send notifications.</div>

                                <div className="small-title SubheadingBlackLeft">Birthday</div>
                                <div className="Body-2GreyLeft padding-bottom">Provides access to the birthday.</div>

                                <div className="small-title SubheadingBlackLeft">Contact email</div>
                                <div className="Body-2GreyLeft padding-bottom">Access the User's contact email address.</div>

                                <div className="small-title SubheadingBlackLeft">Current City</div>
                                <div className="Body-2GreyLeft padding-bottom">Provides access to the User's current location.</div>
                            </div>
                        </section>

                        <hr />

                        <section className="privacy-section">
                            <div className="section-title Display-2BlackLeft">
                                Device permissions for Personal Data access</div>
                            <div className="section-info ">

                                <div className="Body-2GreyLeft padding-bottom ">{data.device1}</div>

                                <div className="small-title SubheadingBlackLeft">Approximate location permission (non-continuous)</div>
                                <div className="Body-2GreyLeft padding-bottom ">{data.device2}</div>

                                <div className="small-title SubheadingBlackLeft">Calendar permission</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.device3}</div>

                                <div className="small-title SubheadingBlackLeft">Reminders permission</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.device4}</div>

                                <div className="small-title SubheadingBlackLeft">SMS permission</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.device5}</div>


                            </div>
                        </section>


                        <hr />

                        <section className="privacy-section">
                            <div className="section-title Display-2BlackLeft">
                                Additional information about Data collection and processing</div>
                            <div className="section-info ">

                                <div className="small-title SubheadingBlackLeft">Legal action</div>
                                <div className="Body-2GreyLeft padding-bottom ">{data.addition1}</div>

                                <div className="small-title SubheadingBlackLeft">Additional information about User's Personal Data</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.addition2}</div>

                                <div className="small-title SubheadingBlackLeft">System logs and maintenance</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.addition3}</div>

                                <div className="small-title SubheadingBlackLeft">Information not contained in this policy</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.addition4}</div>

                                <div className="small-title SubheadingBlackLeft">The rights of Users</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.addition5}</div>

                                <div className="small-title SubheadingBlackLeft">Changes to this privacy policy</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.addition6}</div>

                                <div className="small-title SubheadingBlackLeft">Information about this privacy policy</div>
                                <div className="Body-2GreyLeft padding-bottom">{data.addition7}</div>
                            </div>
                        </section>
                    </div>

                    <div className="not-find">
                        <div className="title Display-2BlackCenter">
                            Not finding what you're looking for?
                            </div>
                        <div className="button-contact">
                            <Link prefetch to="/contact" >
                                <a>


                                    <Button type="primary">
                                        <div className="ButtonWhiteCenter">
                                            CONTACT US
                                </div>
                                    </Button>
                                </a>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default PrivacyTerm;
