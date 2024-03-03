import { GET_ALL_CARS, GET_CAR_BY_ID } from "../constanst";
const initialData = {
    cars: [],
    car: {}
}

export const carsReducer = (state = initialData, action) => {
    switch (action.type) {
        case GET_ALL_CARS: {
            return {
                ...state,
                cars: action.payload
            }
        }
        case GET_CAR_BY_ID: {
            return {
                ...state,
                car: action.payload
            }
        }
        default:
            return state;
    }
}