import React,{useState,useEffect} from 'react';
import './App.css';
import {commerce} from './lib/Commerce';
import { Navbar, Products,Cart } from './components';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

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
    const {cart} = await commerce.cart.add(productId, productQuantity)
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId,productQuantity) => {
    const {cart} = await commerce.cart.update(productId,{productQuantity});
    setCart(cart)
    }

const handleRemoveFromCart = async (productId) => {
  const {cart} = await commerce.cart.remove(productId);
  setCart(cart);
}
  
  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
}
  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[])

  console.log(cart);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route path='/' element={<Products products={products} onHandleCartClick={handleCartClick} />}/>
          <Route exact path='/cart' element={<Cart cart={cart} 
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;

