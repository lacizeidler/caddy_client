import { useEffect, useState } from "react/cjs/react.development"
import { useHistory } from "react-router-dom"
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { getNumOfHoles, getCourses } from "../posts/post_manager";
import { createHoleByHole } from "./score_manager"


export const HoleByHoleForm = () => {
    const history = useHistory()
    const [newHoleByHole, setNewHoleByHole] = useState({
        course_id: 0,
        num_of_holes_id: 0,
        share: 0,
        holes: []
    })
    const [newIndividualHole1, setNewIndividualHole1] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole2, setNewIndividualHole2] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole3, setNewIndividualHole3] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole4, setNewIndividualHole4] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole5, setNewIndividualHole5] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole6, setNewIndividualHole6] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole7, setNewIndividualHole7] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole8, setNewIndividualHole8] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole9, setNewIndividualHole9] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole10, setNewIndividualHole10] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole11, setNewIndividualHole11] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole12, setNewIndividualHole12] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole13, setNewIndividualHole13] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole14, setNewIndividualHole14] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole15, setNewIndividualHole15] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole16, setNewIndividualHole16] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole17, setNewIndividualHole17] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const [newIndividualHole18, setNewIndividualHole18] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })
    const individualHoleArray = [newIndividualHole1, newIndividualHole2, newIndividualHole3, newIndividualHole4, newIndividualHole5, newIndividualHole6, newIndividualHole7, newIndividualHole8, newIndividualHole9, newIndividualHole10, newIndividualHole11, newIndividualHole12, newIndividualHole13, newIndividualHole14, newIndividualHole15, newIndividualHole16, newIndividualHole17, newIndividualHole18]
    const setIndividualHoleArray = [setNewIndividualHole1, setNewIndividualHole2, setNewIndividualHole3, setNewIndividualHole4, setNewIndividualHole5, setNewIndividualHole6, setNewIndividualHole7, setNewIndividualHole8, setNewIndividualHole9, setNewIndividualHole10, setNewIndividualHole11, setNewIndividualHole12, setNewIndividualHole13, setNewIndividualHole14, setNewIndividualHole15, setNewIndividualHole16, setNewIndividualHole17, setNewIndividualHole18]
    const [numOfHoles, setNumOfHoles] = useState([])
    const [courses, setCourses] = useState([])
    const [show9, setShow9] = useState(false)
    const [show18, setShow18] = useState(false)
    const show9Function = (evt) => {
        setShow9(!show9);
        changeHoleByHoleState(evt)
    }
    const show18Function = (evt) => {
        setShow18(!show18);
        changeHoleByHoleState(evt)
    }

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

    const changeIndividualHoleState = (domEvent, i) => {
        const copy = { ...individualHoleArray[i] }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setIndividualHoleArray[i](copy)
    }

    const ListOf18 = () => {
        return individualHoleArray.map((hole, i) => {
            return <tr key={i}>
                <th scope="row"
                    name="hole_num"
                    value={i + 1}>
                    {i + 1}
                </th>
                <td>
                    <input
                        type="number"
                        name="par"
                        value={individualHoleArray[i].par}
                        onChange={
                            (evt) => {
                                changeIndividualHoleState(evt, i)
                            }
                        }
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="score"
                        value={individualHoleArray[i].score}
                        onChange={
                            (evt) => {
                                changeIndividualHoleState(evt, i)
                            }
                        }
                    />
                </td>
            </tr>
        })
    }

    const ListOf9 = () => {
        return individualHoleArray.slice(0, 8).map((hole, i) => {
            return <tr key={i}>
                <th scope="row"
                    name="hole_num"
                    value={i + 1}>
                    {i + 1}
                </th>
                <td>
                    <input
                        type="number"
                        name="par"
                        value={individualHoleArray[i].par}
                        onChange={
                            (evt) => {
                                changeIndividualHoleState(evt, i)
                            }
                        }
                    />
                </td>
                <td>
                    <input
                        type="number"
                        name="score"
                        value={individualHoleArray[i].score}
                        onChange={
                            (evt) => {
                                changeIndividualHoleState(evt, i)
                            }
                        }
                    />
                </td>
            </tr>
        })
    }

    const found1 = numOfHoles.find(hole => hole.id === 1)
    const found2 = numOfHoles.find(hole => hole.id === 2)

    return (
        <>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/form/final_score")
                }}
            >
                Final Score
            </Button>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/form/hole_table")
                }}
            >
                Hole_by_Hole
            </Button>
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
                    <button
                        onClick={
                            () => {
                                history.push("/new/course")
                            }
                        }
                    >
                        New Course
                    </button>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Number of Holes
                    </Label>
                    <button
                        name="num_of_holes_id"
                        value={found1?.id}
                        onClick={(evt) => {
                            evt.preventDefault()
                            show9Function(evt)
                        }}
                    >
                        9
                    </button>
                    <button
                        name="num_of_holes_id"
                        value={found2?.id}
                        onClick={(evt) => {
                            evt.preventDefault()
                            show18Function(evt)
                        }}
                    >
                        18
                    </button>
                </FormGroup>
                <FormGroup>
                    {
                        show9 && (
                            <ListOf9 />
                        )
                    }
                    {
                        show18 && (
                            <ListOf18 />
                        )
                    }
                </FormGroup>
                <button
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const holeByHole = {
                            date: new Date().toISOString().slice(0, 10),
                            course_id: parseInt(newHoleByHole.course_id),
                            num_of_holes_id: parseInt(newHoleByHole.num_of_holes_id),
                            share: newHoleByHole.share,
                            holes: individualHoleArray
                        }

                        // Send POST request to your API
                        createHoleByHole(holeByHole)
                    }}
                >
                    Submit
                </button>
            </Form>
        </>
    )
}