import {get,post} from "./api"
const saveUser= async (data)=>{
    let user =  await post("user/save-user",data);
    return user;
}
export {
    saveUser
}