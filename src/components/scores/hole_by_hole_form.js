import { useEffect, useState } from "react/cjs/react.development"
import { useParams, useHistory } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { getNumOfHoles, getCourses } from "../posts/post_manager";
import { CourseForm } from "../courses/course_form";
import {createHoleByHole, getHoleByHoleById} from "./score_manager"


export const HoleByHoleForm = () => {
    const history = useHistory()
    const [newHoleByHole, setNewHoleByHole] = useState({
        course_id: 0,
        num_of_holes_id: 0,
        share: 0
    })
    const [numOfHoles, setNumOfHoles] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(
        () => {
            getNumOfHoles()
            .then(setNumOfHoles)
        },
        []
    )

    useEffect(
        () => {
            getCourses()
            .then(setCourses)
        },
        []
    )

    const changeHoleByHoleState = (domEvent) => {
        const copy = { ...newHoleByHole }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setNewHoleByHole(copy)
    }


    return (
        <Form>
                <FormGroup>
                    <Label for="exampleText">
                        Golf Course
                    </Label>
                    <Input
                        className="mb-3"
                        type="select"
                        name="course_id"
                        value={newHoleByHole.course_id}
                        onChange={changeHoleByHoleState}
                    >
                        <option value={0}>Select a golf course ...</option>
                        {
                            courses.map(course => {
                                return <option key={course.id} value={course.id}>
                                    {course.name}
                                </option>
                            })
                        }
                    </Input>
                    <CourseForm/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Number of Holes
                    </Label>
                    <Input
                        className="mb-3"
                        type="select"
                        name="num_of_holes_id"
                        value={newHoleByHole.num_of_holes_id}
                        onChange={changeHoleByHoleState}
                    >
                        <option value={0}>Select # of holes ...</option>
                        {
                            numOfHoles.map(number => {
                                return <option key={number.id} value={number.id}>
                                    {number.holes}
                                </option>
                            })
                        }
                    </Input>
                </FormGroup>
                <Button
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const holeByHole = {
                            date: new Date().toISOString().slice(0, 10),
                            course_id: parseInt(newHoleByHole.course_id),
                            num_of_holes_id: parseInt(newHoleByHole.num_of_holes_id),
                            share: newHoleByHole.share
                        }

                        // Send POST request to your API
                        createHoleByHole(holeByHole)
                        .then(history.push('/scores'))
                    }}
                >
                    Submit
                </Button>
            </Form>
    )
}