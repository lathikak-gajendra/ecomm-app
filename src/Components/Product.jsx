import img1 from "../images/necklace.jpg"
import img2 from "../images/earrings.jpg"
import img3 from "../images/kurti.jpg"
import img4 from "../images/saree.jpg"
import img5 from "../images/short kurti.jpg"
import Header from "./Header"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
function Product(){
    const navigate=useNavigate();

    const handleAddToCart=()=>{
        const isLoggedIn=localStorage.getItem("isLoggedIn");
        if(isLoggedIn=="true"){
            navigate("/cart");
        }

        else{
            alert("please login first");
            navigate("/login");
        }
    };

    return(
        <>
        <Header/>
       <section className="products">
        <div  class="product">
       <img src={img1}  alt="necklace"/>
        <h3>Gold necklace</h3>
        <h4>Rs.20,000/-</h4>
        <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div class="product">
        <img src={img2}  alt="earrings"/>
        <h3>Gold earrings</h3>
        <h4> Rs.899/-</h4>
        <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div class="product">
        <img src={img3}   alt="kurti"/>
        <h3>Shorti Kurti</h3>
        <h4>Rs.978/-</h4>
        <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div class="product">
            <img src={img4} alt="saree"/>
            <h3>Kanchipuram saree</h3>
            <h4>Rs.3000/-</h4>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div class="product">
            <img src={img5} alt="short kurti"/>
            <h3>short kurti</h3>
            <h4>Rs.400/-</h4>
            <button onClick={handleAddToCart}>Add to cart</button>
            </div>
        </section>
       <Footer/>
        </>
    )
}
export default Product;