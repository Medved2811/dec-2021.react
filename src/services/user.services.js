import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const userServices ={
    getAll:()=> axiosServices.get(urls.users)
}
 export {userServices}
