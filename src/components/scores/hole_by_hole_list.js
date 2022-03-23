import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { Table, Button } from 'reactstrap';
import { getHoleByHoleById, getHoleByHoleList } from "./score_manager"

export const HoleByHoleList = () => {
    const [holeByHoles, setHoleByHoles] = useState([])
    const history = useHistory()
    // const [table, setTable] = useState({})

    useEffect(
        () => {
            getHoleByHoleList()
                .then(setHoleByHoles)
        },
        []
    )

    // const sharedTable = (e) => {
    //     e.preventDefault()
    //     let updatedTable = {
    //         ...table,
    //         share: 0
    //     }
    //     fetch(`http://localhost:8000/hole_by_holes/${table.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Token ${localStorage.getItem("ch_token")}`
    //         },
    //         body: JSON.stringify(updatedPost)
    //     })
    // } 

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
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/scores/new")
                }}
            >
                New Score
            </Button>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/list/final_score")
                }}
            >
                Final Score
            </Button>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/list/hole_table")
                }}
            >
                Hole_by_Hole
            </Button>
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

                            <button
                                onClick={
                                    () => {
                                        deleteHoleByHole(parseInt(course.id))
                                    }
                                }
                            >
                                Delete
                            </button>
                            <button>
                                Share
                            </button>
                        </div>
                    })
                }
            </div>
        </>
    )
}