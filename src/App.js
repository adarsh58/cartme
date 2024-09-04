
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import IndexDb from './component/Demo/IndexDb';
import Navbar from './component/Navbar/Navbar';
import ProductState from './Context/Product/ProductState';
import Alert from './component/Alert/Alert';
import { useState } from 'react';
import Cart from './component/Cart/Cart';


function App() {
  const [alert,setAlert]=useState(false);
  const [message,setMessage]=useState("");
  const [type,setType]=useState("");

  const ShowAlert=(m,t)=>
  { setMessage(m);
    setType(t);
    setAlert(true);
    setInterval(() => {
      setAlert(false);
    }, 5000);
  }
  return (
    <div className="Modcontainer">
      <BrowserRouter>
      <ProductState>
        <div className="containerchild">
         <Navbar />
         {alert && <Alert m={message} t={type}/>}
          <Routes>
            <Route exact path="/" element={<Home ShowAlert={ShowAlert}/>} />
            <Route exact path="/home" element={<div ><Home ShowAlert={ShowAlert} /></div>} />
            <Route exact path="/cart" element={<div ><Cart/></div>} />
            <Route exact path="/index" element={<div >< IndexDb /></div>} />
          </Routes>
          </div>
        </ProductState>
      </BrowserRouter>

    </div>
  );
}

export default App;
