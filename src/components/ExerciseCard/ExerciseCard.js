import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'semantic-ui-react';

const ExerciseCard = props => {
    const {name, bpm, handleDeleteExercise} = props;
    const deleteThisExercise = () => handleDeleteExercise({name, bpm});
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {name}
                </Card.Header>
                <Card.Meta>
                    Jan 12, 2018
                </Card.Meta>
                <Card.Description>
                    {bpm} BPM
                </Card.Description>
            </Card.Content>
            <Button icon='close' onClick={deleteThisExercise}/>
        </Card>
    );
};

ExerciseCard.prototypes = {
    name: PropTypes.string.isRequired,
    bpm: PropTypes.number.isRequired,
}

export default ExerciseCard;