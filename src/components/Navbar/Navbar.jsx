import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/commerce.png'
import makeStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = makeStyles();
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Omar's Commerce
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' &&
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="show cart items" color='inherit'>
                                <Badge badgeContent={totalItems.total_items} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
