export const getFinalScores = () => {
    return fetch("http://localhost:8000/final_scores", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}