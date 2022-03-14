import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { getSingleGolfer } from "./golfer_manager"

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
            <div>
                <Card
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            {currentUser.user?.username}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {currentUser.user?.first_name} {currentUser.user?.last_name}
                        </CardSubtitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {currentUser.user?.email}
                        </CardSubtitle>
                        <CardText>
                            {currentUser.bio}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}