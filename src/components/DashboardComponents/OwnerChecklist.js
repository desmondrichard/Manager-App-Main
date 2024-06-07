import React from 'react';
import Header from '../Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

function OwnerChecklist() {
    return (
        <div>
            <div>
                <Header />
                <div className='text-center'>
                    <div className='playersList' style={{ whitespace: 'nowrap', minWidth: '300px' }}>OWNERS CHECKLIST DETAILS</div>
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
                                        <td className='bordered1'>Team Name:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamNameSubmission" className='hide '></label>
                                            <select className="teamNameSubmission" id="teamNameSubmission">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>2</td>
                                        <td className='bordered1'>Team Logo:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamLogoSubmission" className='hide '></label>
                                            <select className="teamLogoSubmission" id="teamLogoSubmission">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>3</td>
                                        <td className='bordered1'>Official Bank Account Details:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamAnthemSong" className='hide '></label>
                                            <select className="teamAnthemSong" id="teamAnthemSong">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>4</td>
                                        <td className='bordered1'>GST Details:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamAnthem" className='hide '></label>
                                            <select className="teamAnthem" id="teamAnthem">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>5</td>
                                        <td className='bordered1'>Manager Appointment:</td>
                                        <td className='text-center bordered1'>
                                            <label for="playersRetention" className='hide '></label>
                                            <select className="playersRetention" id="playersRetention">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>6</td>
                                        <td className='bordered1'>Players Retained List:</td>
                                        <td className='text-center bordered1'>
                                            <label for="selectionTrials" className='hide '></label>
                                            <select className="selectionTrials" id="selectionTrials">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>7</td>
                                        <td className='bordered1'>Support Staff List:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamSocialMedia" className='hide '></label>
                                            <select className="teamSocialMedia" id="teamSocialMedia">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>8</td>
                                        <td className='bordered1'>Selection Trial:</td>
                                        <td className='text-center bordered1'>
                                            <label for="photosVideosDrive" className='hide '></label>
                                            <select className="photosVideosDrive" id="photosVideosDrive">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>9</td>
                                        <td className='bordered1'>Auction Representatives List:</td>
                                        <td className='text-center bordered1'>
                                            <label for="auctionShortlistedPlayersList" className='hide '></label>
                                            <select className="auctionShortlistedPlayersList" id="auctionShortlistedPlayersList">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>10</td>
                                        <td className='bordered1'>Players Auction Shortlisted List:</td>
                                        <td className='text-center bordered1'>
                                            <label for="auctionRepresentatives" className='hide '></label>
                                            <select className="auctionRepresentatives" id="auctionRepresentatives">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

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
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
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
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>13</td>
                                        <td className='bordered1'>Final Team Squad Sign:</td>
                                        <td className='text-center bordered1'>
                                            <label for="auctionVenue" className='hide '></label>
                                            <select className="auctionVenue" id="auctionVenue">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>14</td>
                                        <td className='bordered1'>Hotel Bookings Advance:</td>
                                        <td className='text-center bordered1'>
                                            <label for="fixtures" className='hide '></label>
                                            <select className="fixtures" id="fixtures">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>15</td>
                                        <td className='bordered1'>Team Clothing Vendor Finalize:</td>
                                        <td className='text-center bordered1'>
                                            <label for="playersListAmount" className='hide '></label>
                                            <select className="playersListAmount" id="playersListAmount">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>16</td>
                                        <td className='bordered1'>Team Social Media:</td>
                                        <td className='text-center bordered1'>
                                            <label for="playersFullDatasCollection" className='hide '></label>
                                            <select className="playersFullDatasCollection" id="playersFullDatasCollection">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>17</td>
                                        <td className='bordered1'>Marketing Team:</td>
                                        <td className='text-center bordered1'>
                                            <label for="playersDetailsACU" className='hide '></label>
                                            <select className="playersDetailsACU" id="playersDetailsACU">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>18</td>
                                        <td className='bordered1'>Sponsor Deck:</td>
                                        <td className='text-center bordered1'>
                                            <label for="supportStaffDetailsACU" className='hide '></label>
                                            <select className="supportStaffDetailsACU" id="supportStaffDetailsACU">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>19</td>
                                        <td className='bordered1'>Team Jersey Design Approval:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>20</td>
                                        <td className='bordered1'>Team Practice Schedule:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>21</td>
                                        <td className='bordered1' >Team Anthem:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>22</td>
                                        <td className='bordered1' >Team Video:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>23</td>
                                        <td className='bordered1'>Players Accessories WelcomeKit:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>24</td>
                                        <td className='bordered1'>Management Jersey Sizes:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>25</td>
                                        <td className='bordered1'>Players Support Staff DA:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
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
                                        <td className='text-center bordered1'>26</td>
                                        <td className='bordered1' style={{ backgroundColor: "rgb(240,220,132)" }}>Sponsors Details:</td>
                                        <td className='text-center bordered1'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>a</td>
                                        <td className='bordered1'>Helmet Leading:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamLogoSubmission" className='hide '></label>
                                            <select className="teamLogoSubmission" id="teamLogoSubmission">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>b</td>
                                        <td className='bordered1'>Helmet Non-Leading:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamAnthemSong" className='hide '></label>
                                            <select className="teamAnthemSong" id="teamAnthemSong">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>c</td>
                                        <td className='bordered1'>Jersey Front Centre:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamAnthem" className='hide '></label>
                                            <select className="teamAnthem" id="teamAnthem">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>d</td>
                                        <td className='bordered1'>Jersey Front Right Chest:</td>
                                        <td className='text-center bordered1'>
                                            <label for="playersRetention" className='hide '></label>
                                            <select className="playersRetention" id="playersRetention">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>e</td>
                                        <td className='bordered1'>Jersey Back Top:</td>
                                        <td className='text-center bordered1'>
                                            <label for="selectionTrials" className='hide '></label>
                                            <select className="selectionTrials" id="selectionTrials">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>f</td>
                                        <td className='bordered1'>Jersey Leading Arm Top:</td>
                                        <td className='text-center bordered1'>
                                            <label for="teamSocialMedia" className='hide '></label>
                                            <select className="teamSocialMedia" id="teamSocialMedia">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>g</td>
                                        <td className='bordered1'>Jersey Leading Arm Bottom:</td>
                                        <td className='text-center bordered1'>
                                            <label for="photosVideosDrive" className='hide '></label>
                                            <select className="photosVideosDrive" id="photosVideosDrive">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>h</td>
                                        <td className='bordered1'>Jersey Non-Leading Arm Top:</td>
                                        <td className='text-center bordered1'>
                                            <label for="auctionShortlistedPlayersList" className='hide '></label>
                                            <select className="auctionShortlistedPlayersList" id="auctionShortlistedPlayersList">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>i</td>
                                        <td className='bordered1'>Jersey Non-Leading Arm Bottom :</td>
                                        <td className='text-center bordered1'>
                                            <label for="auctionRepresentatives" className='hide '></label>
                                            <select className="auctionRepresentatives" id="auctionRepresentatives">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>j</td>
                                        <td className='bordered1'>Trouser Left:</td>
                                        <td className='text-center bordered1'>
                                            <label for="auctionTeamUniform" className='hide '></label>
                                            <select className="auctionTeamUniform" id="auctionTeamUniform">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>k</td>
                                        <td className='bordered1'>Trouser Right:</td>
                                        <td className='text-center bordered1'>
                                            <label for="auctionMockDiscussion" className='hide '></label>
                                            <select className="auctionMockDiscussion" id="auctionMockDiscussion">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>27</td>
                                        <td className='bordered1' style={{ backgroundColor: "rgb(240,220,132)" }}>Hotel Room Requirements:</td>
                                        <td className='text-center bordered1'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>a</td>
                                        <td className='bordered1'>Chennai:</td>
                                        <td className='text-center bordered1'>
                                            <label for="fixtures" className='hide '></label>
                                            <select className="fixtures" id="fixtures">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>b</td>
                                        <td className='bordered1'>Salem:</td>
                                        <td className='text-center bordered1'>
                                            <label for="playersListAmount" className='hide '></label>
                                            <select className="playersListAmount" id="playersListAmount">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>c</td>
                                        <td className='bordered1'>Coimbatore:</td>
                                        <td className='text-center bordered1'>
                                            <label for="playersFullDatasCollection" className='hide '></label>
                                            <select className="playersFullDatasCollection" id="playersFullDatasCollection">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>d</td>
                                        <td className='bordered1'>Tirunelveli:</td>
                                        <td className='text-center bordered1'>
                                            <label for="playersDetailsACU" className='hide '></label>
                                            <select className="playersDetailsACU" id="playersDetailsACU">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>e</td>
                                        <td className='bordered1'>Madurai:</td>
                                        <td className='text-center bordered1'>
                                            <label for="supportStaffDetailsACU" className='hide '></label>
                                            <select className="supportStaffDetailsACU" id="supportStaffDetailsACU">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>28</td>
                                        <td className='bordered1' style={{ backgroundColor: "rgb(240,220,132)" }}>Match Ticket Requirements:</td>
                                        <td className='text-center bordered1'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>a</td>
                                        <td className='bordered1'>Chennai:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>b</td>
                                        <td className='bordered1' >Salem:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>c</td>
                                        <td className='bordered1' >Coimbatore:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>d</td>
                                        <td className='bordered1'>Tirunelveli:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>e</td>
                                        <td className='bordered1'>Madurai:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='text-center bordered1'>29</td>
                                        <td className='bordered1'>Fans T-Shirt ,Flags ,Boardings:</td>
                                        <td className='text-center bordered1'>
                                            <label for="hotelBookingsAdvanced" className='hide '></label>
                                            <select className="hotelBookingsAdvanced" id="hotelBookingsAdvanced">
                                                <option value="none">Open this select menu</option>
                                                <option value="No Change">No Change</option>
                                                <option value="To Change">To Change</option>
                                                <option value="Approval">Approval</option>
                                                <option value="Yet to Discuss">Yet to Discuss</option>
                                                <option value="Not Finalised">Not Finalised</option>
                                                <option value="To Prepare">To Prepare</option>
                                                <option value="To Decide">To Decide</option>

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
            </div>
        </div>
    )
}

export default OwnerChecklist