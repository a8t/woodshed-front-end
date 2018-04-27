import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExerciseCard from '../ExerciseCard/ExerciseCard';

const ExerciseList = props => {
    const { exercises, handleDeleteExercise } = props;
    return exercises.map(each => ExerciseCard({ ...each, key: each.name, handleDeleteExercise }));
};

ExerciseList.prototypes = {
    name: PropTypes.string.isRequired,
    bpm: PropTypes.number.isRequired
};

export default ExerciseList;