import { createContext, useState, useContext, useEffect } from "react";
import Cookies from 'js-cookie';

export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthPrivider")
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setuser] = useState("");
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);


    const signup = async (url, user) => {
        try {
            const res = await fetch(url , {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { "content-type": "application/json" },
                credentials: 'include',
            })
            const data = await res.json();
            setuser({
                nombre:data.nombre
            })
            if (!res.ok) throw new Error(data.message);
            setAuthenticated(true)
            setErrors([]);
        } catch (error) {
            console.log(error.message);
            setErrors(error.message);
        }
    };
    const logout = ()=>{
        Cookies.remove("token");
        setAuthenticated(false);
        setuser(null)
    }

    useEffect(()=>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            },5000)
            return ()=>clearTimeout(timer)
        }
    })
    useEffect(()=>{
        try {
            const cookies = Cookies.get()
            if(cookies.token) {
                async function fetchDate(){
                    const res = await fetch('http://localhost:4000/verifyToken',{
                        method: 'POST',
                        body: JSON.stringify(cookies),
                        headers: { "content-type": "application/json" },
                        credentials: 'include',
                    })
                    const data = await res.json();
                    if(res.ok){
                        setAuthenticated(true)
                        setErrors([]);
                        setuser({
                            nombre:data.nombre
                        })
                        console.log(data.nombre)
                    }else{
                        setAuthenticated(false)
                    }
                }
                fetchDate();
            }
        } catch (error) {
            console.log(error)
            setAuthenticated(false)
        }
    }, [])
    return (
        <AuthContext.Provider
            value={{
                signup,
                isAuthenticated,
                errors,
                user,
                logout
            }}>
            {children}
        </AuthContext.Provider>
    )
}

