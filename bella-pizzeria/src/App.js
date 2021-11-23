import logo from './logo.svg';
import './App.css';
import { amber, teal } from '@mui/material/colors';
import CustomBtn from "./components/CustomBtn";

import {ThemeProvider, createTheme} from '@material-ui/core/styles';
import {makeStyles} from "@material-ui/core/styles";
import HookCounter from "./components/AddingFunction";
import ActionAreaCard from "./components/CardContent";

import Home from "./pages/home";
import data from './data';
import Main from './components/Main'
import Basket from "./components/Basket";
import {useState} from "react";


function App() {
    const useStyles = makeStyles({
        root:{
            background:'linear-gradient(45deg,#FE6B8B, #FF8E53',
            backgroundImage:'background.jpeg',
            border: 0,
            marginBottom: 15,
            borderRadius: 15,
            color:'white',
            padding: '5px 30px'
        }
    })
    const theme = createTheme({
        palette: {
            primary: teal,
            secondary: amber
        },
        typography:{
            fontFamily:['sans-serif']
        }
    });


    return (
        <ThemeProvider theme={theme}>

            <div className="App">

                <Home/>


                <h3>Pizzeria Bella</h3>
                <h4> Making people and pasta!</h4>
                <ActionAreaCard/>
                <HookCounter/>
            </div>
        </ThemeProvider>
    )
}

export default App;
    /*const{products} = data;
    const[cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find( x => x.id === product.id);

        if(exist) {
            setCartItems(cartItems.map(x => x.id === product.id ?{...exist, qty: exist.qty +1}: x))

        } else{
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
;
        if (exist.qty ===1){
            setCartItems(cartItems.filter((x) => x.id !== product.id));

    } else{setCartItems(cartItems.map((x)=>
    x.id === product.id ? {...exist, qty: exist.qty -1}: x))};
    return (
        <div className="App">
            <Main onAdd ={onAdd} products={products}></Main>
            <Basket onAdd ={onAdd} cartItems={cartItems}></Basket>
        </div>
    )}}
export default App;*/
