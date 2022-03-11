import React from 'react'
import "./Checkout.css"

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
        className="checkout__ad" 
        src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg"
        alt=""
        />
        <div >
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2>The Subtotal Will Go Here</h2>

        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>
    
    </div>
  )
}

export default Checkout