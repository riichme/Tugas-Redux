import * as Counter from "./Constan"
export const increment = (value) => {
    return {
        // type : 'INC',
        type : Counter.INC,
        value: value 
    }
} 

export const decrement = (value) => {
    return {
        // type : 'DEC',
        type : Counter.DEC,
        value: value 
    }
} 

export const decrementWitchCheckingAction = (value) => {
    return (dispatch, getState) => {
        if (getState().Counter.count > 0) {
            dispatch (decrement(value));
        }
    }
}