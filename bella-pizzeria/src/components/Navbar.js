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
        
        <Toolbar sx={{pb: 500}} position="sticky"  className={classes.bar}>
            <Container sx={{ ml: 28}}>
            <Link to="/"><Typography style={{color:"white"}} variant="h6" className={classes.menuItem}>
            Home
            </Typography></Link>
            </Container>

            <Container sx={{ ml: 28}}>
            <Link to="/menu"><Typography style={{color:"white"}} variant="h6" className={classes.menuItem}>
                Menu
            </Typography></Link>
            </Container>
    
            <Container sx={{ ml: 28}}>
            <Link to="/shoppingcart"><Typography style={{color:"white"}} variant="h6" className={classes.menuItem}>
                Your order
            </Typography></Link>
            </Container>
        </Toolbar>
        


    )
}

export default NavBar;

