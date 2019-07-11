import axios from 'axios'
const url = 'http://localhost:5000'

export function register(input){
    console.log("user data",input)
    return axios.post( url+ `/user/registration`,input )
}

export function login(input){
    console.log("user data",input)
    return axios.post( url+ `/user/login`,input )
}

export function forgetPass(input){
    return axios.post(url +`/user/forgetpass/`,input)
}
export function resetPass(input){
    return axios.post(url +`/user/resetpass/`,input)
}