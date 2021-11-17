import './App.css';
import './components/TodoItem.component.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './components/TodoItem.component'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
    /**
     * State Setup
     */
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);


    const apiPath = "http://localhost:3001";
    const updatePath = `${apiPath}/api/v1/todo/`;


    const beforeAPIcall = () => {
        setIsLoading(true);
        setHasError(false);
    }

    const afterAPISuccess = () => {
        setIsLoading(false);
        setHasError(false);
    }

    const aferAPIFailure = () => {
        setIsLoading(false);
        setHasError(true);
    }


    useEffect(() => {
        beforeAPIcall();
        setTimeout(() => {
            axios.get(apiPath)
                .then(response => {
                    afterAPISuccess();
                    setTodos(response.data)
                }).catch((err) => {
                    aferAPIFailure();
                    console.log('error', err);
                });
        }, 5000)
    }, [])

    const getSingleTodo = (id) => {
        const todo = todos.find(n => n.id === id)
        let updatedTodo = Object.assign({}, todo, { status: todo['status'] === 'Done' ? 'Pending' : 'Done' })
        return updatedTodo;
    };

    const updateTodoList = (id) => {
        axios.put(`${updatePath}${id}`, getSingleTodo(id))
            .then(response => {
                setTodos(todos.map(todo => todo.id !== id ? todo : response.data))
            })
            .catch((err) => {
                console.log('error', err);
            });
    }

    return (
        <div className="App" >
            <div className="todo-list-component" >
                {hasError && <p class="error">Something went wrong.</p>}
                {isLoading ? (<p class="loader"></p>) : (
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead >
                                <TableRow >
                                    <TableCell > ID </TableCell>
                                    <TableCell align="center" > Task </TableCell>
                                    <TableCell align="center" > Status </TableCell>
                                </TableRow >
                            </TableHead>
                            <TableBody > {todos.map((todo) =>
                                (< TodoItem key={todo.id} todo={todo} onTodoItemClick={updateTodoList} />))
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>
        </div>
    );
}

export default App;