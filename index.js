const express = require('express');
const app = express();

const todoController = require('./controllers/todo.controller');

app.get('/', (todoController.getAllTodos));
  
app.get('/api/v1/todo', (todoController.getAllTodos));

// app.put('/api/v1/todo/:id', (todoController.updateTodo));

const PORT = 3001
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
module.exports = app;