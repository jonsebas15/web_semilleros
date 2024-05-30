const pool = require('../bs')

const register = async (req, res) => {
    const { nombre, codigo, correo, nombre_usuario, contraseña } = req.body

    try {
        const body = await pool.query('insert into tienda.usuario(nombre, codigo, correo, nombre_usuario, contraseña) values($1, $2, $3, $4, $5) returning *', [nombre, codigo, correo, nombre_usuario, contraseña])
        res.json(body.rows[0])
    } catch (error) {
        console.log(error)
        res.json(error.message)
    }
}


const login = async (req, res) => {
    const { nombre_usuario, contraseña } = req.body
    try {
        const body = await pool.query('insert into tienda.task(titulo, descripcion) values($1, $2) returning *', [titulo, descripcion])
        res.json(body.rows[0])
    } catch (error) {
        console.log(error)
        res.json(error.message)
    }
}


module.exports = {
    register,
    login
}