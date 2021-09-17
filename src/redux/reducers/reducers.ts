import { Reducer } from "redux";
import { FETCH, ERROR } from "../actions/actionTypes";

interface storeState{
    'Error'?: string,
    'City'?: string,
    'State'?: string,
    'Country'?: string,
    'TimeZone'?: string,
    'LocalTime'?: string,
    'Temp_C(°C)'?: number,
    'Condition'?: string,
    'WindSpeed(kph)'?: number,
    'Humidity(%)'?: number
}


interface fetchAction{
    type: typeof FETCH,
    payload: storeState
}

interface errorAction{
    type: typeof ERROR,
    payload: string
}

export type Actions = errorAction | fetchAction;

const initialState = {} as storeState;

export const fetchReducer:Reducer<storeState, Actions> = (state = initialState, action) => {
    switch(action.type){
        case FETCH:
            return action.payload;
        case ERROR:
            state = {
                Error: action.payload,
            };
            return state
        default:
            return state;
    }
}