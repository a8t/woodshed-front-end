import ExerciseCard from 'components/ExerciseCard/ExerciseCard';

const ExerciseList = props => {
    const { exercises, handleDeleteExercise } = props;
    return exercises.map(each => ExerciseCard({ ...each, key: each.id, handleDeleteExercise }));
};

export default ExerciseList;
