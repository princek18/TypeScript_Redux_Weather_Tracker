import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../..";
import { Actions } from "../reducers/reducers";
import { ERROR, FETCH } from "./actionTypes";

export const fetch = (city:string):ThunkAction<void, RootState, {}, Actions> => {
    return (dispatch) => {
        axios.get("https://api.weatherapi.com/v1/current.json?key=f8dafc0bda574e0bb4d154724201308&q=" + city)
        .then((response) => {
            const {location, current} = response.data;
            const {name, region, country, tz_id, localtime} = location;
            const {humidity, temp_c, wind_kph, condition} = current;
            const data = {
                City: name,
                State: region,
                Country: country,
                TimeZone: tz_id,
                LocalTime: localtime,
                'Temp_C(°C)': temp_c,
                Condition: condition.text,
                'WindSpeed(kph)': wind_kph,
                'Humidity(%)': humidity
            }
            dispatch({
                type: FETCH,
                payload: data
            })
        })
        .catch((error) => {  
            dispatch({
                type:ERROR,
                payload: error.message
            })
        })
    }
}