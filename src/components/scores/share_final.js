import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";

export const ShareFinal = ({score}) => {
    const history = useHistory()
    const [final, setFinal] = useState({
        score: score.score,
        par: score.par,
        share: 1
    })

    const UpdatedFinal = (evt) => {
        evt.preventDefault()
        const updatedFinal = {
            score: final.score,
            par: final.par,
            share: final.share
        }
        fetch(`http://localhost:8000/final_scores/${score.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            },
            body: JSON.stringify(updatedFinal)
        })
            .then(
                () => {
                    history.push(`/shared/final_score`)
                }
            )
    }

    return(
        <>
            <button
                onClick={
                    (evt) => {
                        UpdatedFinal(evt)
                    }
                }
            >Share</button>
        </>
    )
}