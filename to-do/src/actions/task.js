import * as TodoActionTypes from '../actiontypes/TodoActionTypes';

export const addTask = task => {
    return {
        type: TodoActionTypes.ADD_TASK,
        task   
    }
}

export const removeTask = index => {
    return {
        type: TodoActionTypes.REMOVE_TASK,
        index   
    }
}