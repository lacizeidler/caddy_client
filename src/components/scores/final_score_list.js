import React, { useState, useEffect } from "react"
import { Card, CardBody, CardSubtitle, CardText, Button, Nav, NavItem, NavLink } from 'reactstrap';
import { getFinalScores } from "./score_manager";
import { useHistory } from "react-router-dom";
import { ShareFinal } from "./share_final";

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

    const deleteFinalScores = (id) => {
        fetch(`http://localhost:8000/final_scores/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
            .then(() => {
                getFinalScores()
                    .then(setFinalScores)
            })
    }

    return (
        <>
            <Nav pills>
                <NavItem style={{ "marginLeft": "2%" }}>
                    <NavLink style={{ "color": "darkGreen", "border": "green solid 1px" }} href="/scores/new">
                        New Score
                    </NavLink>
                </NavItem>
                <NavItem style={{ "marginLeft": "2%" }}>
                    <NavLink style={{ "color": "darkGreen", "border": "green solid 1px" }} href="/list/final_score">
                        Final Score
                    </NavLink>
                </NavItem>
                <NavItem style={{ "marginLeft": "2%" }}>
                    <NavLink style={{ "color": "darkGreen", "border": "green solid 1px" }} href="/list/hole_table">
                        Hole-by-Hole
                    </NavLink>
                </NavItem>
            </Nav>
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
                        <Button
                            color="danger"
                            onClick={
                                () => {
                                    deleteFinalScores(parseInt(score.id))
                                }
                            }
                        >
                            Delete
                        </Button>
                        <ShareFinal score={score}/>
                    </Card>
                })
            }
        </>
    )
}