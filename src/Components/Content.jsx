import { Link } from "react-router-dom"

function Content(){
    return(
        <>
       <section className="content">
      <h2>Welcome to MyShop!</h2>
      <p>Find the best deals on top products</p>

      <Link to="/product1" className="btn">
        Shop Now
      </Link>
    </section>
    <section className="highlights">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>✅ High Quality Products</li>
        <li>✅ Best Price Guarantee</li>
        <li>✅ Fast & Secure Delivery</li>
        <li>✅ 24/7 Customer Support</li>
        <li>✅ Easy Returns & Refunds</li>
      </ul>
    </section>
        </>
    )
}
export default Content