import {combineReducers} from 'redux';
import counter from './counter'

const appReducers = combineReducers({
    counter
});


export default appReducers;