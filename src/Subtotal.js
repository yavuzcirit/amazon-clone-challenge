import React from 'react'
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
  return (
    <div className='"subtotal'>
      <CurrencyFormat 
      renderText={(value) => (
        <>
          <p>
            Subtotal (0 items): <strong>{}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={0} //do it later - set a funct 
      displayType={"text"}
      thousandSeparator={true}
      prefix={"£"}
      />
    </div>
  )
}

export default Subtotal