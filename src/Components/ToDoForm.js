import React from 'react';
import { TodoContext } from '../ToDoContext/ToDoContext';
import '../Styles/ToDoForm.css';

function ToDoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { 
        addTodo,
        setOpenModal 
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onWrite = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (
        <form onSubmit={onAdd}>
            <label for='newtask' name='newtask'>Escribe una nueva tarea...</label>
                <textarea
                    name='newtask'
                    id='newtask'
                    value={newTodoValue}
                    onChange={onWrite}
                    placeholder='Encender la lavadora...'
                />
            <div className='TodoForm-buttonContainer'>
                <button type='button'
                    onClick={onCancel} 
                    className='TodoForm-button TodoForm-button-cancel'
                >
                    Cancelar
                </button>
                <button type='submit'
                className='TodoForm-button TodoForm-button-add'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {ToDoForm};