import { WAIT_SO, ALL_SO } from './types';
import axios from 'axios';

export const getRecords = () => {
    return (dispatch) => {
        dispatch({type: WAIT_SO}); // login islemine basla loading'i baslat

        axios.get('http://localhost:3004/stationoperations')
        .then(function (response) {
            
            dispatch({
                type: ALL_SO,
                payload: response.data
            })
        });
    }
}