import { useEffect, useState } from "react/cjs/react.development"
import { useParams, useHistory } from "react-router-dom"

export const HoleByHoleForm9 = () => {
    const [newHoleByHole, setNewHoleByHole] = useState({
        course_id: 0,
        num_of_holes_id: 0,
        share: 0
    })
    const [numOfHoles, setNumOfHoles] = useState([])

    
    return (
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
                        1
                    </th>
                    <td>
                        Mark
                    </td>
                    <td>
                        Otto
                    </td>
                    <td>
                        @mdo
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        Jacob
                    </td>
                    <td>
                        Thornton
                    </td>
                    <td>
                        @fat
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        Larry
                    </td>
                    <td>
                        the Bird
                    </td>
                    <td>
                        @twitter
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}