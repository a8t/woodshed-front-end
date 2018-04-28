import React from 'react';
import { Card } from 'semantic-ui-react';
import ExerciseCard from 'components/ExerciseCard/ExerciseCard';

const ExerciseList = props => {
    const { exercises, handleDeleteExercise } = props;
    return (
        <Card.Group>
            {exercises.map(each => ExerciseCard({ ...each, handleDeleteExercise }))}
        </Card.Group>
    );
};

export default ExerciseList;
