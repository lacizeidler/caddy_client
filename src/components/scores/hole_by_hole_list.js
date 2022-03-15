// Filter through to get all the hole_by_hole objects that have the current user golfer_id.
// Filter through individual holes objects that have a hole_by_hole_id that matches any of the hole_by_hole objects that were filtered earlier. 

import React, { useState, useEffect } from "react"
import { getSingleGolfer } from "../profile/golfer_manager"
import { getHoleByHole, getHoleByHoleList, getIndividualHoles } from "./score_manager"

export const HoleByHoleList = () => {
    const [holeByHoles, setHoleByHoles] = useState([])
    const [individualHoles, setIndividualHoles] = useState([])

    useEffect(
        () => {
            getHoleByHoleList()
                .then(setHoleByHoles)
        },
        []
    )

    useEffect(
        () => {
            getIndividualHoles()
            .then(setIndividualHoles)
        },
        []
    )
    
    
    var hole_by_holes = holeByHoles.map(holeByHole => {
        return {
            id: holeByHole.id,
            date: holeByHole.date,
            share: holeByHole.share,
            course_id: holeByHole.course_id,
            golfer_id: holeByHole.golfer_id,
            num_of_holes_id: holeByHole.num_of_holes_id
        }
    })

    return(
        <>
        <div>
        {
            individualHoles.filter(individual => individual.hole_by_hole_id === hole_by_holes.id).map(filteredIndividual => (
                <div>
                    <h2>{filteredIndividual.par}</h2>
                    <h2>{hole_by_holes.date}</h2>
                </div>
            ))
        }
        </div>
        </>
    )
}