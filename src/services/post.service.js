import {axiosServices} from "./axios.service";
import {urls} from "../configs";

const postService = {
    getAll: () => axiosServices.get(urls.posts),
    getById: (id)=>axiosServices.get(`${urls.posts}/${id}`)
}

export {
    postService
}