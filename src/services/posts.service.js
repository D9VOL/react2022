import {axiosService} from "./axioxService";

import {urls} from "../config";

const postsService = {
    getAll: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {
    postsService
}