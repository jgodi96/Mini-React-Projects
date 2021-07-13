import {useContext} from 'react';
import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCardButton(props) {
    const cartCtx = useContext(CartContext);
    const curNumber = 0

    // const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    //     return curNumber + item.amount;
    // });

    return (
        
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Gloria's</span>
            <span className={classes.badge}>5</span>
        </button>
    )
   
    }
export default HeaderCardButton
