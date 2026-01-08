import React, { useState } from "react";

export default function Name() {
  const [name, setname] = useState("zoro");

  const handlechange = () => {
    if (name == "zoro") {
      setname("luffy");
    } else {
      setname("zoro");
    }
  };

  return (
    <div>
      <h1>{name}</h1>

      <button onClick={handlechange}>change</button>

      
    </div>
  );
}
