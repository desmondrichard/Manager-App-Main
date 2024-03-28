import React, { useState, useEffect } from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AccreadiationViewCard.css';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//excel:
import * as XLSX from 'xlsx';
//pdf:
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';


function AccreadiationViewCard() {
    const location = useLocation();
    console.log("location", location);

    //excel download:
    const handleDownloadExcel1 = () => {

        try {
            const data = location.state.showData;

            // Iterate through object properties and replace empty values with 'n/a'
            Object.keys(data).forEach(key => {
                if (data[key] === '' || data[key] === null || data[key] === undefined) {
                    data[key] = 'n/a';
                }
            });

            var wb = XLSX.utils.book_new();
            var ws = XLSX.utils.json_to_sheet([data]); //convert it into array else wont work

            XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
            XLSX.writeFile(wb, "MyExcelAccreadiation.xlsx");
        } catch (error) {
            console.error("Error fetching or processing data for Excel download", error);
        }

    };

    const [age, setAge] = React.useState('');

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
            <div className='headerBtn my-3 text-center align'>
                <h5>ACCREADIATION VIEW LIST</h5>
            </div>
            <div>
                <Row>
                    <Col lg={3} className='mb-2'>
                        <NavLink to='/accreadiationcards' className='navLinks'><Button variant="primary" style={{ fontWeight: 'bold' }}>Go Back</Button></NavLink>
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

                <Card className='my-3 m-auto' style={{ width: '90%', border: '2px outset #2E83D8' }}>
                    <Card.Body>
                        {/* Card:0 */}
                        <Card style={{ width: '100%' }} className='todoSubCard'>
                            <Card.Header className='todoHeader'>PLAYER ACCREADIATION</Card.Header>
                            <Card.Body>
                                <Row style={{ fontSize: '15px' }}>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Player ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataAccreadiationId ? location.state.showData.alldataAccreadiationId : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Player Name: <span style={{ fontWeight: '400' }}>{location.state.showData.playersName ? location.state.showData.playersName : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Player Designation: <span style={{ fontWeight: '400' }}>{location.state.showData.playersDesignation ? location.state.showData.playersDesignation : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Player Mobile No: <span style={{ fontWeight: '400' }}>{location.state.showData.playersMobilNo ? location.state.showData.playersMobilNo : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Player Email ID: <span style={{ fontWeight: '400' }}>{location.state.showData.playersEmailId ? location.state.showData.playersEmailId : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Player Duty Pass: <span style={{ fontWeight: '400' }}>{location.state.showData.playersDutyPass ? location.state.showData.playersDutyPass : 'N/A'}</span></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Card:1 */}
                        <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                            <Card.Header className='todoHeader'>STAFF ACCREADIATION</Card.Header>
                            <Card.Body>
                                <Row style={{ fontSize: '15px' }}>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Staff ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataAccreadiationId ? location.state.showData.alldataAccreadiationId : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Staff Name: <span style={{ fontWeight: '400' }}>{location.state.showData.staffName ? location.state.showData.staffName : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Staff Designation: <span style={{ fontWeight: '400' }}>{location.state.showData.staffDesignation ? location.state.showData.staffDesignation : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Staff Mobile No: <span style={{ fontWeight: '400' }}>{location.state.showData.staffMobilNo ? location.state.showData.staffMobilNo : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Staff Email ID: <span style={{ fontWeight: '400' }}>{location.state.showData.staffEmailId ? location.state.showData.staffEmailId : 'N/A'}</span></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Card:2 */}
                        <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                            <Card.Header className='todoHeader'>OWNERS ACCREADIATION</Card.Header>
                            <Card.Body>
                                <Row style={{ fontSize: '15px' }}>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Owner ID: <span style={{ fontWeight: '400' }}>-</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Owner Name: <span style={{ fontWeight: '400' }}>{location.state.showData.ownerName ? location.state.showData.ownerName : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Owner Designation: <span style={{ fontWeight: '400' }}>{location.state.showData.ownerDesignation ? location.state.showData.ownerDesignation : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Owner Mobile No: <span style={{ fontWeight: '400' }}>{location.state.showData.ownerMobilNo ? location.state.showData.ownerMobilNo : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Owner Email ID: <span style={{ fontWeight: '400' }}>{location.state.showData.ownerEmailId ? location.state.showData.ownerEmailId : 'N/A'}</span></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Card:3 */}
                        <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                            <Card.Header className='todoHeader'>FRANCHISE OFFICIALS</Card.Header>
                            <Card.Body>
                                <Row style={{ fontSize: '15px' }}>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Officials ID: <span style={{ fontWeight: '400' }}>-</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Officials Name: <span style={{ fontWeight: '400' }}>{location.state.showData.officialName ? location.state.showData.officialName : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Officials Designation: <span style={{ fontWeight: '400' }}>{location.state.showData.officialDesignation ? location.state.showData.officialDesignation : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Officials Mobile No: <span style={{ fontWeight: '400' }}>{location.state.showData.officialMobilNo ? location.state.showData.officialMobilNo : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Officials Email ID: <span style={{ fontWeight: '400' }}>{location.state.showData.officialEmailId ? location.state.showData.officialEmailId : 'N/A'}</span></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Card:4 */}
                        <Card style={{ width: '100%' }} className='todoSubCard mt-3'>
                            <Card.Header className='todoHeader'>FRANCHISE SPONSORS</Card.Header>
                            <Card.Body>
                                <Row style={{ fontSize: '15px' }}>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Sponsor ID: <span style={{ fontWeight: '400' }}>-</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Sponsor Name: <span style={{ fontWeight: '400' }}>{location.state.showData.sponsorName ? location.state.showData.sponsorName : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Sponsor Designation: <span style={{ fontWeight: '400' }}>{location.state.showData.sponsorDesignation ? location.state.showData.sponsorDesignation : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Sponsor Mobile No: <span style={{ fontWeight: '400' }}>{location.state.showData.sponsorMobilNo ? location.state.showData.sponsorMobilNo : 'N/A'}</span></div></Col>
                                    <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Sponsor Email ID: <span style={{ fontWeight: '400' }}>{location.state.showData.sponsorEmailId ? location.state.showData.sponsorEmailId : 'N/A'}</span></div></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default AccreadiationViewCard