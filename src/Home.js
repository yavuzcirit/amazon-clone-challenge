import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        alt="backImage"
        />
        <div className="home__row">
          <Product 
            id="123234234"
            title=" Apple Airpods 3"
            price={99.99}
            image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_SL1500_.jpg"
            rating={5}
          />
          <Product 
            id="123234542"
            title="Apple iPhone 12 Mini (64GB, Purple) [Locked] + Carrier Subscription"
            price={399.99}
            image="https://m.media-amazon.com/images/I/71hVxI-Ed-S._FMwebp__.jpg"
            rating={4}
            />
        </div>
        <div className="home__row">
          <Product 
            id="1232342344"
            title="AmazonCommercial Blender, 67 oz, 1500 Watts"
            price={95.94}
            image="https://m.media-amazon.com/images/I/81HYYPvUbGL._SL1500_.jpg"
            rating={3}
            />
          <Product   
          id="123234234s4"
          title="Samsung Galaxy Tab S8+ Android Tablet, 12.4” Large AMOLED Screen, 128GB Storage, Wi-Fi 6E, Ultra Wide Camera, S Pen Included, Long Lasting Battery, Silver"
          price={99.99}
          image="https://m.media-amazon.com/images/I/81wWoHhfbjL._AC_SL1500_.jpg"
          rating={2}
          />
          <Product   
          id="123234sdf234"
          title=" 
          JBL FLIP 5, Waterproof Portable Bluetooth Speaker, Black (New Model)"
          price={109.99}
          image="https://m.media-amazon.com/images/I/71-JAjCgq2L._AC_SL1500_.jpg"
          rating={4}
          />
        </div>  
        <div className="home__row">
          <Product   
          id="3322dsdfv"
          title='Acer Aspire 5 A515-46-R3UB | 15.6" Full HD IPS Display | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | FPR | Amazon Alexa | Windows 11 Home in S mode'
          price={354.99}
          image="https://m.media-amazon.com/images/I/7189iXimfWL._AC_SL1500_.jpg"
          rating={1}
          />
        </div>
      </div>
    </div>
  )
}

export default Home