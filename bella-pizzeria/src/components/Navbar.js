/*import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/menu">Shop</Link></li>
                        <li><Link to="/shoppingcart">My cart</Link></li>
                        <li><Link to="/shoppingcart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;*/

import React from "react";

import {Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";





const styles = makeStyles({
    bar:{
        paddingTop:"1.15rem",
        backgroundColor:"black",
        ['@media (max-width:780px)']:{
            flexDirection:"column"
        }
    },
    menuItem:{
        cursor:"pointer",
        flexGrow:1,
        "&hover":{
            color:"#4f25c8"
        },
        ['@media(max-width:780px']:{
            paddingBottom:"1rem"
        }
    }
})

const NavBar = ()=>{ 
    const classes = styles()
    return (
        
        <Toolbar position="sticky"  className={classes.bar}>
            <Container pr={5}>
            <Link to="/"><Typography style={{color:"white"}} variant="h6" className={classes.menuItem}>
            Home
            </Typography></Link>
            </Container>

            <Container pr={5}>
            <Link to="/menu"><Typography style={{color:"white"}} variant="h6" className={classes.menuItem}>
                Menu
            </Typography></Link>
            </Container>
    
            <Container pr={5}>
            <Link to="/shoppingcart"><Typography style={{color:"white"}} variant="h6" className={classes.menuItem}>
                Your order
            </Typography></Link>
            </Container>
        </Toolbar>
        


    )
}

export default NavBar;

