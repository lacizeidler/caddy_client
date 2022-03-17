export const getFinalScores = () => {
    return fetch("http://localhost:8000/final_scores", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}

export const getHoleByHole = () => {
    return fetch("http://localhost:8000/hole_by_holes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}

export const getIndividualHoles = () => {
    return fetch("http://localhost:8000/individual_holes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}

export const createIndividualHole = (individualHole) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        },
        body: JSON.stringify(individualHole)
    }
    return fetch("http://localhost:8000/individual_holes", fetchOptions)
    .then(response => response.json())
}

export const createHoleByHole = (holeByHole) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        },
        body: JSON.stringify(holeByHole)
    }
    return fetch("http://localhost:8000/hole_by_holes", fetchOptions)
    .then(response => response.json())
}

export const getHoleByHoleList = () => {
    return fetch(`http://localhost:8000/hole_by_holes/userholebyhole`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}

export const getHoleByHoleById = (id) => {
    return fetch(`http://localhost:8000/hole_by_holes/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}