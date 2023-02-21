import React from 'react';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import CreateTodoButton from './Components/CreateTodoButton';
import { TodoContext } from './ToDoContext/ToDoContext';
import {Modal} from './Components/Modal';
import { ToDoForm } from './Components/ToDoForm';

export default function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal 
  } = React.useContext(TodoContext);

    return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>ERROR...</p>}
          {loading && <p>Cargando...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer To Do...</p>}
          {searchedTodos.map( todo => (
            <TodoItem 
              key={todo.name}
              name={todo.name}
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.name)}
              onDelete={() => deleteTodo(todo.name)}
              />
            ))}
        </TodoList>
        {openModal && (
          <Modal>
            <ToDoForm />
          </Modal>
        )}
        <CreateTodoButton 
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </React.Fragment>
  );
}