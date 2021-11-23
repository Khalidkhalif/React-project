import { Container, Typography } from '@material-ui/core';
import React from 'react';
import ActionAreaCard from '../components/ActionArea';



const Home =() => {
    return (
    
    
    <div>

        <Container align="center">
            <Typography variant="h1">Welcome to Bella Pizzeria!</Typography>
        </Container>

        <Container align="center">
            <Typography variant="h4" component="h1">“Life is a combination of magic and pasta.”</Typography>
        </Container>

        <ActionAreaCard/>
    </div>
        )
}
export default Home;