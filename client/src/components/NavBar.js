import './NavBar.css';
export default function NavBar() {
  return (
    <header className="header">
        <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Semilleros</a>
              <ul className='list-vertical'>
                <li><a href='#'>semillero1</a></li>
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