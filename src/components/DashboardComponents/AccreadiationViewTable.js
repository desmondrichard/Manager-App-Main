import React, { useEffect, useState } from 'react';
import './AccreadiationViewTable.css';
import Header from '../Header';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from '@mui/material/Select';
import Table from 'react-bootstrap/Table';
import TablePagination from '@mui/material/TablePagination';
//excel:
import * as XLSX from 'xlsx';
//pdf:
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';

function AccreadiationViewTable() {

    //pdf:
    const [loader, setLoader] = useState(false);

    const handleDownloadPdf = () => {
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

    //excel:
    const handleDownloadExcel = async () => {
        try {
            const response = await fetch('https://localhost:7097/AllDataAccreadiation');
            const data = await response.json();
            console.log("response", data);

            // Extract playerData from the response and replace empty values(cells) with "n/a":
            const playerData = data.accreadiationData.map(item => {
                const sanitizedData = {};
                for (const key in item) {
                    let cellData = item[key] || 'n/a';
                    // Check if the cellData exceeds the maximum length:
                    if (cellData.length > 32767) {
                        console.warn(`Cell data for key ${key} exceeds 32767 characters.`);
                        // Truncate the cellData to fit within the limit
                        cellData = cellData.substring(0, 32767);
                    }
                    sanitizedData[key] = cellData;
                }

                return sanitizedData;
            });

            var wb = XLSX.utils.book_new();
            var ws = XLSX.utils.json_to_sheet(playerData);

            XLSX.utils.book_append_sheet(wb, ws, "AccreadiationDataSheet");
            XLSX.writeFile(wb, "MyExcel.xlsx");
        } catch (error) {
            console.error("Error fetching or processing data for Excel download", error);
        }
    };

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    //Data Binding:GET Method using Fetch API
    const [showData, setShowData] = useState(null);

    useEffect(() => {
        fetch('https://localhost:7097/AllDataAccreadiation')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                console.log("Success in getting Accreadiation data", data.accreadiationData);
                setShowData(data.accreadiationData);  // showData=data;
            })
    }, [])

    //paginator:
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Btns:
    const [showOwner, setShowOwner] = useState(true);
    const [showOfficial, setShowOfficial] = useState(false);
    const [showFranchise, setShowFranchise] = useState(false);

    function Owner() {
        setShowOwner(true);
        setShowOfficial(false);
        setShowFranchise(false);
    }

    function Official() {
        setShowOwner(false);
        setShowOfficial(true);
        setShowFranchise(false);
    }

    function Sponsor() {
        setShowOwner(false);
        setShowOfficial(false);
        setShowFranchise(true);
    }

    return (
        <>
            <Header />
            <div className='text-center'>
                <div className='playersList w-auto' style={{ whitespace: 'nowrap' }}>MANAGEMENT DETAILS</div>
            </div>
            <Row className='mt-2'>
                <Col xs={4} style={{ marginTop: '-5px' }}>
                    <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                        Go Back
                    </Button>
                    </NavLink>
                </Col>
                <Col xs={{ offset: 2, span: 6 }} md={{ offset: 5, span: 2 }} >
                    <div >
                        <FormControl variant="filled" sx={{ width: '26ch' }}>
                            <InputLabel id="demo-simple-select-filled-label" style={{ zIndex: '0' }}>Download</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={age}
                                onChange={handleChange}

                            >
                                <MenuItem value={10} onClick={() => handleDownloadExcel()} style={{ whiteSpace: 'nowrap' }}>
                                    Download Excel
                                </MenuItem>
                                <MenuItem value={20} onClick={() => handleDownloadPdf()} style={{
                                    whiteSpace: 'nowrap'
                                }}>
                                    Download PDF
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Col>
            </Row>
            <div className='text-center'>
                <Button variant="light" className='AccreadBtns' onClick={Owner}>Owners</Button>
                <Button variant="light" className='AccreadBtns' onClick={Official}>Franchise-Official</Button>
                <Button variant="light" className='AccreadBtns' onClick={Sponsor}>Franchise-Sponsor</Button>
            </div>
            <div>
                <main className='m-4 main'>

                    {(showOwner && <h5>Owners Data:</h5>) || (showOfficial && <h5>Franchise-Official Data:</h5>) || (showFranchise && <h5>Franchise-Sponsor Data:</h5>)}
                    <Table hover bordered responsive>
                        <thead>
                            <tr style={{ backgroundColor: 'red', whiteSpace: 'nowrap' }}>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>ID Card No</th>
                                <th>Mobile No</th>
                                <th> Email ID</th>
                                <th> Father's Name</th>
                                <th>DOB</th>
                                <th>Age</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        {/* Owner Data: */}
                        {
                            showData && showOwner && showData.map((showData, i) => {
                                return (
                                    <tbody className='table-light' key={i}>
                                        <tr className='text-center'>
                                            <td>{i + 1}</td>
                                            <td>{showData.ownerName ? showData.ownerName : "-"}</td>
                                            <td>-</td>
                                            <td>{showData.ownerMobilNo ? showData.ownerMobilNo : "-"}</td>
                                            <td>{showData.ownerEmailId ? showData.ownerEmailId : "-"}</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>

                                    </tbody>
                                )
                            })
                        }
                        {/* Franchise-Official Data: */}
                        {
                            showData && showOfficial && showData.map((showData, i) => {
                                return (
                                    <tbody className='table-light' key={i}>
                                        <tr className='text-center'>
                                            <td>{i + 1}</td>
                                            <td>{showData.officialName ? showData.officialName : "-"}</td>
                                            <td>-</td>
                                            <td>{showData.officialMobilNo ? showData.officialMobilNo : "-"}</td>
                                            <td>{showData.officialEmailId ? showData.officialEmailId : "-"}</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>

                                    </tbody>
                                )
                            })
                        }
                        {/* Franchise-Sponsor Data: */}
                        {
                            showData && showFranchise && showData.map((showData, i) => {
                                return (
                                    <tbody className='table-light' key={i}>
                                        <tr className='text-center'>
                                            <td>{i + 1}</td>
                                            <td>{showData.sponsorName ? showData.sponsorName : "-"}</td>
                                            <td>-</td>
                                            <td>{showData.sponsorMobilNo ? showData.sponsorMobilNo : "-"}</td>
                                            <td>{showData.sponsorEmailId ? showData.sponsorEmailId : "-"}</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>

                                    </tbody>
                                )
                            })
                        }

                    </Table>

                    {
                        showData && showData.length > 0 && (
                            <TablePagination
                                component="div"
                                count={showData.length}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                rowsPerPageOptions={[2, 6, 8]}
                            />
                        )
                    }
                    {
                        showData ? ('') : (<div className='text-center'>
                            No Data
                        </div>)
                    }

                </main>
            </div>
        </>
    )
}

export default AccreadiationViewTable