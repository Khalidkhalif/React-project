import { Box, Button, Card, CardContent, Container, SvgIcon, Typography, Grid } from '@material-ui/core';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { CardMedia } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../components/actions/cartActions'
import Total from '../components/Total'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
     //to add the quantity
     handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
  
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return( 
                        
                        <Container mb={3} className="collection-item avatar" key={item.id}>                       
                                <Card mb={3} className="card"> 
                
                                        <CardMedia component="img" image={item.img} alt="green iguana" width="193" height="130"/>
                                
                                    <CardContent className="card-content">
                                        <Typography variant="h5">{item.title}</Typography>
                                        <Typography variant="subtitle1">{item.desc}</Typography>
                                        <Typography variant="subtitle1">Price: {item.price} kr</Typography>
                                        <Typography variant="subtitle2">Quantity: {item.quantity}</Typography>
                                        
                                        
                                        <Button variant="contained" color="primary" className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}><SvgIcon component={RemoveShoppingCartOutlined}/>Remove</Button>
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
                <Total />
            </Container>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)