import React, { useState, useEffect } from 'react'
import DefaultLayout from "../components/DefaultLayout"
import { useSelector, useDispatch } from "react-redux"
import { getAllCars } from "../redux/actions"
import { Button, Grid, Stack, Box, Pagination, Typography, InputBase, IconButton, Paper } from '@mui/material';
import { formatRupiah } from "../helper";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const navigate = useNavigate()

    const { cars, loading } = useSelector(state => state.carsReducer)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCars(page))
    }, [page])

    function handleSearch() {
        dispatch(getAllCars(page, search))
    }

    return (
        <DefaultLayout>
            <Box sx={{ minHeight: "700px", position: "relative" }} >
                <img src="/image/porsche.jpg" alt="mobil" width="100%" />
                <Stack direction={"column"} sx={{ position: "absolute", top: 10, left: 40 }}>
                    <Typography sx={{ fontSize: { lg: "100px", md: "50px", sm: "20px" }, fontWeight: "bold", color: "orangered" }} >
                        Your Journey,
                    </Typography>
                    <Typography sx={{ fontSize: { lg: "100px", md: "50px", sm: "20px" }, fontWeight: "bolder", color: "orangered" }} >
                        Your Car,
                    </Typography>
                    <Typography sx={{ fontSize: { lg: "100px", md: "50px", sm: "20px" }, fontWeight: "bold", color: "orangered" }} >
                        Your Way
                    </Typography>

                </Stack>
            </Box>
            <Stack direction={"row"} justifyContent={'flex-end'} sx={{ mt: 3, mr: 3 }} >
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Car Name"
                        inputProps={{ 'aria-label': 'search car name' }}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => {
                        handleSearch()
                    }}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Stack>
            <Grid container spacing={2} sx={{ mt: 3, mb: 4, pl: 3, pr: 3 }}>
                {
                    cars.data.map(car => {
                        return (
                            <Grid key={car._id} item lg={3} md={4} sm={6} xs={12}>
                                <Stack direction={'row'} justifyContent={'center'}>
                                    <Box className="car bs1" sx={{ p: 2 }}>
                                        <img className="carimg" src={car.image} alt={car.car_name} />
                                        <Stack direction="row" className="car-content" justifyContent={'space-between'} spacing={2}>
                                            <Box sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                                <p>{car.car_name}</p>
                                                <p>{formatRupiah(car.day_rate)} rent per day</p>
                                            </Box>
                                            <Stack direction={'row'} sx={{ alignItems: 'center' }} >
                                                <Button onClick={() => {
                                                    navigate(`/bookingcar/${car._id}`)
                                                }} variant="contained">Book Now</Button>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Grid>
                        )
                    })
                }

            </Grid>
            <Stack direction={'row'} justifyContent={"center"} sx={{ mb: 3 }} >
                <Pagination count={cars.totalPage} onChange={(e, value) => {
                    setPage(value)
                }} size="large" />
            </Stack>
        </DefaultLayout >
    )
}

export default Home