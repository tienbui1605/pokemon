import axios from "axios";
const headers={
    Accept:'application/json',
    'Content-Type':'application/JSON; charset=utf-8'
}
class AxiosClient {
    instance=null

    get http(){
        if (this.instance==null){
            this.instance=this.init()
        }
        return this.instance
    }
    // rest api [get post put delete]

    init(){
        const axiosInstance=axios.create({
            baseURL: process.env.REACT_APP_HOST_API,
            headers,
        })
        axiosInstance.interceptors.response.use(
        ({data}) => data,
        (error)=>{
            error={
                const {data}=error 
                this.handleResponseError(data)
                return this.handleResponseError(data);
            }
        })
    }
}
handleResponseError(error){
    return Promise.reject(error)
}
const axiosClient = new AxiosClient()
export default axiosClient