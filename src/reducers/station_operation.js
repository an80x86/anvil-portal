import { WAIT_SO, ALL_SO, SELECT_PAGE_SO } from '../actions/types';

const INITIAL_STATE = {
    response: [],
    pages: [],
    loading: false,
    error: false,
    seat: 0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case WAIT_SO:
            return { ...state, loading:true }
        case SELECT_PAGE_SO:
            return { ...state, seat: action.payload }
        case ALL_SO:
            const { headers, data } = action.payload;
            let temp = [];
            for (let i = 0; i < JSON.parse(JSON.stringify(headers).replace("x-total-count", "count")).count/10; i += 1) {
                temp[i] = (i+1);
            }        
            return { ...state, 
                    loading:false, 
                    response: data, 
                    pages: [...temp]
                }
        default:
            return state;
    }
}