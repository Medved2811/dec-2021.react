import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const postsServices= {
    getAll:()=> axiosServices.get(urls.posts),
    getById:(id)=> axiosServices.get(`${urls.posts}/${id}`)
}
export {postsServices}

