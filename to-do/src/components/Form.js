import React, { Component } from 'react';


export default class Form extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            task: ''
        }
    }

    onTaskChange = event => {
        const task = event.target.value;
        this.setState({task:task})
    }

    onTaskSubmit = event => {
        if (event){
            event.preventDefault();
        }

        this.props.addTask(this.state.task);
        this.setState({task: ''});
    }

    render = () => {
        return (
            <form onSubmit={this.onTaskSubmit}>
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