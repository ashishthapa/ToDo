const http = require('http');

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

const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(todoList))
});

const PORT = 3001
app.listen(PORT);
console.log(`Server running on port ${PORT}`);