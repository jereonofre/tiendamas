import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
const NavBar = () => {
  return (
    <header>
        <h1>Tiendamas</h1>

        <nav>
            <ul>
                <li>Decoracion</li>
                <li>Electrodomesticos</li>
                <li>Jugueteria</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>

  )
}



export default NavBar;