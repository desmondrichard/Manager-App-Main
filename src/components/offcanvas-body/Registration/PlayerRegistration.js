import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import './PlayerRegistration.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import PersonalInformation from './Player-Registration-Form/PersonalInformation';
import ProficiencyForm from './Player-Registration-Form/ProficiencyForm';
import KittingDetailsForm from './Player-Registration-Form/KittingDetailsForm';
import Iddetails from './Player-Registration-Form/Iddetails';
import BankAccountDetails from './Player-Registration-Form/BankAccountDetails';
import FoodInformation from './Player-Registration-Form/FoodInformation';
import Travelinformation from './Player-Registration-Form/Travelinformation';
import RepresentationInfo from './Player-Registration-Form/RepresentationInfo';
import EmergencyContact from './Player-Registration-Form/EmergencyContact';
import SocialMediaInfo from './Player-Registration-Form/SocialMediaInfo';
import NoDataImg from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
//excel:
import * as XLSX from 'xlsx';
//pdf:
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';
//Filter:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import './SearchButton.css';
import TablePagination from '@mui/material/TablePagination';
import PlayerAuctionInformation from './Player-Registration-Form/PlayerAuctionInformation';

function PlayerRegistration(props) {
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
    axios.get(`http://192.168.1.135/Manager-App-API/getAllPlayers`).then((response) => {
      console.log("GET Success", response.data)
      // Update the state with the new data
      setShowData(response.data)
    })
      .catch((error) => {
        console.log("Error Getting User", error)
      })
  }

  const handleShow = () => {
    //make setShowPutData as empty  object when handleShow is triggered when add players button is clicked
    // Reset state variables related to modal content
    setParentKey("9");//to open from starting accordion
    setShowPutData({})//to  reset put data in form fields
    //buttons:
    setPreviousClk(false);//to disable previous btn
    setShowSkipBtn(false);//to disable skip btn
    setClearImageInPost(true);//for clearing image file
    setShowSaveBtn(true)//to show save btn
    setShowClearBtn(true)//to display clear btn
    setShow(true);//to open modal on clicking add players btn
  };

  //Next Btn:
  const [parentkey, setParentKey] = useState("9");

  //PreviousBtn show/hide:
  const [previousClk, setPreviousClk] = useState(false)
  //SkipBtn show/hide:
  const [showSkipBtn, setShowSkipBtn] = useState(false)

  //clear image in post/put:
  const [clearImageInPost, setClearImageInPost] = useState(true);

  function handlePrevClick(data) {
    setPreviousClk(data)
  }

  //Data Binding GET:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.135/Manager-App-API/getAllPlayers')
      .then((data) => data.json())
      .then((data) => {
        console.log("data", data);
        // console.log("Success in getting players data", data);
        setShowData(data);  // showData=data;
      })
  }, [])

  function getKeyFromChild(k) {
    setParentKey(k);
    console.log("getkeyfromchild", k);
  }

  //

  function getPreviousKeyFromChild(k) {
    setParentKey(k);
  }

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
      const response = await fetch('http://192.168.1.135/Manager-App-API/getAllPlayers');
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

      XLSX.utils.book_append_sheet(wb, ws, "PlayerDataSheet");
      XLSX.writeFile(wb, "MyExcel.xlsx");
    } catch (error) {
      console.error("Error fetching or processing data for Excel download", error);
    }
  };


  function deleteUser(id) {
    console.log("alldataplayerid", id)
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
        axios.delete(`http://192.168.1.135/Manager-App-API/Delete-Alldataplayers/${id}`).then((response) => {
          if (response.data.alldataplayerId === id) {   //check how to use alldataThingsId here 
            console.log("Deletion Success", response.data)
          }
          console.log("res", response.data)

          //Call the GET method here:
          axios.get(`http://192.168.1.135/Manager-App-API/getAllPlayers`).then((response) => {
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

  function handleShowData() {
    //Call the GET method here:
    axios.get(`http://192.168.1.135/Manager-App-API/getAllPlayers`).then((response) => {
      console.log("GET Success", response.data)
      // Update the state with the new data
      setShowData(response.data)
    })
      .catch((error) => {
        console.log("Error Getting User", error)
      })
  }


  //updateBtnClicked:
  const [updateClicked, setUpdateClicked] = useState(false)
  //state open/hide save/update button: defaultly set as true:
  const [showSaveBtn, setShowSaveBtn] = useState(true);

  const [showPutData, setShowPutData] = useState({})

  //show/hide clear button:
  const [showClearBtn, setShowClearBtn] = useState(true)


  function handleUpdateButtonClick(data, id) {
    // console.log("progressBar", showProgressBar)
    // setShowProgressBar(false);//so progress bar wont open
    //
    setParentKey("0");
    setShowSaveBtn(false)//so  Save/update button will be disabled
    setShowClearBtn(false)//so clear button will be disabled
    setPreviousClk(true)//displayed
    setShowSkipBtn(true)//displayed
    setClearImageInPost(false);//to unclear image file
    console.log("StaffDataforPUT: ", data, "ID: ", id)
    setShowPutData(data)
    setShow(true) //to open modal onclicking update button
    setUpdateClicked(true) //set to true if update btn is clicked
  }

  // Filter:
  const [search, setSearch] = useState('');

  function handleModalClose() {
    setShow(false);
  }

  //
  const [activeKey, setActiveKey] = useState('0');


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

  //
  // const [phoneStyle, setPhoneStyle] = useState(false)
  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>PLAYERS LIST</div>

        {/* modal start: */}
        <>
          <Button variant="primary" onClick={handleShow} className='mt-3 addPlayers'>
            ADD PLAYERS
          </Button>

          <Modal
            // scrollable={true}
            centered
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className='modal-xl'
          >
            <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
              <Modal.Title className='text-white'><h5>PLAYERS FORM</h5></Modal.Title>
            </Modal.Header>
            {/* <Modal.Body className='modalBody' style={{ maxHeight: '60vh', overflowY: 'auto' }}> */}
            <Modal.Body className='modalBody'>
              {/* <p>{parentkey}</p> */}
              <Accordion activeKey={parentkey}>
                {/* <RegistrationForm /> */}
                {/* Accordion:1 */}
                {/* clearImageInPost-used to clear image in post method,updateClicked-when update  button is clicked in table*/}
                <PersonalInformation activationKey={parentkey} onActivationKeyChild={getKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} updateClicked={updateClicked} clearImageInPost={clearImageInPost} />
                {/* Accordion:2 */}
                <ProficiencyForm activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} />
                {/* Accordion:3 */}
                <KittingDetailsForm activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} />
                {/* Accordion:4 */}
                <Iddetails activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} />
                {/* Accordion:5 */}
                <BankAccountDetails activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} />
                {/* Accordion:6 */}
                <FoodInformation activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} />
                {/*Accordion:7 */}
                <Travelinformation activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} />
                {/* Accordion:8 */}
                <RepresentationInfo activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} />
                {/* Accordion:9 */}
                <EmergencyContact activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} updateClicked={updateClicked} />
                {/* Accordion:10 */}
                <PlayerAuctionInformation activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} showSkipBtn={showSkipBtn} updateClicked={updateClicked} />
                {/* Accordion:11 */}
                <SocialMediaInfo activationKey={parentkey} onCloseModal={handleModalClose} onPreviousActivationKey={getPreviousKeyFromChild} onShowData={handleShowData} showPutData={showPutData} showSaveBtn={showSaveBtn} showClearBtn={showClearBtn} previousClk={previousClk} handlePrevClick={handlePrevClick} />
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
        <Container fluid className='py-2 mt-3 bgColor' style={{ zIndex: '-100' }}>
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
            <th >PLAYER ID</th>
            <th >PLAYER IMAGE</th>
            <th>TEAM NAME</th>
            <th>PLAYER NAME</th>
            <th>DISPLAY NAME</th>
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
            (<tbody className='table-light'>
              {
                showData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter(item =>
                    search.length < 2 || (item.playerName && item.playerName.slice(0, 2).toLowerCase() === search.slice(0, 2))
                  )
                  .map((showData, i) => {
                    console.log("ShowDataPlayer", showData);
                    return (
                      <tr className='text-center' key={i}>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.alldataplayerId ? showData.alldataplayerId : '-'}</span></td>
                        {/* blob to image: */}
                        <td>
                          <img
                            src={showData ? `data:image/*;base64,${showData.imageData}` :  //checks for data
                              require('./../../../assets/dummy_profile_img.png')}   //default img 
                            alt="img" style={{ width: '37px', height: '37px' }}
                            onError={(e) => {
                              e.target.src = require('./../../../assets/dummy_profile_img.png');
                            }}
                          />

                        </td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.team ? showData.team : '-'}</span></td>
                        <td className='td-parent' style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.playerName ? showData.playerName : '-'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.displayName ? showData.displayName : '-'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.mobileNo ? showData.mobileNo : '-'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.emailId ? showData.emailId : '-'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.specialization ? showData.specialization : '-'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.jerseyNo ? showData.jerseyNo : '-'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.club ? showData.club : '-'}</span></td>
                        <td className='d-flex'>
                          <NavLink state={{ showData }} to='/playerregister/playerdetails' className='navLinks' >
                            <Button variant="primary" className='me-1'><i className="bi bi-eye-fill"></i></Button>
                          </NavLink>
                          <Button variant="success" className='me-1' onClick={() => handleUpdateButtonClick(showData, showData.alldataplayerId)}><i className="bi bi-pencil-square"></i></Button>
                          <Button onClick={() => deleteUser(showData.alldataplayerId)} variant="danger"><i className="bi bi-trash"></i></Button>

                        </td>
                      </tr>
                    )
                  })
              }
            </tbody>) : ('')
          // (<Skeleton variant="rectangular" width={100} height={240} style={{ marginTop: '22px' }} />)
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
          <NoDataImg src={require('./../../../assets/nodatafound.png')} ></NoDataImg>
        </div>)
      }
    </div>
  )
}

export default PlayerRegistration


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