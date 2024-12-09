import axios from "axios"



const instance = axios.create({
    baseURL: 'https://hapsie-d110953d3d24.herokuapp.com/'
});


export default instance