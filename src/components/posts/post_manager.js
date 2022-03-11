export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}