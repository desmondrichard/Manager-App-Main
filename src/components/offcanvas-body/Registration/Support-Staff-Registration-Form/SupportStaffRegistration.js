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
//
import TablePagination from '@mui/material/TablePagination';
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
        //after closing get api is called to show updated values in table:
        axios.get(`https://localhost:7097/GETalldata-Staffs`).then((response) => {
            console.log("GET Success", response.data)
            // Update the state with the new data
            setShowData(response.data)
        })
            .catch((error) => {
                console.log("Error Getting User", error)
            })
    }

    //hide save button:
    const [hideSaveButton, setHideSaveButton] = useState(false);

    //updateBtnClicked:
    const [updateClicked, setUpdateClicked] = useState(false)

    // reset modal after clicking update and then clicking add:


    // modal open:
    // const handleShow = () => setShow(true);
    const handleShow = () => {
        setKey("0");//to open from starting accordion
        setShowPutData({})//to  reset put data in form fields
        //buttons:
        setPreviousClk(false);//to disable previous btn
        setShowSkipBtn(false);//to disable skip btn
        setClearImageInPost(true);//for clearing image file
        setShowSaveBtn(true)//to show save btn
        setShowClearBtn(true)//to display clear btn
        setShow(true);

    };

    //state to open/hide progressbar: defaultly set as true:
    // const [showProgressBar, setShowProgressBar] = useState(true);

    //state open/hide save/update button: defaultly set as true:
    const [showSaveBtn, setShowSaveBtn] = useState(true);
    const [showUpdateBtn, setShowUpdateBtn] = useState(true);

    //to hide update btn in social media form alone:
    const [updateBtnShow, setUpdateBtnShow] = useState(false)


    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    //next btn:
    const [key, setKey] = useState("0")

    //clear image in post/put:
    const [clearImageInPost, setClearImageInPost] = useState(true);

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
    console.log("showData", showData)
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

    //previous btn clk:
    const toggleSaveUpdateButtons = (isPreviousButtonClicked) => {
        if (isPreviousButtonClicked) {
            showSaveBtn(false);
            showUpdateBtn(false);

        } else {
            showSaveBtn(true);
            showUpdateBtn(true);
        }
    };

    //
    const [showSkipBtn, setShowSkipBtn] = useState(false)

    const [showPutData, setShowPutData] = useState({})

    function handleUpdateButtonClick(data, id) {
        // console.log("progressBar", showProgressBar)
        // setShowProgressBar(false);//so progress bar wont open
        setKey("0");//to open from starting accordion
        setShowSkipBtn(true)//displayed
        setUpdateBtnShow(true)//displayed
        setShowSaveBtn(false)//so  Save/update button will be disabled
        setShowClearBtn(false)//so clear button will be disabled
        setPreviousClk(true)//displayed
        setClearImageInPost(false);
        console.log("StaffDataforPUT: ", data, "ID: ", id)
        setShowPutData(data)
        setShow(true) //to open modal onclicking update button
        setUpdateClicked(true) //set to true if update btn is clicked
    }

    // show/hide clear btn:
    const [showClearBtn, setShowClearBtn] = useState(true);

    //
    const [previousClk, setPreviousClk] = useState(false)

    function handlePrevClick(data) {
        setPreviousClk(data)
    }

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
                            {/* <p>{key}</p> */}
                            <Accordion activeKey={key} >
                                {/* Accordion:1 */}
                                <StaffPersonalInformation activationKey={key} onActivationKeyChild={getDataFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} toggleSaveUpdateButtons={toggleSaveUpdateButtons} updateClicked={updateClicked} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} clearImageInPost={clearImageInPost} />
                                {/* Accordion:2 */}
                                <StaffKittingDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} toggleSaveUpdateButtons={toggleSaveUpdateButtons} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} handlePrevClick={handlePrevClick} previousClk={previousClk} showSkipBtn={showSkipBtn} />
                                {/* Accordion:3 */}
                                <StaffIDCardDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} handlePrevClick={handlePrevClick} previousClk={previousClk} showSkipBtn={showSkipBtn} />
                                {/* Accordion:4 */}
                                <StaffBankAccountDetails activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} handlePrevClick={handlePrevClick} previousClk={previousClk} showSkipBtn={showSkipBtn} />
                                {/* Accordion:5 */}
                                <StaffFoodInformation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} handlePrevClick={handlePrevClick} previousClk={previousClk} showSkipBtn={showSkipBtn} />
                                {/* Accordion:6 */}
                                <StaffTravelInformation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} handlePrevClick={handlePrevClick} previousClk={previousClk} showSkipBtn={showSkipBtn} />
                                {/* Accordion:7 */}
                                <StaffPreviousRepresentation activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} handlePrevClick={handlePrevClick} previousClk={previousClk} showSkipBtn={showSkipBtn} />
                                {/* Accordion:8 */}
                                <StaffEmergencyContact activationKey={key} onActivationKeyChild={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} updateClicked={updateClicked} showClearBtn={showClearBtn} handlePrevClick={handlePrevClick} previousClk={previousClk} showSkipBtn={showSkipBtn} />
                                {/* Accordion:9 */}
                                <StaffSocialMediaInfo onCloseModal={handleModalClose} onPreviousActivationKey={getPreviousKeyFromChild} onShowData={handleShowData} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} handlePrevClick={handlePrevClick} updateBtnShow={updateBtnShow} previousClk={previousClk} />
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
                        <th>SPECIALIZATION</th>
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
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.supportStaffName ? showData.supportStaffName : '-'}</span></td>

                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.team ? showData.team : '-'}</span></td>

                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.alldataStaffId ? showData.alldataStaffId : '-'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.designation ? showData.designation : '-'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.mobileNo ? showData.mobileNo : '-'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.emailId ? showData.emailId : '-'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.specialization ? showData.specialization : '-'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.jerseyNo ? showData.jerseyNo : '-'}</span></td>
                                                    <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.club ? showData.club : '-'}</span></td>
                                                    <td className='d-flex'>
                                                        <NavLink state={{ showData }} to='/staffregister/staffdetails' className='navLinks' >
                                                            <Button variant="primary" className='me-1'><i className="bi bi-eye-fill"></i></Button>
                                                        </NavLink>

                                                        <Button variant="success" className='me-1'
                                                            onClick={() => handleUpdateButtonClick(showData, showData.alldataStaffId)}>
                                                            <i className="bi bi-pencil-square"></i></Button>

                                                        <Button onClick={() => deleteUser(showData.alldataStaffId)} variant="danger"><i className="bi bi-trash"></i></Button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>

                        ) : ('')
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
                //if data is present added pagination:
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

            <SupportStaffRegistration
                show={modalShow}
                onHide={() => setModalShow(false)}

            />
        </>
    );
}




<Apps />