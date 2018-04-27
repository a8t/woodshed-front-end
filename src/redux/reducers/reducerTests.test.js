import React from 'react';
import ReactDOM from 'react-dom';
import * as exerciseActions from '../actions/exerciseActions';
import { exercises } from './exerciseReducers';

const stringify = JSON.stringify;

describe('Exercises reducers', () => {
    describe('ADD_EXERCISE', () => {
        it('adds exercise', () => {
            const initialState = [];

            const addExerciseAction = exerciseActions.addExercise({
                name: 'test',
                bpm: 120
            });

            const expectedState = [
                {
                    name: 'test',
                    bpm: 120
                }
            ];

            expect(stringify(exercises(initialState, addExerciseAction))).toBe(
                stringify(expectedState)
            );
        });
    });
    describe('REMOVE_EXERCISE', () => {
        it('removes exercise', () => {
            const initialState = [
                {
                    name: 'test',
                    bpm: 120
                }
            ];

            const deleteExerciseAction = exerciseActions.deleteExercise({
                name: 'test',
                bpm: 120
            });

            const expectedState = [];

            expect(stringify(exercises(initialState, deleteExerciseAction))).toBe(
                stringify(expectedState)
            );
        });
    });
});
