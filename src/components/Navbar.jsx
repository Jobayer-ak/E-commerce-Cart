import logo from "../assets/images/logo.jpg";
// import Cart from "./Cart";


function Navbar() {
  return (
    <>
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[70px] rounded-lg max-h-[70px]" />
        </a>

        <div className="flex gap-4">
          <a href="#home" className="navHome" id="lws-home">
            {' '}
            Home{' '}
          </a>
          <a href="cart.html" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </a>
        </div>
      </div>
      </nav>
      
      {/* <Cart/> */}
      </>
  );
}

export default Navbar;
