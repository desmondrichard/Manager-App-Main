import React, { useState, useEffect } from 'react';
import './Fixtures.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
function Fixtures() {
  // Filtering Year:
  const years = [];
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  for (let i = startYear; i <= currentYear; i++) {
    years.push(i)
  }
  console.log("years", years)

  // GET Request:
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    fetch('http://192.168.1.135/Manager-App-API/register/AllDataThingsToDo')
      .then((data) => data.json())
      .then((data) => {
        console.log("dataFixtures", data);
        // console.log("Success in getting data", data);
        setShowData(data);  // showData=data;
      })
  }, [])

  //Date Formatting:

  return (
    <>
      <Header />
      <div className='text-center'>
        <div className='playersList'>FIXTURES</div>
      </div>
      <div>
        <Row>
          <Col>
            <Form.Select aria-label="Default select example" className='year'>
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
          showData && showData.map((showData, i) => {
            return (
              <Card className='border border-primary rounded border-2 fixturesCard my-3' key={i}>
                <Card.Body>
                  <Row>
                    <Col md={2}><h5>DATE</h5></Col>
                    <Col md={8}><p className='district'>{showData.groundName}</p></Col>
                    <Col md={2}><p className='time'>TIME: frefefr</p></Col>
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