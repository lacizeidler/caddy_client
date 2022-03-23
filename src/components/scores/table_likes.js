import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { getSingleGolfer } from '../profile/golfer_manager';
import { getSharedFinalScores, getSharedHoleByHole } from './score_manager';

export const TableLikes = ({ course, setHoleByHoles }) => {
    const [currentGolfer, setCurrentGolfer] = useState({})

    useEffect(
        () => {
            getSingleGolfer().
                then(setCurrentGolfer)
        },
        []
    )

    const deleteTableLike = (id) => {
        fetch(`http://localhost:8000/hole_by_holes/${id}/unlike`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
        .then(() => {
            getSharedHoleByHole()
                .then(setHoleByHoles)
        })
    }

    const createTableLike = (id) => {
        fetch(`http://localhost:8000/hole_by_holes/${id}/like`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
        .then(() => {
            getSharedHoleByHole()
                .then(setHoleByHoles)
        })
    }

    const likes = course.table_likes.find(like => like?.id === currentGolfer?.user?.id)
    return (
        <>
            {
                likes ?
                    <Button
                        color="success"
                        onClick={evt => {
                            evt.preventDefault()
                            deleteTableLike(course.id)
                        }}
                    >
                        Unlike <BsFillHeartFill />
                        {course.table_likes.length}
                    </Button>
                    :
                    <Button
                        color="success"
                        onClick={evt => {
                            evt.preventDefault()
                            createTableLike(course.id)
                        }}
                    >
                        Like <BsHeart />
                        {course.table_likes.length}
                    </Button>
            }
        </>
    )
}