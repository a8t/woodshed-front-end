import { connect } from 'react-redux';

import {
    deleteExercise,
} from '../../redux/actions/exerciseActions';

import ExerciseList from 'components/ExerciseList/ExerciseList';

function mapStateToProps(state) {
    return {
        exercises: state.exerciseReducers.exercises,
    };
}

function mapDispatchToProps(dispatch) {
    const handleDeleteExercise = (exerciseToDelete) => {
        dispatch(deleteExercise(exerciseToDelete));
    };

    return {
        handleDeleteExercise
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
