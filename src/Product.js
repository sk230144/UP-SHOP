import React from 'react'
import "./css/product.css"
function Product({productsList,addToCart}) {
  return (
    <div className="products_wrap">
     {
      productsList.map((items)=>{
        return <div className="product" key={items.id}>
                    <img className="product__image" src={items.image.url}/>
                    <h3>{items.name}</h3>
                    <p>{items.price.formatted_with_symbol}</p>
                    <button onClick={()=>addToCart(items.id,1)}>Add to cart</button>
    </div>
      })}
    </div>
  )
}

export default Product
