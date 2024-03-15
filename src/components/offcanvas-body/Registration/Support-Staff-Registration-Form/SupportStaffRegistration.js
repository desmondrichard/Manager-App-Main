import React, { useState, useEffect } from 'react';
import './SupportStaffRegistration.css';
import Header from '../../../Header';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import PlayerRegistration from '../PlayerRegistration';
import StaffPersonalInformation from './Support-Staff-Modal-Forms/StaffPersonalInformation';
import StaffKittingDetails from './Support-Staff-Modal-Forms/StaffKittingDetails';
import StaffIDCardDetails from './Support-Staff-Modal-Forms/StaffIDCardDetails';
import StaffBankAccountDetails from './Support-Staff-Modal-Forms/StaffBankAccountDetails';
import StaffFoodInformation from './Support-Staff-Modal-Forms/StaffFoodInformation';
import StaffTravelInformation from './Support-Staff-Modal-Forms/StaffTravelInformation';
import StaffPreviousRepresentation from './Support-Staff-Modal-Forms/StaffPreviousRepresentation';
import StaffEmergencyContact from './Support-Staff-Modal-Forms/StaffEmergencyContact';
import StaffSocialMediaInfo from './Support-Staff-Modal-Forms/StaffSocialMediaInfo';
import NoDataImg from 'react-bootstrap/Image';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
//pdf:
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';
// download:
import * as XLSX from 'xlsx';
//search:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
function SupportStaffRegistration(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        Swal.fire({
            title: "Are you sure you want to close?",
            // text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Close it!"
        }).then((result) => {
            if (result.isConfirmed) {
                setShow(false);
            }
        });
    }

    const handleShow = () => setShow(true);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //next btn:
    const [key, setKey] = useState("0")

    //pdf:
    const [loader, setLoader] = useState(false);

    //Data Binding GET:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('https://localhost:7097/GETalldata-Staffs')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                // console.log("Success in getting data", data);
                setShowData(data);  // showData=data;
            })
    }, [])

    // download excel:
    const handleDownloadExcel = async () => {
        try {
            const response = await fetch('https://localhost:7097/GETalldata-Staffs');
            const data = await response.json();
            console.log("response", data);

            // Extract playerData from the response and replace empty values(cells) with "n/a":
            const playerData = data.map(item => {
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

            XLSX.utils.book_append_sheet(wb, ws, "StaffDataSheet");
            XLSX.writeFile(wb, "MyExcel.xlsx");
        } catch (error) {
            console.error("Error fetching or processing data for Excel download", error);
        }
    };

    //download pdf:

    const handleDownloadPdf = () => {
        const capture = document.querySelector('.tableHead');
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

    function getDataFromChild(k) {
        setKey(k);
    }

    function getPreviousKeyFromChild(k) {
        setKey(k);
    }
    //search:
    const [search, setSearch] = useState('');

    function handleModalClose() {
        setShow(false);
    }

    function handleShowData() {   
        //Call the GET method here:
        axios.get(`https://localhost:7097/GETalldata-Staffs`).then((response) => {
            console.log("GET Success", response.data)
            // Update the state with the new data
            setShowData(response.data)
        })
            .catch((error) => {
                console.log("Error Getting User", error)
            })
    }

    //DELETE Method:
    function deleteUser(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://localhost:7097/Delete-AlldataStaff/${id}`).then((response) => {
                    if (response.data.alldataThingsId === id) {   //check how to use alldataThingsId here 
                        console.log("Deletion Success", response.data)
                    }
                    console.log("res", response.data)

                    //Call the GET method here:
                    axios.get(`https://localhost:7097/GETalldata-Staffs`).then((response) => {
                        console.log("GET Success", response.data)
                        // Update the state with the new data
                        setShowData(response.data)
                    })
                        .catch((error) => {
                            console.log("Error Getting User", error)
                        })
                    //GET ends here

                    Swal.fire(
                        'Deleted!',
                        'The user has been deleted.',
                        'success'
                    )
                }).catch((error) => {
                    console.log("Error Deleting User", error)
                    Swal.fire(
                        'Error!',
                        'An error occurred while deleting the user.',
                        'error'
                    )
                })
            }
        })
    }

    // //UPDATE Method Using Axios:
    // function updateUser(showData, id) {
    //     console.log("Update Data", showData);
    //     axios
    //         .put(`http://52.172.96.40/ManagerApi/Update-AlldataAccreadiation/${id}`, showData)
    //         .then((response) => {
    //             if (response.data.alldataStaffId === id) {
    //                 console.log("Updation Success", response.data);
    //                 // Refresh the data or update the specific staff data in the state based on the response
    //             }
    //             console.log("res", response.data);
    //         })
    //         .catch((error) => {
    //             console.log("Error Updating User", error);
    //         });
    // }


    function handleUpdateButtonClick(showData, id) {
        console.log("Data: ", showData, "ID: ", id)
        setShow(true)
    }



    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList'>STAFFS LIST</div>

                {/* modal start: */}
                <>
                    <Button variant="primary" onClick={handleShow} className='mt-3 addPlayers'>
                        ADD STAFFS
                    </Button>

                    <Modal centered
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        className='modal-xl'
                    >
                        <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
                            <Modal.Title className='text-white'><h5>SUPPORT STAFFS FORM</h5></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{key}</p>
                            <Accordion activeKey={key} >
                                {/* Accordion:1 */}
                                <StaffPersonalInformation activationKey={key} onActivationKeyChild={getDataFromChild} updateMethodData={showData} />
                                {/* Accordion:2 */}
                                <StaffKittingDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:3 */}
                                <StaffIDCardDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:4 */}
                                <StaffBankAccountDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:5 */}
                                <StaffFoodInformation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:6 */}
                                <StaffTravelInformation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:7 */}
                                <StaffPreviousRepresentation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:8 */}
                                <StaffEmergencyContact activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                                {/* Accordion:9 */}
                                <StaffSocialMediaInfo onCloseModal={handleModalClose} onPreviousActivationKey={getPreviousKeyFromChild} onShowData={handleShowData} />
                            </Accordion>
                        </Modal.Body>

                        {/* Footer: */}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                {/* modal end: */}
                {/* Search,Select Components: */}
                <Container fluid className='py-2 mt-3' style={{ zIndex: '-100', backgroundColor: 'rgb(245, 242, 242)' }}>
                    <Row>
                        <Col xl={2} lg={2} md={2} sm={4} xs={4}>
                            {/* <SearchButton /> */}
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { maxWidth: '28ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            </Box>
                            <div>
                                <TextField style={{ zIndex: '0' }}
                                    id="filled-multiline-flexible"
                                    label="Search"
                                    multiline
                                    maxRows={5}
                                    variant="filled"
                                    placeholder='Ex:Admin'
                                    onChange={(e) => setSearch(e.target.value)}
                                    inputProps={{
                                        maxLength: 6,
                                    }}
                                />
                            </div>
                        </Col>
                        <Col xl={{ span: 2, offset: 8 }} lg={{ span: 2, offset: 7 }} md={{ span: 2, offset: 6 }} sm={{ span: 4, offset: 3 }} xs={4}>
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
                        <Col sm={1} xs={2}></Col>
                    </Row>
                </Container>
            </div>

            {/* Table Data Binding: */}

            <Table striped hover responsive className='tableHead my-3 table-dark'
            >
                <thead>
                    <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                        <th>STAFF IMAGE</th>
                        <th>STAFF NAME</th>
                        <th>TEAM NAME</th>
                        <th>STAFF ID</th>
                        <th>DESIGNATION</th>
                        <th>MOBILE NO</th>
                        <th>EMAIL ID</th>
                        <th>SEPCIALIZATION</th>
                        <th>JERSEY NO</th>
                        <th>CLUB</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                {
                    (showData) ?
                        (
                            <tbody className='table-light' >
                                {

                                    showData
                                        .filter(item =>
                                            search.length < 2 || (item.supportStaffName && item.supportStaffName.slice(0, 2).toLowerCase() === search.slice(0, 2))
                                        )
                                        .map((showData, i) => {
                                            console.log("showData", showData)
                                            return (
                                                <tr className='text-center' key={i}>
                                                    <td style={{ whiteSpace: 'nowrap' }}>
                                                        {/* check below image is able to be getted from DB since we added /* in front of image: */}
                                                        <img
                                                            src={showData ? `data:image/*;base64,${showData.imageData}` :  //checks for data
                                                                require('./../../../../assets/dummy_profile_img.png')}   //default img 
                                                            alt="img" style={{ width: '37px', height: '37px' }}
                                                            onError={(e) => {
                                                                e.target.src = require('./../../../../assets/dummy_profile_img.png');
                                                            }}
                                                        />
                                                    </td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.supportStaffName ? showData.supportStaffName : 'N/A'}</span></td>
                                                    <td></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.alldataStaffId ? showData.alldataStaffId : 'N/A'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.designation ? showData.designation : 'N/A'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.mobileNo ? showData.mobileNo : 'N/A'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.emailId ? showData.emailId : 'N/A'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.specialization ? showData.specialization : 'N/A'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.jerseyNo ? showData.jerseyNo : 'N/A'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.club ? showData.club : 'N/A'}</span></td>
                                                    <td className='d-flex'>
                                                        <NavLink state={{ showData }} to='/staffregister/staffdetails' className='navLinks' >
                                                            <Button variant="primary" className='me-1'><i className="bi bi-eye-fill"></i></Button>
                                                        </NavLink>

                                                        <Button variant="success" className='me-1' >
                                                            {/* onClick={() => handleUpdateButtonClick(showData, showData.alldataStaffId)}> */}
                                                            <i className="bi bi-pencil-square"></i></Button>

                                                        <Button onClick={() => deleteUser(showData.alldataStaffId)} variant="danger"><i className="bi bi-trash"></i></Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>) : ('')
                }
            </Table>
            {
                showData ? ('') : (<div className='text-center'>
                    <NoDataImg src={require('./../../../../assets/nodatafound.png')} className='noDataStaffImg'></NoDataImg>
                </div>)
            }
        </div>
    )
}

export default SupportStaffRegistration

function Apps() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <PlayerRegistration
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

<Apps />