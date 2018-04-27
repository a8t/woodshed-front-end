import { combineReducers } from 'redux';
import exerciseReducers from './exerciseReducers';

const rootReducer =  combineReducers({exerciseReducers});

export default rootReducer;