import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-f81bf/us-central1/api'  //the api url
});

export default instance;