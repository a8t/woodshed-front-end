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
                bpm: 120,
            });

            const expectedState = [
                {
                    id: '123',
                    name: 'test',
                    bpm: 120,
                },
            ];

            expect(stringify(exercises(initialState, addExerciseAction))).toBe(
                stringify(expectedState)
            );
        });
    });
    describe('EDIT_EXERCISE', () => {
        it('edits exercise', () => {
            const initialState = [{ id: '123', name: 'test', bpm: 120 }];

            const editExerciseAction = exerciseActions.editExercise('123', {
                name: 'hello',
                bpm: 134,
            });

            const expectedState = [{ id: '123', name: 'hello', bpm: 134 }];

            expect(stringify(exercises(initialState, editExerciseAction))).toBe(
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
                    bpm: 120,
                },
            ];

            const deleteExerciseAction = exerciseActions.deleteExercise('123');

            const expectedState = [];

            expect(stringify(exercises(initialState, deleteExerciseAction))).toBe(
                stringify(expectedState)
            );
        });
    });
});
