import TodoActionTypes from '../actiontypes/TodoActionTypes';

export const addTask = task => {
    return {
        type: TodoActionTypes.ADD_TASK,
        task   
    }
}