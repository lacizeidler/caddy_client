import { useEffect, useState } from "react/cjs/react.development"
import { useParams, useHistory } from "react-router-dom"
import { getHoleByHoleById } from "../scores/score_manager"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap';
import { createComment, createTableComment } from "./comment_manager";

export const TableComments = () => {
    const history = useHistory()
    const [table, setTable] = useState({})
    const { tableId } = useParams()
    const [currentComment, setCurrentComment] = useState({
        comment: "",
        hole_by_hole_id: tableId
    })


    useEffect(
        () => {
            getHoleByHoleById(tableId)
                .then(setTable)
        },
        [tableId]
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
                <div style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }} key={table.id}>
                    <h4>Date: {table.date}</h4>
                    <h4>Course: {table?.course?.name}</h4>
                    <h4># of Holes: {table?.num_of_holes?.holes}</h4>
                    <Table>
                        <thead>
                            <tr>
                                <th>
                                    Hole #
                                </th>
                                <th>
                                    Par
                                </th>
                                <th>
                                    Score
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    {table?.holes_for_hole_by_hole?.map(hole => {
                        return <div key={hole.id}>
                            <Table hover>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            {hole.hole_num}
                                        </th>
                                        <th scope="row">
                                            {hole.par}
                                        </th>
                                        <th scope="row">
                                            {hole.score}
                                        </th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    })}
            </div>

            <CardTitle
                className="mb-2 text-muted"
                tag="h4"
                style={{ "margin": "1%" }}
            >
                Comments
            </CardTitle>

            {
                table.comment_table?.map(comment => {
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
                            hole_by_hole_id: currentComment.hole_by_hole_id
                        }

                        // Send POST request to your API
                        createTableComment(comment)
                        getHoleByHoleById(tableId)
                            .then(setTable)
                    }}
                >
                    Submit
                </button>
            </Form>
        </>
    )
}