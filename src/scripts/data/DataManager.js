export const getJokes = () => {
    return fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
}