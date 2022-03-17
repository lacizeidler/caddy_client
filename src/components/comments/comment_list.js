import { useEffect, useState } from "react/cjs/react.development"
import { useParams, useHistory } from "react-router-dom"
import { getPostById } from "../posts/post_manager"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { createComment } from "./comment_manager";

export const CommentList = () => {
    const history = useHistory()
    const [post, setPost] = useState({})
    const { postId } = useParams()
    const [currentComment, setCurrentComment] = useState({
        comment: "",
        post_id: postId
    })


    useEffect(
        () => {
            getPostById(postId)
                .then(setPost)
        },
        [postId]
    )

    const changeCommentState = (domEvent) => {
        const copy = { ...currentComment }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setCurrentComment(copy)
    }

    return (
        <>
            <Card key={post.id} style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }}>
                <CardBody>
                    <CardTitle tag="h5">
                        {post.golfer?.user.first_name} {post.golfer?.user.last_name}
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
                </CardBody>
            </Card>
            <CardTitle
                className="mb-2 text-muted"
                tag="h4"
                style={{ "margin": "1%" }}
            >
                Comments
            </CardTitle>

            {
                post.comment_post?.map(comment => {
                    return <div key={comment.id} style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }}>
                        <Card
                        >
                            <CardBody>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {comment.golfer.user?.first_name} {comment.golfer.user?.last_name}
                                </CardSubtitle>
                                <CardText>
                                    {comment.comment}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                })
            }
            <Form style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }}>
                <FormGroup>
                    <Label for="exampleText">
                        New Comment
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Input
                        id="exampleText"
                        name="comment"
                        type="textarea"
                        placeholder="Write your comment here ..."
                        value={currentComment.comment}
                        onChange={changeCommentState}
                    />
                </FormGroup>
                <Button
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const comment = {
                            comment: currentComment.comment,
                            post_id: currentComment.post_id
                        }

                        // Send POST request to your API
                        createComment(comment)
                            .then(() => history.push("/"))
                    }}
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}