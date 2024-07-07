const express = require('express');
const morgan = require('morgan');
const cookieParser= require('cookie-parser')
const cors = require('cors')

const tasksroutes = require('./routes/tasks.routes')

const app = express();

app.use(cors({
    origin: 'http://3.135.207.1:3000',
    credentials: true
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(tasksroutes)


app.listen(4000)
console.log("server port 4000")
