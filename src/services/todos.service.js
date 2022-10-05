import {axiosService} from "./axioxService";

import {urls} from "../config";

const todosService = {
    getAll: () => axiosService.get(urls.todos)
}

export {
    todosService
}