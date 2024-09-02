import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db-hook";
import "./Shop.css";
const Shop = () => {
  const { add, clear, getAll, deleteRecord } = useIndexedDB("cart");

  const [note, setNote] = useState({ name: "", pid: "" });
  const [noteDb, setNoteDb] = useState({ name: "", pid: "" });

  useEffect(() => {
    getAll().then((personsFromDB) => {
      setNoteDb(personsFromDB);
    });
  }, []);

  const GetAll = () => {
    getAll().then((personsFromDB) => {
      setNoteDb(personsFromDB);
    });
  };
  const Add = () => {
    if (note.name.trim() !== "" && note.pid.trim() !== ""  ) {
      add({ name: note.name, pid: note.pid }).then(
        (event) => {
          GetAll();
        },
        (error) => {
          console.log("Error", error);
        }
      );
    }
  };

  const Delete = (id) => {
    deleteRecord(id).then((event) => {
      GetAll();
    });
  };

  const Clear = () => {
    clear().then(() => {
      setNoteDb([]);
    });
    setNote({ name: "", pid: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note, note.length);
  };
  return (
    <div className="container">
      <div className="form">
        <h2>IndexDB working</h2>
        <div className="text">
          <label className="label">Name</label> &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            onChange={onChange}
            name="name"
            type="text"
            value={note.name}
          ></input>
        </div>
        <div className="text">
          <label className="label">PrId</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            onChange={onChange}
            name="pid"
            type="text"
            value={note.pid}
          ></input>
        </div>
        <div className="button">
          <button className="btn btn-info" onClick={GetAll}>
            get all
          </button>
          <button className="btn btn-warning" onClick={Add}>
            add
          </button>
          <button className="btn btn-secondary" onClick={Clear}>
            clear
          </button>
       
        </div>
        <ul>
          {noteDb &&
            noteDb.length > 0 &&
            noteDb.map((e, i) => {
              return (
                <li> 
                  ID : {e.id} <br></br> Name : {e.name} <br></br> ProductId : {e.pid}{" "}<i onClick={()=>Delete(e.id)} class="bi bi-trash3"></i> <br></br>
                   </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
