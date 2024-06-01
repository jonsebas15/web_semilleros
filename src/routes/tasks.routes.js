const { Router } = require('express')
const {getTasksAll, postTask, deleteTask, putTask, getTasks} = require('../controllers/tasks.controllers')
const {register, login, logout, profile} = require('../controllers/auth.controllers')  
const {authRequired} = require('../middlewares/validateToken')
const router = Router()

router.get('/task', getTasksAll);

router.get('/task/:id', getTasks);

router.post('/task', postTask);

router.delete('/task/:id', deleteTask);

router.put('/task/:id', putTask);

router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile)

module.exports = router;
