import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,Menu,MenuItem,Typography } from '@mui/material';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './Styles';
import logo from '../../Assets/commerce.png'
    
const NavBar = (props) => {
    const styles = useStyles();
    return (
        <>
            <AppBar className={styles.appBar} position='fixed' color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={styles.title} color='inherit'>
                        <img src={logo} alt='commerce.js' height='25px' className={styles.img} /> 
                        E-Commerce
                    </Typography>
                    <div className={styles.grow} />   
                    <div className={styles.button}>
                        <IconButton aria-label='show cart items' color='inherit'>
                            <Badge badgeContent={props.totalItems} color='secondary'>
                                <ShoppingCart></ShoppingCart>
                            </Badge>
                        </IconButton>
                    </div>    
                </Toolbar>
            </AppBar>

        </>
    );
};

export default NavBar;
