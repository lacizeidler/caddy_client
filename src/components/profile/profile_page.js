import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { getSingleGolfer } from "./golfer_manager"
import { GolferPostList } from "./golfer_post_list";

export const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(
        () => {
            getSingleGolfer()
                .then(setCurrentUser)
        },
        []
    )

    return (
        <>
            <div style={{"border": "grey solid 1px", "margin": "1%", "padding": "2%"}}>
                <Card>
                    <CardBody>
                        <CardTitle tag="h3">
                            Profile 
                        </CardTitle>
                        <CardText>
                            Username: {currentUser.user?.username}
                        </CardText>
                        <CardText>
                            Name: {currentUser.user?.first_name} {currentUser.user?.last_name}
                        </CardText>
                        <CardText>
                            {currentUser.user?.email}
                        </CardText>
                        <CardText>
                            Bio: {currentUser.bio}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
            <GolferPostList/>
        </>
    )
}