import './Login-Register.css';
import {Link} from 'react-router-dom'
import { useState, useEffect }from 'react'
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../env'




export default function Login() {
    const { signup, isAuthenticated, errors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated) navigate('/')
    },[isAuthenticated, navigate])

    const [useLogin, setLogin] = useState({
        nombre_usuario:'',
        contraseña:''
    })

    const handleSubmit = async e=>{
        e.preventDefault(); //para que no recargue la pagina
        signup(`${apiUrl}/login`, useLogin)
    }

    const handleChance = e=>{
        setLogin({...useLogin, [e.target.name]: e.target.value})
    }
    return <div className='body2'>
         {<div className={`errors ${errors && errors.length > 0 ? '' : 'hidden'}`}>{errors} </div>}
        <form className='login' onSubmit={handleSubmit}>
            <h1>Iniciar sesión</h1>
            <div className="input-box">
                <input type="text" name='nombre_usuario' placeholder="nombre_usuario" onChange={handleChance} required></input><i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" name='contraseña' placeholder="contraseña" onChange={handleChance} required></input><i className='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Iniciar</button>
            <div className="register-link">
                <p>no tienes cuenta? <Link to="/register">Registrarse</Link></p> 
            </div>
        </form>

    </div>
}