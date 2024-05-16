import React, { useEffect, useState } from 'react';
import './Fixtures.css';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import format from 'date-fns/format';
import NoDataImg from 'react-bootstrap/Image';
import TablePagination from '@mui/material/TablePagination';

function Fixtures() {
  let formattedDate = '';
  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.135/Manager-App-API/api/playerimage/register/getTestingInformation')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        // console.log("Success in getting data", data);
        setShowData(data);  // showData=data;
      })
  }, [])

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
        <div className='playersList'>FIXTURES LIST</div>
      </div>

      <Table striped hover responsive className='tableHead my-3 table-dark'
      >
        <thead>
          <tr className='text-center thead' style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
            <th >DATE</th>
            <th>GROUND NAME</th>
            <th>TEAM A</th>
            <th>Team A Logo</th>
            <th>TEAM B</th>
            <th>Team B Logo</th>

          </tr>
        </thead>
        {showData &&
          showData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((showData, i) => {
              console.log("showData", showData)
              return (
                <tbody className='table-light' key={i}>
                  <tr className='text-center'>
                    <td>{showData.dateTime ? formattedDate = format(
                      new Date(showData.dateTime),
                      'dd/MM/yyyy'
                    ) : 'N/A'}</td>
                    <td>{showData.groundName ? showData.groundName : 'N/A'}</td>
                    <td>{showData.teamA ? showData.teamA : 'N/A'}</td>
                    <td>Logo A</td>
                    <td>{showData.teamB ? showData.teamB : 'N/A'}</td>
                    <td>Logo B</td>
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
        </div >)
      }

    </div>
  )
}

export default Fixtures