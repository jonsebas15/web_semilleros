const pool = require('../bs')
const jws = require('jsonwebtoken')
const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if(!token) return res.status(401).json({message:"no token, authorization denied"});

    jws.verify(token, "secret123", async(err, user)=>{
        if(err) return res.status(401).json({message:"invalid user"});
        const nombre = ((await pool.query('select nombre from tienda.usuario where id=$1',[user.id])).rows[0].nombre)
        req.user=nombre
        next()
    })
    
}

module.exports = {
    authRequired
}