import React, { Component } from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';

class ExerciseCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        };
    }
    render() {
        const { exercises } = this.state;
        return exercises.map(each => <ExerciseCard name={each.name} bpm={each.bpm}/>);
    }
}

export default ExerciseCardList;