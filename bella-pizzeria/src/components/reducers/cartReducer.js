import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'
import menu  from '../../components/Data'



const initState = {
    items: [
        { id: 1, name: 'Margherita', price: 129, img: "./images/Margarita.jpg", ingredients: 'Tomato base with mozzarella and oregano.'},
        { id: 2, name: 'Vegan Margherita ', price: 229,  img: "./images/VeganMargherita.jpg", ingredients: 'Tomato base with MozzaRisella and oregano.'},
        { id: 3, name: 'Stromboli', price: 179,      img: "./images/Stromboli.jpg", ingredients: 'Pepperoni and mozzarella on a tomato base.'}, 
        { id: 4, name: 'Vendura', price: 189,    img: "./images/Vendura.jpg", ingredients: 'Artichokes, mushrooms, roasted peppers, mozzarella and olives, dressed with rocket on a tomato base.'},
        { id: 5, name: 'Pollo E Pancetta', price: 199, img: "./images/PolloEPancetta.jpg", ingredients: 'Chicken, pancetta, sautéed mushrooms and mozzarella on a tomato base.'},
        { id: 6, name: 'Caprina', price: 239,    img: "./images/Caprina.jpg", ingredients: 'Goat’s cheese, rocket, plum tomatoes, olive tapenade and mozzarella on a tomato base.'},
        { id: 7, name: 'Vegan NoDuja Vegana', price: 189,  img: "./images/NodujaVegana.jpg", ingredients: 'Spicy No’duja, MozzaRisella, sautéed mushrooms, balsamic red onions, red pepper pearls and grated courgette on a tomato base.'},
        { id: 8, name: 'Salami Misti', price: 159, img: "./images/PrimaSalamiMisti.jpg", ingredients: 'Salami, pepperoni, smoked prosciutto, roasted peppers, balsamic red onions and mozzarella on a tomato base.'},
        { id: 9, name: 'Primavera Forever', price: 149, img: "./images/PrimaForever.jpg" , ingredients: 'A creamy white base topped with chicken breast, balsamic red onions, red pepper pearls, grated courgette, spinach and mozzarella.'},
        { id: 10, name: 'Natale', price: 169, img: "./images/NatalePizza.jpg", ingredients: 'Pulled turkey, crispy smoked prosciutto, smoked scamorza cheese, ricotta salata and mozzarella on a tomato base.'},
        { id: 11, name: 'Fettucine Bolognaise', price: 165, img:  "images/FettucineBolognaise.jpg", ingredients: 'Our hearty beef and red wine ragu is served with flat ribbon fettuccine, the way they eat it in Rome.'},
        { id: 12, name: 'Spaghetti Al Pomodoro', price: 139, img: "./images/SpaghettiPomodoro.jpg", ingredients: 'Plum tomatoes, garlic and basil in a rich tomato sauce topped fresh mozzarella.'},
        { id: 13, name: 'Linguine Carbonara', price: 199,  img: "./images/LinguineCarbonara.jpg", ingredients: 'Crispy pancetta in a creamy mascarpone and cheese sauce.'},
        { id: 14, name: 'Spaghetti Lentil Ragu', price: 169, img:  "images/SpagettiLentilRagu.jpg",  ingredients: 'A hearty ragu of green lentils and mixed vegetables in a sundried tomato sauce.'},
        { id: 15, name: 'Linguine con Frutti di Mare', price: 199, img: "./images/PennealPollaDellaCasa.jpg" , ingredients: 'King prawns, mussels, clams and squid in a rich tomato and white wine sauce.'},
        { id: 16, name: 'Spinach & Ricotta Girasole', price: 179, img:  "./images/Girasole.jpg",  ingredients: 'Meaning sunflower, these pretty pasta parcels are served with spinach and a mascarpone cream sauce' },
        { id: 17, name: 'Asparagus & Pancetta Carbonara', price: 169, img: "./images/AsparagusCarbonara.jpg", ingredients: 'Crispy pancetta and asparagus in a velvety mascarpone and cheese sauce, topped with crispy smoked prosciutto.'},
        { id: 18, name: 'King Prawn & Crayfish', price: 229, img: "./images/PrawnCrayfish.jpg", ingredients: 'King prawns and crayfish in a creamy seafood and tomato sauce with a hint of chilli, topped with a large king prawn in its shell.'},
        { id: 19, name: 'Purple Pesto Genovese', price: 239, img: "./images/PurplePestoGenovese.jpg", ingredients: 'Green pesto and cream sauce with fine green beans and pine nuts. Topped with purple pesto'},
        { id: 20, name: 'Beef Brisket Parpadelle', price: 249,   img: "./images/BeefParpadelle.jpg", ingredients: 'Pulled beef brisket & red wine ragu with sunblushed tomatoes and long flat ribbon pappardelle.'}

        ],
addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer