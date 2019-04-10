import React, { Component } from 'react';
import Form from '../components/Form'
import Task from '../components/Task'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ToDoActionTypes from '../actions/task';

class ToDoApp extends Component {


    render = () => {
        const { dispatch, tasks } = this.props;
        console.log(this.props);
        const addTask = bindActionCreators(ToDoActionTypes.addTask, dispatch);

        return (
            <div className="todo-app">
                <Form addTask={addTask} />
                <div className="tasks">
                    {  }
                </div>
            </div>
        )
    }
}

export default ToDoApp;