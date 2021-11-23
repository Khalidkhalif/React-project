import { Container, Card, CardContent, Box, Button, Typography, SvgIcon, Grid } from '@material-ui/core';
import { ShoppingCart } from '@mui/icons-material';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../components/actions/cartActions';
import Page from '../../src/Page.css'
import { CardMedia } from '@mui/material';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div class="container">
                    <Container key={item.id}>  
                    <Grid container spacing={2}>  
                    <Grid item xs={12} md={6} lg={3}>
                                     
                        <Card className="card" >
                        <CardMedia component="img" image={item.img} alt="green iguana" width="193" height="130"/>
                                
                                <CardContent  className="card-content">
                                    <Typography variant="h5">{item.name}</Typography>
                                    <Typography variant="body2">{item.ingredients}</Typography>
                                    <Typography variant="subtitle1">Price: {item.price} kr</Typography>
                                    <Button to="/" variant="contained" color="primary" onClick={()=>{this.handleClick(item.id)}}><SvgIcon component={ShoppingCart}/>Add</Button>
                                </CardContent>
                                
                            </Card>
                            </Grid>
                        </Grid>   
                            
                    </Container>
                 </div>
               
            )
        })

        return(
            <Container className="container">
                <Typography variant="h4">Our items</Typography>
                <Box className="box">
                    {itemList}
                </Box>
            </Container>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

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