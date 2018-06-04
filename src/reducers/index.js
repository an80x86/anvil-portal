import { combineReducers } from 'redux'
import logincheck from './login_check'
import closeapp from './close_app'

export default combineReducers({
    logincheckResponse: logincheck,
    closeappResponse: closeapp
});