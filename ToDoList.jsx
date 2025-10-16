import React from 'react';
const ToDoList = () => {
    const tasks = ["Learn React","Build a project", "Read documentation"];
    return (
     <ul>
     <p>List:</p>
        {tasks.map((task ,index)=>(
            <li> {task} </li>
        ))}
    </ul>
    )
}
export default ToDoList;