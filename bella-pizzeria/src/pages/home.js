import { Container, Card, CardContent, Box, Button, Typography, SvgIcon, Grid } from '@material-ui/core';
import { ShoppingCart } from '@mui/icons-material';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../components/actions/cartActions';
import Page from '../../src/Page.css'
import { CardMedia } from '@mui/material';
import NavBar from '../components/Navbar';

const Home =() => {
    return (
    
    
    <div>
        <NavBar />
    </div>
        )
}
export default Home;