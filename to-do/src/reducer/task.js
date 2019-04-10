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

        default: 
        return state;
    }
}

export default Task;