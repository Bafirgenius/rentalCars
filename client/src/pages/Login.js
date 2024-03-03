import React from 'react'
import { Grid, Box, TextField, Button, Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <Box className="login" >
      <Grid container>
        <Grid item md={8} sx={{ position: 'relative' }} >
          <Stack justifyContent={'center'}>
            <img width="100%" style={{}} src="image/blackcar.jpg" alt="blackcar" />
            <Stack direction={'row'} justifyContent={"center"} >
              <h1 className="" >Rental Cars</h1>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={4} sx={{ p: 5 }} >
          <form onSubmit={handleSubmit(onSubmit)} className="login-form" style={{ padding: '70px', marginTop: "100px" }} >
            <h1>Login</h1>
            <TextField sx={{ mt: 4, backgroundColor: '#333333', borderRadius: '5px' }} fullWidth id="outlined-basic" label="Email" variant="outlined" {...register("email", { required: true })} />
            <TextField sx={{ mt: 4, backgroundColor: '#333333', borderRadius: '5px' }} fullWidth id="outlined-basic" label="Password" type="password" variant="outlined" {...register("password", { required: true })} />
            <Stack sx={{ mt: 1 }}>
              {errors.email?.type === "required" && (
                <small style={{ color: "red", marginBottom: "3px" }} role="alert">Email is required</small>
              )}
              {errors.password?.type === "required" && (
                <small style={{ color: "red", marginBottom: "3px" }} role="alert">Password is required</small>
              )}
              <Button sx={{ mt: 5, mb: 5 }} variant="contained" type="submit">Login</Button>
              <br />
              <Link to="/register" >Not Registered? Click here to Register</Link>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Box >
  )
}

export default Login