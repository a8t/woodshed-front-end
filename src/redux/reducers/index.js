import { combineReducers } from 'redux';
import exerciseReducers from 'redux/reducers/exerciseReducers';

const rootReducer = combineReducers({exerciseReducers});

export default rootReducer;