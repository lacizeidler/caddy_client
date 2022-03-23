import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "reactstrap"

export const ScoresPage = () => {
    const history = useHistory()

    return (
        <>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/form/final_score")
                }}
            >
                Final Score
            </Button>
            <Button
                color="success"
                onClick={(evt) => {
                    evt.preventDefault()
                    history.push("/form/hole_table")
                }}
            >
                Hole_by_Hole
            </Button>
        </>
    )
}