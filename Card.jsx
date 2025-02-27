import React from 'react';
import '../styles/card.css'

const Card = ({ item,handleClick }) => {

  const {title,author,price,img}= item;
  return (
    <div className='cards'>
      <div className='img_box'>
  
        <img src={img} alt='img' /> 
      </div>
      <div className='details'>
       
        <h3>{title}</h3>
  
        <p>{author}</p>

        <p>Price:{price}Rs</p>
                
                <button onClick={()=>{handleClick(item)}}>Add to Cart</button>
        {/* Add more info like price, description, etc. */}
      </div>
    </div>
  );
}

export default Card;