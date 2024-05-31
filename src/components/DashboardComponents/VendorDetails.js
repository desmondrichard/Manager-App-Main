import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from 'react-bootstrap/Table';
import TablePagination from '@mui/material/TablePagination';
//excel:
import * as XLSX from 'xlsx';
//pdf:
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';

function VendorDetails() {
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
            const response = await fetch('');
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

    //paginator:
    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(6);

    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };

    // Btns:
    const [showplayersClothing, setShowPlayersClothing] = useState(false);
    const [showStaffClothing, setShowStaffClothing] = useState(true);
    const [showHelmetBag, setShowShowHelmetBag] = useState(false);

    function PlayersClothing() {
        setShowPlayersClothing(true);
        setShowStaffClothing(false);
        setShowShowHelmetBag(false);
    }

    function StaffClothing() {
        setShowPlayersClothing(false);
        setShowStaffClothing(true);
        setShowShowHelmetBag(false);
    }

    function HelmetBag() {
        setShowPlayersClothing(false);
        setShowStaffClothing(false);
        setShowShowHelmetBag(true);
    }
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList w-auto' style={{ whitespace: 'nowrap' }}>VENDOR DETAILS</div>
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
                <Button variant="light" className='AccreadBtns' onClick={PlayersClothing}>Players Clothing</Button>
                <Button variant="light" className='AccreadBtns' onClick={StaffClothing}>Staff Clothing</Button>
                <Button variant="light" className='AccreadBtns' onClick={HelmetBag}>Helmet & Bag</Button>
            </div>
            <>
                <main className='m-4 main'>
                    {(showplayersClothing && <h5>Players Clothing Details:</h5>) || (showStaffClothing && <h5>Support Staff Clothing Details:</h5>) || (showHelmetBag && <h5>Players Helmet/Bag Details:</h5>)}
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
                            showplayersClothing &&
                            <tbody className='table-light'>
                                <tr className='text-center'>
                                    <td>A</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>

                            </tbody>
                        }

                        {/* Franchise-Official Data: */}


                        {
                            showStaffClothing &&

                            <tbody className='table-light'>
                                <tr className='text-center'>
                                    <td>B</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        }

                        {/* Franchise-Sponsor Data: */}
                        {
                            showHelmetBag &&
                            <tbody className='table-light'>
                                <tr className='text-center'>
                                    <td>C</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        }
                    </Table>

                </main>
            </>

        </div>
    )
}

export default VendorDetails