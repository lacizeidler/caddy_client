import React, { useState, useEffect } from "react"
import { Card, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { getSharedFinalScores } from "./score_manager";

export const SharedFinalScoreList = () => {
    const [finalScores, setFinalScores] = useState([])

    useEffect(
        () => {
            getSharedFinalScores()
            .then(setFinalScores)
        },
        []
    )

    return(
        <>
            {
                finalScores.map(score => {
                      return <Card key={score.id} style={{"border": "grey solid 1px", "margin": "2%", "padding": "2%"}}>
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