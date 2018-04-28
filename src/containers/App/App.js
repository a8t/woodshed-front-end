import React, { Component } from 'react';
import ExerciseListContainer from '../ExerciseListContainer/ExerciseListContainer';
import ExerciseInput from 'components/ExerciseInput/ExerciseInput'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ExerciseInput />
        <ExerciseListContainer />
      </div>
    );
  }
}

export default App;
