import React, { useState, useEffect } from "react"
import { getSingleGolfer } from "./golfer_manager"
import { getPosts } from "../posts/post_manager"
import { Card, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';

export const GolferPostList = () => {
    const [posts, setPosts] = useState([])
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
            getPosts()
            .then(setPosts)
        },
        []
    )

    return(
        <>
            {
                posts.filter(post => post.golfer_id === currentUser.user_id).map(filteredPost => (
                      <Card key={filteredPost.id}>
                        <CardBody>
                            <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            >
                            {filteredPost.date}
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                            {filteredPost.content}
                            </CardText>
                            <Button>
                            Delete
                            </Button>
                            <Button>
                            Edit
                            </Button>
                        </CardBody>
                        </Card>
                ))
            }
        </>
    )
}