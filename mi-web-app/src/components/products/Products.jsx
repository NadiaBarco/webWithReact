import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'



const products=[
    { id: 1, name:'Shoes', descriptions:'Running shoes.', price: '$37',image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tactics.com%2Fa%2F8r8c%2F9%2Fadidas-busenitz-pro-skate-shoes-black-white-gum.jpg&f=1&nofb=1' },
    { id: 2, name:'Shirts', descriptions:'Casual wear.',price: '$13', image:'https://www.digitalsport.com.ar/files/products/5c8176048360f-477769-500x500.jpg' },
    { id: 3, name:'Belt', descriptions:'Leather.', price: '$3', image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0QsPJyIGAVWx2AoP9Qb3cgHaHa%26pid%3DApi&f=1' },
    { id: 4, name:'Pants', descriptions:'Casual wear.', price: '$7', image:'https://cdnc.lystit.com/photos/6d75-2016/01/07/adidas-originals-blue-superstar-cuffed-track-pants-aj6961-product-0-942072293-normal.jpeg' }


];


const Products = () =>{

    const classes =useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolBar} />
            <Grid container justify="center" spacing={4}>{/*el grid es de material ui*/}
                { products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
    ))
            }
            </Grid>
        </main>
    );
    
}


export default Products;