import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Page from '../../src/Page.css'

export default function ActionAreaCard() {
    return (
        <>
        <Container align="center">
        <Container class="container">
        <Card  sx={{ maxWidth: 720 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="400px"
                    margin-right="10px"
                    height="540px"
                    image="https://www.pizzagirlpatrol.com/wp-content/uploads/2020/04/where-to-eat-delicious-pizza-in-berlin-scaled.jpg"
                  />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Our authentic Italian pizza with four types of cheese
                    </Typography>
                    
                </CardContent>
            </CardActionArea>
        </Card>
        </Container>

        <Container class="container">
        <Card sx={{ maxWidth: 1000}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="540px"
                    image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1541092080%2Fpasta-with-italian-sunday-sauce-1812-p29.jpg%3Fitok%3DyKQ1tzJP"
                  />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Creamy Pasta with Tomato Sauce
                    </Typography>
                    
                </CardContent>
            </CardActionArea>
        </Card>
        </Container>
        </Container>
        
</>
    );
}