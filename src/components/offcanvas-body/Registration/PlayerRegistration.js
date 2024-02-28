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
function PlayerRegistration(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Next Btn:
  const [parentkey, setParentKey] = useState("0");

  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
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

  function getPreviousKeyFromChild(k) {
    setParentKey(k);
  }

  const [age, setAge] = React.useState('');

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
      const response = await fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages');
      const data = await response.json();
      console.log("response", data);

      // Extract playerData from the response and replace empty values(cells) with "n/a":
      const playerData = data.map(item => {
        const sanitizedData = {};
        for (const key in item) {
          sanitizedData[key] = item[key] || 'n/a';
        }
        return sanitizedData;
      });

      var wb = XLSX.utils.book_new();
      var ws = XLSX.utils.json_to_sheet(playerData);

      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "MyExcel.xlsx");
    } catch (error) {
      console.error("Error fetching or processing data for Excel download", error);
    }
  };
  // Filter:
  const [search, setSearch] = useState('');

  function handleModalClose() {
    setShow(false);
    alert("going to close and form data is posted")
  }


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

          <Modal centered
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className='modal-xl'
          >
            <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
              <Modal.Title className='text-white'><h5>PLAYERS FORM</h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{parentkey}</p>
              <Accordion activeKey={parentkey}>
                {/* <RegistrationForm /> */}
                {/* Accordion:1 */}
                <PersonalInformation activationKey={parentkey} onActivationKeyChild={getKeyFromChild} />
                {/* Accordion:2 */}
                <ProficiencyForm activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                {/* Accordion:3 */}
                <KittingDetailsForm activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                {/* Accordion:4 */}
                <Iddetails activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                {/* Accordion:5 */}
                <BankAccountDetails activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                {/* Accordion:6 */}
                <FoodInformation activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                {/*Accordion:7 */}
                <Travelinformation activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                {/* Accordion:8 */}
                <RepresentationInfo activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                {/* Accordion:9 */}
                <EmergencyContact activationKey={parentkey} onActivationKeyChild={getKeyFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                {/* Accordion:10 */}
                <SocialMediaInfo activationKey={parentkey} onCloseModal={handleModalClose} onPreviousActivationKey={getPreviousKeyFromChild} />
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
                  .filter(item =>
                    search.length < 2 || (item.playerName && item.playerName.slice(0, 2).toLowerCase() === search.slice(0, 2))
                  )
                  .map((showData, i) => {
                    console.log("ShowData", showData.playerName);
                    return (
                      <tr className='text-center' key={i}>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.alldataplayerId ? showData.alldataplayerId : 'N/A'}</span></td>
                        {/* blob to image: */}
                        <td>
                          {/* check below image is able to be getted from DB since we added /* in front of image: */ }
                          <img
                            src={showData ? `data:image;base64/*,${showData.imageData}` :  //checks for data
                              require('./../../../assets/dummy_profile_img.png')}   //default img 
                            alt="img" style={{ width: '37px', height: '37px' }}
                            onError={(e) => {
                              e.target.src = require('./../../../assets/dummy_profile_img.png');
                            }}
                          />
                        </td>
                        <td className='td-parent' style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.playerName ? showData.playerName : 'N/A'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.displayName ? showData.displayName : 'N/A'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.mobileNo ? showData.mobileNo : 'N/A'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.emailId ? showData.emailId : 'N/A'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.specialization ? showData.specialization : 'N/A'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.jerseyNo ? showData.jerseyNo : 'N/A'}</span></td>
                        <td style={{ whiteSpace: 'nowrap' }}><span style={{ lineHeight: '2.4' }}>{showData.club ? showData.club : 'N/A'}</span></td>
                        <td className='d-flex'>
                          <NavLink state={{ showData }} to='/playerregister/playerdetails' className='navLinks' >
                            <Button variant="primary" className='me-1'><i className="bi bi-eye-fill"></i></Button>
                          </NavLink>
                          <Button variant="success" className='me-1'><i className="bi bi-pencil-square"></i></Button><Button variant="warning"><i className="bi bi-trash"></i></Button></td>
                      </tr>
                    )
                  })
              }
            </tbody>) : ('')
          // (<Skeleton variant="rectangular" width={100} height={240} style={{ marginTop: '22px' }} />)
        }
      </Table>
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
  const [modalShow, setModalShow] = React.useState(false);

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

