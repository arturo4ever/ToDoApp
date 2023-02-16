import React from 'react';
import useLocalStorage from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
            item: todos,
            saveItem: saveTodos,
            loading,
            error
        } = useLocalStorage('TODOS_V1', []);
      const [search, setSearch] = React.useState('');
    
      const completedTodos = todos.filter(todo => todo.completed).length ;
      const totalTodos = todos.length;
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
        saveTodos(newTodos);
      }
    
      const deleteTodo = (name) => {
        const todoIndex = todos.findIndex(todo => todo.name === name);
        const newTodos= [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
    return (
        <TodoContext.Provider value={{
            completedTodos,            
            todos,
            search,
            setSearch,
            searchedTodos,
            completeTodo,
            deleteTodo,
            totalTodos,
            saveTodos,
            loading,
            error
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };