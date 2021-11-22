
import { Container, Card, CardContent, Typography, Button, Box, SvgIcon } from '@material-ui/core';
import { RemoveShoppingCart, RemoveShoppingCartOutlined } from '@mui/icons-material';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Cart extends Component{

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <Container className="collection-item avatar" key={item.id}>
                                    <Card className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    
                                
                                    <CardContent className="item-desc">
                                        <Typography variant="h5">{item.title}</Typography>
                                        <Typography variant="subtitle1">{item.desc}</Typography>
                                        <Typography variant="subtitle1">Price: {item.price} kr</Typography>
                                        <Typography variant="subtitle2">Quantity: {item.quantity}</Typography>
                                        
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                                        </div>
                                        
                                        <Button variant="contained" color="primary" className="waves-effect waves-light btn pink remove"><SvgIcon component={RemoveShoppingCartOutlined}/>Remove</Button>
                                    </CardContent>
                                    </Card>
                            </Container>                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <Container className="container">
                <Box className="cart">
                <Typography variant="h5">You have ordered</Typography>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </Box>  
            </Container>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)