import React, { Component } from 'react';
import Form from '../components/Form'

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