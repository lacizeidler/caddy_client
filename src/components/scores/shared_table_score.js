import React, { useState, useEffect } from "react"
import { Table, Button } from 'reactstrap';
import { getSharedHoleByHole } from "./score_manager"
import { useHistory } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi"
import { TableLikes } from "./table_likes";

export const SharedHoleByHoleList = () => {
    const [holeByHoles, setHoleByHoles] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getSharedHoleByHole()
                .then(setHoleByHoles)
        },
        []
    )

    return (
        <>
            <Button
                size="sm"
                color="success"
                onClick={
                    () => {
                        history.push("/new/post")
                    }
                }
            >New Post</Button>
            <Button
                size="sm"
                color="success"
                onClick={
                    () => {
                        history.push("/shared/final_score")
                    }
                }
            >Final Scores</Button>
            <Button
                size="sm"
                color="success"
                onClick={
                    () => {
                        history.push("/shared/table_score")
                    }
                }
            >Table Scores</Button>
            <div>
                {
                    holeByHoles.map(course => {
                        return <div style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }} key={course.id}>
                            <h4>Date: {course.date}</h4>
                            <h4>Course: {course?.course?.name}</h4>
                            <h4># of Holes: {course.num_of_holes.holes}</h4>
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
                            {course.holes_for_hole_by_hole.map(hole => {
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
                            <TableLikes course={course} setHoleByHoles={setHoleByHoles}/>
                            <Button
                                color="success"
                                onClick={
                                    () => {
                                        history.push(`/hole_by_holes/comments/${course.id}`)
                                    }
                                }
                            >
                                Comments <BiCommentDetail />
                            </Button>
                        </div>
                    })
                }
            </div>
        </>
    )
}