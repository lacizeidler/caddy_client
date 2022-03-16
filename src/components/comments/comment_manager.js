export const createComment = (comment) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        },
        body: JSON.stringify(comment)
    }
    return fetch("http://localhost:8000/comments", fetchOptions)
    .then(response => response.json())
}