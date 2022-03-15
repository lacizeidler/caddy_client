import React, { useState, useEffect } from "react"
import { getSingleGolfer } from "../profile/golfer_manager"
import { getPosts } from "../posts/post_manager"
import { Card, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { getFinalScores } from "./score_manager";

export const FinalScoreList = () => {
    const [finalScores, setFinalScores] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(
        () => {
            getSingleGolfer()
                .then(setCurrentUser)
        },
        []
    )

    useEffect(
        () => {
            getFinalScores()
            .then(setFinalScores)
        },
        []
    )

    return(
        <>
            {
                finalScores.filter(finalScore => finalScore.golfer_id === currentUser.user_id).map(filteredFinalScore => (
                      <Card key={filteredFinalScore.id}>
                        <CardBody>
                            <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            >
                            {filteredFinalScore.date}
                            </CardSubtitle>
                        </CardBody>
                        <CardBody>
                            <CardText>
                            Par: {filteredFinalScore.par}
                            </CardText>
                            <CardText>
                            Score:{filteredFinalScore.score}
                            </CardText>
                            <CardText>
                            Golf Course:{filteredFinalScore.course.name}
                            </CardText>
                        </CardBody>
                        </Card>
                ))
            }
        </>
    )
}