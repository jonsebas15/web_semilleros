import 'boxicons'
import './Login-Register.css';
import {Link} from 'react-router-dom'
import { useState, useEffect }from 'react'


export default function Login() {
    const [useLogin, setLogin] = useState({
        nombre_usuario:'',
        contraseña:''
    })

    const handleSubmit = async e=>{
        e.preventDefault(); //para que no recargue la pagina
        const res = await fetch('http://localhost:4000/login',{
            method: "POST",
            body: JSON.stringify(useLogin),
            headers:{ "content-type": "application/json"}
        });
        const data = await res.json();
        console.log(data)
    }

    const handleChance = e=>{
        setLogin({...useLogin, [e.target.name]: e.target.value})
    }
    return <div className='body2'>
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