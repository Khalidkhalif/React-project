import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        /*{id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisi g elit. Minima, ex. price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetu d sicing elit. Minima, ex price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet co ctetipisicing elit. Minima, ex. price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor si  conse ur adipisicing elit. Minima, ex. price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amc cter adipis ng elit. Minima, ex price:90,img: Item6}*/
        { id: 1, name: 'Napoli', price: 199, img: "./images/napoli.png", igredients: 'Tomatosauce live, pecorino, capers, red chili, oregano'},
        { id: 2, name: 'Quatttro ', price: 229,  img: "./images/Quattro.png", ingredients: 'Tomato, mozz lla, asparagus, pancetta, mushroom, grana padano, strong salami, paprika'},
        { id: 3, name: 'Pesto', price: 179,      img: "./images/Pesto.png", ingredients: 'Ricotta eese, Buffalo mozzarella, grana padano, cherry tomato, asparagus'}, 
        { id: 4, name: 'Diavola', price: 189,    img: "./images/Diavola.png", ingredients: ' Grana Pa a cream, mozzarella, mushroom, ham, grana padona, truffle oil'},
        { id: 5, name: 'Margherita', price: 129, img: "./images/Margherita.png", ingredients: 'Tomato sa , cheese'},
        { id: 6, name: 'Vegetar', price: 239,    img: "./images/Vegetar.jpg", ingredients: 'Onions, p ers, mushrooms, corn, tomato slices, olives, parsley leaves'},
        { id: 7, name: 'Parallell', price: 189,  img: "./images/Parallell.jpg", ingredients: 'Minced meat, co sauce, Onions, Nacho chips'},
        { id: 8, name: 'Stortinget', price: 159, img: "./images/Stortinget.jpg", ingredients: 'Pepperoni, Ha Pineapple, Avocad'},
        { id: 9, name: 'Sara Speccial', price: 149, img: "./images/Sara spesial.jpg" , ingredients: 'Halv Creme iche,Halv Tomatsaus,Biff,kylling,Squash,Champignon'},
        { id: 10, name: 'Dronningen', price: 169, img: "./images/Dronni n.jpg", ingredients: 'ef, peppers, onions, mushrooms, squash'},
        { id: 11, name: 'Regina Margherita', price: 165, img:  "images/Regina Margherita.jpeg",  ingredients: 'San Marzano tomato,mozzarella fior di latte DOP La Sorrentina, marinated anchovies, olive Taggiasche, Peperoncino ch'},
        { id: 12, name: 'Bruschetta Felice', price: 139, img: "./images/Bruschetta.jpeg",     ingredients: 'A selection of bruschetta with cherry “pachino” tomato, pesto and “melanzane alla parmigiana'},
        { id: 13, name: 'Formaggi', price: 199,  img: "./images/Formaggi.jpeg", ingredients: 'Mozzarella f  di latte, Gorgonzola dolce, smoked Scamorza, Parmigiano 17 mth, parsle'},
        { id: 14, name: 'Arancine Sicliane', price: 169, img:  "images/Arancine Sicliane.jpeg",  ingredients: 'A selection of fried rice balls from Palermo with “Ragu” (bolognese sauce) and “Agli Spinaci'},
        { id: 15, name: 'Anatriciana ', price: 199, img: "./images/Anatriciana.jpg" , ingredients: 'Chow mein mein Chinese noodles Yakisoba Pancit, pasta, food, recipe, chinese Noodles  '},
        { id: 16, name: 'Cusine Fettuc', price: 149, img:  "./images/Cuisine Fettuc.png",  ingredients: 'paghetti on ro white plate, French fries Onion ring Poutine Garlic bread Recipe, pasta, food, cooking, american Food' },
        { id: 17, name: 'Salvi', price: 129,     img: "./images/Salvi.png", ingredients: 'pasta se d in bowl, Tagliatelle Fettuccine Alfredo Carbonara Pasta Pizza, spagetti pasta, cream, food, recipe'},
        { id: 18, name: 'Le vele del circeo', price: 179, img: " mages/Le vele del circeo.jpeg", ingredients: 'Pasta Italian cuisine Bolognese sauce Meatball Fra diavolo sauce, pasta, food, recipe, cuis'},
        { id: 19, name: 'Fettuccine altartufo', price: 239, img: "./images/Fettuccine altartufo.jpg", ingredients: ' pasta with sauce in bowl, Pasta Bolognese sauce Pizza Italian cuisine Caprese salad, spaghetti, food, recipe, tomat'},
        { id: 20, name: 'Padella', price: 249,   img: "./images/Padella.png", ingredients: 'Fried rice inese cuisine Paella Pizza Pasta, rice, food, recipe, chicken Meatballs'}
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