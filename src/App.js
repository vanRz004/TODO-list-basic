import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  {
    text: 'cortar', completed: true
  },
  {
    text: 'cortar2', completed: false
  },
  {
    text: 'cortar3', completed: false
  },
  {
    text: 'cortar  4', completed: false
  },
]

function App() {

  return (
    <React.Fragment >
      <TodoCounter completed={16} total={25}  />
      <div className='new'>

      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todos) => 
        (  <TodoItem key={todos.text} text={todos.text} completed={todos.completed} />)
        
        )
        }
      </TodoList>
      <CreateTodoButton />

      </div>
    </React.Fragment>
  );
}



export default App;
