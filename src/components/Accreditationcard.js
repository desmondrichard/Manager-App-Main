import React, { useEffect, useState } from 'react';
import './Accreditationcard.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Tab, Tabs } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink, useParams } from 'react-router-dom';
import NoDataImg from 'react-bootstrap/Image';
import axios from 'axios';
import Swal from 'sweetalert2';
//excel:
// import * as XLSX from 'xlsx';
//pdf:
// import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import TablePagination from '@mui/material/TablePagination';

function Accreditationcard() {
  const [age, setAge] = React.useState('');

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
        console.log("Success in getting Accreadiation data", data);
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


  //DELETE MEthod using Axios:  alldataThingsId is an id from API DB so we need to match it and then perform delete:


  // //using sweetAlert2 for popup after clicking delete button:
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
        axios.delete(`https://localhost:7097/Delete-AlldataAccreadiation/${id}`).then((response) => {
          if (response.data.alldataThingsId === id) {   //check how to use alldataThingsId here 
            console.log("Deletion Success", response.data)
          }
          console.log("res", response.data)

          //Call the GET method here:
          axios.get(`https://localhost:7097/AllDataAccreadiation`).then((response) => {
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
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>ACCREADIATION LIST</div>
        <>
          <NavLink to='/accreadiationcards/accreadiationform' className='navLinks'><Button variant="primary" className='mt-3 addPlayers'>
            ADD
          </Button>
          </NavLink>
        </>
      </div>
      <Container fluid className='p-0 mt-2'>
        <Row style={{ margin: '0px' }}>
          <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab'>
            {/* Tab:1 */}
            <Tab eventKey='tab-1' title='PLAYERS' >
              {/* Tab1 content */}
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>S.NO</th>
                    <th className='font'>NAME</th>
                    <th className='font'>TEAM NAME</th>
                    <th className='font'>DESIGNATION</th>
                    <th className='font'>MOBILE NO</th>
                    <th className='font'>EMAIL</th>
                    <th className='font'>DUTY PASS</th>
                    <th className='font'>ACTION</th>
                  </tr>
                </thead>
                {showData &&
                  showData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((showData, i) => {
                      return (
                        <tbody className='table-light' key={i}>
                          <tr className='text-center fontBody'>
                            <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                            <td>{showData.playersName ? showData.playersName : 'N/A'}</td>
                            <td></td>
                            <td>{showData.playersDesignation ? showData.playersDesignation : 'N/A'}</td>
                            <td>{showData.playersMobilNo ? showData.playersMobilNo : 'N/A'}</td>
                            <td>{showData.playersEmailId ? showData.playersEmailId : 'N/A'}</td>
                            <td>{showData.playersDutyPass ? showData.playersDutyPass : 'N/A'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/accreadiationcards/accreadiationViewCard' className='navLinks me-2'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button variant="danger" style={{ marginTop: '-7px' }} onClick={() => deleteUser(showData.alldataAccreadiationId)}><i className="bi bi-trash"></i></Button> </td>
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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }

            </Tab>

            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='SUPPORT STAFFS'>

              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>S.NO</th>
                    <th className='font'>NAME</th>
                    <th className='font'>DESIGNATION</th>
                    <th className='font'>MOBILE NO</th>
                    <th className='font'>EMAIL</th>
                    <th className='font'>ACTION</th>

                  </tr>
                </thead>
                {showData &&
                  showData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((showData, i) => {
                      return (
                        <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                          <tr className='text-center fontBody'>
                            <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                            <td>{showData.staffName ? showData.staffName : 'N/A'}</td>
                            <td>{showData.staffDesignation ? showData.staffDesignation : 'N/A'}</td>
                            <td>{showData.staffMobilNo ? showData.staffMobilNo : 'N/A'}</td>
                            <td>{showData.staffEmailId ? showData.staffEmailId : 'N/A'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/accreadiationcards/accreadiationViewCard' className='navLinks me-2'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button onClick={() => deleteUser(showData.alldataAccreadiationId)} variant="danger" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }

            </Tab>

            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='OWNER/MANAGEMENT'>

              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>S.NO</th>
                    <th className='font'>NAME</th>
                    <th className='font'>DESIGNATION</th>
                    <th className='font'>MOBILE NO</th>
                    <th className='font'>EMAIL</th>
                    <th className='font'>ACTION</th>
                  </tr>
                </thead>
                {showData &&
                  showData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((showData, i) => {
                      return (
                        <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                          <tr className='text-center fontBody'>
                            <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                            <td>{showData.ownerName ? showData.ownerName : 'N/A'}</td>
                            <td>{showData.ownerDesignation ? showData.ownerDesignation : 'N/A'}</td>
                            <td>{showData.ownerMobilNo ? showData.ownerMobilNo : 'N/A'}</td>
                            <td>{showData.ownerEmailId ? showData.ownerEmailId : 'N/A'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/accreadiationcards/accreadiationViewCard' className='navLinks me-2'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button onClick={() => deleteUser(showData.alldataAccreadiationId)} variant="danger" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }

            </Tab>

            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='FRANCHISE OFFICIALS'>
              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>S.NO</th>
                    <th className='font'>NAME</th>
                    <th className='font'>DESIGNATION</th>
                    <th className='font'>MOBILE NO</th>
                    <th className='font'>EMAIL</th>
                    <th className='font'>ACTION</th>
                  </tr>
                </thead>
                {showData &&
                  showData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((showData, i) => {
                      return (
                        <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                          <tr className='text-center fontBody'>
                            <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                            <td>{showData.officialName ? showData.officialName : 'N/A'}</td>
                            <td>{showData.officialDesignation ? showData.officialDesignation : 'N/A'}</td>
                            <td>{showData.officialMobilNo ? showData.officialMobilNo : 'N/A'}</td>
                            <td>{showData.officialEmailId ? showData.officialEmailId : 'N/A'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/accreadiationcards/accreadiationViewCard' className='navLinks me-2'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button onClick={() => deleteUser(showData.alldataAccreadiationId)} variant="danger" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }
            </Tab>

            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='FRANCHISE SPONSORS'>

              <Table striped hover responsive className='tableHead table-dark'
              >
                <thead>
                  <tr className='text-center thead' style={{ whiteSpace: 'nowrap' }}>
                    <th className='font'>S.NO</th>
                    <th className='font'>NAME</th>
                    <th className='font'>DESIGNATION</th>
                    <th className='font'>MOBILE NO</th>
                    <th className='font'>EMAIL</th>
                    <th className='font'>ACTION</th>
                  </tr>
                </thead>
                {showData &&
                  showData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((showData, i) => {
                      return (
                        <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                          <tr className='text-center fontBody'>
                            <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                            <td>{showData.sponsorName ? showData.sponsorName : 'N/A'}</td>
                            <td>{showData.sponsorDesignation ? showData.sponsorDesignation : 'N/A'}</td>
                            <td>{showData.sponsorMobilNo ? showData.sponsorMobilNo : 'N/A'}</td>
                            <td>{showData.sponsorEmailId ? showData.sponsorEmailId : 'N/A'}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <NavLink state={{ showData }} to='/accreadiationcards/accreadiationViewCard' className='navLinks me-2'>
                                <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                              </NavLink>
                              <Button onClick={() => deleteUser(showData.alldataAccreadiationId)} variant="danger" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
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
                  <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
                </div>)
              }
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </div>
  )
}

export default Accreditationcard