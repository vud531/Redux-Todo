import React, { Component } from 'react';
import Form from '../component/Form'

class ToDoApp extends Component {

    render = () => {
        return (
            <div className="todo-app">
                <Form />
            </div>
        )
    }
}

export default ToDoApp;