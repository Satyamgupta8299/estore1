import "./index.css";
import TopNav from "./components/TopNav";
import CatNav from "./components/CatNav";
import LandingPage from "./components";
import { Route,Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/productDetails" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}
export default App;