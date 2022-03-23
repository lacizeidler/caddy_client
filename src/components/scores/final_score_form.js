import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';
import { CourseForm } from "../courses/course_form";
import { createFinalScore, getNumOfHoles, getCourses } from "../posts/post_manager";

export const FinalScoreForm = () => {
    const history = useHistory()
    const [courses, setCourses] = useState([])
    const [holes, setHoles] = useState([])
    const [currentFinalScore, setCurrentFinalScore] = useState({
        date: "",
        score: 0,
        share: false,
        course_id: 0,
        par: 0,
        num_of_holes_id: 0
    })

    useEffect(() => {
        getCourses()
            .then(setCourses)
    }, [])

    useEffect(() => {
        getNumOfHoles()
            .then(setHoles)
    }, [])

    const changeFinalScoreState = (domEvent) => {
        const copy = { ...currentFinalScore }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setCurrentFinalScore(copy)
    }

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
                        value={currentFinalScore.course_id}
                        onChange={changeFinalScoreState}
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
                        Number of Holes Played
                    </Label>
                    <Input
                        className="mb-3"
                        type="select"
                        name="num_of_holes_id"
                        value={currentFinalScore.num_of_holes_id}
                        onChange={changeFinalScoreState}
                    >
                        <option value={0}>Select num of holes played ...</option>
                        {
                            holes.map(hole => {
                                return <option key={hole.id} value={hole.id}>
                                    {hole.holes}
                                </option>
                            })
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="par">
                        Par
                    </Label>
                    <Input
                        id="par"
                        name="par"
                        type="number"
                        value={currentFinalScore.par}
                        onChange={changeFinalScoreState}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="score">
                        Score
                    </Label>
                    <Input
                        id="score"
                        name="score"
                        type="number"
                        value={currentFinalScore.score}
                        onChange={changeFinalScoreState}
                    />
                </FormGroup>
                <Button
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const finalScore = {
                            date: new Date().toISOString().slice(0, 10),
                            score: currentFinalScore.score,
                            par: currentFinalScore.par,
                            course_id: parseInt(currentFinalScore.course_id),
                            num_of_holes_id: parseInt(currentFinalScore.num_of_holes_id),
                            share: currentFinalScore.share
                        }

                        // Send FINALSCORE request to your API
                        createFinalScore(finalScore)
                            .then(() => history.push("/scores"))
                    }}
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}