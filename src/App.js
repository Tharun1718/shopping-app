
import './App.css';
import {useState} from 'react';
import { Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
function App() {
  const items = [
    {
      name: "Samsung Galaxy",
      price: "$200",
      rating: "⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/71qZERyxy6L.jpg"
    },
    {
      name: "Samsung Galaxy",
      price: "$200",
      rating: "⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/71qZERyxy6L.jpg"
    },
    {
      name: "Samsung Galaxy",
      price: "$200",
      rating: "⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/71qZERyxy6L.jpg"
    },
    {
      name: "Samsung Galaxy",
      price: "$200",
      rating: "⭐⭐⭐⭐",
      image: "https://m.media-amazon.com/images/I/71qZERyxy6L.jpg"
    }
  ]
  const navigate = useNavigate();
  return (
    <div className="App">
      <button onClick={()=>navigate("/home")}>Home</button>
      <button onClick={()=>navigate("/cartItems")}>Cart</button>
      <CardList items={items} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cartItems" element={<CartItems />} />
      </Routes>
    </div>
  );
}

function Home(){
  return(
    <div>
      <h1>Welcome to my home page</h1>
    </div>
  )
}

function CartItems(){
  return(
    <div>
      <h2>I am an cart page</h2>
    </div>
  )
}

function CardList({items}){
  return(
    <div className='card-list-container'>
      {items.map((item,index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  )
}

function Card({item}){
  // const item = {
  //   name: "Samsung Galaxy",
  //   price: "$200",
  //   rating: "⭐⭐⭐⭐",
  //   image: "https://m.media-amazon.com/images/I/71qZERyxy6L.jpg"
  // }
  const [cartList, setCartList] = useState([]);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return(
    <div className="card-container">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.rating}</p>
      <p>{item.price}</p>
      {show ? <button
      onClick={()=>{
        const newItem ={
          name: item.name,
          price: item.price,
          rating: item.rating,
          image: item.image
        };
        console.log(newItem);
        setCartList([...cartList,newItem]);
        console.log(cartList); // item has been added to the cartList array
        setShow(false)
        navigate("/cartItems")
      }}
      >Add to Cart</button> : null } 
    </div>
  )
}





export default App;
