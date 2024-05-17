const express = require('express');
const morgan = require('morgan')


const tasksroutes = require('./routes/tasks.routes')

const app = express();
app.use(morgan('dev'));
app.use(express.json())
app.use(tasksroutes)


app.listen(3000)
console.log("server port 3000")
