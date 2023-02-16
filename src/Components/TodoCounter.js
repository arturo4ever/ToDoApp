import React from 'react';
import '../Styles/TodoCounter.css';

export default function TodoCounter({ completedTodos, totalTodos }) {
    return (
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} Tareas</h2>
    )
}
