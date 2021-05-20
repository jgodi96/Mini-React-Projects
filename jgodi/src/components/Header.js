import React from 'react'
import classes from '../styles/Header.module.css'
import WhiteLogo from '../img/logo-white.png'

function Header() {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes['logo-box']}>
                    <img src={WhiteLogo} alt="Logo" className={classes.logo}></img>
                </div>
                <div className={classes["text-box"]}>
                <h1 class={classes["heading-primary"]}>
                <span class={classes["heading-primary-main"]}>Jgodi Beats </span>
                <span class={classes["heading-primary-sub"]}>Long Beach, CA</span>
                </h1>
                </div>
            </header>

            
        </div>
    )
}

export default Header;
