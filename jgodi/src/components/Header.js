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
                <span class={classes["heading-primary-main"]}>Outdoors </span>
                <span class={classes["heading-primary-sub"]}>Long Beach, CA</span>
                </h1>

                <a href="#" className={`${classes.btn} ${classes["btn-white"]} ${classes["btn-animated"]}`}>Discover our tours</a>
                </div>
            </header>

            
        </div>
    )
}

export default Header;
