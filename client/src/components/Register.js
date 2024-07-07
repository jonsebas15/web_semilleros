import { useState, useEffect } from 'react'
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom'
import apiUrl from '../env'
export default function Register() {
    const { signup, isAuthenticated, errors } = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated) navigate('/')
    },[isAuthenticated])

    const [useRegister, setRegister] = useState({
        nombre:'',
        codigo:'',
        correo:'',
        nombre_usuario:'',
        contraseña:''
    })
    const handleSubmit = async e=>{
        e.preventDefault();
        signup(`${apiUrl}/register`, useRegister)
    }
    const handleChance = e=>{
        setRegister({...useRegister, [e.target.name]:e.target.value})
    }
    return <div className='body2'>
         {<div className={`errors ${errors && errors.length > 0 ? '' : 'hidden'}`}>{errors} </div>}
        <form className='login2' onSubmit={handleSubmit}>
            <h1>Registro</h1>
            <div className="input-box2">
                <p>Nombre del estudiante</p><input type="text" name='nombre' onChange={handleChance} placeholder="Nombre"></input>
            </div>
            <div className="input-box2">
                <p>Codigo del estudiante</p><input type="text" name='codigo' onChange={handleChance} placeholder="codigo"></input>
            </div>
            <div className="input-box2">
                <p>correo del estudiante</p><input type="text" name='correo' onChange={handleChance} placeholder="correo"></input>
            </div>
            <div className="input-box2">
                <p>Nuevo usuario</p><input type="text" name='nombre_usuario' onChange={handleChance} placeholder="nombre de usuario"></input>
            </div>
            <div className="input-box2">
                <p>Contraseña</p><input type="text" name='contraseña' onChange={handleChance} placeholder="contraseña"></input>
            </div>
            <div>
                <button type="submit" className="btn">Registrarse</button>
            </div>
        </form>
    </div>
}