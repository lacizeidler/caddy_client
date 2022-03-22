import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button, ButtonGroup } from "reactstrap"
import { FinalScoreList } from "./final_score_list"
import { HoleByHoleList } from "./hole_by_hole_list"

export const ScoresList = () => {
    const [showFinalForm, setShowFinalForm] = useState(false)
    const [showTableForm, setShowTableForm] = useState(false)
    const history = useHistory()
    const showFinalFormFunction = () => {
        setShowFinalForm(true)
    }
    const showTableFormFunction = () => {
        setShowTableForm(!showTableForm)
    }

    return (
        <>
                <Button
                    onClick={history.push("/scores/new")}
                >
                    New Score
                </Button>
                <Button
                    onClick={showFinalFormFunction}
                >
                    Final Score
                </Button>
                <Button
                    onClick={showTableFormFunction}
                >
                    Hole_by_Hole
                </Button>
            {showFinalForm ? <FinalScoreList/> : ""}
            {showTableForm ? <HoleByHoleList/> : ""}
        </>
    )
}