import axios from "axios";
import {baseUrl} from "./config"
const post = (url,data)=>{
    return   axios.post(baseUrl+url,data,getHeader())
}

const get = (url)=>{
    return axios.get(baseUrl+url,getHeader())
}

const put = (data)=>{
    axios.put("ur",data,getHeader())
}

const getHeader = ()=>{
    const header = {
        Authorzation:"token"
    }
    return localStorage.get("token");
}

export {
    post,
    get,
    put
}
