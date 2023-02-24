import Header from "./Header.js";
import Product from "./Product.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ShoppingCart from "./ShoppingCart.js";
import commerce from "./lib/commerce.js";
import { useEffect, useState } from "react";
import Footer from "./footer.js";


function App() {
  const [productsList, setProductsList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [cart, setcart] = useState([]);

  const fetchProducts = async()=>{
    const response = await commerce.products.list();
    setProductsList(response.data);
  }
    const addToCart = async(prodId,qty)=>{
    const response = await commerce.cart.add(prodId,qty);
    setcart(response.cart)
  }

  const fetchCategories =async()=>{
    const response = await commerce.categories.list()
     setCategoryList(response.data);
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  
  
  return (
    <Router>
    <div className="App">
    <Header cart={cart} categoryList={categoryList}/>
    <Routes>
        <Route path="/" element={
          <div className="banner">
          <img src="https://m.media-amazon.com/images/I/71gbdEe+82L._SX3000_.jpg"/>
          <Product productsList= {productsList} addToCart={addToCart}/>
          <Footer/>
          </div>
           } />
           <Route path="/cart" element={
            <ShoppingCart/>
            } />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
