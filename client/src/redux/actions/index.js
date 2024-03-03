import axios from 'axios'
import { GET_ALL_CARS, GET_CAR_BY_ID, LOADING } from "../constanst"

export const getAllCars = (page, search) => async dispatch => {
    dispatch({
        type: LOADING, payload: true
    })
    try {
        if (search) {
            const response = await axios.get(`/api/cars?page=${page}&search=${search}`)
            dispatch({ type: GET_ALL_CARS, payload: response.data })
            dispatch({ type: LOADING, payload: false })
        } else {
            const response = await axios.get(`/api/cars?page=${page}`)
            dispatch({ type: GET_ALL_CARS, payload: response.data })
            dispatch({ type: LOADING, payload: false })
        }
    } catch (error) {
        console.log(error)
        dispatch({ type: LOADING, payload: false })

    }
}
export const getCarById = (car_id) => async dispatch => {
    dispatch({
        type: LOADING, payload: true
    })
    try {
        const response = await axios.get(`/api/cars/${car_id}`)
        dispatch({ type: GET_CAR_BY_ID, payload: response.data })
        dispatch({ type: LOADING, payload: false })
    } catch (error) {
        console.log(error)
        dispatch({ type: LOADING, payload: false })

    }
}

export const order = (data, setIsPay) => async dispatch => {
    try {
        await axios.post(`http://localhost:5000/api/orders`, data)
        setIsPay(true)
    } catch (error) {
        console.log(error)
    }
}