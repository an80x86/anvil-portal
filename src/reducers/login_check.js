import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_FORGOT_USER, LOGIN_FORGOT_USER_CLOSE, LOGIN_ERROR_CLOSE } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    helper: false,
    error: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED: 
            return { ...state, email:action.payload} // action içindeki değeri type göre al ve replace et
        case PASSWORD_CHANGED:
            return { ...state, password:action.payload}
        case LOGIN_USER:
            return { ...state, loading:true }
        case LOGIN_USER_SUCCESS:
            return { ...state, loading:false }
        case LOGIN_USER_FAIL:
            return { ...state, loading:false, error:true }
            case LOGIN_FORGOT_USER:
            return { ...state, helper:true}
        case LOGIN_FORGOT_USER_CLOSE:
            return { ...state, helper:false}
        case LOGIN_ERROR_CLOSE:
            return { ...state, error:false}
        default:
            return state;
    }
}