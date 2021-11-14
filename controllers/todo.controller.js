
exports.getAllTodos = (req, res) => {
    res.json(todoList);
    res.send('Get all todo lists')
}

exports.updateTodo = (req, res) => {
    res.send('Update the status of one todo list');
}