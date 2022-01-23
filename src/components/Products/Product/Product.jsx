import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './Styles'

const Product = ({ product,onHandleCartClick }) => {
    const styles = useStyles();

    // const product = props.product; destructuring the value from the props
    return (
        <Card className={ styles.root}>  
            <CardMedia className={styles.media} image={product.image.url} title={product.name}/>
            <CardContent>
                <div className={styles.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                < Typography dangerouslySetInnerHTML={{__html:product.description}}variant='h6' color='textSecondary'/>
            </CardContent>
            <CardActions disableSpacing className={styles.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={()=>onHandleCartClick(product.id,1)}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
