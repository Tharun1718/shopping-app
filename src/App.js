
import './App.css';
import {useState} from 'react';

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
  return (
    <div className="App">
      <CardList items={items} />
    </div>
  );
}

function CardList({items}){
  return(
    <div className='card-list-container'>
      {items.map((item) => (
        <Card item={item} />
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

  return(
    <div className="card-container">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.rating}</p>
      <p>{item.price}</p>
      <button
      onClick={()=>{
        const newItem ={
          name: item.name,
          price: item.price,
          rating: item.rating,
          image: item.image
        };
        console.log(newItem);
        setCartList([...cartList,newItem])
        console.log(cartList); // item has been added to the cartList array
      }}
      >Add to Cart</button>
    </div>
  )
}



export default App;
