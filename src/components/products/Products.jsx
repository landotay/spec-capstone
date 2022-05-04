import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: 'https://www.popsci.com/uploads/2021/01/14/54BGRKCC7BEAPGZ3XAK5RHJF6M.jpg?auto=webp'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$10', image: 'https://www.cnet.com/a/img/resize/5f624f7c63102565c447663f085e95d00cb36953/hub/2015/04/07/b35f1174-696c-4d25-8a4f-fa16a2842338/macbook-air-gold-2015-16.jpg?auto=webp&fit=crop&height=675&width=1200'},
]

const Products = () => {
    const classes = useStyles()
    return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>

    )
}

export default Products;