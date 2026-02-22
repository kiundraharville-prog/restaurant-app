import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/menu">Menu</Link>
    </nav>
  );
}

export default NavBar;