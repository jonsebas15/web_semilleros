const { Router } = require('express')
const {getTasksAll, postTask, deleteTask, putTask, getTasks} = require('../controllers/tasks.controllers')
const {register, login, logout, profile, verifyToken} = require('../controllers/auth.controllers')  
const {authRequired} = require('../middlewares/validateToken')
const {registerSchema, loginSchema} = require('../schemas/auth.schema')
const {validateSchema} = require('../middlewares/validateSchema')
const {Correo} = require('../controllers/correo.controllers')
const router = Router()

router.get('/task', getTasksAll);

router.get('/task/:id', getTasks);

router.post('/task', postTask);

router.delete('/task/:id', deleteTask);

router.put('/task/:id', putTask);

router.post('/register', validateSchema(registerSchema), register);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile);

router.post('/verifyToken', verifyToken);

router.post('/correo', Correo);

module.exports = router;
