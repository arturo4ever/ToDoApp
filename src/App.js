import React from 'react';
import AppUI from './AppUI';
import { TodoProvider } from './ToDoContext/ToDoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
