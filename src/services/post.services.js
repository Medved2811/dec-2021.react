import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const postServices ={
    getPostByUserId: (userId)=> axiosServices.get(`${urls.posts}?userId=${userId}`)
}
export {postServices};




