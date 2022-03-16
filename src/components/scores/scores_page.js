import React, { useState } from "react"
import { Button } from "reactstrap"
import { FinalScoreForm } from "./final_score_form"

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
        <Button
            onClick={showFinalScoreFunction}
        >
            Final Score
        </Button>
        <Button
            onClick={showHoleByHoleFunction}
        >
            Hole_by_Hole
        </Button>
        {showFinalScore && (
            <FinalScoreForm/>
        )}
        {/* {showHoleByHoleScore && (
            <HoleByHoleForm/>
        )} */}
        </>
    )
}