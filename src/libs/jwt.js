const jwt = require('jsonwebtoken')

function createjwt(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(   //para separarlo en otra carpeta, hay que crear una funcion con parametro payload, y dentro otra funcion new promise()=>{ } para usar el async await
            payload,
            "secret123",
            { expiresIn: "1d", },
            (err, token) => {
                if (err) reject(err);
                resolve(token)
            }
        )
    });
}

module.exports = createjwt