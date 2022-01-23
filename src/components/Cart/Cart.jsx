import { Container, Grid, Typography,Button } from '@mui/material';
import React from 'react';
import useStyles from './Styles';

const Cart = ({ cart }) => {
    // const isCartEmpty = !;
    const styles = useStyles();

    const EmptyCart = () => {
        <Typography variant='subtitle11'> oops!!! Cart seems to be empty, Try add some</Typography>
    }

    const FilledCart = () => {
        return (
            <>
        <Grid container spacing={3}>
            {
                cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))
            }
            </Grid>
            <div className={styles.cardDetails}>
                <Typography variant='h4'>subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={styles.emptyButton} color='secondary' type='button' size='large' variant='contained'>Empty cart ?</Button>
                    <Button className={styles.checkoutButton} color='primary' type='button' size='large' variant='contained'>Checkout</Button>

                </div>
            </div>
            </>
        )
    }

    //if the items are empty
    if (!cart.line_items) return 'Loading....';

    return (
        <Container>
        <div className={styles.toolBar} />
        <Typography variant='h2' className={styles.title}>
            {
                !cart.line_items.length ?<EmptyCart/> : <FilledCart/>
            }
    </Typography>
        </Container>
  )
};

export default Cart;
