import React, { useState, useEffect } from 'react';
import './ThingsToDo.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tab, Tabs } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import format from 'date-fns/format';
import Skeleton from '@mui/material/Skeleton';
// 
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
function ThingsTodo() {
  let formattedDate = "";

  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/register/AllDataThingsToDo')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        // console.log("Success in getting data", data);
        setShowData(data);  // showData=data;
      })
  }, [])

  //
  const handleClick1 = (id) => {
    console.log("Branding:", id)
  }

  const handleClick2 = (id) => {
    console.log("Representative", id)
  }

  //
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //pdf:
  const [loader, setLoader] = useState(false);

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


  //excel:
  const handleDownloadExcel = async () => {
    try {
      const response = await fetch('http://192.168.1.192/ManagerApi/register/AllDataThingsToDo');
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

  return (
    <>
      <Header />
      <div className='text-center'>
        <div className='playersList'>THINGS TODO LIST</div>

        <NavLink to='/thingstodo/thingstodoaddlist' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
          ADD LIST
        </Button>
        </NavLink>

        <Container fluid className='py-2 mt-4 bg-light' style={{ zIndex: '-100' }}>
          <Row>
            <Col xl={{ span: 2, offset: 10 }} lg={{ span: 2, offset: 9 }} md={{ span: 4, offset: 8 }} xs={4}>
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
        </Container>
      </div>

      {/* Tabs: start*/}
      <Container fluid className='p-0 m-0'>
        <Row style={{ margin: '0px' }} className=''>
          <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab'>
            {/* Tab:0 */}
            <Tab eventKey='tab-0' title='BRANDING'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>TEAM LOGO</th>
                          <th className='font'>TEAM FLAGE</th>
                          <th className='font'>SIDE FLAGES</th>
                          <th className='font'>STANDEES</th>
                          <th className='font'>BUS BRANDING</th>
                          <th className='font'>BUS BOOKING</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>
                      <tbody className='table-light' style={{ fontSize: '13px' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.teamLogo ? showData.teamLogo : 'N/A'}</td>
                                <td>{showData.teamFlage ? showData.teamFlage : 'N/A'}</td>
                                <td>{showData.sideFlages ? showData.sideFlages : 'N/A'}</td>
                                <td>{showData.standees ? showData.standees : 'N/A'}</td>
                                <td>{showData.busBranding ? showData.busBranding : 'N/A'}</td>
                                <td>{showData.busBooking ? showData.busBooking : 'N/A'}</td>
                                <td className='btnPadding' style={{ whiteSpace: 'nowrap' }}>
                                  <NavLink to='/thingstodo/thingstodoviewcard' className='navLinks'>
                                    <Button variant="primary" style={{ marginTop: '-7px' }} className='marginRight'
                                      onClick={() => handleClick1(showData.alldataThingsId)}
                                    ><i className="bi bi-eye-fill"></i></Button>
                                  </NavLink>
                                  <Button variant="primary" style={{ marginTop: '-7px' }} ><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>

                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>

            {/* Tab:1 */}
            <Tab eventKey='tab-1' title='REPRESENTATIVE'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>REPRESENTATIVES</th>
                          <th className='font'>TEAM UNIFORM</th>
                          <th className='font'>TEAM TSHIRT</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.representatives ? showData.representatives : 'N/A'}</td>
                                <td>{showData.teamUniform ? showData.teamUniform : 'N/A'}</td>
                                <td>{showData.teamTshirt ? showData.teamTshirt : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  {/* <NavLink to='/thingstodoviewcard' className='navLinks'> */}
                                  <Button variant="primary" style={{ marginTop: '-7px' }} className='marginRight' onClick={() => handleClick2(showData.alldataThingsId)}><i className="bi bi-eye-fill"></i></Button>
                                  {/* </NavLink>  */}
                                  <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>


                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>

            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='COACH THERAPIST'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>NAME</th>
                          <th className='font'>DESIGNATION</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px' }} >
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.name ? showData.name : 'N/A'}</td>
                                <td>{showData.designation ? showData.designation : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>


                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>

            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='FIXTURES'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>DATE</th>
                          <th className='font'>GROUND NAME</th>
                          <th className='font'>TEAM A</th>
                          <th className='font'>TEAM B</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.dateTime ? formattedDate = format(
                                  new Date(showData.dateTime),
                                  'dd/MM/yyyy'
                                ) : 'N/A'}</td>
                                <td>{showData.groundName ? showData.groundName : 'N/A'}</td>
                                <td>{showData.teamA ? showData.teamA : 'N/A'}</td>
                                <td>{showData.teamB ? showData.teamB : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>


                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>
            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='HOTEL ACCOMODATION'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark tableSticky'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>HOTEL NAME</th>
                          <th className='font'>CITY NAME</th>
                          <th className='font'>NO OF ROOMS</th>
                          <th className='font'>ROOM NO</th>
                          <th className='font'>CHECK IN</th>
                          <th className='font'>CHECK OUT</th>
                          <th className='font'>DAYS STAYED</th>
                          <th className='font'>NO OF PEOPLE</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.hotelName ? showData.hotelName : 'N/A'}</td>
                                <td>{showData.cityName ? showData.cityName : 'N/A'}</td>
                                <td>{showData.noOfRooms ? showData.noOfRooms : 'N/A'}</td>
                                <td>{showData.roomsNo ? showData.roomsNo : 'N/A'}</td>
                                <td>{showData.checkIn ? showData.checkIn : 'N/A'}</td>
                                <td>{showData.checkOut ? showData.checkOut : 'N/A'}</td>
                                <td>{showData.daysStayed ? showData.daysStayed : 'N/A'}</td>
                                <td>{showData.noOfPeople ? showData.noOfPeople : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }

                      </tbody>

                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>
            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='MATCH EQUIPMENT'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>NAME</th>
                          <th className='font'>EQUIPMENTS</th>
                          <th className='font'>EQUIPMENTS TYPE</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.name ? showData.name : 'N/A'}</td>
                                <td>{showData.equipments ? showData.equipments : 'N/A'}</td>
                                <td>{showData.equipmentsType ? showData.equipmentsType : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )

                          })
                        }
                      </tbody>


                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>
            {/* Tab:6 */}
            <Tab eventKey='tab-6' title='TRANSPORT FORM'>
              {
                showData ?
                  (
                    <Table striped hover responsive className='tableHead table-dark'
                    >
                      <thead>
                        <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                          <th className='font'>S.NO</th>
                          <th className='font'>LEAVING FROM</th>
                          <th className='font'>GOING TO</th>
                          <th className='font'>DATE OF JOURNEY</th>
                          <th className='font'>RETURN DATE</th>
                          <th className='font'>BUS TYPE</th>
                          <th className='font'>TRAVEL TYPE</th>
                          <th className='font'>TRANSPORT TYPE</th>
                          <th className='font'>TIME SLOT</th>
                          <th className='font'>NO OF SEATS BOOKED</th>
                          <th className='font'>SEAT NO</th>
                          <th className='font' style={{ whiteSpace: 'nowrap' }}>ACTION</th>
                        </tr>
                      </thead>

                      <tbody className='table-light' style={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
                        {
                          showData.map((showData, i) => {
                            return (
                              <tr className='text-center font' key={i}>
                                <td>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</td>
                                <td>{showData.leavingFrom ? showData.leavingFrom : 'N/A'}</td>
                                <td>{showData.goingTo ? showData.goingTo : 'N/A'}</td>
                                <td>{showData.dateOfJourney ? showData.dateOfJourney : 'N/A'}</td>
                                <td>{showData.returnDate ? showData.returnDate : 'N/A'}</td>
                                <td>{showData.busType ? showData.busType : 'N/A'}</td>
                                <td>{showData.travelType ? showData.travelType : 'N/A'}</td>
                                <td>{showData.transportType ? showData.transportType : 'N/A'}</td>
                                <td>{showData.timeSlot ? showData.timeSlot : 'N/A'}</td>
                                <td>{showData.noOfSeatsBooked ? showData.noOfSeatsBooked : 'N/A'}</td>
                                <td>{showData.seatNumbers ? showData.seatNumbers : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}><NavLink to='/thingstodoviewcard' className='navLinks'><Button variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button></NavLink> <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            )
                          })
                        }

                      </tbody>

                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>
          </Tabs>
        </Row>

      </Container>
      {/* Tabs:end */}
    </>
  )
}

export default ThingsTodo