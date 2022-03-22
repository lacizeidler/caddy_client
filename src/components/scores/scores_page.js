import React, { useState } from "react"
import { Button } from "reactstrap"
import { FinalScoreForm } from "./final_score_form"
import { HoleByHoleForm } from "./hole_by_hole_form"

export const ScoresPage = () => {
    const [showFinalScore, setShowFinalScore] = useState(false)
    const [showHoleByHoleScore, setShowHoleByHoleScore] = useState(false)

    const showFinalScoreFunction = () => {
        setShowFinalScore(!showFinalScore)
    }
    const showHoleByHoleFunction = () => {
        setShowHoleByHoleScore(!showHoleByHoleScore)
    }

    return(
        <>
        <button
            onClick={showFinalScoreFunction}
        >
            Final Score
        </button>
        <button
            onClick={showHoleByHoleFunction}
        >
            Hole_by_Hole
        </button>
        {showFinalScore && (
            <FinalScoreForm/>
        )}
        {showHoleByHoleScore && (
            <HoleByHoleForm/>
        )}
        </>
    )
}