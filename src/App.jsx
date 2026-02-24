
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import "./Components/styles.css"
import Product from "./Components/product"
import Login from "./Components/Login"
import Cart from "./Components/Cart"
import Product1 from "./Components/Product1"
import Signup from "./Components/Signup"
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/products" element={<Product/>}/> */}
      <Route path="/product1" element={<Product1/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App
