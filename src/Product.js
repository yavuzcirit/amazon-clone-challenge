import React from 'react'
import './Product.css'

const Product = ({title, image, price, rating, id}) => {

  const addtoBasket = () => {
    //dispatch the item into the Data Layer
    
  }

  return (
    <div id={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
          .fill()
          .map((_,i) => (
            <p>⭐</p>
          ))
          }
      </div>
      </div>     
      <img 
      src={image}
      alt=""
      />
      <button onClick={addtoBasket}>Add to Basket</button>
    </div>
  )
}

export default Product