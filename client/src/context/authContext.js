import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthPrivider")
    return context;
}

export const AuthProvider = ({ children }) => {
    /* const [user, setuser] = useState(null); */
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);


    const signup = async (url, user) => {
        try {
            const res = await fetch(url , {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { "content-type": "application/json" }
            })
            const data = await res.json();
            console.log(data)
            if (!res.ok) throw new Error(data.message);
            setAuthenticated(true)
            setErrors(null);
        } catch (error) {
            console.log(error.message);
            setErrors(error.message);
        }
    };

    useEffect(()=>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            },5000)
            return ()=>clearTimeout(timer)
        }
    })
    return (
        <AuthContext.Provider
            value={{
                signup,
                isAuthenticated,
                errors
            }}>
            {children}
        </AuthContext.Provider>
    )
}

