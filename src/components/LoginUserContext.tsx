import { createContext } from "react";

export const LoginUserContext = createContext({
    user: {username: '', email: '', password: '', isLogin: false}, 
    setUser: (user: {username: string, email: string, password: string, isLogin: boolean}) => {}
})