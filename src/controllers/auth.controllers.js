const pool = require('../bs')
//const bcrypt = require('bcryptjs')  ayuda a encriptar la contraseña, se usa antes de enviar la contraseña a la base de datos (await)
const createjwt = require('../libs/jwt')

const register = async (req, res) => {
    const { nombre, codigo, correo, nombre_usuario, contraseña } = req.body

    try {
        const body = await pool.query('insert into tienda.usuario(nombre, codigo, correo, nombre_usuario, contraseña) values($1, $2, $3, $4, $5) returning *', [nombre, codigo, correo, nombre_usuario, contraseña])
         //res.json({id:body.rows[0].id, nombre:body.rows[0].nombre ...})
        console.log(body.rows[0].id)
        const user = body.rows[0]
        const token = await createjwt({ id: user.id })
        res.cookie(token)
        res.json({id:user.id, 
            nombre:user.nombre,
            correo:user.correo})
        
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