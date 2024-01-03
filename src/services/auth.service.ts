import axios from "axios";
import { JwtPayload, jwtDecode } from "jwt-decode";


export const login = (data:string,cb:(status:boolean,result:any)=>void) => {
    axios.post('https://fakestoreapi.com/auth/login', data,
        {
            headers: {
            "Content-Type":"application/json"
        } })
        .then(res => {
            cb(true,res);
        })
        .catch(err => {
            cb(false, err);
        })
    
}

export const getUsername = (token:string) => {
    try {
        let decoded:any = jwtDecode(token)
        return decoded.user
    } catch (error) {
        console.log(error)
    }
}