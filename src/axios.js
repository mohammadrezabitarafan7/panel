import axios from "axios";
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})
instance.interceptors.request.use(request => {
    console.log(request)
    return request;
}, error => {
    console.log(error);
    Promise.reject(new Error("fail"));
})
instance.interceptors.response.use(responose => {
    console.log(responose)
    return responose;
})
export default instance;