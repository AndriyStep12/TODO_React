import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import './Addtodo.css';

function Addtodo({todo, setTodo}) {
    
    const [value, setValue] = useState('')
    
    function saveTodo (){
        setTodo(
            [...todo,{
                id: uuid(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }
  return (
    <div className="box">
        <input type="text" value={value} onChange = {(e) => setValue(e.target.value)} />
        <button onClick={saveTodo} className="Add">Add</button>
    </div>
  );
}

export default Addtodo;
