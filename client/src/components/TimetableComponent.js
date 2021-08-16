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
import AddClass from "./AddClass";

class TimetableComponent extends Component {
    state = {
        // calendarEvents: [
        //     {
        //         title: "Test event 2",
        //         start: new Date("2021-16-8 01:00"),
        //         id: "99999998"
        //     },
        //     {
        //         title: "Test event 1 ",
        //         start: new Date("2021-08-16 00:00"),
        //         id: "99999999"
        //     }
        // ],
        events: [
            { title: "Math Basics", id: "1" },
            { title: "Science Extension", id: "2" },
            { title: "Physics 101", id: "3" },
            { title: "Physical Education", id: "4" },
            { title: "Study Period", id: "5" },
            { title: "English 3AB", id: "6" },
        ]
    };
    componentDidMount() {
        let dragElement = document.getElementById("eventsElement");
        new Draggable(dragElement, {
            itemSelector: ".classElement",
            eventData: function (eventEl) {
                let title = eventEl.getAttribute("title");
                let id = eventEl.getAttribute("data");
                return {
                    title: title,
                    id: id
                };
            }
        });
    }
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
            },
            {
                id: 6,
                title: 'Study Period',
                start: '2021-08-17T08:00:00',
                end: '2021-08-17T10:00:00',
            },
            {
                id: 7,
                title: 'Science Extension',
                start: '2021-08-17T10:30:00',
                end: '2021-08-17T11:30:00',
            },
            {
                id: 8,
                title: 'Physics 101',
                start: '2021-08-17T11:30:00',
                end: '2021-08-17T12:30:00',
            },
            {
                id: 9,
                title: 'Physical Education',
                start: '2021-08-17T13:30:00',
                end: '2021-08-17T14:30:00',
            },
            {
                id: 10,
                title: 'Math Basics',
                start: '2021-08-17T14:30:00',
                end: '2021-08-17T15:30:00',
            },
            {
                id: 11,
                title: 'Math Basics',
                start: '2021-08-18T08:00:00',
                end: '2021-08-18T9:00:00',
            },
            {
                id: 12,
                title: 'Physical Education',
                start: '2021-08-18T09:00:00',
                end: '2021-08-18T10:00:00',
            },
            {
                id: 13,
                title: 'Science Extension',
                start: '2021-08-18T10:30:00',
                end: '2021-08-18T11:30:00',
            },
            {
                id: 14,
                title: 'Physical Education',
                start: '2021-08-18T11:30:00',
                end: '2021-08-18T12:30:00',
            },
            {
                id: 15,
                title: 'Study Period',
                start: '2021-08-18T13:30:00',
                end: '2021-08-18T14:30:00',
            },
            {
                id: 16,
                title: 'English 3AB',
                start: '2021-08-18T14:30:00',
                end: '2021-08-18T15:30:00',
            },
            {
                id: 17,
                title: 'Math Basics',
                start: '2021-08-19T08:00:00',
                end: '2021-08-19T9:00:00',
            },
            {
                id: 18,
                title: 'Physical Education',
                start: '2021-08-19T09:00:00',
                end: '2021-08-19T10:00:00',
            },
            {
                id: 19,
                title: 'Science Extension',
                start: '2021-08-19T10:30:00',
                end: '2021-08-19T11:30:00',
            },
            {
                id: 20,
                title: 'Physical Education',
                start: '2021-08-19T11:30:00',
                end: '2021-08-19T12:30:00',
            },
            {
                id: 21,
                title: 'Study Period',
                start: '2021-08-19T13:30:00',
                end: '2021-08-19T14:30:00',
            },
            {
                id: 22,
                title: 'English 3AB',
                start: '2021-08-19T14:30:00',
                end: '2021-08-19T15:30:00',
            },
            {
                id: 23,
                title: 'Math Basics',
                start: '2021-08-20T08:00:00',
                end: '2021-08-20T10:00:00',
            },
            {
                id: 24,
                title: 'Physical Education',
                start: '2021-08-20T10:30:00',
                end: '2021-08-20T11:30:00',
            },
            {
                id: 25,
                title: 'Science Extension',
                start: '2021-08-20T11:30:00',
                end: '2021-08-20T12:30:00',
            },
            {
                id: 26,
                title: 'Study Period',
                start: '2021-08-20T13:30:00',
                end: '2021-08-20T14:30:00',
            },
            {
                id: 27,
                title: 'English 3AB',
                start: '2021-08-20T14:30:00',
                end: '2021-08-20T15:30:00',
            },
        ];
        return (
            <div className="p-4">
                <Row>
                    <Col lg={3} sm={3} md={3}>
                        <div
                            id="eventsElement"
                            style={{
                                padding: "20px",
                                width: "20vw",
                                height: "auto",
                                maxHeight: "80vh"
                            }}>
                            <p align="center" id="classesText">
                                <strong>CLASSES</strong>
                            </p>
                            {this.state.events.map(event => (
                                <div
                                    className="classElement"
                                    title={event.title}
                                    data={event.id}
                                    key={event.id}>
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    </Col>

                    <Col lg={9} sm={9} md={9}>
                        <div className="calendar">
                            <FullCalendar
                                height="80vh"
                                droppable={true}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                initialView="timeGridWeek"
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
                    </Col>
                </Row>

            </div>

        );
    }
}
export default TimetableComponent;
