export const createCourse = (course) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("ch_token")}`
        },
        body: JSON.stringify(course)
    }
    return fetch("http://localhost:8000/golf_courses", fetchOptions)
    .then(response => response.json())
}