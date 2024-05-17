const pool = require('../bs')

const getTasksAll = async (req,res)=>{
    try {
        const result = await pool.query('SELECT * FROM tienda.task')
        res.json(result.rows)
    } catch (error) {
        console.log(error.message)
    }
}

const getTasks = async (req,res)=>{
    try {
        console.log(req)
        const {id} = req.params
        const result = await pool.query('SELECT * FROM tienda.task where id=$1',[id])
        if (result.rows.length === 0){
            return res.status(404).json({message: "task not found"})
        }
        res.json(result.rows)
    } catch (error) {
        console.log(error.message)
    }
}

const postTask = async(req,res)=>{
    const {titulo, descripcion} = req.body

    try {
        const body = await pool.query('insert into tienda.task(titulo, descripcion) values($1, $2) returning *', [titulo, descripcion])
        res.json(body.rows[0])
    } catch (error) {
        console.log(error)
        res.json(error.message)
    }
}

const deleteTask = async(req,res)=>{
try {
    const {id} = req.params
    const result = await pool.query('DELETE FROM tienda.task where id=$1', [id])
    if (result.rowCount === 0) {
        return res.json(404,{message:'id not found'})
    }
    res.send(`eliminando la tarea con el id ${id}`)
} catch (error) {
    console.log(error.message)
}
    
}

const putTask = async(req,res)=>{
    try {
        const {titulo, descripcion} = req.body
        const {id} = req.params
        const result = await pool.query('UPDATE tienda.task set titulo = $1, descripcion = $2 where id = $3', [titulo, descripcion,id])
        if (result.rowCount === 0){
            return res.json(404,{message:'id not found'})
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getTasksAll,
    getTasks,
    postTask,
    deleteTask,
    putTask
}