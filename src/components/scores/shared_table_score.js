import React, { useState, useEffect } from "react"
import { Table, Button, Nav, NavItem, NavLink, CardTitle, CardSubtitle } from 'reactstrap';
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
            <Nav pills>
                <NavItem style={{ "marginLeft": "2%" }}>
                    <NavLink style={{ "color": "darkGreen", "border": "green solid 1px" }} href="/new/post">
                        New Post
                    </NavLink>
                </NavItem>
                <NavItem style={{ "marginLeft": "2%" }}>
                    <NavLink style={{ "color": "darkGreen", "border": "green solid 1px" }} href="/shared/final_score">
                        Final Scores
                    </NavLink>
                </NavItem>
                <NavItem style={{ "marginLeft": "2%" }}>
                    <NavLink style={{ "color": "darkGreen", "border": "green solid 1px" }} href="/shared/table_score">
                        Table Scores
                    </NavLink>
                </NavItem>
            </Nav>
            <div>
                {
                    holeByHoles.map(course => {
                        return <div style={{ "border": "grey solid 1px", "margin": "2%", "padding": "2%", "boxShadow": "5px 5px 10px 2px grey" }} key={course.id}>
                            <CardTitle tag="h5">
                                {course.golfer.user.first_name} {course.golfer.user.last_name}
                            </CardTitle>
                            <CardSubtitle>Date: {course.date}</CardSubtitle>
                            <CardSubtitle>Course: {course?.course?.name}</CardSubtitle>
                            <CardSubtitle># of Holes: {course.num_of_holes.holes}</CardSubtitle>
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
                            <TableLikes course={course} setHoleByHoles={setHoleByHoles} />
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