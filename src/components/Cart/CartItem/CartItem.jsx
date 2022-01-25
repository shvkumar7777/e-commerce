import React from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { useState } from 'react';

import useStyles from './Styles';
import { Button } from '@mui/material';

const CartItem = ({ item,onUpdateCartQty,onRemoveFromCart }) => {
    
    const styles = useStyles();
     console.log(item);

    
    return (
        <Card className="cart-item">
        <CardMedia image={item.image.url} alt={item.name} className={styles.media} />
        <CardContent className={styles.CardContent}>
            <Typography variant="h4"> {item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={styles.CardActions}>
            <div className={styles.buttons} >
                <Button type='button' size='small' onClick={()=>onUpdateCartQty(item.id,item.quantity - 1)}>-</Button>
                <Typography> {item.quantity}</Typography>
                <Button type='button' size='small' onClick={()=>onUpdateCartQty(item.id,item.quantity + 1)}>+</Button>    
            </div>
            <Button type='button' variant='contained' color='secondary'onClick={()=>{onRemoveFromCart(item.id)}}>REMOVE</Button>
        </CardActions>
        </Card>
    )
};

export default CartItem;
