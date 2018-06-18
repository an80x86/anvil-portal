import { combineReducers } from 'redux';
import logincheck from './login_check';
import closeapp from './close_app';
import stationoperation from './station_operation';

export default combineReducers({
    logincheckResponse: logincheck,
    closeappResponse: closeapp,
    stationoperationResponse: stationoperation
});