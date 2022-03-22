import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { Table, Button } from 'reactstrap';
import { getSingleGolfer } from "../profile/golfer_manager";
import { getHoleByHoleList } from "./score_manager"

export const HoleByHoleList = () => {
    const [holeByHoles, setHoleByHoles] = useState([])
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
            getHoleByHoleList()
                .then(setHoleByHoles)
        },
        []
    )

    const deleteHoleByHole = (id) => {
        fetch(`http://localhost:8000/hole_by_holes/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
            .then(() => {
                getHoleByHoleList()
                .then(setHoleByHoles)
            })
    }

    return (
        <>
            <div>
                {
                    holeByHoles.filter(hole => hole.golfer_id === currentUser.user.id).map(course => {
                        return <div style={{ "border": "grey solid 1px", "margin": "1%", "padding": "2%" }} key={course.id}>
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

                            <button
                                onClick={
                                    () => {
                                        deleteHoleByHole(parseInt(course.id))
                                    }
                                }
                            >
                                Delete
                            </button>
                        </div>
                    })
                }
            </div>
        </>
    )
}