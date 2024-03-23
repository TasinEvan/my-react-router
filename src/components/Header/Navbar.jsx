import { NavLink } from "react-router-dom";
import './user.css'

const Navbar = () => {
    return (
        <div>
            <h1>Hudai WebSite</h1>
            
              <nav>
                
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/bal'>bal</NavLink>
              <NavLink to='/contact'>Contact Us</NavLink>
              
              
              </nav>
            
        </div>
    );
};

export default Navbar;