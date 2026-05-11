import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return[...prevTodos, { task: newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((todo) => todo.id != id));
    }

    return(
        <div>
            <input type="text" value={newTodo} onChange={updateTodoValue} placeholder="add a task" />
            <br /> 
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />

            <hr />
            <h4>Task Todo</h4>
            <br />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span> {todo.task} </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}