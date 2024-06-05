import {Link} from 'react-router-dom'
import { useAuth } from "../context/authContext";
import './NavBar.css';
export default function NavBar() {
  const { isAuthenticated, user, logout } = useAuth();
  return (
    <header className="header">
        <div className="logo">
            <a href='/'><img src={`${process.env.PUBLIC_URL}/uis-logo.svg`} alt="logo" /></a>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><a href="#">Semilleros</a>
              <ul className='list-vertical'>
                <li><Link to='/semillero1'>semillero1</Link></li>
                <li><a href='#'>semillero2</a></li>
                <li><a href='#'>semillero3</a></li>
              </ul>
            </li>
            {isAuthenticated ? (
              <li><Link to="/" onClick={()=>logout()}>Cerrar sesión</Link></li>
            ) : (
              <li><Link to="/register">Registrarse</Link></li>
            )}
          </ul>
        </nav>
        {
          isAuthenticated ? (
            <Link to="/login" className="btn"><button>{user.nombre}</button></Link>
          ):(
            <Link to="/login" className="btn"><button>Iniciar sesión</button></Link>
          )
        }
        
    </header>
  )
}