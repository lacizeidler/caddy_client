import { useEffect, useState } from "react/cjs/react.development"
import { useParams, useHistory } from "react-router-dom"
import { getSingleGolfer } from "../profile/golfer_manager"

export const DeleteEditPostComment = ({comment}) => {
    const [currentGolfer, setCurrentGolfer] = useState({})

    useEffect(
        () => {
            getSingleGolfer()
            .then(setCurrentGolfer)
        },
        []
    )
    
    const deleteComment = (id) => {
        fetch(`http://localhost:8000/comments/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("ch_token")}`
            }
        })
    }

    return(
        <>
        {
            comment?.golfer?.id === currentGolfer?.user?.id ?
            <button
            onClick={deleteComment(parseInt(comment.id))}
            >Delete</button> : ""
        }
        
        </>
    )
 }