import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <span className='discount'><del>Rs. 2000</del></span>
            <p>Price - {price}Rs</p>
            <div className='items-add-to-cart'> 
              <button onClick={()=>handleClick(item)} className='Add-to-cart'>Add to Cart</button>
            <button onClick={()=>handleClick(item)}>
              Add to wishlist</button>
            </div>
           
        </div>
    </div>
  )
}

export default Cards