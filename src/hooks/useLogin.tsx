import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
    const [username, setUsername] = useState('');
    useEffect(() => {
    const token = localStorage.getItem('token')||'';
    const user = getUsername(token);
    if (user) {
      setUsername(user);
    } else {
      location.href='/login'
    }
    }, [])
    
    return username
}