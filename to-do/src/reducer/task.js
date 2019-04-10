import TodoActionTypes from '../actiontypes/TodoActionTypes';

const initialState = [
    { task: "learn redux" },
    { task: "review react lessons" },
    { task: "practice different concepts from react lessons" }
]

const Task = ( state=initialState, action ) => {
    switch(action.type) {
        case TodoActionTypes.ADD_TASK:
        return [
            ...state,
            { task: action.task }
        ];

        default: 
        return state;
    }
}

export default Task;