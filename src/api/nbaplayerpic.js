import axios from 'axios';//library to handle api request, etc.

export default axios.create({
    baseURL: "https://nba-players.herokuapp.com/players",
});