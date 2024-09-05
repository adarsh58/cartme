import React, { useState, useEffect, useContext } from "react";
import { useIndexedDB } from "react-indexed-db-hook";
import ProductContext from "../../Context/Product/ProductContext";

import "./IndexDb.css";
const IndexDb = () => {
  const { add } = useIndexedDB("cart");
  const { DeleteProduct, ClearAllProduct, GetAll, cart } =
    useContext(ProductContext);
  const [note, setNote] = useState({ name: "", pid: "" });

  useEffect(() => {
    GetAll();
  }, []);

  const Add = () => {
    if (note.name.trim() !== "" && note.pid.trim() !== "") {
      add({ name: note.name, pid: note.pid }).then(
        () => {
          GetAll();
        },
        (error) => {
          console.log("Error", error);
        }
      );
    }
  };

  const Delete = (id) => {
    DeleteProduct(id);
  };

  const Clear = () => {
    ClearAllProduct();

    setNote({ name: "", pid: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 ">
          {" "}
          <h2>IndexDB working</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label className="label">Name</label>
        </div>
        <div className="col-6 ">
          <input
            onChange={onChange}
            name="name"
            type="text"
            value={note.name}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          {" "}
          <label className="label">PrId</label>
        </div>

        <div className="col-6">
          {" "}
          <input
            onChange={onChange}
            name="pid"
            type="text"
            value={note.pid}
          ></input>
        </div>
      </div>
      <div className="row">
        {" "}
        <div className="button">
          <button className="btn btn-warning mx-3 my-3" onClick={Add}>
            add
          </button>
          <button className="btn btn-danger mx-3 my-3" onClick={Clear}>
            clear
          </button>
        </div>
      </div>
      <div className="row">
        {" "}
        <ul>
          {cart &&
            cart.length > 0 &&
            cart.map((e, i) => {
              return (
                <li>
                  ID : {e.id} <br></br> Name : {e.name} <br></br> ProductId :{" "}
                  {e.pid} <br></br> Quantity :{e.quantity}{" "}
                  <i onClick={() => Delete(e.id)} className="bi bi-trash3"></i>{" "}
                  <br></br>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default IndexDb;
