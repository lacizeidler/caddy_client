export const getSingleGolfer = () => {
    return fetch(`http://localhost:8000/golfers/currentgolfer`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        }
    })
        .then(response => response.json())
}