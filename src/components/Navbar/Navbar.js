import React from "react"
import classes from "./Navbar.module.scss"
import hamburger from "../../assets/images/hamburger.svg"
import cart from "../../assets/images/cart.svg"
import bell from "../../assets/images/bell.svg"

const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <div>
                <img src={hamburger} alt="Navigation" />
            </div>
            <div>
                <img src={cart} alt="Cart" />
                <img src={bell} className={classes.Bell} alt="Bell" />
            </div>
        </nav>
    );
}

export default Navbar;

