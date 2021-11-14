
let todolist = [
    {
        "id": 1,
        "task": "Brush Teeth",
        "status": "Done"
    },
    {
        "id": 2,
        "task": "Eat Breakfast",
        "status": "Done"
    },
    {
        "id": 3,
        "task": "Go To School",
        "status": "Done"
    },
    {
        "id": 4,
        "task": "Return Home",
        "status": "Done"
    },
    {
        "id": 5,
        "task": "Complete Assignment",
        "status": "Pending"
    }
]
exports.getAllTodos = (req, res) => {
    // res.send('Get all todo lists')
    res.json(todolist)
}

exports.updateTodo = (req, res) => {
    res.json(todolist);
    // res.send('Update the status of one todo list');
}