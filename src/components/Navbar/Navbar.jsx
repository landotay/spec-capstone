import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

const Navbar = () => {
  return (
    <div>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.AppBar} color='inherit'>
                    <img src={} alt='Downlowe Creek' height='25px' className={classes.image} />
                    Downlowe Creek
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar