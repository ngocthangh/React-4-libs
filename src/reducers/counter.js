
import * as Types from '../constants/ActionTypes';

var initialState = {
    count: 0,
    isIncrementing: false,
    isDescrementing: false
}

const counter = (state=initialState, action) => {
    switch(action.type) {
        case Types.INCREMENT:
            console.log(action);
            state.count += 1;
            state.isIncrementing = false;
            return {...state};
        case Types.INCREMENT_ASYNC:
            state.isIncrementing = true;
            return {...state};
        case Types.DESCREMENT:
            state.count -=1;
            state.isDescrementing = false;
            return {...state};
        case Types.DESCREMENT_ASYNC:
            state.isDescrementing = true;
            return {...state};
        default: return {...state};
    }
}

export default counter;