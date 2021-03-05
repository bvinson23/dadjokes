import { Joke } from "./Joke.js";

export const JokeList = (jokeObject) => {
    let jokeHTML = "";
    jokeHTML += Joke(jokeObject);
    return jokeHTML;
}