import './App.css';
import {useState} from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Cards from './Components/Cards';

function App(){

  const [itemCount, setItemCount] = useState(0);

  const manageItems = (e) => {
    if(e.target.innerText === "Add to Cart"){
      addItem(e); 
    }
    else if(e.target.innerText === "Remove from Cart"){
      removeItem(e); 
    }
  }

  const addItem = (e) => {
    setItemCount(()=> itemCount+1);
    e.target.innerText = "Remove from Cart";
  }

  const removeItem = (e) => {
    setItemCount(()=> itemCount-1);
    e.target.innerText = "Add to Cart";
  }
  
  const data=[
    {
        size: "450 ✖ 300",
        name: "Fancy Product",
        rating: "3",
        price: "$50",
        type: "View Options"
    },
    {
        size: "450 ✖ 300",
        name: "Fancy Product",
        rating: "3",
        price: "$50",
        type: "Add to Cart"
    },
    {
        size: "450 ✖ 300",
        name: "Fancy Product",
        rating: "3",
        price: "$50",
        type: "View Options"
    },
]
  return(
    <div>
      <Navbar itemCount={itemCount} />
      <Header />
      <Cards data={data} manageItems={manageItems}/>
    </div>
  )
}

export default App;
