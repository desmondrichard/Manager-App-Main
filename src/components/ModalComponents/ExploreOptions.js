import React, { useState } from 'react';
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

function ExploreOptions() {
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
            const response = await fetch('http://192.168.1.135/Manager-App-API/GetStaffAllDataAndImages');
            const data = await response.json();
            console.log("response", data);

            // Extract playerData from the response and replace empty values(cells) with "n/a":
            const playerData = data.map(item => {
                const sanitizedData = {};
                for (const key in item.playerData) {
                    sanitizedData[key] = item.playerData[key] || 'n/a';
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
    )
}

export default ExploreOptions