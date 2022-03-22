import React, { useState, useEffect } from "react"
import { getSingleGolfer } from "./golfer_manager"
import { getPosts } from "../posts/post_manager"
import { Card, CardBody, CardSubtitle, CardText, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";


export const GolferPostList = () => {
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const history = useHistory()

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

    const deletePost = (id) => {
        fetch(`http://localhost:8000/posts/${id}`, {
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

    return (
        <>
            {
                posts.filter(post => post.golfer_id === currentUser.user.id).map(filteredPost => (
                    <Card key={filteredPost.id} style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }}>
                        <CardBody>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {filteredPost.date}
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt={filteredPost.image_url}
                            src={filteredPost?.image_url}
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                                {filteredPost.content}
                            </CardText>
                            <div style={{ "display": "flex" }}>
                                <button
                                    onClick={
                                        () => {
                                            deletePost(parseInt(filteredPost.id))
                                        }
                                    }
                                >
                                    <BsTrash/>
                                </button>
                                <button
                                    onClick={
                                        () => {
                                            history.push(`/posts/edit/${filteredPost.id}`)
                                        }
                                    }
                                >
                                    <FiEdit/>
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                ))
            }
        </>
    )
}