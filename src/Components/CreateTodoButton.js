import React from 'react';
import '../Styles/CreateTodoButton.css';

export default function CreateTodoButton({ todos, setTodos }) {
    return (
        <button 
        className='CreateTodoButton'
        onClick={() => {
            setTodos(todos.push())
        }}
        >
            +
        
        </button>
        )
}