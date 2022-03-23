import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "reactstrap"

export const ScoresList = () => {
    const history = useHistory()

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
        </>
    )
}