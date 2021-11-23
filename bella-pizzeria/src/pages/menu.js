import React from 'react'
import Grid from '@mui/material/Grid';

const Menu = ({ items }) => {
    return (
        
        <div className="section-center">
            <Grid container spacing={0}>
           {items.map((item) => {
               const { id, name, img, ingredients, price } = item;
               return (
                <article key={id} className="menu-item" > 
           
                <img src={img} alt={name} className="photo" width="193" height="130" />
                
                <button className="btn">Add to cart</button>
              
                <div className="info">
            
                    <header>
                        <h4>{name}</h4>
                        <h4 className="price">kr{price}</h4>
                    </header>
                    <p className="item-text">{ingredients}</p>
                    </div>
                
                    </article>
               );
         })} 
            </Grid>
        </div>
       
     );
};

export default Menu;