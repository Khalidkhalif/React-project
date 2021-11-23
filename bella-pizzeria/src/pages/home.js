import { Container, Card, CardContent, Box, Button, Typography, SvgIcon, Grid } from '@material-ui/core';
import { ShoppingCart } from '@mui/icons-material';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../components/actions/cartActions';
import Page from '../../src/Page.css'
import { CardMedia } from '@mui/material';
import NavBar from '../components/Navbar';
import deliciouspizza from '../images/delicious.jpeg'


import CardActions from '@mui/material/CardActions';


import { CardActionArea } from '@mui/material';
import {ActionAreaCard} from '../components/ActionArea'

const Home =() => {
    return (
    
    
    <div>

        <Container align="center">
            <Typography variant="h1">Welcome to Bella Pizzeria!</Typography>
            <img src="../images/delicious.jpeg" />

        </Container>
    </div>
        )
}
export default Home;