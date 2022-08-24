import React, { useEffect, useRef, useState } from 'react';

import './ItemList.css';

let flexContainer = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

let inputW = {
  width: "270px",
};
let buttonW = {
  width: "100px",
};


const ItemList = () => {
  const [newItem, setNewItem] = useState({
    name: ''
  });
  const [items, setItems] = useState([]);
  const itemInput = useRef(null);

  useEffect(() => {
    const lsItems = localStorage.getItem("items");
    if (!lsItems) localStorage.setItem("items", JSON.stringify(items));
    else setItems(JSON.parse(lsItems));
    // eslint-disable-next-line
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
    itemInput.current.value = "";


    console.log(newItem.name)
    if (newItem.name !== '') {
      setItems([...items, newItem]);
      setNewItem({ name: '' })
    }
  };

  return (
    <div style={flexContainer}>
      <div className="card w-25 text-bg-light">
        <div className="card-body">
          <h2 className="text-center">Enter item name</h2>
          <div className="row p-3">
            <form onSubmit={handleClick}>
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
                Add Item
              </button>
            </form>
          </div>
          <ul className="list-group">
            {items.length > 0 ? (
              items.map((item, idx) => (
                <li key={idx} className="list-group-item">
                  {item.name}
                  {/* prettier-ignore */}
                  <button className="btn btn-danger float-end" onClick={() => { deleteItem(idx); }}>
                    Delete
                  </button>
                </li>
              ))
            ) : (
              <div className='ms-3 text-danger'>No items yet!</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemList;

