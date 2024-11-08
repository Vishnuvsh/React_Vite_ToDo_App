import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Ludo.css";

export default function Todo() {
  const [names, setNames] = useState("");
  const [namesData, setNamesData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState("");

  const handleNames = (e) => {
    console.log(e);

    e.preventDefault();
    // console.log("clicked");

    if (names.trim()) {
      const newName = {
        id: uuidv4(),
        name: names,
      };
      setNamesData([...namesData,newName]);
    } else {
      alert("enter a value");
    }
    setNames("");
  };
  console.log(namesData);
  console.log(names);

  const handleDeleteList = (id) => {
    // console.log(id);
    setNamesData(namesData.filter((item) => item.id !== id));
  };
  console.log(names);

  const handleEditName = (id) => {
    setIsEditing(true);
    // e.preventDefault()
    const editName = namesData.find((item) => item.id === id);
    // console.log(editName);

    setEditData(editName);
    setNames(editName.name);
  };

  const handleEditSave = (e) => {
    if (editData && names.trim() !== "") {
      const updateName = namesData.map(
        (item) =>
          item.id === editData.id
            ? { ...item, name: names } // Update only the matching item
            : item // Keep other items unchanged
      );
      console.log(updateName, "eee");
      setNamesData(updateName);
      setEditData("");
      setNames("");
      setIsEditing(false);
      e.preventDefault();
    }
  };

  return (
    <div>
      <h1 className="text-center">Todo List</h1>
      <div className="d-flex justify-content-center my-5">
      <form>
          <label htmlFor="reminder-text"><strong>Enter Your Name</strong></label>
          <br />
          <input
            type="text"
            name=""
            id="reminder-text"
            onChange={(e) => setNames(e.target.value)}
            value={names}
          />

          {isEditing ?(
             <button 
              type="submit"
              className="bg-black text-width border-0"
              onClick={handleEditSave}
            >
              Update                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
              </button>
          ) : (
             <button
              type="submit"
              className="butt bg-black text-white border-0"
              onClick={handleNames}
            >
              Add
            </button> 

          )}
        </form>
      </div><table
          style={{ border: "1px solid black" }}
          className="w-100 text-center "
        >
          <tr
            style={{ border: "1px solid black" }}
            className="bg-black text-white"
          >
            <th></th>
            <th>Name</th>
            <th>ID</th>
            <th></th>
            <th></th>
          </tr>
          {namesData &&
            namesData.map((item,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>
                  <button className="butt" onClick={() => handleEditName(item.id)}>Edit</button>
                </td>
                <td>
                  <button className="butt" onClick={() => handleDeleteList(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </table>
    </div>
  );
}










