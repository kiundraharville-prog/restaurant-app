import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { OrderForm } from "./components/OrderForm";
import Menu from "./pages/menu";

function Home() {
  return <h1>Welcome</h1>;
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </>
  );
}

export default App;