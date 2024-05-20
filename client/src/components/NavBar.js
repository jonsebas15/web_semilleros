import {Link} from 'react-router-dom'
import './NavBar.css';
export default function NavBar() {
  return (
    <header className="header">
        <div className="logo">
            <a href='/'><img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="logo" /></a>
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
            <li><a href="#">Registrarse</a></li>
          </ul>
        </nav>
        <a href="#" className="btn"><button>contactanos</button></a>
    </header>
  )
}