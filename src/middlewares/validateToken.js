const jws = require('jsonwebtoken')
const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if(!token) return res.status(401).json({message:"no token, authorization denied"});

    jws.verify(token, "secret123", (err, user)=>{
        if(err) return res.status(401).json({message:"invalid user"})
        
        console.log(user)
        next()
    })
    
}

module.exports = {
    authRequired
}