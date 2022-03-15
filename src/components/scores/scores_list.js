import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "reactstrap"
import { FinalScoreList } from "./final_score_list"

export const ScoresList = () => {
    const [showForm, setShowForm] = useState(false)
    const history = useHistory()
    const showFormFunction = () => {
        setShowForm(!showForm)
    }

    return(
        <>
        <Button
            onClick={
                () => 
                history.push("/scores/new")
            }
        >
            New Score
        </Button>
        <Button
            onClick={showFormFunction}
        >
            Final Score
        </Button>
        <Button>
            Hole_by_Hole
        </Button>
        {showForm && (
            <FinalScoreList/>
        )}
        </>
    )
}