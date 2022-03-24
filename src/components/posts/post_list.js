import React, { useState, useEffect } from 'react';
import { getPosts } from "./post_manager"
import { Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, Button, NavItem, NavLink, Nav } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi"
import { getSingleGolfer } from '../profile/golfer_manager';
import { PostLikes } from './post_likes';

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
            <Nav pills>
                <NavItem style={{ "marginLeft": "2%"}}>
                    <NavLink style={{"color": "darkGreen", "border": "green solid 1px"}} href="/new/post">
                        New Post
                    </NavLink>
                </NavItem>
                <NavItem style={{ "marginLeft": "2%"}}>
                    <NavLink style={{"color": "darkGreen", "border": "green solid 1px"}} href="/shared/final_score">
                        Final Scores
                    </NavLink>
                </NavItem>
                <NavItem style={{ "marginLeft": "2%"}}>
                    <NavLink style={{"color": "darkGreen", "border": "green solid 1px"}}  href="/shared/table_score">
                        Table Scores
                    </NavLink>
                </NavItem>
            </Nav>
            {
                posts.map(post => {
                    return <Card key={post.id} style={{ "border": "grey solid 1px", "margin": "2%", "padding": "2%" }}>
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
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {post.course.name}
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
                            <PostLikes post={post} setPosts={setPosts} />
                            <Button
                                color='success'
                                onClick={
                                    () => {
                                        history.push(`/posts/comments/${post.id}`)
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