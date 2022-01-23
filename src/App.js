import React,{useState,useEffect} from 'react';
import './App.css';
import {commerce} from './lib/Commerce';
import { Navbar, Products,Cart } from './components';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({});
  
  //To fetch the product list 
  const fetchProducts = async()=>{
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  //To fetch the items added in the cart
  const fetchCart = async () => {
    const cartItems = await commerce.cart.retrieve();
    setCart(cartItems);
  }

  const handleCartClick = async (productId,productQuantity) => {
    const item = await commerce.cart.add(productId, productQuantity)
    
    setCart(item.cart);
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[])

  console.log(cart);
  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      {/* <Products products={products} onHandleCartClick={handleCartClick} /> */}
      <Cart cart={cart}/>
    </div>
  );
}

export default App;

