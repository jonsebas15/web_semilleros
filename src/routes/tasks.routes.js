const { Router } = require('express')
const {getTasksAll, postTask, deleteTask, putTask, getTasks} = require('../controllers/tasks.controllers')
const router = Router()

router.get('/task', getTasksAll);

router.get('/task/:id', getTasks);

router.post('/task', postTask);

router.delete('/task/:id', deleteTask);

router.put('/task/:id', putTask);

module.exports = router;
