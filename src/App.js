
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Shop from './component/Shop/Shop';
import Navbar from './component/Navbar/Navbar';
import ProductState from './Context/Product/ProductState';
function App() {
  return (
    <div className="Modcontainer">
      <BrowserRouter>
      <ProductState>
        <div className="containerchild">
      <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<div ><Home /></div>} />
            <Route exact path="/shop" element={<div >< Shop /></div>} />
          </Routes>
          </div>
        </ProductState>
      </BrowserRouter>

    </div>
  );
}

export default App;
