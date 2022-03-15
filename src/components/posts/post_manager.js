export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}

export const getCourses = () => {
    return fetch("http://localhost:8000/golf_courses", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}

export const getNumOfHoles = () => {
    return fetch("http://localhost:8000/num_of_holes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}

export const createPost = (post) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        },
        body: JSON.stringify(post)
    }
    return fetch("http://localhost:8000/posts", fetchOptions)
    .then(response => response.json())
}

export const createFinalScore = (finalScore) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        },
        body: JSON.stringify(finalScore)
    }
    return fetch("http://localhost:8000/final_scores", fetchOptions)
    .then(response => response.json())
}

export const getPostById = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}