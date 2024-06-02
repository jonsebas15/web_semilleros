const validateSchema = (schema) => (req, res, next)=>{
    try {
        schema.parse(req.body)
    } catch (error) {
        return res.status(400).json({errors: error.errors.map(errores => errores.message)})
    }
    next()
}

module.exports = {
    validateSchema
}