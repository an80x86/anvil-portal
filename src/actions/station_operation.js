import { WAIT_SO, ALL_SO, SELECT_PAGE_SO } from './types';
import axios from 'axios';

export const getRecords = (seat) => {
    return (dispatch) => {
        dispatch({type: WAIT_SO}); // login islemine basla loading'i baslat

        dispatch({type: SELECT_PAGE_SO, payload: seat});

        axios.get('http://localhost:3004/stationoperations?_start='+((seat-1) * 10)+'&_limit=10')
        .then(function (response) {
            dispatch({
                type: ALL_SO,
                payload: response
            })
        });
    }
}