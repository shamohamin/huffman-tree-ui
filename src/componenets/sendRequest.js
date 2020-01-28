import Axios from "axios";


export const sendRequest = async (method , url , data) =>
                Axios.request({method , url , data})
    
