import './App.css';
import Header from './Components/Header/Header';
import Addtodo from './Components/Addtodo/Addtodo';
import Todolist from './Components/Todolist/Todolist';
import { useState } from 'react';

function App() {
    const [todo , setTodo] = useState([
        
    ])
    
  return (
    <div className="App">
        <Header/>
        <div className="block-app">
            <Addtodo todo={todo} setTodo={setTodo}/>  
        <Todolist todo={todo} setTodo={setTodo}/>  
        </div>
        
    </div>
  );
}

export default App;
