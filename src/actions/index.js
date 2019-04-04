import * as Types from '../constants/ActionTypes';

export const actIncrement = () => {
    return {
        type: Types.INCREMENT
    }
}
export const actIncrementAsync = () => {
    return dispatch => {
        dispatch({
            type: Types.INCREMENT_ASYNC
        });
        return setTimeout(
            () => {
                dispatch({
                    type: Types.INCREMENT
                })
            }
            , 3000
        )
    }
    
}
export const actDescrement = () => {
    return {
        type: Types.DESCREMENT
    }
}

export const actDescrementAsync = () => {
    return dispatch => {
        dispatch({
            type: Types.DESCREMENT_ASYNC
        });
        return setTimeout(
            () => {
                dispatch({
                    type: Types.DESCREMENT
                }) 
            }
            , 3000
        )
    }
    
}