import React from 'react';
import '../Styles/TodoCounter.css';

export default function TodoCounter({ completedTodos, todos }) {
    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {todos.length} Tareas</h2>
    )
}
