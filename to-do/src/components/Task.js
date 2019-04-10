import React from 'react';


const Task = props => {
    return (
        <form >
            <input name="task" value="" placeholder="enter a task" readonly/>
            {/* <input type="submit" value="Add Task" /> */}
            {/* <button></button> */}
        </form>
    )
}

export default Task;