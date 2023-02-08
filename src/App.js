/* import './App.css'; */
import React from 'react';
import AppUI from './AppUI';

const defaultTodos = [
  { name: "Dormir", completed: true },
  { name: "Comer", completed: false },
  { name: "Entrenar", completed: false },
  { name: "Lavadora", completed: false },
  { name: "Limpiar", completed: false },
]
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [search, setSearch] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length ;
  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
    let todoText = todo.name.toLowerCase(); 
    let searchText = search.toLowerCase();
    return todoText.includes(searchText); 
    }) 
  }

  const completeTodo = (name) => {
    const todoIndex = todos.findIndex(todo => todo.name === name);
    const newTodos= [...todos];
    newTodos[todoIndex] = {
      name: todos[todoIndex].name,
      completed: true
    };
    setTodos(newTodos);
  }

  const deleteTodo = (name) => {
    const todoIndex = todos.findIndex(todo => todo.name === name);
    const newTodos= [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI 
      completedTodos={completedTodos}
      todos={todos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      setTodos={setTodos}
    />
  )
}

export default App;
