import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { getSingleGolfer } from '../profile/golfer_manager';
import { getSharedFinalScores } from './score_manager';

export const FinalScoreLikes = ({ score, setFinalScore }) => {
    const [currentGolfer, setCurrentGolfer] = useState({})

    useEffect(
        () => {
            getSingleGolfer().
                then(setCurrentGolfer)
        },
        []
    )

    const deleteFinalLike = (id) => {
        fetch(`http://localhost:8000/final_scores/${id}/unlike`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
        .then(() => {
            getSharedFinalScores()
                .then(setFinalScore)
        })
    }

    const createFinalLike = (id) => {
        fetch(`http://localhost:8000/final_scores/${id}/like`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
        .then(() => {
            getSharedFinalScores()
                .then(setFinalScore)
        })
    }

    const likes = score.final_likes.find(like => like?.id === currentGolfer?.user?.id)
    return (
        <>
            {
                likes ?
                    <Button
                        color="success"
                        onClick={evt => {
                            evt.preventDefault()
                            deleteFinalLike(score.id)
                        }}
                    >
                        Unlike <BsFillHeartFill />
                        {score.final_likes.length}
                    </Button>
                    :
                    <Button
                        color="success"
                        onClick={evt => {
                            evt.preventDefault()
                            createFinalLike(score.id)
                        }}
                    >
                        Like <BsHeart />
                        {score.final_likes.length}
                    </Button>
            }
        </>
    )
}