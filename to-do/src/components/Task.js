import React from 'react';
import { removeTask } from '../actions/task';


const Task = props => {
    console.log(props);
    return (
        // <form >
        //     <input name="task" value={props.task} readOnly/>
        //     {/* <input type="submit" value="Add Task" /> */}
        //     {/* <button></button> */}
        // </form>
        <div>
            <span>{props.task}</span>
            <button onClick={() => props.removeTask(props.index)}>Delete</button>
        </div>
    )
}

export default Task;