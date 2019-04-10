import React from 'react';


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
            <button>Delete</button>
        </div>
    )
}

export default Task;