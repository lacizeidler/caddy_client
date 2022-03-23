import React, { useState, useEffect } from 'react';
import { getPosts } from "./post_manager"
import { Card, CardBody, CardTitle, CardSubtitle, CardLink, CardText, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi"
import { getSingleGolfer } from '../profile/golfer_manager';

export const PostList = () => {
    const [posts, setPosts] = useState([])
    const history = useHistory()
    const [currentGolfer, setCurrentGolfer] = useState({})

    useEffect(
        () => {
            getPosts()
                .then(setPosts)
        },
        []
    )

    useEffect(
        () => {
            getSingleGolfer().
                then(setCurrentGolfer)
        },
        []
    )

    const deletePostLike = (id) => {
        fetch(`http://localhost:8000/posts/${id}/unlike`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
        getPosts()
            .then(setPosts)
    }

    const createPostLike = (id) => {
        fetch(`http://localhost:8000/posts/${id}/like`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
        getPosts()
            .then(setPosts)
    }

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
                posts.map(post => {
                    return <Card key={post.id} style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }}>
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
            
                            {
                                post.likes.length === 0 
                                ? <button
                                onClick={evt => {
                                    evt.preventDefault()
                                    createPostLike(post.id)
                                }}
                                >
                                    <BsHeart/>
                                </button>
                                :
                                post.likes.map(likeObj => {
                                    if (likeObj.id === currentGolfer.id) {
                                        return <button key={likeObj.id}
                                        onClick={evt => {
                                            evt.preventDefault()
                                            deletePostLike(post.id)
                                        }}
                                        >
                                            <BsFillHeartFill />
                                            {post.likes.length}
                                        </button>
                                    } else {
                                        return <button key={likeObj.id}
                                        onClick={evt => {
                                            evt.preventDefault()
                                            createPostLike(post.id)
                                        }}
                                        >
                                            <BsHeart/>
                                            {post.likes.length}
                                        </button>
                                    }
                                })
                            }

                            <button
                                onClick={
                                    () => {
                                        history.push(`/posts/comments/${post.id}`)
                                    }
                                }
                            >
                                <BiCommentDetail />
                            </button>
                        </CardBody>
                    </Card>
                })
            }
        </>
    )
}