import { makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "../components/Navbar";


const useStyles = makeStyles({
    root:{
        background:'linear-gradient(45deg,#FE6B8B, #FF8E53',
        backgroundImage: 'images/background.jpeg',
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color:'white',
        padding: '5px 30px',
    }
})

const Home =() => {
    return (
    
    
    <div>
        <NavBar />
    </div>
        )
}
export default Home;