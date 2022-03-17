import React from 'react';
import classes from '../index.module.css';
import Login from "./Navbar-components/login";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const arrOfItems = useSelector(state => state.reducers.cart);
    let quantityOfItemsInCart = 0;

    arrOfItems.forEach((item) => quantityOfItemsInCart += item.quantity);

    return (
        <div className={classes.header}>
            <Login/>
            <div className={classes.navbar}>
                <Link to='/' className={classes.nav}>Goods</Link>
                <Link to='/about' className={classes.nav}>About us</Link>
                <Link to='/cart' className={classes.nav}>Cart {quantityOfItemsInCart ? '('+quantityOfItemsInCart+')': ''}</Link>
            </div>
        </div>
    );
};

export default Navbar;