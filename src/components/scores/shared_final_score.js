import React, { useState, useEffect } from "react"
import { Card, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { getSharedFinalScores } from "./score_manager";
import { useHistory } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi"
import { FinalScoreLikes } from "./final_score_likes";

export const SharedFinalScoreList = () => {
    const [finalScores, setFinalScores] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getSharedFinalScores()
                .then(setFinalScores)
        },
        []
    )

    return (
        <>
            <Button
                color="success"
                size="sm"
                onClick={
                    () => {
                        history.push("/new/post")
                    }
                }
            >New Post</Button>
            <Button
                color="success"
                size="sm"
                onClick={
                    () => {
                        history.push("/shared/final_score")
                    }
                }
            >Final Scores</Button>
            <Button
                color="success"
                size="sm"
                onClick={
                    () => {
                        history.push("/shared/table_score")
                    }
                }
            >Table Scores</Button>
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
                        <FinalScoreLikes score={score} setFinalScores={setFinalScores}/>
                        <Button
                            color="success"
                            onClick={
                                () => {
                                    history.push(`/final_scores/comments/${score.id}`)
                                }
                            }
                        >
                            Comments <BiCommentDetail />
                        </Button>
                        </CardBody>
                    </Card>
                })
            }
        </>
    )
}