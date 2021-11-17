import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const TodoItem = ({todo, onTodoItemClick}) => {
    return (
        <TableRow className={ "li-todo "+todo.status}
          // onClick={() => onTodoItemClick(todo.id)}
           key={todo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {todo.id}
              </TableCell>
              <TableCell align="center">{todo.task}</TableCell>
              <TableCell className="status" align="center" onClick={() => onTodoItemClick(todo.id)}>{todo.status}</TableCell>
        </TableRow>
    )
}
export default TodoItem;