import { useEffect, useState } from "react/cjs/react.development"
import { useParams, useHistory } from "react-router-dom"
import { getFinalScoreById } from "../scores/score_manager"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { createComment } from "./comment_manager";

export const FinalComments = () => {
    const history = useHistory()
    const [final, setFinal] = useState({})
    const { finalId } = useParams()
    const [currentComment, setCurrentComment] = useState({
        comment: "",
        final_score_id: finalId
    })


    useEffect(
        () => {
            getFinalScoreById(finalId)
                .then(setFinal)
        },
        [finalId]
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
            <Card key={final.id} style={{ "border": "grey solid 1px", "margin": "2%", "padding": "2%" }}>
                <CardBody>
                    <CardTitle tag="h5">
                        {final.golfer?.user.first_name} {final.golfer?.user.last_name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {final.date}
                    </CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardText>
                        Par: {final.par}
                    </CardText>
                    <CardText>
                        Score: {final.score}
                    </CardText>
                    <CardText>
                        Golf Course: {final?.course?.name}
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
                final.comment_final?.map(comment => {
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
                <button
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()

                        const comment = {
                            comment: currentComment.comment,
                            final_score_id: currentComment.final_score_id
                        }

                        // Send POST request to your API
                        createComment(comment)
                        getFinalScoreById(finalId)
                            .then(setFinal)
                    }}
                >
                    Submit
                </button>
            </Form>
        </>
    )
}