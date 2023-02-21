import React from 'react';
import '../Styles/TodoCounter.css';
import { TodoContext } from '../ToDoContext/ToDoContext';

export default function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} Tareas</h2>
    )
}
