import React from 'react';
import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import CreateTodoButton from './Components/CreateTodoButton';

export default function AppUI({
    completedTodos,
    todos,
    search,
    setSearch,
    searchedTodos,
    completeTodo,
    deleteTodo,
    setTodos
}) {
    return (
    <React.Fragment>
      <TodoCounter 
        completedTodos={completedTodos}
        todos={todos}
      />
      <TodoSearch 
        search={search}
        setSearch={setSearch}
      />
          <TodoList>
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
      <CreateTodoButton 
        todos={todos}
        setTodos={setTodos}
      />
    </React.Fragment>
  );
}