import React, {useState} from 'react';
import Button from "@mui/material/Button";


function HookCounter(){
    const[items, setItems] = useState([])

    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 20) + 1
        }])
    }

    return(
        <div>
            <Button variant={"contained"} onClick={addItem}> Add Item</Button>
            <ul>
                {items.map(item => (<li key={item.id}>{item.value}</li>))}
            </ul>
        </div>
    )
}
export default HookCounter;