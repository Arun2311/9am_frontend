import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GrocerryList() {
  const [item, setitem] = useState("");

  const [list, setlist] = useState([]);

  const handledata = (e) => {
    setitem(e.target.value);
  };

  useEffect(() => {
    handleget();
  }, []);

  const handleget = async () => {
    let apires = await axios.get("http://localhost:3000/todoList");
    setlist(apires.data);
    // console.log(apires.data);
  };

  const handladd = async () => {
    let body = {
      list: item,
    };

    let apires = await axios.post("http://localhost:3000/todoList", body);

    handleget();
  };

  const handledelete = async (id) => {
    let apires = await axios.delete("http://localhost:3000/todoList/" + id);

    handleget();
  };


  const handledit = async (data) =>{
    let editdata = prompt("enter u edited list" ,data.list)

    let body = {
      id : data.id,
      list : editdata
    }
    let apires = await axios.put("http://localhost:3000/todoList/"+data.id, body);

    handleget();


  }

  return (
    <div>
      <h1>Grocerry List</h1>

      <input onChange={handledata} placeholder="enter u r items" />
      <button onClick={handladd} type="button" class="btn btn-primary ms-3">
        Add{" "}
      </button>

      {list.map((da, i) => (
        <div key={i}>
          <h4>
            {i + 1}. {da.list}
          </h4>

          <button  onClick={() => handledit(da)} type="button" class="btn btn-secondary ms-3">
            edit{" "}
          </button>

          <button
            onClick={() => handledelete(da.id)}
            type="button"
            class="btn btn-danger ms-3"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}
