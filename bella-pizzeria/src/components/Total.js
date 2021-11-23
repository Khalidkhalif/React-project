import { Button, Container, List } from '@mui/material'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Total extends Component{

    componentWillUnmount() {
            if(this.refs.shipping.checked)
                this.props.substractShipping()
    }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
        
        return(
            <Container className="container">
                <Container className="collection">
                    <List className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Delivery(+60kr)</span>
                            </label>
                        </List>
                        <List className="collection-item"><b>Total: {this.props.total} kr</b></List>
                    </Container>
                    <Container className="checkout">
                    <Link to="/checkout" underline="none"><Button variant="contained" color="success" className="waves-effect waves-light btn">Checkout</Button></Link>
                    </Container>

                    
                 </Container>

                 
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)