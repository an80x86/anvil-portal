import { WAIT_SO, ALL_SO, SELECT_PAGE_SO, ITEM_SO } from './types';
import axios from 'axios';

export const getRecords = (seat) => {
    return (dispatch) => {
        dispatch({type: WAIT_SO}); // login islemine basla loading'i baslat

        dispatch({type: SELECT_PAGE_SO, payload: seat});

        axios.get('http://localhost:3006/api/starships?offset='+((seat-1) * 10)+'&limit=10')
        .then(function (response) {
            dispatch({
                type: ALL_SO,
                payload: response
            })
        });
    }
}

export const getRecord = (id) => {
    return (dispatch) => {
        dispatch({type: WAIT_SO}); // login islemine basla loading'i baslat
        
        axios.get('http://localhost:3006/api/starships/'+id)
        .then(function (response) {
            dispatch({
                type: ITEM_SO,
                payload: response.data
            })
        });
    }
}
