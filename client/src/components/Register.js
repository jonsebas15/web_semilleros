
export default function Register(){
    return <div className='body2'>
        <div className='login2'>
        <h1>Registro</h1>
        <div className="input-box2">
            <p>Nombre del estudiante</p><input type="text" placeholder="Nombre"></input>
        </div>
        <div className="input-box2">
            <p>Codigo del estudiante</p><input type="text" placeholder="codigo"></input>
        </div>
        <div className="input-box2">
            <p>correo del estudiante</p><input type="text" placeholder="correo"></input>
        </div>
        <div className="input-box2">
            <p>Nuevo usuario</p><input type="text" placeholder="nombre de usuario"></input>
        </div>
        <div className="input-box2">
            <p>Contraseña</p><input type="text" placeholder="contraseña"></input>
        </div>
        <div>
            <button type="submit"  className="btn">Registrarse</button>
        </div>
        </div>
        
        

    </div>
}