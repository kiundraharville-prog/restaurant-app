import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./pages/menu";
import OrderPage from "./components/OrderPage";
import Chatbot from "./components/Chatbot";

function App() {
return (
<>
<NavBar />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/menu" element={<Menu />} />
<Route path="/order" element={<OrderPage />} />
<Route path="/chatbot" element={<Chatbot />} />
</Routes>
</>
);
}

export default App;


;
