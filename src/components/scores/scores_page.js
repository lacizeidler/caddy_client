import React, { useState, useEffect } from "react"
import { Button } from "reactstrap"
import { FinalScoreForm } from "./final_score_form"

export const ScoresPage = () => {
    const [showForm, setShowForm] = useState(false)
    const showFormFunction = () => {
        setShowForm(!showForm)
    }

    return(
        <>
        <Button
            onClick={showFormFunction}
        >
            Final Score
        </Button>
        <Button>
            Hole_by_Hole
        </Button>
        {showForm && (
            <FinalScoreForm/>
        )}
        </>
    )
}