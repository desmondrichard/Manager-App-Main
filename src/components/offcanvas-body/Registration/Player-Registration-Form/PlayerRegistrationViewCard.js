import React from 'react';
import Header from '../../../Header';
import ExploreOptions from '../../../ModalComponents/ExploreOptions';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './PlayerRegistrationViewCard.css';
import { useLocation } from 'react-router-dom';
import format from 'date-fns/format';

function PlayerRegistrationViewCard() {
    const location = useLocation();
    console.log("loci", location)
    let formattedDate = "";
    return (
        <div>
            <Header />
            <div className='headerBtn my-3'>
                <h5 className='headingTag'>PLAYERS DETAILS-LIST</h5>
            </div>
            <div>
                <Row>
                    <Col lg={3} className='mb-2'>
                        <NavLink to='/playerregister' className='navLinks'><Button variant="primary" style={{ fontWeight: 'bold' }}>Go Back</Button></NavLink>
                    </Col>
                    <Col lg={{ span: 3, offset: 6 }} ><ExploreOptions /></Col>
                </Row>
            </div>

            <Card className='my-3 m-auto' style={{ width: '90%', border: '2px outset #2E83D8' }}>
                <Card.Body>
                    {/* Card:0 */}
                    <Card style={{ width: '100%' }} className='todoSubCard'>
                        <Card.Header className='todoHeader'>PERSONAL INFORMATION</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Player ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataplayerId}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Player Name: <span style={{ fontWeight: '400' }}>{location.state.showData.playerName}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Middle Name: <span style={{ fontWeight: '400' }}>{location.state.showData.middleName}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Last Name: <span style={{ fontWeight: '400' }}>{location.state.showData.lastName}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Initial: <span style={{ fontWeight: '400' }}>{location.state.showData.initials}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Display Name: <span style={{ fontWeight: '400' }}>{location.state.showData.displayName}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Father Name: <span style={{ fontWeight: '400' }}>{location.state.showData.fatherName}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Mother Name: <span style={{ fontWeight: '400' }}>{location.state.showData.motherName}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Blood Group: <span style={{ fontWeight: '400' }}>{location.state.showData.bloodGroup}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Mobile No: <span style={{ fontWeight: '400' }}>{location.state.showData.mobileNo}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Alternate No: <span style={{ fontWeight: '400' }}>{location.state.showData.secondNumber}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Email No: <span style={{ fontWeight: '400' }}>{location.state.showData.emailId}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Date Of Birth: <span style={{ fontWeight: '400' }}>{formattedDate = format(
                                    new Date(location.state.showData.dateOfBirth),
                                    'dd/MM/yyyy'
                                )}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:1 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>PROFICIENCY INFORMATION</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Specialization: <span style={{ fontWeight: '400' }}>{location.state.showData.specialization}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Batting Style: <span style={{ fontWeight: '400' }}>{location.state.showData.battingStyle}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Batting Order: <span style={{ fontWeight: '400' }}>{location.state.showData.battingOrder}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Wicket Keeper: <span style={{ fontWeight: '400' }}>{location.state.showData.wicketkeeper}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Bowler Type: <span style={{ fontWeight: '400' }}>{location.state.showData.bowlerType}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Bowling Style: <span style={{ fontWeight: '400' }}>{location.state.showData.bowlingType}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Bowling Specification: <span style={{ fontWeight: '400' }}>{location.state.showData.bowlingSpecification}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:2 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>KITTING DETAILS</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Jersey Name: <span style={{ fontWeight: '400' }}>{location.state.showData.jerseyName}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Jersey No: <span style={{ fontWeight: '400' }}>{location.state.showData.jerseyNo}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Jersey Size: <span style={{ fontWeight: '400' }}>{location.state.showData.jerseySize}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Trowser Length: <span style={{ fontWeight: '400' }}>{location.state.showData.trouserLength}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Trowser Size: <span style={{ fontWeight: '400' }}>{location.state.showData.trouserSize}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Shorts Size: <span style={{ fontWeight: '400' }}>{location.state.showData.shortsSize}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Track Suit: <span style={{ fontWeight: '400' }}>{location.state.showData.trackSuit}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Travel Polo: <span style={{ fontWeight: '400' }}>{location.state.showData.travelPolo}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Helmet: <span style={{ fontWeight: '400' }}>{location.state.showData.helmet}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Batting Pad: <span style={{ fontWeight: '400' }}>{location.state.showData.battingPads}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Batting Gloves: <span style={{ fontWeight: '400' }}>{location.state.showData.battingGloves}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Wicket Gloves: <span style={{ fontWeight: '400' }}>{location.state.showData.wkGloves}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Wicket Pad: <span style={{ fontWeight: '400' }}>{location.state.showData.wkPad}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Shoulder Bag: <span style={{ fontWeight: '400' }}>{location.state.showData.shoulderBag}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Shoe Bag: <span style={{ fontWeight: '400' }}>{location.state.showData.shoeBag}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Playing Kit Bag: <span style={{ fontWeight: '400' }}>{location.state.showData.playingkitBag}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Practice Jersey: <span style={{ fontWeight: '400' }}>{location.state.showData.practicsJersey}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Family Jersey: <span style={{ fontWeight: '400' }}>{location.state.showData.familyJersey}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Family Jersey No: <span style={{ fontWeight: '400' }}>{location.state.showData.familyJerseyNo}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Arm Guard: <span style={{ fontWeight: '400' }}>{location.state.showData.armGuard}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Thigh Guard: <span style={{ fontWeight: '400' }}>{location.state.showData.thighGaurad}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Abnominal Guard: <span style={{ fontWeight: '400' }}>{location.state.showData.abdominalGaurad}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:3 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>ID CARD INFORMATION</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Aadhar No: <span style={{ fontWeight: '400' }}>{location.state.showData.aadharNo ? location.state.showData.aadharNo : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Pancard No: <span style={{ fontWeight: '400' }}>{location.state.showData.panCardNo ? location.state.showData.panCardNo : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Passport No: <span style={{ fontWeight: '400' }}>{location.state.showData.passportNo ? location.state.showData.passportNo : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Passport Expiry Date: <span style={{ fontWeight: '400' }}>{location.state.showData.passportExpDate ? location.state.showData.passportExpDate : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Address: <span style={{ fontWeight: '400' }}>{location.state.showData.address ? location.state.showData.address : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Address line1: <span style={{ fontWeight: '400' }}>{location.state.showData.addressLine1 ? location.state.showData.addressLine1 : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Address line2: <span style={{ fontWeight: '400' }}>{location.state.showData.addressLine2 ? location.state.showData.addressLine2 : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Address line3: <span style={{ fontWeight: '400' }}>{location.state.showData.addressLine3 ? location.state.showData.addressLine3 : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>City: <span style={{ fontWeight: '400' }}>{location.state.showData.city ? location.state.showData.city : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>State: <span style={{ fontWeight: '400' }}>{location.state.showData.state ? location.state.showData.state : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Country: <span style={{ fontWeight: '400' }}>{location.state.showData.country ? location.state.showData.country : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Postal Code: <span style={{ fontWeight: '400' }}>N/A</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:4 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>BANK DETAILS</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Beneficiary Name: <span style={{ fontWeight: '400' }}>{location.state.showData.beneficiaryName ? location.state.showData.beneficiaryName : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Bank Name: <span style={{ fontWeight: '400' }}>{location.state.showData.bankName ? location.state.showData.bankName : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>IBAN Code: <span style={{ fontWeight: '400' }}>{location.state.showData.ibanCode ? location.state.showData.ibanCode : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>GST No: <span style={{ fontWeight: '400' }}>{location.state.showData.gstNumber ? location.state.showData.gstNumber : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>MICR Code: <span style={{ fontWeight: '400' }}>{location.state.showData.micrCode ? location.state.showData.micrCode : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Currency Type: <span style={{ fontWeight: '400' }}>{location.state.showData.currencyType ? location.state.showData.currencyType : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Switchbic No: <span style={{ fontWeight: '400' }}>{location.state.showData.switchbicNumber ? location.state.showData.switchbicNumber : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Bank Account No: <span style={{ fontWeight: '400' }}>{location.state.showData.bankAccountNo ? location.state.showData.bankAccountNo : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Account Type: <span style={{ fontWeight: '400' }}>{location.state.showData.acType ? location.state.showData.acType : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>IFSC Code: <span style={{ fontWeight: '400' }}>{location.state.showData.ifscCode ? location.state.showData.ifscCode : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Bank Address: <span style={{ fontWeight: '400' }}>{location.state.showData.bankAddress ? location.state.showData.bankAddress : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Bank Contact No: <span style={{ fontWeight: '400' }}>{location.state.showData.bankContactNo ? location.state.showData.bankContactNo : 'N/A'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:4 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>FOOD DETAILS</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Non Veg: <span style={{ fontWeight: '400' }}>{location.state.showData.nonveg ? location.state.showData.nonveg : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Eggiterian: <span style={{ fontWeight: '400' }}>{location.state.showData.eggIterian ? location.state.showData.eggIterian : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Sea Food: <span style={{ fontWeight: '400' }}>{location.state.showData.seaFood ? location.state.showData.seaFood : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Red Meat: <span style={{ fontWeight: '400' }}>{location.state.showData.redMeat ? location.state.showData.redMeat : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Allergy: <span style={{ fontWeight: '400' }}>{location.state.showData.allergyIfAny ? location.state.showData.allergyIfAny : 'N/A'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:5 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>TRAVEL DETAILS</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Travel From: <span style={{ fontWeight: '400' }}>{location.state.showData.travelFrom ? location.state.showData.travelFrom : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Return Destination: <span style={{ fontWeight: '400' }}>{location.state.showData.returnDestination ? location.state.showData.returnDestination : 'N/A'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:6 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>REPRESENTATION DETAILS</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>City/District: <span style={{ fontWeight: '400' }}>{location.state.showData.cityDistrict ? location.state.showData.cityDistrict : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Club: <span style={{ fontWeight: '400' }}>{location.state.showData.club ? location.state.showData.club : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Division: <span style={{ fontWeight: '400' }}>{location.state.showData.division ? location.state.showData.division : 'N/A'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:7 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>EMERGENCY CONTACT DETAILS</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Emergency Contact Person: <span style={{ fontWeight: '400' }}>{location.state.showData.emergencyContactPerson ? location.state.showData.emergencyContactPerson : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Emergency Contact Relationship: <span style={{ fontWeight: '400' }}>{location.state.showData.emergContactPersonRelationship ? location.state.showData.emergContactPersonRelationship : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Emergency Contact No: <span style={{ fontWeight: '400' }}>{location.state.showData.emergencyContactPersonNo ? location.state.showData.emergencyContactPersonNo : 'N/A'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:8 */}
                    <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                        <Card.Header className='todoHeader'>SOCIAL MEDIA INFORMATION</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Facebook ID: <span style={{ fontWeight: '400' }}>{location.state.showData.facebookId ? location.state.showData.facebookId : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Facebook Link: <span style={{ fontWeight: '400' }}>{location.state.showData.facebookLink ? location.state.showData.facebookLink : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Instagram ID: <span style={{ fontWeight: '400' }}>{location.state.showData.instagramId ? location.state.showData.instagramId : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Instagram Link: <span style={{ fontWeight: '400' }}>{location.state.showData.instagramLink ? location.state.showData.instagramLink : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Twitter ID: <span style={{ fontWeight: '400' }}>{location.state.showData.twitterId ? location.state.showData.twitterId : 'N/A'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Twitter Link: <span style={{ fontWeight: '400' }}>{location.state.showData.twitterLink ? location.state.showData.twitterLink : 'N/A'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>


                </Card.Body>
            </Card>
        </div>
    )
}

export default PlayerRegistrationViewCard