import React from 'react';
import './Cards.css';

function Cards({data,manageItems}){

    
    return(
       <div className='cards__container__main'>
        {data.map((item, index) =>(
            <Card key={index} item={item} manageItems={manageItems} />
        ))}
        </div> 
    )
}

function Card({item,manageItems}){
    return(
        <div className='card__container'>
           <div>{item.size}</div>
           <h3>{item.name}</h3>
           <p>{item.rating}</p>
           <p>{item.price}</p>
           <button onClick={(e)=>manageItems(e)}>{item.type}</button>
        </div>
    )
}

export default Cards;