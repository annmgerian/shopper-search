import {
    SET_DATA, SET_DEPARTURE,SET_ARRIVAL
} from '../constants/action-types';

const initialState = {
    data: [],
    departurePoints:[],
    arrivalPoints:[],
};

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case SET_DATA:
            return {...state, data: action.payload};
        case SET_DEPARTURE:
            return {...state, departurePoints: action.payload};
        case SET_ARRIVAL:
            return {...state, arrivalPoints: action.payload};
        default:
            return state;
    }
}

export default rootReducer;
