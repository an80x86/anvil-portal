import { WAIT_SO, ALL_SO } from '../actions/types';

const INITIAL_STATE = {
    response: [],
    loading: false,
    error: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case WAIT_SO:
            return { ...state, loading:true }
        case ALL_SO:
            return { ...state, loading:false, response: action.payload }
        default:
            return state;
    }
}