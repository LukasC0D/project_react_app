import React, { useEffect, useRef, useState } from 'react';

import './ItemList.css';

let flexContainer = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

};

let inputW = {
  width: "100%",
};
let buttonW = {
  width: "35%",
};


const ItemList = () => {
  const [newItem, setNewItem] = useState({
    name: ''
  });
  const [items, setItems] = useState([]);
  const itemInput = useRef(null);
  const [itemErrorMsg, setItemErrorMsg] = useState("");

  useEffect(() => {
    const lsItems = localStorage.getItem("items");
    if (!lsItems) localStorage.setItem("items", JSON.stringify(items));
    else setItems(JSON.parse(lsItems));
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const deleteItem = (index) => {
    let filteredItems = items.filter((_, idx) => idx !== index);
    setItems(filteredItems);
  };

  const handleInput = (e) => {
    setNewItem({ name: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault()
  if ( itemInput.current.value === ""){
    setItemErrorMsg("Title cannot be blank")
    
  } else{
    setItemErrorMsg("")
  }

    console.log(newItem.name)
    if (newItem.name !== '') {
      setItems([...items, newItem]);
      setNewItem({ name: '' })
    }
    
  };


  return (
    <div style={flexContainer}>
      <div className="card w-25 text-bg-dark">
        <div className="card-body">
          <h2 className="text-center text-white">Enter item name</h2>
          <div className="row p-3">
            <form onSubmit={handleClick}>

            {itemErrorMsg && <div className="text-danger text-center pb-1"><i>{itemErrorMsg}</i></div>}

              <input
                id="input"
                type="text"
                className="form-control"
                style={inputW}
                ref={itemInput}
                onChange={handleInput}
                value={newItem.name}
              />
              <button className="btn btn-primary mt-2" style={buttonW}
              >
                <strong>Add + </strong> 
              </button>
            </form>
          </div>
          <ul style={{
            width:"90%",
            marginLeft:"15px",
            border:"1px solid red",
            }} className="list-group">
            {items.length > 0 ? (
              items.map((item, idx) => (
                <li key={idx} className="list-group-item text-primary"
                style={{
                borderBottom:"1px solid red",
                }}
                >
                  {item.name}
                  <button className="btn btn-danger float-end" onClick={() => { deleteItem(idx); }}>
                    <i style={{color:"black"}}>X</i>
                  </button>
                </li>
              ))
            ) : (
              <div className='ms-3 text-info'><i>No items yet!</i></div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemList;

