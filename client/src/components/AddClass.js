import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap"

export default function AddClass() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="text-white bg-dark btn-outline-dark" onClick={handleShow}>
                Add Class
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Enter class details below:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formClassName">
                            <Form.Label>Class name</Form.Label>
                            <Form.Control type="text" placeholder="Class name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTeacherName">
                            <Form.Label>Teacher name</Form.Label>
                            <Form.Control type="text" placeholder="Teacher name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTimeOfClass">
                            <Form.Label>Time of class</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLengthofClass">
                            <Form.Label>Length of class</Form.Label>
                            <Form.Control type="text" placeholder="60 minutes" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBuilding">
                            <Form.Label>Building</Form.Label>
                            <Form.Control type="text" placeholder="Building 501" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formRoomNumber">
                            <Form.Label>Room number</Form.Label>
                            <Form.Control type="text" placeholder="Room 218" />
                        </Form.Group>
                    
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Save Class
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
