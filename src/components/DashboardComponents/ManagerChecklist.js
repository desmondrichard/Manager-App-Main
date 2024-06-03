import React from 'react';
import './ManagerChecklist.css';
import Header from '../Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ManagerChecklist() {
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList' style={{ whitespace: 'nowrap', minWidth: '300px' }}>MANAGER CHECKLIST DETAILS</div>
            </div>
            <Row className='mt-2'>
                <Col xs={4} style={{ marginTop: '-5px' }}>
                    <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                        Go Back
                    </Button>
                    </NavLink>
                </Col>
            </Row>
            <Form className='tableFontSize'>
                <Row className='my-3'>
                    <Col lg={6}>
                        <Table bordered hover size="sm" style={{ border: '1px solid black' }}>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Particulars</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody style={{ border: '1px solid black' }}>
                                <tr>
                                    <td className='text-center bordered1'>1</td>
                                    <td className='bordered1'>Team Name Submission:</td>
                                    <td className='text-center bordered1'>
                                        <label for="teamNameSubmission" className='hide '></label>
                                        <select className="teamNameSubmission" id="teamNameSubmission">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>2</td>
                                    <td className='bordered1'>Team Logo Submission:</td>
                                    <td className='text-center bordered1'>
                                        <label for="teamLogoSubmission" className='hide '></label>
                                        <select className="teamLogoSubmission" id="teamLogoSubmission">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>3</td>
                                    <td className='bordered1'>Team Anthem Song:</td>
                                    <td className='text-center bordered1'>
                                        <label for="teamAnthemSong" className='hide '></label>
                                        <select className="teamAnthemSong" id="teamAnthemSong">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>4</td>
                                    <td className='bordered1'>Team Anthem Video:</td>
                                    <td className='text-center bordered1'>
                                        <label for="teamAnthem" className='hide '></label>
                                        <select className="teamAnthem" id="teamAnthem">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>5</td>
                                    <td className='bordered1'>Players Retention Signed List:</td>
                                    <td className='text-center bordered1'>
                                        <label for="playersRetention" className='hide '></label>
                                        <select className="playersRetention" id="playersRetention">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>6</td>
                                    <td className='bordered1'>Selection Trials:</td>
                                    <td className='text-center bordered1'>
                                        <label for="selectionTrials" className='hide '></label>
                                        <select className="selectionTrials" id="selectionTrials">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>7</td>
                                    <td className='bordered1'>Team Social Media:</td>
                                    <td className='text-center bordered1'>
                                        <label for="teamSocialMedia" className='hide '></label>
                                        <select className="teamSocialMedia" id="teamSocialMedia">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>8</td>
                                    <td className='bordered1'>Photos Videos Drive Credentials:</td>
                                    <td className='text-center bordered1'>
                                        <label for="photosVideosDrive" className='hide '></label>
                                        <select className="photosVideosDrive" id="photosVideosDrive">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>9</td>
                                    <td className='bordered1'>Auction Shortlisted PlayersList to TNCA:</td>
                                    <td className='text-center bordered1'>
                                        <label for="auctionShortlistedPlayersList" className='hide '></label>
                                        <select className="auctionShortlistedPlayersList" id="auctionShortlistedPlayersList">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>10</td>
                                    <td className='bordered1'>Auction Representatives MailSend:</td>
                                    <td className='text-center bordered1'>
                                        <label for="auctionRepresentatives" className='hide '></label>
                                        <select className="auctionRepresentatives" id="auctionRepresentatives">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>11</td>
                                    <td className='bordered1'>Auction Team Uniform Approval:</td>
                                    <td className='text-center bordered1'>
                                        <label for="auctionTeamUniform" className='hide '></label>
                                        <select className="auctionTeamUniform" id="auctionTeamUniform">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>12</td>
                                    <td className='bordered1'>Auction Mock Discussion Dates:</td>
                                    <td className='text-center bordered1'>
                                        <label for="auctionMockDiscussion" className='hide '></label>
                                        <select className="auctionMockDiscussion" id="auctionMockDiscussion">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>13</td>
                                    <td className='bordered1'>Auction Venue Details:</td>
                                    <td className='text-center bordered1'>
                                        <label for="auctionVenue" className='hide '></label>
                                        <select className="auctionVenue" id="auctionVenue">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>14</td>
                                    <td className='bordered1'>Fixtures:</td>
                                    <td className='text-center bordered1'>
                                        <label for="fixtures" className='hide '></label>
                                        <select className="fixtures" id="fixtures">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>15</td>
                                    <td className='bordered1'>Players List with Amount & Datas:</td>
                                    <td className='text-center bordered1'>
                                        <label for="playersListAmount" className='hide '></label>
                                        <select className="playersListAmount" id="playersListAmount">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>16</td>
                                    <td className='bordered1'>Players FullDatas Collection:</td>
                                    <td className='text-center bordered1'>
                                        <label for="playersFullDatasCollection" className='hide '></label>
                                        <select className="playersFullDatasCollection" id="playersFullDatasCollection">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>17</td>
                                    <td className='bordered1'>Players Details ACU:</td>
                                    <td className='text-center bordered1'>
                                        <label for="playersDetailsACU" className='hide '></label>
                                        <select className="playersDetailsACU" id="playersDetailsACU">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>18</td>
                                    <td className='bordered1'>Support Staff Details ACU:</td>
                                    <td className='text-center bordered1'>
                                        <label for="supportStaffDetailsACU" className='hide '></label>
                                        <select className="supportStaffDetailsACU" id="supportStaffDetailsACU">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>19</td>
                                    <td className='bordered1'>Hotel Bookings Advanced:</td>
                                    <td className='text-center bordered1'>
                                        <label for="hotelBookingsAdvanced" className='hide '></label>
                                        <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                            <option value="none">Open this select menu</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Finalised">Finalised</option>
                                            <option value="Not Yet Finalised">Not Yet Finalised</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Received">Received</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Partially Completed">Partially Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>20</td>
                                    <td className='bordered1' style={{ backgroundColor: "rgb(240,220,132)" }}>Team Playing Guards Vendor:</td>
                                    <td className='text-center bordered1'>
                                        <label for="hotelBookingsAdvanced" className='hide '></label>
                                        <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>a</td>
                                    <td className='bordered1' >Batting Pads:</td>
                                    <td className='text-center bordered1'>
                                        <label for="hotelBookingsAdvanced" className='hide '></label>
                                        <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>b</td>
                                    <td className='bordered1' >Batting Gloves:</td>
                                    <td className='text-center bordered1'>
                                        <label for="hotelBookingsAdvanced" className='hide '></label>
                                        <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>c</td>
                                    <td className='bordered1'>WK Pads:</td>
                                    <td className='text-center bordered1'>
                                        <label for="hotelBookingsAdvanced" className='hide '></label>
                                        <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>d</td>
                                    <td className='bordered1'>WK Gloves:</td>
                                    <td className='text-center bordered1'>
                                        <label for="hotelBookingsAdvanced" className='hide '></label>
                                        <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>e</td>
                                    <td className='bordered1'>Shin Guards:</td>
                                    <td className='text-center bordered1'>
                                        <label for="hotelBookingsAdvanced" className='hide '></label>
                                        <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>

                    <Col lg={6}>
                        <Table bordered hover size="sm" style={{ border: '1px solid black' }}>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Particulars</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody style={{ border: '1px solid black' }}>
                                <tr>
                                    <td className='text-center bordered1'>21</td>
                                    <td className='bordered1' style={{ backgroundColor: "rgb(240,220,132)" }}>Head Gears:</td>
                                    <td className='text-center bordered1'>
                                        <label for="HeadGears" className='hide '></label>
                                        <select className="HeadGears" id="HeadGears">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>a</td>
                                    <td className='bordered1'>Helmets Vendor:</td>
                                    <td className='text-center bordered1'>
                                        <label for="HelmetsVendor" className='hide '></label>
                                        <select className="HelmetsVendor" id="HelmetsVendor">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>b</td>
                                    <td className='bordered1'>Match Caps:</td>
                                    <td className='text-center bordered1'>
                                        <label for="MatchCaps" className='hide '></label>
                                        <select className="MatchCaps" id="MatchCaps">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>c</td>
                                    <td className='bordered1'>Match Hats:</td>
                                    <td className='text-center bordered1'>
                                        <label for="MatchHats" className='hide '></label>
                                        <select className="MatchHats" id="MatchHats">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>d</td>
                                    <td className='bordered1'>Training Caps:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TrainingCaps" className='hide '></label>
                                        <select className="TrainingCaps" id="TrainingCaps">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>e</td>
                                    <td className='bordered1'>Training Hats:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TrainingHats" className='hide '></label>
                                        <select className="TrainingHats" id="TrainingHats">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>f</td>
                                    <td className='bordered1'>YoYo Travel Cap:</td>
                                    <td className='text-center bordered1'>
                                        <label for="YoYoTravelCap" className='hide '></label>
                                        <select className="YoYoTravelCap" id="YoYoTravelCap">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>22</td>
                                    <td className='bordered1' style={{ backgroundColor: "rgb(240,220,132)" }}>Bags Vendor:</td>
                                    <td className='text-center bordered1'>
                                        <label for="BagsVendor" className='hide '></label>
                                        <select className="BagsVendor" id="BagsVendor">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>a</td>
                                    <td className='bordered1'>Team Kit Bags:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TeamKitBags" className='hide '></label>
                                        <select className="TeamKitBags" id="TeamKitBags">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>b</td>
                                    <td className='bordered1'>Shoulder Bag:</td>
                                    <td className='text-center bordered1'>
                                        <label for="ShoulderBag" className='hide '></label>
                                        <select className="ShoulderBag" id="ShoulderBag">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>c</td>
                                    <td className='bordered1'>Shoe Bag:</td>
                                    <td className='text-center bordered1'>
                                        <label for="ShoeBag" className='hide '></label>
                                        <select className="ShoeBag" id="ShoeBag">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>23</td>
                                    <td className='bordered1'>Team Clothing Vendor Finalize:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TeamClothingVendor" className='hide '></label>
                                        <select className="TeamClothingVendor" id="TeamClothingVendor">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>24</td>
                                    <td className='bordered1' style={{ backgroundColor: "rgb(240,220,132)" }}>Team Jersey Design Approval:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TeamJerseyDesign" className='hide '></label>
                                        <select className="TeamJerseyDesign" id="TeamJerseyDesign">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>a</td>
                                    <td className='bordered1'>Training Tshirt:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TrainingTshirt" className='hide '></label>
                                        <select className="TrainingTshirt" id="TrainingTshirt">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>b</td>
                                    <td className='bordered1'>Training Pant:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TrainingPant" className='hide '></label>
                                        <select className="TrainingPant" id="TrainingPant">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>c</td>
                                    <td className='bordered1'>Training Sleeveless:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TrainingSleeveless" className='hide '></label>
                                        <select className="TrainingSleeveless" id="TrainingSleeveless">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>d</td>
                                    <td className='bordered1'>Training Shorts:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TrainingShorts" className='hide '></label>
                                        <select className="TrainingShorts" id="TrainingShorts">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>e</td>
                                    <td className='bordered1'>Travel Tshirt:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TravelTshirt" className='hide '></label>
                                        <select className="TravelTshirt" id="TravelTshirt">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>f</td>
                                    <td className='bordered1'>Match Jersey:</td>
                                    <td className='text-center bordered1'>
                                        <label for="MatchJersey" className='hide '></label>
                                        <select className="MatchJersey" id="MatchJersey">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>g</td>
                                    <td className='bordered1'>Match Pant:</td>
                                    <td className='text-center bordered1'>
                                        <label for="MatchPant" className='hide '></label>
                                        <select className="MatchPant" id="MatchPant">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>h</td>
                                    <td className='bordered1' >Track Suit:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TrackSuit" className='hide '></label>
                                        <select className="TrackSuit" id="TrackSuit">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>i</td>
                                    <td className='bordered1' >Track Pant:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TrackPant" className='hide '></label>
                                        <select className="TrackPant" id="TrackPant">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>j</td>
                                    <td className='bordered1'>Bibbs 12nos:</td>
                                    <td className='text-center bordered1'>
                                        <label for="Bibbs" className='hide '></label>
                                        <select className="Bibbs" id="Bibbs">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>k</td>
                                    <td className='bordered1'>Team Flags:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TeamFlags" className='hide '></label>
                                        <select className="TeamFlags" id="TeamFlags">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>l</td>
                                    <td className='bordered1'>Audience Tshirt:</td>
                                    <td className='text-center bordered1'>
                                        <label for="AudienceTshirt" className='hide '></label>
                                        <select className="AudienceTshirt" id="AudienceTshirt">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>

                    <Col lg={6}>
                        <Table bordered hover size="sm" style={{ border: '1px solid black' }}>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Particulars</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody style={{ border: '1px solid black' }}>
                                <tr>
                                    <td className='text-center bordered1'>m</td>
                                    <td className='bordered1'>Audience Flag:</td>
                                    <td className='text-center bordered1'>
                                        <label for="AudienceFlag" className='hide '></label>
                                        <select className="AudienceFlag" id="AudienceFlag">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>n</td>
                                    <td className='bordered1'>Audience Cap:</td>
                                    <td className='text-center bordered1'>
                                        <label for="AudienceCap" className='hide '></label>
                                        <select className="AudienceCap" id="AudienceCap">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>o</td>
                                    <td className='bordered1'>Audience Board:</td>
                                    <td className='text-center bordered1'>
                                        <label for="AudienceBoard" className='hide '></label>
                                        <select className="AudienceBoard" id="AudienceBoard">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>25</td>
                                    <td className='bordered1'>Team Practice Schedule:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TeamPracticeSchedule" className='hide '></label>
                                        <select className="TeamPracticeSchedule" id="TeamPracticeSchedule">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>26</td>
                                    <td className='bordered1'>	Players Autograph Jersey to TNCA:</td>
                                    <td className='text-center bordered1'>
                                        <label for="PlayersAutographJersey" className='hide '></label>
                                        <select className="PlayersAutographJersey" id="PlayersAutographJersey">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>27</td>
                                    <td className='bordered1'>Team Practice Schedule Planner:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TeamPracticeSchedule" className='hide '></label>
                                        <select className="TeamPracticeSchedule" id="TeamPracticeSchedule">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>28</td>
                                    <td className='bordered1'>Sponsor Deck:</td>
                                    <td className='text-center bordered1'>
                                        <label for="SponsorDeck" className='hide '></label>
                                        <select className="SponsorDeck" id="SponsorDeck">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>29</td>
                                    <td className='bordered1'>Sponsors Detailed List:</td>
                                    <td className='text-center bordered1'>
                                        <label for="SponsorsDetailedList" className='hide '></label>
                                        <select className="SponsorsDetailedList" id="SponsorsDetailedList">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>30</td>
                                    <td className='bordered1'>Sponsors Logos:</td>
                                    <td className='text-center bordered1'>
                                        <label for="SponsorsLogos" className='hide '></label>
                                        <select className="SponsorsLogos" id="SponsorsLogos">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>31</td>
                                    <td className='bordered1'>Team Flags Submission:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TeamFlagsSubmission" className='hide '></label>
                                        <select className="TeamFlagsSubmission" id="TeamFlagsSubmission">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>32</td>
                                    <td className='bordered1'>Team Players Photoshoot:</td>
                                    <td className='text-center bordered1'>
                                        <label for="TeamPlayersPhotoshoot" className='hide '></label>
                                        <select className="TeamPlayersPhotoshoot" id="TeamPlayersPhotoshoot">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>33</td>
                                    <td className='bordered1'>Accreditation Cards Received:</td>
                                    <td className='text-center bordered1'>
                                        <label for="AccreditationCards " className='hide '></label>
                                        <select className="AccreditationCards" id="AccreditationCards">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>34</td>
                                    <td className='bordered1'>Player Replacement Request:</td>
                                    <td className='text-center bordered1'>
                                        <label for="PlayerReplacementRequest" className='hide '></label>
                                        <select className="PlayerReplacementRequest" id="PlayerReplacementRequest">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>35</td>
                                    <td className='bordered1'>Toss Representatives:</td>
                                    <td className='text-center bordered1'>
                                        <label for="Toss" className='hide '></label>
                                        <select className="Toss" id="Toss">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>36</td>
                                    <td className='bordered1'>LED Dugout Perimeter Board:</td>
                                    <td className='text-center bordered1'>
                                        <label for="LEDDugout" className='hide '></label>
                                        <select className="LEDDugout" id="LEDDugout">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>37</td>
                                    <td className='bordered1'>Owners Seat to Representative:</td>
                                    <td className='text-center bordered1'>
                                        <label for="OwnersSeat" className='hide '></label>
                                        <select className="OwnersSeat" id="OwnersSeat">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>38</td>
                                    <td className='bordered1'>Players Contract Submission:</td>
                                    <td className='text-center bordered1'>
                                        <label for=">PlayersContract" className='hide '></label>
                                        <select className="PlayersContract" id="PlayersContract">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>39</td>
                                    <td className='bordered1'>ACU Officier Detail:</td>
                                    <td className='text-center bordered1'>
                                        <label for="ACUOfficierDetail" className='hide '></label>
                                        <select className="ACUOfficierDetail" id="ACUOfficierDetail">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>40</td>
                                    <td className='bordered1'>ACU Officer Bill Submission to TNCA:</td>
                                    <td className='text-center bordered1'>
                                        <label for="ACUOfficerBillSubmission" className='hide '></label>
                                        <select className="ACUOfficerBillSubmission" id="ACUOfficerBillSubmission">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>41</td>
                                    <td className='bordered1'>Net Bowlers:</td>
                                    <td className='text-center bordered1'>
                                        <label for="NetBowlers" className='hide '></label>
                                        <select className="NetBowlers" id="NetBowlers">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center bordered1'>42</td>
                                    <td className='bordered1' >Reserves BackUp List:</td>
                                    <td className='text-center bordered1'>
                                        <label for="BackUpList" className='hide '></label>
                                        <select className="BackUpList" id="BackUpList">
                                            <option value="none">Open this select menu</option>
                                            <option value="Ordered">Ordered</option>
                                            <option value="Yet to Order">Yet to Order</option>
                                            <option value="Invoice Received">Invoice Received</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Received">Received</option>
                                            <option value="In Transit">In Transit</option>
                                            <option value="Payment Completed">Payment Completed</option>

                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button variant="primary" className='text-center mb-3'>Submit</Button>
                </div>
            </Form>
        </div >
    )
}

export default ManagerChecklist