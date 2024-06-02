import 'boxicons'
import './Login.css';

export default function Login() {

    return <div className='body2'>
        <div className='login'>
            <h1>Iniciar sesión</h1>
            <div className="input-box">
                <input type="text" placeholder="nombre_usuario" required></input><i class='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="contraseña" required></input><i class='bx bxs-lock-alt'></i>
            </div>
            <button type="submit" className="btn">Iniciar</button>
            <div className="register-link">
                <p>no tienes cuenta? <a href="#">Registrarse</a></p> 
            </div>
        </div>

    </div>
}