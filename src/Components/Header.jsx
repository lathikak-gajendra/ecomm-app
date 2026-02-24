import { Link, useNavigate } from "react-router-dom";

function Header(){
    const name=localStorage.getItem("username");

    const navigate=useNavigate();

    // const handleLogout=()=>{
    //     localStorage.clear(); //delete all data from local storage
    //     navigate("/"); //redirect to home page
    // }

    const handleLogout=()=>{
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("cart"); // Clear cart on logout
        navigate("/");
    }
    return(
        <>
        <header>
        <h1>🛍️ KL University Shop</h1>
        
       
        <nav class="col">
            <Link to="/">Home</Link>
            <Link to="/product1">Products</Link>
            <Link to="/cart">Cart</Link>
        </nav>
        
       {name?<button className="logout" onClick={handleLogout}>Logout</button>:null} 
       

         <div id="user-display">
            {name ?`welcome,${name}` :""}
            </div> 
            {/* <div className="logout">
                <button className="logout" onClick={() => {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        window.location.href = "/";
        
      }}>Logout</button>
            </div> */}
        </header>
        </>
    )
}
export default Header