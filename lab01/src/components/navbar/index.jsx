import "./style.css";
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <nav>
          <ul>
            <li>
              <Link className="menu-items" to="/">Home</Link>
            </li>
            <li>
              <Link className="menu-items" to="/about">About</Link>
            </li>
            <li>
              <Link  className="menu-items" to="/contact">Contact</Link>
            </li>
            <li>
              <Link  className="menu-items" to="/products">Product</Link>
            </li>
          </ul>
        </nav>
    )
}
