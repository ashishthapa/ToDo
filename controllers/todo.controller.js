const fs = require('fs');
const path = './todoList.json';


exports.getAllTodos = async (req, res) => {
    try {
        fs.readFile(path, (error, data) => {
            if (error) { console.log(error); return; }
            res.json(JSON.parse(data.toString()));
        })
    } catch (err) { console.log(err); throw err; }
}

exports.updateTodo = (req, res) => {
    const id = req.params.id;
    try {
        fs.readFile(path, (error, data) => {
            if (error) { console.log(error); return; }
            
            let parsedToDos = JSON.parse(data.toString());
            parsedToDos[id - 1]['status'] = (parsedToDos[id - 1]['status'] === "Pending") ? "Done" : "Pending";
            
            fs.writeFile(path, JSON.stringify(parsedToDos, null, 2), (err) => {
                if (err) { console.log('Update Unsuccessful, Parsed todos: err', err); return; }
                res.json(JSON.parse(JSON.stringify(parsedToDos)));
            });
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
}

