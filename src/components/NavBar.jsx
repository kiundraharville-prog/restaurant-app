import { NavLink } from "react-router-dom";

function NavBar() {
return (
<nav>
<NavLink to="/">Home</NavLink> |{" "}
<NavLink to="/menu">Menu</NavLink> |{" "}
<NavLink to="/order">Order</NavLink> |{" "}
<NavLink to="/chatbot">Chatbot</NavLink>
</nav>
);
}

export default NavBar;