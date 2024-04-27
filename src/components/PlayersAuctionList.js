import React, { useEffect, useState } from 'react';
import './PlayersAuctionList.css';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import FilterAccessories from './FilterAccessories';
import format from 'date-fns/format';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NoDataImg from 'react-bootstrap/Image';
//excel:
import * as XLSX from 'xlsx';
//pdf:
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Import the autotable plugin for table support
import html2canvas from 'html2canvas';
//search:
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TablePagination from '@mui/material/TablePagination';

function PlayersAuctionList() {
  var formattedDate = '';
  //Data Binding:
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    fetch('http://192.168.1.134/MA-APP/getAllPlayers')
      .then((data) => data.json())
      .then((data) => {
        // console.log("data",data);
        // console.log("Success in getting players data", data);
        setShowData(data);  // showData=data;
      })
  }, [])
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
      const response = await fetch('http://192.168.1.134/MA-APP/getAllPlayers');
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

      XLSX.utils.book_append_sheet(wb, ws, "FixturesData");
      XLSX.writeFile(wb, "MyExcel.xlsx");
    } catch (error) {
      console.error("Error fetching or processing data for Excel download", error);
    }
  };
  //search:
  const [search, setSearch] = useState('');

  //invalid dateOfBirth check:
  function isValidDate(date) {
    return new Date(date) !== "Invalid Date";
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
        <div className='playersList'>AUCTION LIST</div>
        <Container fluid className='py-2 mt-3 bg-light'>
          <Row>
            <Col xl={2} xs={4} md={3} lg={3}>
              {/* <FilterAccessories /> */}
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
            <Col xl={{ span: 2, offset: 8 }} lg={{ span: 3, offset: 6 }} md={{ span: 3, offset: 5 }} sm={{ span: 4, offset: 4 }} xs={{ span: 3 }}>
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

      <Table striped hover responsive className='tableHead my-3 table-dark'
      >
        <thead>

          <tr className='text-center thead' style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>
            <th >S.NO</th>
            <th>PLAYER NAME</th>
            <th>DATE OF BIRTH</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>ROLE</th>

          </tr>
        </thead>
        {showData
          &&
          showData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .filter(item =>
              search.length < 2 || (item.playerName && item.playerName.slice(0, 2).toLowerCase() === search.slice(0, 2))
            )
            .map((showData, i) => {
              return (
                <tbody className='table-light' key={i}>
                  <tr className='text-center'>
                    <td>{showData.alldataplayerId ? showData.alldataplayerId : '-'}</td>
                    <td>{showData.playerName ? showData.playerName : '-'}</td>
                    <td>
                      {/* {showData.dateOfBirth ? formattedDate = format(new Date(showData.dateOfBirth),
                        'MMMM dd yyyy') : 'N/A'} */}
                      {formattedDate = showData.dateOfBirth ? format(new Date(showData.dateOfBirth), 'MMMM dd yyyy') : (isValidDate(showData.dateOfBirth) ? 'N/A' : '-')}
                    </td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    {/* <th>7</th> */}
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

export default PlayersAuctionList