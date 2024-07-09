import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom'
import apiUrl from '../env'

export default function Semillero1() {
  const { postCorreo } = useAuth();
  const Estiloimg = {
    width: '600px',
    height: '400px',
    border: '2px solid black',
    borderRadius: '10px',
    display: 'block',
    margin: '0 auto'
  }
  const [useLogin, setLogin] = useState({
    asunto: '',
    mensaje: ''
  })

  const handleSubmit = async e => {
    //e.preventDefault(); //para que no recargue la pagina
    postCorreo(`${apiUrl}/correo`, useLogin)
  }

  const handleChance = e => {
    setLogin({ ...useLogin, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <h1 className="titulo"> Semillero 1</h1>
      <img style={Estiloimg} src={`${process.env.PUBLIC_URL}/semillero3.png`} alt="semillero1" />
      <form className='correo' onSubmit={handleSubmit}>
        <h1>Enviar correo a: johan_1115@hotmail.com</h1>
        <div className="input-box">
          <input type="text" name='asunto' placeholder="Asunto" onChange={handleChance} required></input><i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="text" name='mensaje' placeholder="Mensaje" onChange={handleChance} required></input><i className='bx bxs-user'></i>
        </div>
        <div style={{
           display: 'flex',     
           'justify-content': 'center',
           'align-items': 'center'
        }}>
          <button type="submit" className="btn">Enviar</button>
        </div>
      </form>
    </div>
  )
}
