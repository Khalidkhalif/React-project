import React, {useState} from "react";
import Menu from './pages/Menu';
import items from './components/Data';


const App = () =>   {

  const [menuItems] = useState(items);


   return (
    <main>
      <section className="menu section">
      <div className="name">
      <div className="underline"></div> 
      </div>

      <Menu items={menuItems} />



       </section>
    </main>
  
);

}

export default App;
