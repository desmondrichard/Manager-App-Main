import React, { useEffect, useState } from 'react';
import './Fixtures.css';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import format from 'date-fns/format';
import NoDataImg from 'react-bootstrap/Image';

function Fixtures() {
  let formattedDate = '';
  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('https://localhost:7097/getAllPlayers')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        // console.log("Success in getting data", data);
        setShowData(data);  // showData=data;
      })
  }, [])


  return (
    <div>
      <Header />
      <div className='text-center'>
        <div className='playersList'>FIXTURES LIST</div>
      </div>

      <Table striped hover responsive className='tableHead my-3 table-dark'
      >
        <thead>
          <tr className='text-center thead' style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
            <th >DATE</th>
            <th>GROUND NAME</th>
            <th>TEAM A</th>
            <th>TEAM B</th>
          </tr>
        </thead>
        {showData &&
          showData.map((showData, i) => {
            return (
              <tbody className='table-light' key={i}>
                <tr className='text-center'>
                  <td>{showData.dateTime ? formattedDate = format(
                    new Date(showData.dateTime),
                    'dd/MM/yyyy'
                  ) : 'N/A'}</td>
                  <td>{showData.groundName ? showData.groundName : 'N/A'}</td>
                  <td>{showData.teamA ? showData.teamA : 'N/A'}</td>
                  <td>{showData.teamB ? showData.teamB : 'N/A'}</td>
                </tr>
              </tbody>
            )
          })
        }

      </Table>
      {
        showData ? ('') : (<div className='text-center'>
          <NoDataImg src={require('./../assets/nodatafound.png')} ></NoDataImg>
        </div >)
      }

    </div>
  )
}

export default Fixtures