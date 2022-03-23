import React, { useState, useEffect } from "react"
import { Card, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { getFinalScores } from "./score_manager";
import { useHistory } from "react-router-dom";

export const FinalScoreList = () => {
    const [finalScores, setFinalScores] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getFinalScores()
                .then(setFinalScores)
        },
        []
    )

    return (
        <>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/scores/new")
                }}
            >
                New Score
            </Button>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/list/final_score")
                }}
            >
                Final Score
            </Button>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/list/hole_table")
                }}
            >
                Hole_by_Hole
            </Button>
            {
                finalScores.map(score => {
                    return <Card key={score.id} style={{ "border": "grey solid 1px", "margin": "2%", "padding": "2%" }}>
                        <CardBody>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {score.date}
                            </CardSubtitle>
                        </CardBody>
                        <CardBody>
                            <CardText>
                                Par: {score.par}
                            </CardText>
                            <CardText>
                                Score: {score.score}
                            </CardText>
                            <CardText>
                                Golf Course: {score.course.name}
                            </CardText>
                        </CardBody>
                    </Card>
                })
            }
        </>
    )
}