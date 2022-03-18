import { useEffect, useState } from "react/cjs/react.development"
import { useParams, useHistory } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button, Table } from 'reactstrap';
import { getNumOfHoles, getCourses } from "../posts/post_manager";
import { CourseForm } from "../courses/course_form";
import { createHoleByHole, getHoleByHoleById } from "./score_manager"


export const HoleByHoleForm = () => {
    const history = useHistory()
    const [newHoleByHole, setNewHoleByHole] = useState({
        course_id: 0,
        num_of_holes_id: 0,
        share: 0,

    })
    const [newIndividualHole, setNewIndividualHole] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [numOfHoles, setNumOfHoles] = useState([])
    const [courses, setCourses] = useState([])
    const [tableArray, setTableArray] = useState([])


    useEffect(
        () => {
            ChangeTable()
        },
        [newHoleByHole]
    )

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

    const changeIndividualHoleState = (domEvent) => {
        const copy = { ...newIndividualHole }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setNewIndividualHole(copy)
    }


    const createIndividualHole = (id) => {
        fetch(`http://localhost:8000/hole_by_holes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
    }

    // Write a function that returns table rows based on based on what the user selects from the num_of_holes dropdown. 

    const ChangeTable = () => {
        let numOfHoles = 0
        let array = []
        if (newHoleByHole.num_of_holes_id === "1") {
            numOfHoles = 9
        } else if (newHoleByHole.num_of_holes_id === "2") {
            numOfHoles = 18
        }
        for (let i = 0; i < numOfHoles; i++) {
            array.push(<tr>
                <th scope="row"
                    value={i + 1}>
                        {i+1}
                </th>
                <td>
                    <Input
                        name="par"
                        value={newIndividualHole.par}
                        onClick={changeIndividualHoleState}
                    ></Input>
                </td>
                <td>
                    <Input
                        name="score"
                        value={newIndividualHole.score}
                        onClick={changeIndividualHoleState}
                    ></Input>
                </td>
            </tr>)}
            setTableArray(array)
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
                    <CourseForm />
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
                <FormGroup>
                    <Table hover>

                        <thead>
                            <tr>
                                <th>
                                    Hole #
                                </th>
                                <th>
                                    Par
                                </th>
                                <th>
                                    Score
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableArray.map(tableObj => {
                                    return tableObj
                                })
                            }
                        </tbody>
                    </Table>
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

                        const individual_hole = {
                            par: newIndividualHole.par,
                            score: newIndividualHole.score
                        }

                        // Send POST request to your API
                        createHoleByHole(holeByHole)
                        createIndividualHole(individual_hole)
                    }}
                >
                    Submit
                </Button>
            </Form>
        )
    }