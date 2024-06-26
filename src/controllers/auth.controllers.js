const pool = require('../bs')
//const bcrypt = require('bcryptjs')  ayuda a encriptar la contraseña, se usa antes de enviar la contraseña a la base de datos (await)
const createjwt = require('../libs/jwt')
const jws = require('jsonwebtoken')

const register = async (req, res) => {
    const { nombre, codigo, correo, nombre_usuario, contraseña } = req.body

    try {
        const body = await pool.query('insert into tienda.usuario(nombre, codigo, correo, nombre_usuario, contraseña) values($1, $2, $3, $4, $5) returning *', [nombre, codigo, correo, nombre_usuario, contraseña])
        //res.json({id:body.rows[0].id, nombre:body.rows[0].nombre ...})
        const user = body.rows[0]
        const token = await createjwt({ id: user.id })
        res.cookie("token", token)
        res.json({
            id: user.id,
            nombre: user.nombre,
            correo: user.correo
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}


const login = async (req, res) => {
    const { nombre_usuario, contraseña } = req.body
    try {
        const exists = await pool.query('SELECT EXISTS (SELECT 1 FROM tienda.usuario u WHERE nombre_usuario = $1 AND contraseña = $2);', [nombre_usuario, contraseña])

        if (!exists.rows[0].exists) {
            res.status(400).json({ message: "no se encontro el usuario" })
        } else {
            const body = await pool.query('select * from tienda.usuario where nombre_usuario = $1', [nombre_usuario])
            const user = body.rows[0].id
            const token = await createjwt({ id: user })
            res.cookie("token", token)
            res.json({ 
                menssage: "User successfully loggin in",
                nombre:body.rows[0].nombre
             })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

const logout = async (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

const profile = async (req, res) => {
    res.send(`profile, el nombre es ${req.user}`)
}
const verifyToken = async (req, res) => {
    const { token } = req.body
    console.log(token)
    if (!token) return res.status(401).json({ message: "unauthorized" });

    jws.verify(token, "secret123", async (err, user) => {
        if (err) return res.status(401).json({ message: "invalid user" });
        const usuario = await pool.query('select * from tienda.usuario where id=$1', [user.id])
        res.status(200).json({
            nombre:usuario.rows[0].nombre,
            correo:usuario.rows[0].correo,
            codigo:usuario.rows[0].codigo
        })
    })
}

module.exports = {
            register,
            login,
            logout,
            profile,
            verifyToken
        }