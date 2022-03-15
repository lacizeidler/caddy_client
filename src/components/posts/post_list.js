import React, { useState, useEffect} from 'react';
import { getPosts } from "./post_manager"
import { Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { BsHeart } from "react-icons/bs";
import {BiCommentDetail} from "react-icons/bi"

export const PostList = () => {
    const [posts, setPosts] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getPosts()
            .then(setPosts)
        },
        []
    )

    return (
        <>
        <Button
            onClick={
                () => {
                    history.push("/new/post")
                }
            }
        >New Post</Button>
        {
            posts.map(post => {
                return <Card key={post.id} style={{"border": "grey solid 1px", "margin": "1%", "padding": "2%"}}>
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
                            src={post?.image_url}
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                            {post.content}
                            </CardText>
                            <Button>
                            <BsHeart/>
                            </Button>
                            <Button>
                            <BiCommentDetail/>
                            </Button>
                        </CardBody>
                        </Card>
            })
        }
        </>
    )
}