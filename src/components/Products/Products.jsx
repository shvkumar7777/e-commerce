import React from 'react';
import {Grid} from '@material-ui/core'

import Product from './Product/Product';
import useStyles from './Styles'

// const products = [{ id: 1, name: 'shoes', description: 'running shoes',price:10,image:'https://images.unsplash.com/photo-1642601361159-7b58d9055ccc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' },
// { id: 2, name: 'sandals', description: 'sandals',price:11,image:'https://images.unsplash.com/photo-1613579992589-02487515f4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' },
// {id:3,name:'nike',description:'running nike',price:12,image:'https://images.unsplash.com/photo-1642211840197-62e225801ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}]

const Products = ({products,onHandleCartClick}) => {
    const styles = useStyles();
    return <main className={styles.content}>
        <div className={styles.toolbar}></div>
        <Grid container justify='center' spacing={4}>
            {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onHandleCartClick={onHandleCartClick} />
                    </Grid>
            
                ))
            }
      </Grid>
  </main>;
};

export default Products;
