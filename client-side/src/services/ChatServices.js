import axios from 'axios'
const url = 'http://localhost:5000'

export function send(msg){
    console.log("user data",msg)
    return axios.post( url+ `/chat/sender`,msg )
}
