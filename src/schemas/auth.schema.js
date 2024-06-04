const { z } = require('zod');

const registerSchema = z.object({
    nombre: z.string({
        required_error:'name is required'
    }),
    correo: z.string({
        required_error:'Email is required'
    }).email({
        message:'Invalid email'
    }),
    contraseña: z.string({
        required_error:'password is required'
    }), //.min(6, {message: "password must be at least 6 characters"})
    codigo:z.string({
        required_error:'codigo is required'
    }),
    nombre_usuario: z.string({
        required_error:'username is required'
    })
})

const loginSchema = z.object({
    nombre_usuario: z.string({
        required_error:'username is required'
    }),
    contraseña: z.string({
        required_error:'password is required'
    }), //.min(6, {message: "password must be at least 6 characters"})
})

module.exports = {
    registerSchema,
    loginSchema
}