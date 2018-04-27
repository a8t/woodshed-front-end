import { combineReducers } from 'redux';

import { ADD_EXERCISE, DELETE_EXERCISE } from '../actions/exerciseActions';

const initialState = {
    exercises: [
        {
            name: 'Exercise 1: Scales and Modes',
            bpm: 90
        },
        {
            name: 'Exercise 2: Flexibility',
            bpm: 120
        },
        {
            name: 'Exercise 3: Improvisation',
            bpm: 144
        }
    ]
};

export function exercises(state = initialState.exercises, action) {
    switch (action.type) {
        case ADD_EXERCISE:
            return [
                ...state,
                {
                    name: action.newExercise.name,
                    bpm: action.newExercise.bpm
                }
            ];

        case DELETE_EXERCISE:
            const matchExercise = exercise =>
                exercise.name === action.deleteExercise.name &&
                exercise.bpm === action.deleteExercise.bpm;
            const indexOfExercise = state.findIndex(matchExercise);
            return [...state.slice(0, indexOfExercise), ...state.slice(indexOfExercise + 1)];

        default:
            return state;
    }
}

const exercisesReducers = combineReducers({
    exercises
});

export default exercisesReducers;
