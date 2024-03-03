import React, { useState, useEffect } from 'react'
import { Stack, AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import { AccountCircle } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

const DefaultLayout = (props) => {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#2C2C2C' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography onClick={() => {
                        navigate('/')
                    }} variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }}>
                        Rental Cars
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} >Profile</MenuItem>
                                <MenuItem onClick={handleClose} >My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <div className="content" >
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout