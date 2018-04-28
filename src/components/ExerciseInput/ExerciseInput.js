import React, { Component } from 'react';
import { Card, Form } from 'semantic-ui-react';

import { addExercise } from 'redux/actions/exerciseActions';
import store from 'redux/configureStore';

class ExerciseInput extends Component {
    state = { exerciseName: '', bpm: '' };

    resetForm = () => this.setState({ exerciseName: '', bpm: '' });

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleSubmit = () => {
        const { exerciseName, bpm } = this.state;
        store.dispatch(addExercise({ name: exerciseName, bpm }));
        this.resetForm();
    };
    render() {
        const { exerciseName, bpm } = this.state;

        return (
            <Card>
                <Card.Content>
                    <Form onSubmit={this.handleSubmit} size="small">
                        <Form.Group widths="2">
                            <Form.Input
                                label="Exercise Name"
                                value={exerciseName}
                                name="exerciseName"
                                placeholder="Exercise 48: Long Tones`"
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                label="BPM"
                                value={bpm}
                                name="bpm"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Button icon="add" />
                    </Form>
                </Card.Content>
            </Card>
        );
    }
}

ExerciseInput.propTypes = {};

export default ExerciseInput;
