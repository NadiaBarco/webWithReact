import React from 'react';
import Grid from '@material-ui/core';
import Product from './Product/Product';



const products=[
    { id: 1, name:'Shoes', descriptions:'Running shoes.', price: $37 },
    { id: 2, name:'Shirts', descriptions:'Casual wear.',price: $13 },
    { id: 3, name:'Bells', descriptions:'Leather.', price: $3 },
    { id: 4, name:'Pants', descriptions:'Casual wear.', price: $7 }


];


const Products = () =>{
    <main>
        <Grid conatiner justify="center" spacing={5}>{/*Esto es de material ui*/}
            {
                products.map((product)=>{
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                })
            }
        </Grid>
    </main>
}


export default Products;