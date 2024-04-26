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
import FormControl from '@mui/material/FormControl';
import Swal from 'sweetalert2';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import NoDataImg from 'react-bootstrap/Image';
import axios from 'axios';
//Filter:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TablePagination from '@mui/material/TablePagination';

function ThingsTodo() {
  let formattedDate = "";

  //Data Binding:
  const [showData, setShowData] = useState(null);
  //

  useEffect(() => {
    fetch('https://localhost:7097/register/AllDataThingsToDo')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        // console.log("Success in getting data", data);
        setShowData(data);  // showData=data;
      })
  }, [])

  const handleClick1 = (showData) => {  //this function wont do anything but checks it is an object
    if (showData) {
      if (typeof showData === 'object') {
        console.log("it is object")
      }
      else {
        console.log('not object')
      }
      console.log("showData before returning:", showData);
    } else {
      console.log("showData is undefined");
      return null;
    }
  }


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
        axios.delete(`https://localhost:7097/Delete-AlldataThings/${id}`).then((response) => {
          if (response.data.alldataThingsId === id) {   //check how to use alldataThingsId here 
            console.log("Deletion Success", response.data)
          }
          console.log("res", response.data)

          //Call the GET method here:
          axios.get(`https://localhost:7097/register/AllDataThingsToDo`).then((response) => {
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

  //
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Filter:
  const [search, setSearch] = useState('');

  //paginator:
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
      </div>
      <Container fluid className='py-2 mt-4 bg-light' style={{ zIndex: '-100' }}>
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
        </Row>
      </Container>


      {/* Tabs: start*/}
      <Container fluid className='p-0 m-0'>
        <Row style={{ margin: '0px' }} className=''>
          <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab'>
            {/* Tab:0 */}
            <Tab eventKey='tab-0' title='REPRESENTATIVE'>
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>S.NO</th>
                    <th className='font'>TEAM NAME</th>
                    <th className='font'>REPRESENTATIVES NAME</th>
                    <th className='font'>TEAM UNIFORM</th>
                    <th className='font'>TEAM TSHIRT</th>
                    <th className='font'>ACTION</th>
                  </tr>
                </thead>

                <tbody className='table-light' style={{ fontSize: '13px' }}>
                  {
                    showData &&
                    showData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .filter(item =>
                        search.length < 2 || (item.representatives && item.representatives.slice(0, 2).toLowerCase() === search.slice(0, 2))
                      )
                      .map((showData, i) => {
                        return (
                          <tr className='text-center font' key={i}>
                            <td>{showData.alldataThingsId ? showData.alldataThingsId : '-'}</td>
                            <td>{showData.team ? showData.team : '-'}</td>
                            <td>{showData.representatives ? showData.representatives : '-'}</td>
                            <td>{showData.teamUniform ? showData.teamUniform : '-'}</td>
                            <td>{showData.teamTshirt ? showData.teamTshirt : '-'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/thingstodo/thingstodoviewcard' className='navLinks'>
                                <Button variant="primary" style={{ marginTop: '-7px' }} className='marginRight' onClick={() => handleClick1(showData)}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button variant="danger" onClick={() => deleteUser(showData.alldataThingsId)} style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                          </tr>
                        )
                      })
                  }
                </tbody>
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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }

            </Tab>

            {/* Tab:1 */}
            <Tab eventKey='tab-1' title='BRANDING'>
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>S.NO</th>
                    <th className='font'>TEAM LOGO</th>
                    <th className='font'>TEAM FLAG</th>
                    <th className='font'>SIDE FLAG</th>
                    <th className='font'>STANDEES</th>
                    <th className='font'>BUS BRANDING</th>
                    <th className='font'>BUS BOOKING</th>
                    <th className='font'>ACTION</th>
                  </tr>
                </thead>
                <tbody className='table-light' style={{ fontSize: '13px' }}>
                  {
                    showData &&
                    showData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((showData, i) => {
                        return (
                          <tr className='text-center font' key={i}>
                            <td>{showData.alldataThingsId ? showData.alldataThingsId : '-'}</td>
                            <td>{showData.teamLogo ? showData.teamLogo : '-'}</td>
                            <td>{showData.teamFlage ? showData.teamFlage : '-'}</td>
                            <td>{showData.sideFlages ? showData.sideFlages : '-'}</td>
                            <td>{showData.standees ? showData.standees : '-'}</td>
                            <td>{showData.busBranding ? showData.busBranding : '-'}</td>
                            <td>{showData.busBooking ? showData.busBooking : '-'}</td>
                            <td className='btnPadding' style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/thingstodo/thingstodoviewcard' className='navLinks' >
                                <Button variant="primary" style={{ marginTop: '-7px' }} className='marginRight'
                                  //cant set data in useState:
                                  onClick={() => handleClick1(showData)}
                                ><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button variant="danger" onClick={() => deleteUser(showData.alldataThingsId)} style={{ marginTop: '-7px' }} ><i className="bi bi-trash"></i></Button> </td>
                          </tr>
                        )
                      })
                  }
                </tbody>

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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }

            </Tab>
            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='COACH THERAPIST'>

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
                    showData &&
                    showData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .filter(item =>
                        search.length === 0
                          ? item
                          : search.length < 2 || search.toLowerCase() === ''
                            ? item
                            : item.name && item.name.slice(0, 2).toLowerCase() === search.slice(0, 2)
                      )
                      .map((showData, i) => {
                        return (
                          <tr className='text-center font' key={i}>
                            <td>{showData.alldataThingsId ? showData.alldataThingsId : '-'}</td>
                            <td>{showData.name ? showData.name : '-'}</td>
                            <td>{showData.designation ? showData.designation : '-'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/thingstodo/thingstodoviewcard' className='navLinks'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button variant="danger" onClick={() => deleteUser(showData.alldataThingsId)} style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                          </tr>
                        )
                      })
                  }
                </tbody>
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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }
            </Tab>

            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='FIXTURES'>

              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>S.NO</th>
                    <th className='font'>DATE</th>
                    <th className='font'>GROUND NAME</th>
                    <th className='font'>TEAM A</th>
                    <th className='font'>TEAM B</th>
                    <th className='font'>TEAM A LOGO</th>
                    <th className='font'>TEAM B LOGO</th>
                    <th className='font'>ACTION</th>
                  </tr>
                </thead>

                <tbody className='table-light' style={{ fontSize: '13px' }}>
                  {
                    showData &&
                    showData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .filter(item =>
                        search.length === 0
                          ? item
                          : search.length < 2 || search.toLowerCase() === ''
                            ? item
                            : item.groundName && item.groundName.slice(0, 2).toLowerCase() === search.slice(0, 2)
                      )
                      .map((showData, i) => {
                        console.log("FixturesShowData:", showData)
                        return (
                          <tr className='text-center font' key={i}>
                            <td>{showData.alldataThingsId ? showData.alldataThingsId : '-'}</td>
                            <td>{showData.dateTime ? formattedDate = format(
                              new Date(showData.dateTime),
                              'dd/MM/yyyy'
                            ) : 'N/A'}</td>
                            <td>{showData.groundName ? showData.groundName : '-'}</td>
                            <td>{showData.teamA ? showData.teamA : '-'}</td>
                            <td>{showData.teamB ? showData.teamB : '-'}</td>
                            {/* LOGO: */}
                            <td>
                              <img
                                src={showData ? `data:image/*;base64,${showData.teamAImage}` :  //checks for data
                                  require('./../assets/noimage.jpg')}   //default img 
                                alt="img" style={{ width: '40px', height: '30px' }}
                                onError={(e) => {
                                  e.target.src = require('./../assets/noimage.jpg');
                                }}
                              />
                            </td>
                            <td>
                              <img
                                src={showData ? `data:image/*;base64,${showData.teamBImage}` :  //checks for data
                                  require('./../assets/noimage.jpg')}   //default img 
                                alt="img" style={{ width: '40px', height: '30px' }}
                                onError={(e) => {
                                  e.target.src = require('./../assets/noimage.jpg');
                                }}
                              />
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/thingstodo/thingstodoviewcard' className='navLinks'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button variant="danger" onClick={() => deleteUser(showData.alldataThingsId)} style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                          </tr>
                        )
                      })
                  }
                </tbody>

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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }

            </Tab>

            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='HOTEL ACCOMODATION'>

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
                  {showData &&
                    showData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .filter(item =>
                        search.length === 0
                          ? item
                          : search.length < 2 || search.toLowerCase() === ''
                            ? item
                            : item.hotelName && item.hotelName.slice(0, 2).toLowerCase() === search.slice(0, 2)
                      )
                      .map((showData, i) => {
                        return (
                          <tr className='text-center font' key={i}>
                            <td>{showData.alldataThingsId ? showData.alldataThingsId : '-'}</td>
                            <td>{showData.hotelName ? showData.hotelName : '-'}</td>
                            <td>{showData.cityName ? showData.cityName : '-'}</td>
                            <td>{showData.noOfRooms ? showData.noOfRooms : '-'}</td>
                            <td>{showData.roomsNo ? showData.roomsNo : '-'}</td>
                            <td>{showData.checkIn ? showData.checkIn : '-'}</td>
                            <td>{showData.checkOut ? showData.checkOut : '-'}</td>
                            <td>{showData.daysStayed ? showData.daysStayed : '-'}</td>
                            <td>{showData.noOfPeople ? showData.noOfPeople : '-'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/thingstodo/thingstodoviewcard' className='navLinks'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button variant="danger" onClick={() => deleteUser(showData.alldataThingsId)} style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                          </tr>
                        )
                      })
                  }

                </tbody>

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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }

            </Tab>

            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='MATCH EQUIPMENT'>

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
                  {showData &&
                    showData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .filter(item =>
                        search.length === 0
                          ? item
                          : search.length < 2 || search.toLowerCase() === ''
                            ? item
                            : item.name && item.name.slice(0, 2).toLowerCase() === search.slice(0, 2)
                      )
                      .map((showData, i) => {
                        return (
                          <tr className='text-center font' key={i}>
                            <td>{showData.alldataThingsId ? showData.alldataThingsId : '-'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>{showData.name ? showData.name : '-'}</td>
                            <td>{showData.equipments ? showData.equipments : '-'}</td>
                            <td>{showData.equipmentsType ? showData.equipmentsType : '-'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/thingstodo/thingstodoviewcard' className='navLinks'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button variant="danger" onClick={() => deleteUser(showData.alldataThingsId)} style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                          </tr>
                        )

                      })
                  }
                </tbody>

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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }
            </Tab>

            {/* Tab:6 */}
            <Tab eventKey='tab-6' title='TRANSPORT FORM'>

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
                  {showData &&
                    showData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((showData, i) => {
                        return (
                          <tr className='text-center font' key={i}>
                            <td>{showData.alldataThingsId ? showData.alldataThingsId : '-'}</td>
                            <td>{showData.leavingFrom ? showData.leavingFrom : '-'}</td>
                            <td>{showData.goingTo ? showData.goingTo : '-'}</td>
                            <td>{showData.dateOfJourney ? showData.dateOfJourney : '-'}</td>
                            <td>{showData.returnDate ? showData.returnDate : '-'}</td>
                            <td>{showData.busType ? showData.busType : '-'}</td>
                            <td>{showData.travelType ? showData.travelType : '-'}</td>
                            <td>{showData.transportType ? showData.transportType : '-'}</td>
                            <td>{showData.timeSlot ? showData.timeSlot : '-'}</td>
                            <td>{showData.noOfSeatsBooked ? showData.noOfSeatsBooked : '-'}</td>
                            <td>{showData.seatNumbers ? showData.seatNumbers : '-'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/thingstodo/thingstodoviewcard' className='navLinks'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" className='marginRight' style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button variant="danger" onClick={() => deleteUser(showData.alldataThingsId)} style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                          </tr>
                        )
                      })
                  }

                </tbody>

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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
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