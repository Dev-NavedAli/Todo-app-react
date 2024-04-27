import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos,setTodos] = useState([{ task:"sample-task",id: uuidv4(),isDone:false}]);
    let[newTodo,setNewTodo] = useState("");
    
    let addNewTask =()=>{
        setTodos((prevTodo)=>{
            return [...prevTodo,{ task: newTodo, id: uuidv4(),isDone:false}];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    };

    let deleteTodo=(id)=>{
        setTodos((prevTodo)=>todos.filter((prevTodo)=>prevTodo.id != id));
    }
    
    let MarkAllDone = ()=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true
            };
        })
    );
    };

    let MarkAsDone = (id)=>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    isDone:true
                    // task: todo.task.toUpperCase()
                };
            }else{
                return todo;
            }
        
    })
);
    };


    return(
        <div>
            <input
            placeholder="Add a task"
            value={newTodo}
            onChange={updateTodoValue} ></input>
            <br /><br />
            <button onClick={addNewTask}>Add a task</button><hr />
            <br /><br />
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span> &nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button> &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>MarkAsDone(todo.id)}>Mark As Done</button>

                        </li>
                        
                    ))
                }
            </ul>
            <button onClick={MarkAllDone}>Mark All Done </button>
            
        </div>
    )
}