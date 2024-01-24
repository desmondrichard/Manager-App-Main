import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './FullCalendar.css';

const eventsList = [
    { title: 'Meeting', start: new Date() },
    { title: 'Aus vs Nz', start: new Date(2024, 1, 25) }, //month 0-11,day 1-31
    { title: 'Afg vs Sl', start: new Date(2024, 0, 26) },
    { title: 'Ind vs Eng', start: new Date(2024, 0, 31) }
];
function FullCalendarComp() {
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={eventsList}
                eventContent={renderEventContent}
                height={"100vh"}
            />
        </div>
    )
}

export default FullCalendarComp

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>
            {/* <b>{eventInfo.timeText}</b> */}
            <i style={{ fontSize: '11px' }}>{eventInfo.event.title}</i>
        </>
    )
}