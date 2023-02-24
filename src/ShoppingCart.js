import React from 'react'
import "./css/cart.css"
function ShoppingCart() {
  return (
    <div className="checkout">
    <div className="checkout__left">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfiGXuaSt35S-M8ieCxawkwBfI0vaob2lFx7tkNSJ&s" className="checkout__ad"/>
    <div>
      <h3>Hello it's Saurabh</h3>
      <h2 className="checkout__title">
        Your shoppingBasket
      </h2>

       <div className="checkoutProduct">
        <img src="https://m.media-amazon.com/images/I/61dSLKKSWPL._AC_AA180_.jpg" className="checkoutProduct__img"/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
          Black Kurta For Men
          </p>
          <p className="checkoutProduct__price">
            <strong>
              Rs.690*1 = Rs.690
            </strong>
          </p>
          <button>Remove from Basket</button>
        </div>
       </div>
       <div className="checkoutProduct">
        <img src="https://m.media-amazon.com/images/I/61dSLKKSWPL._AC_AA180_.jpg" className="checkoutProduct__img"/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
          Black Kurta For Men
          </p>
          <p className="checkoutProduct__price">
            <strong>
              Rs.690*1 = Rs.690
            </strong>
          </p>
          <button>Remove from Basket</button>
        </div>
       </div>
       <div className="checkoutProduct">
        <img src="https://m.media-amazon.com/images/I/61dSLKKSWPL._AC_AA180_.jpg" className="checkoutProduct__img"/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
          Black Kurta For Men
          </p>
          <p className="checkoutProduct__price">
            <strong>
              Rs.690*1 = Rs.690
            </strong>
          </p>
          <button>Remove from Basket</button>
        </div>
       </div>
       <div className="checkoutProduct">
        <img src="https://m.media-amazon.com/images/I/61dSLKKSWPL._AC_AA180_.jpg" className="checkoutProduct__img"/>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
          Black Kurta For Men
          </p>
          <p className="checkoutProduct__price">
            <strong>
              Rs.690*1 = Rs.690
            </strong>
          </p>
          <button>Remove from Basket</button>
        </div>
       </div>
    </div>

    </div>
    <div className="checkout__right">
     <div className="subtotal">
      <p>
      Subtotal (2 item):<strong>Rs.799.00</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox"/>This order contains a gift
      </small>
     </div>
     <button>Proceed to checkout</button>

      
    </div>
    </div>
  )
}

export default ShoppingCart
