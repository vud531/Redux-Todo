import React, { Component } from 'react';
import Form from '../components/Form'
import Task from '../components/Task'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ToDoActionTypes from '../actions/task';

class ToDoApp extends Component {


    render = () => {
        const { dispatch, tasks } = this.props;
        // console.log(this.props);
        console.log(tasks);
        const addTask = bindActionCreators(ToDoActionTypes.addTask, dispatch);
        const taskComponents = tasks.map((task, index) => (
            <Task 
            task={task}
            key={task + index}
            />
        ));
        console.log(taskComponents);
        return (
            <div className="todo-app">
                <Form addTask={addTask} />
                <div className="tasks">
                    { taskComponents }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state
    }
}
export default connect(mapStateToProps)(ToDoApp);