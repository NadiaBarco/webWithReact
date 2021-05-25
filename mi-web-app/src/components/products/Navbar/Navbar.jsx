import React from 'react';
import {AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';

import  useStyles from './style';

const Navbar = () => {

    const classes= useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <ToolBar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZWYiN82mHKU%2Fmaxresdefault.jpg&f=1&nofb=1' alt="Commerce.js"  height="25px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow}/>{/*este div es para tener mas espacio*/ }

                    <div className={classes.button}>
                        <IconButton aria-label="short cart items" color="inherit">
                            <Badge badgeContent={3} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>

                </ToolBar>

            </AppBar>
        </div>
    )
}

export default Navbar
