import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f24757fe3352418d8e767e60bef1eee3'
    }
})