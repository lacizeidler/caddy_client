import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

export const ShareTable = ({course}) => {
    const history = useHistory()
    const [table, setTable] = useState({
        share: 1
    })

    const UpdatedTable = (evt) => {
        evt.preventDefault()
        const updatedTable = {
            share: table.share
        }
        fetch(`http://localhost:8000/hole_by_holes/${course.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            },
            body: JSON.stringify(updatedTable)
        })
            .then(
                () => {
                    history.push(`/shared/table_score`)
                }
            )
    }

    return(
        <>
            <Button
                color="success"
                onClick={
                    (evt) => {
                        UpdatedTable(evt)
                    }
                }
            >Share</Button>
        </>
    )
}