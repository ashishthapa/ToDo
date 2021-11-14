const express = require('express');
const app = express();


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

app.get('/', (req, res) => {
    res.send('<h1>Hello Todo App!</h1>');
});

  
app.get('/api/v1/todo', (req, res) => {
})

app.put('/api/v1/todo/:id', (req, res) => {

});

const PORT = 3001
app.listen(PORT);
console.log(`Server running on port ${PORT}`);