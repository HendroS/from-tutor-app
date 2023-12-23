import axios from "axios";
import { jwtDecode } from "jwt-decode";


export const login = (data,cb) => {
    axios.post('https://fakestoreapi.com/auth/login', JSON.stringify(data),
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

export const getUsername = (token) => {
    try {
        let decoded = jwtDecode(token);
        return decoded.user
    } catch (error) {
        console.log(error)
    }
}