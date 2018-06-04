import { CLOSE_APP } from './types'

export const LogoffApp = () => {
    localStorage.removeItem('myData');
    window.location.href = "#/login";
    return(dispatch) => {
        dispatch({
            type: CLOSE_APP
        })
    }
}
