import React, { useState } from "react"
import { createCourse } from "./course_manager"
import { Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup, Button } from 'reactstrap';

export const CourseForm = () => {
    const [newCourse, setNewCourse] = useState({
        name: "",
        address: "",
        state: "",
        zipcode: ""
    })
    const [isOpen, setIsOpen] = useState(false)
    const showModal = () => {
        setIsOpen(true)
    }
    // const hideModal = () => {
    //     setIsOpen(false)
    // }

    const changeCourseState = (domEvent) => {
        const copy = { ...newCourse }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setNewCourse(copy)
    }

    return (
        <>
        <div>
            <Button
                color="secondary"
                onClick={showModal}
            >
                New Course
            </Button>
            </div>
            <Modal
                isOpen={isOpen}
                // onHide={hideModal}
                centered
                fullscreen="md"
                size="lg"
            >
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
                    <Button
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
                        }
                        }
                    >
                        Submit
                    </Button>
                    {' '}
                </ModalFooter>
            </Modal>
        </>
    )
}