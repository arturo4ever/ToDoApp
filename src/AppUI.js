import React from 'react';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import CreateTodoButton from './Components/CreateTodoButton';
import { TodoContext } from './ToDoContext/ToDoContext';

export default function AppUI() {
    return (
      <React.Fragment>
        <TodoCounter />
        <TodoSearch />
          <TodoContext.Consumer>
            {({ error,
              loading,
              searchedTodos,
              completeTodo,
              deleteTodo }) => (
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
              )}
            </TodoContext.Consumer>
        <CreateTodoButton />
      </React.Fragment>
  );
}