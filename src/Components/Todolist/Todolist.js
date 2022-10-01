import React from 'react'
import './Todolist.css';

function Todolist({todo, setTodo}) {
  function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id != id);
        setTodo(newTodo);
    }
    
    return (
        <div className="box-task">
            {todo.map(item => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <button className="but" onClick={() => deleteTodo(item.id)}>+</button>
                    
                </div>
            ))
            }
        </div>
    )
}

export default Todolist;


