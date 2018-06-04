import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_FORGOT_USER, LOGIN_FORGOT_USER_CLOSE, LOGIN_ERROR_CLOSE } from './types'

export const emailChanged = (email) => {
    return(dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email.target.value
        })
    }
}

export const passwordChanged = (password) => {
    return(dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password.target.value
        })
    }
}

export const loginUser = ({email, password}) => {
    
    return (dispatch) => {
        dispatch({type: LOGIN_USER}); // login islemine basla loading'i baslat

        setTimeout(function() { 
            if (email==='' || password ==='') {
                alert('Her iki alanda dolu olmalı!');
            } else {
                if (email==='admin' && password ==='1') {
                    loginSuccess(dispatch, email)
                    window.location.href = "#/"
                } else {
                    loginFail(dispatch, email, password)
                }
            }
        }, 1000)
    }
}

export const forgotUser = () => {
    return(dispatch) => {
        dispatch({
            type: LOGIN_FORGOT_USER
        })
    }
}

export const forgotUserClose = () => {
    return(dispatch) => {
        dispatch({
            type: LOGIN_FORGOT_USER_CLOSE
        })
    }
}

export const CloseMsgError = () => {
    return(dispatch) => {
        dispatch({
            type: LOGIN_ERROR_CLOSE
        })
    }
}

const loginFail = (dispatch,email,password) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

const loginSuccess = (dispatch, email) => {
    localStorage.setItem('myData', email);

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: email
    })
}
