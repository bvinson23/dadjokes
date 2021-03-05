export const getJokes = () => {
    return fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "github.com/bvinson23/dadjokes"
        }
    })
    .then(response => response.json())
}