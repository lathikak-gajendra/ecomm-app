import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Product1(){
   

    const[product,setProduct]=useState([]);
    const navigate=useNavigate();


    useEffect(()=>{
        axios
       .get("https://dummyjson.com/products")
      .then(res => {
        setProduct(res.data.products);
      })
      }, [])
    
    
       const handleAddToCart=(p)=>{

        const isLoggedIn=localStorage.getItem("isLoggedIn");
        if(isLoggedIn=="true"){
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      cartData.push(p);
      localStorage.setItem("cart", JSON.stringify(cartData));

            navigate("/cart");
        }

        else{
            alert("please login first");
            navigate("/login");
        }
    };
    return(
        <>
        <Header />

      <section className="products">
        {product.map((p) => (
          <div className="product" key={p.id}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Category: {p.category}</p>
            <p>Price: ${p.price}</p>
           <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </section>

      <Footer />
        </>
    )
}
export default Product1