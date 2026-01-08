import React, { useState } from "react";

export default function Product() {
  const [data, setdata] = useState([
    "luffy",
    "zoro",
    "sanji",
    "nami",
    "ussop",
    "chopper",
    "jimbei",
  ]);

  const [name, setname] = useState("zoro");

  const [details, setdetails] = useState([
    {
      name: "arun",
      age: 25,
    },
    {
      name: "ram",
      age: 25,
    },
    {
      name: "vicky",
      age: 25,
    },
  ]);

  return (
    <div>
      <h1>Data Shows</h1>

      {data.map((da, i) => (
        <div>
          <h1>
            {(i = i + 1)} {da}
          </h1>
        </div>
      ))}

      {details.map((d) => (
        <div>
          <h1>name : {d.name}</h1>
          <h3>age : {d.age}</h3>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}
