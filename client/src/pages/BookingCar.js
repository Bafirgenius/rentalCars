import React, { useEffect, useState } from 'react'
import DefaultLayout from "../components/DefaultLayout"
import { Button, Grid, Stack, Box, Card, Typography, TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getCarById, order } from "../redux/actions";
import { useParams } from "react-router-dom";
import { formatRupiah } from "../helper";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useForm } from "react-hook-form"
import StripeCheckout from 'react-stripe-checkout';

const BookingCar = () => {
    const dispatch = useDispatch()
    const { car, loading } = useSelector(state => state.carsReducer)
    const [isPay, setIsPay] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getCarById(id))
    }, [])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const submitData = {
                ...data,
                car_id: car._id
            }
            dispatch(order(submitData, setIsPay))
        } catch (error) {
            console.log(error)
        }

    }
    function onToken(token) {
        console.log(token)
    }

    return (
        <DefaultLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <Card sx={{ mt: 3, p: 3 }} >
                            <Stack direction={'row'} spacing={3} >
                                <img height="180px" src={car.image} alt={car.car_name} />
                                <Stack direction={'column'} >
                                    <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} >{car.car_name}</Typography>
                                    <Stack direction={"row"} spacing={1} sx={{ mt: 2 }} >
                                        <MonetizationOnIcon />
                                        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }} >{formatRupiah(car.day_rate)} rent per day</Typography>
                                    </Stack>
                                    <Stack direction={"row"} spacing={1} sx={{ mt: 2 }} >
                                        <MonetizationOnIcon />
                                        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }} >{formatRupiah(car.month_rate)} rent per month</Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Card>
                        <Card sx={{ padding: 3, mt: 3 }}>

                            <TextField InputLabelProps={{ shrink: true }} sx={{ mt: 4, borderRadius: '5px' }} type="date" fullWidth id="outlined-basic" label="Pickup Date" variant="outlined" {...register("pickup_date", { required: true })} />
                            <TextField InputLabelProps={{ shrink: true }} sx={{ mt: 4, borderRadius: '5px' }} type="date" fullWidth id="outlined-basic" label="Dropoff Date" variant="outlined" {...register("dropoff_date", { required: true })} />
                            <TextField InputLabelProps={{ shrink: true }} sx={{ mt: 4, borderRadius: '5px' }} fullWidth id="outlined-basic" label="Pickup Location" variant="outlined" {...register("pickup_location", { required: true })} />
                            <TextField InputLabelProps={{ shrink: true }} sx={{ mt: 4, borderRadius: '5px' }} fullWidth id="outlined-basic" label="Dropoff Location" variant="outlined" {...register("dropoff_location", { required: true })} />
                        </Card>
                    </Grid>
                    <Grid item md={4} sx={{ mt: 3 }}>
                        <Card sx={{ padding: 4 }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', mb: 4 }} >
                                Total Price
                            </Typography>
                            <hr />
                            <Typography sx={{ fontSize: "18px", fontWeight: 'bold', mb: 4 }} >
                                {formatRupiah(car.day_rate)}
                            </Typography>
                            <Stack spacing={2}>
                                {errors.pickup_date?.type === "required" && (
                                    <small style={{ color: "red", marginBottom: "3px" }} role="alert">Pickup date is required</small>
                                )}
                                {errors.dropoff_date?.type === "required" && (
                                    <small style={{ color: "red", marginBottom: "3px" }} role="alert">DropOff date is required</small>
                                )}
                                {errors.pickup_location?.type === "required" && (
                                    <small style={{ color: "red", marginBottom: "3px" }} role="alert">Pickup location is required</small>
                                )}
                                {errors.dropoff_location?.type === "required" && (
                                    <small style={{ color: "red", marginBottom: "3px" }} role="alert">Dropoff location is required</small>
                                )}
                                {isPay && (<StripeCheckout
                                    token={onToken}
                                    amount={car.day_rate * 100}
                                    stripeKey="pk_test_51IOZfDFp6TxdgwSejMgCLZ6lKDrYke9UljkAEuDI6O0vgv4LFFJ6iUwZXWOoEGrebf7j8zjglF1qdMxpQxxWqhDu00afiCkkcT"
                                >
                                    <Button variant="contained">Pay</Button>
                                </StripeCheckout>)}
                                {!isPay && <Button type="submit" variant="contained">Continue</Button>}
                            </Stack>
                        </Card>
                    </Grid>

                </Grid>
            </form>
        </DefaultLayout>
    )
}

export default BookingCar