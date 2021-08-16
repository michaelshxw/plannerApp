import React, { Component, useState } from "react";
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";


//import styling
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import addClass from "./AddClass";
import { Next } from "react-bootstrap/esm/PageItem";
import AddClass from "./AddClass";

class TimetableComponent extends Component {
    classClick = classClick => {
        Alert.fire({
            title: "Remove " + classClick.event.title + " from timetable?",
            html:
                `<div class="table-responsive">
                <table class="table">
                <tbody>
                <tr >
                <td>Class</td>
                <td><strong>` +
                classClick.event.title +
                `</strong></td>
                </tr>
                <tr >
                <td>Start Time</td>
                <td><strong>
                ` +
                classClick.event.start +
                `
                </strong></td>
                </tr>
                </tbody>
                </table>
                </div>`,

            showCancelButton: true,
            confirmButtonColor: "#d9534f",
            cancelButtonColor: "#0275d8",
            confirmButtonText: "Remove Class",
            cancelButtonText: "Cancel"
        }).then(result => {
            if (result.value) {
                classClick.event.remove();
                Alert.fire("Done!", "Your class has been removed.");
            }
        });
    };
    render() {
        const events = [
            {
                id: 1,
                title: 'Math Basics',
                start: '2021-08-16T08:00:00',
                end: '2021-08-16T10:00:00',
            },
            {
                id: 2,
                title: 'Physical Education',
                start: '2021-08-16T10:30:00',
                end: '2021-08-16T11:30:00',
            },
            {
                id: 3,
                title: 'Science Extension',
                start: '2021-08-16T11:30:00',
                end: '2021-08-13T12:30:00',
            },
            {
                id: 4,
                title: 'Study Period',
                start: '2021-08-16T13:30:00',
                end: '2021-08-13T14:30:00',
            },
            {
                id: 5,
                title: 'English 3AB',
                start: '2021-08-16T14:30:00',
                end: '2021-08-13T15:30:00',
            }
        ];
        return (
            <div className="p-4">


                <div className="calendarToday">
                    <FullCalendar
                        height="80vh"
                        droppable={true}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="timeGridDay"
                        weekends={false}
                        headerToolbar={{
                            center: "newEvent",
                        }}
                        customButtons={{
                            newEvent: {
                                text: <AddClass />
                            }
                        }}
                        nowIndicator
                        eventColor="#e4sr4"
                        dateClick={(e) => console.log(e.dateStr)}
                        weekNumbers={false}
                        navLinks={false}
                        allDaySlot={false}
                        eventClick={this.classClick}
                        slotMinTime={"06:00:00"}
                        slotMaxTime={"20:00:00"}
                        displayEventTime={true}
                        eventDrop={this.drop}
                        events={events}
                    />

                </div>

            </div>

        );
    }
}
export default TimetableComponent;
