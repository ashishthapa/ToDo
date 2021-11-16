const express = require('express');
var cors = require('cors')

const app = express();

/** Allow cors to all routes */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const todoController = require('./controllers/todo.controller');

app.get('/',  todoController.getAllTodos);
  
app.get('/api/v1/todo', (todoController.getAllTodos));

app.put('/api/v1/todo/:id', (todoController.updateTodo));

const PORT = 3001
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
module.exports = app;