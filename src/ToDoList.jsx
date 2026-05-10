import { useState } from "react";

export default function ToDoList(){
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

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
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>

    )
}