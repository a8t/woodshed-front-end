import { combineReducers } from 'redux';

import { ADD_EXERCISE, EDIT_EXERCISE, DELETE_EXERCISE } from 'redux/actions/exerciseActions';

const initialState = {
    exercises: [
        {
            id: 'dsf34D',
            name: 'Exercise 1: Scales and Modes',
            bpm: 90,
        },
        {
            id: '4rsdA',
            name: 'Exercise 2: Flexibility',
            bpm: 120,
        },
        {
            id: 'a4Fefd',
            name: 'Exercise 3: Improvisation',
            bpm: 144,
        },
    ],
};

export function exercises(state = initialState.exercises, action) {
    switch (action.type) {
        case ADD_EXERCISE: {
            return [
                ...state,
                {
                    id: action.newExercise.id,
                    name: action.newExercise.name,
                    bpm: action.newExercise.bpm,
                },
            ];
        }
        case EDIT_EXERCISE: {
            const { id, updatedExercise } = action;
            const matchExercise = eachExercise => eachExercise.id === id;
            const indexOfExercise = state.findIndex(matchExercise);
            return [
                ...state.slice(0, indexOfExercise),
                { id, ...updatedExercise },
                ...state.slice(indexOfExercise + 1),
            ];
        }
        case DELETE_EXERCISE: {
            const matchExercise = exercise => exercise.id === action.deleteExerciseId;
            const indexOfExercise = state.findIndex(matchExercise);
            return [...state.slice(0, indexOfExercise), ...state.slice(indexOfExercise + 1)];
        }
        default:
            return state;
    }
}

const exerciseReducers = combineReducers({
    exercises,
});

export default exerciseReducers;
