import React, { useState, useEffect } from "react"
import { Table } from 'reactstrap';
import { getSharedHoleByHole } from "./score_manager"

export const SharedHoleByHoleList = () => {
    const [holeByHoles, setHoleByHoles] = useState([])

    useEffect(
        () => {
            getSharedHoleByHole()
                .then(setHoleByHoles)
        },
        []
    )

    return (
        <>
            <div>
                {
                    holeByHoles.map(course => {
                        return <div style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }} key={course.id}>
                            <h4>Date: {course.date}</h4>
                            <h4>Course: {course.course.name}</h4>
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
                        </div>
                    })
                }
            </div>
        </>
    )
}