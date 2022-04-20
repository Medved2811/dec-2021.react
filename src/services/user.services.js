import {axiosService} from "./axios.services";
import {urls} from "../constants";

const userServices ={
    getAll: () =>axiosService.get(urls.users),
    getById: (id) =>axiosService(`${urls.users}/${id}`)
}
export {userServices}

