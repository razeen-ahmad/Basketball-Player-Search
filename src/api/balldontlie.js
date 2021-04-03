import axios from 'axios';//library to handle api request, etc.

export default axios.create({
    baseURL: "https:www.balldontlie.io/api/v1",
});