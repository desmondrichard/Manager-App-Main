import React, { useEffect, useState } from 'react';
import './Accreditationcard.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tab, Tabs } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
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
function Accreditationcard() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.192/ManagerApi/AllDataAccreadiation')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        console.log("Success in getting Accreadiation data", data);
        setShowData(data);  // showData=data;
      })
  }, [])
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
      const response = await fetch('http://192.168.1.192/ManagerApi/AllDataAccreadiation');
      const data = await response.json();
      console.log("response", data);

      // Extract playerData from the response and replace empty values(cells) with "n/a":
      const fetchData = data.map(item => {
        const sanitizedData = {};
        for (const key in item) {   //removed playerData since the url has data directly else item.playerData
          sanitizedData[key] = item[key] || 'n/a';  //removed playerData since the url has data directly else item.playerData[key]
        }
        return sanitizedData;
      });

      var wb = XLSX.utils.book_new();
      var ws = XLSX.utils.json_to_sheet(fetchData);

      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "MyExcel.xlsx");
    } catch (error) {
      console.error("Error fetching or processing data for Excel download", error);
    }
  };

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

  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>ACCREADIATION LIST</div>
        <>
          <NavLink to='/accreadiationcards/accreadiationform' className='navLinks'><Button variant="primary" className='mt-3 addPlayers'>
            ADD PLAYERS
          </Button>
          </NavLink>
        </>

        <Container fluid className='py-2 mt-4 bg-light bgColorAccreadiation' style={{ backgroundColor: 'rgb(245, 242, 242) !important' }}>
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
      <Container fluid className='p-0 mt-2'>
        <Row style={{ margin: '0px' }}>
          <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab'>
            {/* Tab:1 */}
            <Tab eventKey='tab-1' title='PLAYERS' >
              {/* Tab1 content */}
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
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                          <th className='font'>DUTY PASS</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                              <tr className='text-center font'>
                                <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                                <td>{showData.playersName ? showData.playersName : 'N/A'}</td>
                                <td>{showData.playersDesignation ? showData.playersDesignation : 'N/A'}</td>
                                <td>{showData.playersMobilNo ? showData.playersMobilNo : 'N/A'}</td>
                                <td>{showData.playersEmailId ? showData.playersEmailId : 'N/A'}</td>
                                <td>{showData.playersDutyPass ? showData.playersDutyPass : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  <NavLink to='' className='navLinks'>
                                    <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                                  </NavLink>
                                  <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </Table>

                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>

            {/* Tab:2 */}
            <Tab eventKey='tab-2' title='SUPPORT STAFFS'>
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
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                          <th className='font'>ACTION</th>

                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                              <tr className='text-center font'>
                                <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                                <td>{showData.staffName ? showData.staffName : 'N/A'}</td>
                                <td>{showData.staffDesignation ? showData.staffDesignation : 'N/A'}</td>
                                <td>{showData.staffMobilNo ? showData.staffMobilNo : 'N/A'}</td>
                                <td>{showData.staffEmailId ? showData.staffEmailId : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  <NavLink to='' className='navLinks'>
                                    <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                                  </NavLink>
                                  <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>

            {/* Tab:3 */}
            <Tab eventKey='tab-3' title='OWNER/MANAGEMENT'>
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
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                              <tr className='text-center font'>
                                <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                                <td>{showData.ownerName ? showData.ownerName : 'N/A'}</td>
                                <td>{showData.ownerDesignation ? showData.ownerDesignation : 'N/A'}</td>
                                <td>{showData.ownerMobilNo ? showData.ownerMobilNo : 'N/A'}</td>
                                <td>{showData.ownerEmailId ? showData.ownerEmailId : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  <NavLink to='' className='navLinks'>
                                    <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                                  </NavLink>
                                  <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            </tbody>
                          )
                        })
                      }
                    </Table>) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>

            {/* Tab:4 */}
            <Tab eventKey='tab-4' title='FRANCHISE OFFICIALS'>
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
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }}>
                              <tr className='text-center font'>
                                <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                                <td>{showData.officialName ? showData.officialName : 'N/A'}</td>
                                <td>{showData.officialDesignation ? showData.officialDesignation : 'N/A'}</td>
                                <td>{showData.officialMobilNo ? showData.officialMobilNo : 'N/A'}</td>
                                <td>{showData.officialEmailId ? showData.officialEmailId : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  <NavLink to='' className='navLinks'>
                                    <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                                  </NavLink>
                                  <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>


            {/* Tab:5 */}
            <Tab eventKey='tab-5' title='FRANCHISE SPONSORS'>
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
                          <th className='font'>MOBILE NO</th>
                          <th className='font'>EMAIL</th>
                          <th className='font'>ACTION</th>
                        </tr>
                      </thead>
                      {
                        showData.map((showData, i) => {
                          return (
                            <tbody className='table-light' style={{ fontSize: '13px' }} key={i}>
                              <tr className='text-center font'>
                                <td>{showData.alldataAccreadiationId ? showData.alldataAccreadiationId : 'N/A'}</td>
                                <td>{showData.sponsorName ? showData.sponsorName : 'N/A'}</td>
                                <td>{showData.sponsorDesignation ? showData.sponsorDesignation : 'N/A'}</td>
                                <td>{showData.sponsorMobilNo ? showData.sponsorMobilNo : 'N/A'}</td>
                                <td>{showData.sponsorEmailId ? showData.sponsorEmailId : 'N/A'}</td>
                                <td style={{ whiteSpace: 'nowrap' }}>
                                  <NavLink to='' className='navLinks'>
                                    <Button onClick={() => handleClick1(showData)} variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-eye-fill"></i></Button>
                                  </NavLink>
                                  <Button variant="primary" style={{ marginTop: '-7px' }}><i className="bi bi-trash"></i></Button> </td>
                              </tr>
                            </tbody>
                          )
                        })
                      }

                    </Table>
                  ) : (<Skeleton variant="rectangular" minWidth={50} height={240} style={{ marginTop: '22px' }} />)
              }

            </Tab>

          </Tabs>
        </Row>
      </Container>
    </div>
  )
}

export default Accreditationcard