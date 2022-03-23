import React, { useState, useEffect } from 'react';
import { getPosts } from "./post_manager"
import { Button } from 'reactstrap';
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { getSingleGolfer } from '../profile/golfer_manager';

export const PostLikes = ({ post, setPosts }) => {
    const [currentGolfer, setCurrentGolfer] = useState({})

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
        .then(() => {
            getPosts()
                .then(setPosts)
        })
    }

    const createPostLike = (id) => {
        fetch(`http://localhost:8000/posts/${id}/like`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
        .then(() => {
            getPosts()
                .then(setPosts)
        })
    }

    const likes = post.likes.find(like => like?.id === currentGolfer?.user?.id)
    return (
        <>
            {
                likes ?
                    <Button
                        color='success'
                        onClick={evt => {
                            evt.preventDefault()
                            deletePostLike(post.id)
                        }}
                    >
                        Unlike <BsFillHeartFill />
                        {post.likes.length}
                    </Button>
                    :
                    <Button
                        color="success"
                        onClick={evt => {
                            evt.preventDefault()
                            createPostLike(post.id)
                        }}
                    >
                        Like <BsHeart />
                        {post.likes.length}
                    </Button>
            }
        </>
    )
}