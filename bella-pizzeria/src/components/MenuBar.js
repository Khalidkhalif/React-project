import React from "react";
import CustomBtn from "./CustomBtn";
import {Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";



const styles = makeStyles({
    bar:{
        paddingTop:"1.15rem",
        backgroundColor:"white",
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
function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky"  className={classes.bar}>
            <Typography variant="h6" className={classes.menuItem}>
            Home
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Menu
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Check out
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Contact us
            </Typography>
            <CustomBtn txt="Trial"/>
        </Toolbar>


    )
}

export default NavBar;
