import React from 'react';
import PropTypes from 'prop-types';

import { Card, Dropdown } from 'semantic-ui-react';

const ExerciseCard = props => {
    const { id, name, bpm, handleDeleteExercise } = props;
    const deleteThisExercise = () => handleDeleteExercise(id);
    return (
        <Card key={id}>
            <Card.Content>
                <Card.Header>
                    {name}
                    <Dropdown>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={deleteThisExercise}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Meta>Jan 12, 2018</Card.Meta>
                <Card.Description>{bpm} BPM</Card.Description>
            </Card.Content>
        </Card>
    );
};

ExerciseCard.prototypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bpm: PropTypes.number.isRequired
};

export default ExerciseCard;
