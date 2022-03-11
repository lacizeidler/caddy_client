import React, { useState, useEffect} from 'react';
import { getPosts } from "./post_manager"
import { Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText } from 'reactstrap';

export const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(
        () => {
            getPosts()
            .then(setPosts)
        },
        []
    )

    return (
        <>
        {
            posts.map(post => {
                return <Card>
                        <CardBody>
                            <CardTitle tag="h5">
                            {post.golfer.user.first_name} {post.golfer.user.last_name}
                            </CardTitle>
                            <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            >
                            {post.date}
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                            {post.content}
                            </CardText>
                            <CardLink href="#">
                            Card Link
                            </CardLink>
                            <CardLink href="#">
                            Another Link
                            </CardLink>
                        </CardBody>
                        </Card>
            })
        }
        </>
    )
}