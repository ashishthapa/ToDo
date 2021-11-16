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
    console.log('params', req.params);
    console.log('body', req.body);
    let id = Number(req.params.id);
    try {
        fs.readFile(path, (error, data) => {
            if (error) { console.log(error); return; }
            
            let parsedToDos = JSON.parse(data.toString());
            console.log('parsed', parsedToDos);
            let todoIndex = parsedToDos.findIndex((todo => todo.id === id));
            console.log('todoindex', todoIndex);
            if(todoIndex  < 0) {res.json('Index not found'); return; }

            // parsedToDos[todoIndex]['status'] = parsedToDos[todoIndex]['status'] === "Pending" ? "Done" : "Pending";
            parsedToDos[todoIndex] = req.body;
            console.log('Parsed looks like this', parsedToDos);
            fs.writeFile(path, JSON.stringify(parsedToDos, null, 2), (err) => {
                if (err) { console.log('Update Unsuccessful, Parsed todos: err', err); return; }
                // res.json(JSON.parse(JSON.stringify(parsedToDos)));
                res.json(JSON.parse(JSON.stringify(req.body)));
            });
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
}

