import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography,Button } from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';

import  useStyles from './style';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const classes= useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F20%2FAdidas_Logo.svg%2F1200px-Adidas_Logo.svg.png&f=1&nofb=1' alt="Commerce.js"  height="25px" className={classes.image}/>
                        Adidas Original
                    </Typography>
                    <div className={classes.grow}/>{/*este div es para tener mas espacio*/ }

                    <div className={classes.button}>
                        {/*<Link  to="/Login">Sign In</Link>  component={Link} remplaza esta linea  */}
                        <IconButton aria-label="short cart items" color="inherit" component={Link} to='/cart'>
                            <Badge badgeContent={1} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                        <Button variant="outlined" color="secondary" size="small" component={Link} to="/Login" >
                            Sing In
                        </Button>
                    </div>

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar
