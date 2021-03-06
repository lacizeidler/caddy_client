import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { Form, Label, Input, FormGroup, Button, Nav, NavItem, NavLink } from 'reactstrap';
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
            <Nav pills>
                <NavItem style={{ "marginLeft": "2%" }}>
                    <NavLink style={{ "color": "darkGreen", "border": "green solid 1px" }} href="/form/final_score">
                        Final Score
                    </NavLink>
                </NavItem>
                <NavItem style={{ "marginLeft": "2%" }}>
                    <NavLink style={{ "color": "darkGreen", "border": "green solid 1px" }} href="/form/hole_table">
                        Hole-by-Hole
                    </NavLink>
                </NavItem>
            </Nav>
            <h2 style={{ "margin": "2%" }}>New Final Score</h2>
            <Form style={{ "border": "grey solid 1px", "margin": "2%", "padding": "2%" }}>
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
                    <Button
                        color="success"
                        onClick={
                            () => {
                                history.push("/new/course")
                            }
                        }
                    >
                        New Course
                    </Button>
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
                    color="success"
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