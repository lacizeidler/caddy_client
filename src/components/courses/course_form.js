import React, { useState } from "react"
import { createCourse } from "./course_manager"
import { Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';
import { useHistory } from "react-router-dom";

export const CourseForm = () => {
    const history = useHistory()
    const [newCourse, setNewCourse] = useState({
        name: "",
        address: "",
        state: "",
        zipcode: ""
    })

    const changeCourseState = (domEvent) => {
        const copy = { ...newCourse }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setNewCourse(copy)
    }

    return (
        <>
            <Form style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%", "boxShadow": "5px 5px 10px 2px grey" }}>
                <ModalHeader>
                    Register New Course
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="exampleText">
                            Name
                        </Label>
                        <Input
                            className="mb-3"
                            type="input"
                            name="name"
                            value={newCourse.name}
                            onChange={changeCourseState}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">
                            Address
                        </Label>
                        <Input
                            className="mb-3"
                            type="input"
                            name="address"
                            value={newCourse.address}
                            onChange={changeCourseState}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">
                            State
                        </Label>
                        <Input
                            className="mb-3"
                            type="input"
                            name="state"
                            value={newCourse.state}
                            onChange={changeCourseState}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">
                            Zip
                        </Label>
                        <Input
                            className="mb-3"
                            type="input"
                            name="zipcode"
                            value={newCourse.zipcode}
                            onChange={changeCourseState}
                        >
                        </Input>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <button
                        color="primary"
                        onClick={(evt) => {
                            evt.preventDefault()

                            const course = {
                                name: newCourse.name,
                                address: newCourse.address,
                                state: newCourse.state,
                                zipcode: newCourse.zipcode
                            }

                            // Send POST request to your API
                            createCourse(course)
                            .then(history.push("/"))
                        }
                        }
                    >
                        Submit
                    </button>
                    {' '}
                </ModalFooter>
            </Form>
        </>
    )
}