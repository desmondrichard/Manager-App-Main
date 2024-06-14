import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from 'react-bootstrap/Table';
import './OrganizerSubmissionTab.css';

function OrganizerSubmissionTab() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Organiser" />
                    <Tab label="Franchise" />
                    <Tab label="Purchase" />
                    <Tab label="Staff Equipments" />
                    <Tab label="Welcome Kit" />
                    <Tab label="Manager CheckList" />
                    <Tab label="Owners CheckList" />
                </Tabs>

                {/* Tab:1 */}
                {value === 0 && (
                    <Box sx={{ p: 3 }}>
                        <h5>Organiser Submission:-</h5>
                        <Table bordered hover style={{ border: '1px solid black' }} size="lg">

                            <tbody style={{ border: '1px solid black' }}>
                                <tr>
                                    <td className='text-center tableBorder1'>Franchise Logo:</td>
                                    <td className='text-center'>
                                        <label for="FranchiseLogo" className='hide'></label>
                                        <select className="teamNameSubmission" id="FranchiseLogo">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Hotel Bookings:</td>
                                    <td className='text-center'>
                                        <label for="hotelBooking" className='hide'></label>
                                        <select className="hotelBooking" id="hotelBooking">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Practice Schedule:</td>
                                    <td className='text-center'>
                                        <label for="practiseSchedule" className='hide'></label>
                                        <select className="practiseSchedule" id="practiseSchedule">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Accreditation Cards::</td>
                                    <td className='text-center'>
                                        <label for="AccredCards" className='hide'></label>
                                        <select className="AccredCards" id="AccredCards">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Team Flags:</td>
                                    <td className='text-center'>
                                        <label for="teamFlags" className='hide'></label>
                                        <select className="teamFlags" id="teamFlags">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Playing Kit Approval:</td>
                                    <td className='text-center'>
                                        <label for="playKit" className='hide'></label>
                                        <select className="playKit" id="playKit">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>LED Dugout & Perimeter:</td>
                                    <td className='text-center'>
                                        <label for="ledDugout" className='hide'></label>
                                        <select className="ledDugout" id="ledDugout">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Sponsor Logos:</td>
                                    <td className='text-center'>
                                        <label for="sponsorLogo" className='hide'></label>
                                        <select className="sponsorLogo" id="sponsorLogo">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Franchise Anthem:</td>
                                    <td className='text-center'>
                                        <label for="fAnthem" className='hide'></label>
                                        <select className="fAnthem" id="fAnthem">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Ground Matt Approval:</td>
                                    <td className='text-center'>
                                        <label for="groundMat" className='hide'></label>
                                        <select className="groundMat" id="groundMat">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Players Photo Shoot:</td>
                                    <td className='text-center'>
                                        <label for="photoShoot" className='hide'></label>
                                        <select className="photoShoot" id="photoShoot">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Toss Representatives:</td>
                                    <td className='text-center'>
                                        <label for="tossRep" className='hide'></label>
                                        <select className="tossRep" id="tossRep">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Ticket Request:</td>
                                    <td className='text-center'>
                                        <label for="tktRequest" className='hide'></label>
                                        <select className="tktRequest" id="tktRequest">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Jersey Submission:</td>
                                    <td className='text-center'>
                                        <label for="jerseySubmission" className='hide'></label>
                                        <select className="jerseySubmission" id="jerseySubmission">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Players Contract:</td>
                                    <td className='text-center'>
                                        <label for="playersContract" className='hide'></label>
                                        <select className="playersContract" id="playersContract">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Box>
                )}

                {/* Tab:2 */}
                {value === 1 && (
                    <Box sx={{ p: 3 }}>
                        <h5>Franchise ToDo:-</h5>
                        <Table bordered hover style={{ border: '1px solid black' }} size="lg">

                            <tbody style={{ border: '1px solid black' }}>
                                <tr>
                                    <td className='text-center tableBorder1'>Selection Trials:</td>
                                    <td className='text-center'>
                                        <label for="selectionTrials" className='hide'></label>
                                        <select className="selectionTrials" id="selectionTrials">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Auction:</td>
                                    <td className='text-center'>
                                        <label for="Auction" className='hide'></label>
                                        <select className="Auction" id="Auction">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Data Collection:</td>
                                    <td className='text-center'>
                                        <label for="dataCollection" className='hide'></label>
                                        <select className="dataCollection" id="dataCollection">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Fixtures:</td>
                                    <td className='text-center'>
                                        <label for="Fixtures" className='hide'></label>
                                        <select className="Fixtures" id="Fixtures">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Hotel Booking:</td>
                                    <td className='text-center'>
                                        <label for="hotelBook" className='hide'></label>
                                        <select className="hotelBook" id="hotelBook">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Team Practice Schedule Request:</td>
                                    <td className='text-center'>
                                        <label for="teamPractice" className='hide'></label>
                                        <select className="teamPractice" id="teamPractice">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Franchise Ticket Request:</td>
                                    <td className='text-center'>
                                        <label for="frachiseTktRequest" className='hide'></label>
                                        <select className="frachiseTktRequest" id="frachiseTktRequest">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Players Replacement Form:</td>
                                    <td className='text-center'>
                                        <label for="playersReplacementForm" className='hide'></label>
                                        <select className="playersReplacementForm" id="playersReplacementForm">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>TNPL Official Logo:</td>
                                    <td className='text-center'>
                                        <label for="logo" className='hide'></label>
                                        <select className="logo" id="logo">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Franchise Team Logo:</td>
                                    <td className='text-center'>
                                        <label for="teamLogo" className='hide'></label>
                                        <select className="teamLogo" id="teamLogo">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Franchise Anthems:</td>
                                    <td className='text-center'>
                                        <label for="anthem" className='hide'></label>
                                        <select className="anthem" id="anthem">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Team Flag:</td>
                                    <td className='text-center'>
                                        <label for="teamFlag" className='hide'></label>
                                        <select className="teamFlag" id="teamFlag">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>LED Dugout and Perimeter:</td>
                                    <td className='text-center'>
                                        <label for="ledDugout" className='hide'></label>
                                        <select className="ledDugout" id="ledDugout">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>



                            </tbody>
                        </Table>
                    </Box>
                )}

                {/* Tab:3 */}
                {value === 2 && (
                    <Box sx={{ p: 3 }}>
                        <h5>Purchase Details:-</h5>
                        <Table bordered hover style={{ border: '1px solid black' }} size="lg">

                            <tbody style={{ border: '1px solid black' }}>
                                <tr>
                                    <td className='text-center tableBorder1'>Auction Tshirts:</td>
                                    <td className='text-center'>
                                        <label for="auctionTshirts" className='hide'></label>
                                        <select className="auctionTshirts" id="auctionTshirts">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Gettogether Tshirts:</td>
                                    <td className='text-center'>
                                        <label for="gettotether" className='hide'></label>
                                        <select className="gettotether" id="gettotether">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Match Jersey:</td>
                                    <td className='text-center'>
                                        <label for="matchJersey" className='hide'></label>
                                        <select className="matchJersey" id="matchJersey">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Match Trousers:</td>
                                    <td className='text-center'>
                                        <label for="matchTrousers" className='hide'></label>
                                        <select className="matchTrousers" id="matchTrousers">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Training Jersey:</td>
                                    <td className='text-center'>
                                        <label for="trainingJersey" className='hide'></label>
                                        <select className="trainingJersey" id="trainingJersey">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Training Trousers:</td>
                                    <td className='text-center'>
                                        <label for="trainingTrousers" className='hide'></label>
                                        <select className="trainingTrousers" id="trainingTrousers">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Travel Tshirts:</td>
                                    <td className='text-center'>
                                        <label for="travelTshirts" className='hide'></label>
                                        <select className="travelTshirts" id="travelTshirts">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Franchise Jersey:</td>
                                    <td className='text-center'>
                                        <label for="fJersey" className='hide'></label>
                                        <select className="fJersey" id="fJersey">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Fans Jersey:</td>
                                    <td className='text-center'>
                                        <label for="fanJersey" className='hide'></label>
                                        <select className="fanJersey" id="fanJersey">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Teams Flags:</td>
                                    <td className='text-center'>
                                        <label for="teamFlags" className='hide'></label>
                                        <select className="teamFlags" id="teamFlags">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Fans Flags:</td>
                                    <td className='text-center'>
                                        <label for="fanFlags" className='hide'></label>
                                        <select className="fanFlags" id="fanFlags">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Box>
                )}

                {/* Tab:4 */}
                {value === 3 && (
                    <Box sx={{ p: 3 }}>
                        <h5>Staff Equipments:-</h5>
                        <Table bordered hover style={{ border: '1px solid black' }} size="lg">

                            <tbody style={{ border: '1px solid black' }}>
                                <tr>
                                    <td className='text-center tableBorder1'>Physio Equipment:</td>
                                    <td className='text-center'>
                                        <label for="physioEquipment" className='hide'></label>
                                        <select className="physioEquipment" id="physioEquipment">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Trainer Equipment:</td>
                                    <td className='text-center'>
                                        <label for="trainerEquipment" className='hide'></label>
                                        <select className="trainerEquipment" id="trainerEquipment">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Coach Equipment:</td>
                                    <td className='text-center'>
                                        <label for="coachEquipment" className='hide'></label>
                                        <select className="coachEquipment" id="coachEquipment">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Video Analyst Equipment:</td>
                                    <td className='text-center'>
                                        <label for="videoAnalystEquipment" className='hide'></label>
                                        <select className="videoAnalystEquipment" id="videoAnalystEquipment">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Logistics Material:</td>
                                    <td className='text-center'>
                                        <label for="logistics" className='hide'></label>
                                        <select className="logistics" id="logistics">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Masseur Material:</td>
                                    <td className='text-center'>
                                        <label for="masseur" className='hide'></label>
                                        <select className="masseur" id="masseur">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Kokkaburra Turf:</td>
                                    <td className='text-center'>
                                        <label for="kokkaburaTurf" className='hide'></label>
                                        <select className="kokkaburaTurf" id="kokkaburaTurf">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>SG Test:</td>
                                    <td className='text-center'>
                                        <label for="sg" className='hide'></label>
                                        <select className="sg" id="sg">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>


                            </tbody>
                        </Table>
                    </Box>
                )}

                {/* Tab:5 */}
                {value === 4 && (
                    <Box sx={{ p: 3 }}>
                        <h5>Welcome Kit Details:-</h5>
                        <Table bordered hover style={{ border: '1px solid black' }} size="lg">

                            <tbody style={{ border: '1px solid black' }}>
                                <tr>
                                    <td className='text-center tableBorder1'>Diary:</td>
                                    <td className='text-center'>
                                        <label for="diary" className='hide'></label>
                                        <select className="diary" id="diary">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Towels:</td>
                                    <td className='text-center'>
                                        <label for="towels" className='hide'></label>
                                        <select className="towels" id="towels">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Key Chain:</td>
                                    <td className='text-center'>
                                        <label for="keychain" className='hide'></label>
                                        <select className="keychain" id="keychain">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Folders:</td>
                                    <td className='text-center'>
                                        <label for="folders" className='hide'></label>
                                        <select className="folders" id="folders">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Water Bottle:</td>
                                    <td className='text-center'>
                                        <label for="waterBottle" className='hide'></label>
                                        <select className="waterBottle" id="waterBottle">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Mementos:</td>
                                    <td className='text-center'>
                                        <label for="mementos" className='hide'></label>
                                        <select className="mementos" id="mementos">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Markers:</td>
                                    <td className='text-center'>
                                        <label for="markers" className='hide'></label>
                                        <select className="markers" id="markers">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>
                                <tr>
                                    <td className='text-center tableBorder1'>Toss Mementos:</td>
                                    <td className='text-center'>
                                        <label for="tossMementos" className='hide'></label>
                                        <select className="tossMementos" id="tossMementos">
                                            <option value="none">Open this select menu</option>
                                            <option value="Shared">Shared</option>
                                            <option value="Yet to Share">Yet to Share</option>
                                            <option value="Received">Received</option>
                                            <option value="Yet to Receive">Yet to Receive</option>
                                            <option value="Partially Received">Partially Received</option>
                                            <option value="On Process">On Process</option>
                                            <option value="Submitted">Submitted</option>
                                            <option value="Not Yet Submitted">Not Yet Submitted</option>
                                            <option value="Booked">Booked</option>
                                            <option value="Completed">Completed</option>
                                            <option value="Partially Completed">Partially Completed</option>
                                            <option value="Ready">Ready</option>
                                            <option value="Not Ready">Not Ready</option>

                                        </select>
                                    </td>
                                    <td className='text-center tableBorder1'>🟢</td>
                                </tr>


                            </tbody>
                        </Table>
                    </Box>
                )}

                {/* Tab:6 */}
            </Box>

        </div>
    )
}

export default OrganizerSubmissionTab