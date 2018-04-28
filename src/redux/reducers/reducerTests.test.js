import React from 'react';
import ReactDOM from 'react-dom';
import * as exerciseActions from 'redux/actions/exerciseActions';
import { exercises } from 'redux/reducers/exerciseReducers';

const stringify = JSON.stringify;

describe('Exercises reducers', () => {
    describe('ADD_EXERCISE', () => {
        it('adds exercise', () => {
            const initialState = [];

            const addExerciseAction = exerciseActions.addExercise({
                id: '123',
                name: 'test',
                bpm: 120
            });

            const expectedState = [
                {
                    id: '123',
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
                    id: '123',
                    name: 'test',
                    bpm: 120
                }
            ];

            const deleteExerciseAction = exerciseActions.deleteExercise('123');

            const expectedState = [];

            expect(stringify(exercises(initialState, deleteExerciseAction))).toBe(
                stringify(expectedState)
            );
        });
    });
});
