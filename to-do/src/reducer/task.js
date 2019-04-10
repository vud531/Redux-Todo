import * as TodoActionTypes from '../actiontypes/TodoActionTypes';

const initialState = [
    "learn redux",
    "review react lessons",
    "practice different concepts from react lessons"
]

const Task = ( state=initialState, action ) => {
    switch(action.type) {
        case TodoActionTypes.ADD_TASK:
        return [
            ...state,
            action.task
        ];
        case TodoActionTypes.REMOVE_TASK:
        // console.log(action.index)
        return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
        ];

        default: 
        return state;
    }
}

export default Task;