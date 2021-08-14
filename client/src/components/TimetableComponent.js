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
    state = {
        calendarEvents: [
            {
                title: "Test event 2",
                start: new Date("2021-04-08 01:00"),
                id: "99999998"
            },
            {
                title: "Test event 1 ",
                start: new Date("2021-08-05 00:00"),
                id: "99999999"
            }
        ],
        events: [
            { title: "Class 1", id: "1" },
            { title: "Class 2", id: "2" },
            { title: "Class 3", id: "3" },
            { title: "Class 4", id: "4" },
            { title: "Class 5", id: "5" },
            { title: "Class 6", id: "6" },
            { title: "Class 7", id: "7" }
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
                title: 'Class 1',
                start: '2021-08-13T10:00:00',
                end: '2021-08-13T12:00:00',
            },
            {
                id: 2,
                title: 'Class 2',
                start: '2021-08-13T14:00:00',
                end: '2021-08-13T18:00:00',
            },
            {
                id: 3,
                title: 'Class 3',
                start: '2021-08-13T13:00:00',
                end: '2021-08-13T14:00:00'
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
                                    center: "newEvent"
                                }}
                                customButtons={{
                                    newEvent: {
                                        text: <AddClass />
                                    }
                                }}
                                nowIndicator
                                eventColor="red"
                                dateClick={(e) => console.log(e.dateStr)}
                                weekNumbers={false}
                                navLinks={false}
                                events={events}
                                eventClick={this.classClick}
                                slotMinTime={"06:00:00"}
                                slotMaxTime={"20:00:00"}
                                displayEventTime={true}
                            />

                        </div>
                    </Col>
                </Row>

            </div>

        );
    }
}
export default TimetableComponent;
