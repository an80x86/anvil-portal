import { CLOSE_APP } from '../actions/types';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CLOSE_APP: 
            return { ...state}
        default:
            return state;
    }
}