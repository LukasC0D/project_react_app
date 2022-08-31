import React, { useEffect, useRef, useState } from 'react';

import './ItemList.css';

let flexContainer = {
  height: "60vh",
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
  const [editInput, setEditInput] = useState("")

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

  const handleEdit = (idx) => {
    const editedItems = JSON.parse(localStorage.getItem("items"));
    editedItems[idx].edited = true;
    setItems(editedItems);
    setEditInput(items[idx].name);
  }

  const submitEdit = (idx) => {
    if (editInput !== "") {
      const editedItems = JSON.parse(localStorage.getItem("items"));
      editedItems[idx] = { name: editInput, edited: false };
      setItems(editedItems)
    }
  }
  const handleEditInput = (e) => {
    setEditInput(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (itemInput.current.value === "") {
      setItemErrorMsg("Title cannot be blank")

    } else {
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
          <h2 className="text-center h2Mt text-white">Enter item name</h2>
          <div className="row p-5 ">
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
                <strong>Add+</strong>
              </button>
            </form>
          </div>
          <div >
            <ul style={{
              width: "80%",
              marginLeft: "10%",
            }} className="list-group">
              {items.length > 0 ? (
                items.map((item, idx) => (
                  <li key={idx} className="list-group-item text-primary"
                    style={{
                      borderBottom: "1px solid red",
                    }}
                  >
                    <div>

                      <div className=" d-flex justify-content-end">
                        <div className='fixBoxI'>
                          {item.edited ? (
                            <input
                              type="text"
                              value={editInput}
                              onChange={
                                handleEditInput}
                            />) : (
                            <div className='fixBox'>{item.name}</div>
                          )}
                        </div>
                        <div>
                          <button className='btn btn-danger' onClick={() => {
                            !item.edited ? handleEdit(idx) : submitEdit(idx);
                          }}>
                            {!item.edited ? "Edit" : "Submit"}
                          </button>
                        </div>
                        <div className='marginLeft'>
                          <button className="btn btn-danger" onClick={() => { deleteItem(idx); }}>
                            <i>X</i>
                          </button>
                        </div>

                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <div className='ms-3 text-info'><i>No items yet!</i></div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;

