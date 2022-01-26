import { Container, Grid, Typography,Button } from '@mui/material';
import React from 'react';
import CartItem from './CartItem/CartItem';
import useStyles from './Styles';
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom';


const Cart = ({ cart,handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart }) => {
    // const isCartEmpty = !;
    const styles = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle11'> oops!!! Cart seems to be empty, 
            <Link to='/' className={styles.link}> Try add some </Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {
                    cart.line_items.map((lineItem) => (
                        <Grid item xs={12} sm={4} key={lineItem.id}>
                            <CartItem item={lineItem}  onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                            {/* <div>{item.name}</div> */}
                        </Grid>
                    ))
                }
            </Grid>
            <div className={styles.cardDetails}>
                <Typography variant='h4'>subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={styles.emptyButton} color='secondary' type='button' size='large' variant='contained' onClick={()=>handleEmptyCart()}>Empty cart ?</Button>
                    <Button component={Link} to="/checkout" className={styles.checkoutButton} color='primary' type='button' size='large' variant='contained'>Checkout</Button>

                </div>
            </div>
        </>
    );

    //if the items are empty
    if (!cart.line_items) return 'Loading....';

    return (
        <Container>
        <div className={styles.toolbar} />
        <Typography variant='h2' className={styles.title} gutterBottom>Your Shopping Cart</Typography>
            {
                !cart.line_items.length ?<EmptyCart/> : <FilledCart/>
            }
        </Container>
  )
};

export default Cart;
