import React, { Component } from 'react';


export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    onTaskChange = event => {
        const task = event.target.value;
        this.setState({task:task})
    }

    render = () => {
        return (
            <form >
                <input 
                name="task" 
                value={this.state.task}
                placeholder="enter a task"
                onChange={this.onTaskChange} />
                <input type="submit" value="Add Task" />
            </form>
        )

    }
}

// export default Form;