import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TodoItem from './TodoItem.component'
const todo = {
    id: 15,
    task: 'Combing the hair',
    status: 'Pending',
}

test(`renders a todolist item`, () => {


    const component = render(<TodoItem todo={todo} />)

    const div = component.container.querySelector('.li-todo');

    expect(div).toHaveTextContent('Combing the hair');
    expect(div).toHaveTextContent('Combing the hair');
    expect(div).toHaveTextContent('Pending');
    expect(div).toHaveTextContent(15);

});

test(`Further tests`, () => {
    
});

