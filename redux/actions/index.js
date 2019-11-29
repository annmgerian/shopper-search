import {
    SET_DATA, SET_DEPARTURE,SET_ARRIVAL
} from '../constants/action-types';

function setData(page) {
    return {
        type: SET_DATA,
        payload: page,
    };
}

function setDeparture(page) {
    return {
        type: SET_DEPARTURE,
        payload: page,
    };
}

function setArrival(page) {
    return {
        type: SET_ARRIVAL,
        payload: page,
    };
}

export {setData, setDeparture, setArrival};


