import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { Table, Button } from 'reactstrap';
import { getHoleByHoleList } from "./score_manager"

export const HoleByHoleList = () => {
    const [holeByHoles, setHoleByHoles] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getHoleByHoleList()
                .then(setHoleByHoles)
        },
        []
    )

    return (
        <>
            <div>
                {
                    holeByHoles.map(course => {
                        return <div key={course.id}>
                            <h4>Date: {course.date}</h4>
                            <h4>Course: {course.course.name}</h4>
                            <h4># of Holes: {course.num_of_holes.holes}</h4>

                            {course.holes_for_hole_by_hole.map(hole => {
                                return <div key={hole.id}>
                                    <Table hover>
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
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    {hole.hole_num}
                                                </th>
                                                <td>
                                                    {hole.par}
                                                </td>
                                                <td>
                                                    {hole.score}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                </div>
                            })}

                            <Button
                                onClick={
                                    () => {
                                        history.push(`/new/individual_holes/${course.id}`)
                                    }
                                }
                            >
                                Add Holes
                            </Button>
                        </div>
                    })
                }
            </div>
        </>
    )
}