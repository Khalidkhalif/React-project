import { Container, Card, CardContent, Box, Button, Typography, SvgIcon, Grid } from '@material-ui/core';
import { ShoppingCart } from '@mui/icons-material';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../components/actions/cartActions';


 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <Container className="card" key={item.id}>
                        <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={4}>
                        <Card className="card-image">
                            <img src={item.img} alt={item.title}/>
                        
                            <CardContent className="card-content">
                                <Typography variant="h5">{item.title}</Typography>
                                <Typography variant="subtitle1">{item.desc}</Typography>
                                <Typography variant="subtitle1">Price: {item.price} kr</Typography>
                                <Button to="/" variant="contained" color="primary" onClick={()=>{this.handleClick(item.id)}}><SvgIcon component={ShoppingCart}/>Add</Button>
                            </CardContent>
                        </Card>
                        </Grid>
                        </Grid>
                 </Container>
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

