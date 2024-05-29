import React, { useState, useEffect } from 'react';
import './Fixtures.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

function Fixtures() {
  const [selectedYear, setSelectedYear] = useState(null);

  // Filtering Year:
  const years = [];
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= startYear; i--) {
    years.push(i)
  }
  console.log("years", years)

  // GET Request:
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7097/register/AllDataThingsToDo')
      .then((data) => data.json())
      .then((data) => {
        console.log("dataFixtures", data);
        // Formatting Date:
        const formattedData = data.map((item) => ({
          ...item,
          formattedDate: moment(item.dateTime.slice(4, 15), 'MMM DD YYYY').format('DD/MM/YYYY'),
        }));
        // console.log("Success in getting data", data);
        setShowData(formattedData);  // showData=data;
      })
  }, [])

  //To show message no data available for a selected year:


  return (
    <>
      <Header />
      <div className='text-center'>
        <div className='playersList'>FIXTURES</div>
      </div>
      <div>
        <Row>
          <Col>
            <Form.Select aria-label="Default select example" className='year' onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="none">Select Year</option>
              {
                years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))
              }
            </Form.Select>
          </Col>
        </Row>
      </div>
      <Container fluid className='my-4'>
        {
          showData && showData
            .filter((item) => item.formattedDate.split('/')[2] === selectedYear)
            .map((showData, i) => {
              return (
                <Card className='border border-primary rounded border-2 fixturesCard my-3' key={i}>
                  <Card.Body>
                    <Row>
                      <Col md={2}><p className='dateFormatted'>
                        {showData && showData.formattedDate}
                      </p></Col>
                      <Col md={8}><p className='district'>{showData.groundName}</p></Col>
                      <Col md={2}><p className='time'>TIME: {showData.dateTime ? showData.dateTime.slice(16, 24) : ''} </p></Col>
                      <Col md={2}></Col>
                      <Col md={8} style={{ textAlign: 'center' }}>
                        <Row>
                          <Col md={5}>
                            <img
                              src={showData ? `data:image/*;base64,${showData.teamAImage}` :  //checks for data
                                require('./../assets/noimage.jpg')}   //default img 
                              alt="img" style={{ width: '50px', height: '50px' }}
                              onError={(e) => {
                                e.target.src = require('./../assets/noimage.jpg');
                              }}
                            />
                            <br />
                            <p style={{ fontWeight: 'bold' }}>{showData.teamA}</p>
                          </Col>
                          <Col md={2} ><h5 className='vs'>VS</h5></Col>
                          <Col md={5}>
                            <img
                              src={showData ? `data:image/*;base64,${showData.teamBImage}` :  //checks for data
                                require('./../assets/noimage.jpg')}   //default img 
                              alt="img" style={{ width: '50px', height: '50px' }}
                              onError={(e) => {
                                e.target.src = require('./../assets/noimage.jpg');
                              }}
                            />
                            <br />
                            <p style={{ fontWeight: 'bold' }}>{showData.teamB}</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2}></Col>

                    </Row>
                  </Card.Body>
                </Card>
              )
            })
        }

      </Container>
    </>
  )
}

export default Fixtures