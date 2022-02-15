import React from "react";
import { useState } from "react/cjs/react.development";
import Todo from "./Todo";
import Todoform from "./Todoform";

export default function TodoList(){

    // State array which hold all TODOS
    const [todos, setTodos] = useState([]);


    // Add todo to list
    const addTask = task =>{
        if(!task.text){
            return
        }

        const newTodos = [task,...todos]
        setTodos(newTodos);
    }

    //Remove todo from List
    const removeTask = id => {
        let updatedTasks = [...todos].filter(task => task.id !== id )
        setTodos(updatedTasks)
    }

    //Task is completed
    const completeTask = id => {
        let updatedTasks = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = true;
            }
            return todo;
        })
        setTodos(updatedTasks)
    }

    return <div>
        <Todoform addTask={addTask}></Todoform>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>

    </div>;
}