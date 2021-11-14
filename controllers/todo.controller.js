let todoList = [
    {
      id: 1,
      task: "Brush Teeth",
      Status: "Done"
    },
    {
      id: 2,
      task: "Eat Breakfast",
      Status: "Done"
    },
    {
        id: 3,
        task: "Go To School",
        Status: "Done"
    },
    {
        id: 4,
        task: "Return Home",
        Status: "Done"
      },
      {
          id: 5,
          task: "Complete Assignment",
          Status: "Pending"
      }
  ]

exports.getAllTodos = (req, res) => {
    res.json(todoList);
}

exports.updateTodo = (req, res) => {
    res.send('Time to update the status');
}