import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,Menu,MenuItem,Typography } from '@mui/material';
import { ShoppingCart } from '@material-ui/icons';
import { Link , useLocation} from 'react-router-dom';

import useStyles from './Styles';
import logo from '../../Assets/commerce.png'
    
const NavBar = (props) => {
    const styles = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar className={styles.appBar} position='fixed' color='inherit'>
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography variant='h6' className={styles.title} color='inherit'>
                            <img src={logo} alt='commerce.js' height='25px' className={styles.img} /> 
                            E-Commerce
                        </Typography>
                    </Link>
                    <div className={styles.grow} /> 
                    {
                        location.pathname === '/' && (
                        <div className={styles.button}>
                            <Link to="/cart">
                                <IconButton aria-label='show cart items' color='inherit'>
                                    <Badge badgeContent={props.totalItems} color='secondary'>
                                        <ShoppingCart></ShoppingCart>
                                    </Badge>
                                </IconButton>
                            </Link>
                        </div>)
                    }
                </Toolbar>
            </AppBar>

        </>
    );
};

export default NavBar;
