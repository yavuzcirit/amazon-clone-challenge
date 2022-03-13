import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider"

const Product = ({title, image, price, rating, id}) => {

  const [{basket}, dispatch] = useStateValue()

  console.log("this is the basket",basket)

  const addtoBasket = () => {
    //dispatch the item into the Data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating, 
      },
    })
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