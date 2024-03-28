import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './ThingsToDoViewCard.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import format from 'date-fns/format';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
//excel:
import * as XLSX from 'xlsx';
//pdf:
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ThingsToDoViewCard() {
    const location = useLocation();
    console.log("location", location)

    var formattedDate;
    //excel download:
    const handleDownloadExcel1 = () => {

        try {
            const data = location.state.showData;
            console.log("Data for ThingsTodoviewcard: ", data)

            // Exclude imageData from truncation
            const { imageData, ...dataWithoutImage } = data;


            // Iterate through object properties and replace empty values with 'n/a'
            Object.keys(dataWithoutImage).forEach(key => {
                if (dataWithoutImage[key] === '' || dataWithoutImage[key] === null || dataWithoutImage[key] === undefined) {
                    dataWithoutImage[key] = 'n/a';
                }

                // Check if the length of cell data exceeds a limit (e.g., 255 characters)
                if (typeof dataWithoutImage[key] === 'string' && dataWithoutImage[key].length > 32767) {
                    // Truncate the string if it exceeds the limit
                    dataWithoutImage[key] = dataWithoutImage[key].substring(0, 32767);
                }
            });

            //while truncating removes image in Card.Body

            var wb = XLSX.utils.book_new();
            var ws = XLSX.utils.json_to_sheet([dataWithoutImage]); //convert it into array else wont work

            XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
            XLSX.writeFile(wb, "MyExcelAccreadiation.xlsx");
        } catch (error) {
            console.error("Error fetching or processing data for Excel download", error);
        }

    };


    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };


    //pdf:
    const [loader, setLoader] = useState(false);

    const handleDownloadPdf1 = () => {
        // const capture = document.querySelector('.tableHead');
        setLoader(true);

        setTimeout(() => {
            html2canvas(document.body, {
                allowTaint: true,
                useCors: true
            })
                .then(function (canvas) {
                    const imgData = canvas.toDataURL('img/png');
                    const doc = new jsPDF('p', 'mm', 'a4');
                    doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), 0, 'FAST', 0);
                    doc.save('data.pdf');
                    setLoader(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoader(false);
                });
        }, 1000); // Delay of 1000 milliseconds (1 second)
    }

    return (
        <div>
            <Header />
            <div className='headerBtn my-3'>
                <h5>THINGS TODO DETAILS-LIST</h5>
            </div>
            <div>
                <Row>
                    <Col lg={3} className='mb-2'>
                        <NavLink to='/thingstodo' className='navLinks'><Button variant="primary" style={{ fontWeight: 'bold' }}>Go Back</Button></NavLink>
                    </Col>
                    <Col xl={{ span: 2, offset: 9 }} lg={{ span: 2, offset: 6 }} md={{ span: 2, offset: 8 }} sm={{ span: 4, offset: 7 }} xs={4}>
                        <div >
                            <FormControl variant="filled" sx={{ width: '26ch' }}>
                                <InputLabel id="demo-simple-select-filled-label" style={{ zIndex: '0' }}>Download</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={age}
                                    onChange={handleChange}

                                >
                                    <MenuItem value={10} onClick={() => handleDownloadExcel1()} style={{ whiteSpace: 'nowrap' }}>
                                        Download Excel
                                    </MenuItem>
                                    <MenuItem value={20}
                                        onClick={() => handleDownloadPdf1()}
                                        style={{
                                            whiteSpace: 'nowrap'
                                        }}>
                                        Download PDF
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Col>
                </Row>
            </div>

            <Card className='my-3 m-auto' style={{ width: '90%', border: '2px outset #2E83D8' }}>
                <Card.Body>
                    {/* Card:1 */}
                    <Card style={{ width: '100%' }} className='todoSubCard'>
                        <Card.Header className='todoHeader'>REPRESENTATIVES FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '15px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard' style={{ whiteSpace: 'nowrap' }}>Representatives Name: <span style={{ fontWeight: '400' }}>{location.state.showData.representatives ? location.state.showData.representatives : '-'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Team Name: <span style={{ fontWeight: '400' }}>{location.state.showData.name ? location.state.showData.name : '-'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Team Tshirt: <span style={{ fontWeight: '400' }}>{location.state.showData.teamTshirt ? location.state.showData.teamTshirt : '-'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Team Uniform: <span style={{ fontWeight: '400' }}>{location.state.showData.teamUniform ? location.state.showData.teamUniform : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:2 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>BRANDING FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '15px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Logo: <span style={{ fontWeight: '400' }}>{location.state.showData.teamLogo ? location.state.showData.teamLogo : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Flage: <span style={{ fontWeight: '400' }}>{location.state.showData.teamFlage ? location.state.showData.teamFlage : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Standees: <span style={{ fontWeight: '400' }}>{location.state.showData.standees ? location.state.showData.standees : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Side Flages: <span style={{ fontWeight: '400' }}>{location.state.showData.sideFlages ? location.state.showData.sideFlages : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Bus Booking: <span style={{ fontWeight: '400' }}>{location.state.showData.busBooking ? location.state.showData.busBooking : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:3 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>COACH THERAPIST FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '15px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Item Name: <span style={{ fontWeight: '400' }}>{location.state.showData.name ? location.state.showData.name : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Designation: <span style={{ fontWeight: '400' }}>{location.state.showData.designation ? location.state.showData.designation : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:4 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>FIXTURES FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '15px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Ground Name: <span style={{ fontWeight: '400' }}>{location.state.showData.groundName ? location.state.showData.groundName : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team A: <span style={{ fontWeight: '400' }}>{location.state.showData.teamA ? location.state.showData.teamA : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team B: <span style={{ fontWeight: '400' }}>{location.state.showData.teamB ? location.state.showData.teamB : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Date: <span style={{ fontWeight: '400' }}>{location.state.showData.dateTime ? formattedDate = format(new Date(location.state.showData.dateTime),
                                    'dd/MM/yyyy') : 'N/A'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:5 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>HOTEL ACCOMODATION FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '15px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>No Of Rooms: <span style={{ fontWeight: '400' }}>{location.state.showData.noOfRooms ? location.state.showData.noOfRooms : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>No Of People: <span style={{ fontWeight: '400' }}>{location.state.showData.noOfPeople ? location.state.showData.noOfPeople : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Check In: <span style={{ fontWeight: '400' }}>{location.state.showData.checkIn ? location.state.showData.checkIn : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Check Out: <span style={{ fontWeight: '400' }}>{location.state.showData.checkOut ? location.state.showData.checkOut : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>City Name: <span style={{ fontWeight: '400' }}>{location.state.showData.cityName ? location.state.showData.cityName : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Days Stayed: <span style={{ fontWeight: '400' }}>{location.state.showData.daysStayed ? location.state.showData.daysStayed : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>



                    {/* Card:6 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>MATCH EQUIPMENT FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '15px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Name: <span style={{ fontWeight: '400' }}>{location.state.showData.name ? location.state.showData.name : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Items: <span style={{ fontWeight: '400' }}>{location.state.showData.equipments ? location.state.showData.equipments : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Items Type: <span style={{ fontWeight: '400' }}>{location.state.showData.equipmentsType ? location.state.showData.equipmentsType : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:7 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>TRANSPORT FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '15px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Bus Type: <span style={{ fontWeight: '400' }}>{location.state.showData.busType ? location.state.showData.busType : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Date Of Journey: <span style={{ fontWeight: '400' }}>{location.state.showData.dateOfJourney ? location.state.showData.dateOfJourney : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Going To: <span style={{ fontWeight: '400' }}>{location.state.showData.goingTo ? location.state.showData.goingTo : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Leaving From: <span style={{ fontWeight: '400' }}>{location.state.showData.leavingFrom ? location.state.showData.leavingFrom : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Seats Booked: <span style={{ fontWeight: '400' }}>{location.state.showData.noOfSeatsBooked ? location.state.showData.noOfSeatsBooked : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Return Date: <span style={{ fontWeight: '400' }}>{location.state.showData.returnDate ? location.state.showData.returnDate : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Seat No: <span style={{ fontWeight: '400' }}>{location.state.showData.seatNumbers ? location.state.showData.seatNumbers : '-'}</span></div></Col>
                                {/* <Col md={4} className='todoCol'><div className='divCard'>Time Slot:<span style={{ fontWeight: '400' }}> {location.state.showData.timeSlot ? location.state.showData.timeSlot : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Item Type:<span style={{ fontWeight: '400' }}> -</span></div></Col> */}
                                <Col md={4} className='todoCol'><div className='divCard'>Travel Type: <span style={{ fontWeight: '400' }}>{location.state.showData.travelType ? location.state.showData.travelType : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
          
        </div >
    )
}

export default ThingsToDoViewCard