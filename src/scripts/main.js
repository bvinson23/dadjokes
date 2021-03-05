import { JokeList } from "./feed/JokeList.js"
import { getJokes } from "./data/DataManager.js"

const showJokeList = () => {
    const jokeElement = document.querySelector(".jokeList");
    getJokes() 
        jokeElement.innerHTML = JokeList();
}

const startDadJokes = () => {
    showJokeList();
}

startDadJokes();