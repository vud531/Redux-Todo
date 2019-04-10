import React from 'react';


const Form = props => {
    return (
        <form >
            <input name="task" value="" placeholder="enter a task" />
            <input type="submit" value="Add Task" />
        </form>
    )
}

export default Form;