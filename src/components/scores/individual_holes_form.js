import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createIndividualHole } from "./score_manager"
import { Table, Input, Button } from 'reactstrap';

export const IndividualHolesForm = () => {
    const history = useHistory()
    const [newIndividualHole, setNewIndividualHole] = useState({
        par: 0,
        score: 0,
        hole_num: 0
    })

    useEffect(
        () => {
            createIndividualHole()
                .then(setNewIndividualHole)
        },
        []
    )

    const changeIndividualHoleState = (domEvent) => {
        const copy = { ...newIndividualHole }
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setNewIndividualHole(copy)
    }


    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>
                            Hole #
                        </th>
                        <th>
                            Par
                        </th>
                        <th>
                            Score
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">

                        </th>
                        <td>
                            <Input
                                id="exampleText"
                                name="par"
                                type="number"
                                value={newIndividualHole.par}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                        <td>
                            <Input
                                id="exampleText"
                                name="score"
                                type="number"
                                value={newIndividualHole.score}
                                onChange={changeIndividualHoleState}
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button
            onClick={evt => {
                evt.preventDefault()

                        const individualHole = {
                            par: parseInt(newIndividualHole.par),
                            score: parseInt(newIndividualHole.score),
                            share: newIndividualHole.share
                        }

                        // Send POST request to your API
                        createIndividualHole(individualHole)
                            .then(() => history.push("/"))
            }
            }
            >
                Submit
            </Button>
        </>
    )
}