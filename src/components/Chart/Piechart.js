import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Piechart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {
    //Data Binding for player registration:
    const [showData, setShowData] = useState([]);
    const [totalPlayers, setTotalPlayers] = useState(0)////created a state for players total count

    useEffect(() => {
        fetch('http://192.168.1.135/Manager-App-API/getAllPlayers')
            .then((data) => data.json())
            .then((data) => {
                // console.log("total players:", data.length);
                // var totalPlayers = data.length
                setTotalPlayers(data.length) ////setted  the value of players total count to the state variable 
                setShowData(data);  // showData=data;
            })
    }, [])

    //Data Binding for staff registration:
    const [showData1, setShowData1] = useState([]);
    const [totalStaffs, setTotalStaffs] = useState(0)////created a state for staffs total count
    useEffect(() => {
        fetch('http://192.168.1.135/Manager-App-API/GETalldata-Staffs')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                // var totalStaffs = data.length
                setTotalStaffs(data.length) ////setted  the value of staffs total count to the state variable 
                setShowData1(data);  // showData=data;
            })
    }, [])

    const data = {
        labels: ['Support Staffs', 'Players'],
        datasets: [
            {
                label: 'Registered',
                data: [totalStaffs, totalPlayers],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderWidth: 3,
            },
        ],
    }

    return (
        <div style={{ height: '392px' }} className='pieChart'>
            <Pie data={data} />
        </div>
    )
}

export default Piechart