import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/core';

import useStyles from './styles';


const Product = ({props}) => {
    return (
        <Card className="classes.root">
            <CardMedia className="{classes.media}" image='' title={product.name}/>
            <CardMedia>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                    <Typography variant="h2" color="textSecondary">
                        {product.descriptions}
                    </Typography>
                </div>
            </CardMedia>
            <CardActions disabledSpacing className={classes.CardActions}>
                    <IconBotton aria-label="Add to cart" >
                        <AddShoppingCart/>
                    </IconBotton>
            </CardActions>
        </Card>
    )
}

export default Product
