import { makeActionCreator } from 'utils/redux';

export const ADD_EXERCISE = 'ADD_EXERCISE';
export const addExercise = makeActionCreator(ADD_EXERCISE, 'newExercise');

export const EDIT_EXERCISE = 'EDIT_EXERCISE';
export const editExercise = makeActionCreator(EDIT_EXERCISE, 'id', 'updatedExercise');

export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const deleteExercise = makeActionCreator(DELETE_EXERCISE, 'deleteExerciseId');